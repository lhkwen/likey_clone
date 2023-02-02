// next
import { Link, Stack, Typography } from '@mui/material';
import Head from 'next/head';
import ContentLayout from 'src/layouts/content/ContentLayout';
import AuthLoginForm from 'src/sections/auth/AuthLoginForm';
// sections
import Main from '../sections/intro/Main';
// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Head>
        <title> Login | Minimal UI</title>
      </Head>

      <ContentLayout>
        <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
          <Typography variant="h4">로그인</Typography>


        </Stack>

        <AuthLoginForm />

      </ContentLayout>
    </>
  );
}
