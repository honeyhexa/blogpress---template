import { PortableText } from "@portabletext/react";
import React from "react";
import { PageContainer, Text } from "@/lib/ui";

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
} from "@/lib/ui";

const components: any = {
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
  // img: ZoomImage,
};

export default function Post(props: any) {
  return (
    <PageContainer className="">
      <Text as="h1" size="3xl" className="text-center font-bold">
        {props.data.title}
      </Text>
      <div className="m-auto max-w-xl flex flex-col gap-4 mb-16">
        <PortableText
          value={props.data.content}
          listNestingMode="html"
          components={components}
        />
      </div>
    </PageContainer>
  );
}
