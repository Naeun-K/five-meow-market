// // // // import { useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import BasicPage from "../../basicPage/BasicPage";
// // // // import Loader from "../../../components/loader/Loader";
// // // // import ProductCard from "../../../components/product/ProductCard/ProductCard";
// // // // import * as productService from "../../../services/productServices";
// // // // import {
// // // //   CardContainer,
// // // //   PageTitleContainer,
// // // //   ProductPage,
// // // // } from "../productListPage/ProductListStyle";
// // // // import useToast from "../../../hooks/useToast";

// // // // export default function BestProductList() {
// // // //   const { showToast } = useToast();
// // // //   const [wishlist, setWishlist] = useState([]);
// // // //   const [products, setProducts] = useState([]);
// // // //   const [isLoading, setIsLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     const fetchBestProducts = async () => {
// // // //       try {
// // // //         setIsLoading(true);

// // // //         const result = await productService.getBestProducts();

// // // //         if (!result.success) {
// // // //           throw new Error("베스트 상품 조회에 실패했습니다.");
// // // //         }

// // // //         setProducts(result.products);
// // // //       } catch (error) {
// // // //         console.error("베스트 상품 조회 실패:", error);

// // // //         showToast(error.message || "베스트 상품 조회에 실패했습니다.", false);

// // // //         setProducts([]);
// // // //       } finally {
// // // //         setIsLoading(false);
// // // //       }
// // // //     };

// // // //     fetchBestProducts();
// // // //   }, [showToast]);

// // // //   const handleWishlistChange = (productId, isLiked) => {
// // // //     if (isLiked) {
// // // //       return;
// // // //     }
// // // //     setWishlist((prev) => prev.filter((item) => item.productId !== productId));

// // // //     // setTotalCount((prev) => Math.max(prev - 1, 0));
// // // //   };

// // // //   if (isLoading) {
// // // //     return (
// // // //       <BasicPage>
// // // //         <Loader />
// // // //       </BasicPage>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <BasicPage>
// // // //       <ProductPage>
// // // //         <PageTitleContainer>
// // // //           <h2>베스트 상품</h2>

// // // //           <p>총 {products.length}개의 상품</p>
// // // //         </PageTitleContainer>

// // // //         <CardContainer>
// // // //           {products.map((product) => (
// // // //             <Link
// // // //               key={product.productId}
// // // //               to={`/products/${product.productId}`}
// // // //               className="product-link"
// // // //             >
// // // //               <div className="card-wrapper">
// // // //                 <ProductCard
// // // //                   productId={product.productId}
// // // //                   image={product.thumbnail}
// // // //                   name={product.name}
// // // //                   badge="bestOrange"
// // // //                   showHeart
// // // //                   isLiked={product.isLiked}
// // // //                   onWishlistChange={handleWishlistChange}
// // // //                 />

// // // //                 <p>{product.name}</p>

// // // //                 <strong>{product.price.toLocaleString()}원</strong>
// // // //               </div>
// // // //             </Link>
// // // //           ))}
// // // //         </CardContainer>
// // // //       </ProductPage>
// // // //     </BasicPage>
// // // //   );
// // // // }

// // // import { useEffect, useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import BasicPage from "../../basicPage/BasicPage";
// // // import Loader from "../../../components/loader/Loader";
// // // import ProductCard from "../../../components/product/ProductCard/ProductCard";
// // // import * as productService from "../../../services/productServices";
// // // import {
// // //   CardContainer,
// // //   PageTitleContainer,
// // //   ProductPage,
// // // } from "../productListPage/ProductListStyle";
// // // import useToast from "../../../hooks/useToast";

// // // export default function BestProductList() {
// // //   const { showToast } = useToast();

// // //   const [wishlist, setWishlist] = useState([]);
// // //   const [products, setProducts] = useState([]);
// // //   const [isLoading, setIsLoading] = useState(true);

// // //   useEffect(() => {
// // //     const fetchBestProducts = async () => {
// // //       try {
// // //         setIsLoading(true);

// // //         const result = await productService.getBestProducts();

// // //         if (!result.success) {
// // //           throw new Error("베스트 상품 조회에 실패했습니다.");
// // //         }

// // //         const bestProducts = result.products || [];

// // //         setProducts(bestProducts);

// // //         // 베스트 상품 중 이미 찜한 상품의 productId 저장
// // //         const likedProductIds = bestProducts
// // //           .filter((product) => product.isLiked)
// // //           .map((product) => product.productId);

// // //         setWishlist(likedProductIds);
// // //       } catch (error) {
// // //         console.error("베스트 상품 조회 실패:", error);

// // //         showToast(error.message || "베스트 상품 조회에 실패했습니다.", false);

// // //         setProducts([]);
// // //         setWishlist([]);
// // //       } finally {
// // //         setIsLoading(false);
// // //       }
// // //     };

// // //     fetchBestProducts();
// // //   }, [showToast]);

// // //   const handleWishlistChange = (productId, isLiked) => {
// // //     setWishlist((prev) => {
// // //       // 찜 등록
// // //       if (isLiked) {
// // //         // 이미 들어있으면 중복 추가하지 않음
// // //         if (prev.includes(productId)) {
// // //           return prev;
// // //         }

// // //         return [...prev, productId];
// // //       }

// // //       // 찜 해제
// // //       return prev.filter((id) => id !== productId);
// // //     });
// // //   };

// // //   if (isLoading) {
// // //     return (
// // //       <BasicPage>
// // //         <Loader />
// // //       </BasicPage>
// // //     );
// // //   }

// // //   return (
// // //     <BasicPage>
// // //       <ProductPage>
// // //         <PageTitleContainer>
// // //           <h2>베스트 상품</h2>

// // //           <p>총 {products.length}개의 상품</p>
// // //         </PageTitleContainer>

// // //         <CardContainer>
// // //           {products.map((product) => {
// // //             const isLiked = wishlist.includes(product.productId);

// // //             return (
// // //               <Link
// // //                 key={product.productId}
// // //                 to={`/products/${product.productId}`}
// // //                 className="product-link"
// // //               >
// // //                 <div className="card-wrapper">
// // //                   <ProductCard
// // //                     productId={product.productId}
// // //                     image={product.thumbnail}
// // //                     name={product.name}
// // //                     badge="bestOrange"
// // //                     showHeart
// // //                     isLiked={isLiked}
// // //                     onWishlistChange={handleWishlistChange}
// // //                   />

// // //                   <p>{product.name}</p>

// // //                   <strong>{product.price.toLocaleString()}원</strong>
// // //                 </div>
// // //               </Link>
// // //             );
// // //           })}
// // //         </CardContainer>
// // //       </ProductPage>
// // //     </BasicPage>
// // //   );
// // // }

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

// // export default function BestProductList() {
// //   const { showToast } = useToast();

// //   const [products, setProducts] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchBestProducts = async () => {
// //       try {
// //         setIsLoading(true);

// //         const result = await productService.getBestProducts();

// //         if (!result.success) {
// //           throw new Error("베스트 상품 조회에 실패했습니다.");
// //         }

// //         setProducts(result.products || []);
// //       } catch (error) {
// //         console.error("베스트 상품 조회 실패:", error);

// //         showToast(error.message || "베스트 상품 조회에 실패했습니다.", false);

// //         setProducts([]);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchBestProducts();
// //   }, [showToast]);

// //   const handleWishlistChange = (productId, isLiked) => {
// //     setProducts((prev) =>
// //       prev.map((product) =>
// //         product.productId === productId
// //           ? {
// //               ...product,
// //               isLiked,
// //             }
// //           : product,
// //       ),
// //     );
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
// //           <h2>베스트 상품</h2>

// //           <p>총 {products.length}개의 상품</p>
// //         </PageTitleContainer>

// //         <CardContainer>
// //           {products.map((product) => (
// //             <Link
// //               key={product.productId}
// //               to={`/products/${product.productId}`}
// //               className="product-link"
// //             >
// //               <div className="card-wrapper">
// //                 <ProductCard
// //                   productId={product.productId}
// //                   image={product.thumbnail}
// //                   name={product.name}
// //                   badge="bestOrange"
// //                   showHeart
// //                   isLiked={Boolean(product.isLiked)}
// //                   onWishlistChange={handleWishlistChange}
// //                 />

// //                 <p>{product.name}</p>

// //                 <strong>{product.price.toLocaleString()}원</strong>
// //               </div>
// //             </Link>
// //           ))}
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

// export default function BestProductList() {
//   const { showToast } = useToast();
//   const { accessToken, isAuthLoading } = useAuth();

//   const [products, setProducts] = useState([]);
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

//         // 비로그인 상태
//         if (!accessToken) {
//           const productsWithWishlist = bestProducts.map((product) => ({
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

//         // 베스트 상품과 찜 목록 비교
//         const productsWithWishlist = bestProducts.map((product) => ({
//           ...product,
//           isLiked: wishlistProductIds.has(product.productId),
//         }));

//         setProducts(productsWithWishlist);
//       } catch (error) {
//         console.error("베스트 상품 조회 실패:", error);

//         showToast(error.message || "베스트 상품 조회에 실패했습니다.", false);

//         setProducts([]);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchBestProducts();
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
//           <h2>베스트 상품</h2>

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
//                   badge="bestOrange"
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
} from "../productListPage/ProductListStyle";
import useToast from "../../../hooks/useToast";
import useAuth from "../../../hooks/useAuth";

export default function NewProductList() {
  const { showToast } = useToast();
  const { accessToken, isAuthLoading } = useAuth();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthLoading) {
      return;
    }

    const fetchNewProducts = async () => {
      try {
        setIsLoading(true);

        // 신상품 조회
        const productResult = await productService.getNewProducts();

        if (!productResult.success) {
          throw new Error("신상품 조회에 실패했습니다.");
        }

        const newProducts = productResult.products || [];

        // 비로그인 상태
        if (!accessToken) {
          const productsWithWishlist = newProducts.map((product) => ({
            ...product,
            isLiked: false,
          }));

          setProducts(productsWithWishlist);

          return;
        }

        // 로그인 상태 - 찜 목록 조회
        const wishlistResult = await wishlistService.getWishlist(
          {
            page: 1,
            limit: 100,
          },
          accessToken,
        );

        if (!wishlistResult.success) {
          throw new Error("찜한 상품 조회에 실패했습니다.");
        }

        const wishlistProducts = wishlistResult.products || [];

        // 찜 목록의 productId만 추출
        const wishlistProductIds = new Set(
          wishlistProducts.map((item) => item.productId),
        );

        // 신상품과 찜 목록 비교
        const productsWithWishlist = newProducts.map((product) => ({
          ...product,
          isLiked: wishlistProductIds.has(product.productId),
        }));

        setProducts(productsWithWishlist);
      } catch (error) {
        console.error("신상품 조회 실패:", error);

        showToast(error.message || "신상품 조회에 실패했습니다.", false);

        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewProducts();
  }, [accessToken, isAuthLoading, showToast]);

  const handleWishlistChange = (productId, isLiked) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.productId === productId
          ? {
              ...product,
              isLiked,
            }
          : product,
      ),
    );
  };

  if (isAuthLoading || isLoading) {
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
                  isLiked={product.isLiked}
                  onWishlistChange={handleWishlistChange}
                />

                <p>{product.name}</p>

                <strong>{product.price.toLocaleString()}원</strong>
              </div>
            </Link>
          ))}
        </CardContainer>
      </ProductPage>
    </BasicPage>
  );
}
