import { Button, Divider, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
    const navigate = useRouter();

    const historyGo = () => {
        navigate.back();
    }
    return(
        <>
            <div>
                <Button onClick={historyGo}>&lt; 카드등록</Button>
            </div>
            <Divider/>
        </>
    )
}

export default Header;