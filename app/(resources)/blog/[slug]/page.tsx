import React from "react";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { LiveQuery } from "next-sanity/preview/live-query";
import { getPostBySlug } from "@/lib/sanity/sanity.fetch";
import { postBySlugQuery } from "@/lib/sanity/sanity.queries";
import Post from "@/lib/ui/pages/post";
import PostPreview from "@/lib/ui/pages/post-preview";

export const runtime = "edge";

type Props = {
  params: { slug: string };
};

const PageBlog: React.FC<Props> = async ({ params }) => {
  const data = await getPostBySlug(params.slug);

  if (!data && !draftMode().isEnabled) {
    notFound();
  }

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={postBySlugQuery}
      params={params}
      initialData={data}
      as={PostPreview}
    >
      <Post data={data} />
    </LiveQuery>
  );
};

export default PageBlog;
