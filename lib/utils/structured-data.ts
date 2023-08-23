const ORG_SCHEMA = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "@id": "https://domain.tld",
    name: "Org Name",
    url: "https://domain.tld",
    logo: {
      "@context": "http://schema.org",
      "@type": "ImageObject",
      url: "https://res.cloudinary.com/practicaldev/image/fetch/s--b551aYX---/c_limit,f_png,fl_progressive,q_80,w_192/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8j7kvp660rqzt99zui8e.png",
      width: "192",
      height: "192",
    },
  };

export const generateBlogPostJsonLd = (post: any) => {
  const { title, articleBody, slug, dateCreated, datePublished, dateModified, image, keywords, wordCount, } = post;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://domain.tld/blog/${slug}`,
    },
    url: `https://domain.tld/blog/${slug}`,
    headline: title,
    image: [image],
    dateCreated,
    datePublished,
    dateModified,
    articleBody,
    publisher: ORG_SCHEMA,
    author: {
      "@context": "http://schema.org",
      "@type": "Person",
      url: "https://github.com/iarthstar",
      name: "Arth K. Gajjar",
    },
    isPartOf: {
      "@type": "Blog",
      "@id": "https://domain.tld/blog/",
      name: "Org Blog",
      publisher: ORG_SCHEMA,
    },
    wordCount,
    keywords: keywords ?? [],
  };
};