import { urlFor } from "@/lib/sanity/sanity.client";
import ZoomImage from "@/lib/ui/molecules/zoom-image";
import { Text } from "@/lib/ui";

export * as ZoomImage from "@/lib/ui/molecules/zoom-image";

export const ImageBlock: React.FC<any> = ({
  value: { alt, asset, caption },
  ...rest
}) => {
  const src = urlFor(asset).format("webp").dpr(1).url();
  return (
    <figure>
      <ZoomImage src={src} alt={alt} priority={false} loading="lazy" {...rest} />
      <Text as="figcaption" size="sm" className="mt-1 text-neutral-500">
        {caption}
      </Text>
    </figure>
  );
};
