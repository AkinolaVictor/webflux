import React, { useState } from 'react'
import { Range } from 'react-range';
import Custom_Slider from './Custom_Slider';
import Custom_Radio from './Custom_Radio';

interface Props {
    item: any
}

function EachProperty(props: Props) {
    const {item} = props
    const [hid, setHid] = useState(false)
    const [values, setValues] = useState([50]);
    const [valu, setValu] = useState({value: true});

    return (
        
        <div className='w-full darkbg h-auto px-3 py-2 my-5 rounded-[5px]'>
            <div className='flex justify-between items-center overpass'>
                <p className='text-[12px] font-bold text-green-500'>StreakLength</p>
                <p className='text-[9px]'>number</p>
            </div>

            {
                false?
                <p className='text-[12px] mt-2 opacity-80'>'wew' | "wesd' | 'dsv' | 'fdf'</p>:
                null
            }
            <p className='text-[11px] mt-3'>
                Array of hex colors (up to 8) used to tint the falling light streaks. 
            </p>
            {
                hid?
                <p className='text-[11px] mt-3'>
                    Array of hex colors (up to 8) used to tint the falling light streaks. Each streak is randomly but evenly assigned one of the colors; a single color makes the whole effect uniform.
                    Array of hex colors (up to 8) used to tint the falling light streaks. Each streak is randomly but evenly assigned one of the colors; a single color makes the whole effect uniform.
                </p>:
                <p></p>
            }
            <div onClick={()=>setHid(!hid)} className='text-center w-full cursor-pointer mt-2'>

                {
                    !hid?
                    <span className='mt-3 text-green-500 text-[12px]'>Learn More</span>:
                    <span className='mt-3 text-green-500 text-[12px]'>Hide</span>
                }
            </div>

            <div className='mt-2 mb-0 bg-[#504949] w-full h-auto rounded-[25px]'>
                {/* <Custom_Slider /> */}
                <Custom_Radio />
            </div>
        </div>
    )
}

export default EachProperty
