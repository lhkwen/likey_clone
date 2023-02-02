import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (WrapperComponent) => (props)=>{
        if(typeof window!== "undefined") {
            const navigate = useRouter();
            if(!localStorage.getItem("user")) {
                console.log('로그아웃')
                navigate.push('/login');
                return null;
            }
            console.log('로컬')
            return <WrapperComponent {...props} />;
        }
            console.log('서버')
            return null;
        
    }

export default withAuth;