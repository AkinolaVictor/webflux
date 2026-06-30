import TextEngine, { TextEngineTypes } from '../TextEngine';


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
