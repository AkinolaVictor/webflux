import TextFadeDown from '@/registry/webflux/texts/TextFadeDown'
import TextFadeSkew_2 from '@/registry/webflux/texts/TextFadeSkew_2'
import { pad_x } from '@/utils/helper'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface Props {}

function HomeDescription(props: Props) {
    const {} = props

    return (
        <div className={`w-full ${pad_x} py-10 mt-20 text-center gap-7 h-auto flex flex-col justify-center items-center max-w-220`}>
            {/* <h1 className='text-[30px] font-bold'>Bring Motion and Interaction to Every Interface</h1> */}
            {/* <h1 className='text-[30px] font-bold'>Beautiful, Event-Driven Components for the Modern Web</h1> */}
            {/* <h1 className='text-[30px] font-bold'>Open-Source Components That Feel Alive</h1> */}
            <TextFadeDown progression='char_line'>
                <h1 className='text-[30px] font-bold'>Build Interfaces That Move Naturally</h1>
            </TextFadeDown>
            <TextFadeSkew_2
                // progression='word'
                // speed={0.1}

                speed={0.05}
                className='text-[rosybrown] text-[16px]'
                text={`
                    An open-source collection of beautifully animated components that respond naturally to user interactions. 
                    Easy to use, easy to customize, and simple to copy, paste, or install in any project.
                `}
            />
            <div className='flex justify-center items-center flex-wrap gap-3'>
                <Link href={"/getting_started"}>
                    <button type="button" className='px-6 text-[14px] text-black min-h-10 bg-white rounded-full flex justify-center items-center gap-3 cursor-pointer'>
                        <p>Get Started</p>
                        <ArrowUpRight />
                    </button>
                </Link>

                <Link href={"/components"}>
                    <button type="button" className='px-6 text-[14px] text-white min-h-10 bg-[#222222] rounded-full flex justify-center items-center cursor-pointer'>
                        <p>Browse Components</p>
                    </button>
                </Link>
            </div>

            <div className='flex justify-center items-center gap-1 flex-wrap text-black text-[13px] '>
                <div className='min-w-10 min-h-10 rounded-full bg-blue-100s flex justify-center items-center'>
                    <img src="react.png" alt="react icon" className='w-9 h-9' />
                </div>
                <div className='min-w-10 min-h-10 rounded-full bg-blue-100s flex justify-center items-center'>
                    <img src="vue.png" alt="vue icon" className='w-11 h-11' />
                </div>
                {/* <div className='min-w-10 min-h-10 rounded-full bg-blue-100 flex justify-center items-center'>Nx</div>
                <div className='min-w-10 min-h-10 rounded-full bg-blue-100 flex justify-center items-center'>Nu</div> */}
            </div>
        </div>
    )
}

export default HomeDescription
