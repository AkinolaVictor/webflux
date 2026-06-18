import { Copy } from 'lucide-react'
import React from 'react'

interface Props {}

function CLI_Prompts(props: Props) {
    const {} = props

    return (
        <div className='darkbg w-full rounded-[13px] p-2 mb-1 h-auto'>
            <div className='flex gap-3 justify-center items-center px-4'>
                <div className='cursor-pointer'>
                    <p className='my-3 opacity-100'>pnpm</p>
                    <div className='w-full h-0.5 bg-white'/>
                </div>
                <div className='cursor-pointer'>
                    <p className='my-3 opacity-60'>npm</p>
                    <div className='w-full h-0.5 bg-transparent'/>
                </div>
                <div className='cursor-pointer'>
                    <p className='my-3 opacity-60'>yarn</p>
                    <div className='w-full h-0.5 bg-transparent'/>
                </div>
                <div className='cursor-pointer'>
                    <p className='my-3 opacity-60'>bun</p>
                    <div className='w-full h-0.5 bg-transparent'/>
                </div>

                <div className='ml-auto cursor-pointer'>
                    <Copy className='' size={15}/>
                    <div className='w-full h-0.5 bg-transparent'/>
                </div>
            </div>

            <div className='bg-black w-full h-auto rounded-[11px] px-3 py-4 '>
                <code className='text-[#439EF4]'>
                    <span className='text-[#0A41C9]'>npx</span> shadcn@latest init
                </code>
            </div>
        </div>
    )
}

export default CLI_Prompts
