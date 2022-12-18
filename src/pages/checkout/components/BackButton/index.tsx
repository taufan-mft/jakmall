import { MainWrapper } from "./styles";
import { AiOutlineArrowLeft } from "react-icons/ai";

const BackButton = () => {
  return (
    <MainWrapper>
      <AiOutlineArrowLeft height="18px" width="18px" />
      <span>Back to Cart</span>
    </MainWrapper>
  );
};

export default BackButton;
