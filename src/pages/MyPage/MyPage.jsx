/** @jsxImportSource @emotion/react */

import { useNavigate } from "react-router-dom";
import {
  page,
  pageTitle,
  userCard,
  userInfo,
  userName,
  userEmail,
  editButton,
  summary,
  summaryItem,
  summaryLabel,
  summaryValue,
  section,
  sectionTitle,
  orderCard,
  // orderImage,
  // orderInfo,
  // orderName,
  // productName,
  // orderDate,
  // orderNumber,
  // orderStatus,
  titleWrapper,
  // quickMenu,
  // quickCard,
  quickTitle,
  OrderCardWrapper,
  // quickText,
  // quickArrow,
  // buttonStyle,
  OrderCard,
} from "./MyPageStyle";
import BasicPage from "../basicPage/BasicPage";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/loader/Loader";
import myShopCat from "../../assets/logo-myshop.webp";
import ProductCard from "../../components/product/ProductCard/ProductCard";

function MyPage() {
  const { user, isLoggedIn, isAuthLoading } = useAuth();
  const navigate = useNavigate();
  const [isPerchased, setIsPerchased] = useState(false);

  const nickname =
    user?.nickname || user?.nickName || user?.username || user?.name || "회원";
  const email = user?.email ?? "";
  const points = user?.points ?? 0;

  if (isAuthLoading) {
    return (
      <BasicPage>
        <Loader />
      </BasicPage>
    );
  }

  if (!isLoggedIn) {
    return <div>로그인이 필요합니다.</div>;
  }

  return (
    <BasicPage>
      <main css={page}>
        {/* 페이지 제목 */}
        <h1 css={pageTitle}>MY PAGE</h1>

        {/* 회원 기본 영역 */}
        <section css={userCard}>
          <div className="profile-wrapper">
            <div className="profile-svg">
              <img src={myShopCat} alt="" />
            </div>
            <div css={userInfo}>
              <span css={userName}>{nickname}님</span>
              <div className="info-wrapper">
                <span css={userEmail}>{email}</span>
                <button css={userEmail} className="pointDeco">
                  <span>적립금</span>
                  <span>{points.toLocaleString()} P</span>
                </button>
              </div>
            </div>
          </div>
          <button
            type="button"
            css={editButton}
            onClick={() => navigate("/mypage/edit")}
          >
            <strong css={quickTitle}>회원정보 수정</strong>
            <span className="quick-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </span>
          </button>
        </section>

        {/* 마이페이지 요약 */}
        <section css={summary}>
          <div css={summaryItem}>
            <button className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                className="bi bi-receipt-cutoff"
                viewBox="0 0 16 16"
              >
                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5M11.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
                <path d="M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118z" />
              </svg>
            </button>
            <span css={summaryLabel}>주문 내역</span>
            <strong css={summaryValue}>3</strong>
          </div>

          <div css={summaryItem}>
            <button className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                className="bi bi-box2-heart"
                viewBox="0 0 16 16"
              >
                <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982" />
                <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zm0 1H7.5v3h-6zM8.5 4V1h3.75l2.25 3zM15 5v10H1V5z" />
              </svg>
            </button>
            <span css={summaryLabel}>찜한 상품</span>
            <strong css={summaryValue}>5</strong>
          </div>

          <div css={summaryItem}>
            <button className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                />
              </svg>
            </button>
            <span css={summaryLabel}>리뷰 관리</span>
            <strong css={summaryValue}>2</strong>
          </div>

          <div css={summaryItem}>
            <button className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                class="bi bi-patch-question"
                viewBox="0 0 16 16"
              >
                <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.7 1.7 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745" />
                <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
                <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
              </svg>
            </button>
            <span css={summaryLabel}>나의 문의</span>
            <strong css={summaryValue}>1</strong>
          </div>
        </section>

        {/* 최근 주문 */}
        <section css={section}>
          <div css={titleWrapper}>
            <h2 css={sectionTitle}>주문 내역</h2>
            <button
              type="button"
              css={editButton}
              onClick={() => navigate("/mypage/orders")}
            >
              <strong css={quickTitle}>전체보기</strong>
              <span className="quick-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className="section-content">
            <span className="guide-message">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-left-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                />
              </svg>{" "}
              밀어서 보기{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </span>
            <OrderCardWrapper>
              <OrderCard>
                <div className="order-banner">
                  <span className="order-date">2026.09.02(수)</span>
                  <button className="order-number">OM123456789</button>
                </div>
                <div className="order-content">
                  <div className="desc-wrapper">
                    <div className="product-wrapper">
                      <div className="img-container">
                        {/* <img
                          src="https://i.ibb.co/QjJZXCZv/4.webp"
                          alt="냥이가 다 해먹"
                          loading="lazy"
                        /> */}
                        <ProductCard
                          image="https://i.ibb.co/QjJZXCZv/4.webp"
                          name="냥이가 다 해먹"
                          badge=""
                          showHeart={false}
                        />
                      </div>
                      <div className="product-desc-wrapper">
                        <p>냥이가 다 해먹</p>
                        <span>28900원</span>
                      </div>
                    </div>
                    <div className="price-wrapper">
                      <span>1개</span>
                      <p>28900원</p>
                    </div>
                  </div>
                  <div className="button-container">
                    <div className="badge">배송완료</div>
                    {!isPerchased ? (
                      <button>구매결정</button>
                    ) : (
                      <button>리뷰작성</button>
                    )}
                  </div>
                </div>
              </OrderCard>
              <OrderCard>
                <div className="order-banner">
                  <span className="order-date">2026.09.02(수)</span>
                  <button className="order-number">OM123456789</button>
                </div>
                <div className="order-content">
                  <div className="desc-wrapper">
                    <div className="product-wrapper">
                      <div className="img-container">
                        <ProductCard
                          image="https://i.ibb.co/QjJZXCZv/4.webp"
                          name="냥이가 다 해먹"
                          badge=""
                          showHeart={false}
                        />
                      </div>
                      <div className="product-desc-wrapper">
                        <p>냥이가 다 해먹</p>
                        <span>28900원</span>
                      </div>
                    </div>
                    <div className="price-wrapper">
                      <span>1개</span>
                      <p>28900원</p>
                    </div>
                  </div>
                  <div className="button-container">
                    <div className="badge">배송완료</div>
                    {!isPerchased ? (
                      <button onClick={() => setIsPerchased(true)}>
                        구매결정
                      </button>
                    ) : (
                      <button onClick={() => navigate("/community/review")}>
                        리뷰작성
                      </button>
                    )}
                  </div>
                </div>
              </OrderCard>
            </OrderCardWrapper>
          </div>
        </section>
        {/* 찜한 상품 */}
        <section css={section}>
          <div css={titleWrapper}>
            <h2 css={sectionTitle}>찜한 상품</h2>
            <button
              type="button"
              css={editButton}
              onClick={() => navigate("/mypage/wishlist")}
            >
              <strong css={quickTitle}>전체보기</strong>
              <span className="quick-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className="section-content">
            <span className="guide-message">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-left-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                />
              </svg>{" "}
              밀어서 보기{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </span>
            <article css={orderCard}>
              <div className="item-wrapper">
                <div className="img-wrapper">
                  <ProductCard
                    image="https://i.ibb.co/QjJZXCZv/4.webp"
                    name="냥이가 다 해먹"
                    badge=""
                    showHeart
                  />
                </div>

                <div className="desc-wrapper">
                  <p>냥이가 다 해먹</p>
                  <strong>28900원</strong>
                </div>
                <div className="btn-wrapper">
                  <button>장바구니</button>
                  <button>바로구매</button>
                </div>
              </div>
              <div className="item-wrapper">
                <div className="img-wrapper">
                  <ProductCard
                    image="https://i.ibb.co/QjJZXCZv/4.webp"
                    name="냥이가 다 해먹"
                    badge=""
                    showHeart
                  />
                </div>

                <div className="desc-wrapper">
                  <p>냥이가 다 해먹</p>
                  <strong>28900원</strong>
                </div>
                <div className="btn-wrapper">
                  <button>장바구니</button>
                  <button>바로구매</button>
                </div>
              </div>
              <div className="item-wrapper">
                <div className="img-wrapper">
                  <ProductCard
                    image="https://i.ibb.co/QjJZXCZv/4.webp"
                    name="냥이가 다 해먹"
                    badge=""
                    showHeart
                  />
                </div>

                <div className="desc-wrapper">
                  <p>냥이가 다 해먹</p>
                  <strong>28900원</strong>
                </div>
                <div className="btn-wrapper">
                  <button>장바구니</button>
                  <button>바로구매</button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </BasicPage>
  );
}

export default MyPage;
