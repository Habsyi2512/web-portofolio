import BoxContent from "@/components/box/BoxContent";
import { Card } from "@/components/card/card";
import {
  Paragraph,
  TextSubtitle,
  TextTitle,
} from "@/components/typography/Typography";
import Image from "next/image";
import React from "react";

export default function Paid() {
  return (
    <>
      <TextTitle title="Paid Project CinC" />
      <BoxContent>
        <Paragraph className="">
          Dan ini beberapa hasil dari kerja kami yang sudah selesai di kerjakan:
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
