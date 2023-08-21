import { cn } from "@/lib/utils";

export const PageContainer: React.FC<any> = ({ className, ...rest }) => (
  <div className={cn("w-full m-auto max-w-6xl px-4", className)} {...rest} />
);
