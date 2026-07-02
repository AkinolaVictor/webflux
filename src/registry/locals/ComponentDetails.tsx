import { ChevronDown, ChevronUp, CodeXml, Copy, Eye } from 'lucide-react'
import React, { Fragment, useEffect, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, hybrid, magula, monokai, rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark, a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import CLI_Prompts from './CLI_Prompts';
// import CodeBlock_Custom from './CodeBlock_Custom';
// import {sample_code} from "../../utils/codes/sample_code"
// import Select from 'react-select';
import CustomDropdown from './CustomDropdown';
import { generalFunctions } from '@/utils/generalFunctions';
import ComponentProperties from './ComponentProperties';
import { usePathname } from 'next/navigation';
// import { components_directories } from '@/utils/comp_dir/components_directories';
import { copyThisCode, get_component_data } from '@/utils/helper';
import Codeblock from './Codeblock';
import Link from 'next/link';

interface Props {}

function ComponentDetails(props: Props) {
    const {} = props
    const view = false
    const [viewState, setView] = useState("preview")
    const {setGeneralAlpha} = generalFunctions()
    const [similarAnimations, setSimilarAnimations] = useState(true)
    const [ts_tw, set_ts_tw] = useState("")
    const [ts_cs, set_ts_cs] = useState("")
    const [js_tw, set_js_tw] = useState("")
    const [js_cs, set_js_cs] = useState("")
    const [usage, setUsage] = useState("")
    const allCodes:any = {
        ts_tw,
        ts_cs,
        js_tw,
        js_cs
    }

    const [codeState, setCodeState] = useState("cli")
    const [language, setLanguage] = useState({
        title: "Typescript",
        description: "Use the typescript version of this code",
        value: "ts"
    })
    const [styling, setStyling] = useState({
        title: "Tailwind",
        description: "Please ensure to have tailwind setup in your project",
        value: "tw"
    })
    const [concept, setConcept] = useState(false)
    const path = usePathname()
    // const [comp_data, setCompData] = useState<any>()
    // console.log(path)
    const comp_data:any = get_component_data(path)
    // useEffect(()=>{
    //     // const resp = get_component_data(path)
    //     // setCompData(resp)
    // }, [path])

    // console.log("just testing")
    // const showcode = `${language.value}_${styling.value}`
    const showcode = `${"js"}_${"cs"}`
    
    useEffect(()=>{
        if(!comp_data) return
        
        // comp_data?.setup.rawcode.codes["ts_tw"](set_ts_tw)
        // comp_data?.setup.rawcode.codes["ts_cs"](set_ts_cs)
        // comp_data?.setup.rawcode.codes["js_tw"](set_js_tw)
        comp_data?.setup.rawcode.codes["js_cs"](set_js_cs)
        comp_data?.setup.cli.usage(setUsage)
    }, [comp_data])

    if(comp_data === null) {
        return (
            <div className='w-full h-full bg-black flex justify-center items-center'>
                <p>Waiting for response...</p>
            </div>
        )
    }

    const ThisPreview = comp_data.preview

    return (
        <div>
            
            <p className='text-[23px] font-bold mt-10'>{comp_data.title}</p>
            <p className='mt-1 opacity-70'>
                {comp_data?.description}
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
                    {
                        comp_data.concept?
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
                                    {comp_data.concept}
                                </p>:
                                null
                            }
                        </div>:
                        null
                    }
                    {
                        comp_data.similar?
                        <div className='w-full h-auto p-4 darkbg rounded-[10px] mt-7'>
                            <div className='flex justify-between items-center cursor-pointer' onClick={()=>setSimilarAnimations(!similarAnimations)}>
                                <p className='text-[14px]'>
                                    Check Similar Animations
                                </p>
                                {
                                    similarAnimations?
                                    <ChevronUp size={17} />:
                                    <ChevronDown size={17} />
                                }
                            </div>
                            {
                                similarAnimations?
                                <div className='w-full my-4 flex gap-3 justify-start items-center flex-wrap'>
                                    {
                                        comp_data.similar.map((item:any, index:number)=>{
                                            return (
                                                <Link key={index} href={item.href}>
                                                    <div 
                                                        key={index}
                                                        className={`
                                                            flex justify-center items-center gap-3 cursor-pointer rounded-full border px-4 py-1.5 text-[12px] min-w-40 w-40 max-w-60
                                                        `}
                                                    >
                                                        <p>{item.name}</p>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>:
                                null
                            }
                        </div>:
                        null
                    }
                    <div className={`component-preview-container w-full h-120 bg-amber-600s rounded-2xl_e mt-5 border border-[#757070] overflow-x-hidden overflow-y-auto`}>
                        {
                            ThisPreview?
                            <ThisPreview />:
                            null
                        }
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
                            {/* <CustomDropdown 
                                value={library.title}
                                listOptions = {
                                    {
                                        title: "Library",
                                        options: [
                                            {
                                                title: "React Code",
                                                description: "This is also fully compatible with NextJs.",
                                                value: "rt"
                                            },
                                            {
                                                title: "Vue Code",
                                                description: "This is also fully compatible with NuxtJs.",
                                                value: "vu"
                                            },
                                        ],
                                        setter: (value:string)=>{setLibrary(value)}
                                    }
                                }
                            /> */}
                        </div>
                    </div>
                    
                    <div>
                        {
                            codeState==="cli"?
                            <div>
                                {/* <CLI_Prompts /> */}
                                <Codeblock
                                    hideNav
                                    data={[
                                        {
                                            name: "npm",
                                            code: comp_data?.setup.cli.npm
                                        }
                                    ]}
                                />

                                <p className='text-[20px] mt-8'>Usage</p>
                                <div className={`w-full h-auto rounded-2xl mt-3 p-5 border border-[#757070] relative`}>
                                    <div onClick={()=>{copyThisCode(usage)}} className='cursor-pointer absolute top-5 right-5 w-7 h-7 rounded-[10px] flex justify-center items-center bg-[#3c3838] '>
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
                                    {/* {comp_data?.setup.cli.usage} */}
                                    {usage}
                                    </SyntaxHighlighter>

                                </div>
                            </div>:
                            <div>
                                {
                                    comp_data?.setup.rawcode.dependencies?
                                    <div>
                                        <p className='mb-1'>Install Dependencies</p>
                                        <p className='text-[12px] mb-3 opacity-50'>You need to install the basic dependencies so the code could works properly</p>
                                        {/* <CLI_Prompts /> */}
                                        <Codeblock
                                            hideNav
                                            data={[
                                                {
                                                    name: "npm",
                                                    code: comp_data?.setup.rawcode.dependencies
                                                }
                                            ]}
                                        />
                                    </div>:
                                    null
                                }

                                <p className='mt-5'>Raw Code</p>
                                {/* <div className='w-full flex gap-4 mt-3 mb-4'>
                                    <CustomDropdown 
                                        value={language.title}
                                        listOptions = {
                                            {
                                                title: "Language",
                                                options: [
                                                    {
                                                        title: "Typescript",
                                                        description: "Use the typescript version of this code",
                                                        value: "ts"
                                                    },
                                                    {
                                                        title: "Javascript",
                                                        description: "Use the javascript version of this code",
                                                        value: "js"
                                                    },
                                                ],
                                                setter: (value:any)=>{setLanguage(value)}
                                            }
                                        }
                                    />
                                    <CustomDropdown 
                                        value={styling.title}
                                        listOptions = {
                                            {
                                                title: "Styling",
                                                options: [
                                                    {
                                                        title: "Tailwind",
                                                        description: "Please ensure to have tailwind setup in your project",
                                                        value: "tw"
                                                    },
                                                    {
                                                        title: "Inline Css",
                                                        description: "No dependency required for this to work",
                                                        value: "cs"
                                                    },
                                                ],
                                                setter: (value:any)=>{setStyling(value)}
                                            }
                                        }
                                    />
                                </div> */}
                                <div className={`w-full h-auto bg-amber-600s rounded-2xl mt-3 p-5 border border-[#757070] relative`}>
                                    <div onClick={()=>{copyThisCode(allCodes[showcode])}} className='cursor-pointer absolute top-5 right-5 w-7 h-7 rounded-[10px] flex justify-center items-center bg-[#3c3838] '>
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
                                    {/* {sample_code} */}
                                    {/* {comp_data?.setup.rawcode.codes[showcode]} */}
                                    {allCodes[showcode]}
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