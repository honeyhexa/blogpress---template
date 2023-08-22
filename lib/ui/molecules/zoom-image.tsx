/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { Suspense } from "react";
import Image from "next/image";

import "react-medium-image-zoom/dist/styles.css";

// Added react lazy due to this issue: https://github.com/rpearce/react-medium-image-zoom/issues/429
const Zoom = React.lazy(() => import("react-medium-image-zoom"));

const ZoomImage: React.FC<any> = (props) => {
  return (
    // TODO: Add skeleton loader
    <Suspense fallback={<div>Loading...</div>}>
      <Zoom>
        <Image
          {...props}
          width={720}
          height={480}
          className="w-full h-auto"
        />
      </Zoom>
    </Suspense>
  );
};

export default ZoomImage;
