import { Card } from "./styles";
import { useCheckoutContext } from "../../context/CheckoutContext";

interface Props {
  label: string;
  cost: number;
  selected: string;
  estimation: string;
}

const ShippingCard = ({ label, cost, selected, estimation }: Props) => {
  const { setShippingDetail } = useCheckoutContext();
  return (
    <Card
      isSelected={label === selected}
      onClick={() =>
        setShippingDetail({
          courierName: label,
          estimation: estimation,
          cost: cost,
        })
      }
    >
      <h1>{label}</h1>
      <h2>{cost.toLocaleString()}</h2>
    </Card>
  );
};

export default ShippingCard;
