import { defineField } from "sanity";
import { noDuplicateRefs } from "sanity-pills";

export const tags = defineField({
  title: "🔖 Tags",
  description: " Relevant tags for the blog post.",
  name: "tags",
  type: "array",
  of: [
    {
      type: "reference",
      to: { type: "tag" },
      options: {
        filter: noDuplicateRefs,
      },
    },
  ],
});
