'use client'
import React, { useEffect } from 'react'
import Social from './data/socialLink'
import "../globals.css"; 
import { scriptFont,roboto } from '../fonts/fonts';
import AOS from 'aos';

const Footer = () => {
  useEffect(() => {
          AOS.init({
              duration: 1000,
              once: true,
          });
        },[])
  return (
    <footer className=' flex flex-col justify-start items-center gap-4 gradient-background pt-16'>
      <div data-aos="fade-in" className='flex flex-col md:flex-row items-center w-full px-4 md:gap-4'>
        <hr className='w-full border-2 border-orange rounded-full animation-line mb-4 md:mb-0' />
        <div className='flex gap-4 px-4 shrink-0'>
          <Social></Social>
        </div>
        <hr className='w-full border-2 border-orange rounded-full animation-line mt-4 md:mt-0'/>
      </div>
      <p className={` text-text pb-10  ${roboto.className}`}>© All Rights Reserved 2024</p>
      <h1  className={`text-text text-xl md:text-2xl text-center px-4 ${roboto.className}`}>Developed & Designed by <span className={` text-3xl text-orange ${scriptFont.className}`}>Abdul Wasay</span></h1>
 </footer>
  )
}

export default Footer