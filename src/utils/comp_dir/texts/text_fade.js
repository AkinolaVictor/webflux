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
            name: "animationDuration",
            type: "number",
            description: "Some brief detail",
            // more_des: "Many more explanation to help understand better",
            value: 12
        },
        {
            name: "strokelength",
            type: "number",
            description: "Some brief detail",
            more_des: "Many more explanation to help understand better",
            value: 12
        },
        {
            name: "textClassName",
            type: "string",
            range: "value1 | value2 | value3 | value4",
            description: "Some brief detail",
            more_des: "Many more explanation to help understand better",
            value: "value1"
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