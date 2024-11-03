import React from 'react'
import { Paragraph, TextTitle } from "@/components/typography/Typography";


export default function Page() {
  return (
    <div>
      <TextTitle title="Work Experience" />
      <Paragraph>
      Kami mempunyai pengalaman mengerjakan proyek dengan berbagai bahasa seperti berikut.
      </Paragraph>
      <br />
       <ul className="list-disc ml-6 space-y-1">
        <li><strong>NEXT JS</strong> 
        <br />
        Membantu perusahaan merancang roadmap teknologi yang selaras dengan visi jangka panjang.</li>
        <br />
        <li><strong>LARAVEL</strong> 
        <br />
        Membantu perusahaan merancang roadmap teknologi yang selaras dengan visi jangka panjang.</li>
        <br />
        <li><strong>FLASK</strong> 
        <br />
        Membantu perusahaan merancang roadmap teknologi yang selaras dengan visi jangka panjang.</li>
        <br />
        <li><strong>EXPRESS  JS</strong> 
        <br />
        Membantu perusahaan merancang roadmap teknologi yang selaras dengan visi jangka panjang.</li>
        <br />
      </ul>
    </div>
  )
}
