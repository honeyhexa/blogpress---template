import Script from "next/script";
import React from "react";

export const Element: React.FC<{ as: string; children: React.ReactNode }> = ({
  as,
  children,
  ...rest
}) => {
  return React.createElement(as, { ...rest }, children);
};

export const StructuredData: React.FC<any> = ({ data }) => (
  <Script
    id="jsonld"
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);
