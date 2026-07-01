import TextEngine, { TextEngineTypes } from '../TextEngine';


function TextFadeOverlay(props: TextEngineTypes) {


    return (
        <TextEngine 
            defaultAnimation={{
                opacity: [0.2, 1]
            }}
            {...props}
        />
    )
}

export default TextFadeOverlay
