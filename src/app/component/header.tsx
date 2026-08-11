import React from 'react'
import Link from 'next/link'
import { roboto } from '../fonts/fonts'
import Social from './data/socialLink'
import { ThemeToggle } from './ThemeToggle'

const Header = () => {
  return (
      <header className="sticky top-0 z-50 flex flex-col items-center p-6 gap-6 h-auto transition-all duration-300 bg-background/80 backdrop-blur-xl border-b border-border justify-between sm:flex-row sm:h-20 w-full mb-8">
          <h1 className={`text-foreground text-2xl font-black uppercase tracking-tighter hover:opacity-70 transition-opacity ${roboto.className}`}>
             AW<span className="text-muted-foreground">.</span>
          </h1>
          <nav>
              <ul className={`flex text-center text-muted-foreground gap-8 ${roboto.className} font-medium tracking-widest text-xs uppercase`}>
                 <Link href="/"><li className='hover:text-foreground transition-colors duration-300 relative group'>
                    About
                 </li></Link>
                  <Link href="#contact"><li className='hover:text-foreground transition-colors duration-300 relative group'>
                    Contact
                  </li></Link>
                 <Link href="#project"><li className='hover:text-foreground transition-colors duration-300 relative group'>
                    Portfolio
                 </li></Link>
              </ul>
          </nav>
          <div className='hidden gap-4 sm:flex items-center text-muted-foreground'>
              <ThemeToggle />
              <div className="w-px h-4 bg-border mx-2"></div>
              <Social />
          </div>
    </header>
  )
}

export default Header