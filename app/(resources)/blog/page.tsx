import { urlFor } from "@/lib/sanity/sanity.client";
import { getPosts } from "@/lib/sanity/sanity.fetch";
import { Image, PageContainer, Text } from "@/lib/ui";
import Link from "next/link";
import React from "react";

const PageBlogs = async () => {
  const posts = await getPosts();
  return (
    <PageContainer>
      <Text as="h1" size="4xl" className="my-16 font-bold">
        Blog
      </Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-8">
        {posts.map((post: any) => (
          <Link
            href={`/blog/${post.slug}`}
            className="min-h-[24rem] flex flex-col gap-y-2"
            key={post._id}
          >
            <Image
              height="320"
              width="480"
              objectFit="cover"
              alt=""
              src={urlFor(post.image)
                .width(480)
                .height(320)
                .format("webp")
                .url()}
            />
            <Text as="h2">{post.title}</Text>
            <Text as="p" className="text-neutral-600">
              {post.excerpt}
            </Text>
            <Text as="p" size="sm" className="text-neutral-600">
              {post.authors?.[0]?.name}
            </Text>
          </Link>
        ))}
      </div>
    </PageContainer>
  );
};

export default PageBlogs;
