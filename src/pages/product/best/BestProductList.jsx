// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import BasicPage from "../../basicPage/BasicPage";
// import Loader from "../../../components/loader/Loader";
// import ProductCard from "../../../components/product/ProductCard/ProductCard";
// import * as productService from "../../../services/productServices";
// import * as wishlistService from "../../../services/wishlistServices";
// import {
//   CardContainer,
//   PageTitleContainer,
//   ProductPage,
// } from "../productListPage/ProductListStyle";
// import useToast from "../../../hooks/useToast";
// import useAuth from "../../../hooks/useAuth";

// export default function BestProductList() {
//   const { showToast } = useToast();
//   const { accessToken, isAuthLoading } = useAuth();

//   const [products, setProducts] = useState([]);
//   const [wishlist, setWishlist] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (isAuthLoading) {
//       return;
//     }

//     const fetchBestProducts = async () => {
//       try {
//         setIsLoading(true);

//         // 베스트 상품 조회
//         const productResult = await productService.getBestProducts();

//         if (!productResult.success) {
//           throw new Error("베스트 상품 조회에 실패했습니다.");
//         }

//         const bestProducts = productResult.products || [];

//         setProducts(bestProducts);

//         // 비로그인 상태
//         if (!accessToken) {
//           setWishlist([]);
//           return;
//         }

//         // 로그인 상태 - 기존 찜 목록 조회
//         const wishlistResult = await wishlistService.getWishlist(
//           {
//             page: 1,
//             limit: 100,
//           },
//           accessToken,
//         );

//         if (!wishlistResult.success) {
//           throw new Error("찜한 상품 조회에 실패했습니다.");
//         }

//         const wishlistProducts = wishlistResult.products || [];

//         // 기존에 찜한 상품의 productId만 저장
//         const wishlistProductIds = wishlistProducts
//           .map((item) => item.productId)
//           .filter(Boolean);

//         setWishlist(wishlistProductIds);
//       } catch (error) {
//         console.error("베스트 상품 조회 실패:", error);

//         showToast(error.message || "베스트 상품 조회에 실패했습니다.", false);

//         setProducts([]);
//         setWishlist([]);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchBestProducts();
//   }, [accessToken, isAuthLoading, showToast]);

//   // ProductCard에서 찜 등록/해제 API 성공 후 호출
//   const handleWishlistChange = (productId, isLiked) => {
//     setWishlist((prev) => {
//       // 찜 등록 성공
//       if (isLiked) {
//         // 이미 등록되어 있으면 중복 추가하지 않음
//         if (prev.includes(productId)) {
//           return prev;
//         }

//         return [...prev, productId];
//       }

//       // 찜 해제 성공
//       return prev.filter((id) => id !== productId);
//     });
//   };

//   if (isAuthLoading || isLoading) {
//     return (
//       <BasicPage>
//         <Loader />
//       </BasicPage>
//     );
//   }

//   return (
//     <BasicPage>
//       <ProductPage>
//         <PageTitleContainer>
//           <h2>베스트 상품</h2>

//           <p>총 {products.length}개의 상품</p>
//         </PageTitleContainer>

//         <CardContainer>
//           {products.map((product) => {
//             // 현재 상품이 찜 목록에 있는지 확인
//             const isLiked = wishlist.includes(product.productId);

//             return (
//               <Link
//                 key={product.productId}
//                 to={`/products/${product.productId}`}
//                 className="product-link"
//               >
//                 <div className="card-wrapper">
//                   <ProductCard
//                     productId={product.productId}
//                     image={product.thumbnail}
//                     name={product.name}
//                     badge="bestOrange"
//                     showHeart
//                     isLiked={isLiked}
//                     onWishlistChange={handleWishlistChange}
//                   />

//                   <p>{product.name}</p>

//                   <strong>{product.price.toLocaleString()}원</strong>
//                 </div>
//               </Link>
//             );
//           })}
//         </CardContainer>
//       </ProductPage>
//     </BasicPage>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BasicPage from "../../basicPage/BasicPage";
import Loader from "../../../components/loader/Loader";
import ProductCard from "../../../components/product/ProductCard/ProductCard";

import * as productService from "../../../services/productServices";
import * as wishlistService from "../../../services/wishlistServices";

import {
  CardContainer,
  PageTitleContainer,
  ProductPage,
} from "../productListPage/ProductListStyle";

import useToast from "../../../hooks/useToast";
import useAuth from "../../../hooks/useAuth";

export default function BestProductList() {
  const { showToast } = useToast();

  const { accessToken, isLoggedIn, isAuthLoading } = useAuth();

  const [products, setProducts] = useState([]);

  const [wishlist, setWishlist] = useState([]);

  const [loadedRequestKey, setLoadedRequestKey] = useState("");

  /*
   * 로그인 상태가 바뀌면 새로운 요청으로 판단한다.
   *
   * 별도의 isLoading state를 effect 시작 시
   * setState로 변경하지 않기 때문에
   * effect 내부의 동기 setState 경고도 피할 수 있다.
   */
  const currentRequestKey = isAuthLoading
    ? ""
    : accessToken
      ? `best:${accessToken}`
      : "best:guest";

  const isLoading =
    isAuthLoading ||
    !currentRequestKey ||
    loadedRequestKey !== currentRequestKey;

  useEffect(() => {
    if (isAuthLoading) {
      return undefined;
    }

    let isCancelled = false;

    const requestKey = accessToken ? `best:${accessToken}` : "best:guest";

    const fetchBestProducts = async () => {
      try {
        // =========================
        // 베스트 상품 조회
        // =========================

        const productResult = await productService.getBestProducts();

        if (!productResult.success) {
          throw new Error(
            productResult.message || "베스트 상품 조회에 실패했습니다.",
          );
        }

        if (isCancelled) {
          return;
        }

        const bestProducts = productResult.products ?? [];

        /*
         * Product API에서 isLiked가 제공되는 경우
         * 우선 해당 값도 초기 찜 상태로 사용한다.
         */
        const productLikedIds = bestProducts
          .filter((product) => product.isLiked)
          .map((product) => product.productId)
          .filter(Boolean);

        // =========================
        // 비로그인
        // =========================

        if (!isLoggedIn || !accessToken) {
          setProducts(bestProducts);

          /*
           * 비로그인 사용자는 찜 상태를 표시하지 않는다.
           */
          setWishlist([]);

          setLoadedRequestKey(requestKey);

          return;
        }

        // =========================
        // 로그인
        // 기존 찜 목록 조회
        // =========================

        const wishlistResult = await wishlistService.getWishlist(
          {
            page: 1,
            limit: 100,
          },
          accessToken,
        );

        if (!wishlistResult.success) {
          throw new Error(
            wishlistResult.message || "찜한 상품 조회에 실패했습니다.",
          );
        }

        if (isCancelled) {
          return;
        }

        /*
         * wishlistService의 반환 구조에 맞게
         * wishlistItems를 우선 사용한다.
         *
         * 기존 Service에서 products라는 이름을
         * 사용하고 있는 경우도 대응한다.
         */
        const wishlistProducts =
          wishlistResult.wishlistItems ?? wishlistResult.products ?? [];

        /*
         * Wishlist 응답 구조가
         *
         * {
         *   productId,
         *   ...
         * }
         *
         * 또는
         *
         * {
         *   product: {
         *     productId
         *   }
         * }
         *
         * 형태인 경우 모두 대응한다.
         */
        const wishlistProductIds = wishlistProducts
          .map((item) => item.productId ?? item.product?.productId)
          .filter(Boolean);

        /*
         * Product API의 isLiked와
         * Wishlist API 결과를 합친다.
         *
         * Set을 사용해서 중복 productId를 제거한다.
         */
        const likedProductIds = [
          ...new Set([...productLikedIds, ...wishlistProductIds]),
        ];

        setProducts(bestProducts);

        setWishlist(likedProductIds);

        setLoadedRequestKey(requestKey);
      } catch (error) {
        if (isCancelled) {
          return;
        }

        console.error("베스트 상품 조회 실패:", error);

        showToast(error.message || "베스트 상품 조회에 실패했습니다.", false);

        setProducts([]);

        setWishlist([]);

        setLoadedRequestKey(requestKey);
      }
    };

    fetchBestProducts();

    return () => {
      isCancelled = true;
    };
  }, [accessToken, isLoggedIn, isAuthLoading, showToast]);

  /*
   * ProductCard에서
   *
   * 찜 등록 성공:
   * onWishlistChange(productId, true)
   *
   * 찜 해제 성공:
   * onWishlistChange(productId, false)
   *
   * 로 전달받는다.
   */
  const handleWishlistChange = (productId, isLiked) => {
    if (!productId) {
      return;
    }

    setWishlist((previousWishlist) => {
      // =========================
      // 찜 등록
      // =========================

      if (isLiked) {
        /*
         * 이미 찜 상태라면
         * 중복으로 productId를 추가하지 않는다.
         */
        if (previousWishlist.includes(productId)) {
          return previousWishlist;
        }

        return [...previousWishlist, productId];
      }

      // =========================
      // 찜 해제
      // =========================

      return previousWishlist.filter((id) => id !== productId);
    });

    /*
     * products의 isLiked도 같이 동기화한다.
     *
     * 이후 해당 products 데이터를 사용하는
     * 다른 로직에서도 최신 찜 상태를 확인할 수 있다.
     */
    setProducts((previousProducts) =>
      previousProducts.map((product) =>
        product.productId === productId
          ? {
              ...product,
              isLiked,
            }
          : product,
      ),
    );
  };

  if (isLoading) {
    return (
      <BasicPage>
        <Loader />
      </BasicPage>
    );
  }

  return (
    <BasicPage>
      <ProductPage>
        <PageTitleContainer>
          <h2>베스트 상품</h2>

          <p>총 {products.length}개의 상품</p>
        </PageTitleContainer>

        <CardContainer>
          {products.map((product) => {
            /*
             * 현재 상품이 찜 목록에 있으면
             * ProductCard에 true 전달
             */
            const isLiked = wishlist.includes(product.productId);

            return (
              <Link
                key={product.productId}
                to={`/products/${product.productId}`}
                className="product-link"
              >
                <div className="card-wrapper">
                  <ProductCard
                    productId={product.productId}
                    image={product.thumbnail}
                    name={product.name}
                    badge="bestOrange"
                    showHeart
                    isLiked={isLiked}
                    onWishlistChange={handleWishlistChange}
                  />

                  <p>{product.name}</p>

                  <strong>
                    {Number(product.price ?? 0).toLocaleString()}원
                  </strong>
                </div>
              </Link>
            );
          })}
        </CardContainer>
      </ProductPage>
    </BasicPage>
  );
}
