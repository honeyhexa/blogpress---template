import { defineField } from "sanity";
import { noDuplicateRefs } from "sanity-pills";

export const categories = defineField({
  title: "🗂️ Categories",
  description: "Categories the blog post belongs to.",
  name: "categories",
  type: "array",
  of: [
    {
      type: "reference",
      to: { type: "category" },
      options: {
        filter: noDuplicateRefs,
      },
    },
  ],
});
