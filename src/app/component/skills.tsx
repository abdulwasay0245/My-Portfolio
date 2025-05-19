import { scriptFont, roboto } from '../fonts/fonts'

const Skills = () => {
    return (
        
        <div className='py-6 space-y-2'>
        <h1 className={`${scriptFont.className} text-6xl text-orange`}>Skills</h1>
        <div className='grid grid-cols-3 grid-rows-3 border-white border-2 h-screen w-full'></div>
      </div>


    )
}

export default Skills;