import Input from "./components/Input";
import { MainWrapper } from "./styles";
import { useFormContext } from "react-hook-form";
import React from "react";
import { useCheckoutContext } from "../../context/CheckoutContext";

const FormGroup = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { order } = useCheckoutContext();
  return (
    <MainWrapper>
      <Input
        error={Boolean(errors.firstName)}
        label="Email"
        register={register("firstName", {
          required: true,
          pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
        })}
      />
      <Input
        label="Dropshipper name"
        isSmall={true}
        error={errors.dropShipper?.type === "required"}
        register={register("dropShipper", {
          required: order.isDropShip,
          disabled: !order.isDropShip,
        })}
      />
      <Input
        label="Phone Number"
        error={errors.phoneNumber !== undefined}
        register={register("phoneNumber", {
          required: true,
          maxLength: 20,
          minLength: 6,
          pattern: /^[+0-9][0-9-,]*$/,
        })}
      />
      <Input
        label="Dropshipper phone number"
        isSmall={true}
        error={errors.dropPhone !== undefined}
        register={register("dropPhone", {
          required: order.isDropShip,
          maxLength: 20,
          minLength: 6,
          pattern: /^\d+$/,
          disabled: !order.isDropShip,
        })}
      />
      <Input
        isBig={true}
        label="Delivery Address"
        register={register("delivery", { required: true, maxLength: 120 })}
        error={errors.delivery !== undefined}
      />
    </MainWrapper>
  );
};

export default FormGroup;
