import Image from 'next/image';
import { scriptFont, roboto } from '../fonts/fonts'
import skills from './data/skills';

const Skills = () => {
    const math = Math
    return (
        
        <div className='py-6 space-y-2'>
        <h1 className={`${scriptFont.className} text-6xl text-orange`}>Skills</h1>
            <div className='grid grid-cols-3 grid-rows-3 border-white border-2 h-screen w-full'></div>
            
            {skills.map((skill) => (
                <Image key={math.random()}
                    alt='s'
                    width={500}
                    height={500}
                    src={skill.img}>

                </Image>
            ))}
        </div>
        


    )
}

export default Skills;