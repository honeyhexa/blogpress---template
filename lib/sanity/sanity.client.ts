import {
  apiVersion,
  dataset,
  projectId,
  revalidateSecret,
} from '@/lib/sanity/sanity.api'
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // If webhook revalidation is setup we want the freshest content, if not then it's best to use the speedy CDN
  useCdn: revalidateSecret ? false : true,
  perspective: 'published',
})

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);