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
    console.count("🔥 Cart useEffect 실행");

    console.log("Cart effect dependencies:", {
      isLoggedIn,
      accessToken,
      showToast,
    });

    if (isAuthLoading || !isLoggedIn || !accessToken) {
      return;
    }

    const fetchCart = async () => {
      console.count("🌐 GET /cart 실제 호출");

      try {
        const result = await getCart(accessToken);

        console.log("✅ GET /cart 응답:", result);

        if (!result.success) {
          throw new Error(result.message || "장바구니 조회에 실패했습니다.");
        }

        const items = result.data?.cartItems ?? [];

        console.log("📦 cartItems:", items);

        setCartItems(items);

        setSelectedItems(items.map((item) => item.cartItemId));
      } catch (error) {
        console.error("❌ 장바구니 조회 실패:", error);

        showToast(error.message || "장바구니 조회에 실패했습니다.", false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCart();
  }, [isAuthLoading, isLoggedIn, accessToken, showToast]);

  // 체크박스
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

  // 수량 변경
  const handleQuantityChange = async (cartItemId, quantity) => {
    try {
      const result = await updateCartItem(cartItemId, quantity, accessToken);

      if (!result.success) {
        throw new Error(result.message || "상품 수량 변경에 실패했습니다.");
      }

      const updatedItem = result.data.cartItem;

      setCartItems((prev) =>
        prev.map((item) =>
          item.cartItemId === updatedItem.cartItemId
            ? {
                ...item,
                quantity: updatedItem.quantity,
              }
            : item,
        ),
      );
    } catch (error) {
      console.error("장바구니 수량 변경 실패:", error);

      showToast(error.message || "상품 수량 변경에 실패했습니다.", false);
    }
  };

  // 개별 상품 삭제
  const handleRemove = async (cartItemId) => {
    try {
      const result = await deleteCartItem(cartItemId, accessToken);

      if (!result.success) {
        throw new Error(result.message || "상품 삭제에 실패했습니다.");
      }

      const deletedCartItemId = result.data.deletedCartItemId;

      setCartItems((prev) =>
        prev.filter((item) => item.cartItemId !== deletedCartItemId),
      );

      setSelectedItems((prev) => prev.filter((id) => id !== deletedCartItemId));

      showToast("장바구니에서 상품을 삭제했습니다.", true);
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

  // 로그인한 상태에서 장바구니 조회 중
  if (isLoading) {
    return (
      <BasicPage>
        <Loader />
      </BasicPage>
    );
  }

  // 로그인했지만 장바구니가 비어있는 경우
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
