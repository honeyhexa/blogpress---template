"use client";
import { PortableText } from "@portabletext/react";
import React from "react";
import { Image, PageContainer, Text } from "@/lib/ui";

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Anchor,
  Para,
  UnorderedList,
  OrderedList,
  UnorderedListItem,
  OrderedListItem,
  ImageBlock,
} from "@/lib/ui";
import { urlFor } from "@/lib/sanity/sanity.client";

const components = {
  types: {
    image: ImageBlock,
  },
  block: {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    p: Para,
    normal: Para,
  },
  marks: {
    link: Anchor,
  },
  list: {
    number: OrderedList,
    bullet: UnorderedList,
  },
  listItem: {
    number: OrderedListItem,
    bullet: UnorderedListItem,
  },
};

export default function Post(props: any) {
  const post = { ...props.data };
  delete post.content;
  console.log(post);
  return (
    <PageContainer className="">
      <Text as="h1" size="3xl" className="m-auto max-w-xl font-bold my-2">
        {props.data.title}
      </Text>
      <figure className="my-8 max-w-4xl m-auto">
        <Image
          className="w-full lg:pl-40"
          src={urlFor(props.data.heroImage)
            .width(1152)
            .height(648)
            .format("webp")
            .url()}
          width={1152}
          height={648}
          priority={false}
          placeholder="blur"
          alt={props.data.heroImage.alt}
          blurDataURL={urlFor(props.data.heroImage)
            .width(1152)
            .height(648)
            .format("webp")
            .blur(2000)
            .url()}
        />
        <Text as="figcaption" size="sm" className="m-auto max-w-xl font-mono text-neutral-500 mt-1">
          {props.data.heroImage.caption}
        </Text>
      </figure>
      <div className="m-auto max-w-xl flex flex-col gap-2 mt-2 mb-16">
        <PortableText
          value={props.data.content}
          // listNestingMode="html"
          components={components}
        />
      </div>
    </PageContainer>
  );
}
