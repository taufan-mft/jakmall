import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
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
  resetData: () => void;
}

export const CheckoutContext = React.createContext<ContextType>({
  resetData: () => {},
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
  const isFirstRender = useRef(true);
  const [order, setOrder] = useState<OrderDetail>({
    firstName: "",
    dropShipper: "",
    phoneNumber: "",
    dropPhone: "",
    delivery: "",
    isDropShip: false,
  });
  const { type } = useParams();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [shippingDetail, setShippingDetail] = useState<ShippingDetail>({
    courierName: "",
    cost: 15000,
    estimation: "today",
  });

  const resetData = useCallback(() => {
    setOrder({
      firstName: "",
      dropShipper: "",
      phoneNumber: "",
      dropPhone: "",
      delivery: "",
      isDropShip: false,
    });
    setPaymentMethod("e-Wallet");
    setShippingDetail({
      courierName: "GO-SEND",
      cost: 15000,
      estimation: "today",
    });
  }, []);

  useEffect(() => {
    if (order.firstName) {
      localStorage.setItem("order", JSON.stringify(order));
    }
  }, [order]);

  useEffect(() => {
    if (!paymentMethod) return;
    localStorage.setItem("payment", paymentMethod);
  }, [paymentMethod]);

  useEffect(() => {
    if (!shippingDetail.courierName) return;
    localStorage.setItem("shipping", JSON.stringify(shippingDetail));
  }, [shippingDetail]);

  useEffect(() => {
    const savedOrder = localStorage.getItem("order");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
    const savedPayment = localStorage.getItem("payment");
    if (savedPayment) {
      setPaymentMethod(savedPayment);
    } else {
      setPaymentMethod("e-Wallet");
    }
    const savedShipping = localStorage.getItem("shipping");
    if (savedShipping) {
      setShippingDetail(JSON.parse(savedShipping));
    } else {
      setShippingDetail({
        courierName: "GO-SEND",
        cost: 15000,
        estimation: "today",
      });
    }
    isFirstRender.current = false;
  }, []);

  const totalPayment = useMemo(
    () =>
      500000 +
      (type !== "1" ? shippingDetail.cost : 0) +
      (order.isDropShip ? 5900 : 0),
    [order.isDropShip, shippingDetail.cost, type]
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
        resetData,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

const useCheckoutContext = () => useContext(CheckoutContext);

export { CheckoutProvider, useCheckoutContext };
