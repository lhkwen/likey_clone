import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    chatDialogFlg : false
}

export const chatDialogSlice = createSlice({
    name: 'chatDialogFlg',
    initialState,
    reducers: {
        setChatDialogFlg: (state, action) => {
            state.chatDialogFlg = action.payload.chatDialogFlg
        },
    }
})

export const selectChatDialogFlg = (state) => state.chatDialogFlg;

export const {setChatDialogFlg} = chatDialogSlice.actions;

export default chatDialogSlice.reducer;