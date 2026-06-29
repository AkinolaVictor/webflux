import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { ReactElement, RefObject, useEffect, useRef } from 'react'

interface Props {
    children?: ReactElement<{
        className?: string;
        ref?: React.Ref<HTMLElement>;
    }>,
    text: string,
    scroll_con?: string
}

function TextRevealByHeightOverlay(props: Props) {
    const {children, text, scroll_con} = props
    const heightRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null)
    // const containerRef: RefObject<HTMLElement | null> = useRef<HTMLElement>(null)
    const containerRef = useRef<HTMLParagraphElement | null>(null);
    
    function animate_func(){
        const el = heightRef.current
        gsap.registerPlugin(ScrollTrigger)

        const scroller = scroll_con?document.querySelector(`${scroll_con}`):null

        gsap.fromTo(el, 
            {
                scaleY: 1
            }, 
            {
                scaleY: 0,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    scroller,
                    end: "bottom 50%",
                    scrub: true
                }
            }
        )
    }

    useEffect(()=>{
        animate_func()
    }, [])
    // https://github.com/AkinolaVictor/webflux
    // npx jsrepo add --repo https://github.com/AkinolaVictor/webflux
    return (
        <div className='w-full h-screen bg-black text-white flex flex-col justify-center items-center'>
            <div className='relative w-auto h-auto max-w-201'>
                
                {/* {
                    React.cloneElement(children, {
                        ref: containerRef,
                        className: [
                            children.props.className, 
                            "text-parentz"
                        ].filter(Boolean).join(" ")
                    })
                } */}

                <p ref={containerRef} className='text-parentz'>{text}</p>

                <div 
                    ref={heightRef}
                    className={`
                        layer-one w-full h-full bg-black absolute top-0 left-0 opacity-70 origin-bottom will-change-transform
                    `}
                />
            </div>
        </div>
    )
}

export default TextRevealByHeightOverlay
