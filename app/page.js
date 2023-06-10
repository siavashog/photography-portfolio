'use client'

import Image from 'next/image'
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Slider from "@/app/components/Slider";
import Instagram from "@/app/components/Instagram";
import {SliderData} from "@/app/components/SliderData";

export default function Home() {
  return (
    <>
      <Navbar/>
    <div>
      <Hero heading='Siavash Photography' message='I capture moments in nature and keep them alive.' />
      <Slider slides={SliderData} />
      <Instagram />

    </div>
    </>
  )
}
