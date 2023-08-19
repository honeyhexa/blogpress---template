import { defineField, defineType } from "sanity";
import { Slugify } from "@/lib/sanity/fields";

export const tag = defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    defineField({
      name: 'name',
      title: '🔠 Name',
      type: 'string',
      description: 'The name of the tag.',
      validation: (Rule) => Rule.required(),
    }),
    Slugify({ route: '/blog/tag/' })
  ],
});
