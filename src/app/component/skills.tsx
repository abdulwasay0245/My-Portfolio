import Image from 'next/image';
import { scriptFont, roboto } from '../fonts/fonts'
import skills from './data/skills';

const Skills = () => {
    const math = Math
    return (
        
        <div className='py-6 space-y-2'>
        <h1 className={`${scriptFont.className} text-6xl text-orange`}>Skills</h1>
            <div className='grid grid-cols-3 border-white border-2 h-screen w-full'>
            
            {skills.map((skill) => (
                <div key={math.random()}>

                <Image
                    alt='s'
                    width={100}
                    height={100}
                    src={skill.img}>

                </Image>
                        </div>
            ))}
                </div>
        </div>
        


    )
}

export default Skills;