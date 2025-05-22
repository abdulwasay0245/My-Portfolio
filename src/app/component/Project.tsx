import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectData from '../component/data/projects'
import { scriptFont } from '../fonts/fonts'



const Project = () => {
  return (
      <section className='gradient-background py-10 overflow-hidden text-center'>
          <h1 className={`${scriptFont.className} text-6xl text-orange py-12`}>Work</h1>
      <div className='grid grid-cols-3 gap-4 px-10 justify-center'>
        <iframe src="https://games-website-hazel.vercel.app/" className='w-full h-full'></iframe>
        {ProjectData.map((data, index) =>
           <Link key={index} href={data.link}>
        <div className='bg-[#3d3e42] xl:h-96 xl:w-96 h-72 w-72  flex flex-col justify-center items-center rounded-lg shadow-lg text-center p-8 hover:scale-105 duration-200 hover:bg-slate-600'>
          <Image alt='pic' width={50} height={50} src={data.address}></Image>
              <h1 className='text-3xl font-extrabold text-orange'>{data.heading }</h1>
          </div>
          </Link>
    )}
        </div>
    </section>
  )
}

export default Project