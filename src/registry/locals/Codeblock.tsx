import { copyThisCode } from '@/utils/helper'
import { Copy } from 'lucide-react'
import React, { useState } from 'react'

interface Props {
    data: any,
    hideNav?: boolean,
}

function Codeblock(props: Props) {
    const {data, hideNav} = props

    const [state, setState] = useState({
        name: data[0].name || "npm",
        code: data[0].code || "npx shadcn@latest init"
    })

    
    return (
        <div className='darkbg w-full rounded-[13px] px-2 py-2 mb-1'>
            <div className={`gap-3 justify-center items-center px-4 ${hideNav?"hidden":"flex"}`}>
                {
                    data.map((item: any, index: number)=>{
                        return (
                            <div 
                                key={index} 
                                onClick={()=>{setState(item)}}
                                className='cursor-pointer'
                            >
                                <p className='my-3 opacity-100'>{item.name}</p>
                                <div className={`w-full h-0.5 bg-white ${state.name==item.name?"opacity-100":"opacity-0"}`}/>
                            </div>
                        )
                    })
                }

                <div className='ml-auto cursor-pointer'>
                    <Copy className='' size={15}/>
                    {/* <div className='w-full h-0.5 bg-transparent'/> */}
                </div>
            </div>

            <div className='bg-black w-auto max-w-full h-auto rounded-[11px] px-3 py-4  mb-1.5s relative'>
                <code className='text-[#439EF4] wrap-break-word break-all'>
                    {state.code}
                </code>
                <div onClick={()=>{copyThisCode(state.code)}} className='cursor-pointer absolute top-3 right-3 w-7 h-7 rounded-[10px] flex justify-center items-center bg-[#3c3838] '>
                    <Copy size={14}/>
                </div>
            </div>
        </div>
    )
}

export default Codeblock
