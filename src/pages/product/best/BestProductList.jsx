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
  const { accessToken, isAuthLoading } = useAuth();

  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthLoading) {
      return;
    }

    const fetchBestProducts = async () => {
      try {
        setIsLoading(true);

        // 베스트 상품 조회
        const productResult = await productService.getBestProducts();

        if (!productResult.success) {
          throw new Error("베스트 상품 조회에 실패했습니다.");
        }

        const bestProducts = productResult.products || [];

        setProducts(bestProducts);

        // 비로그인 상태
        if (!accessToken) {
          setWishlist([]);
          return;
        }

        // 로그인 상태 - 기존 찜 목록 조회
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

        // 기존에 찜한 상품의 productId만 저장
        const wishlistProductIds = wishlistProducts
          .map((item) => item.productId)
          .filter(Boolean);

        setWishlist(wishlistProductIds);
      } catch (error) {
        console.error("베스트 상품 조회 실패:", error);

        showToast(error.message || "베스트 상품 조회에 실패했습니다.", false);

        setProducts([]);
        setWishlist([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBestProducts();
  }, [accessToken, isAuthLoading, showToast]);

  // ProductCard에서 찜 등록/해제 API 성공 후 호출
  const handleWishlistChange = (productId, isLiked) => {
    setWishlist((prev) => {
      // 찜 등록 성공
      if (isLiked) {
        // 이미 등록되어 있으면 중복 추가하지 않음
        if (prev.includes(productId)) {
          return prev;
        }

        return [...prev, productId];
      }

      // 찜 해제 성공
      return prev.filter((id) => id !== productId);
    });
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
          <h2>베스트 상품</h2>

          <p>총 {products.length}개의 상품</p>
        </PageTitleContainer>

        <CardContainer>
          {products.map((product) => {
            // 현재 상품이 찜 목록에 있는지 확인
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

                  <strong>{product.price.toLocaleString()}원</strong>
                </div>
              </Link>
            );
          })}
        </CardContainer>
      </ProductPage>
    </BasicPage>
  );
}
