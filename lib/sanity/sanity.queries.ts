import { groq } from 'next-sanity'

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    title,
    excerpt,
    content,
    image,
    "articleBody": pt::text(content),
    "numberOfCharacters": length(pt::text(content)),
    "wordCount": round(length(pt::text(content)) / 5),
    "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 ),
    authors[] -> { name, designation },
    categories[] -> { name },
    tags[] -> { name },
    "dateCreated": _createdAt,
    "datePublished": date,
    "dateModified": _updatedAt
  }
`

export const postsQuery = groq`
  *[_type == "post"] {
    _id,
    "slug": slug.current,
    title,
    excerpt,
    image,
    "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 ),
    authors[] -> { name, designation },
    categories[] -> { name },
    tags[] -> { name },
    "dateCreated": _createdAt,
    "datePublished": date,
    "dateModified": _updatedAt
  }
`

export const postPaths = groq`
  *[_type == "post" && slug.current != null].slug.current
`