'use client'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import { roboto, scriptFont } from '../fonts/fonts'
import { Copy, Mail, Phone, Check } from 'lucide-react'


import AOS from 'aos';

export const Contact = () => {
    const email = "abdulwasay0245@gmail.com"
    const phone = "+92 315 2127174"
    const [copiedEmail, setCopiedEmail] = useState(false)
    const [copiedPhone, setCopiedPhone] = useState(false)

    const handleCopyEmail = async () => {
      try {
          await navigator.clipboard.writeText(email)
          setCopiedEmail(true);
          setTimeout(()=> setCopiedEmail(false), 2000)
      } catch (error) {
        console.error(error)
      }
    }

    const handleCopyPhone = async () => {
        try {
            await navigator.clipboard.writeText(phone)
            setCopiedPhone(true);
            setTimeout(()=> setCopiedPhone(false), 2000)
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
      <section id='contact' className='flex flex-col gap-10 py-24 items-center justify-center text-center relative overflow-hidden' style={roboto.style}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d14] to-black -z-10"></div>
          
          <div data-aos="zoom-in" className='flex flex-col gap-6 items-center max-w-2xl px-6'>
              <h2 className={`text-5xl md:text-6xl text-orange ${scriptFont.className} drop-shadow-md`}>Get in Touch</h2>
              <p className='text-gray-400 text-lg leading-relaxed'>
                  What is next? Feel free to reach out to me if you are looking for a developer, 
                  have a query, or simply want to connect.
              </p>
          </div>

          <div className='flex flex-col md:flex-row gap-8 w-full max-w-4xl px-6 justify-center'>
              {/* Email Card */}
              <div data-aos="fade-up" className='flex flex-col items-center gap-4 bg-[#14141f] p-8 rounded-2xl border border-white/5 hover:border-orange/30 w-full md:w-1/2 transition-all duration-300 hover:transform hover:-translate-y-2 group shadow-xl'>
                  <div className="p-4 bg-orange/10 rounded-full group-hover:bg-orange/20 transition-colors">
                    <Mail className="text-orange w-8 h-8" />
                  </div>
                  <h3 className='text-gray-400 text-sm tracking-wider uppercase'>Email Me</h3>
                  <h1 className='text-xl md:text-2xl font-bold text-white break-all'>{email}</h1>
                  <button 
                    onClick={handleCopyEmail}
                    className='flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-sm text-gray-300 transition-colors'
                  >
                    {copiedEmail ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                    {copiedEmail ? "Copied!" : "Copy Email"}
                  </button>
              </div>

              {/* Phone Card */}
              <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col items-center gap-4 bg-[#14141f] p-8 rounded-2xl border border-white/5 hover:border-orange/30 w-full md:w-1/2 transition-all duration-300 hover:transform hover:-translate-y-2 group shadow-xl'>
                  <div className="p-4 bg-orange/10 rounded-full group-hover:bg-orange/20 transition-colors">
                    <Phone className="text-orange w-8 h-8" />
                  </div>
                  <h3 className='text-gray-400 text-sm tracking-wider uppercase'>Call Me</h3>
                  <h1 className='text-xl md:text-2xl font-bold text-white'>{phone}</h1>
                  <button 
                    onClick={handleCopyPhone}
                    className='flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-sm text-gray-300 transition-colors'
                  >
                    {copiedPhone ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                     {copiedPhone ? "Copied!" : "Copy Number"}
                  </button>
              </div>
          </div>
    </section>
  )
}
