import { generalFunctions } from '@/utils/generalFunctions'
import React from 'react'
import ComponentMenu from './ComponentMenu'
import { pad_x } from '@/utils/helper'
import TopHeader from './home/TopHeader'
import { Check } from 'lucide-react'
import { useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface Props {}

function ModalMenu(props: Props) {
    const {} = props
    const {setGeneralAlpha} = generalFunctions()
    const closeModal = ()=>setGeneralAlpha("modalToggle", false)
    const {header_height} = useSelector((state:any)=>state.generalSlice)
    const path = usePathname()
    // console.log(path)


    return (
        <div onClick={(e)=>e.stopPropagation()} className={`w-screen h-screen bg-black`}>
            <TopHeader />

            <div 
                className={`${pad_x} overflow-y-auto`}
                style={{height: `calc(100vh - ${header_height}px)`}}
            >
                <div className='block w6:hidden darkbg py-4 rounded-[10px] mt-5'>
                    {/* <p className='px-4 py-2'>Components</p> */}
                    <Link 
                        href={"/"} 
                        className='px-4 py-2 flex justify-between items-center'
                        onClick={closeModal}
                    >
                        <p className='px-4 py-2'>Home</p>
                        {
                            path=="/"?
                            <Check size={22}/>:
                            <p className='opacity-0'>d</p>
                        }
                    </Link>
                    <Link 
                        href={"/getting_started"} 
                        className='px-4 py-2 flex justify-between items-center'
                        onClick={closeModal}
                    >
                        <p className='px-4 py-2'>Getting Started</p>
                        {
                            path.includes("/getting_started")?
                            <Check size={22}/>:
                            <p className='opacity-0'>d</p>
                        }
                    </Link>
                    <Link 
                        href={"/components"} 
                        className='px-4 py-2 flex justify-between items-center'
                        onClick={closeModal}
                    >
                        <p className='px-4 py-2'>Components</p>
                        {
                            path.includes("/components")?
                            <Check size={22}/>:
                            <p className='opacity-0'>d</p>
                        }
                    </Link>
                </div>
                
                <p className='my-8 text-[20px]'>Components</p>
                {/* <div className='w-full h-0.5 bg-[#ffffff] mt-3'/> */}
                <ComponentMenu func={closeModal}/>
            </div>
        </div>
    )
}

export default ModalMenu
