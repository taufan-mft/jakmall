import { MainWrapper, DropshipCheck, CheckWrapper } from "./styles";
import { useCheckoutContext } from "../../../../context/CheckoutContext";
import { useParams } from "react-router-dom";

const TitleHeader = () => {
  const { order, setOrder } = useCheckoutContext();
  const { type } = useParams();

  return (
    <MainWrapper>
      <div style={{ position: "relative" }}>
        <h1>Delivery details</h1>
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
      {type === "1" && (
        <CheckWrapper
          onClick={() =>
            setOrder((prevState) => ({
              ...prevState,
              isDropShip: !prevState.isDropShip,
            }))
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
