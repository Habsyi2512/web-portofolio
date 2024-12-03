import BoxContent from "@/components/box/BoxContent";
import { Card } from "@/components/card/card";
import {
  Paragraph,
  TextSubtitle,
  TextTitle,
} from "@/components/typography/Typography";
import Image from "next/image";
import React from "react";

export default function Portofolio() {
  return (
    <>
      <TextTitle title="CinC Portofolio" />
      <BoxContent>
        <Paragraph className="">
          Sebagai IT Consultant dibawah ini merupakan hasil kerja kami baik yang sudah selesai ataupun masih dalam tahap pengembangan:
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
        <div>
          <Card>
            <Image className="w-full aspect-video" 
            alt="iki"
            width={1000}
            height={1000}
            src={"/disduk.jpeg"}/>
            <div>
              <TextSubtitle title="Disdukcapil Anambas" />
              <Paragraph>
                Website untuk pelayanan informasi publik disdukcapil Anambas tercinta 
              </Paragraph>
            </div>
          </Card>
        </div>
        <div>
          <Card>
            <Image className="w-full aspect-video" 
            alt="iki"
            width={1000}
            height={1000}
            src={"/Fashion.jpeg"}/>
            <div>
              <TextSubtitle title="CAUMY" />
              <Paragraph>
                Website untuk perlombaan fashion mahasiswa UMY
              </Paragraph>
            </div>
          </Card>
        </div>
        <div>
          <Card>
            <Image className="w-full aspect-video" 
            alt="iki"
            width={1000}
            height={1000}
            src={"/restapi.jpeg"}/>
            <div>
              <TextSubtitle title="REST API" />
              <Paragraph>
                Website untuk para developer mengembangkan websitenya dalam lingkup API
              </Paragraph>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
