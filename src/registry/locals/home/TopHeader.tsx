import React, { useEffect, useRef } from 'react'
import { TextAlignStart, UsersRound, X } from 'lucide-react';
import { pad_x } from '@/utils/helper';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {generalFunctions} from "@/utils/generalFunctions"
import { useSelector } from 'react-redux';

interface Props {}

function TopHeader(props: Props) {
    const {} = props
    const path = usePathname()
    const header = useRef<HTMLDivElement>(null)
    const {setGeneralAlpha} = generalFunctions()
    const {modalToggle} = useSelector((state:any)=>state.generalSlice)
    

    function getHeight(){
        const el_height = header.current?.getBoundingClientRect().height
        setGeneralAlpha("header_height", el_height)
    }

    function openModal(){
        setGeneralAlpha("modalToggle", (val:boolean)=>!val)
        setGeneralAlpha("modal_state", "menu")
    }

    useEffect(()=>{
        getHeight()
    }, [])

    return (
        <div ref={header} className={`w-full ${pad_x} py-2 pt-5 h-auto flex justify-between items-center bg-black z-1`}>

            <Link href={"/"}>
                <div className='flex justify-center items-center gap-3 cursor-pointer'>
                    <div className='min-w-9 min-h-9 rounded-full bg-blue-100'></div>

                    <p className='text-[20px]'>Webflux</p>
                </div>
            </Link>

            <div className='hidden w6:flex h-full w-full bg-blue-100s w10:justify-center justify-end gap-10 items-center'>
                <Link href={"/getting_started"}>
                    <div className=''>
                        <p className='mb-1'>Getting Started</p>
                        <div className={`w-full h-0.5 bg-white ${path?.includes("/getting_started")?"opacity-100":"opacity-0"}`}/>
                    </div>
                </Link>
                <Link href={"/components"}>
                    <div className=''>
                        <p className='mb-1'>Components</p>
                        <div className={`w-full h-0.5 bg-white ${path?.includes("/components")?"opacity-100":"opacity-0"}`}/>
                    </div>
                </Link>
            </div>

            <div className="hidden opacity-0 w10:flex justify-center items-center gap-3 cursor-pointer rounded-full border px-4 py-2 text-[14px]">
                <UsersRound size={"18px"}/>
                <p>Community</p>
            </div>

            <div onClick={openModal} className='w10:hidden cursor-pointer w6:ml-10'>
                {
                    modalToggle?
                    <X size={"24px"}/>:
                    <TextAlignStart size={"20px"}/>
                }
            </div>

        </div>
    )
}

export default TopHeader
