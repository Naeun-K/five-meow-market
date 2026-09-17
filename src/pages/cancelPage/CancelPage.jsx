

































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";

import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";




import styles from "./CancelPageStyle";

import logoEat from "../../assets/logo-eat.webp";
import logoPlay from "../../assets/logo-play.webp";
import logoRest from "../../assets/logo-rest.webp";
import logoHigh from "../../assets/logo-high.webp";
import logoClean from "../../assets/logo-clean.webp";
import { getOrder } from "../../services/orderServices";
import { createClaim } from "../../services/claimServices";

const cancelReasons = [
  "취소 사유 선택",
  "단순 변심",
  "상품을 잘못 주문했어요",
  "다른 상품으로 주문하고 싶어요",
  "배송이 너무 늦어요",
  "상품 정보가 잘못되었어요",
];

const catImages = [logoEat, logoPlay, logoRest, logoHigh, logoClean];

const getItemKey = (item, index) => {
  return (
    item.orderItemId ??
    item.itemId ??
    item.productId ??
    item.product?.productId ??
    String(index)
  );
};

const getProductId = (item) => {
  return item.productId ?? item.product?.productId ?? "";
};

function CancelPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { accessToken, isAuthLoading } = useAuth();
  const { showToast } = useToast();

  const orderId = searchParams.get("orderId");

  const [order, setOrder] = useState(null);

  
  const [selectedProducts, setSelectedProducts] = useState([]);

  
  const [selectedReason, setSelectedReason] = useState("취소 사유 선택");

  const [detailReason, setDetailReason] = useState("");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dropdownRef = useRef(null);

  
  useEffect(() => {
    if (isAuthLoading) {
      return;
    }

    if (!accessToken) {
      navigate("/login", {
        replace: true,
        state: {
          from: orderId
            ? `/claims/cancel?orderId=${encodeURIComponent(orderId)}`
            : "/claims/cancel",
        },
      });

      return;
    }

    if (!orderId) {
      return;
    }

    let isCancelled = false;

    getOrder(orderId, accessToken)
      .then((response) => {
        if (isCancelled) {
          return;
        }

        if (!response.success || !response.order) {
          throw new Error(
            response.message || "주문 정보를 불러오지 못했습니다.",
          );
        }

        const fetchedOrder = response.order;

        setOrder(fetchedOrder);

        
        setSelectedProducts(
          (fetchedOrder.items ?? []).map((item, index) =>
            getItemKey(item, index),
          ),
        );

        setErrorMessage("");
      })
      .catch((error) => {
        if (isCancelled) {
          return;
        }

        setErrorMessage(
          error.message || "주문 정보를 불러오는 중 문제가 발생했습니다.",
        );
      })
      .finally(() => {
        if (!isCancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [accessToken, isAuthLoading, navigate, orderId]);

  
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

  const orderItems = order?.items ?? [];

  
  const isAllSelected =
    orderItems.length > 0 && selectedProducts.length === orderItems.length;

  
  

  
  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedProducts([]);

      return;
    }

    const allItemKeys = orderItems.map((item, index) =>
      getItemKey(item, index),
    );

    setSelectedProducts(allItemKeys);
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

  
  const handleSubmitCancel = async () => {
    if (!orderId || !order) {
      showToast("주문 정보를 확인할 수 없습니다.", "error");

      return;
    }

    if (order.status !== "PAYMENT_COMPLETED") {
      showToast("결제완료 상태의 주문만 취소할 수 있습니다.", "error");

      return;
    }

    
    if (selectedProducts.length === 0) {
      showToast("취소할 상품을 선택해주세요.", "error");

      return;
    }

    
    if (selectedReason === "취소 사유 선택") {
      showToast("취소 사유를 선택해주세요.", "error");

      return;
    }

    const selectedItems = getSelectedItems();

    
    const scope = isAllSelected ? "ALL" : "PARTIAL";

    
    const claimItems = selectedItems.map(({ item }) => ({
      productId: getProductId(item),
      quantity: Number(item.quantity ?? 1),
    }));

    
    if (scope === "PARTIAL" && claimItems.some((item) => !item.productId)) {
      showToast("취소할 상품 정보를 확인할 수 없습니다.", "error");

      return;
    }

    try {
      setIsSubmitting(true);

      

      const requestData = {
        orderId,

        type: "CANCEL",

        scope,

        
        ...(scope === "PARTIAL" && {
          items: claimItems,
        }),

        reason: selectedReason,

        detailReason: detailReason.trim() || null,
      };

      console.log("취소 신청 Request:", requestData);

      const response = await createClaim(requestData, accessToken);

      showToast(
        response.message ||
          (scope === "ALL"
            ? "전체 주문 취소 신청이 완료되었습니다."
            : `${selectedProducts.length}개 상품의 취소 신청이 완료되었습니다.`),
        "success",
      );

      navigate("/mypage/orders", {
        replace: true,

        state: {
          claimCreated: true,

          orderId,

          scope,
        },
      });
    } catch (error) {
      console.error("주문 취소 신청 실패:", error);

      showToast(
        error.message || "주문 취소 신청 중 문제가 발생했습니다.",
        "error",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPrice = (price) => {
    return `${Number(price ?? 0).toLocaleString("ko-KR")}원`;
  };

  
  if (isAuthLoading || isLoading) {
    return (
      <>
        <style>{styles}</style>

        <div className="return-page">
          <Header />

          <main className="return-main">
            <Loader />
          </main>

          <Footer />
        </div>
      </>
    );
  }

  
  if (errorMessage || !order) {
    return (
      <>
        <style>{styles}</style>

        <div className="return-page">
          <Header />

          <main className="return-main">
            <section className="return-page-header">
              <h1>주문 취소</h1>

              <p>{errorMessage || "주문 정보를 찾을 수 없습니다."}</p>

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
          {}
          <section className="return-page-header">
            <h1>주문 취소</h1>

            <p>취소할 상품을 선택하고 취소 사유를 입력해주세요.</p>
          </section>

          {}
          <section className="product-selection">
            <div className="product-selection-header">
              <div className="selection-title-area">
                {}
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

                {}
                {selectedProducts.length > 0 && (
                  <span
                    className={`cancel-scope-badge ${
                      isAllSelected ? "all" : "partial"
                    }`}
                  >
                    {isAllSelected ? "전체 취소" : "부분 취소"}
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

            {}
            <div className="product-list">
              {orderItems.map((item, index) => {
                const itemKey = getItemKey(item, index);

                const productName =
                  item.name ??
                  item.productName ??
                  item.product?.name ??
                  "상품명 없음";

                const productImage =
                  item.thumbnail ??
                  item.image ??
                  item.product?.thumbnail ??
                  item.product?.image ??
                  "";

                const productOption =
                  item.option ?? item.optionName ?? item.product?.option ?? "";

                const productPrice = item.price ?? item.product?.price ?? 0;

                const isSelected = selectedProducts.includes(itemKey);

                return (
                  <article
                    className={`return-product-card ${
                      isSelected ? "is-selected" : "is-unselected"
                    }`}
                    key={itemKey}
                  >
                    {}
                    <button
                      type="button"
                      className={`product-checkbox ${
                        isSelected ? "checked" : ""
                      }`}
                      onClick={() => handleSelectProduct(itemKey)}
                      aria-label={`${productName} ${
                        isSelected ? "취소 대상에서 제외" : "취소 대상으로 선택"
                      }`}
                      aria-pressed={isSelected}
                    >
                      {isSelected ? "✓" : ""}
                    </button>

                    {}
                    <div className="product-main-info">
                      {productImage && (
                        <img
                          className="product-image"
                          src={productImage}
                          alt={productName}
                        />
                      )}

                      <div className="product-info">
                        <p className="product-order-number">
                          주문번호: {order.orderNumber ?? order.orderId}
                        </p>

                        <h2>{productName}</h2>

                        {productOption && (
                          <p className="product-option">{productOption}</p>
                        )}

                        <strong className="product-price">
                          {formatPrice(productPrice)}
                        </strong>
                      </div>
                    </div>

                    <p className="product-quantity">{item.quantity ?? 1}개</p>

                    {}
                    <div className="product-cancel-status">
                      {isSelected ? (
                        <span className="selected">취소 대상</span>
                      ) : (
                        <span className="unselected">취소 제외</span>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            {}
            <div
              className={`return-reason-area ${
                selectedProducts.length === 0 ? "is-disabled" : ""
              }`}
              ref={dropdownRef}
            >
              <div className="reason-title-area">
                <strong>취소 사유</strong>

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
                    {cancelReasons.map((reason) => (
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
                      ? "취소할 상품을 먼저 선택해주세요."
                      : "상세 사유를 입력해주세요. (선택)"
                  }
                  maxLength={100}
                />

                <span className="text-counter">{detailReason.length}/100</span>
              </div>
            </div>
          </section>

          {}
          <section className="return-notice">
            <div className="notice-content">
              <div className="notice-title-area">
                <span className="notice-icon">ⓘ</span>

                <h2>취소 안내</h2>
              </div>

              <ul>
                <li>결제완료 상태의 상품만 취소할 수 있습니다.</li>

                <li>전체 상품을 선택하면 전체 취소로 처리됩니다.</li>

                <li>일부 상품만 선택하면 선택한 상품만 부분 취소됩니다.</li>

                <li>체크되지 않은 상품은 취소 대상에 포함되지 않습니다.</li>

                <li>
                  주문 시 사용한 적립금은 환불 대상 범위에 따라 우선 복원됩니다.
                </li>

                <li>
                  적립금 환불 후 남은 금액은 실제 결제수단으로 환불됩니다.
                </li>

                <li>이미 배송이 시작된 상품은 반품 절차로 진행해야 합니다.</li>
              </ul>
            </div>

            <div className="notice-submit-area">
              {}
              {selectedProducts.length > 0 && (
                <div className="cancel-summary">
                  <strong>{isAllSelected ? "전체 취소" : "부분 취소"}</strong>

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
                onClick={handleSubmitCancel}
                disabled={
                  isSubmitting ||
                  order.status !== "PAYMENT_COMPLETED" ||
                  selectedProducts.length === 0
                }
              >
                {isSubmitting
                  ? "취소 신청 중..."
                  : order.status !== "PAYMENT_COMPLETED"
                    ? "취소할 수 없는 주문"
                    : selectedProducts.length === 0
                      ? "취소할 상품을 선택해주세요"
                      : isAllSelected
                        ? "전체 주문 취소하기"
                        : `선택 상품 ${selectedProducts.length}개 취소하기`}
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

export default CancelPage;
