import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    subInfo : null
}

export const subSlice = createSlice({
    name: "subInfo",
    initialState,
    reducers: {
        setSubInfo: (state, action) => {
            state.subInfo = {...state.subInfo, ...action.payload.subInfo};
        },
        logout: () => initialState,
    }

})

export const selectSubInfo = (state) => state.subInfo;

export const {setSubInfo, logout} = subSlice.actions;

export default subSlice.reducer;