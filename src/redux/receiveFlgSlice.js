import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    receiveFlg: false
}

export const receiveFlgSlice = createSlice({
    name:'receiveFlg',
    initialState,
    reducers: {
        setReceiveFlg: (state,action) => {
            state.receiveFlg = action.payload.receiveFlg
        },
    }
})

export const selectReceiveFlg  = (state)=> state.receiveFlg;

export const {setReceiveFlg} = receiveFlgSlice.actions;

export default receiveFlgSlice.reducer;