import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    sendFlg: false
}

export const sendFlgSlice = createSlice({
    name:'sendFlg',
    initialState,
    reducers: {
        setSendFlg: (state,action) => {
            state.sendFlg = action.payload.sendFlg
        },
    }
})

export const selectSendFlg  = (state)=> state.sendFlg;

export const {setSendFlg} = sendFlgSlice.actions;

export default sendFlgSlice.reducer;