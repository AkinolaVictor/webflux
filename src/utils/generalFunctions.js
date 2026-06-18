
import { useDispatch } from "react-redux";
import { updateGeneralData } from "@/redux/slices/generalSlice";
    
export function generalFunctions(){
    const dispatch = useDispatch()
    function setGeneralAlpha(which, payload){
        const action = {
            which,
            data: payload
        }
        dispatch(updateGeneralData(action))
    }

    return {
        getGeneralData: function (which){
            function setGeneral(payload){
                const action = {
                    which,
                    data: payload
                }
                dispatch(updateGeneralData(action))
            }
            
            let data = null
            setGeneral((prev)=>{
                let curr = prev
                data = curr
                return curr
            })
            return data
        },
        setGeneralAlpha,
    }
}
