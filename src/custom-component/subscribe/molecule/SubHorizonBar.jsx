import React from "react";


const SubHorizonBar = () => {
    const styleObj = {
        width: '100%',
     //   height: '100%',
        textAlign: 'center',
        fontSize: '14px',
    }
    return(
        <div style={styleObj}>
            구독한 크리에이터가 없습니다.<br />
            크리에이터를 구독하고<br />
            다양한 컨텐츠를 피드에서 받아보세요!<br />
        </div>
    )
}

export default SubHorizonBar;