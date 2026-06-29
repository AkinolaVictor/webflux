import CodeBlock_Custom from "@/registry/locals/CodeBlock_Custom";
import Text_Fade_Preview from "@/utils/component_previews/texts/Text_Fade_Preview";
import { ALargeSmall, Type } from "lucide-react";

const usagecode = `// import the TextFade component

import TextFade from './TextFade';

// Example 1 code (check preview section)
<TextFade
    text="Text Fade Animation Preview Examples (keep scrolling)"
/>


// Example 2 code (check preview section)
<TextFade
    style={{fontSize: "20px"}}
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

const ts_tw = `import Masonry from './Masonry';

const items = [
    {
        id: "1",
        img: "https://picsum.photos/id/1015/600/900?grayscale",
        url: "https://example.com/one",
        height: 400,
    },
    {
        id: "2",
        img: "https://picsum.photos/id/1011/600/750?grayscale",
        url: "https://example.com/two",
        height: 250,
    },
    {
        id: "3",
        img: "https://picsum.photos/id/1020/600/800?grayscale",
        url: "https://example.com/three",
        height: 600,
    },
    // ... more items
];


<Masonry
    items={items}
    ease="power3.out"
    duration={0.6}
    stagger={0.05}
    animateFrom="bottom"
    scaleOnHover
    hoverScale={0.95}
    blurToFocus
    colorShiftOnHover={false}
/>`

const ts_cs = `import Masonry from './Masonry';

const items = [
    {
        id: "1",
        img: "https://picsum.photos/id/1015/600/900?grayscale",
        url: "https://example.com/one",
        height: 400,
    },
    {
        id: "2",
        img: "https://picsum.photos/id/1011/600/750?grayscale",
        url: "https://example.com/two",
        height: 250,
    },
    {
        id: "3",
        img: "https://picsum.photos/id/1020/600/800?grayscale",
        url: "https://example.com/three",
        height: 600,
    },
    // ... more items
];


<Masonry
    items={items}
    ease="power3.out"
    duration={0.6}
    stagger={0.05}
    animateFrom="bottom"
    scaleOnHover
    hoverScale={0.95}
    blurToFocus
    colorShiftOnHover={false}
/>`

const js_tw = `import Masonry from './Masonry';

const items = [
    {
        id: "1",
        img: "https://picsum.photos/id/1015/600/900?grayscale",
        url: "https://example.com/one",
        height: 400,
    },
    {
        id: "2",
        img: "https://picsum.photos/id/1011/600/750?grayscale",
        url: "https://example.com/two",
        height: 250,
    },
    {
        id: "3",
        img: "https://picsum.photos/id/1020/600/800?grayscale",
        url: "https://example.com/three",
        height: 600,
    },
    // ... more items
];


<Masonry
    items={items}
    ease="power3.out"
    duration={0.6}
    stagger={0.05}
    animateFrom="bottom"
    scaleOnHover
    hoverScale={0.95}
    blurToFocus
    colorShiftOnHover={false}
/>`

const js_cs = `import Masonry from './Masonry';

const items = [
    {
        id: "1",
        img: "https://picsum.photos/id/1015/600/900?grayscale",
        url: "https://example.com/one",
        height: 400,
    },
    {
        id: "2",
        img: "https://picsum.photos/id/1011/600/750?grayscale",
        url: "https://example.com/two",
        height: 250,
    },
    {
        id: "3",
        img: "https://picsum.photos/id/1020/600/800?grayscale",
        url: "https://example.com/three",
        height: 600,
    },
    // ... more items
];


<Masonry
    items={items}
    ease="power3.out"
    duration={0.6}
    stagger={0.05}
    animateFrom="bottom"
    scaleOnHover
    hoverScale={0.95}
    blurToFocus
    colorShiftOnHover={false}
/>`



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
    // preview: ()=><Text_Fade_Preview />,
    preview: Text_Fade_Preview,
    props: [
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
            more_des: "Extend the animation beyond the current state, you can animate any css style, primarily any style you can animate using gsap also works here (check the usage section for example)",
            value: true
        },
    ]
}