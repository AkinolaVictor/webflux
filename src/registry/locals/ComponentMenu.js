
import { Book, ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import {components_directories} from "../../utils/comp_dir/components_directories"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'


function ComponentMenu({func}) {
    // const {func} = props
    const [toggleState, setToggleState] = useState([""])
    const path = usePathname()
    const router = useRouter()

    function toggler(value){
        setToggleState((prev)=>{
            const curr = [...prev]
            if(curr.includes(value)){
                const ind = curr.indexOf(value)
                curr.splice(ind, 1)
            } else {
                curr.push(value)
            }
            return curr
        })
    }

    function click_handler(item){
        func && func()
        // const {title, href, id} = item
    }

    return (
        <div className='w-full mt-5'>

                <div>
                    {
                        components_directories.map((item_1, index_1)=>{
                            const hid = !toggleState.includes(item_1.section)
                            const Icon = item_1.Icon
                            return (
                                <div key={index_1} className='flex mb-5 w-full'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <div className='flex justify-center items-center min-w-5 min-h-5 rounded-[5px] bg-[#3c3838]'>
                                            {/* <Book size={"13px"}/> */}
                                            <Icon />
                                        </div>
                                        {
                                            hid?
                                            <div className='w-px h-full bg-white opacity-30'></div>:
                                            null
                                        }
                                    </div>

                                    <div className='text-[13px] w-full'>
                                        <div 
                                            className={`flex justify-between px-2 ${hid?"mb-3":"mb-0"} cursor-pointer ${false?"hidden":""}`}
                                            onClick={()=>toggler(item_1.section)}
                                        >
                                            <p className='opacity-80'>{item_1.section}</p>
                                            <div className='flex items-center justify-center gap-1 hover:bg-[#3c3838] px-0.5 rounded-[5px]'>
                                                {item_1.content.length>1&&<p className="text-[10px] px-2 py-1 flex justify-center items-center darkbg rounded-full">{item_1.content.length}</p>}
                                                {
                                                    hid?
                                                    <ChevronUp size={"15px"}/>:
                                                    <ChevronDown size={"15px"}/>
                                                }
                                            </div>
                                        </div>
                                        <div className={`${hid?'':"hidden"}`}>
                                            {
                                                item_1.content.map((item_2, index_2)=>{
                                                    const {title, href, id, hide} = item_2
                                                    const isPath = path==href
                                                    // console.log(isPath, thisRef)
                                                    return (
                                                        <Link
                                                            href={href}
                                                            key={index_2}
                                                            style={{display: hide?"none":"block"}}
                                                        >
                                                            <div 
                                                                key={index_2} 
                                                                onClick={()=>click_handler(item_2)}
                                                                className={`
                                                                    cursor-pointer rounded-[3px] w-full px-2 py-2 hover:bg-[#3c3838] 
                                                                    ${isPath?"bg-[#3c3838]":""}
                                                                `}
                                                            >
                                                                <p className='text-[12.5px] w-full h-full'>{title}</p>
                                                            </div>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default ComponentMenu
