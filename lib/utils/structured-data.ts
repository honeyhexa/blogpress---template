const DOMAIN = "https://domain.tld";

const ORG_SCHEMA = {
  "@context": "http://schema.org",
  "@type": "Organization",
  "@id": DOMAIN,
  name: "Org Name",
  alternateName: [],
  url: DOMAIN,
  foundingDate: "1997",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gujarat",
      addressCountry: "India",
    },
  },
  logo: {
    "@context": "http://schema.org",
    "@type": "ImageObject",
    url: "https://res.cloudinary.com/practicaldev/image/fetch/s--b551aYX---/c_limit,f_png,fl_progressive,q_80,w_192/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8j7kvp660rqzt99zui8e.png",
    width: "192",
    height: "192",
  },
};

export const generateBlogPostJsonLd = (post: any) => {
  const {
    title,
    excerpt,
    articleBody,
    slug,
    dateCreated,
    datePublished,
    dateModified,
    image,
    keywords,
    wordCount,
  } = post;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${DOMAIN}/blog/${slug}`,
    },
    url: `${DOMAIN}/blog/${slug}`,
    headline: title,
    description: excerpt,
    image: [image],
    dateCreated,
    datePublished,
    dateModified,
    articleBody,
    publisher: ORG_SCHEMA,
    author: {
      "@context": "http://schema.org",
      "@type": "Person",
      jobTitle: "Frontend Master",
      url: "https://github.com/iarthstar",
      name: "Arth K. Gajjar",
    },
    isPartOf: {
      "@type": "Blog",
      "@id": `${DOMAIN}/blog`,
      name: "Org Blog",
      publisher: ORG_SCHEMA,
    },
    wordCount,
    keywords: keywords ?? [],
  };

  return schema;
};
