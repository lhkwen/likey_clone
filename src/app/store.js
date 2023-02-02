import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginApi } from "src/api/services/login";
import { pokemonApi } from "src/api/services/pokemon";
import { userApi } from "src/api/services/user";
import userReducer from 'src/redux/userSlice';
import authReducer from 'src/redux/authSlice';
import postReducer from 'src/redux/postSlice';
import subInfoReducer from 'src/redux/subSlice';
import targetReducer from 'src/redux/targetSlice';
import msgInfoReducer from 'src/redux/msgSlice';
import sendInfoReducer from 'src/redux/sendSlice';
import receiveReducer from 'src/redux/receiveFlgSlice';
import sendReducer from 'src/redux/sendFlgSlice';
import chatDialogReducer from 'src/redux/chatDialogSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer , persistStore, PERSIST } from "redux-persist";
import { homeApi } from "src/api/services/home";
import { refreshApi } from "src/api/services/refresh";
import { recommendApi } from "src/api/services/recommend";
import { postApi } from "src/api/services/post";
import { commentApi } from "src/api/services/comment";
import { commentListApi } from "src/api/services/commentList";
import { creatorApi } from "src/api/services/creator";
import { creatorPostApi } from "src/api/services/creatorPost";
import { membershipApi } from "src/api/services/membership";
import { chatListApi } from "src/api/services/chatList";
import { chatRoomListApi } from "src/api/services/chatRoomList";
import { sendApi } from "src/api/services/chatSend";
import { middleware } from "stylis";
import { alarmApi } from "src/api/services/alarm";
import { chatAlbumnListApi } from "src/api/services/chatAlbumnList";

const persistConfig = {
    key:'root',
    storage,
    whitelist:['auth','user','post','subInfo','target']
}

const reducers = combineReducers({
        [loginApi.reducerPath]: loginApi.reducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        [userApi.reducerPath] : userApi.reducer,
        [homeApi.reducerPath] : homeApi.reducer,
        [refreshApi.reducerPath] : refreshApi.reducer,
        [recommendApi.reducerPath]: recommendApi.reducer,
        [postApi.reducerPath]: postApi.reducer,
        [commentApi.reducerPath]: commentApi.reducer,
        [commentListApi.reducerPath]: commentListApi.reducer,
        [creatorApi.reducerPath]: creatorApi.reducer,
        [creatorPostApi.reducerPath]: creatorPostApi.reducer,
        [membershipApi.reducerPath]: membershipApi.reducer,
        [chatListApi.reducerPath]: chatListApi.reducer,
        [chatRoomListApi.reducerPath]: chatRoomListApi.reducer,
        [sendApi.reducerPath]:sendApi.reducer,
        [alarmApi.reducerPath]:alarmApi.reducer,
        [chatAlbumnListApi.reducerPath]:chatAlbumnListApi.reducer,
        user: userReducer,
        auth: authReducer,
        post: postReducer,
        subInfo: subInfoReducer,
        target: targetReducer,
        msgInfo: msgInfoReducer,
        sendInfo: sendInfoReducer,
        receiveFlg: receiveReducer,
        sendFlg: sendReducer,
        chatDialogFlg: chatDialogReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }).concat(
      pokemonApi.middleware, 
      loginApi.middleware, 
      userApi.middleware, 
      homeApi.middleware,
      refreshApi.middleware, 
      recommendApi.middleware,
      postApi.middleware,
      commentApi.middleware,
      commentListApi.middleware,
      creatorApi.middleware,
      creatorPostApi.middleware,
      membershipApi.middleware,
      chatListApi.middleware,
      chatRoomListApi.middleware,
      sendApi.middleware,
      alarmApi.middleware,
      chatAlbumnListApi.middleware,
      ),

})



export const persistor = persistStore(store);
