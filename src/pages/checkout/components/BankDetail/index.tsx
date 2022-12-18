import { MainWrapper } from "./styles";
import { useCheckoutContext } from "../../../../context/CheckoutContext";
import { useParams } from "react-router-dom";

const BankDetail = () => {
  const { type } = useParams();
  const { paymentMethod } = useCheckoutContext();

  if (type !== "3") return null;
  return (
    <MainWrapper>
      <span className="estimation-text">Payment method</span>
      <span className="detail">{paymentMethod}</span>
    </MainWrapper>
  );
};

export default BankDetail;
