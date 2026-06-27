import { components_and_description } from '@/utils/components_and_description'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

interface Props {
    env?: string
}

function ComponentIntro(props: Props) {
    const {env} = props
    const path = usePathname()
    const hiddenpath = "/getting_started"
    const [which, setWhich] = useState(["s"])
    function togglecClick(sec:string){
        setWhich((prev)=>{
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
    const principles = [
        {
            title: "Open by Default",
            desc: "Every component is fully open source. Install it, modify it, learn from it, or simply copy and paste the code into your own project."
        },
        {
            title: "Modular by Nature",
            desc: "Install only what you need. Every component is independent, lightweight, and optimized to avoid unnecessary dependencies."
        },
        {
            title: "Event-Driven by Design",
            desc: "Components respond naturally to user interactions such as scrolling, pointer movement, clicks, focus, gestures, and viewport changes, creating interfaces that feel alive."
        },
        {
            title: "Built on Modern Web APIs",
            desc: "Designed around native browser capabilities and emerging web standards to deliver smooth interactions with minimal overhead."
        },
        {
            title: "Framework-Friendly",
            desc: "Built for React today, with a long-term vision of supporting other modern frameworks. WebFlux is designed with portability in mind, making it easier to expand beyond React as the project evolves."
        },
        {
            title: "Crafted for Delight",
            desc: "Every animation has a purpose. We prioritize fluid motion, thoughtful interactions, accessibility, and performance to create experiences users remember."
        }
    ]
    const approach = [
        {
            title: "Browser-Native First",
            desc: "Leverage modern browser APIs and web standards to deliver smooth, performant interactions with minimal overhead."
        },
        {
            title: "Event-Driven by Design",
            desc: "Components respond naturally to scrolling, pointer movement, clicks, focus, gestures, viewport changes, and other browser events."
        },
        {
            title: "Developer-First",
            desc: "Simple APIs, sensible defaults, clear documentation, and components that are easy to install, customize, understand, or copy directly into your project."
        },
        {
            title: "Performance",
            desc: "Lightweight, efficient, and optimized for real-world applications. Components are built to deliver fluid interactions without compromising responsiveness or adding unnecessary bloat."
        },
        {
            title: "Purposeful Motion",
            desc: "Animations should guide, communicate, or provide feedback. Every effect exists to improve the user experience."
        },
    ]
    return (
        <div>
            <div className={`${path==hiddenpath?"my-0":"my-10 mb-20"}`}>
                {
                    path==hiddenpath?
                    null:
                    <p className='text-[20px] my-5 font-bold'>Introduction</p>
                }



                
                <p className='mb-5 opacity-80 text-[14px]'>
                    WebFlux is an open-source collection of beautifully crafted, event-driven web components designed to make interfaces feel alive. Every component is built to respond naturally to user interactions—from scrolling and cursor movement to clicks, gestures, and viewport changes—creating experiences that are both engaging and intuitive.
                </p>

                <p className='mb-5 opacity-80 text-[14px]'>
                    Unlike traditional UI libraries focused on standard interface elements, WebFlux is dedicated to motion, interaction, and visual storytelling. Whether you're adding immersive text effects, seamless page transitions, interactive cursors, or dynamic content animations, every component is designed to elevate the way users experience your website.
                </p>

                <p className='mb-5 opacity-80 text-[14px]'>
                    Install what you need, customize it to fit your design system, or simply copy and paste the code into your own project. It's open source, framework-friendly, and built with modern browser capabilities, WebFlux gives developers the freedom to create interfaces that don't just look beautiful—they respond, adapt, and come alive.
                </p>
            </div>
            
            <div className='my-10 mb-5'>
                <div onClick={()=>{togglecClick("vision")}} className='flex justify-between items-center cursor-pointer'>
                    <p className={`text-[20px] font-semibold mb-5`}>Vision</p>
                    {
                        which.includes("vision")?
                        <ChevronUp size={"20px"}/>:
                        <ChevronDown size={"20px"}/>
                    }
                </div>
                
                <p className={`mb-5 opacity-80 text-[14px] ${which.includes("vision")?"block":"hidden"}`}>
                    To become the go-to open-source library for interactive web experiences—empowering developers to build websites that don't just look beautiful, but respond naturally to every user interaction through motion, creativity, and modern browser capabilities.
                </p>
            </div>

            <div className='my-10 mb-5'>
                <div onClick={()=>{togglecClick("mission")}} className='flex justify-between items-center cursor-pointer'>
                    <p className={`text-[20px] font-semibold mb-5`}>Mission</p>
                    {
                        which.includes("mission")?
                        <ChevronUp size={"20px"}/>:
                        <ChevronDown size={"20px"}/>
                    }
                </div>
                <div className={`${which.includes("mission")?"block":"hidden"}`}>
                    <p className='mb-5 opacity-80 text-[14px]'>
                        The mission of WebFlux is to make beautiful, interactive web experiences accessible to every developer by providing open-source, event-driven components that are effortless to use, customize, and extend.
                    </p>


                    <p className='mb-5 opacity-80 text-[14px]'>
                        We believe interfaces should do more than display content — they should respond, communicate, and delight through meaningful motion and interaction.
                    </p>
                    
                    <p className='mb-5 opacity-80 text-[14px]'>
                        To make that happen, the project is committed to the following principles:
                    </p>


                    {
                        principles.map((item, index)=>{
                            return (
                                <div key={index}>
                                    <p className='font-semibold mb-1 opacity-100 text-[14px]'>{item.title}</p>
                                    <p className='mb-5 opacity-80 text-[14px]'>
                                        {item.desc}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            <div className='my-10 mb-5'>
                <div onClick={()=>{togglecClick("approach")}} className='flex justify-between items-center cursor-pointer'>
                    <p className={`text-[20px] font-semibold mb-5`}>Approach</p>
                    {
                        which.includes("approach")?
                        <ChevronUp size={"20px"}/>:
                        <ChevronDown size={"20px"}/>
                    }
                </div>
                
                <div className={`${which.includes("approach")?"block":"hidden"}`}>
                    <p className='mb-5 opacity-80 text-[14px]'>
                        WebFlux is built on a simple belief: motion should be meaningful, performant, and effortless to use. Every component is designed to enhance user experience through purposeful interactions—not decorative animations.
                    </p>



                    {
                        approach.map((item, index)=>{
                            return (
                                <div key={index}>
                                    <p className='font-semibold mb-1 opacity-100 text-[14px]'>{item.title}</p>
                                    <p className='mb-5 opacity-80 text-[14px]'>
                                        {item.desc}
                                    </p>
                                </div>
                            )
                        })
                    }

                    <p className='mb-5 opacity-80 text-[14px]'>
                        This is not your typical component library, which means you won't find a set of generic buttons, inputs, or other common UI elements here.
                    </p>
                </div>
            </div>

            <div className='my-10 mb-5'>
                <div onClick={()=>{togglecClick("component")}} className='flex justify-between items-center cursor-pointer'>
                    <p className={`text-[20px] font-semibold mb-5`}>Components</p>
                    {
                        which.includes("component")?
                        <ChevronUp size={"20px"}/>:
                        <ChevronDown size={"20px"}/>
                    }
                </div>
                <div className={`${which.includes("component")?"block":"hidden"}`}>
                    {
                        components_and_description.map((item, index)=>{
                            return (
                                <div key={index} className='darkbg p-5 rounded-[14px] my-4'>
                                    <p className='text-[15px] mb-3 font-bold'>{item.name}</p>
                                    <p className=' opacity-80 text-[13px]'>{item.desc2}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            
        </div>
    )
}

export default ComponentIntro
