import { generalFunctions } from '@/utils/generalFunctions'
import { ChevronDown } from 'lucide-react'
import React from 'react'

interface Props {
    value: string,
    listOptions: any,
    className?: string,
    styles?: any,
}

function CustomDropdown(props: Props) {
    const {value, listOptions, className, styles} = props
    const {setGeneralAlpha} = generalFunctions()

    function openModal(){
        setGeneralAlpha("modalToggle", true)
        setGeneralAlpha("modal_state", "list")
        listOptions && setGeneralAlpha("modalListOptions", listOptions)
    }

    return (
        <div onClick={()=>{openModal()}} style={styles} className={`darkbg px-2 cursor-pointer py-1.5 rounded-[6px] flex justify-between items-center gap-6 ${className}`}>
            <p>{value}</p>
            <ChevronDown size={13}/>
        </div>
    )
}

export default CustomDropdown
