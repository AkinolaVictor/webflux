import { generalFunctions } from '@/utils/generalFunctions'
import React from 'react'
import { useSelector } from 'react-redux'
import ModalList from './ModalList'
import ModalMenu from './ModalMenu'

interface Props {}

function ModalContainer(props: Props) {
    const {} = props
    const {setGeneralAlpha} = generalFunctions()
    const {modalToggle, modal_state} = useSelector((state:any)=>state.generalSlice)

    if(!modalToggle) return null
    const closeModal = ()=>setGeneralAlpha("modalToggle", false)
    return (
        <div onClick={closeModal} className='w-screen h-screen bg-[#00000093] flex justify-center items-center absolute top-0 left-0'>
            <div className=''>
                {
                    modal_state=="list"?
                    <ModalList />:
                    <ModalMenu />
                }
            </div>
        </div>
    )
}

export default ModalContainer
