import TextEngine, { TextEngineTypes } from '../TextEngine';


function TextFadeSkew(props: TextEngineTypes) {


    return (
        <TextEngine 
            defaultAnimation={{
                opacity: [0, 1],
                x: [100, 0],
                skewX: [100, 0],
            }}
            {...props}
        />
    )
}

export default TextFadeSkew
