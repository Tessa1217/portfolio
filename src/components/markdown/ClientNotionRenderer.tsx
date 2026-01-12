"use client";
import { useTheme } from "@/contexts/theme-context";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then((m) => m.Code)
);
const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);

export default function ClientNotionRenderer({
  recordMap,
}: {
  recordMap: ExtendedRecordMap;
}) {
  const { isDarkTheme } = useTheme();

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background py-20">
      <article className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/portfolio/#experience"
          className="inline-flex items-center gap-2 text-light-text dark:text-dark-text hover:opacity-70 transition-opacity mb-8"
        >
          ← Back to Experience
        </Link>
        <NotionRenderer
          recordMap={recordMap}
          components={{
            nextImage: Image,
            Code: Code,
            Collection: Collection,
          }}
          fullPage={true}
          darkMode={isDarkTheme}
          disableHeader
        ></NotionRenderer>
      </article>
    </div>
  );
}
