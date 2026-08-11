'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { roboto } from '../fonts/fonts';
import { Copy, Mail, Phone, Check, ArrowUpRight } from 'lucide-react';

export const Contact = () => {
    const email = "abdulwasay0245@gmail.com";
    const phone = "+92 315 2127174";
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleCopyEmail = async () => {
      try {
          await navigator.clipboard.writeText(email);
          setCopiedEmail(true);
          setTimeout(()=> setCopiedEmail(false), 2000);
      } catch (error) {
        console.error(error);
      }
    };

    const handleCopyPhone = async () => {
        try {
            await navigator.clipboard.writeText(phone);
            setCopiedPhone(true);
            setTimeout(()=> setCopiedPhone(false), 2000);
        } catch (error) {
          console.error(error);
        }
    };

    useEffect(() => {
        if (!containerRef.current) return;
        const ctx = gsap.context(() => {
            gsap.from(".contact-elem", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

  return (
      <section id='contact' ref={containerRef} className='flex flex-col gap-10 py-32 px-6 items-center justify-center text-center relative overflow-hidden bg-background border-t border-border'>
          
          <div className='flex flex-col gap-6 items-center max-w-4xl px-6 mb-12 contact-elem'>
              <h2 className={`text-6xl md:text-9xl font-black text-foreground tracking-tighter uppercase leading-none ${roboto.className}`}>
                Let's Talk
              </h2>
              <p className='text-muted-foreground text-lg md:text-2xl font-light leading-relaxed max-w-2xl'>
                  Open for opportunities and exciting projects. Let's build something extraordinary together.
              </p>
          </div>

          <div className='flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center contact-elem'>
              <div className='flex flex-col items-center gap-6 p-8 w-full md:w-1/2 group'>
                  <h3 className='text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase'>Email</h3>
                  <button onClick={handleCopyEmail} className='text-xl md:text-3xl font-medium text-foreground hover:text-muted-foreground transition-colors flex items-center gap-3'>
                      {email} {copiedEmail ? <Check size={24} className="text-green-500" /> : <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </button>
              </div>

              <div className='hidden md:block w-px bg-border'></div>

              <div className='flex flex-col items-center gap-6 p-8 w-full md:w-1/2 group'>
                  <h3 className='text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase'>Phone</h3>
                  <button onClick={handleCopyPhone} className='text-xl md:text-3xl font-medium text-foreground hover:text-muted-foreground transition-colors flex items-center gap-3'>
                      {phone} {copiedPhone ? <Check size={24} className="text-green-500" /> : <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </button>
              </div>
          </div>
    </section>
  )
}
