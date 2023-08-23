import { cn, cva } from "@/lib/utils";
import { Element } from "@/lib/ui";

import {
  Inter,
  Fraunces,
  DM_Sans,
  Rubik,
  IBM_Plex_Mono,
  Dancing_Script,
} from "next/font/google";
import NextImage from "next/image";

import Link from "next/link";

const rubik = Rubik({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ subsets: ["latin"] });
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({ subsets: ["latin"] });

const dmSans = DM_Sans({ subsets: ["latin"] });

const text = cva("text", {
  variants: {
    size: {
      "3xl": ["text-3xl"],
      "2xl": ["text-2xl"],
      xl: ["text-xl"],
      lg: ["text-lg"],
      md: ["text-md"],
      base: ["text-base"],
      sm: ["text-sm"],
      xs: ["text-xs"],
    },
    font: {
      rubik: [rubik.className],
      inter: [inter.className],
      "ibm-plex-mono": [ibmPlexMono.className],
      script: [dancingScript.className],
      "dm-sans": [dmSans.className],
      fraunces: [fraunces.className],
    },
  },
  compoundVariants: [{ size: "base" }],
  defaultVariants: {
    size: "base",
    font: "fraunces",
  },
});

export const Text: React.FC<any> = ({
  as = "p",
  size,
  font,
  className,
  ...rest
}) => (
  <Element as={as} className={cn(text({ size, font }), className)} {...rest} />
);

export const H1: React.FC<any> = ({ className, ...rest }) => (
  <Text as="h1" size="3xl" className={cn("", className)} {...rest} />
);
export const H2: React.FC<any> = ({ className, ...rest }) => (
  <Text as="h2" size="2xl" className={cn("mt-8", className)} {...rest} />
);
export const H3: React.FC<any> = ({ className, ...rest }) => (
  <Text as="h3" size="xl" className={cn("mt-6", className)} {...rest} />
);
export const H4: React.FC<any> = ({ className, ...rest }) => (
  <Text as="h4" size="lg" className={cn("mt-4", className)} {...rest} />
);
export const H5: React.FC<any> = ({ className, ...rest }) => (
  <Text as="h5" size="md" className={cn("", className)} {...rest} />
);
export const H6: React.FC<any> = ({ className, ...rest }) => (
  <Text as="h6" size="base" className={cn("", className)} {...rest} />
);
export const Para: React.FC<any> = ({ className, ...rest }) => (
  <Text as="p" size="base" className={cn("text-neutral-600", className)} {...rest} />
);
export const Anchor: React.FC<any> = ({ className, ...rest }) => (
  <Link
    href={rest.value.href}
    className={cn("text-blue-500", className)}
    {...rest}
  />
);

export const UnorderedList: React.FC<any> = ({ className, ...rest }) => (
  <Element
    as="ul"
    className={cn("list-disc flex flex-col gap-y-2 ml-5", className)}
    {...rest}
  />
);
export const OrderedList: React.FC<any> = ({ className, ...rest }) => (
  <Element
    as="ol"
    className={cn("list-decimal flex flex-col gap-y-2 ml-5", className)}
    {...rest}
  />
);

export const UnorderedListItem: React.FC<any> = ({
  className,
  children,
  ...rest
}) => (
  <Element as="li" className={cn("", className)} {...rest}>
    <Text>{children}</Text>
  </Element>
);

export const OrderedListItem: React.FC<any> = ({
  className,
  children,
  ...rest
}) => (
  <Element as="li" className={cn("", className)} {...rest}>
    <Text>{children}</Text>
  </Element>
);

export const Image: React.FC<any> = (props) => <NextImage {...props} />;