import React from 'react'
import Link from 'next/link'
import { scriptFont, roboto } from '../fonts/fonts'

import Social from './data/socialLink'
const Header = () => {
  return (
      <header className= "sticky top-0 z-50 flex flex-col items-center p-6 gap-6 h-auto transition-all duration-300 backdrop-blur-md bg-background/70 border-b border-white/10 justify-between sm:flex-row sm:h-20 w-full mb-8">
          <h1 className={`animate-fade-in text-orange text-3xl font-bold ${scriptFont.className} drop-shadow-md`}>&lt;AW /&gt;</h1>
          <nav>
              <ul className={`flex text-center text-gray-300 gap-8 ${roboto.className} font-medium tracking-wide`}>
                 <Link href="/"><li className='hover:text-orange transition-colors duration-300 relative group'>
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
                 </li></Link>
                  <Link href="#contact"><li className='hover:text-orange transition-colors duration-300 relative group'>
                    Contact
                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
                  </li></Link>
                 <Link href="#project"><li className='hover:text-orange transition-colors duration-300 relative group'>
                    Portfolio
                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
                 </li></Link>
              </ul>
          </nav>
          <div className='hidden gap-3 sm:flex'>
              <Social />
          </div>
   </header>
      
  )
}

export default Header