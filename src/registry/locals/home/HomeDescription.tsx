import { pad_x } from '@/utils/helper'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface Props {}

function HomeDescription(props: Props) {
    const {} = props

    return (
        <div className={`w-full ${pad_x} py-10 mt-20 text-center gap-7 h-auto flex flex-col justify-center items-center max-w-220`}>
            <h1 className='text-[30px] font-bold'>Animate your UI with smooth style</h1>
            <p className='text-[rosybrown] text-[16px]'>
                A fully animated, open-source React component distribution. 
                Browse a list of animated primitives, components and icons 
                you can install and use in your projects.
            </p>
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
