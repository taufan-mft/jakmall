import {CircleWrapper, MainWrapper, OrangeNotch} from "./styles";
import CircleStage from "./components/CircleStage";


const StageIndicator = () => {
    return (
        <MainWrapper>
            <OrangeNotch>
                <CircleWrapper>
                    <CircleStage id="1" currentId="1" text="Delivery"/>
                    <CircleStage id="2" currentId="1" text="Payment"/>
                    <CircleStage showChevron={false} id="3" currentId="1" text="Finish"/>
                </CircleWrapper>
            </OrangeNotch>
        </MainWrapper>
    )
}

export default StageIndicator;