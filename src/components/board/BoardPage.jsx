import {
  BoardContainer,
  BoardHeader,
  BoardRow,
  ProductInfo,
  Rating,
} from "./BoardPageStyle";

const boardConfig = {
  notice: {
    title: "공지사항",
    columns: [
      { key: "number", label: "번호" },
      { key: "title", label: "제목" },
      { key: "writer", label: "작성자" },
      { key: "date", label: "작성일" },
      { key: "views", label: "조회" },
    ],
  },

  review: {
    title: "제품후기",
    columns: [
      { key: "product", label: "상품정보" },
      { key: "title", label: "내용" },
      { key: "writer", label: "작성자" },
      { key: "date", label: "작성일" },
      { key: "rating", label: "" },
    ],
  },

  qna: {
    title: "Q&A",
    columns: [
      { key: "number", label: "번호" },
      { key: "title", label: "제목" },
      { key: "writer", label: "작성자" },
      { key: "date", label: "작성일" },
      { key: "views", label: "조회" },
    ],
  },
};

export default function BoardPage({ type, data = [] }) {
  const config = boardConfig[type];

  if (!config) {
    return null;
  }

  return (
    <BoardContainer boardType={type}>
      <h2>{config.title}</h2>

      <BoardHeader boardType={type}>
        {config.columns.map((column) => (
          <span key={column.key} className={`${column.key}-header`}>
            {column.label}
          </span>
        ))}
      </BoardHeader>

      <div className="board-body">
        {data.map((item) => (
          <BoardRow key={item.id} boardType={type}>
            {config.columns.map((column) => (
              <BoardCell key={column.key} column={column.key} item={item} />
            ))}
          </BoardRow>
        ))}
      </div>
    </BoardContainer>
  );
}

function BoardCell({ column, item }) {
  switch (column) {
    case "number":
      return (
        <span className={`number-cell ${item.isNotice ? "notice-number" : ""}`}>
          {item.isNotice ? "공지" : item.number}
        </span>
      );

    case "product":
      return (
        <ProductInfo className="product-cell">
          <img
            src={item.product?.thumbnail}
            alt={item.product?.name || "상품 이미지"}
          />
        </ProductInfo>
      );

    case "title":
      return (
        <div className="title title-cell">
          <div className="title-main">
            <span className="title-text">{item.title}</span>

            {item.isNew && <strong className="new-badge">NEW</strong>}

            {item.isSecret && (
              <span className="secret svg-container" aria-label="비밀글">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"
                  />
                </svg>
              </span>
            )}

            {item.commentCount > 0 && (
              <span className="comment-count">[{item.commentCount}]</span>
            )}
          </div>

          <span className="mobile-date">{item.date}</span>
        </div>
      );

    case "writer":
      return <span className="writer-cell">{item.writer}</span>;

    case "date":
      return <span className="date date-cell">{item.date}</span>;

    case "views":
      return <span className="views views-cell">{item.views}</span>;

    case "rating":
      return (
        <Rating className="rating-cell" aria-label={`평점 ${item.rating}점`}>
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className="svg-container">
              {index < item.rating ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696-.83 4.73z" />
                </svg>
              )}
            </span>
          ))}
        </Rating>
      );

    default:
      return null;
  }
}
