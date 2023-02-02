import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setAuth } from 'src/redux/authSlice';

// ----------------------------------------------------------------------

export default function Index() {
  const router = useRouter();

  const dispatch = useDispatch();
  // const auth = JSON.parse(localStorage.getItem("accessToken") || "{}");

  // 로그인처리
  useEffect(() => {
    // dispatch(setAuth(auth));
    if (router.pathname === '/') {
      router.push('/main');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return null;
}
