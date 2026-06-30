import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import React, { ReactElement, RefObject, useEffect, useRef } from 'react'
import TextEngine, { TextEngineTypes } from '../../engines/TextEngine';


function TextFade(props: TextEngineTypes) {


    return (
        <TextEngine 
            defaultAnimation={{
                opacity: [0, 1]
            }}
            {...props}
        />
    )
}

export default TextFade
