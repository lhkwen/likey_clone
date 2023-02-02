import { Typography } from "@mui/material";
import React from "react";


const RecommandHorizonBar = () => {
    const styleObj = {
        width: '100%',
     //   height: '100%',
        textAlign: 'center',
    }
    return(
        <div style={styleObj}>
            <Typography variant="h4">추천 크리에이터를 구독해보세요.</Typography>
            <Typography variant="body2">크리에이터들의 미공개 일상을 볼 수 있습니다.</Typography>
        </div>
    )
}

export default RecommandHorizonBar;