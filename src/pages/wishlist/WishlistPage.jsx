






















































































































































































































































import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";
import ProductCard from "../../components/product/ProductCard/ProductCard";
import ForwardButton from "../../components/common/forwardBtn/ForwardButton";

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

  
  const [loadedRequestKey, setLoadedRequestKey] = useState("");

  
  const [addingCartProductId, setAddingCartProductId] = useState(null);

  
  const [buyingProductId, setBuyingProductId] = useState(null);

  const currentRequestKey =
    !isAuthLoading && isLoggedIn && accessToken
      ? `wishlist:${accessToken}`
      : "";

  const isLoading =
    isAuthLoading ||
    (Boolean(currentRequestKey) && loadedRequestKey !== currentRequestKey);

  
  
  

  useEffect(() => {
    if (isAuthLoading) {
      return undefined;
    }

    
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

        
        const wishlistProducts = result.products ?? result.wishlistItems ?? [];

        
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

  
  
  

  const handleWishlistChange = (productId, isLiked) => {
    
    if (isLiked) {
      return;
    }

    
    setWishlist((previousWishlist) =>
      previousWishlist.filter((item) => item.productId !== productId),
    );

    setTotalCount((previousCount) => Math.max(previousCount - 1, 0));
  };

  
  
  

  const handleProductClick = (productId) => {
    if (!productId) {
      return;
    }

    navigate(`/products/${productId}`);
  };

  
  
  

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

    
    if (addingCartProductId === item.productId) {
      return;
    }

    try {
      setAddingCartProductId(item.productId);

      
      const result = await cartService.addCartItem(
        item.productId,
        1,
        accessToken,
      );

      if (!result.success) {
        throw new Error(result.message || "장바구니 담기에 실패했습니다.");
      }

      
      showToast(result.message || "장바구니에 상품을 담았습니다.", true);
    } catch (error) {
      console.error("장바구니 담기 실패:", error);

      showToast(error.message || "장바구니 담기에 실패했습니다.", false);
    } finally {
      setAddingCartProductId(null);
    }
  };

  
  
  

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

    
    if (buyingProductId === item.productId) {
      return;
    }

    try {
      setBuyingProductId(item.productId);

      
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
          <ForwardButton onClick={() => navigate("/mypage")}>
            마이페이지로
          </ForwardButton>

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
