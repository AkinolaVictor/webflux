import React, { useState } from 'react'
import { Range } from 'react-range';
import Custom_Slider from './Custom_Slider';
import Custom_Radio from './Custom_Radio';
import CustomDropdown from './CustomDropdown';

interface Props {
    item: any
}

function EachProperty(props: Props) {
    const {item} = props
    const [hid, setHid] = useState(false)
    const [values, setValues] = useState([50]);
    const [valu, setValu] = useState({value: true});
    const [dropdown, setdropdown] = useState({title: "select"})

    function formatRange(){
        if(!item.range) return []
        const rg = item.range.split(" | ")
        const formatt = []
        for(let i=0; i<rg.length; i++){
            const each = {title: rg[i]}
            formatt.push(each)
        }
        return formatt
    }
    return (
        
        <div className='w-full max-w-full darkbg h-auto px-3 py-2 my-5 rounded-[5px]'>
            <div className='flex justify-between items-center overpass'>
                <div className='text-[14px] font-bold text-green-500'>{item.name}</div>
                <p className='text-[9px]'>{item.type}</p>
            </div>

            {
                item.range?
                <div className='text-[12px] mt-2 opacity-80'>{item.range}</div>:
                null
            }
            <div className='text-[11px] mt-3 w-full max-w-full overflow-auto'>
                {item.description}
            </div>
            {
                item.more_des?
                <div className=' w-full'>
                    {
                        hid?
                        <div className='text-[11px] mt-3  w-full max-w-full overflow-auto'>
                            {item.more_des}
                        </div>:
                        <p></p>
                    }
                    <div onClick={()=>setHid(!hid)} className='text-center w-full cursor-pointer mt-2 font-bold'>

                        {
                            !hid?
                            <span className='mt-3 text-green-500 text-[12px]'>Learn More</span>:
                            <span className='mt-3 text-green-500 text-[12px]'>Hide</span>
                        }
                    </div>
                </div>:
                null
            }

            {/* <div className='mt-2 mb-0 bg-[#504949] w-full h-auto rounded-[25px]'>
                {
                    item.type=="number"?
                    <Custom_Slider />:
                    item.type=="boolean"?
                    <Custom_Radio />:
                    item.type=="string"?
                    <CustomDropdown
                        // styles={{background: "#578", color: "white"}}
                        styles={{background: "#999", color: "black"}}
                        // className='rounded-full '
                        value={dropdown.title}
                        listOptions = {
                            {
                                title: "Language",
                                options: [...formatRange()],
                                setter: (value:any)=>{setdropdown(value)}
                            }
                        }
                    />:
                    null
                }
            </div> */}
        </div>
    )
}

export default EachProperty
