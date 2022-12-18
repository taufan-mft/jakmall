import { MainWrapper, DropshipCheck, CheckWrapper } from "./styles";
import { useCheckoutContext } from "../../../../context/CheckoutContext";
import { useParams } from "react-router-dom";
import { useFormContext } from "react-hook-form";

interface TitleHeaderProps {
  title: string;
}

const TitleHeader = ({ title }: TitleHeaderProps) => {
  const { order, setOrder } = useCheckoutContext();
  const { type } = useParams();
  const { setValue } = useFormContext();

  return (
    <MainWrapper>
      <div style={{ position: "relative" }}>
        <h1>{title}</h1>
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
      {type === "1" && (
        <CheckWrapper
          onClick={() =>
            setOrder((prevState) => {
              if (prevState.isDropShip) {
                setValue("dropPhone", "");
                setValue("dropShipper", "");
              }
              return {
                ...prevState,
                isDropShip: !prevState.isDropShip,
              };
            })
          }
        >
          <DropshipCheck>{order.isDropShip ? "✔" : ""}️</DropshipCheck>
          <label>Send as dropshipper</label>
        </CheckWrapper>
      )}
    </MainWrapper>
  );
};

export default TitleHeader;
