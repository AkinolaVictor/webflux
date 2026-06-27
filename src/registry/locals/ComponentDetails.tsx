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
import { get_component_data } from '@/utils/helper';
import Codeblock from './Codeblock';

interface Props {}

function ComponentDetails(props: Props) {
    const {} = props
    const view = false
    const [viewState, setView] = useState("preview")
    const {setGeneralAlpha} = generalFunctions()
    const [library, setLibrary] = useState({
        title: "React Code",
        description: "This is also fully compatible with NextJs.",
        value: "rt"
    })
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
    useEffect(()=>{
        // const resp = get_component_data(path)
        // setCompData(resp)
    }, [path])

    // console.log(get_data())
    const showcode = `${language.value}_${styling.value}`

    if(comp_data === null) {
        return (
            <div className='w-full h-full bg-black flex justify-center items-center'>
                <p>data not found</p>
            </div>
        )
    }

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
                                    {comp_data?.setup.cli.usage}
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

                                <p className='mt-5'>Code</p>
                                <div className='w-full flex gap-4 mt-3 mb-4'>
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
                                    {/* {sample_code} */}
                                    {comp_data?.setup.rawcode.codes[showcode]}
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


// https://docs.google.com/forms/d/e/1FAIpQLSdiyODrp3ZQryA0vKneZ3grErJpRAk7O1JNccwWhWX95d7G3g/formResponse?pli=1






// https://21st.dev/community/components
// "use client";
// import { useEffect, useRef, useCallback } from "react";

// interface InkRevealProps {
//   /** RGB color of the mask overlay, e.g. [252, 250, 248] */
//   maskColor?: [number, number, number];
//   /** Radius of each ink stamp in px */
//   brushSize?: number;
//   /** How long each stamp lives before fading (ms) */
//   lifetime?: number;
//   /** Initial radius before the stamp expands */
//   rStart?: number;
//   /** Random variation factor for stamp radius (0–1) */
//   rVary?: number;
//   /** Min pixel distance between stamps along a stroke */
//   stampStep?: number;
//   /** Max stamps alive at once (oldest are pruned) */
//   maxStamps?: number;
//   /** Number of segments on the wobble circle (higher = smoother) */
//   segments?: number;
//   /** Wobble amplitude weights [primary, secondary, tertiary] */
//   wobble?: [number, number, number];
//   /** Gradient inner-radius factor (0–1, relative to stamp radius) */
//   gradientInnerRadius?: number;
//   /** Gradient opacity stops [center, mid, edge] */
//   gradientStops?: [number, number, number];
//   /** Extra CSS class for the canvas element */
//   className?: string;
//   /** Extra inline styles for the canvas element */
//   style?: React.CSSProperties;
// }

// interface Stamp {
//   x: number;
//   y: number;
//   born: number;
//   seed: number;
//   rmax: number;
// }

// export default function InkReveal({
//   maskColor = [252, 250, 248],
//   brushSize = 128,
//   lifetime = 600,
//   rStart = 10,
//   rVary = 0.45,
//   stampStep = 10,
//   maxStamps = 200,
//   segments = 36,
//   wobble = [0.14, 0.08, 0.05],
//   gradientInnerRadius = 0.2,
//   gradientStops = [0.95, 0.88, 0],
//   className,
//   style,
// }: InkRevealProps) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const stampsRef = useRef<Stamp[]>([]);
//   const runningRef = useRef(false);
//   const lastPosRef = useRef<{ x: number; y: number } | null>(null);
//   const dimsRef = useRef({ w: 0, h: 0 });

//   const mc = maskColor;

//   const resize = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const parent = canvas.parentElement;
//     if (!parent) return;

//     const dpr = Math.min(window.devicePixelRatio || 1, 2);
//     const rect = parent.getBoundingClientRect();
//     const w = rect.width;
//     const h = rect.height;
//     dimsRef.current = { w, h };
//     canvas.width = Math.round(w * dpr);
//     canvas.height = Math.round(h * dpr);
//     canvas.style.width = `${w}px`;
//     canvas.style.height = `${h}px`;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;
//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     ctx.globalCompositeOperation = "source-over";
//     ctx.fillStyle = `rgb(${mc[0]},${mc[1]},${mc[2]})`;
//     ctx.fillRect(0, 0, w, h);
//   }, [mc]);

//   const carveInk = useCallback(
//     (
//       ctx: CanvasRenderingContext2D,
//       x: number,
//       y: number,
//       r: number,
//       seed: number,
//       alpha: number
//     ) => {
//       const g = ctx.createRadialGradient(
//         x, y, r * gradientInnerRadius,
//         x, y, r
//       );
//       g.addColorStop(0, `rgba(0,0,0,${gradientStops[0] * alpha})`);
//       g.addColorStop(0.5, `rgba(0,0,0,${gradientStops[1] * alpha})`);
//       g.addColorStop(1, `rgba(0,0,0,${gradientStops[2] * alpha})`);
//       ctx.fillStyle = g;

//       ctx.beginPath();
//       for (let i = 0; i <= segments; i++) {
//         const a = (i / segments) * Math.PI * 2;
//         const wob =
//           0.78 +
//           wobble[0] * Math.sin(a * 3 + seed) +
//           wobble[1] * Math.sin(a * 5 + seed * 2.1) +
//           wobble[2] * Math.sin(a * 7 + seed * 0.7);
//         const px = x + Math.cos(a) * r * wob;
//         const py = y + Math.sin(a) * r * wob;
//         i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
//       }
//       ctx.closePath();
//       ctx.fill();
//     },
//     [segments, wobble, gradientInnerRadius, gradientStops]
//   );

//   const addStamp = useCallback(
//     (x: number, y: number) => {
//       const stamps = stampsRef.current;
//       if (stamps.length >= maxStamps) stamps.shift();
//       stamps.push({
//         x,
//         y,
//         born: performance.now(),
//         seed: Math.random() * Math.PI * 2,
//         rmax: brushSize * (1 - rVary + Math.random() * rVary),
//       });
//     },
//     [brushSize, rVary, maxStamps]
//   );

//   const stampAlong = useCallback(
//     (x: number, y: number) => {
//       const last = lastPosRef.current;
//       if (!last) {
//         addStamp(x, y);
//       } else {
//         const dx = x - last.x;
//         const dy = y - last.y;
//         const dist = Math.hypot(dx, dy);
//         const steps = Math.max(1, Math.ceil(dist / stampStep));
//         for (let i = 1; i <= steps; i++) {
//           addStamp(last.x + (dx * i) / steps, last.y + (dy * i) / steps);
//         }
//       }
//       lastPosRef.current = { x, y };
//     },
//     [addStamp, stampStep]
//   );

//   const loop = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;
//     const { w, h } = dimsRef.current;
//     const now = performance.now();
//     const stamps = stampsRef.current;

//     ctx.globalCompositeOperation = "source-over";
//     ctx.fillStyle = `rgb(${mc[0]},${mc[1]},${mc[2]})`;
//     ctx.fillRect(0, 0, w, h);
//     ctx.globalCompositeOperation = "destination-out";

//     for (let i = stamps.length - 1; i >= 0; i--) {
//       const t = (now - stamps[i].born) / lifetime;
//       if (t >= 1) {
//         stamps.splice(i, 1);
//         continue;
//       }
//       const ease = 1 - Math.pow(1 - t, 3);
//       const r = rStart + (stamps[i].rmax - rStart) * ease;
//       const alpha = 1 - t * t;
//       carveInk(ctx, stamps[i].x, stamps[i].y, r, stamps[i].seed, alpha);
//     }

//     if (stamps.length) {
//       requestAnimationFrame(loop);
//     } else {
//       runningRef.current = false;
//     }
//   }, [carveInk, mc, lifetime, rStart]);

//   const startLoop = useCallback(() => {
//     if (!runningRef.current) {
//       runningRef.current = true;
//       requestAnimationFrame(loop);
//     }
//   }, [loop]);

//   useEffect(() => {
//     resize();
//     window.addEventListener("resize", resize);
//     return () => window.removeEventListener("resize", resize);
//   }, [resize]);

//   const getRelativePos = (e: React.MouseEvent<HTMLCanvasElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     return { x: e.clientX - rect.left, y: e.clientY - rect.top };
//   };

//   return (
//     <canvas
//       ref={canvasRef}
//       className={className}
//       style={{
//         position: "absolute",
//         inset: 0,
//         zIndex: 1,
//         cursor: "none",
//         ...style,
//       }}
//       onMouseEnter={(e) => {
//         const pos = getRelativePos(e);
//         lastPosRef.current = pos;
//         stampAlong(pos.x, pos.y);
//         startLoop();
//       }}
//       onMouseMove={(e) => {
//         const pos = getRelativePos(e);
//         stampAlong(pos.x, pos.y);
//         startLoop();
//       }}
//       onMouseLeave={() => {
//         lastPosRef.current = null;
//       }}
//     />
//   );
// }


// i have a 