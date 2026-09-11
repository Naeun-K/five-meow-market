/** @jsxImportSource @emotion/react */

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
  orderImage,
  orderInfo,
  orderName,
  orderDate,
  orderNumber,
  orderStatus,
  quickMenu,
  quickCard,
  quickTitle,
  quickText,
  quickArrow,
} from "./MyPageStyle";

function MyPage() {
  return (
    <main css={page}>
      {/* 페이지 제목 */}
      <h1 css={pageTitle}>MY PAGE</h1>

      {/* 회원 기본 영역 */}
      <section css={userCard}>
        <div css={userInfo}>
          <span css={userName}>오묘한님</span>
          <span css={userEmail}>omyo@example.com</span>
        </div>

        <button type="button" css={editButton}>
          회원정보 수정
        </button>
      </section>

      {/* 마이페이지 요약 */}
      <section css={summary}>
        <div css={summaryItem}>
          <span css={summaryLabel}>주문내역</span>
          <strong css={summaryValue}>3</strong>
        </div>

        <div css={summaryItem}>
          <span css={summaryLabel}>관심상품</span>
          <strong css={summaryValue}>5</strong>
        </div>

        <div css={summaryItem}>
          <span css={summaryLabel}>리뷰관리</span>
          <strong css={summaryValue}>2</strong>
        </div>

        <div css={summaryItem}>
          <span css={summaryLabel}>적립금</span>
          <strong css={summaryValue}>1,200P</strong>
        </div>
      </section>

      {/* 최근 주문 */}
      <section css={section}>
        <h2 css={sectionTitle}>최근 주문</h2>

        <article css={orderCard}>
          <img
            css={orderImage}
            src="https://i.ibb.co/QjJZXCZv/4.webp"
            alt="냥이가 다 해먹"
          />

          <div css={orderInfo}>
            <strong css={orderName}>냥이가 다 해먹</strong>

            <span css={orderDate}>주문일 : 2026.09.10</span>

            <span css={orderNumber}>
              <span className="order-number-label">주문번호 : </span>
              <span className="order-number-value">20260910-0001</span>
            </span>
          </div>

          <span css={orderStatus}>배송완료</span>
        </article>
      </section>

      {/* 바로가기 */}
      <section css={quickMenu}>
        <button type="button" css={quickCard}>
          <div>
            <strong css={quickTitle}>주문조회</strong>

            <span css={quickText}>주문 내역을 확인해보세요.</span>
          </div>

          <span className="quick-arrow" css={quickArrow}>
            →
          </span>
        </button>

        <button type="button" css={quickCard}>
          <div>
            <strong css={quickTitle}>관심상품</strong>

            <span css={quickText}>찜한 상품을 확인해보세요.</span>
          </div>

          <span className="quick-arrow" css={quickArrow}>
            →
          </span>
        </button>
      </section>
    </main>
  );
}

export default MyPage;
