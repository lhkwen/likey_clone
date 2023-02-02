import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    target: null
}

export const targetSlice = createSlice({
    name: 'target',
    initialState,
    reducers: {
        setTarget: (state, action) => {
            state.target = {...state.target, ...action.payload.target};
        },
        logout: () => initialState,
    }
})

export const selectTarget = (state) => state.target;

export const {setTarget,loutout}= targetSlice.actions;

export default targetSlice.reducer;