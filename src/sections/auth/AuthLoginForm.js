import { useEffect, useState } from 'react';
import * as Yup from 'yup';
// next
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, Alert, IconButton, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from 'src/api/services/login';
import { useGetPokemonByNameQuery } from 'src/api/services/pokemon';
import { setUser } from 'src/redux/userSlice';
import { useUserMeMutation } from 'src/api/services/user';
import { setAuth } from 'src/redux/authSlice';
// auth
// components
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

export default function AuthLoginForm() {
  // const { login } = useAuthContext();
  const router = useRouter();
//  const [state, dispatch] = useReducer(reducer, initialState);
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [showPassword, setShowPassword] = useState(false);
// const userInfo = useSelector((state)=> state.userInfo);
  const dispatch = useDispatch();
  
  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: 'demo@minimals.cc',
    password: 'demo1234',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;
  const [login, { data: loginData, isSuccess:isLoginSuccess }] = useLoginMutation();

  const [me] = useUserMeMutation();
//  const [ME, { data: loginData1,  isSuccess:isLoginSuccess1 }] = useMeMutation();



  const meInfo = async() => {
    const result = await me();
    console.log('mere1',result.data)
    if(result.data.status){
      dispatch(
        setUser({
          user: result.data.data
        })
      );
      router.push('/home')
      // setTimeout(() => {
      //   router.push('/home')
      // }, 1000);
      
    }
     
    
  }

  const {data} = useGetPokemonByNameQuery('bulbasaur');

  const onLogin = async () => {
      await login({login_id: email, passwd: pw});
    // eslint-disable-next-line no-shadow
  };

  useEffect(()=> {
    if(isLoginSuccess) {
      dispatch(
        setAuth({
          accessToken:loginData.data.access_token, 
          refreshToken: loginData.data.refresh_token,
          chatToken: loginData.data.chat_token
        })
      );
     meInfo();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isLoginSuccess])

  return (
    <>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

         <TextField
         
         fullWidth
         onChange={(e) => setEmail(e.currentTarget.value)}
       />
       <TextField
         type="password"
         fullWidth
         onChange={(e) => setPw(e.currentTarget.value)}
         InputProps={{
           endAdornment: (
             <InputAdornment position="end">
               <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                 <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
               </IconButton>
             </InputAdornment>
           ),
         }}
       />
      </Stack>

      <Stack alignItems="flex-end" sx={{ my: 2 }}>
        {/* <Link variant="body2" color="inherit" underline="always">
          Forgot password?
        </Link> */}
      </Stack>
          {/* {data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null} */}
      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitSuccessful || isSubmitting}
        onClick={() => {
          onLogin();
        }}
        sx={{
          bgcolor: 'text.primary',
          color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
          '&:hover': {
            bgcolor: 'text.primary',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
          },
        }}
      >
        Login
      </LoadingButton>
    </>
  );
}
