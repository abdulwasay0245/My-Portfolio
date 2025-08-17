import React from 'react'
import Link from 'next/link'
import { scriptFont, roboto } from '../fonts/fonts'

import Social from './data/socialLink'
const Header = () => {
  return (
      <header className= "flex flex-col items-center p-10 gap-6 h-auto animation-line gradient-background justify-between sm:flex-row sm:h-2">
          <h1 className={`animate-fade-in text-orange text-3xl font-bold ${scriptFont.className}`}>&lt;AW /&gt;</h1>
          <nav>
              <ul className={`flex text-center text-white  gap-4 ${roboto.className}`}>
                 <Link href="/"> <li className='hover:text-text'>About</li></Link>
                  <Link href="#contact"><li className='hover:text-text'>Contact</li></Link>
                 <Link href="#project"> <li className='hover:text-text'>Portfolio</li></Link>
              </ul>
          </nav>
          <div className='hidden gap-3 sm:flex'>
              <Social />
          </div>
   </header>
      
  )
}

export default Header