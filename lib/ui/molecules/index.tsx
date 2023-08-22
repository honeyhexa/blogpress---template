import { urlFor } from "@/lib/sanity/sanity.client";
import ZoomImage from "@/lib/ui/molecules/zoom-image";

export * as ZoomImage from "@/lib/ui/molecules/zoom-image";

export const ImageBlock: React.FC<any> = (props) => {
    const src = urlFor(props.value.asset).url();
    return <ZoomImage src={src} {...props} />;
}