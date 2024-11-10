import BoxContent from "@/components/box/BoxContent";
import { Card } from "@/components/card/card";
import {
  Paragraph,
  TextSubtitle,
  TextTitle,
} from "@/components/typography/Typography";
import React from "react";

export default function Portofolio() {
  return (
    <>
      <TextTitle title="Overview" />
      <BoxContent>
        <Paragraph className="">
          Sebagai fullstack web developer, saya ahli dalam menciptakan website
          responsif dengan desain UX menarik menggunakan berbagai framework dan
          teknologi terkini.
        </Paragraph>
      </BoxContent>
      <TextSubtitle title="Showcase" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Card>
            <div className="border bg-gray-400 aspect-video flex flex-col justify-center mb-2">
              <p className="text-center font-bold text-lg text-gray-200">
                Image 1:1
              </p>
            </div>
            <div>
              <TextSubtitle title="Judul" />
              <div>
                <Paragraph>Unknown</Paragraph>
              </div>
              <Paragraph>
                Website untuk streaming dan download film drama korea dan
                negara-negara lainnya.
              </Paragraph>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
