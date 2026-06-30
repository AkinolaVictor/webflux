import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import React, { useEffect, useRef, useState } from 'react';
import CodeBlock_Custom from '@/registry/locals/CodeBlock_Custom';

gsap.registerPlugin(SplitText, ScrollTrigger)

export default function TextEngine(props) {
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
        speed,
        gsapScrollTrigger,
        defaultAnimation,
        extendAnimation,
    } = props
    const containerRef = useRef(null);
    const [ready, setReady] = useState(false)
    const [screenResize, setScreenResize] = useState(0)
    
    function initi_animation(){
        const el = containerRef.current;
        if(!el) return;

        const scroller = scroll_con?document.querySelector(`${scroll_con}`):null;

        const splitRef = SplitText.create(el, {
            type: "lines,words,chars",
            linesClass: "line",
            wordsClass: "word",
            charsClass: "char",
            autoSplit: true,
        })
        const {chars, lines, words} = splitRef;
        
        gsap.set(progression_state().set, {
            opacity: 0,
            ...build_extend_animation(defaultAnimation, "from"),
            ...build_extend_animation(extendAnimation, "from")
        });

        // depending on the type of animation progression the developer wants
        // return elements that must be looped through to create the animation
        function progression_state () {
            let char_animate, word_animate;

            // animate characters and line together
            if(progression === "char_line") {
                const charMeta = lines.flatMap((line)=>{
                    const lineChars = chars.filter((c)=>{
                        return line.contains(c);
                    });
                    return lineChars.map((char, charIndexInLine)=>({char, charIndexInLine}));
                });
                char_animate = charMeta;
            };

            // animate words and line together
            if(progression === "word_line") {
                const wordMeta = lines.flatMap((line, index1)=>{
                    const lineWords = words.filter((c)=>{
                        return line.contains(c);
                    });
                    return lineWords.map((char, charIndexInLine)=>({char, charIndexInLine}));
                });
                word_animate = wordMeta;
            }

            const anim = (
                progression=="char"?chars:
                progression=="word"?words:
                progression=="line"?lines:
                progression=="char_line"?char_animate:
                progression=="word_line"?word_animate:
                chars
            );

            return {
                set: (
                    progression=="char"?chars:  //animate characters progressively
                    progression=="word"?words:    //animate words progressively
                    progression=="line"?lines:    //animate lines progressively
                    progression=="char_line"?chars:    //animate characters with line progressively
                    progression=="word_line"?words:    //animate words with line progressively
                    chars
                ),
                animate: anim,
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
        function build_extend_animation(animation, which){
            const obj = typeof(animation)=="object"?
                        animation:
                        {};
            
            const input_obj = Object.entries(obj).map((each)=>{
                const [key, val] = each;
                return {key, val};
            });
    
            const all = {};
    
            for(let i=0; i<input_obj.length; i++){
                const key = input_obj[i].key;
                const val = input_obj[i].val;
                const which_val = which=="from"?val[0]:
                                which=="to"?val[1]:
                                "";
                all[key] = which_val;
            };
            
            return all;
        }

        const paused = (playOnScroll || playInView)?true:false;
        const tl = timeline || gsap.timeline({paused, delay});

        const anim = (tl)=>{
            if(!tl) return null;
            
            // loop through each line and apply styles to each character sequentially
            progression_state().animate.forEach((charz, index)=>{
                const check_progression = progression==="char_line" || progression==="word_line";
                let char = check_progression ? charz.char : charz;
                const charIndexInLine = check_progression ? charz.charIndexInLine : index;

                tl.to(
                    char,
                    {
                        opacity: 1,
                        ease: "power3.out",
                        ...build_extend_animation(defaultAnimation, "to"),
                        ...build_extend_animation(extendAnimation, "to")
                    },
                    charIndexInLine*progression_state().speed_0 //use for speed (fast or slow)
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
                start: "top 80%",
                end: "top 35%",
                scrub: playOnScroll,
                animation: tl,
                ...moreScrollTrigger(),
            });

        } else if (playInView){
            ScrollTrigger.create({
                trigger: el,
                scroller,
                start: "top bottom",
                onEnter: ()=>tl.restart(),
                onLeaveBack: ()=>tl.pause(),
                ...moreScrollTrigger(),
            });
        };

        setReady(true);

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
    }, []);

    // 
    useEffect(()=>{
        const anim = initi_animation();
        return anim;
    }, [ready, screenResize]);


    return (
        <p 
            className={`${ready?"":"invisible"} ${className}`}
            style={{...style}} ref={containerRef}
        >
            {text || children}
        </p>
    );
};

export const TextEngineProps = [
    {
        name: "text",
        type: "string",
        description: "The text you want to animate",
        // more_des: "Many more explanation to help understand better",
        value: 12
    },
    {
        name: "scroll_con",
        type: "number",
        description: <p>
            The container for which the scrollTrigger should watch 
            <br />(Ignore this if you're using the default window scrolling element.)
        </p>,
        more_des: <p>
            If you have a scrollable container and you want the animation to 
            respond to this scrollable container, add a class name or id (for example: "container"),
            then set scroll_con to ".container" (like this scroll_con=".container"), 
            <br />
            <br />
            Note: This is only useful if you want to trigger your scroll animaton based on another scrollable element, otherwise, just ignore it
        </p>,
        value: 12
    },
    {
        name: "progression",
        type: "string",
        range: "char | word | line | char_line | word_line",
        description: "The animation progression, how you want the animation to progressively play (default is char)",
        more_des: <p>
            <b>char</b>: play animation character by character
            <br />
            <br />
            word: play animation word by word
            <br />
            <br />
            line: play animation line by line
            <br />
            <br />
            char_line: play animation on each line simultaneously, character by character.
            <br />
            <br />
            word_line: play animation on each line simultaneously, word by word.
        </p>,
        value: "value1"
    },
    {
        name: "style",
        type: "object",
        description: "An object containing all the styles you want to add to your text",
        // more_des: "Many more explanation to help understand better",
        // value: true
    },
    {
        name: "className",
        type: "string",
        description: "All the classes your want to add to the text container",
        // more_des: "Many more explanation to help understand better",
        // value: true
    },
    {
        name: "speed",
        type: "number",
        range: "Between 0.001 - 2",
        description: "How fast or slow you want the animation to play.",
        more_des: "A good range is between 0.001 and 2, but you can go below and above that",
    },
    {
        name: "playOnScroll",
        type: "boolean",
        range: "default is false",
        description: "If you want the animation to play responsively to user scroll",
        more_des: "This takes any value you can add to gsap scrolltrigger scrub",
        value: true
    },
    {
        name: "playInView",
        type: "boolean",
        range: "default is false",
        description: "If you want to play when its scrolled to view from the bottom",
        more_des: "By default, the animation automatically plays (even if its not in view), but if you want it only to play when its scrolled to view, set this prop to true",
        value: true
    },
    {
        name: "delay",
        type: "number",
        // range: "true | false",
        description: "How long you want to be delayed the animation before playing (in seconds)",
        // more_des: "Many more explanation to help understand better",
        // value: true
    },
    {
        name: "timeline",
        type: "gsap timeline",
        range: "your own gsap.timeline()",
        description: "If you want this animation to play sequentially with regards to you own timeline",
        more_des: <CodeBlock_Custom>{`// if you have your own gsap timeline (for example)
const tl = gsap.timeline()
// then pass it to the component, as in
timeline={tl}
        `}</CodeBlock_Custom>,
    },
    {
        name: "gsapScrollTrigger",
        type: "object or function",
        // range: "true | false",
        description: "Control the scrollTrigger by adding more details to it",
        more_des: <p>
            Basically everything that works in a gsap scrollTrigger also work here, 
            <br />
            <br />
            In case you want to use the timeline to do stuffs within the scrollTrigger, pass a function (instead of an object), and receive the timeline as a prop in your function, but ensure to return an object from that function.
        </p>,
        value: true
    },
    {
        name: "extendAnimation",
        type: "object",
        range: <p>sample: {`{color: ["blue", "red"]}`}</p>,
        description: "Add more styles to the animation.",
        more_des: "Extend the animation beyond the current state, you can animate any css style, primarily any style you can animate using gsap also works here (check the usage section for better example)",
        value: true
    },
    {
        name: "Keep this in mind",
        type: "",
        description: "Learn more about the Text Engine",
        more_des: <p>
            The underlying TextEngine template used in building this component is an extremely dynamic one, its built using gsap.
            <br />
            <br />
            The idea is to help you abstract the many lines of code you need to do stuffs with gsap (while dealing with texts)
            <br />
            <br />
            With the extendAnimation prop, you can completely transform the entire outlook of the component.
            <br />
            By default, the animation in the engine is basically to transform the opacity from 0 to 1, you can overwrite this by setting the opacity to [1,1] (with extendAnimation),
            You can also add more properties to style, for example if you have a big bold text, you can enlarge (scale) each character, word, lines, etc, as it fully reveals (scale: [0, 1]).
            <br />
            You can really do much more, its up to you.
            <br />
            <br />
            With the extendAnimation prop, you can completely transform the entire outlook of the component.
            <br />
            <br />
            Also with the timeline and scrolltrigger props, you can do much more, like play and pause the animation whenever you want, control the sequence of the animation, and so much more
            <br />
            <br />
            I recommend that you have a basic knowledge of gsap, it would really make a difference.
        </p>
    }
]