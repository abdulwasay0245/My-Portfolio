import React from 'react'
import Button from './Button'
import { roboto } from '../fonts/fonts'
import { Copy, Mail } from 'lucide-react'

export const Contact = () => {
  return (
      <section className='flex flex-col gap-20 gradient-background items-center justify-center text-center text-white' style={roboto.style}>
          <div className='flex flex-col gap-4  leading-tight '>
              <Button title='Get in touch'></Button>
              <p className=''>What is next? Feel free to reach out to me if you are looking for a developer,<br /> have a query, or simply want to connect.</p>
          </div>
          <div>
              <div className='flex gap-2 items-center'>
                  <Mail />
                  <h1 className='text-3xl font-medium'>abdulwasay0245@gmail.com</h1>
                  <Copy className='hover:bg-slate-500 duration-100 rounded-lg' />
              </div>
          </div>
          <div></div>
    </section>
  )
}
