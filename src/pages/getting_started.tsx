import Footer from '@/registry/locals/Footer'
import TopHeader from '@/registry/locals/home/TopHeader'
import { pad_x } from '@/utils/helper'
import { Copy } from 'lucide-react'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

interface Props {}

function Getting_started(props: Props) {
    const {} = props

    return (
        <div
            className={`bg-black`}
        >
            <Head>
                <title>Webflux || Getting Started</title>
                <meta name="description" content="The webflux homepage" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopHeader />

            {/* Psalm 27 */}
            <div className={`${pad_x} w-full flex flex-col gap-6 max-w-225 h-auto mx-auto `}>
                <p className={`text-[27px] mt-20`}>Installation</p>

                <p>How to install dependencies and structure your app.</p>
                
                <div className='w-full flex flex-col gap-2 px-7 py-5 bg-[#262626] rounded-[14px] '>
                    <p>
                        <span className='font-bold'>Note: </span> 
                        We use installation process as 
                        <Link href={"https://ui.shadcn.com/docs/installation"} className='font-bold'> <u>shadcn/ui</u></Link>.
                    </p>
                </div>

                {/* initialize components */}
                <div className='relative flex w-full h-auto'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='min-w-10 min-h-10 rounded-full bg-[#262626] flex justify-center items-center'>
                            <p className=''>1</p>
                        </div>
                        <div className='w-0.5 h-full bg-[#262626]'/>
                    </div>
                    <div className=' w-full flex flex-col gap-3.5 justify-start items-start '>
                        <p className='min-h-10 flex justify-center items-center px-4 font-bold text-[15px]'>Intialize shadcn/ui</p>
                        <p className='px-4'>Run the <code className='bg-[#262626] p-1 rounded-[5px]'>init</code> command to create a new project with shadcn/ui or setup an existing one.</p>
                        
                        <div className='darkbg w-full rounded-[13px] px-2 mb-1'>
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

                            <div className='bg-black w-full h-auto rounded-[11px] px-3 py-4  mb-1.5'>
                                <code className='text-[#439EF4]'>
                                    <span className='text-[#0A41C9]'>npx</span> shadcn@latest init
                                </code>
                            </div>
                        </div>

                        <p className='min-h-10 flex justify-center items-center px-4 font-bold text-[15px]'>Or Add shadcn/ui to existing project</p>
                        <p className='px-4'>Run the <code className='bg-[#262626] p-1 rounded-[5px]'>init</code> command to create a new project with shadcn/ui or setup an existing one.</p>
                        
                        <div className='darkbg w-full rounded-[13px] px-2 mb-10'>
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

                            <div className='bg-black w-full h-auto rounded-[11px] px-3 py-4  mb-1.5'>
                                <code className='text-[#439EF4]'>
                                    <span className='text-[#0A41C9]'>npx</span> shadcn@latest init
                                </code>
                            </div>
                        </div>
                    </div>
                </div>

                {/* add components */}
                <div className='relative flex w-full h-auto -mt-6'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='min-w-10 min-h-10 rounded-full bg-[#262626] flex justify-center items-center'>
                            <p className=''>2</p>
                        </div>
                        <div className='w-0.5 h-full bg-[#262626]'/>
                    </div>
                    <div className=' w-full flex flex-col gap-3.5 justify-start items-start '>
                        <p className='min-h-10 flex justify-center items-center px-4 font-bold text-[15px]'>Add Components</p>
                        <p className='px-4'>Run the  <code className='bg-[#262626] p-1 rounded-[5px]'>add</code> command to add a component to your project.</p>
                        
                        <div className='darkbg w-full rounded-[13px] px-2 mb-10'>
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

                            <div className='bg-black w-full h-auto rounded-[11px] px-3 py-4  mb-1.5'>
                                <code className='text-[#439EF4]'>
                                    <span className='text-[#0A41C9]'>npx</span> shadcn@latest init
                                </code>
                            </div>
                        </div>
                    </div>
                </div>

                {/* import components */}
                <div className='relative flex w-full h-auto -mt-6'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='min-w-10 min-h-10 rounded-full bg-[#262626] flex justify-center items-center'>
                            <p className=''>3</p>
                        </div>
                        <div className='w-0.5 h-full bg-[#262626]'/>
                    </div>
                    <div className=' w-full flex flex-col gap-3.5 justify-start items-start '>
                        <p className='min-h-10 flex justify-center items-center px-4 font-bold text-[15px]'>Import Components</p>
                        <p className='px-4'>Import the component to your project.</p>
                        
                        <div className='darkbg w-full rounded-[13px] px-2'>
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

                            <div className='bg-black w-full h-auto rounded-[11px] px-3 py-4  mb-1.5'>
                                <code className='text-[#439EF4]'>
                                    <span className='text-[#0A41C9]'>npx</span> shadcn@latest init
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Getting_started
