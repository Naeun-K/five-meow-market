import { useEffect, useRef, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./CancelPageStyle";

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

const cancelReasons = [
  "취소 사유 선택",
  "단순 변심",
  "상품을 잘못 주문했어요",
  "다른 상품으로 주문하고 싶어요",
  "배송이 너무 늦어요",
  "상품 정보가 잘못되었어요",
];

const catImages = [logoEat, logoPlay, logoRest, logoHigh, logoClean];

function CancelPage() {
  const [selectedProducts, setSelectedProducts] = useState(
    products.map((product) => product.id),
  );

  const [selectedReasons, setSelectedReasons] = useState({});
  const [detailReasons, setDetailReasons] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdownRefs = useRef({});

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

  const handleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map((product) => product.id));
    }
  };

  const handleSelectProduct = (productId) => {
    setSelectedProducts((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }

      return [...prev, productId];
    });
  };

  const handleDeleteSelected = () => {
    setSelectedProducts([]);
  };

  const handleToggleDropdown = (productId) => {
    setOpenDropdown((prev) => (prev === productId ? null : productId));
  };

  const handleSelectReason = (productId, reason) => {
    setSelectedReasons((prev) => ({
      ...prev,
      [productId]: reason,
    }));

    setOpenDropdown(null);
  };

  const handleDetailReasonChange = (productId, value) => {
    setDetailReasons((prev) => ({
      ...prev,
      [productId]: value,
    }));
  };

  const handleSubmitCancel = () => {
    if (selectedProducts.length === 0) {
      alert("취소할 상품을 선택해주세요.");
      return;
    }

    const hasEmptyReason = selectedProducts.some(
      (productId) =>
        !selectedReasons[productId] ||
        selectedReasons[productId] === "취소 사유 선택",
    );

    if (hasEmptyReason) {
      alert("취소 사유를 선택해주세요.");
      return;
    }

    alert("주문 취소 신청이 완료되었습니다.");
  };

  const isAllSelected = selectedProducts.length === products.length;

  return (
    <>
      <style>{styles}</style>

      <div className="return-page">
        <Header />

        <main className="return-main">
          <section className="return-page-header">
            <h1>주문 취소</h1>
            <p>취소하실 상품과 사유를 선택해주세요.</p>
          </section>

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

              <div className="delete-button-area">
                <button
                  type="button"
                  className="delete-button"
                  onClick={handleDeleteSelected}
                >
                  선택 삭제
                </button>

                <div className="delete-cat-decoration">
                  <img src={logoMyshop} alt="" />
                </div>
              </div>
            </div>

            <div className="product-list">
              {products.map((product) => {
                const isSelected = selectedProducts.includes(product.id);
                const isOpen = openDropdown === product.id;

                const currentReason =
                  selectedReasons[product.id] || "취소 사유 선택";

                const currentDetailReason = detailReasons[product.id] || "";

                return (
                  <article className="return-product-card" key={product.id}>
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

                    <p className="product-quantity">{product.quantity}개</p>

                    <div
                      className="return-reason-area"
                      ref={(element) => {
                        dropdownRefs.current[product.id] = element;
                      }}
                    >
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
                            {cancelReasons.map((reason) => (
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

          <section className="return-notice">
            <div className="notice-content">
              <div className="notice-title-area">
                <span className="notice-icon">ⓘ</span>
                <h2>취소 안내</h2>
              </div>

              <ul>
                <li>
                  상품이 배송 준비 중이거나 배송 중인 경우 주문 취소가 어려울 수
                  있습니다.
                </li>
                <li>
                  결제 취소 후 카드사 및 결제 수단에 따라 환불까지 시간이 소요될
                  수 있습니다.
                </li>
                <li>
                  이미 배송이 시작된 상품은 반품 절차로 진행될 수 있습니다.
                </li>
              </ul>
            </div>

            <div className="notice-submit-area">
              <button
                type="button"
                className="return-submit-button"
                onClick={handleSubmitCancel}
              >
                주문 취소하기
              </button>

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
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default CancelPage;
