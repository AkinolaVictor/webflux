import Codeblock from '@/registry/locals/Codeblock'
import Footer from '@/registry/locals/Footer'
import TopHeader from '@/registry/locals/home/TopHeader'
import { pad_x } from '@/utils/helper'
import { ChevronDown, ChevronUp, Copy } from 'lucide-react'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, hybrid, magula, monokai, rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {sample_code_2} from "@/utils/codes/sample_code"
import ComponentIntro from '@/registry/locals/ComponentIntro'

interface Props {}

function Getting_started(props: Props) {
    const {} = props
    const [which, setWhich] = useState(["installation", "introduction"])
    function togglecClick(sec:string){
        setWhich((prev:any)=>{
            const curr = [...prev]
            if(curr.includes(sec)){
                const ind = curr.indexOf(sec)
                curr.splice(ind, 1)
            } else {
                curr.push(sec)
            }
            return curr
        })
    }
    return (
        <div
            className={`bg-black w-full min-h-screen`}
        >
            <Head>
                <title>Webflux || Getting Started</title>
                <meta name="description" content="The webflux homepage" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopHeader />

            {/* Psalm 27 */}
            <div className={`${pad_x} w-full max-w-225 mt-20 h-auto mx-auto`}>

                <div onClick={()=>{togglecClick("introduction")}} className='flex justify-between items-center cursor-pointer'>
                    <p className={`text-[20px] font-semibold mb-5`}>Introduction</p>
                    {
                        which.includes("introduction")?
                        <ChevronUp size={"20px"}/>:
                        <ChevronDown size={"20px"}/>
                    }
                </div>

                <div className={`${which.includes("introduction")?"flex":"hidden"} flex-col gap-6 mb-5`}>
                    <ComponentIntro />
                </div>

                <div onClick={()=>{togglecClick("installation")}} className='flex justify-between items-center cursor-pointer'>
                    <p className={`text-[20px] font-semibold mb-5`}>Installation</p>
                    {
                        which.includes("installation")?
                        <ChevronUp size={"20px"}/>:
                        <ChevronDown size={"20px"}/>
                    }
                </div>

                <div className={` flex flex-col gap-6  ${which.includes("installation")?"flex":"hidden"}`} >

                    <p>How to install dependencies and structure your app.</p>
                    
                    <div className='w-full flex flex-col gap-2 px-7 py-5 bg-[#262626] rounded-[14px] '>
                        <p>
                            <span className='font-bold'>Note: </span> 
                            We use installation process as 
                            <Link href={"https://ui.shadcn.com/docs/installation"} className='font-bold'> <u>shadcn/ui</u></Link>.
                        </p>
                    </div>

                    <div className='w-full flex flex-col gap-2 px-7 py-5 bg-[#262626] rounded-[14px] '>
                        <p>
                            <span className='font-bold'>Note: </span> 
                            You can also use the raw code manually by copying and pasting it (from the component page) to your project
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
                        <div className=' w-full flex flex-col gap-3.5 justify-start items-start mb-10'>
                            <p className='min-h-10 flex justify-center items-center px-4 font-bold text-[15px]'>Intialize shadcn/ui</p>
                            <p className='px-4'>Run the <code className='bg-[#262626] p-1 rounded-[5px]'>init</code> command to create a new project with shadcn/ui or add it to existing one.</p>

                            <Codeblock 
                                hideNav
                                data={[
                                    {
                                        name: "npm",
                                        code: "npx shadcn@latest init"
                                    },
                                    {
                                        name: "pnpm",
                                        code: "pnpm dlx shadcn@latest init"
                                    },
                                    {
                                        name: "yarn",
                                        code: "yarn shadcn@latest init"
                                    },
                                    {
                                        name: "bun",
                                        code: "bunx --bun shadcn@latest init"
                                    }
                                ]}
                            />
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

                        <div className=' w-full flex flex-col gap-3.5 justify-start items-start mb-10'>
                            <p className='min-h-10 flex justify-center items-center px-4 font-bold text-[15px]'>Add Components</p>
                            <p className='px-4'>Run the  <code className='bg-[#262626] p-1 rounded-[5px]'>add</code> command to add a component to your project.</p>
                            <p className='px-4 text-[11px]'>For example, the <code className='p-1 rounded-[5px] darkbg mx-1'>TextFade</code> component</p>
                            
                            
                            <Codeblock 
                                hideNav
                                data={[
                                    {
                                        name: "npm",
                                        code: "npx shadcn add https://webflux-rouge.vercel.app/r/TextFade.json"
                                    }
                                ]}
                            />
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
                        <div 
                            className='w-auto max-w-full flex flex-col gap-3.5 justify-start items-start bg-yellow-500s'
                            style={{width: "calc(100% - 40px)"}}
                        >
                            <p className='min-h-10 flex justify-center items-center px-4 font-bold text-[15px]'>Import Components</p>
                            <p className='px-4'>Import the component to your project.</p>
                            
                            <SyntaxHighlighter
                                language="javascript" 
                                style={hybrid} 
                                // style={monokai} 
                                // style={rainbow} 
                                wrapLines
                                // wrapLongLines
                                // customStyle={{background: "#262626", width: "calc(100% - 40px)", maxWidth: "100%", borderRadius: "10px", padding: "20px", border: "none"}}
                                customStyle={{background: "#262626", width: "100%", maxWidth: "100%", borderRadius: "10px", padding: "20px", border: "none"}}
                                showLineNumbers
                                // useInlineStyles
                            >
                            {sample_code_2}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Getting_started
