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
import TitleHeader from "./components/TitleHeader";
import FormGroup from "./components/FormGroup";
import CostDetail from "./components/CostDetail";
import DeliveryDetail from "./components/DeliveryDetail";
import BankDetail from "./components/BankDetail";
import { useCallback, useMemo } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useCheckoutContext } from "../../context/CheckoutContext";
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
  const { paymentMethod } = useCheckoutContext();
  const methods = useForm<Data>({
    defaultValues: {
      dropShipper: "",
      firstName: "",
      phoneNumber: "",
      dropPhone: "",
      delivery: "",
    },
  });
  const handleClick = useCallback(() => {
    console.log("taniaaa", methods.getValues());
    methods.handleSubmit(
      (v) => console.log(v),
      (e) => console.log(e)
    );
  }, [methods]);

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
          (v) => console.log(v),
          (e) => console.log(e)
        )}
      >
        <MainWrapper>
          <WhiteBox>
            <StageIndicator />
            <BackButton />
            <FlexHead>
              <LeftColumn>
                <TitleHeader />
                <FormGroup></FormGroup>
              </LeftColumn>
              <RightColumn>
                <h1>Summary</h1>
                <p>10 items purchased</p>
                <Separator />
                <DeliveryDetail />
                <BankDetail />
                <CostWrapper>
                  <CostDetail />
                  <BigButton onClick={handleClick}>{buttonText}</BigButton>
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
