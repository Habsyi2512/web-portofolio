import BoxContent from "@/components/box/BoxContent";
import { Card } from "@/components/card/card";
import {
  Paragraph,
  TextSubtitle,
  TextTitle,
} from "@/components/typography/Typography";
import Image from "next/image";
import React from "react";

export default function Current() {
  return (
    <>
      <TextTitle title="CinC Current Project" />
      <BoxContent>
        <Paragraph className="">
          Berikut ini merupakan beberapa projek yang masih dalam tahap pengembangan:
        </Paragraph>
      </BoxContent>
      <TextSubtitle title="Showcase" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Card>
            <Image className="w-full aspect-video" 
            alt="iki"
            width={1000}
            height={1000}
            src={"/ammomed.jpeg"}/>
            <div>
              <TextSubtitle title="Ammomed Indonesia" />
              <Paragraph>
                Website untuk membantu mahasiswa kedokteran dalam mengerjakan tugas dan belajar bidang kedokteran
              </Paragraph>
            </div>
          </Card>
        </div>
        
      </div>
    </>
  );
}
