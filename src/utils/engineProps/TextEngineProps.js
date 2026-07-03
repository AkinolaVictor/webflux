import CodeBlock_Custom from "../../registry/locals/CodeBlock_Custom"

export const TextEngineProps = [
    {
        name: "text",
        type: "string",
        description: "The text you want to animate",
        // more_des: "Many more explanation to help understand better",
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
        more_des: <p>
            A good range is between 0.001 and 2 depending on your preferred progression. However, you can go out of the box
            <br />
            <br />
            if progression=char (default): between 0.01 and 1 is good (from fast to slow)
            <br />
            <br />
            if progression=word: between 0.1 and 1 is good
            <br />
            <br />
            if progression=line: between 0.1 and 1 is good
            <br />
            <br />
            if progression=word_line: between 0.1 and 1 is good
            <br />
            <br />
            if progression=word_char: between 0.1 and 1 is good
        </p>,
    },
    {
        name: "watch",
        type: "string | boolean",
        // range: "true | false (default) | string",
        description: "Incase you want the animation to keep a watch on when an element or the screen resizes (default is false)",
        more_des: <p>
            For example;
            <br />
            <br />
            watch=false    (dont watch anything (default) )
            <br />
            <br />
            watch=true    (watch the window scrolling element)
            <br />
            <br />
            watch=".container"    (classname of a specific scrollable element)
            <br />
            <br />
            watch="#id"    (id of a specific scrollable element)
            <br />
            <br />
            watch="div"    (tag of a specific scrollable element)
        </p>,
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
        name: "scrollingElement",
        type: "number",
        description: <p>
            A specific scrollable element you want your animation to respond to.
        </p>,
        more_des: <p>
            By default, the animation keeps track of the nearest scrollable element, 
            (meaning when you set playInView/playOnScroll to true, we seek out the nearest scrollable element and make the animation to respond to it)


            <br />
            <br />
            However, If you have a specific scrollable element and you want the animation to 
            respond to this scrollable element, add a class name or id (for example: "container"),
            then set scrollingElement to that class name or id (like this scrollingElement=".container"), 
            you can also use specific tag names like: "html", "body", "nav", "div", "p", "a", "div.thisClass", "p.thisparagraph", "p#thisID", "#thisSpecificID". (or anything related)
            <br />
            <br />
            Note: This is only useful if you want to trigger your scroll animaton based a specific scrollable element, otherwise, just ignore it.
        </p>,
        value: 12
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
        more_des: `
            Extend the animation beyond the current state, you can animate any css gsap enabled properties, 
            primarily any style you can animate using gsap also works here (check the usage section for better example)
        `,
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