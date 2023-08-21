// import 'styles/index.css'

import { token } from "@/lib/sanity/sanity.fetch";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { Suspense } from "react";

const PreviewProvider = dynamic(() => import("@/lib/ui/preview-provider"));

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDraftMode = draftMode().isEnabled;

  const layout = (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <div className="mt-20 flex-grow px-4 md:px-16 lg:px-32">{children}</div>
    </div>
  );

  if (isDraftMode) {
    return (
      <PreviewProvider token={token!}>
        <Suspense>{layout}</Suspense>
      </PreviewProvider>
    );
  }

  return layout;
}
