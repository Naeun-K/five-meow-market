// /** @jsxImportSource @emotion/react */

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import Header from "../../components/header/header";
// import Footer from "../../components/footer/Footer";
// import Loader from "../../components/loader/Loader";
// import ProductCard from "../../components/product/ProductCard/ProductCard";

// import useAuth from "../../hooks/useAuth";
// import useToast from "../../hooks/useToast";

// import * as wishlistService from "../../services/wishlistServices";

// import logoEat from "../../assets/logo-eat.webp";
// import logoClean from "../../assets/logo-clean.webp";
// import logoHigh from "../../assets/logo-high.webp";
// import logoPlay from "../../assets/logo-play.webp";
// import logoRest from "../../assets/logo-rest.webp";
// import wishlistImage from "../../assets/wish-logo.webp";

// import {
//   page,
//   pageHeader,
//   backButton,
//   wishlistCount,
//   wishlistGrid,
//   wishlistCard,
//   productInfo,
//   productName,
//   productDescription,
//   productPrice,
//   buttonWrapper,
//   cartButton,
//   buyButton,
//   emptyWrapper,
//   emptyText,
//   emptyButtonWrapper,
//   emptyMessageWrapper,
//   emptyWishlistImage,
//   emptyBrowseButton,
// } from "./WishlistPageStyle";

// function WishlistPage() {
//   const navigate = useNavigate();

//   const { accessToken, isLoggedIn, isAuthLoading } = useAuth();
//   const { showToast } = useToast();

//   const [wishlist, setWishlist] = useState([]);
//   const [totalCount, setTotalCount] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (isAuthLoading) {
//       return;
//     }

//     if (!isLoggedIn || !accessToken) {
//       // setIsLoading(false);
//       return;
//     }

//     const fetchWishlist = async () => {
//       try {
//         setIsLoading(true);

//         const result = await wishlistService.getWishlist(
//           {
//             page: 1,
//             limit: 10,
//           },
//           accessToken,
//         );

//         if (!result.success) {
//           throw new Error(result.message || "찜한 상품을 불러오지 못했습니다.");
//         }

//         setWishlist(result.products);

//         setTotalCount(result.pagination?.totalCount ?? 0);
//       } catch (error) {
//         console.error("찜한 상품 조회 실패:", error);

//         showToast(error.message || "찜한 상품을 불러오지 못했습니다.", false);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchWishlist();
//   }, [accessToken, isAuthLoading, isLoggedIn, showToast]);

//   const handleWishlistChange = (productId, isLiked) => {
//     if (isLiked) {
//       return;
//     }

//     setWishlist((prev) => prev.filter((item) => item.productId !== productId));

//     setTotalCount((prev) => Math.max(prev - 1, 0));
//   };

//   const handleProductClick = (productId) => {
//     navigate(`/products/${productId}`);
//   };

//   const handleAddCart = (item) => {
//     alert(`${item.name} 상품이 장바구니에 담겼습니다.`);
//   };

//   const handleBuy = (item) => {
//     alert(`${item.name} 상품을 구매합니다.`);
//   };

//   if (isAuthLoading || isLoading) {
//     return (
//       <>
//         <Header />

//         <main css={page}>
//           <Loader />
//         </main>

//         <Footer />
//       </>
//     );
//   }

//   return (
//     <>
//       <Header />

//       <main css={page}>
//         <div css={pageHeader}>
//           <button
//             type="button"
//             css={backButton}
//             onClick={() => navigate("/mypage")}
//           >
//             <span className="back-arrow">←</span> 마이페이지
//           </button>

//           <h1>찜한상품</h1>

//           <p css={wishlistCount}>
//             찜한 상품 <strong>{totalCount}</strong>개
//           </p>
//         </div>

//         {wishlist.length === 0 ? (
//           <div css={emptyWrapper}>
//             <div css={emptyMessageWrapper}>
//               <img
//                 src={wishlistImage}
//                 alt="찜한 상품이 없는 고양이"
//                 css={emptyWishlistImage}
//               />

//               <p css={emptyText}>찜한 상품이 아직 없어요.</p>

//               <p css={emptyText}>마음에 드는 상품을 찜해보세요!</p>
//             </div>

//             <div css={emptyButtonWrapper}>
//               <div className="hover-cats" aria-hidden="true">
//                 <img src={logoEat} alt="" />
//                 <img src={logoClean} alt="" />
//                 <img src={logoHigh} alt="" />
//                 <img src={logoPlay} alt="" />
//                 <img src={logoRest} alt="" />
//               </div>

//               <button
//                 type="button"
//                 css={[buyButton, emptyBrowseButton]}
//                 onClick={() => navigate("/products")}
//               >
//                 상품 둘러보기
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div css={wishlistGrid}>
//             {wishlist.map((item) => (
//               <article key={item.productId} css={wishlistCard}>
//                 <div onClick={() => handleProductClick(item.productId)}>
//                   <ProductCard
//                     productId={item.productId}
//                     image={item.thumbnail}
//                     name={item.name}
//                     badge=""
//                     showHeart={true}
//                     isLiked={item.isLiked}
//                     onWishlistChange={handleWishlistChange}
//                   />
//                 </div>

//                 <div css={productInfo}>
//                   <h2
//                     css={productName}
//                     onClick={() => handleProductClick(item.productId)}
//                   >
//                     {item.name}
//                   </h2>

//                   <p css={productDescription}>{item.description}</p>

//                   <strong css={productPrice}>
//                     {Number(item.price ?? 0).toLocaleString()}원
//                   </strong>

//                   <div css={buttonWrapper}>
//                     <button
//                       type="button"
//                       css={cartButton}
//                       onClick={() => handleAddCart(item)}
//                     >
//                       장바구니
//                     </button>

//                     <button
//                       type="button"
//                       css={buyButton}
//                       onClick={() => handleBuy(item)}
//                     >
//                       바로구매
//                     </button>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         )}
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default WishlistPage;

/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";
import ProductCard from "../../components/product/ProductCard/ProductCard";

import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";

import * as wishlistService from "../../services/wishlistServices";
import * as cartService from "../../services/cartServices";
import * as checkoutService from "../../services/checkOutServices";

import logoEat from "../../assets/logo-eat.webp";
import logoClean from "../../assets/logo-clean.webp";
import logoHigh from "../../assets/logo-high.webp";
import logoPlay from "../../assets/logo-play.webp";
import logoRest from "../../assets/logo-rest.webp";
import wishlistImage from "../../assets/wish-logo.webp";

import {
  page,
  pageHeader,
  backButton,
  wishlistCount,
  wishlistGrid,
  wishlistCard,
  productInfo,
  productName,
  productDescription,
  productPrice,
  buttonWrapper,
  cartButton,
  buyButton,
  emptyWrapper,
  emptyText,
  emptyButtonWrapper,
  emptyMessageWrapper,
  emptyWishlistImage,
  emptyBrowseButton,
} from "./WishlistPageStyle";

function WishlistPage() {
  const navigate = useNavigate();

  const { accessToken, isLoggedIn, isAuthLoading } = useAuth();

  const { showToast } = useToast();

  const [wishlist, setWishlist] = useState([]);

  const [totalCount, setTotalCount] = useState(0);

  /*
   * effect 안에서 로그인 여부에 따라
   * setIsLoading(false)를 직접 실행하지 않도록
   * 요청 완료 여부를 key로 관리한다.
   */
  const [loadedRequestKey, setLoadedRequestKey] = useState("");

  /*
   * 장바구니 버튼 중복 클릭 방지
   */
  const [addingCartProductId, setAddingCartProductId] = useState(null);

  /*
   * 바로구매 버튼 중복 클릭 방지
   */
  const [buyingProductId, setBuyingProductId] = useState(null);

  const currentRequestKey =
    !isAuthLoading && isLoggedIn && accessToken
      ? `wishlist:${accessToken}`
      : "";

  const isLoading =
    isAuthLoading ||
    (Boolean(currentRequestKey) && loadedRequestKey !== currentRequestKey);

  // =========================
  // 찜 목록 조회
  // =========================

  useEffect(() => {
    if (isAuthLoading) {
      return undefined;
    }

    /*
     * 비로그인 상태에서는 API를 호출하지 않는다.
     */
    if (!isLoggedIn || !accessToken) {
      return undefined;
    }

    let isCancelled = false;

    const requestKey = `wishlist:${accessToken}`;

    const fetchWishlist = async () => {
      try {
        const result = await wishlistService.getWishlist(
          {
            page: 1,
            limit: 100,
          },
          accessToken,
        );

        if (isCancelled) {
          return;
        }

        if (!result.success) {
          throw new Error(result.message || "찜한 상품을 불러오지 못했습니다.");
        }

        /*
         * 현재 Service의 products 반환 구조를
         * 우선 사용한다.
         *
         * wishlistItems 형태로 정규화되어 있는
         * 경우도 대응한다.
         */
        const wishlistProducts = result.products ?? result.wishlistItems ?? [];

        /*
         * 이 페이지에 조회되는 상품은
         * Wishlist API에서 가져온 상품이므로
         * 모두 찜 상태다.
         *
         * API의 isLiked 값이 누락되어 있더라도
         * 꽉 찬 하트로 표시한다.
         */
        const productsWithLikedState = wishlistProducts.map((item) => ({
          ...item,

          productId: item.productId ?? item.product?.productId,

          name: item.name ?? item.product?.name ?? "",

          description: item.description ?? item.product?.description ?? "",

          thumbnail: item.thumbnail ?? item.product?.thumbnail ?? "",

          price: item.price ?? item.product?.price ?? 0,

          isLiked: true,
        }));

        setWishlist(productsWithLikedState);

        setTotalCount(
          result.pagination?.totalCount ?? productsWithLikedState.length,
        );

        setLoadedRequestKey(requestKey);
      } catch (error) {
        if (isCancelled) {
          return;
        }

        console.error("찜한 상품 조회 실패:", error);

        showToast(error.message || "찜한 상품을 불러오지 못했습니다.", false);

        setWishlist([]);

        setTotalCount(0);

        setLoadedRequestKey(requestKey);
      }
    };

    fetchWishlist();

    return () => {
      isCancelled = true;
    };
  }, [accessToken, isAuthLoading, isLoggedIn, showToast]);

  // =========================
  // 찜 상태 변경
  // =========================

  const handleWishlistChange = (productId, isLiked) => {
    /*
     * WishlistPage에서는 이미 찜한 상품만
     * 표시되기 때문에 true가 전달된 경우에는
     * 목록을 변경할 필요가 없다.
     */
    if (isLiked) {
      return;
    }

    /*
     * ProductCard에서 찜 해제 API가
     * 성공한 이후 false가 전달되면
     * 화면에서 즉시 제거한다.
     */
    setWishlist((previousWishlist) =>
      previousWishlist.filter((item) => item.productId !== productId),
    );

    setTotalCount((previousCount) => Math.max(previousCount - 1, 0));
  };

  // =========================
  // 상품 상세 이동
  // =========================

  const handleProductClick = (productId) => {
    if (!productId) {
      return;
    }

    navigate(`/products/${productId}`);
  };

  // =========================
  // 장바구니 담기
  // =========================

  const handleAddCart = async (item) => {
    if (!isLoggedIn || !accessToken) {
      showToast("로그인 후 장바구니를 이용해주세요.", false);

      navigate("/login");

      return;
    }

    if (!item?.productId) {
      showToast("상품 정보를 확인할 수 없습니다.", false);

      return;
    }

    /*
     * 같은 상품의 장바구니 버튼을
     * 빠르게 여러 번 누르는 것을 방지한다.
     */
    if (addingCartProductId === item.productId) {
      return;
    }

    try {
      setAddingCartProductId(item.productId);

      /*
       * 찜한 상품 페이지에서는
       * 별도 수량 선택 UI가 없으므로
       * 기본 수량 1개를 장바구니에 담는다.
       */
      const result = await cartService.addCartItem(
        item.productId,
        1,
        accessToken,
      );

      if (!result.success) {
        throw new Error(result.message || "장바구니 담기에 실패했습니다.");
      }

      /*
       * 장바구니에 담더라도
       * 찜 목록에서는 제거하지 않는다.
       */
      showToast(result.message || "장바구니에 상품을 담았습니다.", true);
    } catch (error) {
      console.error("장바구니 담기 실패:", error);

      showToast(error.message || "장바구니 담기에 실패했습니다.", false);
    } finally {
      setAddingCartProductId(null);
    }
  };

  // =========================
  // 바로구매
  // =========================

  const handleBuy = async (item) => {
    if (!isLoggedIn || !accessToken) {
      showToast("로그인 후 구매해주세요.", false);

      navigate("/login");

      return;
    }

    if (!item?.productId) {
      showToast("상품 정보를 확인할 수 없습니다.", false);

      return;
    }

    /*
     * 같은 상품에 대한 Checkout이
     * 여러 번 생성되는 것을 방지한다.
     */
    if (buyingProductId === item.productId) {
      return;
    }

    try {
      setBuyingProductId(item.productId);

      /*
       * 바로구매는 장바구니를 거치지 않는다.
       *
       * Checkout API의 직접구매 형식:
       *
       * {
       *   items: [
       *     {
       *       productId,
       *       quantity
       *     }
       *   ]
       * }
       */
      const result = await checkoutService.createCheckout(
        {
          items: [
            {
              productId: item.productId,

              quantity: 1,
            },
          ],
        },
        accessToken,
      );

      if (!result.success) {
        throw new Error(result.message || "결제 준비에 실패했습니다.");
      }

      const checkoutId = result.checkoutId ?? result.data?.checkoutId;

      if (!checkoutId) {
        throw new Error("Checkout 정보를 확인할 수 없습니다.");
      }

      navigate(`/checkout?checkoutId=${encodeURIComponent(checkoutId)}`);
    } catch (error) {
      console.error("바로구매 처리 실패:", error);

      showToast(error.message || "결제 준비에 실패했습니다.", false);
    } finally {
      setBuyingProductId(null);
    }
  };

  // =========================
  // 로딩
  // =========================

  if (isLoading) {
    return (
      <>
        <Header />

        <main css={page}>
          <Loader />
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main css={page}>
        <div css={pageHeader}>
          <button
            type="button"
            css={backButton}
            onClick={() => navigate("/mypage")}
          >
            <span className="back-arrow">←</span> 마이페이지
          </button>

          <h1>찜한상품</h1>

          <p css={wishlistCount}>
            찜한 상품 <strong>{totalCount}</strong>개
          </p>
        </div>

        {wishlist.length === 0 ? (
          <div css={emptyWrapper}>
            <div css={emptyMessageWrapper}>
              <img
                src={wishlistImage}
                alt="찜한 상품이 없는 고양이"
                css={emptyWishlistImage}
              />

              <p css={emptyText}>찜한 상품이 아직 없어요.</p>

              <p css={emptyText}>마음에 드는 상품을 찜해보세요!</p>
            </div>

            <div css={emptyButtonWrapper}>
              <div className="hover-cats" aria-hidden="true">
                <img src={logoEat} alt="" />

                <img src={logoClean} alt="" />

                <img src={logoHigh} alt="" />

                <img src={logoPlay} alt="" />

                <img src={logoRest} alt="" />
              </div>

              <button
                type="button"
                css={[buyButton, emptyBrowseButton]}
                onClick={() => navigate("/products")}
              >
                상품 둘러보기
              </button>
            </div>
          </div>
        ) : (
          <div css={wishlistGrid}>
            {wishlist.map((item) => (
              <article key={item.productId} css={wishlistCard}>
                <div onClick={() => handleProductClick(item.productId)}>
                  <ProductCard
                    productId={item.productId}
                    image={item.thumbnail}
                    name={item.name}
                    badge=""
                    showHeart={true}
                    isLiked={item.isLiked}
                    onWishlistChange={handleWishlistChange}
                  />
                </div>

                <div css={productInfo}>
                  <h2
                    css={productName}
                    onClick={() => handleProductClick(item.productId)}
                  >
                    {item.name}
                  </h2>

                  <p css={productDescription}>{item.description}</p>

                  <strong css={productPrice}>
                    {Number(item.price ?? 0).toLocaleString()}원
                  </strong>

                  <div css={buttonWrapper}>
                    <button
                      type="button"
                      css={cartButton}
                      onClick={() => handleAddCart(item)}
                      disabled={addingCartProductId === item.productId}
                    >
                      {addingCartProductId === item.productId
                        ? "담는 중..."
                        : "장바구니"}
                    </button>

                    <button
                      type="button"
                      css={buyButton}
                      onClick={() => handleBuy(item)}
                      disabled={buyingProductId === item.productId}
                    >
                      {buyingProductId === item.productId
                        ? "처리 중..."
                        : "바로구매"}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default WishlistPage;
