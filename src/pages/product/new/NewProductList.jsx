









































































































































































































































































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

        
        
        

        if (!isLoggedIn || !accessToken) {
          
          const productsWithWishlist = newProducts.map((product) => ({
            ...product,
            isLiked: false,
          }));

          setProducts(productsWithWishlist);

          setLoadedRequestKey(requestKey);

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
          wishlistResult.products ?? wishlistResult.wishlistItems ?? [];

        
        const wishlistProductIds = new Set(
          wishlistProducts
            .map((item) => item.productId ?? item.product?.productId)
            .filter(Boolean),
        );

        
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
        {}
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
