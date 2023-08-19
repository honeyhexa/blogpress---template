import React from "react";
import { SlugInput } from "@/lib/sanity/components/slug-input";
import { defineField } from "sanity";

export const Slugify = ({ route, description }: any) => defineField({
  name: "slug",
  title: "🌐 Slug",
  type: "slug",
  options: {
    source: "title",
    maxLength: 200,
    slugify: (input: string) =>
      input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
  },
  description:
    description ??
    "The URL-friendly slug for post. It can be auto-generated based on the title.",
  validation: (Rule: any) => Rule.required(),
  components: {
    // eslint-disable-next-line react/jsx-props-no-spreading
    input: (props: any) => <SlugInput {...props} route={route} />,
  },
});
