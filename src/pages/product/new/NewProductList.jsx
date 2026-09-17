// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import BasicPage from "../../basicPage/BasicPage";
// // import Loader from "../../../components/loader/Loader";
// // import ProductCard from "../../../components/product/ProductCard/ProductCard";
// // import * as productService from "../../../services/productServices";
// // import {
// //   CardContainer,
// //   PageTitleContainer,
// //   ProductPage,
// // } from "../productListPage/ProductListStyle";
// // import useToast from "../../../hooks/useToast";

// // export default function NewProductList() {
// //   const { showToast } = useToast();
// //   const [wishlist, setWishlist] = useState([]);
// //   const [products, setProducts] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchNewProducts = async () => {
// //       try {
// //         setIsLoading(true);

// //         const result = await productService.getNewProducts();

// //         if (!result.success) {
// //           throw new Error("신상품 조회에 실패했습니다.");
// //         }

// //         setProducts(result.products);
// //       } catch (error) {
// //         console.error("신상품 조회 실패:", error);

// //         showToast(error.message || "신상품 조회에 실패했습니다.", false);

// //         setProducts([]);
// //         setWishlist([]);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchNewProducts();
// //   }, [showToast]);

// //   const handleWishlistChange = (productId, isLiked) => {
// //     setWishlist((prev) => {
// //       // 찜 등록
// //       if (isLiked) {
// //         // 이미 들어있으면 중복 추가하지 않음
// //         if (prev.includes(productId)) {
// //           return prev;
// //         }

// //         return [...prev, productId];
// //       }

// //       // 찜 해제
// //       return prev.filter((id) => id !== productId);
// //     });
// //   };

// //   if (isLoading) {
// //     return (
// //       <BasicPage>
// //         <Loader />
// //       </BasicPage>
// //     );
// //   }

// //   return (
// //     <BasicPage>
// //       <ProductPage>
// //         <PageTitleContainer>
// //           <h2>신상품</h2>

// //           <p>총 {products.length}개의 상품</p>
// //         </PageTitleContainer>

// //         <CardContainer>
// //           {products.map((product) => {
// //             const isLiked = wishlist.includes(product.productId);
// //             return (
// //               <Link
// //                 key={product.productId}
// //                 to={`/products/${product.productId}`}
// //                 className="product-link"
// //               >
// //                 <div className="card-wrapper">
// //                   <ProductCard
// //                     productId={product.productId}
// //                     image={product.thumbnail}
// //                     name={product.name}
// //                     badge="new"
// //                     showHeart
// //                     isLiked={isLiked}
// //                     onWishlistChange={handleWishlistChange}
// //                   />

// //                   <p>{product.name}</p>

// //                   <strong>{product.price.toLocaleString()}원</strong>
// //                 </div>
// //               </Link>
// //             );
// //           })}
// //         </CardContainer>
// //       </ProductPage>
// //     </BasicPage>
// //   );
// // }

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

// export default function NewProductList() {
//   const { showToast } = useToast();
//   const { accessToken, isAuthLoading } = useAuth();

//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (isAuthLoading) {
//       return;
//     }

//     const fetchNewProducts = async () => {
//       try {
//         setIsLoading(true);

//         // 신상품 조회
//         const productResult = await productService.getNewProducts();

//         if (!productResult.success) {
//           throw new Error("신상품 조회에 실패했습니다.");
//         }

//         const newProducts = productResult.products || [];

//         // 비로그인 상태
//         if (!accessToken) {
//           const productsWithWishlist = newProducts.map((product) => ({
//             ...product,
//             isLiked: false,
//           }));

//           setProducts(productsWithWishlist);

//           return;
//         }

//         // 로그인 상태 - 찜 목록 조회
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

//         // 찜 목록의 productId만 추출
//         const wishlistProductIds = new Set(
//           wishlistProducts.map((item) => item.productId),
//         );

//         // 신상품과 찜 목록 비교
//         const productsWithWishlist = newProducts.map((product) => ({
//           ...product,
//           isLiked: wishlistProductIds.has(product.productId),
//         }));

//         setProducts(productsWithWishlist);
//       } catch (error) {
//         console.error("신상품 조회 실패:", error);

//         showToast(error.message || "신상품 조회에 실패했습니다.", false);

//         setProducts([]);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchNewProducts();
//   }, [accessToken, isAuthLoading, showToast]);

//   const handleWishlistChange = (productId, isLiked) => {
//     setProducts((prev) =>
//       prev.map((product) =>
//         product.productId === productId
//           ? {
//               ...product,
//               isLiked,
//             }
//           : product,
//       ),
//     );
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
//           <h2>신상품</h2>

//           <p>총 {products.length}개의 상품</p>
//         </PageTitleContainer>

//         <CardContainer>
//           {products.map((product) => (
//             <Link
//               key={product.productId}
//               to={`/products/${product.productId}`}
//               className="product-link"
//             >
//               <div className="card-wrapper">
//                 <ProductCard
//                   productId={product.productId}
//                   image={product.thumbnail}
//                   name={product.name}
//                   badge="new"
//                   showHeart
//                   isLiked={product.isLiked}
//                   onWishlistChange={handleWishlistChange}
//                 />

//                 <p>{product.name}</p>

//                 <strong>{product.price.toLocaleString()}원</strong>
//               </div>
//             </Link>
//           ))}
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
  HomeButton,
} from "../productListPage/ProductListStyle";
import useToast from "../../../hooks/useToast";
import useAuth from "../../../hooks/useAuth";

export default function NewProductList() {
  const { showToast } = useToast();

  const { accessToken, isLoggedIn, isAuthLoading } = useAuth();

  const [products, setProducts] = useState([]);

  const [loadedRequestKey, setLoadedRequestKey] = useState("");

  /*
   * 현재 인증 상태에 해당하는 요청 식별값
   *
   * effect 내부에서 로딩 시작을 위해
   * setIsLoading(true)를 호출하지 않고
   * 요청 완료 여부를 기준으로 로딩 상태를 계산한다.
   */
  const currentRequestKey = isAuthLoading
    ? ""
    : accessToken
      ? `new:${accessToken}`
      : "new:guest";

  const isLoading =
    isAuthLoading ||
    !currentRequestKey ||
    loadedRequestKey !== currentRequestKey;

  useEffect(() => {
    if (isAuthLoading) {
      return undefined;
    }

    let isCancelled = false;

    const requestKey = accessToken ? `new:${accessToken}` : "new:guest";

    const fetchNewProducts = async () => {
      try {
        // =========================
        // 신상품 조회
        // =========================

        const productResult = await productService.getNewProducts();

        if (!productResult.success) {
          throw new Error(
            productResult.message || "신상품 조회에 실패했습니다.",
          );
        }

        if (isCancelled) {
          return;
        }

        const newProducts = productResult.products ?? [];

        // =========================
        // 비로그인 상태
        // =========================

        if (!isLoggedIn || !accessToken) {
          /*
           * 비로그인 상태에서는
           * 모든 상품의 하트를 빈 하트로 표시
           */
          const productsWithWishlist = newProducts.map((product) => ({
            ...product,
            isLiked: false,
          }));

          setProducts(productsWithWishlist);

          setLoadedRequestKey(requestKey);

          return;
        }

        // =========================
        // 로그인 상태
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
         * 현재 wishlistService 반환 구조를 우선 사용.
         *
         * 기존 서비스에서 products를 반환하는 경우:
         *
         * {
         *   success: true,
         *   products: [...]
         * }
         *
         * 서비스에서 wishlistItems로 정규화한 경우도
         * 같이 대응한다.
         */
        const wishlistProducts =
          wishlistResult.products ?? wishlistResult.wishlistItems ?? [];

        /*
         * Wishlist 상품의 productId만 Set으로 저장
         *
         * 응답이
         *
         * {
         *   productId: "cat-eat-001"
         * }
         *
         * 또는
         *
         * {
         *   product: {
         *     productId: "cat-eat-001"
         *   }
         * }
         *
         * 형태인 경우 모두 대응
         */
        const wishlistProductIds = new Set(
          wishlistProducts
            .map((item) => item.productId ?? item.product?.productId)
            .filter(Boolean),
        );

        /*
         * 신상품의 찜 상태 결정
         *
         * 1. Wishlist API에 productId가 존재하거나
         * 2. Product API에서 isLiked === true
         *
         * 둘 중 하나라도 만족하면
         * 꽉 찬 하트로 표시
         */
        const productsWithWishlist = newProducts.map((product) => ({
          ...product,

          isLiked:
            wishlistProductIds.has(product.productId) ||
            product.isLiked === true,
        }));

        setProducts(productsWithWishlist);

        setLoadedRequestKey(requestKey);
      } catch (error) {
        if (isCancelled) {
          return;
        }

        console.error("신상품 조회 실패:", error);

        showToast(error.message || "신상품 조회에 실패했습니다.", false);

        setProducts([]);

        setLoadedRequestKey(requestKey);
      }
    };

    fetchNewProducts();

    return () => {
      isCancelled = true;
    };
  }, [accessToken, isLoggedIn, isAuthLoading, showToast]);

  /*
   * ProductCard에서 찜 등록/해제 API가
   * 성공한 다음 호출되는 함수
   *
   * 찜 등록 성공
   * onWishlistChange(productId, true)
   *
   * 찜 해제 성공
   * onWishlistChange(productId, false)
   */
  const handleWishlistChange = (productId, isLiked) => {
    if (!productId) {
      return;
    }

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
        {/* 홈으로 이동 */}
        <HomeButton to="/">← 홈으로 이동</HomeButton>

        <PageTitleContainer>
          <h2>신상품</h2>

          <p>총 {products.length}개의 상품</p>
        </PageTitleContainer>

        <CardContainer>
          {products.map((product) => (
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
                  badge="new"
                  showHeart
                  isLiked={product.isLiked === true}
                  onWishlistChange={handleWishlistChange}
                />

                <p>{product.name}</p>

                <strong>{Number(product.price ?? 0).toLocaleString()}원</strong>
              </div>
            </Link>
          ))}
        </CardContainer>
      </ProductPage>
    </BasicPage>
  );
}
