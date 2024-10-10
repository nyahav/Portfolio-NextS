import React from 'react'
import Social from '@/components/ui/social'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'

const hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>
            <div className="absolute w-full top-0 left-0 z-10 p-4" >
                <Social />
            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2]  
            flex items-center justify-center absolute top-0 left-0">

                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
                 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            </div>

            <div className="flex justify-center relative my-20 z-index-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className=' whitespace-nowrap uppercase tracking-widest text-lg text-center text-blue-100 max-w-80 '>
                        Dynamic Web Magic With Next.js
                    </h2>
                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        words="Transforming Concepts into Seamless Experiences"
                    />
                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                        Hi, I&apos;m Yahav, a Passionate Software Developer, based in Israel.
                    </p>
                    <a href="#about">
                        <MagicButton
                            title="Show my work"
                            icon={<FaLocationArrow />}
                            position='right'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default hero