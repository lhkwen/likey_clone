import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    accessToken: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            console.log('dfdfaf,',action);
            localStorage.setItem('accessToken', JSON.stringify({
                accessToken: action.payload.accessToken,
            }));
            localStorage.setItem('refreshToken', JSON.stringify({
                refreshToken: action.payload.refreshToken,
            }));
            localStorage.setItem('chatToken', JSON.stringify({
                chatToken: action.payload.chatToken
            }));
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
            state.chatToken = action.payload.chatToken
            
        },
        logoutAuth: (state) => {
            localStorage.clear();
            // localStorage.removeItem('accessToken');
            // localStorage.removeItem('refreshToken');
            // localStorage.removeItem('chatToken');
            state.accessToken = null;
            state.refreshToken= null;
            state.chatToken =null;
        }
    }
})

export const selectAuth = (state) => state.auth;

export const {setAuth, logoutAuth} = authSlice.actions;

export default authSlice.reducer;
