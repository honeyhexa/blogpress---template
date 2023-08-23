import { groq } from 'next-sanity'

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    title,
    content,
    "articleBody": pt::text(content),
    "numberOfCharacters": length(pt::text(content)),
    "estimatedWordCount": round(length(pt::text(content)) / 5),
    "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 )
  }
`

export const postPaths = groq`
  *[_type == "post" && slug.current != null].slug.current
`