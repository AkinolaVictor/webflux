import { generalFunctions } from '@/utils/generalFunctions'
import { pad_x } from '@/utils/helper'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

interface Props {}

function ModalList(props: Props) {
    const {} = props
    const {modalListOptions} = useSelector((state:any)=>state.generalSlice)
    const {setGeneralAlpha} = generalFunctions()
    // useEffect(()=>{
    //     return ()=>setGeneralAlpha("modalListOptions", null)
    // }, [])
    function closeModal(){
        setGeneralAlpha("modalToggle", false)
    }
    if(!modalListOptions) return null

    return (
        <div onClick={(e)=>e.stopPropagation()} className={`w-full min-w-70 max-w-101 h-auto darkbg text-white rounded-[18px]`}>
            <div className='pb-1 pt-5 px-6'>
                <p className='text-center'>{modalListOptions.title}</p>
            </div>
            <div className='w-full h-auto max-h-120 overflow-y-auto py-2'>
                {
                    modalListOptions?.options?.map((item:any, index:number)=>{
                        const {title, description} = item
                        return (
                            <div key={index} onClick={()=>{modalListOptions.setter(item); closeModal();}} className='cursor-pointer py-3 px-6 hover:bg-[#124332]'>
                                <p>{title}</p>
                                <p className='opacity-50 text-[12px]'>{description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <p onClick={closeModal} className='cursor-pointer text-red-500 py-3 text-center font-bold'>Close</p>
        </div>
    )
}

export default ModalList
