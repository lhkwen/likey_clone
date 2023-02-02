import { Button, Divider, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Header = ({type}) => {
    const navigate = useRouter();
    const historyGo = () => {
        navigate.back();
    }
    return(
    <>
        <div>
            {type===1 && (<Button onClick={historyGo}>&lt; 구매항목</Button>)}
            {type===2 && (<Button onClick={historyGo}>&lt; 상품</Button>)}
            {type===3 && (<Button onClick={historyGo}>&lt; 포스트</Button>)}
        </div>
        <Divider/>
    </>    
    )
}
export default Header;