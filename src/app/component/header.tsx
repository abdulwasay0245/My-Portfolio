import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4">
      <div className="max-w-[1200px] mx-auto mt-6 bg-[#171717] backdrop-blur-[10px] rounded-[60px] p-2 px-3 flex justify-between items-center shadow-2xl border border-white/5">
        
        {/* Left Links */}
        <nav className="hidden lg:flex items-center gap-2">
          <Link href="/" className="bg-brand-orange text-white rounded-[60px] px-8 py-3 font-urbanist font-bold text-[17px]">
            Home
          </Link>
          <a href="#about" className="text-white font-urbanist text-[17px] px-6 hover:text-brand-orange transition-colors">About</a>
          <a href="#services" className="text-white font-urbanist text-[17px] px-6 hover:text-brand-orange transition-colors">Service</a>
        </nav>

        {/* Center Logo */}
        <div className="flex items-center gap-2 px-8 lg:px-0">
          <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm tracking-tighter">
            AW
          </div>
          <span className="text-white font-urbanist font-bold text-xl tracking-wide">WASAY</span>
        </div>
        
        {/* Right Links */}
        <nav className="hidden lg:flex items-center gap-2 pr-6">
          <a href="#resume" className="text-white font-urbanist text-[17px] px-6 hover:text-brand-orange transition-colors">Resume</a>
          <a href="#portfolio" className="text-white font-urbanist text-[17px] px-6 hover:text-brand-orange transition-colors">Project</a>
          <a href="#contact" className="text-white font-urbanist text-[17px] px-6 hover:text-brand-orange transition-colors">Contact</a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden text-white cursor-pointer px-4 bg-white/10 p-3 rounded-full">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
        
      </div>
    </header>
  );
};

export default Header;