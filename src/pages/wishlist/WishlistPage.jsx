/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";

import logoEat from "../../assets/logo-eat.webp";
import logoClean from "../../assets/logo-clean.webp";
import logoHigh from "../../assets/logo-high.webp";
import logoPlay from "../../assets/logo-play.webp";
import logoRest from "../../assets/logo-rest.webp";
import wishlistImage from "../../assets/wish-logo.webp";

import {
  page,
  pageHeader,
  backButton,
  wishlistCount,
  wishlistGrid,
  wishlistCard,
  imageWrapper,
  productImage,
  heartButton,
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

const initialWishlist = [
  {
    id: 1,
    name: "냥이가 다 해먹",
    description: "고양이의 편안한 휴식을 위한 포근한 제품",
    price: 28900,
    image: "https://i.ibb.co/QjJZXCZv/4.webp",
  },
  {
    id: 2,
    name: "버튼 꾹꾹이",
    description: "고양이의 사냥 본능을 자극하는 재미있는 장난감",
    price: 15900,
    image: "https://i.ibb.co/N6bjxkch/3.webp",
  },
  {
    id: 3,
    name: "미끄럼틀 캣타워",
    description: "놀고 쉬는 시간을 한 번에 즐기는 캣타워",
    price: 89000,
    image: "https://i.ibb.co/dsm3wd0T/4.webp",
  },
];

function WishlistPage() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState(initialWishlist);

  const handleRemoveWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  const handleAddCart = (item) => {
    alert(`${item.name} 상품이 장바구니에 담겼습니다.`);
  };

  const handleBuy = (item) => {
    alert(`${item.name} 상품을 구매합니다.`);
  };

  return (
    <>
      <Header />

      <main css={page}>
        <div css={pageHeader}>
          <button css={backButton} onClick={() => navigate("/mypage")}>
            <span className="back-arrow">←</span> 마이페이지
          </button>
          <h1>찜한상품</h1>

          <p css={wishlistCount}>
            찜한 상품 <strong>{wishlist.length}</strong>개
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
              <article key={item.id} css={wishlistCard}>
                <div css={imageWrapper}>
                  <img
                    src={item.image}
                    alt={item.name}
                    css={productImage}
                    onClick={() => handleProductClick(item.id)}
                  />

                  <button
                    type="button"
                    css={heartButton}
                    aria-label={`${item.name} 찜 취소`}
                    onClick={() => handleRemoveWishlist(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                        2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                        C13.09 3.81 14.76 3 16.5 3
                        19.58 3 22 5.42 22 8.5
                        c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>

                <div css={productInfo}>
                  <h2
                    css={productName}
                    onClick={() => handleProductClick(item.id)}
                  >
                    {item.name}
                  </h2>

                  <p css={productDescription}>{item.description}</p>

                  <strong css={productPrice}>
                    {item.price.toLocaleString()}원
                  </strong>

                  <div css={buttonWrapper}>
                    <button
                      type="button"
                      css={cartButton}
                      onClick={() => handleAddCart(item)}
                    >
                      장바구니
                    </button>

                    <button
                      type="button"
                      css={buyButton}
                      onClick={() => handleBuy(item)}
                    >
                      바로구매
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
