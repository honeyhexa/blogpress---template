import { defineField, defineType } from "sanity";
import { LimitStringInput } from "@/lib/sanity/components";
import { Slugify, authors, categories, tags } from "@/lib/sanity/fields";
import { defaultBlockValidator } from "sanity-pills";

export const post = defineType({
  type: "document",
  name: "post",
  title: "Post",
  groups: [
    {
      name: "group_metadata",
      title: "SEO",
    },
    {
      name: "group_content",
      title: "Content",
    },
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
      description: "description",
      media: "image",
    },
    prepare(selection) {
      const { title, slug, description, media } = selection;
      return {
        title,
        subtitle: slug,
        description,
        media,
      };
    },
  },
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "🏷️ Title",
      description:
        "The title that will appear in search engine results pages (SERPs).",
      validation: (Rule) => Rule.required(),
      components: {
        input: LimitStringInput,
      },
    }),
    Slugify({ route: "/blog/" }),
    defineField({
      name: 'excerpt',
      title: '👀 Excerpt',
      type: 'text',
      description: 'A brief teaser of a blog post.',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "image",
      type: "image",
      title: "🖼️ Hero Image",
      description: "Striking image displayed at the top of the post.",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Image caption",
          description: "Caption displayed below the image.",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      type: "array",
      name: "content",
      title: "📝 Content",
      group: "group_content",
      description: "Main textual content of the blog post.",
      validation: defaultBlockValidator.all,
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Image caption",
              description: "Caption displayed below the image.",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessiblity.",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
    authors,
    categories,
    tags,
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description: "Date when blog post was written/published.",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});
