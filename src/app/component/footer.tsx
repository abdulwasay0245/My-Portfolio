import React from 'react'
import Social from './data/socialLink'
import "../globals.css"; 
import { scriptFont,roboto } from '../fonts/fonts';
const Footer = () => {
  return (
    <footer className=' flex flex-col justify-start items-center gap-4 bg-lightGrey pt-16'>
      <div className='flex items-center'>
        <hr className=' border-2 border-orange rounded-full animation-line' />
        <div className='flex gap-4 px-4'>
          <Social></Social>
        </div>
        <hr className='  border-2 border-orange rounded-full animation-line'/>
      </div>
      <p className={` text-text pb-10  ${roboto.className}`}>© All Rights Reserved 2024</p>
      <h1 className={` text-text text-2xl  ${roboto.className}`}>Developed & Designed by <span className={` text-3xl text-orange ${scriptFont.className}`}>Abdul Wasay</span></h1>
 </footer>
  )
}

export default Footer