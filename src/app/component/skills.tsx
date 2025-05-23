import Image from 'next/image';
import { scriptFont } from '../fonts/fonts'
import skills from './data/skills';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Skills = () => {
      useEffect(() => {
            AOS.init({
                duration: 1000,
                once: true,
            });
          },[])
    const math = Math
    return (
        
        <div className='py-6 space-y-2 text-center '>
        <h1 className={`${scriptFont.className} text-6xl text-orange `} data-aos = "fade-in" >Skills</h1>
            <div className='grid grid-cols-9 justify-items-center justify-center items-center gap-x-8  w-full'>
            
                {skills.map((skill) => (
                
                <div data-aos = "fade-right" key={math.random()} className='flex flex-col font-bold items-center  justify-center  text-center text-white'>
                    <div className='h-[100px] content-center'>

                <Image
                    alt='s'
                    width={60}
                    height={60}
                            src={skill.img}
                            className={`${skill.name === "Rest API's" && "invert" } ${skill.name === "MongoDB" && "h-14 w-14"}`}
                    >

                    </Image>
                        </div>
                    <h1 className=''>{ skill.name}</h1>
                        </div>
            ))}
                </div>
        </div>
        


    )
}

export default Skills;