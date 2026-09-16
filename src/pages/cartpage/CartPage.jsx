import { useEffect, useState } from "react";
import EmptyCart from "../../components/cartui/emptyCart";
import BasicPage from "../basicPage/BasicPage";
import CartUI from "../../components/cartui/CartUI";
import {
  getCart,
  updateCartItem,
  deleteCartItem,
} from "../../services/cartServices";
import Loader from "../../components/loader/Loader";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { isLoggedIn, accessToken, isAuthLoading } = useAuth();
  const { showToast } = useToast();

  // 장바구니 조회
  useEffect(() => {
    if (isAuthLoading || !isLoggedIn || !accessToken) {
      return;
    }

    const fetchCart = async () => {
      try {
        const result = await getCart(accessToken);

        if (!result.success) {
          throw new Error(result.message || "장바구니 조회에 실패했습니다.");
        }

        const items = result.items ?? [];

        setCartItems(items);

        // 처음 조회했을 때 전체 상품 선택
        setSelectedItems(items.map((item) => item.cartItemId));
      } catch (error) {
        console.error("장바구니 조회 실패:", error);

        showToast(error.message || "장바구니 조회에 실패했습니다.", false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCart();
  }, [isAuthLoading, isLoggedIn, accessToken, showToast]);

  // 상품 선택 / 선택 해제
  const handleCheck = (cartItemId, checked) => {
    if (checked) {
      setSelectedItems((prev) => {
        if (prev.includes(cartItemId)) {
          return prev;
        }

        return [...prev, cartItemId];
      });

      return;
    }

    setSelectedItems((prev) => prev.filter((id) => id !== cartItemId));
  };

  // 상품 수량 변경
  const handleQuantityChange = async (cartItemId, quantity) => {
    try {
      const result = await updateCartItem(cartItemId, quantity, accessToken);

      if (!result.success) {
        throw new Error(result.message || "상품 수량 변경에 실패했습니다.");
      }

      setCartItems((prev) =>
        prev.map((item) =>
          item.cartItemId === result.cartItemId
            ? {
                ...item,
                quantity: result.quantity,
                itemAmount: result.itemAmount,
              }
            : item,
        ),
      );
    } catch (error) {
      console.error("장바구니 수량 변경 실패:", error);

      showToast(error.message || "상품 수량 변경에 실패했습니다.", false);
    }
  };

  // 상품 개별 삭제
  const handleRemove = async (cartItemId) => {
    try {
      const result = await deleteCartItem(cartItemId, accessToken);

      if (!result.success) {
        throw new Error(result.message || "상품 삭제에 실패했습니다.");
      }

      setCartItems((prev) =>
        prev.filter((item) => item.cartItemId !== cartItemId),
      );

      setSelectedItems((prev) => prev.filter((id) => id !== cartItemId));

      showToast(result.message || "장바구니에서 상품을 삭제했습니다.", true);
    } catch (error) {
      console.error("장바구니 상품 삭제 실패:", error);

      showToast(error.message || "상품 삭제에 실패했습니다.", false);
    }
  };

  // 로그인하지 않은 경우
  if (!isLoggedIn || !accessToken) {
    return (
      <BasicPage>
        <EmptyCart />
      </BasicPage>
    );
  }

  // 장바구니 조회 중
  if (isLoading) {
    return (
      <BasicPage>
        <Loader />
      </BasicPage>
    );
  }

  // 장바구니가 비어있는 경우
  if (cartItems.length === 0) {
    return (
      <BasicPage>
        <EmptyCart />
      </BasicPage>
    );
  }

  return (
    <BasicPage>
      <CartUI
        cartItems={cartItems}
        selectedItems={selectedItems}
        onCheck={handleCheck}
        onQuantityChange={handleQuantityChange}
        onRemove={handleRemove}
      />
    </BasicPage>
  );
}
