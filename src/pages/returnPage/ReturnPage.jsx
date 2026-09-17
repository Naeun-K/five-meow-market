import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";

import useToast from "../../hooks/useToast";

import styles from "../cancelPage/CancelPageStyle";

import logoEat from "../../assets/logo-eat.webp";
import logoPlay from "../../assets/logo-play.webp";
import logoRest from "../../assets/logo-rest.webp";
import logoHigh from "../../assets/logo-high.webp";
import logoClean from "../../assets/logo-clean.webp";

import { mockOrderData } from "../../mock/mockOrder";

const returnReasons = [
  "반품 사유 선택",
  "단순 변심",
  "상품이 마음에 들지 않아요",
  "상품에 문제가 있어요",
  "상품이 설명과 달라요",
  "배송 중 상품이 파손되었어요",
  "오배송 또는 상품이 누락되었어요",
];

const catImages = [logoEat, logoPlay, logoRest, logoHigh, logoClean];

const getItemKey = (item, index) => {
  return item.orderItemId ?? item.itemId ?? item.productId ?? String(index);
};

function ReturnPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { showToast } = useToast();

  const orderId = searchParams.get("orderId");

  const order =
    mockOrderData.find(
      (mockOrder) => String(mockOrder.orderId) === String(orderId),
    ) ?? null;

  const orderItems = order?.items ?? [];

  const initialSelectedProducts = orderItems.map((item, index) =>
    getItemKey(item, index),
  );

  const [selectedProducts, setSelectedProducts] = useState(
    initialSelectedProducts,
  );

  const [selectedReason, setSelectedReason] = useState("반품 사유 선택");

  const [detailReason, setDetailReason] = useState("");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const isAllSelected =
    orderItems.length > 0 && selectedProducts.length === orderItems.length;

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedProducts([]);
      return;
    }

    setSelectedProducts(
      orderItems.map((item, index) => getItemKey(item, index)),
    );
  };

  const handleSelectProduct = (itemKey) => {
    setSelectedProducts((prev) => {
      if (prev.includes(itemKey)) {
        return prev.filter((key) => key !== itemKey);
      }

      return [...prev, itemKey];
    });
  };

  const handleDeleteSelected = () => {
    setSelectedProducts([]);
  };

  const handleSelectReason = (reason) => {
    setSelectedReason(reason);
    setIsDropdownOpen(false);
  };

  const getSelectedItems = () => {
    return orderItems
      .map((item, index) => ({
        item,
        itemKey: getItemKey(item, index),
      }))
      .filter(({ itemKey }) => selectedProducts.includes(itemKey));
  };

  const handleSubmitReturn = () => {
    if (isSubmitting) {
      return;
    }

    if (!order) {
      showToast("반품할 주문 정보를 확인할 수 없습니다.", "error");
      return;
    }

    if (order.status !== "DELIVERED") {
      showToast("배송완료 상태의 주문만 반품 신청할 수 있습니다.", "error");
      return;
    }

    if (selectedProducts.length === 0) {
      showToast("반품할 상품을 선택해주세요.", "error");
      return;
    }

    if (selectedReason === "반품 사유 선택") {
      showToast("반품 사유를 선택해주세요.", "error");
      return;
    }

    const selectedItems = getSelectedItems();

    const scope = isAllSelected ? "ALL" : "PARTIAL";

    const mockClaimData = {
      claimId: `MOCK-RETURN-${Date.now()}`,
      orderId: order.orderId,
      type: "RETURN",
      scope,
      status: "RETURN_REQUESTED",
      reason: selectedReason,
      detailReason: detailReason.trim() || null,
      items: selectedItems.map(({ item }) => ({
        productId: item.productId,
        name: item.name,
        thumbnail: item.thumbnail,
        quantity: Number(item.quantity ?? 1),
        price: Number(item.price ?? 0),
        status: "RETURN_REQUESTED",
      })),
      createdAt: new Date().toISOString(),
      isMock: true,
    };

    setIsSubmitting(true);

    console.log("Mock 반품 신청:", mockClaimData);

    showToast(
      isAllSelected
        ? "전체 상품 반품 신청이 완료되었습니다."
        : `${selectedProducts.length}개 상품의 반품 신청이 완료되었습니다.`,
      "success",
    );

    navigate("/mypage/orders", {
      replace: true,
      state: {
        claimCreated: true,
        isMock: true,
        claimType: "RETURN",
        orderId: order.orderId,
        scope,
        claim: mockClaimData,
      },
    });
  };

  const formatPrice = (price) => {
    return `${Number(price ?? 0).toLocaleString("ko-KR")}원`;
  };

  if (!orderId) {
    return (
      <>
        <style>{styles}</style>

        <div className="return-page">
          <Header />

          <main className="return-main">
            <section className="return-page-header">
              <h1>상품 반품</h1>

              <p>주문번호를 확인할 수 없습니다.</p>

              <button
                type="button"
                className="return-submit-button"
                onClick={() => navigate("/mypage/orders")}
              >
                주문내역으로 돌아가기
              </button>
            </section>
          </main>

          <Footer />
        </div>
      </>
    );
  }

  if (!order) {
    return (
      <>
        <style>{styles}</style>

        <div className="return-page">
          <Header />

          <main className="return-main">
            <section className="return-page-header">
              <h1>상품 반품</h1>

              <p>해당 Mock 주문 정보를 찾을 수 없습니다.</p>

              <button
                type="button"
                className="return-submit-button"
                onClick={() => navigate("/mypage/orders")}
              >
                주문내역으로 돌아가기
              </button>
            </section>
          </main>

          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>

      <div className="return-page">
        <Header />

        <main className="return-main">
          <section className="return-page-header">
            <h1>상품 반품</h1>

            <p>반품할 상품을 선택하고 반품 사유를 입력해주세요.</p>
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
                  aria-pressed={isAllSelected}
                >
                  {isAllSelected ? "✓" : ""}
                </button>

                <strong>상품 선택</strong>

                <span>
                  {selectedProducts.length}/{orderItems.length}
                </span>

                {selectedProducts.length > 0 && (
                  <span
                    className={`cancel-scope-badge ${
                      isAllSelected ? "all" : "partial"
                    }`}
                  >
                    {isAllSelected ? "전체 반품" : "부분 반품"}
                  </span>
                )}
              </div>

              <div className="delete-button-area">
                <button
                  type="button"
                  className="delete-button"
                  onClick={handleDeleteSelected}
                  disabled={selectedProducts.length === 0}
                >
                  선택 해제
                </button>
              </div>
            </div>

            <div className="product-list">
              {orderItems.map((item, index) => {
                const itemKey = getItemKey(item, index);

                const isSelected = selectedProducts.includes(itemKey);

                return (
                  <article
                    className={`return-product-card ${
                      isSelected ? "is-selected" : "is-unselected"
                    }`}
                    key={itemKey}
                  >
                    <button
                      type="button"
                      className={`product-checkbox ${
                        isSelected ? "checked" : ""
                      }`}
                      onClick={() => handleSelectProduct(itemKey)}
                      aria-label={`${item.name} ${
                        isSelected ? "반품 대상에서 제외" : "반품 대상으로 선택"
                      }`}
                      aria-pressed={isSelected}
                    >
                      {isSelected ? "✓" : ""}
                    </button>

                    <div className="product-main-info">
                      {item.thumbnail && (
                        <img
                          className="product-image"
                          src={item.thumbnail}
                          alt={item.name}
                        />
                      )}

                      <div className="product-info">
                        <p className="product-order-number">
                          주문번호: {order.orderId}
                        </p>

                        <h2>{item.name}</h2>

                        {item.option && (
                          <p className="product-option">{item.option}</p>
                        )}

                        <strong className="product-price">
                          {formatPrice(item.price)}
                        </strong>
                      </div>
                    </div>

                    <p className="product-quantity">{item.quantity ?? 1}개</p>

                    <div className="product-cancel-status">
                      {isSelected ? (
                        <span className="selected">반품 대상</span>
                      ) : (
                        <span className="unselected">반품 제외</span>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            <div
              className={`return-reason-area ${
                selectedProducts.length === 0 ? "is-disabled" : ""
              }`}
              ref={dropdownRef}
            >
              <div className="reason-title-area">
                <strong>반품 사유</strong>

                {selectedProducts.length > 0 && (
                  <span>
                    {isAllSelected
                      ? "전체 주문에 적용됩니다."
                      : `선택한 ${selectedProducts.length}개 상품에 적용됩니다.`}
                  </span>
                )}
              </div>

              <div className="custom-dropdown">
                <button
                  type="button"
                  className="dropdown-trigger"
                  aria-expanded={isDropdownOpen}
                  disabled={selectedProducts.length === 0}
                  onClick={() => setIsDropdownOpen((previous) => !previous)}
                >
                  <span>{selectedReason}</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-caret-down dropdown-arrow"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753.659" />
                  </svg>
                </button>

                {isDropdownOpen && selectedProducts.length > 0 && (
                  <div className="dropdown-menu">
                    {returnReasons.map((reason) => (
                      <button
                        type="button"
                        className="dropdown-option"
                        key={reason}
                        onClick={() => handleSelectReason(reason)}
                      >
                        {reason}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="reason-textarea-wrapper">
                <textarea
                  value={detailReason}
                  disabled={selectedProducts.length === 0}
                  onChange={(event) => setDetailReason(event.target.value)}
                  placeholder={
                    selectedProducts.length === 0
                      ? "반품할 상품을 먼저 선택해주세요."
                      : "상세 사유를 입력해주세요. (선택)"
                  }
                  maxLength={100}
                />

                <span className="text-counter">{detailReason.length}/100</span>
              </div>
            </div>
          </section>

          <section className="return-notice">
            <div className="notice-content">
              <div className="notice-title-area">
                <span className="notice-icon">ⓘ</span>

                <h2>반품 안내</h2>
              </div>

              <ul>
                <li>배송완료 상태의 상품만 반품 신청할 수 있습니다.</li>

                <li>전체 상품을 선택하면 전체 반품으로 처리됩니다.</li>

                <li>일부 상품만 선택하면 선택한 상품만 부분 반품됩니다.</li>

                <li>체크되지 않은 상품은 반품 대상에 포함되지 않습니다.</li>

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

            <div className="notice-submit-area">
              {selectedProducts.length > 0 && (
                <div className="cancel-summary">
                  <strong>{isAllSelected ? "전체 반품" : "부분 반품"}</strong>

                  <span>
                    {isAllSelected
                      ? `전체 ${orderItems.length}개 상품`
                      : `전체 ${orderItems.length}개 중 ${selectedProducts.length}개 상품`}
                  </span>
                </div>
              )}

              <button
                type="button"
                className="return-submit-button"
                onClick={handleSubmitReturn}
                disabled={
                  isSubmitting ||
                  selectedProducts.length === 0 ||
                  order.status !== "DELIVERED"
                }
              >
                {isSubmitting
                  ? "반품 신청 중..."
                  : order.status !== "DELIVERED"
                    ? "반품할 수 없는 주문"
                    : selectedProducts.length === 0
                      ? "반품할 상품을 선택해주세요"
                      : isAllSelected
                        ? "전체 상품 반품하기"
                        : `선택 상품 ${selectedProducts.length}개 반품하기`}
              </button>

              <div className="cat-decoration">
                {catImages.map((catImage, index) => (
                  <img
                    src={catImage}
                    alt=""
                    className={`cat cat-${index + 1}`}
                    key={catImage}
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

export default ReturnPage;
