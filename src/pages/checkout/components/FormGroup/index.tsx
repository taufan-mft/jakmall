import Input from "./components/Input";
import { MainWrapper } from "./styles";
import { useFormContext } from "react-hook-form";
import React from "react";
import { useCheckoutContext } from "../../../../context/CheckoutContext";

const FormGroup = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { order } = useCheckoutContext();
  return (
    <MainWrapper>
      <Input
        error={errors.firstName?.type === "required"}
        label="Name"
        register={register("firstName", { required: true, minLength: 5 })}
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
          pattern: /^\d+$/,
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
