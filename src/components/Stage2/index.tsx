import TitleHeader from "../TitleHeader";
import { Head, MainWrapper } from "./styles";
import ShippingCard from "../ShippingCard";
import { useCheckoutContext } from "../../context/CheckoutContext";
import PaymentCard from "../PaymentCard";

export function Stage2() {
  const { shippingDetail } = useCheckoutContext();

  return (
    <Head>
      <TitleHeader title="Shipment" />
      <MainWrapper>
        <ShippingCard
          label="GO-SEND"
          cost={15000}
          selected={shippingDetail.courierName}
          estimation="today"
        />
        <ShippingCard
          label="JNE"
          cost={9000}
          selected={shippingDetail.courierName}
          estimation="2 days"
        />
        <ShippingCard
          label="Personal Courier"
          cost={29000}
          selected={shippingDetail.courierName}
          estimation="1 day"
        />
      </MainWrapper>
      <TitleHeader title="Payment" />
      <MainWrapper>
        <PaymentCard label="e-Wallet" />
        <PaymentCard label="Bank Transfer" />
        <PaymentCard label="Virtual Account" />
      </MainWrapper>
    </Head>
  );
}
