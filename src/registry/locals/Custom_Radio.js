import React, { useState } from 'react'
import ToggleButton from 'react-toggle-button'

function Custom_Radio() {
    const [radio, setRadio] = useState(false)
    return (
        <div className="w-full flex justify-between items-center px-3 py-2 rounded-[24px] bg-[#121212]">
            <p className='text-[12px] font-bold'>
                {
                    radio?
                    "False":
                    "True"
                }
            </p>
            <ToggleButton
                inactiveLabel={<p>True</p>}
                activeLabel={<p>False</p>}
                value={radio}   
                // colors={{
                //     activeThumb: {
                //         base: 'rgb(250,250,250)',
                //     },
                //     inactiveThumb: {
                //         base: 'rgb(62,130,247)',
                //     },
                //     active: {
                //         base: 'rgb(207,221,245)',
                //         hover: 'rgb(177, 191, 215)',
                //     },
                //     inactive: {
                //         base: 'rgb(65,66,68)',
                //         hover: 'rgb(95,96,98)',
                //     }
                // }}
                onToggle={(value) => {
                    setRadio(!radio)
                }} 
            />
        </div>
    )
}

export default Custom_Radio
