import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    post:null
}

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.post = {...state.post, ...action.payload.post};
        },
        logout: () => initialState,
    }
})

export const selectPost = (state) => state.post;

export const {setPost, logout} = postSlice.actions;

export default postSlice.reducer;