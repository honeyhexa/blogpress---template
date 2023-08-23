/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import {
  MdFolderOpen,
  MdOutlineArticle,
  MdOutlineCategory,
  MdOutlineHistoryEdu,
} from "react-icons/md";
import { FaHashtag } from "react-icons/fa";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { media } from "sanity-plugin-media";
import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from "@/lib/sanity/sanity.api";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import Iframe, {
  defineUrlResolver,
  IframeOptions,
} from "sanity-plugin-iframe-pane";
import { previewUrl } from "sanity-plugin-iframe-pane/preview-url";
import { post, author, category, tag } from "@/lib/sanity/schemas/documents";

import { vercelDeployTool } from "sanity-plugin-vercel-deploy";
import { draftReviewPluginV3 } from "sanity-plugin-draft-review-v3";

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || "Blog Press";

export const PREVIEWABLE_DOCUMENT_TYPES = [post.name] satisfies string[];

export const PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS = [
  post.name,
] satisfies typeof PREVIEWABLE_DOCUMENT_TYPES;

// Used to generate URLs for drafts and live previews
export const PREVIEW_BASE_URL = "/api/draft";

export const urlResolver = defineUrlResolver({
  base: PREVIEW_BASE_URL,
  requiresSlug: PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS,
});

export const iframeOptions = {
  url: urlResolver,
  urlSecretId: previewSecretId,
} satisfies IframeOptions;

export default defineConfig({
  basePath: "/studio",
  projectId: projectId || "",
  dataset: dataset || "",
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      // home,
      // settings,
      // Documents
      post,
      author,
      category,
      tag,
    ],
  },
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Marketing Website")
          .items([
            S.documentTypeListItem("post")
              .icon(MdOutlineArticle)
              .id("post")
              .title("Posts"),
            S.divider(),
            S.listItem()
              .title("Entities")
              .icon(MdFolderOpen)
              .child(
                S.list()
                  .title("Entities")
                  .items([
                    S.documentTypeListItem("author")
                      .icon(MdOutlineHistoryEdu)
                      .id("author")
                      .title("Authors"),
                    S.documentTypeListItem("category")
                      .icon(MdOutlineCategory)
                      .id("category")
                      .title("Categories"),
                    S.documentTypeListItem("tag")
                      .icon(FaHashtag)
                      .id("tag")
                      .title("Tags"),
                  ])
              ),
            S.divider(),
          ]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      // You can add any React component to `S.view.component` and it will be rendered in the pane
      // and have access to content in the form in real-time.
      // It's part of the Studio's “Structure Builder API” and is documented here:
      // https://www.sanity.io/docs/structure-builder-reference
      defaultDocumentNode: (S, { schemaType }) => {
        if ((PREVIEWABLE_DOCUMENT_TYPES as string[]).includes(schemaType)) {
          return S.document().views([
            // Default form view
            S.view.form(),
            // Preview
            S.view.component(Iframe).options(iframeOptions).title("Preview"),
          ]);
        }

        return null;
      },
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    // singletonPlugin([home.name, settings.name]),
    // Add the "Open preview" action
    previewUrl({
      base: PREVIEW_BASE_URL,
      requiresSlug: PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS,
      urlSecretId: previewSecretId,
      matchTypes: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Manage assets with Sanity Media
    media(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    // visionTool({ defaultApiVersion: apiVersion }),
    vercelDeployTool(),
    draftReviewPluginV3(),
  ],
});
