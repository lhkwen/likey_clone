// @mui
import { styled, alpha } from '@mui/material/styles';
// utils
import { bgGradient } from '../../utils/cssStyles';

// ----------------------------------------------------------------------

export const StyledRoot = styled('main')(() => ({
  height: '100%',
  display: 'flex',
  position: 'relative',
}));

export const StyledLeftSection = styled('div')(({ theme }) => ({
  display: 'none',
  position: 'relative',
  // borderRight: '0.5px solid grey',
  width: '90%',
  [theme.breakpoints.up('md')]: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'flex-end',
    // justifyContent: 'center',
    flexDirection: 'column',
  },
}));

export const StyledRightSection = styled('div')(({ theme }) => ({
  display: 'none',
  position: 'relative',
  // borderLeft: '0.5px solid grey',
  width: '70%',
  [theme.breakpoints.up('md')]: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'left',
    // justifyContent: 'center',
    // flexDirection: 'column',
  },
}));
export const StyledSectionBg = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
  top: 0,
  left: 0,
  zIndex: -1,
  width: '100%',
  height: '100%',
  position: 'absolute',
  transform: 'scaleX(-1)',
}));


export const StyledChat = styled('div')(({ theme }) => ({
  width: 1000,
  // margin: 'auto',
  display: 'flex',
  borderLeft: '0.5px solid grey',
  borderRight: '0.5px solid grey',
  minHeight: '100vh',
  justifyContent: 'left',
 // padding: '0px 0px 0px 0px'
  // padding: theme.spacing(15, 2),
  // [theme.breakpoints.up('md')]: {
  //   flexShrink: 0,
  //   padding: theme.spacing(30, 8, 0, 8),
  // },
}));

