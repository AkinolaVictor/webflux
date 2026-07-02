import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import React, { ReactElement, useEffect, useLayoutEffect, useRef, useState } from 'react';

gsap.registerPlugin(SplitText, ScrollTrigger)

export interface TextEngineTypes {
    children?: ReactElement<{
        className?: string;
        style:any;
        ref?: React.Ref<HTMLElement>;
    }>,
    text?: string,
    scrollingElement?: string,
    progression?: "char" | "word" | "line" | "char_line" | "word_line",
    style?: any,
    className?: string,
    // children?: string,
    speed?: number,
    playOnScroll?: boolean | number | undefined,
    playInView?: boolean,
    delay?: number,
    timeline?: any,
    gsapScrollTrigger?: any,
    extendAnimation?: any,
    defaultAnimation?: any
}

export default function TextEngine({
    text, 
    scrollingElement,
    progression="char",
    style,
    className,
    children,
    playOnScroll=false,
    playInView=false,
    delay=0,
    timeline=undefined,
    speed,
    gsapScrollTrigger,
    defaultAnimation,
    extendAnimation,
}: TextEngineTypes) {

    const containerRef = useRef<HTMLParagraphElement | null>(null);
    const [ready, setReady] = useState(false)
    const [screenResize, setScreenResize] = useState(0)
    
    function initi_animation(){
        const el = containerRef.current;
        if(!el) return;
        
        // declare scrolling element
        function findScrollingElement(elem:string){
            let parent = document.querySelector(elem)
            
            while(parent) {
                const {overflowY} = getComputedStyle(parent)
                if((overflowY === "auto" || overflowY === "scroll") && (parent.scrollHeight > parent.clientHeight)){
                    return parent
                }
                parent = parent.parentElement
            }

            return document.scrollingElement
        }

        const scroller = scrollingElement?document.querySelector(`${scrollingElement}`):findScrollingElement(".fade_textation_x");

        const splitRef = SplitText.create(el, {
            type: "lines,words,chars",
            linesClass: "line",
            wordsClass: "word",
            charsClass: "char",
            autoSplit: true,
        })
        const {chars, lines, words} = splitRef;
        const progression_data = progression_state()
        

        // depending on the type of animation progression the developer wants
        // return elements that must be looped through to create the animation
        function progression_state() {
            
            let anim2:any = chars
            if(progression === "char_line") {
                // animate characters and line together
                const charMeta = lines.flatMap((line)=>{
                    const lineChars = chars.filter((c)=>{
                        return line.contains(c);
                    });
                    return lineChars.map((char, charIndexInLine)=>({char, charIndexInLine}));
                });
                anim2 = charMeta
            } else if(progression === "word_line") {
                // animate words and line together
                const wordMeta = lines.flatMap((line, index1)=>{
                    const lineWords = words.filter((c)=>{
                        return line.contains(c);
                    });
                    return lineWords.map((char, charIndexInLine)=>({char, charIndexInLine}));
                });
                anim2 = wordMeta
            } else {
                anim2 = (
                    progression=="char"?chars:
                    progression=="word"?words:
                    progression=="line"?lines:
                    chars
                );
            }


            return {
                set: (
                    progression=="char"?chars:  //animate characters progressively
                    progression=="word"?words:    //animate words progressively
                    progression=="line"?lines:    //animate lines progressively
                    progression=="char_line"?chars:    //animate characters with line progressively
                    progression=="word_line"?words:    //animate words with line progressively
                    chars
                ),
                animate: anim2,
                speed_0: speed || (
                    progression=="char"?(playOnScroll?0.005:0.1):
                    progression=="word"?0.35:
                    progression=="line"?0.9:
                    progression=="char_line"?0.08:
                    progression=="word_line"?0.5:
                    0.08
                ),
            };
        };


        // convert extend animation input to acceptable css styles for the engine
        function build_extend_animation(animation: object, which:"from" | "to"){
            const obj = typeof(animation)=="object"?
                        animation:
                        {};
            
            const input_obj = Object.entries(obj).map((each)=>{
                const [key, val] = each;
                return {key, val};
            });
    
            const all:any = {};
    
            for(let i=0; i<input_obj.length; i++){
                const key = input_obj[i].key;
                const val: any = input_obj[i].val;
                const which_val = which=="from"?val[0]:
                                which=="to"?val[1]:
                                "";
                if(which_val !== null){
                    all[key] = which_val;
                }
            };
            
            return all;
        }
        
        gsap.set(progression_data.set, {
            opacity: 0,
            ...build_extend_animation(defaultAnimation, "from"),
            ...build_extend_animation(extendAnimation, "from")
        });

        const paused = (playOnScroll || playInView)?true:false;
        const tl = timeline || gsap.timeline({paused, delay});

        // not functional, wanted to do read mode
        function checkReadMode(){
            if(true){
                for(let i=0; i<lines.length; i++){
                    // const each = lines[i]
                    lines[i].classList.add(`line_${i}`)
                    
                    const div = document.createElement("div")
                    div.className = `read_marker_${i}`
                    div.style.width = "0.5px"
                    div.style.height = "0.5px"
    
                    // lines[i].parentNode.insertBefore(div, lines[i])
                    lines[i].insertAdjacentElement("beforebegin", div)
    
                    tl.to(
                        lines[i], 
                        {
                            opacity: 1,
                            duration: 1,
                            scrollTrigger: {
                                trigger: document.querySelector(`read_marker_${i}`),
                                start: "top 80%",
                                end: "bottom 20%",
                                scrub: true,
                            }
                        },
                        i
                    )
                }
            }
        }

        const moreScroll = moreScrollTrigger()

        const anim = (tl:any)=>{
            if(!tl) return null;
            
            // loop through each line and apply styles to each character sequentially
            progression_data.animate.forEach((charz:any, index:number)=>{
                let check_progression = progression==="char_line" || progression==="word_line";
                let char = check_progression ? charz.char : charz;
                const charIndexInLine = check_progression ? charz.charIndexInLine : index;

                tl.to(
                    char,
                    {
                        opacity: 1,
                        ease: "power3.out",
                        // ...anime_style,
                        ...build_extend_animation(defaultAnimation, "to"),
                        ...build_extend_animation(extendAnimation, "to"),
                    },
                    charIndexInLine*progression_data.speed_0 //use for speed (fast or slow)
                );
            });
            
            return tl;
        }

        anim(tl);

        function moreScrollTrigger(){
            if(typeof(gsapScrollTrigger)==="object"){
                return gsapScrollTrigger;
            };

            if(typeof(gsapScrollTrigger)==="function"){
                return gsapScrollTrigger(tl)||{};
            };

            return {};
        }

        if(playOnScroll){
            ScrollTrigger.create({
                trigger: el,
                scroller,
                start: "top 85%",
                end: "top 35%",
                scrub: playOnScroll,
                animation: tl,
                ...moreScroll,
            });

        } else if (playInView){
            ScrollTrigger.create({
                trigger: el,
                scroller,
                start: "top bottom",
                onEnter: ()=>tl.restart(),
                onLeaveBack: ()=>tl.pause(),
                ...moreScroll,
            });
        };

        // setReady(true);

        return () => splitRef.revert();
    }

    function updateScreenResize(){
        window.addEventListener("resize", ()=>{
            setScreenResize((prev)=>prev+1);
        });
    }

    // watch for screen resize so animation can be updated
    useEffect(()=>{
        updateScreenResize();
        document.fonts.ready.then(()=>{
            setReady(true)
        })
    }, []);

    // 
    // useEffect(()=>{
    //     const anim = initi_animation();
    //     return anim;
    // }, [ready]);
    // }, [ready, screenResize]);
    
    useLayoutEffect(()=>{
        if(!ready) return
        
        let anim = initi_animation();
        return anim;
    }, [ready])


    if(React.isValidElement(children)){
        return React.cloneElement(children, {
            ref: containerRef,
            style: {
                visibility: ready?"visible":"hidden",
                ...style,
                ...children.props.style
            },
            className: [
                "fade_textation_x",
                children.props.className, 
                className,
            ].filter(Boolean).join(" ")
        })
    }


    return (
        <p 
            className={`fade_textation_6 ${className}`}
            style={{visibility: ready?"visible":"hidden" ,...style}} ref={containerRef}
        >
            {text}
        </p>
    );
};
