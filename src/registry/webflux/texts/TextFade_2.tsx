import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import React, { Children, useEffect, useRef, useState } from 'react'

interface Props {
    text: string,
    scroll_con: string,
    progression?: "char" | "word" | "line" | "char_line" | "word_line",
    style?: any,
    className?: string,
    children?: string,
    speed?: number,
    playOnScroll?: boolean | number | undefined,
    playInView?: boolean,
    delay?: number,
    timeline?: any,
    gsapScrollTrigger?: any,
    extendAnimation?: any
}

gsap.registerPlugin(SplitText, ScrollTrigger)

function TextFade_2(props: Props) {
    const {
        text, 
        scroll_con,
        progression="char",
        style,
        className,
        children,
        playOnScroll=false,
        playInView=false,
        delay=0,
        timeline=undefined,
        speed, // 0.005 - 1
        gsapScrollTrigger,
        extendAnimation
    } = props
    const containerRef = useRef<HTMLParagraphElement | null>(null);
    const [ready, setReady] = useState(false)
    const [screenResize, setScreenResize] = useState(0)
    
    function animator(){
        const el = containerRef.current
        if(!el) return

        const scroller = scroll_con?document.querySelector(`${scroll_con}`):null

        const splitRef = SplitText.create(el, {
            type: "lines,words,chars",
            linesClass: "line",
            wordsClass: "word",
            charsClass: "char",
            autoSplit: true,
        })
        const {chars, lines, words} = splitRef
        
        gsap.set(progression_state().set, {
            // x: 100,
            opacity: 0,
            // skewX: 70,
            ...build_extend_animation("from")
        })

        function progression_state () {
            let char_animate, word_animate

            if(progression === "char_line") {
                const charMeta = lines.flatMap((line)=>{
                    const lineChars = chars.filter((c)=>{
                        return line.contains(c)
                    })
                    return lineChars.map((char, charIndexInLine)=>({char, charIndexInLine}))
                })
                char_animate = charMeta
            }

            if(progression === "word_line") {
                const wordMeta = lines.flatMap((line, index1)=>{
                    const lineWords = words.filter((c)=>{
                        return line.contains(c)
                    })
                    return lineWords.map((char, charIndexInLine)=>({char, charIndexInLine}))
                })
                word_animate = wordMeta
            }

            const anim:any = (
                progression=="char"?chars:
                progression=="word"?words:
                progression=="line"?lines:
                progression=="char_line"?char_animate:
                progression=="word_line"?word_animate:
                chars
            )

            return {
                set: (
                    progression=="char"?chars:
                    progression=="word"?words:
                    progression=="line"?lines:
                    progression=="char_line"?chars:
                    progression=="word_line"?words:
                    chars
                ),
                animate: anim,
                speed_0: speed || ( //0.005 - 1
                    progression=="char"?(playOnScroll?0.005:0.1):
                    progression=="word"?0.35:
                    progression=="line"?0.9:
                    progression=="char_line"?0.08:
                    progression=="word_line"?0.5:
                    0.08
                ),
            }
        }


        function build_extend_animation(which:"from" | "to"){
            // const ext2 = {
            //     color: ["blue", "green"], 
            //     x: [100, 0]
            // }
            // if(ready===false) return

            const obj = typeof(extendAnimation)=="object"?
                        extendAnimation:
                        {}
            
            const input_obj = Object.entries(obj).map((each)=>{
                const [key, val] = each
                return {key, val}
            })
    
            const all:any = {}
    
            for(let i=0; i<input_obj.length; i++){
                const key = input_obj[i].key
                const val: any = input_obj[i].val
                const which_val = which=="from"?val[0]:
                                which=="to"?val[1]:
                                ""
                all[key] = which_val
            }
            
            return all
        }

        const paused = (playOnScroll || playInView)?true:false
        const tl = timeline || gsap.timeline({paused, delay})

        const anim = (tl:any)=>{
            if(!tl) return null
            
            // loop through each line and apply styles to each character sequentially
            progression_state().animate.forEach((charz:any, index:number)=>{
                const check_progression = progression==="char_line" || progression==="word_line"
                let char = check_progression ? charz.char : charz
                const charIndexInLine = check_progression ? charz.charIndexInLine : index

                tl.to(
                    char,
                    {
                        opacity: 1,
                        ease: "power3.out",
                        ...build_extend_animation("to")
                    },
                    charIndexInLine*progression_state().speed_0 //use for speed (fast or slow)
                )
            })
            
            return tl
        }

        anim(tl)

        function moreScrollTrigger(){
            if(typeof(gsapScrollTrigger)==="object"){
                return gsapScrollTrigger
            }

            if(typeof(gsapScrollTrigger)==="function"){
                return gsapScrollTrigger(tl)||{}
            }

            return {}
        }

        if(playOnScroll){
            ScrollTrigger.create({
                trigger: el,
                scroller,
                start: "top 80%",
                end: "top 35%",
                scrub: playOnScroll,
                animation: tl,
                ...moreScrollTrigger(),
            })

        } else if (playInView){
            ScrollTrigger.create({
                trigger: el,
                scroller,
                start: "top bottom",
                onEnter: ()=>tl.restart(),
                onLeaveBack: ()=>tl.pause(),
                ...moreScrollTrigger(),
            })
        }

        setReady(true)

        return () => splitRef.revert();
    }

    function updateScreenResize(){
        window.addEventListener("resize", ()=>{
            setScreenResize((prev)=>prev+1)
        })
    }
    
    useEffect(()=>{
        updateScreenResize()
    }, [])

    useEffect(()=>{
        const anim = animator()
        return anim
    }, [ready, screenResize])


    return (
        <p 
            className={`${ready?"":"invisible"} ${className}`}
            style={{...style}} ref={containerRef}
        >
            {text || children}
        </p>
    )
}

export default TextFade_2
