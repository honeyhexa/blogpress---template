import { groq } from 'next-sanity'

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    title,
    content,
  }
`

export const postPaths = groq`
  *[_type == "post" && slug.current != null].slug.current
`