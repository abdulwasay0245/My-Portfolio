import React from 'react'
import { roboto } from '../fonts/fonts'

const Button = ({title}:{title:string}) => {
  return (
      <button className={`bg-transparent border-2 border-orange px-6 py-2 rounded-2xl text-lg font-normal text-orange hover:bg-orange hover:text-grey hover:duration-300 ${roboto.className}`}>{title}</button>
  )
}

export default Button