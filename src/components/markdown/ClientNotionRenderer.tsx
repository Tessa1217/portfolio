"use client";
import { useTheme } from "@/contexts/theme-context";
import dynamic from "next/dynamic";
import Image from "next/image";
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
  );
}
