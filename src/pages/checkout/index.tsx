import {BigButton, CostWrapper, FlexHead, LeftColumn, MainWrapper, RightColumn, Separator, WhiteBox} from "./styles";
import StageIndicator from "./components/StageIndicator";
import BackButton from "./components/BackButton";
import TitleHeader from "./components/TitleHeader";
import FormGroup from "./components/FormGroup";
import useMediaQuery from "../../hooks/useMediaQuery";
import CostDetail from "./components/CostDetail";
import DeliveryDetail from "./components/DeliveryDetail";
import BankDetail from "./components/BankDetail";


const CheckoutPage = () => {
    const matches = useMediaQuery('(min-width: 768px)')
    return (
        <MainWrapper>
            <WhiteBox>
                <StageIndicator />
                <BackButton />
                <FlexHead>
                    <LeftColumn>
                        <TitleHeader />
                        <FormGroup></FormGroup>
                    </LeftColumn>
                    <RightColumn>
                        <h1>Summary</h1>
                        <p>10 items purchased</p>
                        <Separator />
                        <DeliveryDetail />
                        <Separator />
                        <BankDetail />
                        <CostWrapper>
                            <CostDetail />
                            <BigButton>Continue to Payment</BigButton>
                        </CostWrapper>
                    </RightColumn>
                </FlexHead>
            </WhiteBox>
        </MainWrapper>)
}

export default CheckoutPage;