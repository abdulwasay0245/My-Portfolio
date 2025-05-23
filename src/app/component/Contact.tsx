'use client'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import { roboto } from '../fonts/fonts'
import { Copy, Mail, Phone } from 'lucide-react'

import 'aos/dist/aos.css';
import AOS from 'aos';

export const Contact = () => {
    const email = "abdulwasay0245@gmail.com"
    const [copied, setcopied] = useState(false)
    const handleCopy = async () => {
      try {
          navigator.clipboard.writeText(email)
          setcopied(true);
          setTimeout(()=> setcopied(false), 1500)
      } catch (error) {
        console.error(error)
      }
    }
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
      },[])
  return (
      <section id='contact' className='flex flex-col gap-20 pt-16 gradient-background items-center justify-center text-center text-white' style={roboto.style}>
          <div data-aos="zoom-in" className='flex flex-col gap-4  leading-tight '>
              <Button  title='Get in touch'></Button>
              <p className=''>What is next? Feel free to reach out to me if you are looking for a developer,<br /> have a query, or simply want to connect.</p>
          </div>
          <div className='justify-items-center space-y-2'>
              <div data-aos = "fade-in" className='flex gap-2 items-center'>
                  <Mail />
                  <h1 className='text-3xl font-medium'>{email}</h1>
                  <Copy className='hover:bg-slate-500 duration-100 rounded-lg animate-pulse duration-1000' onClick={handleCopy} />
                  {copied && <span className='text-green-500 text-sm ml-2' >Copied!</span>}
              </div>

              <div data-aos = "fade-in" className='flex gap-2 items-center'>
                  <Phone />
                  <h1 className='text-3xl font-medium'>+92 315 2127174</h1>
                  <Copy className='hover:bg-slate-500  rounded-lg animate-pulse duration-1000' />
              </div>
          </div>
          <div></div>
    </section>
  )
}
