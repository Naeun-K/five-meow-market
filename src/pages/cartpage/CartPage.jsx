import { useState } from "react";
import EmptyCart from "../../components/cartui/emptyCart";
import BasicPage from "../basicPage/BasicPage";
import CartUI from "../../components/cartui/CartUI";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  if (cartItems.length === 0) {
    return (
      <BasicPage>
        <EmptyCart />
      </BasicPage>
    );
  }

  return (
    <BasicPage>
      <CartUI />
    </BasicPage>
  );
}
