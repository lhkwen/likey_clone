import { Button } from "@mui/material";
import React, { useState , useEffect } from "react"



const PayBtn = ({validAgree,validMethod}) => {
    const [payFlg, setPayFlg] = useState(true);
    useEffect(()=> {   
        if(validAgree && validMethod) {
            setPayFlg(false);
        }else {
            setPayFlg(true);
        }

    },[validAgree, validMethod])
    return(
        // <div style={styleObj}>
            <Button disabled={payFlg}>결제하기</Button>
        // </div>
    )
}

export default PayBtn