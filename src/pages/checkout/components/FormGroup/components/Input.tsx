import { CustomInput } from "./styles";
import { MdClose } from "react-icons/md";
import React from "react";
import { useForm, useFormContext } from "react-hook-form";

interface InputProps {
  label: string;
  isSmall?: boolean;
  isBig?: boolean;
  register?: ReturnType<ReturnType<typeof useForm>["register"]>;
  error?: boolean;
}

const Input = ({
  isSmall = false,
  isBig = false,
  register,
  label,
  error = false,
}: InputProps) => {
  const { setValue, watch } = useFormContext();

  return (
    <>
      <CustomInput
        error={error}
        id="yoo"
        style={isSmall ? { maxWidth: "300px" } : {}}
      >
        {!isBig && (
          <input
            style={isSmall ? { maxWidth: "300px" } : {}}
            type="text"
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
        {watch(register?.name ?? "")?.length > 0 && (
          <MdClose
            color="#1BD97B"
            id="icon"
            height="18px"
            width="18px"
            onClick={() => {
              setValue(register?.name ?? "", "");
            }}
          />
        )}
        {label === "Delivery Address" && (
          <span>{watch("delivery").length}/120</span>
        )}
      </CustomInput>
    </>
  );
};

export default Input;
