import PropTypes from 'prop-types';
// @mui
import { Container,Typography, Stack } from '@mui/material';
// components
import Head from 'next/head';

import NavVertical from 'src/custom-component/nav/organism/NavVertical';
import { useState } from 'react';
import NavDialogVertical from 'src/custom-component/nav/organism/NavDialogVertical';
import { useSettingsContext } from '../../components/settings';
import Logo from '../../components/logo';
import Image from '../../components/image';
//
import { StyledRoot, StyledContent, StyledLeftSection, StyledRightSection } from "./styles";
import Header from '../compact/Header';

// ----------------------------------------------------------------------

ContentLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  illustration: PropTypes.string,
};

export default function ContentLayout({ children, illustration, title }) {
    const { themeStretch } = useSettingsContext();
    const [open, setOpen] = useState(false);
  return (
    <StyledRoot>
      {open && (<NavDialogVertical open={open} setOpen={setOpen}/>)}
      <Head>
        <title> Likey</title>
      </Head>

      {/* <Header /> */}
      <StyledLeftSection>
        {/* <Typography variant="h3" sx={{ mb: 10, maxWidth: 480, textAlign: 'left' }}>
          {title || '메뉴'}
        </Typography> */}
        <NavVertical open={open} setOpen={setOpen}/>
      </StyledLeftSection>

      <StyledContent>
        <Stack sx={{ width: 1 }}> {children} </Stack>
      </StyledContent>

      <StyledRightSection /> 



      {/* <StyledRight>
        <Stack sx={{ width: 1 }}> {children} </Stack>
      </StyledRight> */}
    </StyledRoot>
  );
}
