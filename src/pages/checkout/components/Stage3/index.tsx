import TitleHeader from "../TitleHeader";
import { Head, MainWrapper } from "./styles";
import ShippingCard from "../ShippingCard";
import { useCheckoutContext } from "../../../../context/CheckoutContext";
import PaymentCard from "../PaymentCard";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export function Stage3() {
  const { shippingDetail } = useCheckoutContext();
  const navigate = useNavigate();

  return (
    <Head>
      <div style={{ position: "relative" }}>
        <h1>Thank You</h1>
        <div
          style={{
            backgroundColor: "rgba(238, 238, 238, 1)",
            bottom: "8px",
            position: "absolute",
            height: "8px",
            width: "100%",
          }}
        ></div>
      </div>
      <p className="order-id">Order ID: XXKYB</p>
      <p className="shipping">
        Your order will be delivered today with {shippingDetail.courierName}
      </p>
      <MainWrapper
        onClick={() => navigate("/checkout/1")}
        style={{ marginTop: "60px" }}
      >
        <AiOutlineArrowLeft height="18px" width="18px" />
        <span>Back to Homepage</span>
      </MainWrapper>
    </Head>
  );
}
