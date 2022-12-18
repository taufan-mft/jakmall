import {LeftColumn, MainWrapper, WhiteBox} from "./styles";
import StageIndicator from "./components/StageIndicator";
import BackButton from "./components/BackButton";
import TitleHeader from "./components/TitleHeader";
import FormGroup from "./components/FormGroup";
import useMediaQuery from "../../hooks/useMediaQuery";


const CheckoutPage = () => {
    const matches = useMediaQuery('(min-width: 768px)')
    return (
        <MainWrapper>
            <WhiteBox>
                <StageIndicator />
                <BackButton />
                <LeftColumn>
                    <TitleHeader />
                    <FormGroup></FormGroup>
                </LeftColumn>
            </WhiteBox>
        </MainWrapper>)
}

export default CheckoutPage;