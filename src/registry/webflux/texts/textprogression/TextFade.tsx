import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import React, { ReactElement, RefObject, useEffect, useRef } from 'react'
import TextEngine from '../../engines/TextEngine';
import { TextProgression } from '../../types/textProgession.types';


function TextFade(props: TextProgression) {


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
