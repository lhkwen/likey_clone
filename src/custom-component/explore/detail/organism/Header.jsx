import { Button, Divider } from "@mui/material";
import { useRouter } from "next/router";
import React from "react"


const Header = () => {
    const navigate = useRouter();
    const historyGo = () => {
        navigate.back();
    }
    return(
        <>
            <div>
                <Button onClick={historyGo}>&lt; 탐색</Button>
            </div>
            <Divider/>
        </>
    )
}

export default Header;