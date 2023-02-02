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
            <Button onClick={historyGo}>&lt; 앨범</Button>
        </div>
        <Divider/>
    </>    
    )
}
export default Header;