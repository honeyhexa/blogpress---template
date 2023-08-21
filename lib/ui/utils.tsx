import React from "react";

export const Element: React.FC<{ as: string; children: React.ReactNode }> = ({
  as,
  children,
  ...rest
}) => {
  return React.createElement(as, { ...rest }, children);
};
