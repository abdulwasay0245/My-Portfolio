import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
      <div className=' w-full h-[100px] flex items-center justify-center bg-darkBlue lg-max:h-96'>
          <div className='w-[80vw] h-[100px] flex items-center justify-between text-2xl text-white lg-max:flex-col '>
              <div className='w-[30%] m-3 h-full flex items-center justify-center font-bold sm-max:text-[20px] sm-max:w-[50%] sm-max:mt-[-60px]  xsm-max:w-[70%]'>Abdul Wasay</div>
              <div className='w-[80%] h-full flex justify-evenly sm-max:flex-col sm-max:gap-3  '>
                  <Link href='/' className='content-center sm-max:self-center'><button>Home</button></Link>
                  <Link href='/about' className='content-center sm-max:self-center'><button>About</button></Link>
                  <Link href='saf' className='content-center sm-max:self-center'>Work</Link>
                  <button className='w-[180px] h-[50px] rounded-[10px] bg-buttons self-center content-center '><Link href='https://personal-portfolio-seven-sand-46.vercel.app/Abdul-Wasay.pdf' target='_blank' >Get in touch</Link></button>

              </div>
          </div>
      </div>
      
  )
}

export default Header