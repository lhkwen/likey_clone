import React, { useState } from "react";
import Header from "src/custom-component/pay/organism/Header";
import OrderContent from "src/custom-component/pay/organism/OrderContent";
import PayAgree from "src/custom-component/pay/organism/PayAgree";
import PayBtn from "src/custom-component/pay/organism/PayBtn";
import PayInfo from "src/custom-component/pay/organism/PayInfo";
import PayMethod from "src/custom-component/pay/organism/PayMethod";
import withAuth from "src/hooks/withAuth";
import HomeLayout from "src/layouts/content/HomeLayout";

const Pay = () => {
    // const name = useSelector(selectAuth);
    const [validAgree, setValidAgree] = useState(false);
    const [validMethod, setValidMethod] = useState(false);

    return(
        <HomeLayout>
            <Header/>
            <OrderContent />
            <PayMethod 
                setValidMethod={setValidMethod}
            />
            <PayInfo />
            <PayAgree 
                setValidAgree={setValidAgree}
            />
            <PayBtn 
                validAgree={validAgree}
                validMethod={validMethod}
            />
        </HomeLayout>
    )
}

// export default withAuth(Pay);
 export default withAuth(Pay);