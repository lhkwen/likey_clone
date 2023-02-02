import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    msgInfo: null
}

export const msgSlice = createSlice({
    name: "msgInfo",
    initialState,
    reducers: {
        setMsgInfo: (state, action) => {
            state.msgInfo = {...state.msgInfo, ...action.payload.msgInfo};
        },
        logout: () =>initialState,
    }
})

export const selectMsgInfo = (state) => state.msgInfo;

export const {setMsgInfo, logout} = msgSlice.actions;

export default msgSlice.reducer;