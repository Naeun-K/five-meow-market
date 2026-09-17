// // // // // // import { useEffect, useState } from "react";
// // // // // // import Pagination from "../../../components/pagnation/Pagnation";
// // // // // // import BasicPage from "../../basicPage/BasicPage";
// // // // // // import Loader from "../../../components/loader/Loader";
// // // // // // import ProductCard from "../../../components/product/ProductCard/ProductCard";
// // // // // // import * as productService from "../../../services/productServices";
// // // // // // import {
// // // // // //   CardContainer,
// // // // // //   PageTitleContainer,
// // // // // //   ProductPage,
// // // // // // } from "./ProductListStyle";
// // // // // // import useToast from "../../../hooks/useToast";
// // // // // // import { useProductLimit } from "../../../hooks/useProductLimit";
// // // // // // import { Link, useSearchParams } from "react-router-dom";

// // // // // // const categoryNames = {
// // // // // //   "cat-eat": "먹묘",
// // // // // //   "cat-play": "놀묘",
// // // // // //   "cat-rest": "쉼묘",
// // // // // //   "cat-high": "높묘",
// // // // // //   "cat-clean": "깔묘",
// // // // // // };

// // // // // // export default function ProductList() {
// // // // // //   const { showToast } = useToast();
// // // // // //   const [searchParams, setSearchParams] = useSearchParams();
// // // // // //   const [products, setProducts] = useState([]);
// // // // // //   const [totalPages, setTotalPages] = useState(1);
// // // // // //   const [totalCount, setTotalCount] = useState(0);
// // // // // //   const [isLoading, setIsLoading] = useState(true);

// // // // // //   const limit = useProductLimit();
// // // // // //   const keyword = searchParams.get("keyword") || "";
// // // // // //   const category = searchParams.get("category") || "";

// // // // // //   const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);

// // // // // //   useEffect(() => {
// // // // // //     const fetchProducts = async () => {
// // // // // //       try {
// // // // // //         setIsLoading(true);

// // // // // //         const result = await productService.getProducts({
// // // // // //           page: currentPage,
// // // // // //           limit,
// // // // // //           category,
// // // // // //           keyword,
// // // // // //         });

// // // // // //         if (!result.success) {
// // // // // //           throw new Error("상품 목록 조회에 실패했습니다.");
// // // // // //         }

// // // // // //         setProducts(result.data?.products);
// // // // // //         setTotalPages(result.data?.pagination.totalPages);
// // // // // //         setTotalCount(result.data?.pagination.totalCount);
// // // // // //       } catch (error) {
// // // // // //         console.error("상품 목록 조회 실패:", error);
// // // // // //         showToast(error.message, false);
// // // // // //         setProducts([]);
// // // // // //       } finally {
// // // // // //         setIsLoading(false);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchProducts();
// // // // // //   }, [currentPage, limit, keyword, category, showToast]);

// // // // // //   if (isLoading) {
// // // // // //     return (
// // // // // //       <BasicPage>
// // // // // //         <Loader />
// // // // // //       </BasicPage>
// // // // // //     );
// // // // // //   }

// // // // // //   const pageTitle = category ? categoryNames[category] : "전체상품";

// // // // // //   const handlePageChange = (page) => {
// // // // // //     setSearchParams((prev) => {
// // // // // //       const params = new URLSearchParams(prev);

// // // // // //       params.set("page", String(page));

// // // // // //       return params;
// // // // // //     });
// // // // // //   };

// // // // // //   return (
// // // // // //     <BasicPage>
// // // // // //       <ProductPage>
// // // // // //         <PageTitleContainer>
// // // // // //           <h2>{pageTitle}</h2>

// // // // // //           <p>총 {totalCount}개의 상품</p>
// // // // // //         </PageTitleContainer>

// // // // // //         <CardContainer>
// // // // // //           {products.map((product) => (
// // // // // //             <Link
// // // // // //               key={product.productId}
// // // // // //               to={`/products/${product.productId}`}
// // // // // //               className="product-link"
// // // // // //             >
// // // // // //               <div className="card-wrapper">
// // // // // //                 <ProductCard
// // // // // //                   image={product.thumbnail}
// // // // // //                   name={product.name}
// // // // // //                   badge=""
// // // // // //                   showHeart
// // // // // //                 />

// // // // // //                 <p>{product.name}</p>

// // // // // //                 <strong>{product.price.toLocaleString()}원</strong>
// // // // // //               </div>
// // // // // //             </Link>
// // // // // //           ))}
// // // // // //         </CardContainer>
// // // // // //         <Pagination
// // // // // //           currentPage={currentPage}
// // // // // //           totalPages={totalPages}
// // // // // //           onPageChange={handlePageChange}
// // // // // //         />
// // // // // //       </ProductPage>
// // // // // //     </BasicPage>
// // // // // //   );
// // // // // // }

// // // // // import { useEffect, useState } from "react";
// // // // // import Pagination from "../../../components/pagnation/Pagnation";
// // // // // import BasicPage from "../../basicPage/BasicPage";
// // // // // import Loader from "../../../components/loader/Loader";
// // // // // import ProductCard from "../../../components/product/ProductCard/ProductCard";
// // // // // import * as productService from "../../../services/productServices";
// // // // // import {
// // // // //   CardContainer,
// // // // //   PageTitleContainer,
// // // // //   ProductPage,
// // // // // } from "./ProductListStyle";
// // // // // import useToast from "../../../hooks/useToast";
// // // // // import { useProductLimit } from "../../../hooks/useProductLimit";
// // // // // import { Link, useSearchParams } from "react-router-dom";

// // // // // const categoryNames = {
// // // // //   "cat-eat": "먹묘",
// // // // //   "cat-play": "놀묘",
// // // // //   "cat-rest": "쉼묘",
// // // // //   "cat-high": "높묘",
// // // // //   "cat-clean": "깔묘",
// // // // // };

// // // // // export default function ProductList() {
// // // // //   const { showToast } = useToast();

// // // // //   const [searchParams, setSearchParams] = useSearchParams();

// // // // //   const [products, setProducts] = useState([]);
// // // // //   const [totalPages, setTotalPages] = useState(1);
// // // // //   const [totalCount, setTotalCount] = useState(0);
// // // // //   const [isLoading, setIsLoading] = useState(true);

// // // // //   const limit = useProductLimit();

// // // // //   const keyword = searchParams.get("keyword") || "";
// // // // //   const categoryId = searchParams.get("categoryId") || "";

// // // // //   const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);

// // // // //   useEffect(() => {
// // // // //     const fetchProducts = async () => {
// // // // //       try {
// // // // //         setIsLoading(true);

// // // // //         const result = await productService.getProducts({
// // // // //           page: currentPage,
// // // // //           limit,
// // // // //           categoryId,
// // // // //           keyword,
// // // // //         });

// // // // //         if (!result.success) {
// // // // //           throw new Error("상품 목록 조회에 실패했습니다.");
// // // // //         }

// // // // //         setProducts(result.products);
// // // // //         setTotalPages(result.pagination.totalPages);
// // // // //         setTotalCount(result.pagination.totalCount);
// // // // //       } catch (error) {
// // // // //         console.error("상품 목록 조회 실패:", error);

// // // // //         showToast(error.message || "상품 목록 조회에 실패했습니다.", false);

// // // // //         setProducts([]);
// // // // //       } finally {
// // // // //         setIsLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchProducts();
// // // // //   }, [currentPage, limit, keyword, categoryId, showToast]);

// // // // //   if (isLoading) {
// // // // //     return (
// // // // //       <BasicPage>
// // // // //         <Loader />
// // // // //       </BasicPage>
// // // // //     );
// // // // //   }

// // // // //   const pageTitle = categoryId
// // // // //     ? categoryNames[categoryId]
// // // // //     : keyword
// // // // //       ? `"${keyword}" 검색결과`
// // // // //       : "전체상품";

// // // // //   const handlePageChange = (page) => {
// // // // //     setSearchParams((prev) => {
// // // // //       const params = new URLSearchParams(prev);

// // // // //       params.set("page", String(page));

// // // // //       return params;
// // // // //     });
// // // // //   };

// // // // //   return (
// // // // //     <BasicPage>
// // // // //       <ProductPage>
// // // // //         <PageTitleContainer>
// // // // //           <h2>{pageTitle}</h2>

// // // // //           <p>총 {totalCount}개의 상품</p>
// // // // //         </PageTitleContainer>

// // // // //         <CardContainer>
// // // // //           {products.map((product) => (
// // // // //             <Link
// // // // //               key={product.productId}
// // // // //               to={`/products/${product.productId}`}
// // // // //               className="product-link"
// // // // //             >
// // // // //               <div className="card-wrapper">
// // // // //                 <ProductCard
// // // // //                   image={product.thumbnail}
// // // // //                   name={product.name}
// // // // //                   badge=""
// // // // //                   showHeart
// // // // //                 />

// // // // //                 <p>{product.name}</p>

// // // // //                 <strong>{product.price.toLocaleString()}원</strong>
// // // // //               </div>
// // // // //             </Link>
// // // // //           ))}
// // // // //         </CardContainer>

// // // // //         <Pagination
// // // // //           currentPage={currentPage}
// // // // //           totalPages={totalPages}
// // // // //           onPageChange={handlePageChange}
// // // // //         />
// // // // //       </ProductPage>
// // // // //     </BasicPage>
// // // // //   );
// // // // // }

// // // // import { useEffect, useState } from "react";
// // // // import Pagination from "../../../components/pagnation/Pagnation";
// // // // import BasicPage from "../../basicPage/BasicPage";
// // // // import Loader from "../../../components/loader/Loader";
// // // // import ProductCard from "../../../components/product/ProductCard/ProductCard";
// // // // import * as productService from "../../../services/productServices";
// // // // import {
// // // //   CardContainer,
// // // //   PageTitleContainer,
// // // //   ProductPage,
// // // // } from "./ProductListStyle";
// // // // import useToast from "../../../hooks/useToast";
// // // // import { useProductLimit } from "../../../hooks/useProductLimit";
// // // // import { Link, useSearchParams } from "react-router-dom";

// // // // const categoryNames = {
// // // //   "cat-eat": "먹묘",
// // // //   "cat-play": "놀묘",
// // // //   "cat-rest": "쉼묘",
// // // //   "cat-high": "높묘",
// // // //   "cat-clean": "깔묘",
// // // // };

// // // // export default function ProductList() {
// // // //   const { showToast } = useToast();

// // // //   const [searchParams, setSearchParams] = useSearchParams();

// // // //   const [products, setProducts] = useState([]);
// // // //   const [totalPages, setTotalPages] = useState(1);
// // // //   const [totalCount, setTotalCount] = useState(0);
// // // //   const [isLoading, setIsLoading] = useState(true);
// // // //   const [wishlist, setWishlist] = useState([]);

// // // //   const limit = useProductLimit();

// // // //   // URL 파라미터
// // // //   const keyword = searchParams.get("keyword") || "";
// // // //   const category = searchParams.get("category") || "";

// // // //   const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);

// // // //   useEffect(() => {
// // // //     const fetchProducts = async () => {
// // // //       try {
// // // //         setIsLoading(true);

// // // //         const result = await productService.getProducts({
// // // //           page: currentPage,
// // // //           limit,

// // // //           // URL에서는 category를 사용하지만
// // // //           // API 요청에서는 categoryId로 전달
// // // //           categoryId: category,

// // // //           keyword,
// // // //         });

// // // //         if (!result.success) {
// // // //           throw new Error("상품 목록 조회에 실패했습니다.");
// // // //         }

// // // //         setProducts(result.products);
// // // //         setTotalPages(result.pagination.totalPages);
// // // //         setTotalCount(result.pagination.totalCount);
// // // //       } catch (error) {
// // // //         console.error("상품 목록 조회 실패:", error);

// // // //         showToast(error.message || "상품 목록 조회에 실패했습니다.", false);

// // // //         setProducts([]);
// // // //         setTotalPages(1);
// // // //         setTotalCount(0);
// // // //       } finally {
// // // //         setIsLoading(false);
// // // //       }
// // // //     };

// // // //     fetchProducts();
// // // //   }, [currentPage, limit, keyword, category, showToast]);

// // // //   if (isLoading) {
// // // //     return (
// // // //       <BasicPage>
// // // //         <Loader />
// // // //       </BasicPage>
// // // //     );
// // // //   }

// // // //   // 카테고리별 페이지 제목
// // // //   const pageTitle = category
// // // //     ? categoryNames[category]
// // // //     : keyword
// // // //       ? `"${keyword}" 검색결과`
// // // //       : "전체상품";

// // // //   const handlePageChange = (page) => {
// // // //     setSearchParams((prev) => {
// // // //       const params = new URLSearchParams(prev);

// // // //       params.set("page", String(page));

// // // //       return params;
// // // //     });
// // // //   };

// // // //   const handleWishlistChange = (productId, isLiked) => {
// // // //     if (isLiked) {
// // // //       return;
// // // //     }
// // // //     setWishlist((prev) => prev.filter((item) => item.productId !== productId));

// // // //     setTotalCount((prev) => Math.max(prev - 1, 0));
// // // //   };

// // // //   return (
// // // //     <BasicPage>
// // // //       <ProductPage>
// // // //         <PageTitleContainer>
// // // //           <h2>{pageTitle}</h2>

// // // //           <p>총 {totalCount}개의 상품</p>
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
// // // //                   badge=""
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

// // // //         <Pagination
// // // //           currentPage={currentPage}
// // // //           totalPages={totalPages}
// // // //           onPageChange={handlePageChange}
// // // //         />
// // // //       </ProductPage>
// // // //     </BasicPage>
// // // //   );
// // // // }

// // // import { useEffect, useState } from "react";
// // // import Pagination from "../../../components/pagnation/Pagnation";
// // // import BasicPage from "../../basicPage/BasicPage";
// // // import Loader from "../../../components/loader/Loader";
// // // import ProductCard from "../../../components/product/ProductCard/ProductCard";
// // // import * as productService from "../../../services/productServices";
// // // import * as wishlistService from "../../../services/wishlistServices";
// // // import {
// // //   CardContainer,
// // //   PageTitleContainer,
// // //   ProductPage,
// // // } from "./ProductListStyle";
// // // import useToast from "../../../hooks/useToast";
// // // import useAuth from "../../../hooks/useAuth";
// // // import { useProductLimit } from "../../../hooks/useProductLimit";
// // // import { Link, useSearchParams } from "react-router-dom";

// // // const categoryNames = {
// // //   "cat-eat": "먹묘",
// // //   "cat-play": "놀묘",
// // //   "cat-rest": "쉼묘",
// // //   "cat-high": "높묘",
// // //   "cat-clean": "깔묘",
// // // };

// // // export default function ProductList() {
// // //   const { showToast } = useToast();
// // //   const { accessToken, isAuthLoading } = useAuth();

// // //   const [searchParams, setSearchParams] = useSearchParams();

// // //   const [products, setProducts] = useState([]);
// // //   const [totalPages, setTotalPages] = useState(1);
// // //   const [totalCount, setTotalCount] = useState(0);
// // //   const [isLoading, setIsLoading] = useState(true);

// // //   const limit = useProductLimit();

// // //   // URL 파라미터
// // //   const keyword = searchParams.get("keyword") || "";
// // //   const category = searchParams.get("category") || "";

// // //   const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);

// // //   useEffect(() => {
// // //     if (isAuthLoading) {
// // //       return;
// // //     }

// // //     const fetchProducts = async () => {
// // //       try {
// // //         setIsLoading(true);

// // //         // 상품 목록 조회
// // //         const productResult = await productService.getProducts({
// // //           page: currentPage,
// // //           limit,

// // //           // URL에서는 category를 사용하지만
// // //           // API 요청에서는 categoryId로 전달
// // //           categoryId: category,

// // //           keyword,
// // //         });

// // //         if (!productResult.success) {
// // //           throw new Error("상품 목록 조회에 실패했습니다.");
// // //         }

// // //         const productList = productResult.products || [];

// // //         setTotalPages(productResult.pagination?.totalPages || 1);
// // //         setTotalCount(productResult.pagination?.totalCount || 0);

// // //         // 비로그인 상태
// // //         if (!accessToken) {
// // //           const productsWithWishlist = productList.map((product) => ({
// // //             ...product,
// // //             isLiked: false,
// // //           }));

// // //           setProducts(productsWithWishlist);

// // //           return;
// // //         }

// // //         // 로그인 상태 - 찜 목록 조회
// // //         const wishlistResult = await wishlistService.getWishlist(
// // //           {
// // //             page: 1,
// // //             limit: 100,
// // //           },
// // //           accessToken,
// // //         );

// // //         if (!wishlistResult.success) {
// // //           throw new Error("찜한 상품 조회에 실패했습니다.");
// // //         }

// // //         const wishlistProducts = wishlistResult.products || [];

// // //         // 찜한 상품의 productId만 추출
// // //         const wishlistProductIds = new Set(
// // //           wishlistProducts.map((item) => item.productId),
// // //         );

// // //         // 현재 상품 목록과 찜 목록 비교
// // //         const productsWithWishlist = productList.map((product) => ({
// // //           ...product,
// // //           isLiked: wishlistProductIds.has(product.productId),
// // //         }));

// // //         setProducts(productsWithWishlist);
// // //       } catch (error) {
// // //         console.error("상품 목록 조회 실패:", error);

// // //         showToast(error.message || "상품 목록 조회에 실패했습니다.", false);

// // //         setProducts([]);
// // //         setTotalPages(1);
// // //         setTotalCount(0);
// // //       } finally {
// // //         setIsLoading(false);
// // //       }
// // //     };

// // //     fetchProducts();
// // //   }, [
// // //     currentPage,
// // //     limit,
// // //     keyword,
// // //     category,
// // //     accessToken,
// // //     isAuthLoading,
// // //     showToast,
// // //   ]);

// // //   // 카테고리별 페이지 제목
// // //   const pageTitle = category
// // //     ? categoryNames[category]
// // //     : keyword
// // //       ? `"${keyword}" 검색결과`
// // //       : "전체상품";

// // //   const handlePageChange = (page) => {
// // //     setSearchParams((prev) => {
// // //       const params = new URLSearchParams(prev);

// // //       params.set("page", String(page));

// // //       return params;
// // //     });
// // //   };

// // //   // 찜 등록 / 해제 후 현재 상품의 isLiked 상태 변경
// // //   const handleWishlistChange = (productId, isLiked) => {
// // //     setProducts((prev) =>
// // //       prev.map((product) =>
// // //         product.productId === productId
// // //           ? {
// // //               ...product,
// // //               isLiked,
// // //             }
// // //           : product,
// // //       ),
// // //     );
// // //   };

// // //   if (isAuthLoading || isLoading) {
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
// // //           <h2>{pageTitle}</h2>

// // //           <p>총 {totalCount}개의 상품</p>
// // //         </PageTitleContainer>

// // //         <CardContainer>
// // //           {products.map((product) => (
// // //             <Link
// // //               key={product.productId}
// // //               to={`/products/${product.productId}`}
// // //               className="product-link"
// // //             >
// // //               <div className="card-wrapper">
// // //                 <ProductCard
// // //                   productId={product.productId}
// // //                   image={product.thumbnail}
// // //                   name={product.name}
// // //                   badge=""
// // //                   showHeart
// // //                   isLiked={product.isLiked}
// // //                   onWishlistChange={handleWishlistChange}
// // //                 />

// // //                 <p>{product.name}</p>

// // //                 <strong>{product.price.toLocaleString()}원</strong>
// // //               </div>
// // //             </Link>
// // //           ))}
// // //         </CardContainer>

// // //         <Pagination
// // //           currentPage={currentPage}
// // //           totalPages={totalPages}
// // //           onPageChange={handlePageChange}
// // //         />
// // //       </ProductPage>
// // //     </BasicPage>
// // //   );
// // // }

// // import { useEffect, useState } from "react";
// // import Pagination from "../../../components/pagnation/Pagnation";
// // import BasicPage from "../../basicPage/BasicPage";
// // import Loader from "../../../components/loader/Loader";
// // import ProductCard from "../../../components/product/ProductCard/ProductCard";
// // import * as productService from "../../../services/productServices";
// // import * as wishlistService from "../../../services/wishlistServices";
// // import {
// //   CardContainer,
// //   PageTitleContainer,
// //   ProductPage,
// // } from "./ProductListStyle";
// // import useToast from "../../../hooks/useToast";
// // import useAuth from "../../../hooks/useAuth";
// // import { useProductLimit } from "../../../hooks/useProductLimit";
// // import { Link, useSearchParams } from "react-router-dom";

// // const categoryNames = {
// //   "cat-eat": "먹묘",
// //   "cat-play": "놀묘",
// //   "cat-rest": "쉼묘",
// //   "cat-high": "높묘",
// //   "cat-clean": "깔묘",
// // };

// // export default function ProductList() {
// //   const { showToast } = useToast();
// //   const { accessToken, isAuthLoading } = useAuth();

// //   const [searchParams, setSearchParams] = useSearchParams();

// //   const [products, setProducts] = useState([]);
// //   const [wishlist, setWishlist] = useState([]);
// //   const [totalPages, setTotalPages] = useState(1);
// //   const [totalCount, setTotalCount] = useState(0);
// //   const [isLoading, setIsLoading] = useState(true);

// //   const limit = useProductLimit();

// //   // URL 파라미터
// //   const keyword = searchParams.get("keyword") || "";
// //   const category = searchParams.get("category") || "";

// //   const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);

// //   useEffect(() => {
// //     if (isAuthLoading) {
// //       return;
// //     }

// //     const fetchProducts = async () => {
// //       try {
// //         setIsLoading(true);

// //         // 상품 목록 조회
// //         const productResult = await productService.getProducts({
// //           page: currentPage,
// //           limit,

// //           // URL에서는 category를 사용하지만
// //           // API 요청에서는 categoryId로 전달
// //           categoryId: category,

// //           keyword,
// //         });

// //         if (!productResult.success) {
// //           throw new Error("상품 목록 조회에 실패했습니다.");
// //         }

// //         const productList = productResult.products || [];

// //         setProducts(productList);
// //         setTotalPages(productResult.pagination?.totalPages || 1);
// //         setTotalCount(productResult.pagination?.totalCount || 0);

// //         // 비로그인 상태
// //         if (!accessToken) {
// //           setWishlist([]);
// //           return;
// //         }

// //         // 로그인 상태 - 기존 찜 목록 조회
// //         const wishlistResult = await wishlistService.getWishlist(
// //           {
// //             page: 1,
// //             limit: 100,
// //           },
// //           accessToken,
// //         );

// //         if (!wishlistResult.success) {
// //           throw new Error("찜한 상품 조회에 실패했습니다.");
// //         }

// //         const wishlistProducts = wishlistResult.products || [];

// //         // 기존에 찜한 상품의 productId만 저장
// //         const wishlistProductIds = wishlistProducts
// //           .map((item) => item.productId)
// //           .filter(Boolean);

// //         setWishlist(wishlistProductIds);
// //       } catch (error) {
// //         console.error("상품 목록 조회 실패:", error);

// //         showToast(error.message || "상품 목록 조회에 실패했습니다.", false);

// //         setProducts([]);
// //         setWishlist([]);
// //         setTotalPages(1);
// //         setTotalCount(0);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchProducts();
// //   }, [
// //     currentPage,
// //     limit,
// //     keyword,
// //     category,
// //     accessToken,
// //     isAuthLoading,
// //     showToast,
// //   ]);

// //   // 카테고리별 페이지 제목
// //   const pageTitle = category
// //     ? categoryNames[category]
// //     : keyword
// //       ? `"${keyword}" 검색결과`
// //       : "전체상품";

// //   const handlePageChange = (page) => {
// //     setSearchParams((prev) => {
// //       const params = new URLSearchParams(prev);

// //       params.set("page", String(page));

// //       return params;
// //     });
// //   };

// //   // ProductCard에서 찜 등록/해제 API 성공 후 호출
// //   const handleWishlistChange = (productId, isLiked) => {
// //     setWishlist((prev) => {
// //       // 찜 등록 성공
// //       if (isLiked) {
// //         // 이미 등록되어 있으면 중복 추가하지 않음
// //         if (prev.includes(productId)) {
// //           return prev;
// //         }

// //         return [...prev, productId];
// //       }

// //       // 찜 해제 성공
// //       return prev.filter((id) => id !== productId);
// //     });
// //   };

// //   if (isAuthLoading || isLoading) {
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
// //           <h2>{pageTitle}</h2>

// //           <p>총 {totalCount}개의 상품</p>
// //         </PageTitleContainer>

// //         <CardContainer>
// //           {products.map((product) => {
// //             // 현재 상품이 찜 목록에 있는지 확인
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
// //                     badge=""
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

// //         <Pagination
// //           currentPage={currentPage}
// //           totalPages={totalPages}
// //           onPageChange={handlePageChange}
// //         />
// //       </ProductPage>
// //     </BasicPage>
// //   );
// // }

// import { useEffect, useState } from "react";
// import Pagination from "../../../components/pagnation/Pagnation";
// import BasicPage from "../../basicPage/BasicPage";
// import Loader from "../../../components/loader/Loader";
// import ProductCard from "../../../components/product/ProductCard/ProductCard";
// import * as productService from "../../../services/productServices";
// import * as wishlistService from "../../../services/wishlistServices";
// import {
//   CardContainer,
//   PageTitleContainer,
//   ProductPage,
//   HomeButton,
// } from "./ProductListStyle";
// import useToast from "../../../hooks/useToast";
// import useAuth from "../../../hooks/useAuth";
// import { useProductLimit } from "../../../hooks/useProductLimit";
// import { Link, useSearchParams } from "react-router-dom";

// const categoryNames = {
//   "cat-eat": "먹묘",
//   "cat-play": "놀묘",
//   "cat-rest": "쉼묘",
//   "cat-high": "높묘",
//   "cat-clean": "깔묘",
// };

// export default function ProductList() {
//   const { showToast } = useToast();

//   const { accessToken, isLoggedIn, isAuthLoading } = useAuth();

//   const [searchParams, setSearchParams] = useSearchParams();

//   const [products, setProducts] = useState([]);
//   const [wishlist, setWishlist] = useState([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [totalCount, setTotalCount] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);

//   const limit = useProductLimit();

//   // URL 파라미터
//   const keyword = searchParams.get("keyword") || "";
//   const category = searchParams.get("category") || "";

//   const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);

//   useEffect(() => {
//     if (isAuthLoading) {
//       return undefined;
//     }

//     let isCancelled = false;

//     const fetchProducts = async () => {
//       try {
//         setIsLoading(true);

//         // =========================
//         // 상품 목록 조회
//         // =========================

//         const productResult = await productService.getProducts({
//           page: currentPage,
//           limit,

//           // URL에서는 category를 사용하지만
//           // API 요청에서는 categoryId로 전달
//           categoryId: category,

//           keyword,
//         });

//         if (!productResult.success) {
//           throw new Error(
//             productResult.message || "상품 목록 조회에 실패했습니다.",
//           );
//         }

//         if (isCancelled) {
//           return;
//         }

//         const productList = productResult.products ?? [];

//         setTotalPages(productResult.pagination?.totalPages ?? 1);

//         setTotalCount(productResult.pagination?.totalCount ?? 0);

//         // =========================
//         // 비로그인 상태
//         // =========================

//         if (!isLoggedIn || !accessToken) {
//           /*
//            * 비로그인 상태에서는
//            * 찜 목록을 사용하지 않는다.
//            */
//           setProducts(
//             productList.map((product) => ({
//               ...product,
//               isLiked: false,
//             })),
//           );

//           setWishlist([]);

//           return;
//         }

//         // =========================
//         // 로그인 상태
//         // 기존 찜 목록 조회
//         // =========================

//         const wishlistResult = await wishlistService.getWishlist(
//           {
//             page: 1,
//             limit: 100,
//           },
//           accessToken,
//         );

//         if (!wishlistResult.success) {
//           throw new Error(
//             wishlistResult.message || "찜한 상품 조회에 실패했습니다.",
//           );
//         }

//         if (isCancelled) {
//           return;
//         }

//         /*
//          * 현재 서비스가 products를 반환하는 경우와
//          * API 명세의 wishlistItems 구조를 모두 대응
//          */
//         const wishlistProducts =
//           wishlistResult.products ??
//           wishlistResult.wishlistItems ??
//           wishlistResult.data?.wishlistItems ??
//           [];

//         /*
//          * Wishlist 응답이
//          *
//          * {
//          *   productId: "cat-eat-001"
//          * }
//          *
//          * 또는
//          *
//          * {
//          *   product: {
//          *     productId: "cat-eat-001"
//          *   }
//          * }
//          *
//          * 형태인 경우 모두 대응
//          */
//         const wishlistProductIds = wishlistProducts
//           .map((item) => item.productId ?? item.product?.productId)
//           .filter(Boolean);

//         /*
//          * Product API에서 isLiked가 내려오는 경우도
//          * 기존 찜 상태에 포함한다.
//          */
//         const productLikedIds = productList
//           .filter((product) => product.isLiked === true)
//           .map((product) => product.productId)
//           .filter(Boolean);

//         /*
//          * 중복 productId 제거
//          */
//         const likedProductIds = [
//           ...new Set([...wishlistProductIds, ...productLikedIds]),
//         ];

//         setProducts(productList);

//         setWishlist(likedProductIds);
//       } catch (error) {
//         if (isCancelled) {
//           return;
//         }

//         console.error("상품 목록 조회 실패:", error);

//         showToast(error.message || "상품 목록 조회에 실패했습니다.", false);

//         setProducts([]);
//         setWishlist([]);
//         setTotalPages(1);
//         setTotalCount(0);
//       } finally {
//         if (!isCancelled) {
//           setIsLoading(false);
//         }
//       }
//     };

//     fetchProducts();

//     return () => {
//       isCancelled = true;
//     };
//   }, [
//     currentPage,
//     limit,
//     keyword,
//     category,
//     accessToken,
//     isLoggedIn,
//     isAuthLoading,
//     showToast,
//   ]);

//   // =========================
//   // 카테고리별 페이지 제목
//   // =========================

//   const pageTitle = category
//     ? categoryNames[category]
//     : keyword
//       ? `"${keyword}" 검색결과`
//       : "전체상품";

//   // =========================
//   // 페이지 변경
//   // =========================

//   const handlePageChange = (page) => {
//     setSearchParams((prev) => {
//       const params = new URLSearchParams(prev);

//       params.set("page", String(page));

//       return params;
//     });
//   };

//   // =========================
//   // 찜 등록 / 해제 후 상태 변경
//   // =========================

//   /*
//    * HeartButton에서
//    *
//    * 찜 추가 성공
//    * onWishlistChange(productId, true)
//    *
//    * 찜 해제 성공
//    * onWishlistChange(productId, false)
//    *
//    * 가 전달된다.
//    */
//   const handleWishlistChange = (productId, isLiked) => {
//     if (!productId) {
//       return;
//     }

//     setWishlist((prev) => {
//       // =========================
//       // 찜 등록
//       // =========================

//       if (isLiked) {
//         /*
//          * 이미 찜 목록에 있으면
//          * 중복으로 추가하지 않는다.
//          */
//         if (prev.includes(productId)) {
//           return prev;
//         }

//         return [...prev, productId];
//       }

//       // =========================
//       // 찜 해제
//       // =========================

//       return prev.filter((id) => id !== productId);
//     });

//     /*
//      * products 내부 isLiked도
//      * 같이 변경한다.
//      *
//      * 따라서 페이지 내부 상품 데이터와
//      * HeartButton 상태가 일치한다.
//      */
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

//   // =========================
//   // 로딩
//   // =========================

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
//         {/* 홈으로 이동 */}
//         <HomeButton to="/">← 홈으로 이동</HomeButton>

//         <PageTitleContainer>
//           <h2>{pageTitle}</h2>

//           <p>총 {totalCount}개의 상품</p>
//         </PageTitleContainer>

//         <CardContainer>
//           {products.map((product) => {
//             /*
//              * 현재 상품의 productId가
//              * 찜 목록에 존재하면 꽉 찬 하트
//              */
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
//                     badge=""
//                     showHeart
//                     isLiked={isLiked}
//                     onWishlistChange={handleWishlistChange}
//                   />

//                   <p>{product.name}</p>

//                   <strong>
//                     {Number(product.price ?? 0).toLocaleString()}원
//                   </strong>
//                 </div>
//               </Link>
//             );
//           })}
//         </CardContainer>

//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={handlePageChange}
//         />
//       </ProductPage>
//     </BasicPage>
//   );
// }

import { useEffect, useState } from "react";
import Pagination from "../../../components/pagnation/Pagnation";
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
} from "./ProductListStyle";
import useToast from "../../../hooks/useToast";
import useAuth from "../../../hooks/useAuth";
import { useProductLimit } from "../../../hooks/useProductLimit";
import { Link, useSearchParams } from "react-router-dom";

const categoryNames = {
  "cat-eat": "먹묘",
  "cat-play": "놀묘",
  "cat-rest": "쉼묘",
  "cat-high": "높묘",
  "cat-clean": "깔묘",
};

const validCategoryIds = Object.keys(categoryNames);

export default function ProductList() {
  const { showToast } = useToast();

  const { accessToken, isLoggedIn, isAuthLoading } = useAuth();

  const [searchParams, setSearchParams] = useSearchParams();

  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  const limit = useProductLimit();

  /*
   * =========================================
   * URL Query Parameter
   * =========================================
   *
   * 전체상품
   * /products?page=1
   *
   * 카테고리
   * /products?category=cat-eat&page=1
   *
   * 검색
   * /products?keyword=츄르&page=1
   */

  const keyword = searchParams.get("keyword")?.trim() || "";

  const categoryParam = searchParams.get("category") || "";

  /*
   * 명세에 존재하는 카테고리만 API에 전달합니다.
   *
   * cat-eat
   * cat-play
   * cat-rest
   * cat-high
   * cat-clean
   */
  const category = validCategoryIds.includes(categoryParam)
    ? categoryParam
    : "";

  /*
   * page는 별도의 useState로 관리하지 않습니다.
   *
   * URL의 page 값을 현재 페이지의 단일 기준으로 사용하기 때문에
   * 새로고침해도 현재 페이지가 유지됩니다.
   */
  const pageParam = Number(searchParams.get("page"));

  const currentPage =
    Number.isInteger(pageParam) && pageParam >= 1 ? pageParam : 1;

  useEffect(() => {
    if (isAuthLoading) {
      return undefined;
    }

    let isCancelled = false;

    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        /*
         * =========================================
         * 상품 목록 조회
         * =========================================
         *
         * GET /products
         *
         * Query
         * category
         * keyword
         * page
         * limit
         */

        const productResult = await productService.getProducts({
          category,
          keyword,
          page: currentPage,
          limit,
        });

        if (!productResult.success) {
          throw new Error(
            productResult.message || "상품 목록 조회에 실패했습니다.",
          );
        }

        if (isCancelled) {
          return;
        }

        const productList = productResult.products ?? [];

        const pagination = productResult.pagination ?? {};

        setTotalPages(Math.max(1, Number(pagination.totalPages) || 1));

        setTotalCount(Math.max(0, Number(pagination.totalCount) || 0));

        /*
         * =========================================
         * 비로그인
         * =========================================
         */

        if (!isLoggedIn || !accessToken) {
          setProducts(
            productList.map((product) => ({
              ...product,
              isLiked: false,
            })),
          );

          setWishlist([]);

          return;
        }

        /*
         * =========================================
         * 로그인
         * 기존 찜 목록 조회
         * =========================================
         */

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
         * Wishlist Service의 기존 응답 구조와
         * API 명세의 wishlistItems 구조를 모두 대응합니다.
         */
        const wishlistProducts =
          wishlistResult.products ??
          wishlistResult.wishlistItems ??
          wishlistResult.data?.wishlistItems ??
          [];

        /*
         * 아래 두 구조를 모두 대응합니다.
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
         */

        const wishlistProductIds = wishlistProducts
          .map((item) => item.productId ?? item.product?.productId)
          .filter(Boolean);

        /*
         * Product API에서도 로그인 상태에 따라
         * isLiked가 내려올 수 있으므로 함께 사용합니다.
         */

        const productLikedIds = productList
          .filter((product) => product.isLiked === true)
          .map((product) => product.productId)
          .filter(Boolean);

        /*
         * Wishlist API와 Product API의 찜 상태를 합치고
         * 중복 productId를 제거합니다.
         */

        const likedProductIds = [
          ...new Set([...wishlistProductIds, ...productLikedIds]),
        ];

        setProducts(productList);

        setWishlist(likedProductIds);
      } catch (error) {
        if (isCancelled) {
          return;
        }

        console.error("상품 목록 조회 실패:", error);

        showToast(error?.message || "상품 목록 조회에 실패했습니다.", false);

        setProducts([]);
        setWishlist([]);
        setTotalPages(1);
        setTotalCount(0);
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      isCancelled = true;
    };
  }, [
    currentPage,
    limit,
    keyword,
    category,
    accessToken,
    isLoggedIn,
    isAuthLoading,
    showToast,
  ]);

  /*
   * =========================================
   * 페이지 제목
   * =========================================
   */

  const pageTitle = category
    ? categoryNames[category]
    : keyword
      ? `"${keyword}" 검색결과`
      : "전체상품";

  /*
   * =========================================
   * 페이지네이션
   * =========================================
   *
   * 페이지를 React state에 저장하지 않고
   * URL Query의 page를 변경합니다.
   *
   * 따라서
   *
   * /products?page=3
   *
   * 상태에서 새로고침하면 그대로 3페이지를 조회합니다.
   *
   * 기존 category, keyword Query도 유지합니다.
   */

  const handlePageChange = (page) => {
    const nextPage = Number(page);

    if (
      !Number.isInteger(nextPage) ||
      nextPage < 1 ||
      nextPage > totalPages ||
      nextPage === currentPage
    ) {
      return;
    }

    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      params.set("page", String(nextPage));

      return params;
    });
  };

  /*
   * =========================================
   * 찜 등록 / 해제
   * =========================================
   */

  const handleWishlistChange = (productId, isLiked) => {
    if (!productId) {
      return;
    }

    setWishlist((prev) => {
      /*
       * 찜 등록
       */
      if (isLiked) {
        if (prev.includes(productId)) {
          return prev;
        }

        return [...prev, productId];
      }

      /*
       * 찜 해제
       */
      return prev.filter((id) => id !== productId);
    });

    /*
     * products의 isLiked 상태도 같이 변경합니다.
     */

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

  /*
   * =========================================
   * 로딩
   * =========================================
   */

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
        {/* 홈으로 이동 */}
        <HomeButton to="/">← 홈으로 이동</HomeButton>

        <PageTitleContainer>
          <h2>{pageTitle}</h2>

          <p>총 {totalCount}개의 상품</p>
        </PageTitleContainer>

        <CardContainer>
          {products.map((product) => {
            /*
             * 현재 productId가 찜 목록에 존재하면
             * 꽉 찬 하트를 표시합니다.
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
                    badge=""
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

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </ProductPage>
    </BasicPage>
  );
}
