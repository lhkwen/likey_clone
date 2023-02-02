import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action)=> {
            localStorage.setItem('user', JSON.stringify({
                user: action.payload.user
            }))
            state.user = {...state.user , ...action.payload.user};
        },
        logout: () => initialState,
    }
})


export const selectUser = (state) => state.user;

export const {setUser, logout} = userSlice.actions;

export default userSlice.reducer;