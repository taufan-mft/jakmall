import { Card } from "./styles";
import { useCheckoutContext } from "../../context/CheckoutContext";

interface Props {
  label: string;
}

const PaymentCard = ({ label }: Props) => {
  const { paymentMethod, setPaymentMethod } = useCheckoutContext();
  return (
    <Card
      isSelected={label === paymentMethod}
      onClick={() => setPaymentMethod(label)}
    >
      <h1>{label}</h1>
      {label === "e-Wallet" && <h2>1,500,000 left</h2>}
    </Card>
  );
};

export default PaymentCard;
