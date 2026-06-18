import React, { useState } from 'react'
import { Range } from 'react-range'

interface Props {}

function Custom_Slider(props: Props) {
    const {} = props
    const [values, setValues] = useState([50]);
    return (
        <div>
            <Range
                label="Select your value"
                step={1}
                min={0}
                max={100}
                values={values}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        className='rounded-full '
                        style={{
                            ...props.style,
                            height: "6px",
                            width: "100%",
                            backgroundColor: "#999",
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        key={props.key}
                        className='rounded-full flex justify-center items-center text-white text-[11px]'
                        style={{
                            ...props.style,
                            height: "30px",
                            width: "30px",
                            backgroundColor: "#578",
                        }}
                    >
                        {values[0]}
                    </div>
                )}
            />
        </div>
    )
}

export default Custom_Slider
