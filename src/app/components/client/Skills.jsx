import Data from '@/data/data'
import { SkillsImage } from '@/utils/SkillImage'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const Skills = () => {
    return (
        <div className="w-full my-12">
            <Marquee gradient={false} speed={80} pauseOnHover={true} pauseOnClick={true} delay={0} play={true} direction="left">
                {
                    Data.skillsData.map((skill, id) => (
                        <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                            key={id}>
                            <div className="h-full w-full rounded-lg shadow-none shadow-gray-50 bg-white transition-all duration-500">
                                <div className="flex -translate-y-[1px] justify-center">
                                    <div className="w-3/4">
                                        <div className="h-[1px] w-full" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-3 p-6">
                                    <div className="h-8 sm:h-10">
                                        <Image src={SkillsImage(skill)?.src} alt={skill} width={40} height={40} className="h-full w-auto rounded-lg"
                                        />
                                    </div>
                                    <p className="text-sm sm:text-lg">
                                        {skill}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Marquee>
        </div>
    )
}

export default Skills