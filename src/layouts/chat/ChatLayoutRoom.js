import PropTypes from 'prop-types';
// @mui
import { Container,Typography, Stack } from '@mui/material';
// components
import Head from 'next/head';

import NavVertical from 'src/custom-component/nav/organism/NavVertical';
import { useState } from 'react';
import NavDialogVertical from 'src/custom-component/nav/organism/NavDialogVertical';
import Recommand from 'src/custom-component/recommand/template/Recommand';
import { useSelector } from 'react-redux';
import { selectUser } from 'src/redux/userSlice';
import styles from 'src/layouts/CSSModule.module.css';
import ChatDialogVertical from 'src/custom-component/nav/organism/ChatDialogVertical';
import { selectChatDialogFlg } from 'src/redux/chatDialogSlice';
import { useSettingsContext } from '../../components/settings';
import { StyledRoot, StyledLeftSection, StyledRightSection, StyledChat } from "./styles";
// ----------------------------------------------------------------------

ChatLayoutRoom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  illustration: PropTypes.string,
};

export default function ChatLayoutRoom({ children, illustration, title }) {
    const { themeStretch } = useSettingsContext();
    const user = useSelector(selectUser);
    console.log(title);
    const [open, setOpen] = useState(false);
    const chatOpen  = useSelector(selectChatDialogFlg);
    console.log(chatOpen);
  return (
    <StyledRoot>
      {open && (<NavDialogVertical open={open} setOpen={setOpen}/>)}
      {chatOpen.chatDialogFlg && (<ChatDialogVertical />)}
      <Head>
        <title> Likey</title>
      </Head>
      <StyledLeftSection>
        <NavVertical open={open} setOpen={setOpen}/>
      </StyledLeftSection>

      <StyledChat className={styles.chatlayout}>
        <Stack sx={{ width: 1 , flexDirection: 'row'}}> {children} </Stack>
      </StyledChat>

      <StyledRightSection  /> 

    </StyledRoot>
  );
}
