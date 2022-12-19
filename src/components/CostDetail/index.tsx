import { MainWrapper } from "./styles";
import { useCheckoutContext } from "../../context/CheckoutContext";
import { useParams } from "react-router-dom";

const CostDetail = () => {
  const { totalPayment, shippingDetail, order } = useCheckoutContext();
  const { type } = useParams();

  return (
    <MainWrapper>
      <div>
        <span>Cost of goods</span>
        {order.isDropShip && <span>Dropshipping Fee</span>}
        {type !== "1" && <span>{shippingDetail.courierName} shipment</span>}
        <h2>Total</h2>
      </div>
      <div>
        <span className="bold">500,000</span>
        {order.isDropShip && <span className="bold">5,900</span>}
        {type !== "1" && (
          <span className="bold">{shippingDetail.cost.toLocaleString()}</span>
        )}
        <h2>{totalPayment.toLocaleString()}</h2>
      </div>
    </MainWrapper>
  );
};

export default CostDetail;
