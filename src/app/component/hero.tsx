import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { scriptFont, roboto } from '../fonts/fonts'
import Form from './form'
const Hero = () => {
  return (
    <main className='flex flex-col items-center gap-16  md: pt-4 bg-grey'>
      <Image
        alt='my'
        src="/myImg.gif"
        width={200}
        height={200}
        className='rounded-full'
      >
       </Image>
      <div className='flex flex-col  items-center'>
<h1 className={`${roboto.className} text-2xl text-lightGrey text-center`}>I am <span className={`text-6xl text-orange  ${scriptFont.className}`}>Abdul Wasay</span>  a <span className={`text-6xl text-orange  ${scriptFont.className}`}>Front-End Developer</span> </h1>
      </div>
      <button className={`bg-transparent border-4 border-orange px-8 py-2 rounded-2xl text-lg font-light text-orange hover:bg-orange hover:text-grey hover:duration-300 ${roboto.className}`}>Contact Me</button>
      <Form />

      <div className='flex flex-col items-center gap-2 sm:items-start sm:self-start sm:px-24 pb-7'>
      <h1 className={` text-text font-black text-2xl   ${roboto.className}`}>About</h1>
      <article className='flex flex-col sm:flex-row items-center  sm:items-start gap-4'>
        <hr className='w-16 border-2 border-orange rounded-full mt-3' />
        <p className='text-text w-[80%] sm:w-auto'>A passionate and skilled Front-End Developer with a strong focus on building exceptional user experiences. Proficient in modern technologies such as ReactJS, NextJS, Tailwind CSS, HTML, CSS, JavaScript, TypeScript, and Shadcn UI. I have a keen eye for design and enjoy creating visually appealing and functional web applications. Currently exploring the exciting world of Agentic AI development to further enhance my skillset and contribute to innovative projects.
</p>
        </article>
 <a href="../Abdul-Wasay.pdf" download ><button className={`bg-transparent border-4 border-orange px-8 py-2 rounded-2xl mt-2 text-lg font-light text-orange hover:bg-orange hover:text-grey hover:duration-300 ${roboto.className}`}>Download Resume</button></a>
      </div>
      
    </main>
    
  )
}

export default Hero