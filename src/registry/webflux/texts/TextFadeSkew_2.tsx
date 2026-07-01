import TextEngine, { TextEngineTypes } from '../TextEngine';


function TextFadeSkew_2(props: TextEngineTypes) {


    return (
        <TextEngine 
            defaultAnimation={{
                opacity: [0, 1],
                x: [100, 0],
                y: [100, 0],
                skewX: [-100, 0],
            }}
            {...props}
        />
    )
}

export default TextFadeSkew_2
