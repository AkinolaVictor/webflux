import CodeBlock_Custom from "@/registry/locals/CodeBlock_Custom";
import { TextEngineProps } from "@/registry/webflux/engines/TextEngine";
import Text_Fade_Preview from "@/utils/component_previews/texts/Text_Fade_Preview";
import { ALargeSmall, Type } from "lucide-react";

async function getCode(path, func){
    const res = await fetch(path)
    const text = await res.text()
    console.log({text})
    if(func) func(text)
    return text
}

const usagecode = `// import the TextFade component

import TextFade from './TextFade';

// Example 1 code (check preview section)
<TextFade
    text="Text Fade Animation Preview Examples (keep scrolling)"
/>


// Example 2 code (check preview section)
<TextFade
    style={{fontSize: "20px", color: "yellow"}}
    playInView
    text="This text automatically animates each time it's scrolled to view from the bottom"
/>


// Example 3 code (check preview section)
<TextFade
    playOnScroll
    text="This text responds directly to your scrolling. As you scroll, more of the content is gradually revealed, creating a smooth, interactive reading experience. Stop scrolling, and the animation pauses instantly. The farther you scroll, the more you uncover; scroll less, and only part of the text is revealed."
/>


// Example 4 code (check preview section)
<TextFade
    text="Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation."
    progression="line"
    playOnScroll={true}
    scroll_con={'.scrollable_parent_container'}  
    //The container element is scrollable, so i watch it through it's class name
    //don't use the scroll_con prop if you don't have any scrollable parent element to watch, it will default to the window scrollable element
/>


// Example 5 code (check preview section)
<TextFade
    text="Rather than revealing characters one after another, every character within a line animates simultaneously. As you scroll, each line progressively fades into view with all its characters moving together, creating a smooth, synchronized effect that responds naturally to your scrolling and pauses the moment you stop."    
    progression="char_line"
    scroll_con={'.component-preview-container'}
    playOnScroll
    className='w11:text-[20px]' //just some tailwind class. you can use the class prop and achieve same result
/>


// extendAnimation example
<TextFade
    text="Rather than revealing characters one after another, every character within a line animates simultaneously. As you scroll, each line progressively fades into view with all its characters moving together, creating a smooth, synchronized effect that responds naturally to your scrolling and pauses the moment you stop."    
    progression="char_line"
    scroll_con={'.component-preview-container'}
    playOnScroll
    className='w11:text-[20px]' //just some tailwind class. you can use the class prop and achieve same result
    extendAnimation={{
        // template
        // style: [old_value, new_value] change from old_value to new_value
        color: ["blue", "yellow"], //change color from blue to yellow
        x: [100, 0], //change x from 100px to 0px
        width: [400, 0] change width from 400px to 0px
        skewX: [70, 0], //change skewX from 70 to 0
        opacity: [1, 1], //use this value [1, 1] to stop the default opacity behavior(which is [0, 1]), but you can set it to something else though, like [0.3, 1] (from 0.3 to 1)
    }}
/>


// timeline prop
const tl = gsap.timeline({delay: 1.5});
<TextFade
    text="Rather than revealing characters one after another, every character within a line animates simultaneously. As you scroll, each line progressively fades into view with all its characters moving together, creating a smooth, synchronized effect that responds naturally to your scrolling and pauses the moment you stop."    
    progression="char_line"
    scroll_con={'.component-preview-container'}
    playOnScroll
    timeline={tl}
    className='w11:text-[20px]' //just some tailwind class. you can use the class prop and achieve same result
/>


// gsap Scrolltrigger prop
// ensure that either playOnScroll or playInView is set to true
// OBJECT EXAMPLE
<TextFade
    text="Rather than revealing characters one after another, every character within a line animates simultaneously. As you scroll, each line progressively fades into view with all its characters moving together, creating a smooth, synchronized effect that responds naturally to your scrolling and pauses the moment you stop."    
    progression="char_line"
    scroll_con={'.component-preview-container'}
    className='w11:text-[20px]' //just some tailwind class. you can use the class prop and achieve same result
    playOnScroll
    gsapScrollTrigger={{
        start: "top 80%", //when animation should start
        end: "top 35%", //when animation should end
        trigger: ".another_element", //element to trigger animation
        scroller: {document.querySelector(".another_scroller")}, //to overwrite the window scroll element to watch
        scrub: false
        // basically anything that works in gsap scrollTrigger also works here
    }}
/>


// gsap Scrolltrigger prop
// ensure that either playOnScroll or playInView is set to true
// FUNCTION EXAMPLE
<TextFade
    text="Rather than revealing characters one after another, every character within a line animates simultaneously. As you scroll, each line progressively fades into view with all its characters moving together, creating a smooth, synchronized effect that responds naturally to your scrolling and pauses the moment you stop."    
    progression="char_line"
    scroll_con={'.component-preview-container'}
    className='w11:text-[20px]' //just some tailwind class. you can use the class prop and achieve same result
    playOnScroll
    gsapScrollTrigger={(timeline)=>{
        // you can do anything here
        // basically anyhing you can do with gsap scrollTrigger also works here
        return {
            start: "top 80%", //when animation should start
            end: "top 35%", //when animation should end
            trigger: ".another_element", //element to trigger animation
            scroller: {document.querySelector(".another_scroller")}, //to overwrite the window scroll element to watch
            scrub: false,
            animation: timeline, //i used the timeline here
            onEnter: ()=>timeline.restart(), //i used the timeline here
            onLeaveBack: ()=>timeline.pause(), //i used the timeline here
            // basically anything that works in gsap scrollTrigger also works here
        }
    }}
/>
`

const ts_tw = (setState)=>getCode("/codes/text_fade/text_fade_ts_tw.txt", setState)
const ts_cs = (setState)=>getCode("/codes/text_fade/text_fade_ts_cs.txt", setState)
const js_tw = (setState)=>getCode("/codes/text_fade/text_fade_js_tw.txt", setState)
const js_cs = (setState)=>getCode("/codes/text_fade/text_fade_js_cs.txt", setState)

// const ts_cs = `import Masonry from './Masonry';

// const items = [
//     {
//         id: "1",
//         img: "https://picsum.photos/id/1015/600/900?grayscale",
//         url: "https://example.com/one",
//         height: 400,
//     },
//     {
//         id: "2",
//         img: "https://picsum.photos/id/1011/600/750?grayscale",
//         url: "https://example.com/two",
//         height: 250,
//     },
//     {
//         id: "3",
//         img: "https://picsum.photos/id/1020/600/800?grayscale",
//         url: "https://example.com/three",
//         height: 600,
//     },
//     // ... more items
// ];


// <Masonry
//     items={items}
//     ease="power3.out"
//     duration={0.6}
//     stagger={0.05}
//     animateFrom="bottom"
//     scaleOnHover
//     hoverScale={0.95}
//     blurToFocus
//     colorShiftOnHover={false}
// />`

// const js_tw = `import Masonry from './Masonry';

// const items = [
//     {
//         id: "1",
//         img: "https://picsum.photos/id/1015/600/900?grayscale",
//         url: "https://example.com/one",
//         height: 400,
//     },
//     {
//         id: "2",
//         img: "https://picsum.photos/id/1011/600/750?grayscale",
//         url: "https://example.com/two",
//         height: 250,
//     },
//     {
//         id: "3",
//         img: "https://picsum.photos/id/1020/600/800?grayscale",
//         url: "https://example.com/three",
//         height: 600,
//     },
//     // ... more items
// ];


// <Masonry
//     items={items}
//     ease="power3.out"
//     duration={0.6}
//     stagger={0.05}
//     animateFrom="bottom"
//     scaleOnHover
//     hoverScale={0.95}
//     blurToFocus
//     colorShiftOnHover={false}
// />`

// const js_cs = `import Masonry from './Masonry';

// const items = [
//     {
//         id: "1",
//         img: "https://picsum.photos/id/1015/600/900?grayscale",
//         url: "https://example.com/one",
//         height: 400,
//     },
//     {
//         id: "2",
//         img: "https://picsum.photos/id/1011/600/750?grayscale",
//         url: "https://example.com/two",
//         height: 250,
//     },
//     {
//         id: "3",
//         img: "https://picsum.photos/id/1020/600/800?grayscale",
//         url: "https://example.com/three",
//         height: 600,
//     },
//     // ... more items
// ];


// <Masonry
//     items={items}
//     ease="power3.out"
//     duration={0.6}
//     stagger={0.05}
//     animateFrom="bottom"
//     scaleOnHover
//     hoverScale={0.95}
//     blurToFocus
//     colorShiftOnHover={false}
// />`



export const texts_fade = {
    title: "Fade",
    href: "/components/text_fade",
    id: "main2",
    section: "Texts",
    Icon: ()=><Type size={"13px"}/>,
    description: "Reveal text by making it to fade in and out",
    concept: "Description of the way this was achieved",
    setup: {
        cli: {
            npm: "npx shadcn@latest add @https://reactbits.dev/r/ScrollFloat-JS-TW",
            usage: usagecode
        },
        rawcode: {
            // dependencies: "npm install gsap",
            codes: {
                ts_tw,
                ts_cs,
                js_tw,
                js_cs
            }
        }
    },
    engine: "TextEngine",
    preview: Text_Fade_Preview,
    props: [
        ...TextEngineProps
    ]
}