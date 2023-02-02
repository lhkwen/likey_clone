import PropTypes from 'prop-types';
// @mui
// import styled from 'styled-components';
import { Container,Typography, Stack, Box, Card, CardContent, CardMedia, Grid, Button } from '@mui/material';
// components
import Head from 'next/head';
import { useLocales } from 'src/locales';
import styles from 'src/layouts/CSSModule.module.css';
import { useSettingsContext } from '../../components/settings';
import Logo from '../../components/logo';
import Image from '../../components/image';
//
import { StyledRoot} from './styles';
import Header from '../compact/Header';
import LanguagePopover from '../dashboard/header/LanguagePopover';

//

// ----------------------------------------------------------------------

MainLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  illustration: PropTypes.string,
};


export default function MainLayout({ children, illustration, title }) {
   const { translate } = useLocales();
    const { themeStretch } = useSettingsContext();
    const styleObj = {
      paddingLeft: '0px',
      paddingRight: '0px',
    }
    const styleText = {
      textAlign : 'center',
      padding : '100px',
      paddingTop: '300px',
      color: '#FFFFFF',
     // lineHeight: '600px',
    }
    const styleTitleText = {
      textAlign : 'center',
      paddingLeft : '100px',
      paddingTop: '200px',
      color: '#FFFFFF',
     // lineHeight: '600px',
    }
    const styleDetailText = {
      textAlign : 'center',
      paddingLeft : '100px',
      color: '#FFFFFF',
     // lineHeight: '600px',
    }
    const styleImg = {
      alignItems: 'center', 
      display: 'flex' ,
      justifyContent: 'center'
    }

    const whiteText = {
      color: '#FFFFFF'
    }

    const redText = {
      color: '#FF3560'
    }

    const blackText = {
      color: '#000000'
    }

    const blackBg = {
      backgroundColor : 'transparent',
      boxShadow: 'none'
    }

    const buttonStyle = {
      // '@media(maxWidth: 600px)': {
      //   width: '200px',
      // },
      // '@media(maxWidth: 1300px)': {
      //   width: '400px',
      // },
      backgroundColor: 'grey',
      textAlign: 'left',
     // width: '400px',
      height: '100px',
      border: '1px solid white',
    }
  return (
    <StyledRoot>
      <Head>
        <title> Likey</title>
      </Head>

      <Header />
        
      <Container maxWidth={false} style={styleObj}>
      {/* <Container maxWidth={themeStretch ? false : 'xl'}> */}
        {/* <Typography variant="h3" component="h1" paragraph>
          Page One
        </Typography> */}
        <Box 
          sx={{
          // width: '100%',
          height: 800,
          backgroundImage: 'url(/assets/images/about/testimonials.jpg)',
        }}
        >
          {/* <div style={styleText}>
            <span>크리에이터와 팬이 만나는<br />최적의 공간</span>
          </div> */}
          <Typography variant="h1" gutterBottom style={styleText}>
            <span style={whiteText}>크리에이터와 팬이 만나는</span>
            <br />
            <span style={redText}>최적의 공간</span>
          </Typography>
          
          {/* <span style={styleText}>
            크리에이터와 팬이 만나는
            최적의 공간.
          </span> */}
        </Box>
        <Box 
          sx={{
          // width: '100%',
          height: 1500,
          backgroundColor: '#FFFFFF',
        }}
        >
          <Typography variant="h1" gutterBottom style={styleText}>
            <span style={blackText}>크리에이터의 열정이 계속되도록.</span><br />
            <span style={blackText}>All-in-One 비즈니스 파트너.</span>
            
          </Typography>

          <div style={styleImg} >
            <img
              
              src="/assets/images/intro1.png"
              alt=''
              loading="lazy"
            />
          </div>
        </Box>
        <Box 
          sx={{
          // width: '100%',
          height: 3500,
          backgroundColor: '#000000',
        }}
        >
          <Typography variant="h1" gutterBottom style={styleText}>
            <span style={redText}>내가 원하는대로</span><br />
            <span style={redText}>쉽고 빠르게 만드는</span><br />
            <span style={redText}>나만의 멤버십 페이지</span>
          </Typography>
          <Grid
            container
            spacing={0}
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: '50vh' }}
          >
              <Card sx={{maxWidth: 380, height: 345}} style={blackBg}>
                  <CardContent>
                    <Typography variant='h3' component="div" style={whiteText}>
                      원하는 스타일대로 다양한 멤버십 플랜 만들기
                    </Typography>
                    <br />
                    <Typography variant='h5' component="div" style={whiteText}>
                      리워드와 가격을 크리에이터가 직접 설정하고, 여러 개의 멤버십 플랜을 만들 수 있어요. 원하는 스타일대로 다양한 플랜을 운영해보세요.
                    </Typography>
                  </CardContent>
              </Card>
              <Card sx={{maxWidth: 380, height: 345}} style={blackBg}>
                  <CardContent>
                    <img
                      src="/assets/images/intro2.png"
                      alt=''
                      loading="lazy"
                    />
                  </CardContent>
              </Card>
                  
          </Grid>
          <Grid
            container
            spacing={0}
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: '50vh' }}
          >
              <Card sx={{maxWidth: 380, height: 345}} style={blackBg}>
                  <CardContent>
                    <img
                      src="/assets/images/intro3.png"
                      alt=''
                      loading="lazy"
                    />
                  </CardContent>
              </Card>
              <Card sx={{maxWidth: 345, height: 345}} style={blackBg}>
                  <CardContent>
                    <Typography variant='h3' component="div" style={whiteText}>
                      여기에선 더욱 특별하게 팬 전용 콘텐츠와 커뮤니티 운영
                    </Typography>
                    <br />
                    <Typography variant='h5' component="div" style={whiteText}>
                      멤버십 팬 전용 콘텐츠와 커뮤니티 운영할 수 있습니다. 팬들은 크리에이터와 더욱 가깝고 특별한 소통을 경험할 수 있어요.
                    </Typography>
                  </CardContent>
              </Card>
                  
          </Grid>
          <Grid
            container
            spacing={0}
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: '50vh' }}
          >
              <Card sx={{maxWidth: 380, height: 345}} style={blackBg}>
                  <CardContent>
                    <Typography variant='h3' component="div" style={whiteText}>
                      내 콘텐츠와 제품을 글로벌 팬들에게 판매
                    </Typography>
                    <br />
                    <Typography variant='h5' component="div" style={whiteText}>
                      포토북, 클래스 영상, 강연 자료, 디자인 템플릿 등 디지털 콘텐츠와 직접 제작한 제품을 스토어에서 판매해보세요.
                    </Typography>
                  </CardContent>
              </Card>
              <Card sx={{maxWidth: 380, height: 345}} style={blackBg}>
                  <CardContent>
                    <img
                      src="/assets/images/intro4.png"
                      alt=''
                      loading="lazy"
                    />
                  </CardContent>
              </Card>
                  
          </Grid>
          <Grid
            container
            spacing={0}
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: '50vh' }}
          >
              <Card sx={{maxWidth: 380, height: 345}} style={blackBg}>
                  <CardContent>
                    <img
                      src="/assets/images/intro5.png"
                      alt=''
                      loading="lazy"
                    />
                  </CardContent>
              </Card>
              <Card sx={{maxWidth: 345, height: 345}} style={blackBg}>
                  <CardContent>
                    <Typography variant='h3' component="div" style={whiteText}>
                      {`${translate('docs.documentation')}`}
                      여기저기 흩어져있는 SNS 콘텐츠를 모두 한곳에
                    </Typography>
                    <br />
                    <Typography variant='h5' component="div" style={whiteText}>
                      유튜브, 인스타그램 등 운영중인 SNS 채널을 라이키에 모아 한 눈에 볼 수 있으니 관리하기 편해요.
                    </Typography>
                  </CardContent>
              </Card>
                  
          </Grid>
        </Box>

        <Box 
          sx={{
          // width: '100%',
          height: 600,
           backgroundColor: '#000000',
        }}
        >
          <Typography variant="h1" gutterBottom style={styleTitleText}>
            <span style={redText}>지금 라이키 시작하세요!</span><br /><br />
            <Button variant="outlined" style={buttonStyle} className={styles.button_set}>
              <Grid container direction="column">
                <Typography variant="h5" gutterBottom style={whiteText}>파트너 등록 신청</Typography>
                <Typography variant="subtitle" gutterBottom style={whiteText}>소속사, MCN, 기업, 단체를 위한 파트너 신청</Typography>
              </Grid>
              
            </Button>
            
          </Typography>
          <br />
          <Typography variant="h5" gutterBottom style={styleDetailText}>
            <span style={whiteText}>개인 크리에이터 신청은 앱 로그인 후 마이페이지에서 언제든지 자유롭게 신청하실 수 있습니다.</span>
          </Typography>
          

        </Box>
        <Grid container justifyContent="space-between" alignItems="center" >
          <div> 
            <Typography variant='h5'>
              LIKEY
            </Typography>
            <Typography variant='h5'>
              크리에이터와 팬이 만나는 최적의 공간
            </Typography>
          </div>

            
          <Grid item xs={1} p={1} justifyContent="flex-end">
            <LanguagePopover />
            <Button>
              고객센터
            </Button>
          </Grid>
         

        </Grid>
        
      </Container>
    </StyledRoot>
  );
}

