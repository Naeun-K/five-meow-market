// // import { useEffect, useState } from "react";
// // import Pagination from "../../../components/pagnation/Pagnation";
// // import BasicPage from "../../basicPage/BasicPage";
// // import Loader from "../../../components/loader/Loader";
// // import ProductCard from "../../../components/product/ProductCard/ProductCard";
// // import * as productService from "../../../services/productServices";
// // import {
// //   CardContainer,
// //   PageTitleContainer,
// //   ProductPage,
// // } from "./ProductListStyle";
// // import useToast from "../../../hooks/useToast";
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
// //   const [searchParams, setSearchParams] = useSearchParams();
// //   const [products, setProducts] = useState([]);
// //   const [totalPages, setTotalPages] = useState(1);
// //   const [totalCount, setTotalCount] = useState(0);
// //   const [isLoading, setIsLoading] = useState(true);

// //   const limit = useProductLimit();
// //   const keyword = searchParams.get("keyword") || "";
// //   const category = searchParams.get("category") || "";

// //   const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         setIsLoading(true);

// //         const result = await productService.getProducts({
// //           page: currentPage,
// //           limit,
// //           category,
// //           keyword,
// //         });

// //         if (!result.success) {
// //           throw new Error("상품 목록 조회에 실패했습니다.");
// //         }

// //         setProducts(result.data?.products);
// //         setTotalPages(result.data?.pagination.totalPages);
// //         setTotalCount(result.data?.pagination.totalCount);
// //       } catch (error) {
// //         console.error("상품 목록 조회 실패:", error);
// //         showToast(error.message, false);
// //         setProducts([]);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchProducts();
// //   }, [currentPage, limit, keyword, category, showToast]);

// //   if (isLoading) {
// //     return (
// //       <BasicPage>
// //         <Loader />
// //       </BasicPage>
// //     );
// //   }

// //   const pageTitle = category ? categoryNames[category] : "전체상품";

// //   const handlePageChange = (page) => {
// //     setSearchParams((prev) => {
// //       const params = new URLSearchParams(prev);

// //       params.set("page", String(page));

// //       return params;
// //     });
// //   };

// //   return (
// //     <BasicPage>
// //       <ProductPage>
// //         <PageTitleContainer>
// //           <h2>{pageTitle}</h2>

// //           <p>총 {totalCount}개의 상품</p>
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
// //                   image={product.thumbnail}
// //                   name={product.name}
// //                   badge=""
// //                   showHeart
// //                 />

// //                 <p>{product.name}</p>

// //                 <strong>{product.price.toLocaleString()}원</strong>
// //               </div>
// //             </Link>
// //           ))}
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
// import {
//   CardContainer,
//   PageTitleContainer,
//   ProductPage,
// } from "./ProductListStyle";
// import useToast from "../../../hooks/useToast";
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

//   const [searchParams, setSearchParams] = useSearchParams();

//   const [products, setProducts] = useState([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [totalCount, setTotalCount] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);

//   const limit = useProductLimit();

//   const keyword = searchParams.get("keyword") || "";
//   const categoryId = searchParams.get("categoryId") || "";

//   const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setIsLoading(true);

//         const result = await productService.getProducts({
//           page: currentPage,
//           limit,
//           categoryId,
//           keyword,
//         });

//         if (!result.success) {
//           throw new Error("상품 목록 조회에 실패했습니다.");
//         }

//         setProducts(result.products);
//         setTotalPages(result.pagination.totalPages);
//         setTotalCount(result.pagination.totalCount);
//       } catch (error) {
//         console.error("상품 목록 조회 실패:", error);

//         showToast(error.message || "상품 목록 조회에 실패했습니다.", false);

//         setProducts([]);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [currentPage, limit, keyword, categoryId, showToast]);

//   if (isLoading) {
//     return (
//       <BasicPage>
//         <Loader />
//       </BasicPage>
//     );
//   }

//   const pageTitle = categoryId
//     ? categoryNames[categoryId]
//     : keyword
//       ? `"${keyword}" 검색결과`
//       : "전체상품";

//   const handlePageChange = (page) => {
//     setSearchParams((prev) => {
//       const params = new URLSearchParams(prev);

//       params.set("page", String(page));

//       return params;
//     });
//   };

//   return (
//     <BasicPage>
//       <ProductPage>
//         <PageTitleContainer>
//           <h2>{pageTitle}</h2>

//           <p>총 {totalCount}개의 상품</p>
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
//                   image={product.thumbnail}
//                   name={product.name}
//                   badge=""
//                   showHeart
//                 />

//                 <p>{product.name}</p>

//                 <strong>{product.price.toLocaleString()}원</strong>
//               </div>
//             </Link>
//           ))}
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
import {
  CardContainer,
  PageTitleContainer,
  ProductPage,
} from "./ProductListStyle";
import useToast from "../../../hooks/useToast";
import { useProductLimit } from "../../../hooks/useProductLimit";
import { Link, useSearchParams } from "react-router-dom";

const categoryNames = {
  "cat-eat": "먹묘",
  "cat-play": "놀묘",
  "cat-rest": "쉼묘",
  "cat-high": "높묘",
  "cat-clean": "깔묘",
};

export default function ProductList() {
  const { showToast } = useToast();

  const [searchParams, setSearchParams] = useSearchParams();

  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const limit = useProductLimit();

  // URL 파라미터
  const keyword = searchParams.get("keyword") || "";
  const category = searchParams.get("category") || "";

  const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        const result = await productService.getProducts({
          page: currentPage,
          limit,

          // URL에서는 category를 사용하지만
          // API 요청에서는 categoryId로 전달
          categoryId: category,

          keyword,
        });

        if (!result.success) {
          throw new Error("상품 목록 조회에 실패했습니다.");
        }

        setProducts(result.products);
        setTotalPages(result.pagination.totalPages);
        setTotalCount(result.pagination.totalCount);
      } catch (error) {
        console.error("상품 목록 조회 실패:", error);

        showToast(error.message || "상품 목록 조회에 실패했습니다.", false);

        setProducts([]);
        setTotalPages(1);
        setTotalCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, limit, keyword, category, showToast]);

  if (isLoading) {
    return (
      <BasicPage>
        <Loader />
      </BasicPage>
    );
  }

  // 카테고리별 페이지 제목
  const pageTitle = category
    ? categoryNames[category]
    : keyword
      ? `"${keyword}" 검색결과`
      : "전체상품";

  const handlePageChange = (page) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      params.set("page", String(page));

      return params;
    });
  };

  return (
    <BasicPage>
      <ProductPage>
        <PageTitleContainer>
          <h2>{pageTitle}</h2>

          <p>총 {totalCount}개의 상품</p>
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
                  image={product.thumbnail}
                  name={product.name}
                  badge=""
                  showHeart
                />

                <p>{product.name}</p>

                <strong>{product.price.toLocaleString()}원</strong>
              </div>
            </Link>
          ))}
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
