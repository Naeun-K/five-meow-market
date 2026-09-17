// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import { getRelatedProducts } from "../../../services/productServices";

// import {
//   RelatedProductList,
//   RelatedProductCard,
//   ProductImageWrapper,
//   CartButton,
//   BuyButton,
// } from "./RelatedProductStyle";

// import useToast from "../../../hooks/useToast";
// import ProductCard from "../ProductCard/ProductCard";
// import Loader from "../../loader/Loader";

// export default function RelatedProducts({ productId, onAddCart, onBuyNow }) {
//   const navigate = useNavigate();
//   const { showToast } = useToast();

//   const [isLoading, setIsLoading] = useState(true);
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   useEffect(() => {
//     if (!productId) {
//       return;
//     }

//     const fetchRelatedProducts = async () => {
//       try {
//         setIsLoading(true);

//         const result = await getRelatedProducts(productId);

//         if (!result.success) {
//           throw new Error(result.message || "관련 상품 조회에 실패했습니다.");
//         }

//         setRelatedProducts(result.products);
//       } catch (error) {
//         console.error("관련 상품 조회 실패:", error);

//         setRelatedProducts([]);

//         showToast(error.message || "관련 상품 조회에 실패했습니다.", false);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchRelatedProducts();
//   }, [productId, showToast]);

//   const handleProductClick = (relatedProductId) => {
//     navigate(`/products/${relatedProductId}`);
//   };

//   const handleAddCart = (event, product) => {
//     event.stopPropagation();

//     onAddCart?.(product);
//   };

//   const handleBuyNow = (event, product) => {
//     event.stopPropagation();

//     onBuyNow?.(product);
//   };

//   if (isLoading) {
//     return <Loader />;
//   }

//   if (relatedProducts.length === 0) {
//     return <p>현재 함께 추천할 상품을 준비하고 있습니다.</p>;
//   }

//   return (
//     <RelatedProductList>
//       {relatedProducts.map((product) => (
//         <RelatedProductCard
//           key={product.productId}
//           onClick={() => handleProductClick(product.productId)}
//         >
//           <ProductImageWrapper>
//             <ProductCard
//               image={product.thumbnail}
//               name={product.name}
//               badge=""
//               showHeart
//             />
//           </ProductImageWrapper>

//           <div className="product-info">
//             <p className="product-name">{product.name}</p>

//             <strong className="product-price">
//               {product.price.toLocaleString()}원
//             </strong>
//           </div>

//           <div className="button-wrapper">
//             <CartButton
//               type="button"
//               onClick={(event) => handleAddCart(event, product)}
//             >
//               장바구니 담기
//             </CartButton>

//             <BuyButton
//               type="button"
//               onClick={(event) => handleBuyNow(event, product)}
//             >
//               바로 구매하기
//             </BuyButton>
//           </div>
//         </RelatedProductCard>
//       ))}
//     </RelatedProductList>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  RelatedProductList,
  RelatedProductCard,
  ProductImageWrapper,
  CartButton,
  BuyButton,
} from "./RelatedProductStyle";

import useAuth from "../../../hooks/useAuth";
import useToast from "../../../hooks/useToast";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../../loader/Loader";
import { getRelatedProducts } from "../../../services/productServices";
import { addCartItem } from "../../../services/cartServices";
import { createCheckout } from "../../../services/checkOutServices";

export default function RelatedProducts({ productId }) {
  const navigate = useNavigate();

  const { accessToken, isLoggedIn } = useAuth();
  const { showToast } = useToast();

  const [isLoading, setIsLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const [addingCartProductId, setAddingCartProductId] = useState(null);
  const [buyingProductId, setBuyingProductId] = useState(null);

  useEffect(() => {
    if (!productId) {
      return;
    }

    let isMounted = true;

    const fetchRelatedProducts = async () => {
      try {
        setIsLoading(true);

        const result = await getRelatedProducts(productId);

        if (!result.success) {
          throw new Error(result.message || "관련 상품 조회에 실패했습니다.");
        }

        if (!isMounted) {
          return;
        }

        setRelatedProducts(result.products ?? []);
      } catch (error) {
        console.error("관련 상품 조회 실패:", error);

        if (!isMounted) {
          return;
        }

        setRelatedProducts([]);

        showToast(error.message || "관련 상품 조회에 실패했습니다.", false);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchRelatedProducts();

    return () => {
      isMounted = false;
    };
  }, [productId, showToast]);

  const handleProductClick = (relatedProductId) => {
    navigate(`/products/${relatedProductId}`);
  };

  /**
   * 장바구니 담기
   *
   * POST /cart/items
   *
   * {
   *   productId,
   *   quantity: 1
   * }
   */
  const handleAddCart = async (event, product) => {
    event.stopPropagation();

    if (!isLoggedIn || !accessToken) {
      showToast("로그인 후 장바구니를 이용해주세요.", false);

      navigate("/login");

      return;
    }

    if (addingCartProductId === product.productId) {
      return;
    }

    try {
      setAddingCartProductId(product.productId);

      const result = await addCartItem(product.productId, 1, accessToken);

      if (!result.success) {
        throw new Error(result.message || "장바구니 담기에 실패했습니다.");
      }

      showToast("장바구니에 상품을 담았습니다.", true);
    } catch (error) {
      console.error("장바구니 상품 추가 실패:", error);

      showToast(error.message || "장바구니 담기에 실패했습니다.", false);
    } finally {
      setAddingCartProductId(null);
    }
  };

  /**
   * 바로 구매하기
   *
   * POST /checkout
   *
   * {
   *   items: [
   *     {
   *       productId,
   *       quantity: 1
   *     }
   *   ]
   * }
   *
   * 성공:
   * checkoutId를 가지고 주문/결제 페이지로 이동
   */
  const handleBuyNow = async (event, product) => {
    event.stopPropagation();

    if (!isLoggedIn || !accessToken) {
      showToast("로그인 후 구매할 수 있습니다.", false);

      navigate("/login");

      return;
    }

    if (buyingProductId === product.productId) {
      return;
    }

    try {
      setBuyingProductId(product.productId);

      const result = await createCheckout(
        {
          items: [
            {
              productId: product.productId,
              quantity: 1,
            },
          ],
        },
        accessToken,
      );

      if (!result.success || !result.checkoutId) {
        throw new Error(result.message || "구매 준비에 실패했습니다.");
      }

      navigate(`/checkout?checkoutId=${encodeURIComponent(result.checkoutId)}`);
    } catch (error) {
      console.error("바로구매 Checkout 생성 실패:", error);

      showToast(error.message || "구매 준비에 실패했습니다.", false);
    } finally {
      setBuyingProductId(null);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (relatedProducts.length === 0) {
    return <p>현재 함께 추천할 상품을 준비하고 있습니다.</p>;
  }

  return (
    <RelatedProductList>
      {relatedProducts.map((product) => {
        const isAddingCart = addingCartProductId === product.productId;

        const isBuying = buyingProductId === product.productId;

        return (
          <RelatedProductCard
            key={product.productId}
            onClick={() => handleProductClick(product.productId)}
          >
            <ProductImageWrapper>
              <ProductCard
                image={product.thumbnail}
                name={product.name}
                badge=""
                showHeart={false}
              />
            </ProductImageWrapper>

            <div className="product-info">
              <p className="product-name">{product.name}</p>

              <strong className="product-price">
                {Number(product.price ?? 0).toLocaleString()}원
              </strong>
            </div>

            <div className="button-wrapper">
              <CartButton
                type="button"
                disabled={isAddingCart || isBuying}
                onClick={(event) => handleAddCart(event, product)}
              >
                {isAddingCart ? "담는 중..." : "장바구니 담기"}
              </CartButton>

              <BuyButton
                type="button"
                disabled={isBuying || isAddingCart}
                onClick={(event) => handleBuyNow(event, product)}
              >
                {isBuying ? "구매 준비 중..." : "바로 구매하기"}
              </BuyButton>
            </div>
          </RelatedProductCard>
        );
      })}
    </RelatedProductList>
  );
}
