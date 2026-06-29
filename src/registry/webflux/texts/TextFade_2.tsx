import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import React, { Children, useEffect, useRef } from 'react'

interface Props {
    text: string,
    scroll_con: string,
    progression?: "char" | "word" | "line" | "char_line" | "word_line",
    style?: any,
    className?: string,
    children?: string,
    speed?: number,
    playOnScroll?: boolean | number | undefined,
    playInView?: boolean | number | string,
    delay?: number,
    timeline?: any,
    gsapScrollTrigger?: any,
    furtherAnimateFrom?: any
    furtherAnimateTo?: any
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
        furtherAnimateFrom,
        furtherAnimateTo,
    } = props
    const containerRef = useRef<HTMLParagraphElement | null>(null);
    
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
            ...furtherAnimateFrom
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
                        // ScrollTrigger: {
                        //     trigger: char,
                        //     scroller,
                        //     start: "top 80%",
                        //     // end: "top 70%",
                        //     scrub: playOnScroll,
                        //     // animation: tl,
                        //     ...moreScrollTrigger(),
                        // },
                        ...furtherAnimateTo
                    },
                    charIndexInLine*progression_state().speed_0 //use for speed (fast or slow)
                )

                // if(playOnScroll){
                //     ScrollTrigger.create({
                //         // trigger: el,
                //         trigger: char,
                //         scroller,
                //         start: "top 80%",
                //         // end: "top 70%",
                //         scrub: playOnScroll,
                //         animation: tl,
                //         ...moreScrollTrigger(),
                //     })
                // }
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
            
            // progression_state().animate.forEach((charz:any, index:number)=>{
            //     const check_progression = progression==="char_line" || progression==="word_line"
            //     let char = check_progression ? charz.char : charz
            //     const charIndexInLine = check_progression ? charz.charIndexInLine : index
                
            //     ScrollTrigger.create({
            //         // trigger: el,
            //         trigger: char,
            //         scroller,
            //         start: "top 80%",
            //         end: "top 35%",
            //         scrub: playOnScroll,
            //         animation: tl,
            //         ...moreScrollTrigger(),
            //     })

            // })

        } else if (playInView){
            ScrollTrigger.create({
                trigger: el,
                // trigger: progression_state().animate,
                scroller,
                start: "top bottom",
                onEnter: ()=>tl.restart(),
                onLeaveBack: ()=>tl.pause(),
                ...moreScrollTrigger(),
            })
        }

        return () => splitRef.revert();
    }

    useEffect(()=>{
        const anim = animator()
        return anim
    }, [])


    return (
        <p 
            className={`${className}`} 
            style={{...style}} ref={containerRef}
        >
            {text || children}
        </p>
    )
}

export default TextFade_2
