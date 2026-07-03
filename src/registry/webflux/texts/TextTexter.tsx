import React, { ReactElement } from 'react';
import TextEngine from '../TextEngine';

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
    speed?: number,
    playOnScroll?: boolean | number | undefined,
    playInView?: boolean,
    delay?: number,
    timeline?: any,
    gsapScrollTrigger?: any,
    extendAnimation?: any,
    defaultAnimation?: any,
    watch?: any
}

function TextTexter(props: TextEngineTypes) {

    // return <p style={{clipPath: "", lineHeight: ""}}></p>
    // defaultAnimation={{
    //     opacity: [1, 1],
    //     y: [115, 0],
    //     // y: [-115, 0],
    //     stagger: [null, 0.05],
    //     delay: [null, 0.2],
    //     duration: [null, 0.1]
    // }},
    // style={{
    //     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    //     // lineHeight: "5.9rem"
    //     color: "blue"
    // }}

    return (
        <TextEngine 
            defaultAnimation={{
                y: ["100%", "0%"],
                duration: [null, 1],
                stagger: [null, 0.1],


                // opacity: [1, 1],
                // y: [115, 0],
                // // y: [-115, 0],
                // stagger: [null, 0.05],
                // delay: [null, 0.2],
                // duration: [null, 0.1],
                // height: ["0%", "100%"],
            }}
            {...props}
        />
    )
}

export default TextTexter
