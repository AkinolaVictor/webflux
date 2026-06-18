import { ChevronDown, ChevronUp, CodeXml, Copy, Eye } from 'lucide-react'
import React, { Fragment, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, hybrid, magula, monokai, rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark, a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CLI_Prompts from './CLI_Prompts';
import CodeBlock_Custom from './CodeBlock_Custom';
import {sample_code} from "../../utils/codes/sample_code"
import Select from 'react-select';
import CustomDropdown from './CustomDropdown';
import { generalFunctions } from '@/utils/generalFunctions';
import ComponentProperties from './ComponentProperties';

interface Props {}

function ComponentDetails(props: Props) {
    const {} = props
    const view = false
    const [viewState, setView] = useState("preview")
    const {setGeneralAlpha} = generalFunctions()
    const [library, setLibrary] = useState("React Code")
    const [codeState, setCodeState] = useState("cli")
    const [language, setLanguage] = useState("Typescript")
    const [styling, setStyling] = useState("Tailwind")
    const [concept, setConcept] = useState(false)

    return (
        <div>
            
            <p className='text-[23px] font-bold mt-10'>Crawling Texts</p>
            <p className='mt-1 opacity-70'>
                A set of layered sections of content—known as tab panels—that are displayed one at a time.
            </p>

            {/* preview and code */}
            <div className='flex mt-10 gap-5'>
                <div
                    onClick={()=>{setView("preview")}} 
                    className={`
                        flex justify-center items-center gap-3 cursor-pointer rounded-full border px-4 py-1.5 ${viewState=="preview"?" bg-[#121212]":"opacity-50"} text-[12px]
                    `}
                >
                    <Eye size={"18px"}/>
                    <p>Preview</p>
                </div>

                <div 
                    onClick={()=>{setView("code")}} 
                    className={`
                        flex justify-center items-center gap-3 cursor-pointer rounded-full border px-4 py-1.5 text-[12px] ${viewState=="code"?" bg-[#121212]":"opacity-50"}
                    `}
                >
                    <CodeXml size={"18px"}/>
                    <p>Code</p>
                </div>
            </div>


            {/* preview */}
            {
                viewState=="preview"?
                <div>
                    <div className='w-full h-auto p-4 darkbg rounded-[10px] mt-7'>
                        <div className='flex justify-between items-center cursor-pointer' onClick={()=>setConcept(!concept)}>
                            <p className='text-[14px]'>
                                {
                                    concept?
                                    "Concept":
                                    "Understand the concept"
                                }
                            </p>
                            {
                                concept?
                                <ChevronUp size={17} />:
                                <ChevronDown size={17} />
                            }
                        </div>
                        {
                            concept?
                            <p className='mt-3 text-[13px] opacity-70 text-justify'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, commodi? Ipsum odio veniam iste, hic eaque voluptas ea similique minus nihil autem? Optio at minima, exercitationem in nemo ex itaque eum eius. Beatae aliquid veniam delectus quam velit quod magni.
                            </p>:
                            null
                        }
                    </div>
                    <div className={`w-full h-full min-h-110 bg-amber-600s rounded-2xl mt-5 border border-[#757070]`}>

                    </div>
                </div>:
                viewState=="code"?
                <div className='py-10'>
                    <p className='text-[20px] mb-5'>{codeState==="cli"?"Installation using CLI":"Use the raw code"}</p>
                    <div className='flex justify-center items-center my-3 mb-8 gap-5 w-full'>
                        <div
                            onClick={()=>{setCodeState("cli")}} 
                            className={`
                                flex justify-center items-center gap-3 cursor-pointer rounded-full border px-4 py-1.5 ${codeState=="cli"?" bg-[#121212]":"opacity-50"} text-[12px]
                            `}
                        >
                            <p>Use CLI</p>
                        </div>

                        <div 
                            onClick={()=>{setCodeState("raw")}} 
                            className={`
                                flex justify-center items-center gap-3 cursor-pointer rounded-full border px-4 py-1.5 text-[12px] ${codeState=="raw"?" bg-[#121212]":"opacity-50"}
                            `}
                        >
                            <p>Raw Code</p>
                        </div>

                        <div className='ml-auto'>
                            <CustomDropdown 
                                value={library}
                                listOptions = {
                                    {
                                        title: "Library",
                                        options: [
                                            {
                                                title: "React Code",
                                                description: "This is also fully compatible with NextJs."
                                            },
                                            {
                                                title: "Vue Code",
                                                description: "This is also fully compatible with NuxtJs."
                                            },
                                        ],
                                        setter: (value:string)=>{setLibrary(value)}
                                    }
                                }
                            />
                        </div>
                    </div>
                    
                    <div>
                        {
                            codeState==="cli"?
                            <div>
                                <CLI_Prompts />

                                <p className='text-[20px] mt-8'>Usage</p>
                                <div className={`w-full h-auto rounded-2xl mt-3 p-5 border border-[#757070] relative`}>
                                    <div className='cursor-pointer absolute top-5 right-5 w-9 h-9 rounded-[10px] flex justify-center items-center bg-[#3c3838] '>
                                        <Copy size={14}/>
                                    </div>

                                    <SyntaxHighlighter
                                        language="javascript" 
                                        style={hybrid} 
                                        // style={monokai} 
                                        // style={rainbow} 
                                        customStyle={{background: "black", border: "none"}}
                                        showLineNumbers
                                        // useInlineStyles
                                    >
                                    {sample_code}
                                    </SyntaxHighlighter>

                                </div>
                            </div>:
                            <div>
                                <p className='mb-1'>Install Dependencies</p>
                                <p className='text-[12px] mb-3 opacity-50'>You need to install the basic dependencies so the code could works properly</p>
                                <CLI_Prompts />

                                <p className='mt-5'>Code</p>
                                <div className='w-full flex gap-4 mt-3 mb-4'>
                                    <CustomDropdown 
                                        value={language}
                                        listOptions = {
                                            {
                                                title: "Language",
                                                options: [
                                                    {
                                                        title: "Typescript",
                                                        description: "Use the typescript version of this code"
                                                    },
                                                    {
                                                        title: "Javascript",
                                                        description: "Use the javascript version of this code"
                                                    },
                                                ],
                                                setter: (value:string)=>{setLanguage(value)}
                                            }
                                        }
                                    />
                                    <CustomDropdown 
                                        value={styling}
                                        listOptions = {
                                            {
                                                title: "Styling",
                                                options: [
                                                    {
                                                        title: "Tailwind",
                                                        description: "Please ensure to have tailwind setup in your project"
                                                    },
                                                    {
                                                        title: "Inline Css",
                                                        description: "No dependency required for this to work"
                                                    },
                                                ],
                                                setter: (value:string)=>{setStyling(value)}
                                            }
                                        }
                                    />
                                </div>
                                <div className={`w-full h-auto bg-amber-600s rounded-2xl mt-3 p-5 border border-[#757070] relative`}>
                                    <div className='cursor-pointer absolute top-5 right-5 w-9 h-9 rounded-[10px] flex justify-center items-center bg-[#3c3838] '>
                                        <Copy size={14}/>
                                    </div>

                                    <SyntaxHighlighter
                                        language="javascript" 
                                        style={hybrid} 
                                        // style={monokai} 
                                        // style={rainbow} 
                                        customStyle={{background: "black", border: "none"}}
                                        showLineNumbers
                                        // useInlineStyles
                                    >
                                    {sample_code}
                                    </SyntaxHighlighter>

                                </div>
                            </div>
                        }
                    </div>
                </div>:
                <div></div>
            }

            <div className='w10:hidden flex w-full justify-center items-center'>
                {
                    viewState==="preview"?
                    <ComponentProperties />:
                    null
                }
            </div>
        </div>
    )
}

export default ComponentDetails
