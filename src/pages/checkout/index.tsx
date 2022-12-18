import {
  BigButton,
  CostWrapper,
  FlexHead,
  LeftColumn,
  MainWrapper,
  RightColumn,
  Separator,
  WhiteBox,
} from "./styles";
import StageIndicator from "./components/StageIndicator";
import BackButton from "./components/BackButton";
import CostDetail from "./components/CostDetail";
import DeliveryDetail from "./components/DeliveryDetail";
import BankDetail from "./components/BankDetail";
import { useCallback, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useCheckoutContext } from "../../context/CheckoutContext";
import { Stage1 } from "./components/Stage1";
import { Stage2 } from "./components/Stage2";

export type Data = {
  firstName: string;
  dropShipper: string;
  phoneNumber: string;
  dropPhone: string;
  delivery: string;
};

const CheckoutPage = () => {
  // const matches = useMediaQuery("(min-width: 768px)");
  const { type } = useParams();
  const navigate = useNavigate();
  const { paymentMethod, setOrder } = useCheckoutContext();
  const methods = useForm<Data>({
    defaultValues: {
      dropShipper: "",
      firstName: "",
      phoneNumber: "",
      dropPhone: "",
      delivery: "",
    },
  });

  const buttonText = useMemo(() => {
    if (type === "1") {
      return "Continue to Payment";
    }
    if (type === "2") {
      return `Pay with ${paymentMethod}`;
    }
  }, [paymentMethod, type]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(
          (v) => {
            setOrder((prevState) => ({
              ...prevState,
              delivery: v.delivery,
              dropPhone: v.dropPhone,
              phoneNumber: v.phoneNumber,
              firstName: v.firstName,
              dropShipper: v.dropShipper,
            }));
            navigate("/checkout/2");
          },
          (e) => console.log(e)
        )}
      >
        <MainWrapper>
          <WhiteBox>
            <StageIndicator />
            <BackButton />
            <FlexHead>
              <LeftColumn>
                {type === "1" && <Stage1 />}
                {type === "2" && <Stage2 />}
              </LeftColumn>
              <RightColumn>
                <h1>Summary</h1>
                <p>10 items purchased</p>
                <Separator />
                <DeliveryDetail />
                <BankDetail />
                <CostWrapper>
                  <CostDetail />
                  <BigButton>{buttonText}</BigButton>
                </CostWrapper>
              </RightColumn>
            </FlexHead>
          </WhiteBox>
        </MainWrapper>
      </form>
    </FormProvider>
  );
};

export default CheckoutPage;
