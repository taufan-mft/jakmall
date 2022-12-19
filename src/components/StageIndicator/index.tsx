import { CircleWrapper, MainWrapper, OrangeNotch } from "./styles";
import CircleStage from "./components/CircleStage";
import { useParams } from "react-router-dom";

const StageIndicator = () => {
  const { type } = useParams();
  return (
    <MainWrapper>
      <OrangeNotch>
        <CircleWrapper>
          <CircleStage id="1" currentId={type ?? ""} text="Delivery" />
          <CircleStage id="2" currentId={type ?? ""} text="Payment" />
          <CircleStage
            showChevron={false}
            id="3"
            currentId={type ?? ""}
            text="Finish"
          />
        </CircleWrapper>
      </OrangeNotch>
    </MainWrapper>
  );
};

export default StageIndicator;
