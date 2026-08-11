import React from 'react';
import Social from './data/socialLink';
import { roboto } from '../fonts/fonts';

const Footer = () => {
  return (
    <footer className='flex flex-col justify-start items-center gap-8 py-16 bg-background border-t border-border'>
      <div className='flex flex-col items-center w-full px-4 gap-6'>
        <div className='flex gap-4 px-4 shrink-0 text-muted-foreground'>
          <Social />
        </div>
      </div>
      <div className={`flex flex-col items-center gap-2 text-muted-foreground text-xs uppercase tracking-widest ${roboto.className}`}>
        <p>© 2026. All Rights Reserved.</p>
        <p>
            Developed & Designed by <span className="text-foreground font-bold">AW.</span>
        </p>
      </div>
 </footer>
  )
}

export default Footer;