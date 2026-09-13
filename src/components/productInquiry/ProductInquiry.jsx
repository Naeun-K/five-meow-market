/** @jsxImportSource @emotion/react */

import { useState } from "react";
import * as S from "./ProductInquiry.style";

const inquiries = [
  {
    id: 666,
    image: "https://i.ibb.co/QjJZXCZv/4.webp",
    productName: "오묘한 머그컵",
    title: "머그컵 전자레인지 사용 가능한가요?",
    date: "2026-09-10",
    status: "waiting",
    isSecret: false,
    views: 1,
  },
  {
    id: 665,
    image: "https://i.ibb.co/QjJZXCZv/4.webp",
    productName: "고양이 캣타워",
    title: "배송은 언제쯤 될까요?",
    date: "2026-09-09",
    status: "complete",
    isSecret: true,
    views: 0,
  },
  {
    id: 664,
    image: "https://i.ibb.co/QjJZXCZv/4.webp",
    productName: "모래 탈취 화장실",
    title: "사이즈가 궁금해요!",
    date: "2026-08-29",
    status: "complete",
    isSecret: true,
    views: 1,
  },
  {
    id: 663,
    image: "https://i.ibb.co/QjJZXCZv/4.webp",
    productName: "세라믹 식기 세트",
    title: "추가 구성품도 구매 가능한가요?",
    date: "2026-08-27",
    status: "waiting",
    isSecret: false,
    views: 2,
  },
  {
    id: 662,
    image: "https://i.ibb.co/QjJZXCZv/4.webp",
    productName: "포근한 고양이 담요",
    title: "세탁 방법이 궁금합니다.",
    date: "2026-08-13",
    status: "complete",
    isSecret: true,
    views: 0,
  },
];

const ProductInquiry = () => {
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("latest");

  const numberedInquiries = [...inquiries]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((item, index) => ({
      ...item,
      number: index + 1,
    }));

  const filteredInquiries = numberedInquiries
    .filter((item) => {
      if (filter === "all") return true;
      return item.status === filter;
    })
    .sort((a, b) => {
      if (sortOrder === "latest") {
        return new Date(b.date) - new Date(a.date);
      }

      return new Date(a.date) - new Date(b.date);
    });

  return (
    <section css={S.container}>
      <div css={S.titleArea}>
        <div>
          <h1>문의 내역</h1>

          <p>내가 작성한 문의 내역을 확인할 수 있어요.</p>
        </div>
      </div>
      <div css={S.filterArea}>
        <div css={S.filter}>
          <button
            type="button"
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            전체 <span>{inquiries.length}</span>
          </button>

          <button
            type="button"
            className={filter === "complete" ? "active" : ""}
            onClick={() => setFilter("complete")}
          >
            답변완료{" "}
            <span>
              {inquiries.filter((item) => item.status === "complete").length}
            </span>
          </button>

          <button
            type="button"
            className={filter === "waiting" ? "active" : ""}
            onClick={() => setFilter("waiting")}
          >
            답변대기{" "}
            <span>
              {inquiries.filter((item) => item.status === "waiting").length}
            </span>
          </button>
        </div>

        <div css={S.sort}>
          <button
            type="button"
            className={sortOrder === "latest" ? "active" : ""}
            onClick={() => setSortOrder("latest")}
          >
            최신순
          </button>

          <span>|</span>

          <button
            type="button"
            className={sortOrder === "oldest" ? "active" : ""}
            onClick={() => setSortOrder("oldest")}
          >
            오래된순
          </button>
        </div>
      </div>

      <div css={S.table}>
        <div className="table-header">
          <span>번호</span>
          <span>상품정보</span>
          <span>제목</span>
          <span>작성일</span>
          <span>답변상태</span>
          <span>조회</span>
        </div>
        {filteredInquiries.length === 0 ? (
          <div className="empty">등록된 상품문의가 없습니다.</div>
        ) : (
          filteredInquiries.map((item) => (
            <div className="table-row" key={item.id}>
              <span className="number">{item.number}</span>

              <div className="product">
                <img src={item.image} alt={item.productName} />

                <div>
                  <strong>{item.productName}</strong>
                </div>
              </div>

              <button type="button" className="inquiry-title">
                {item.isSecret && (
                  <svg
                    className="lock-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-label="비밀글"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"
                    />
                  </svg>
                )}

                <span className="title-text">{item.title}</span>
              </button>

              <span className="date">{item.date}</span>

              <span
                className={`status ${
                  item.status === "complete" ? "complete" : "waiting"
                }`}
              >
                {item.status === "complete" ? "답변완료" : "답변대기"}
              </span>

              <span className="views">{item.views}</span>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ProductInquiry;
