import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

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
import ApiErrorPage from "../../errorPage/ApiErrorPage";
import EmptyResult from "../../../components/productStatus/EmptyResult";

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

  const [apiError, setApiError] = useState(null);

  const limit = useProductLimit();

  const keyword = searchParams.get("keyword")?.trim() || "";

  const categoryParam = searchParams.get("category") || "";

  const category = validCategoryIds.includes(categoryParam)
    ? categoryParam
    : "";

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

        setApiError(null);

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

        const wishlistProducts =
          wishlistResult.products ??
          wishlistResult.wishlistItems ??
          wishlistResult.data?.wishlistItems ??
          [];

        const wishlistProductIds = wishlistProducts
          .map((item) => item.productId ?? item.product?.productId)
          .filter(Boolean);

        const productLikedIds = productList
          .filter((product) => product.isLiked === true)
          .map((product) => product.productId)
          .filter(Boolean);

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

        setApiError(error);
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

  const pageTitle = category
    ? categoryNames[category]
    : keyword
      ? `"${keyword}" 검색결과`
      : "전체상품";

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

  const handleWishlistChange = (productId, isLiked) => {
    if (!productId) {
      return;
    }

    setWishlist((prev) => {
      if (isLiked) {
        if (prev.includes(productId)) {
          return prev;
        }

        return [...prev, productId];
      }

      return prev.filter((id) => id !== productId);
    });

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

  if (apiError) {
    return <ApiErrorPage />;
  }

  if (products.length === 0) {
    return (
      <BasicPage>
        <EmptyResult />
      </BasicPage>
    );
  }

  return (
    <BasicPage>
      <ProductPage>
        <HomeButton to="/">← 홈으로 이동</HomeButton>

        <PageTitleContainer>
          <h2>{pageTitle}</h2>

          <p>총 {totalCount}개의 상품</p>
        </PageTitleContainer>

        <CardContainer>
          {products.map((product) => {
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
