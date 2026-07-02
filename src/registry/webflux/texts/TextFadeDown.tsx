import TextEngine, { TextEngineTypes } from '../TextEngine';


function TextFadeDown(props: TextEngineTypes) {


    return (
        <TextEngine 
            defaultAnimation={{
                opacity: [0, 1],
                y: ["100%", "0%"],
                duration: [null, 1],
                stagger: [null, 0.1]
            }}
            {...props}
        />
    )
}

export default TextFadeDown
