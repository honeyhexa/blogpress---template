import { defineField, defineType } from "sanity";
import { Slugify } from "@/lib/sanity/fields";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: 'name',
      title: '🔠 Name',
      type: 'string',
      description: 'The name of the category.',
      validation: (Rule) => Rule.required(),
    }),
    Slugify({ route: '/blog/category/' })
  ],
});
