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
import Link from "next/link";

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
  return (
    <PageContainer>
      <div className="m-auto max-w-xl flex flex-col gap-4">
        <Link className="my-8" href="/blog">
          <Text as="a" size="md" className="text-blue-500">
            ← Blogs
          </Text>
        </Link>
        {/* <div className="flex flex-row gap-2">
          {props.data.categories?.length > 0
            ? props.data.categories.map(({ name }: any, i: number) => (
                <Text
                  key={i}
                  font="inter"
                  className="tracking-widest font-semibold uppercase rounded border py-1 px-2 text-[0.6rem]"
                >
                  {name}
                </Text>
              ))
            : null}
        </div> */}
        <Text as="h1" size="4xl" className="text-4xl font-bold my-2">
          {props.data.title}
        </Text>
        <div className="flex flex-row gap-4">
          {props.data.tags?.length > 0
            ? props.data.tags.map(({ name }: any, i: number) => (
                <Text
                  key={i}
                  font="inter"
                  className="tracking-widest text-blue-500 text-[0.7rem] uppercase font-semibold"
                >
                  #{name}
                </Text>
              ))
            : null}
        </div>
      </div>
      <div className="flex flex-row my-8">
        <div className="hidden lg:block w-[calc(50vw_-_18rem)] max-w-[17rem] px-4">
          <div className="flex flex-col gap-0 p-4">
            <Text
              as="h4"
              font="inter"
              size="sm"
              className="text-right text-neutral-500"
            >
              Author
            </Text>
            <Text
              as="h4"
              font="inter"
              size="sm"
              className="text-right font-semibold"
            >
              {props.data.authors?.[0]?.name}
            </Text>
            <Text
              as="h4"
              font="inter"
              size="sm"
              className="text-right mt-8 text-neutral-500"
            >
              Published on
            </Text>
            <Text
              as="h4"
              font="inter"
              size="sm"
              className="text-right font-semibold"
            >
              {new Date(props.data.dateCreated).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Text>
            <Text
              as="h4"
              font="inter"
              size="sm"
              className="text-right mt-8 text-neutral-500"
            >
              Time to read
            </Text>
            <Text
              as="h4"
              font="inter"
              size="sm"
              className="text-right font-semibold"
            >
              {props.data.estimatedReadingTime} min
            </Text>
            {props.data.categories?.length > 0 ? (
              <>
                <Text
                  as="h4"
                  font="inter"
                  size="sm"
                  className="text-right mt-8 text-neutral-500"
                >
                  Category
                </Text>
                {props.data.categories.map(({ name }: any, i: number) => (
                  <Text
                  key={name}
                  as="h4"
                  font="inter"
                  size="sm"
                  className="text-right font-semibold"
                >
                  {name}
                </Text>
                ))}
              </>
            ) : null}
          </div>
        </div>
        <figure className="w-full lg:w-[55rem]">
          <Image
            className="w-full"
            src={urlFor(props.data.image)
              .width(1152)
              .height(648)
              .format("webp")
              .dpr(1)
              .url()}
            width={1152}
            height={648}
            priority={true}
            loading="eager"
            placeholder="empty"
            alt={props.data.image.alt}
          />
          <Text
            as="figcaption"
            size="sm"
            className="font-mono text-neutral-500 mt-1"
          >
            {props.data.image.caption}
          </Text>
        </figure>
      </div>
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
