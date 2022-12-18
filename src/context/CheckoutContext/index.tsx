import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { useParams } from "react-router-dom";

interface ContextType {
  order: OrderDetail;
  setOrder: Dispatch<SetStateAction<OrderDetail>>;
  setPaymentMethod: Dispatch<SetStateAction<string>>;
  setShippingDetail: Dispatch<SetStateAction<ShippingDetail>>;
  paymentMethod: string;
  shippingDetail: ShippingDetail;
  totalPayment: number;
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
  totalPayment: 0,
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
  const { type } = useParams();
  const [paymentMethod, setPaymentMethod] = useState("e-Wallet");
  const [shippingDetail, setShippingDetail] = useState<ShippingDetail>({
    courierName: "GO-SEND",
    cost: 15000,
    estimation: "today",
  });

  const totalPayment = useMemo(
    () =>
      500000 +
      (type !== "1" ? shippingDetail.cost : 0) +
      (order.isDropShip ? 5900 : 0),
    [order.isDropShip, shippingDetail.cost]
  );

  return (
    <CheckoutContext.Provider
      value={{
        order,
        setOrder,
        paymentMethod,
        setPaymentMethod,
        shippingDetail,
        setShippingDetail,
        totalPayment,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

const useCheckoutContext = () => useContext(CheckoutContext);

export { CheckoutProvider, useCheckoutContext };
