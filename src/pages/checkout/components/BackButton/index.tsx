import { MainWrapper } from "./styles";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";

const BackButton = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  return (
    <MainWrapper onClick={() => navigate(-1)}>
      <AiOutlineArrowLeft height="18px" width="18px" />
      <span>Back to {type === "1" ? "Cart" : "Delivery"}</span>
    </MainWrapper>
  );
};

export default BackButton;
