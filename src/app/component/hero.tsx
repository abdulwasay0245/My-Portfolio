import React from 'react'
import Image from 'next/image'
import { scriptFont, roboto } from '../fonts/fonts'
import '../globals.css'
import Skills from './skills'

const Hero = () => {
  return (
    <main className='flex flex-col items-center gap-16 md:pt-10 w-full overflow-hidden'>
      <div className='relative w-[200px] h-[200px] rounded-full p-1 bg-gradient-to-r from-orange to-purple-600 animate-fade-in'>
        <div className='bg-background rounded-full p-1 w-full h-full overflow-hidden'>
             <Image
                alt='my'
                src="/myImg.gif"
                width={200}
                height={200}
            className='rounded-full object-cover'
            unoptimized
              />
        </div>
      </div>

      <div className='flex flex-col items-center space-y-4 text-center max-w-4xl px-4'>
        <h1 className={`animate-fade-in ${roboto.className} text-3xl md:text-4xl text-lightGrey font-light overflow-hidden`}>
            I am <span className={`text-6xl md:text-7xl text-orange ${scriptFont.className} drop-shadow-lg block md:inline mt-2 md:mt-0`}>Abdul Wasay</span>
        </h1>
        <h2 className={`text-2xl md:text-4xl text-gray-400 font-light ${scriptFont.className} animate-pulse`}>
            Front-End Developer
        </h2>
      </div>

      <a href="#contact">
        <button className={`group relative px-8 py-3 rounded-full bg-gradient-to-r from-orange to-red-500 text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-orange/50 ${roboto.className}`}>
            Contact Me
        </button>
      </a>

      <div className='flex flex-col items-center gap-6 sm:items-start sm:self-start sm:px-24 pb-7 w-full max-w-6xl mx-auto'>
        <div className='flex items-center gap-4 w-full'>
             <div className='h-px bg-gradient-to-r from-transparent via-orange to-transparent w-full sm:w-16 rounded-full'></div>
             <h1 className={`text-white font-black text-3xl tracking-wider ${roboto.className}`}>About</h1>
             <div className='h-px bg-gradient-to-r from-transparent via-orange to-transparent w-full sm:hidden rounded-full'></div>
        </div>
        
        <article className='flex flex-col md:flex-row items-center md:items-start gap-8 bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/5 hover:border-orange/20 transition-colors duration-500'>
            <p className='text-gray-300 leading-relaxed text-lg text-center md:text-left'>
                A passionate and skilled Front-End Developer with a strong focus on building exceptional user experiences. 
                Proficient in modern technologies such as <span className="text-orange">ReactJS, NextJS, Tailwind CSS</span>, and TypeScript. 
                I have a keen eye for design and enjoy creating visually appealing and functional web applications. 
                Currently exploring the exciting world of <span className="text-purple-400">Agentic AI</span> development to further enhance my skillset and contribute to innovative projects.
            </p>
        </article>
        
        <a href="../Abdul-Wasay.pdf" download className="mt-4">
            <button className={`px-8 py-3 rounded-xl border border-orange/50 text-orange hover:bg-orange hover:text-white transition-all duration-300 ${roboto.className} flex items-center gap-2 group`}>
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
            </button>
        </a>
      </div>
      <Skills></Skills>
    </main>
  )
}
export default Hero
