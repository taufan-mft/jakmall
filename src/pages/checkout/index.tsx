import {MainWrapper, WhiteBox} from "./styles";
import StageIndicator from "./components/StageIndicator";
import BackButton from "./components/BackButton";


const CheckoutPage = () => {
    return (
        <MainWrapper>
            <WhiteBox>
                <StageIndicator />
                <BackButton />
            </WhiteBox>
        </MainWrapper>)
}

export default CheckoutPage;