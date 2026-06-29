import CodeBlock_Custom from "@/registry/locals/CodeBlock_Custom";
import Text_Fade_Preview from "@/utils/component_previews/texts/Text_Fade_Preview";
import { ALargeSmall, Type } from "lucide-react";

const usagecode = `import ScrollFloat from './ScrollFloat';

<ScrollFloat
    animationDuration={1}
    ease='back.inOut(2)'
    scrollStart='center bottom+=50%'
    scrollEnd='bottom bottom-=40%'
    stagger={0.03}
>
    React Bits  
</ScrollFloat>`

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
            description: "How fast you want the animation to play.",
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
            range: "true | false",
            description: "How long you want to be delayed the animation before playing",
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
            name: "stagger",
            type: "boolean",
            range: "true | false",
            description: "Some brief detail",
            more_des: "Many more explanation to help understand better",
            value: true
        },
    ]
}