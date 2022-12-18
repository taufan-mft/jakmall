import React, { Dispatch, SetStateAction, useContext, useState } from "react";

interface ContextType {
  order: OrderDetail;
  setOrder: Dispatch<SetStateAction<OrderDetail>>;
  setPaymentMethod: Dispatch<SetStateAction<string>>;
  setShippingDetail: Dispatch<SetStateAction<ShippingDetail>>;
  paymentMethod: string;
  shippingDetail: ShippingDetail;
}

export const CheckoutContext = React.createContext<ContextType>({
  order: {
    firstName: "",
    dropShipper: "",
    phoneNumber: "",
    dropPhone: "",
    delivery: "",
    isDropShip: false,
  },
  setOrder: () => {},
  setPaymentMethod: () => {},
  setShippingDetail: () => {},
  paymentMethod: "",
  shippingDetail: {
    courierName: "GO-SEND",
    cost: 15000,
    estimation: "today",
  },
});

interface CheckoutProviderProps {
  children: React.ReactNode;
}

interface OrderDetail {
  firstName: string;
  dropShipper: string;
  phoneNumber: string;
  dropPhone: string;
  delivery: string;
  isDropShip: boolean;
}

interface ShippingDetail {
  courierName: string;
  cost: number;
  estimation: string;
}

const CheckoutProvider = ({ children }: CheckoutProviderProps) => {
  const [order, setOrder] = useState<OrderDetail>({
    firstName: "",
    dropShipper: "",
    phoneNumber: "",
    dropPhone: "",
    delivery: "",
    isDropShip: false,
  });
  const [paymentMethod, setPaymentMethod] = useState("e-Wallet");
  const [shippingDetail, setShippingDetail] = useState<ShippingDetail>({
    courierName: "GO-SEND",
    cost: 15000,
    estimation: "today",
  });

  return (
    <CheckoutContext.Provider
      value={{
        order,
        setOrder,
        paymentMethod,
        setPaymentMethod,
        shippingDetail,
        setShippingDetail,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

const useCheckoutContext = () => useContext(CheckoutContext);

export { CheckoutProvider, useCheckoutContext };
