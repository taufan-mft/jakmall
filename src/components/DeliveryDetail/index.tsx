import { MainWrapper } from "./styles";
import { useCheckoutContext } from "../../context/CheckoutContext";
import { Separator } from "../../pages/checkout/styles";
import { useParams } from "react-router-dom";

const DeliveryDetail = () => {
  const { shippingDetail } = useCheckoutContext();
  const { type } = useParams();

  if (type === "1") return null;
  return (
    <MainWrapper>
      <span className="estimation-text">Delivery estimation</span>
      <span className="detail">
        {shippingDetail.estimation} by {shippingDetail.courierName}
      </span>
      <Separator />
    </MainWrapper>
  );
};

export default DeliveryDetail;
