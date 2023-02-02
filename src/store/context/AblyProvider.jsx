import { configureAbly, useChannel } from '@ably-labs/react-hooks';
import { useRouter } from 'next/router';
import { memo , useContext , createContext } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setMsgInfo } from 'src/redux/msgSlice';
import { setReceiveFlg } from 'src/redux/receiveFlgSlice';
import { setSendFlg } from 'src/redux/sendFlgSlice';
import { selectUser } from 'src/redux/userSlice';

if (typeof window !== 'undefined') {

  configureAbly({
    authCallback: (tokenParams, cb) => {
      // const token = sessionStorage ? sessionStorage.getItem(CHAT_TOKEN) : "";
      const token = localStorage.getItem("chatToken") ? JSON.parse(localStorage.getItem("chatToken")) : '';
      console.log(token.chatToken)
      if (token) {
        cb(null, token.chatToken);
      }
    },
  });
}

const initalState = {
    channels: {},
    ably: null,
    getAblyMsg: false,
};

const AblyContext = createContext(initalState);
export const useAblyContext = () => useContext(AblyContext);

function AblyProvider({ children }) {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useRouter();
    // const [channels, ably] = useChannel(`pv:${user.user.user_idx}`, (message)=> {
    //     console.log('message',message);
    // })
    let idx = 0;
    if(user.user!==null) {
      idx = user.user.user_idx;
    }
     const [channels, ably] = useChannel(`pv:${idx}`, (message)=> {
        console.log('message',message);

        if (message?.name !== 'noti') {
            const obj = {
                chat_status: 'Y',
                contpkgseq: message.data.media && message.data.media.contpkgseq,
                created_at: message.data.created_at,
                group_id: message.data.group_id,
                message: message.data.message,
                message_type: message.data.type,
                msg_idx: Date.now(),
                msg_value: 0,
                receiver: message.data.receiver,
                sender: message.data.sender,
                spon_value: message.data.spon_value > 0 ? message.data.spon_value : 0,
            };
            // dispatch(setSendFlg({sendFlg:true}));
            dispatch(setReceiveFlg({receiveFlg:true}));
            dispatch(setMsgInfo({msgInfo:obj}));
            
        }
    })


   return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AblyContext.Provider value={{
      ably, channels
    }}
    >
      {children}
    </AblyContext.Provider>
  );
}
export default memo(AblyProvider)