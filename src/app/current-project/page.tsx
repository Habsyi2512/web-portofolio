import BoxContent from "@/components/box/BoxContent";
import { Card } from "@/components/card/card";
import Image from "next/image";
import {
  Paragraph,
  TextSubtitle,
  TextTitle,
} from "@/components/typography/Typography";
import React from "react";

export default function CurrentPorto() {
  return (
    <>
     <div className="w-full h-full flex items-center justify-center">
      <p className="text-center text-gray-700 dark:text-white text-3xl font-semibold">
        COMING SOON...
      </p>
     </div>
    </>
  );
}
