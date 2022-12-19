import { CustomInput } from "./styles";
import { MdClose, MdCheck } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { useForm, useFormContext } from "react-hook-form";

interface InputProps {
  label: string;
  isSmall?: boolean;
  isBig?: boolean;
  register?: ReturnType<ReturnType<typeof useForm>["register"]>;
  error?: boolean;
  type?: string;
}

const Input = ({
  isSmall = false,
  isBig = false,
  register,
  label,
  error = undefined,
  type = "text",
}: InputProps) => {
  const { watch, formState } = useFormContext();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (formState.isSubmitting) {
      setShow(true);
    }
  }, [formState.isSubmitting]);

  return (
    <>
      <CustomInput
        error={error ?? false}
        id="yoo"
        style={isSmall ? { maxWidth: "300px" } : {}}
      >
        {!isBig && (
          <input
            style={isSmall ? { maxWidth: "300px" } : {}}
            type={type}
            placeholder="."
            id="target"
            {...register}
          />
        )}
        {isBig && (
          <textarea
            rows={5}
            style={isSmall ? { maxWidth: "300px" } : {}}
            placeholder="."
            id="target"
            {...register}
          />
        )}
        <label htmlFor="target">{label}</label>
        {error && show && (
          <MdClose color="#FF8A00" id="icon" height="18px" width="18px" />
        )}
        {error == false && show && (
          <MdCheck color="#1BD97B" id="icon" height="18px" width="18px" />
        )}
        {label === "Delivery Address" && (
          <span>{watch("delivery").length}/120</span>
        )}
      </CustomInput>
    </>
  );
};

export default Input;
