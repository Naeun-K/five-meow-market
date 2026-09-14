import { useEffect, useRef, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./ReturnPageStyle";

import logoEat from "../../assets/logo-eat.webp";
import logoPlay from "../../assets/logo-play.webp";
import logoRest from "../../assets/logo-rest.webp";
import logoHigh from "../../assets/logo-high.webp";
import logoClean from "../../assets/logo-clean.webp";
import logoMyshop from "../../assets/logo-myshop.webp";

const products = [
  {
    id: 1,
    orderNumber: "202609120001",
    name: "냥이가 다 해먹",
    option: "기본형",
    price: "59,000원",
    quantity: 1,
    image: "https://i.ibb.co/QjJZXCZv/4.webp",
  },
  {
    id: 2,
    orderNumber: "202609120002",
    name: "버튼 꾹꾹이",
    option: "핑크",
    price: "29,000원",
    quantity: 1,
    image: "https://i.ibb.co/N6bjxkch/3.webp",
  },
  {
    id: 3,
    orderNumber: "202609120003",
    name: "미끄럼틀 캣타워",
    option: "브라운",
    price: "129,000원",
    quantity: 1,
    image: "https://i.ibb.co/dsm3wd0T/4.webp",
  },
  {
    id: 4,
    orderNumber: "202609120004",
    name: "산뜻한 냥장실",
    option: "화이트",
    price: "89,000원",
    quantity: 1,
    image: "https://i.ibb.co/4rKBbsd/5.webp",
  },
];

const returnReasons = [
  "반품 사유 선택",
  "상품이 마음에 들지 않아요",
  "상품에 문제가 있어요",
  "상품이 설명과 달라요",
  "배송 중 상품이 파손되었어요",
  "오배송 또는 상품이 누락되었어요",
];

const catImages = [logoEat, logoPlay, logoRest, logoHigh, logoClean];

function ReturnPage() {
  // 전체 선택된 상품
  const [selectedProducts, setSelectedProducts] = useState(
    products.map((product) => product.id),
  );

  // 상품별 반품 사유
  const [selectedReasons, setSelectedReasons] = useState({});

  // 상품별 상세 사유
  const [detailReasons, setDetailReasons] = useState({});

  // 현재 열려 있는 드롭다운 상품 id
  const [openDropdown, setOpenDropdown] = useState(null);

  // 드롭다운 영역 참조
  const dropdownRefs = useRef({});

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const isInsideDropdown = Object.values(dropdownRefs.current).some(
        (element) => element && element.contains(event.target),
      );

      if (!isInsideDropdown) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // 전체 선택 / 전체 해제
  const handleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map((product) => product.id));
    }
  };

  // 개별 상품 선택 / 해제
  const handleSelectProduct = (productId) => {
    setSelectedProducts((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }

      return [...prev, productId];
    });
  };

  // 선택 삭제
  const handleDeleteSelected = () => {
    setSelectedProducts([]);
  };

  // 드롭다운 열기 / 닫기
  const handleToggleDropdown = (productId) => {
    setOpenDropdown((prev) => (prev === productId ? null : productId));
  };

  // 반품 사유 선택
  const handleSelectReason = (productId, reason) => {
    setSelectedReasons((prev) => ({
      ...prev,
      [productId]: reason,
    }));

    setOpenDropdown(null);
  };

  // 상세 사유 입력
  const handleDetailReasonChange = (productId, value) => {
    setDetailReasons((prev) => ({
      ...prev,
      [productId]: value,
    }));
  };

  // 반품 신청
  const handleSubmitReturn = () => {
    if (selectedProducts.length === 0) {
      alert("반품할 상품을 선택해주세요.");
      return;
    }

    const hasEmptyReason = selectedProducts.some(
      (productId) =>
        !selectedReasons[productId] ||
        selectedReasons[productId] === "반품 사유 선택",
    );

    if (hasEmptyReason) {
      alert("반품 사유를 선택해주세요.");
      return;
    }

    alert("반품 신청이 완료되었습니다.");
  };

  const isAllSelected = selectedProducts.length === products.length;

  return (
    <>
      <style>{styles}</style>

      <div className="return-page">
        <Header />

        <main className="return-main">
          {/* 페이지 헤더 */}
          <section className="return-page-header">
            <h1>반품 신청</h1>
            <p>반품하실 상품과 사유를 선택해주세요.</p>
          </section>

          {/* 상품 선택 영역 */}
          <section className="product-selection">
            <div className="product-selection-header">
              <div className="selection-title-area">
                <button
                  type="button"
                  className={`select-all-checkbox ${
                    isAllSelected ? "checked" : ""
                  }`}
                  onClick={handleSelectAll}
                  aria-label="전체 상품 선택"
                >
                  {isAllSelected ? "✓" : ""}
                </button>

                <strong>상품 선택</strong>

                <span>
                  {selectedProducts.length}/{products.length}
                </span>
              </div>

              {/* 선택 삭제 */}
              <div className="delete-button-area">
                <button
                  type="button"
                  className="delete-button"
                  onClick={handleDeleteSelected}
                >
                  선택 삭제
                </button>

                {/* 버튼에 호버했을 때만 나타나는 고양이 */}
                <div className="delete-cat-decoration">
                  <img src={logoMyshop} alt="" />
                </div>
              </div>
            </div>

            {/* 상품 목록 */}
            <div className="product-list">
              {products.map((product) => {
                const isSelected = selectedProducts.includes(product.id);
                const isOpen = openDropdown === product.id;

                const currentReason =
                  selectedReasons[product.id] || "반품 사유 선택";

                const currentDetailReason = detailReasons[product.id] || "";

                return (
                  <article className="return-product-card" key={product.id}>
                    {/* 상품 체크박스 */}
                    <button
                      type="button"
                      className={`product-checkbox ${
                        isSelected ? "checked" : ""
                      }`}
                      onClick={() => handleSelectProduct(product.id)}
                      aria-label={`${product.name} 선택`}
                    >
                      {isSelected ? "✓" : ""}
                    </button>

                    {/* 상품 이미지 + 상품 정보 */}
                    <div className="product-main-info">
                      <img
                        className="product-image"
                        src={product.image}
                        alt={product.name}
                      />

                      <div className="product-info">
                        <p className="product-order-number">
                          주문번호: {product.orderNumber}
                        </p>

                        <h2>{product.name}</h2>

                        <p className="product-option">{product.option}</p>

                        <strong className="product-price">
                          {product.price}
                        </strong>
                      </div>
                    </div>

                    {/* 수량 */}
                    <p className="product-quantity">{product.quantity}개</p>

                    {/* 반품 사유 영역 */}
                    <div
                      className="return-reason-area"
                      ref={(element) => {
                        dropdownRefs.current[product.id] = element;
                      }}
                    >
                      {/* 커스텀 드롭다운 */}
                      <div className="custom-dropdown">
                        <button
                          type="button"
                          className="dropdown-trigger"
                          onClick={() => handleToggleDropdown(product.id)}
                        >
                          <span>{currentReason}</span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-caret-down dropdown-arrow"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753.659" />
                          </svg>
                        </button>

                        {isOpen && (
                          <div className="dropdown-menu">
                            {returnReasons.map((reason) => (
                              <button
                                type="button"
                                className="dropdown-option"
                                key={reason}
                                onClick={() =>
                                  handleSelectReason(product.id, reason)
                                }
                              >
                                {reason}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* 상세 사유 */}
                      <div className="reason-textarea-wrapper">
                        <textarea
                          value={currentDetailReason}
                          onChange={(event) =>
                            handleDetailReasonChange(
                              product.id,
                              event.target.value,
                            )
                          }
                          placeholder="상세 사유를 입력해주세요. (선택)"
                          maxLength={100}
                        />

                        <span className="text-counter">
                          {currentDetailReason.length}/100
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* 반품 안내 */}
          <section className="return-notice">
            <div className="notice-content">
              <div className="notice-title-area">
                <span className="notice-icon">ⓘ</span>
                <h2>반품 안내</h2>
              </div>

              <ul>
                <li>
                  반품 접수 후 상품 회수까지 영업일 기준 2~5일 정도 소요됩니다.
                </li>
                <li>
                  상품의 사용 흔적이나 훼손이 있는 경우 반품이 어려울 수
                  있습니다.
                </li>
                <li>상품 회수 후 검수 과정을 거쳐 환불이 진행됩니다.</li>
              </ul>
            </div>

            {/* 반품 신청 버튼 + 고양이 5마리 */}
            <div className="notice-submit-area">
              <div className="cat-decoration">
                {catImages.map((catImage, index) => (
                  <img
                    src={catImage}
                    alt=""
                    className={`cat cat-${index + 1}`}
                    key={index}
                  />
                ))}
              </div>

              <button
                type="button"
                className="return-submit-button"
                onClick={handleSubmitReturn}
              >
                반품 신청하기
              </button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ReturnPage;
