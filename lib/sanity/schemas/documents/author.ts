import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  preview: {
    select: {
      title: "name",
      subtitle: "designation",
      description: "bio",
      media: "profilePicture",
    },
    prepare(selection) {
      const { title, subtitle, description, media } = selection;
      return {
        title,
        subtitle: `${subtitle ?? ""}`,
        description,
        media,
      };
    },
  },
  fields: [
    defineField({
      name: "name",
      title: "👤 Name",
      type: "string",
      description: "Enter your name here!",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      title: "📝 Bio",
      type: "text",
      description:
        "Tell us a little bit about yourself! (150 characters or less)",
      validation: (Rule) => Rule.max(150),
    }),
    defineField({
      name: "designation",
      title: "📝 Designation",
      type: "string",
      description: "Enter your designation here! (150 characters or less)",
      validation: (Rule) => Rule.required().max(150),
    }),
    defineField({
      name: "profilePicture",
      title: "📸 Profile Picture",
      type: "image",
      description: "Upload a picture of yourself! (JPEG, PNG, or GIF)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "📧 Email",
      type: "email",
      description: "Enter your email address here!",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
