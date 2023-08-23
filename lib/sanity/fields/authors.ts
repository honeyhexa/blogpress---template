import { defineField } from "sanity";
import { noDuplicateRefs } from "sanity-pills";

export const authors = defineField({
  title: "🖋️ Authors",
  description: "Authors of the blog post.",
  name: "authors",
  type: "array",
  of: [
    {
      type: "reference",
      to: { type: "author" },
      options: {
        filter: noDuplicateRefs,
      },
    },
  ],
});
