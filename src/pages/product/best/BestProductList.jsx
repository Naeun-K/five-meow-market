


























































































































































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

export default function BestProductList() {
  const { showToast } = useToast();

  const { accessToken, isLoggedIn, isAuthLoading } = useAuth();

  const [products, setProducts] = useState([]);

  const [wishlist, setWishlist] = useState([]);

  const [loadedRequestKey, setLoadedRequestKey] = useState("");

  
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

        
        const productLikedIds = bestProducts
          .filter((product) => product.isLiked)
          .map((product) => product.productId)
          .filter(Boolean);

        
        
        

        if (!isLoggedIn || !accessToken) {
          setProducts(bestProducts);

          
          setWishlist([]);

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
          wishlistResult.wishlistItems ?? wishlistResult.products ?? [];

        
        const wishlistProductIds = wishlistProducts
          .map((item) => item.productId ?? item.product?.productId)
          .filter(Boolean);

        
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

  
  const handleWishlistChange = (productId, isLiked) => {
    if (!productId) {
      return;
    }

    setWishlist((previousWishlist) => {
      
      
      

      if (isLiked) {
        
        if (previousWishlist.includes(productId)) {
          return previousWishlist;
        }

        return [...previousWishlist, productId];
      }

      
      
      

      return previousWishlist.filter((id) => id !== productId);
    });

    
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
          <h2>베스트 상품</h2>

          <p>총 {products.length}개의 상품</p>
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
