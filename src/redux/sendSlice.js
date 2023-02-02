import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    sendInfo: null
}

export const sendSlice = createSlice({
    name: "sendInfo",
    initialState,
    reducers: {
        setSendInfo: (state, action) => {
            state.sendInfo = {...state.sendInfo, ...action.payload.sendInfo}
        },
        logout: () => initialState,
    }
})

export const selectSendInfo = (state) =>state.sendInfo;

export const {setSendInfo, logout} = sendSlice.actions;

export default sendSlice.reducer;