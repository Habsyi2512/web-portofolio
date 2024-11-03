import React from 'react'
import { Paragraph, TextTitle } from "@/components/typography/Typography";


export default function Page() {
  return (
    <div className='text-justify'>
      <TextTitle title="Work Experience" />
      <Paragraph>
      Kami mempunyai pengalaman mengerjakan proyek dengan berbagai bahasa seperti berikut.
      </Paragraph>
      <br />
       <ul className="list-disc ml-6 space-y-1">
        <li><strong>NEXT JS</strong> 
        <br />
        Kami menggunakan framework NEXT JS untuk membuat beberapa projek seperti berikut:</li>
          <ul className='list-disc ml-6 space-y-1'> 
            <li>
             <strong>Caumy</strong>
             <br />
             Website ini dibuat untuk event fashion dengan menggunakan bantuan framework NEXT JS dan Tailwind untuk style.
            </li>
            <li>
             <strong>CinCtools</strong>
             <br />
             Web yang diperuntukan untuk memodifikasi file pdf dengan berbagai pilihan dan website ini dibuat dengan bantuan pdfjs.
            </li>
            <li>
             <strong>GhostCenterHub</strong>
             <br />
              Web ini bersifat private dan dibuat menggunakan beberapa techstack seperti mysql, crypto, tailwindcss.
            </li>
            <li>
             <strong>Ammomed</strong>
             <br />
              Diperuntukkan untuk course tambahan mahasiswa kedokteran untuk belajar dalam menghadapi materi dalam menempuh pendidikan dalam dunia kedokteran.
            </li>
          </ul>
        <br />
        <li><strong>LARAVEL</strong> 
        <br />
        Kami menggunakan framework LARAVEL untuk membuat beberapa projek seperti berikut:</li>
         <ul className='list-disc ml-6 space-y-1'> 
            <li>
             <strong>Blackout</strong>
             <br />
              Web ini bersifat private dan dibuat menggunakan beberapa techstack seperti bootstrap dan Laravel.
            </li>
            <li>
             <strong>DISDUKCAPIL</strong>
             <br />
              Web yang dibangun untuk memenuhi kebutuhan sistem informasi Dinas Pendudukan dan Catatan Sipil Anambas dengan menggunakan Inertia React dan Tailwind.
            </li>
          </ul>
        <br />
        <li><strong>FLASK</strong> 
        <br />
        Menggunakan framework FLASK untuk membangun proyek seperti:</li>
        <ul className='list-disc ml-6 space-y-1'> 
            <li>
             <strong>LOKAWISATA</strong>
             <br />
              Website ini digunakan untuk memberikan rekomendasi pengguna dalam memilih wisata terdekat dengan titik lokasi pengguna, website ini 
              dibangun menggunakan FLASK dan Vanilla Javascript.
            </li>
          </ul>
        <br />
        <li><strong>EXPRESS JS</strong> 
        <br />
        Dengan EXPRESS JS kami berhasil membangun sistem seperti:</li>
        <ul className='list-disc ml-6 space-y-1'> 
            <li>
             <strong>API by inthehouse</strong>
             <br />
              Menbuat API untuk inthehouse dengan bantuan techstack seperti express js, ejs, dan bootstrap.
            </li>
          </ul>
        <br />
      </ul>
    </div>
  )
}
