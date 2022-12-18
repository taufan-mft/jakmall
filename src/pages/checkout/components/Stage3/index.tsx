import { Head, MainWrapper } from "./styles";
import { useCheckoutContext } from "../../../../context/CheckoutContext";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function randomString(length: number, chars: string) {
  let result = "";
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

export function Stage3() {
  const { shippingDetail, resetData } = useCheckoutContext();
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
            width: "300px",
          }}
        ></div>
      </div>
      <p className="order-id">
        Order ID: {randomString(5, "23456789ABCDEFGHJKLMNPQRSTUVWXYZ")}
      </p>
      <p className="shipping">
        Your order will be delivered today with {shippingDetail.courierName}
      </p>
      <MainWrapper
        onClick={() => {
          resetData();
          navigate("/checkout/1");
        }}
        style={{ marginTop: "60px" }}
      >
        <AiOutlineArrowLeft height="18px" width="18px" />
        <span>Back to Homepage</span>
      </MainWrapper>
    </Head>
  );
}
