import { createSlice, current } from "@reduxjs/toolkit"
// import uuid from 'react-native-uuid';

const initialState = {
    header_height: 55,
    modalToggle: false,
    modalListOptions: null,
    modal_state: "list"
}


export const generalSlice = createSlice({
    name: "generalSlice",
    initialState,
    reducers: {
        updateGeneralData: (state, action)=>{
            const {which, data} = action.payload
            if(typeof data === "function"){
                const curr = current(state)
                const newUser = data(curr[which])
                // const newUser = data(state[which])
                state[which] = newUser
            } else {
                state[which] = data
            }
        }
    }    
})

export const {updateGeneralData} = generalSlice.actions

export default generalSlice.reducer