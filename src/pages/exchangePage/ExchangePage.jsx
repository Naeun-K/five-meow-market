// import { useEffect, useRef, useState } from "react";
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import styles from "./ExchangePageStyle";

// import logoEat from "../../assets/logo-eat.webp";
// import logoPlay from "../../assets/logo-play.webp";
// import logoRest from "../../assets/logo-rest.webp";
// import logoHigh from "../../assets/logo-high.webp";
// import logoClean from "../../assets/logo-clean.webp";
// import logoMyshop from "../../assets/logo-myshop.webp";

// const products = [
//   {
//     id: 1,
//     orderNumber: "202609120001",
//     name: "냥이가 다 해먹",
//     option: "기본형",
//     price: "59,000원",
//     quantity: 1,
//     image: "https://i.ibb.co/QjJZXCZv/4.webp",
//   },
//   {
//     id: 2,
//     orderNumber: "202609120002",
//     name: "버튼 꾹꾹이",
//     option: "핑크",
//     price: "29,000원",
//     quantity: 1,
//     image: "https://i.ibb.co/N6bjxkch/3.webp",
//   },
//   {
//     id: 3,
//     orderNumber: "202609120003",
//     name: "미끄럼틀 캣타워",
//     option: "브라운",
//     price: "129,000원",
//     quantity: 1,
//     image: "https://i.ibb.co/dsm3wd0T/4.webp",
//   },
//   {
//     id: 4,
//     orderNumber: "202609120004",
//     name: "산뜻한 냥장실",
//     option: "화이트",
//     price: "89,000원",
//     quantity: 1,
//     image: "https://i.ibb.co/4rKBbsd/5.webp",
//   },
// ];

// const exchangeReasons = [
//   "교환 사유 선택",
//   "단순 변심",
//   "상품에 문제가 있어요",
//   "상품이 설명과 달라요",
//   "배송 중 상품이 파손되었어요",
//   "오배송 또는 상품이 누락되었어요",
// ];

// const catImages = [logoEat, logoPlay, logoRest, logoHigh, logoClean];

// function ExchangePage() {
//   const [selectedProducts, setSelectedProducts] = useState(
//     products.map((product) => product.id),
//   );

//   const [selectedReasons, setSelectedReasons] = useState({});
//   const [detailReasons, setDetailReasons] = useState({});
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const dropdownRefs = useRef({});

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       const isInsideDropdown = Object.values(dropdownRefs.current).some(
//         (element) => element && element.contains(event.target),
//       );

//       if (!isInsideDropdown) {
//         setOpenDropdown(null);
//       }
//     };

//     document.addEventListener("mousedown", handleOutsideClick);

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, []);

//   const handleSelectAll = () => {
//     if (selectedProducts.length === products.length) {
//       setSelectedProducts([]);
//     } else {
//       setSelectedProducts(products.map((product) => product.id));
//     }
//   };

//   const handleSelectProduct = (productId) => {
//     setSelectedProducts((prev) => {
//       if (prev.includes(productId)) {
//         return prev.filter((id) => id !== productId);
//       }

//       return [...prev, productId];
//     });
//   };

//   const handleDeleteSelected = () => {
//     setSelectedProducts([]);
//   };

//   const handleToggleDropdown = (productId) => {
//     setOpenDropdown((prev) => (prev === productId ? null : productId));
//   };

//   const handleSelectReason = (productId, reason) => {
//     setSelectedReasons((prev) => ({
//       ...prev,
//       [productId]: reason,
//     }));

//     setOpenDropdown(null);
//   };

//   const handleDetailReasonChange = (productId, value) => {
//     setDetailReasons((prev) => ({
//       ...prev,
//       [productId]: value,
//     }));
//   };

//   const handleSubmitExchange = () => {
//     if (selectedProducts.length === 0) {
//       alert("교환할 상품을 선택해주세요.");
//       return;
//     }

//     const hasEmptyReason = selectedProducts.some(
//       (productId) =>
//         !selectedReasons[productId] ||
//         selectedReasons[productId] === "교환 사유 선택",
//     );

//     if (hasEmptyReason) {
//       alert("교환 사유를 선택해주세요.");
//       return;
//     }

//     alert("상품 교환 신청이 완료되었습니다.");
//   };

//   const isAllSelected = selectedProducts.length === products.length;

//   return (
//     <>
//       <style>{styles}</style>

//       <div className="return-page">
//         <Header />

//         <main className="return-main">
//           <section className="return-page-header">
//             <h1>상품 교환</h1>
//             <p>교환하실 상품과 사유를 선택해주세요.</p>
//           </section>

//           <section className="product-selection">
//             <div className="product-selection-header">
//               <div className="selection-title-area">
//                 <button
//                   type="button"
//                   className={`select-all-checkbox ${
//                     isAllSelected ? "checked" : ""
//                   }`}
//                   onClick={handleSelectAll}
//                   aria-label="전체 상품 선택"
//                 >
//                   {isAllSelected ? "✓" : ""}
//                 </button>

//                 <strong>상품 선택</strong>

//                 <span>
//                   {selectedProducts.length}/{products.length}
//                 </span>
//               </div>

//               <div className="delete-button-area">
//                 <button
//                   type="button"
//                   className="delete-button"
//                   onClick={handleDeleteSelected}
//                 >
//                   선택 삭제
//                 </button>

//                 <div className="delete-cat-decoration">
//                   <img src={logoMyshop} alt="" />
//                 </div>
//               </div>
//             </div>

//             <div className="product-list">
//               {products.map((product) => {
//                 const isSelected = selectedProducts.includes(product.id);
//                 const isOpen = openDropdown === product.id;

//                 const currentReason =
//                   selectedReasons[product.id] || "교환 사유 선택";

//                 const currentDetailReason = detailReasons[product.id] || "";

//                 return (
//                   <article className="return-product-card" key={product.id}>
//                     <button
//                       type="button"
//                       className={`product-checkbox ${
//                         isSelected ? "checked" : ""
//                       }`}
//                       onClick={() => handleSelectProduct(product.id)}
//                       aria-label={`${product.name} 선택`}
//                     >
//                       {isSelected ? "✓" : ""}
//                     </button>

//                     <div className="product-main-info">
//                       <img
//                         className="product-image"
//                         src={product.image}
//                         alt={product.name}
//                       />

//                       <div className="product-info">
//                         <p className="product-order-number">
//                           주문번호: {product.orderNumber}
//                         </p>

//                         <h2>{product.name}</h2>

//                         <p className="product-option">{product.option}</p>

//                         <strong className="product-price">
//                           {product.price}
//                         </strong>
//                       </div>
//                     </div>

//                     <p className="product-quantity">{product.quantity}개</p>

//                     <div
//                       className="return-reason-area"
//                       ref={(element) => {
//                         dropdownRefs.current[product.id] = element;
//                       }}
//                     >
//                       <div className="custom-dropdown">
//                         <button
//                           type="button"
//                           className="dropdown-trigger"
//                           onClick={() => handleToggleDropdown(product.id)}
//                         >
//                           <span>{currentReason}</span>

//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="12"
//                             height="12"
//                             fill="currentColor"
//                             className="bi bi-caret-down dropdown-arrow"
//                             viewBox="0 0 16 16"
//                           >
//                             <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753.659" />
//                           </svg>
//                         </button>

//                         {isOpen && (
//                           <div className="dropdown-menu">
//                             {exchangeReasons.map((reason) => (
//                               <button
//                                 type="button"
//                                 className="dropdown-option"
//                                 key={reason}
//                                 onClick={() =>
//                                   handleSelectReason(product.id, reason)
//                                 }
//                               >
//                                 {reason}
//                               </button>
//                             ))}
//                           </div>
//                         )}
//                       </div>

//                       <div className="reason-textarea-wrapper">
//                         <textarea
//                           value={currentDetailReason}
//                           onChange={(event) =>
//                             handleDetailReasonChange(
//                               product.id,
//                               event.target.value,
//                             )
//                           }
//                           placeholder="상세 사유를 입력해주세요. (선택)"
//                           maxLength={100}
//                         />

//                         <span className="text-counter">
//                           {currentDetailReason.length}/100
//                         </span>
//                       </div>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>
//           </section>

//           <section className="return-notice">
//             <div className="notice-content">
//               <div className="notice-title-area">
//                 <span className="notice-icon">ⓘ</span>
//                 <h2>교환 안내</h2>
//               </div>

//               <ul>
//                 <li>
//                   교환 신청 후 상품 확인까지 영업일 기준 1~3일 정도 소요될 수
//                   있습니다.
//                 </li>
//                 <li>
//                   상품 상태 및 교환 사유에 따라 교환이 어려울 수 있습니다.
//                 </li>
//                 <li>
//                   교환할 상품은 받으신 상태 그대로 포장하여 보내주시기 바랍니다.
//                 </li>
//               </ul>
//             </div>

//             <div className="notice-submit-area">
//               <button
//                 type="button"
//                 className="return-submit-button"
//                 onClick={handleSubmitExchange}
//               >
//                 교환 신청하기
//               </button>

//               <div className="cat-decoration">
//                 {catImages.map((catImage, index) => (
//                   <img
//                     src={catImage}
//                     alt=""
//                     className={`cat cat-${index + 1}`}
//                     key={index}
//                   />
//                 ))}
//               </div>
//             </div>
//           </section>
//         </main>

//         <Footer />
//       </div>
//     </>
//   );
// }

// export default ExchangePage;

import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";

import styles from "./ExchangePageStyle";

import logoEat from "../../assets/logo-eat.webp";
import logoPlay from "../../assets/logo-play.webp";
import logoRest from "../../assets/logo-rest.webp";
import logoHigh from "../../assets/logo-high.webp";
import logoClean from "../../assets/logo-clean.webp";
import logoMyshop from "../../assets/logo-myshop.webp";

import { getOrder } from "../../services/orderServices";
import { createClaim } from "../../services/claimServices";

import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
import Header from "../../components/header/header";

const exchangeReasons = [
  "교환 사유 선택",
  "단순 변심",
  "상품에 문제가 있어요",
  "상품이 설명과 달라요",
  "배송 중 상품이 파손되었어요",
  "오배송 또는 상품이 누락되었어요",
];

const catImages = [logoEat, logoPlay, logoRest, logoHigh, logoClean];

function ExchangePage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const { isLoggedIn, accessToken, isAuthLoading } = useAuth();

  const { showToast } = useToast();

  const orderId = searchParams.get("orderId");

  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const [selectedReasons, setSelectedReasons] = useState({});

  const [detailReasons, setDetailReasons] = useState({});

  const [openDropdown, setOpenDropdown] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const dropdownRefs = useRef({});

  // ========================================
  // 주문 조회
  //
  // GET /orders/:orderId
  // ========================================
  useEffect(() => {
    if (isAuthLoading || !isLoggedIn || !accessToken || !orderId) {
      return;
    }

    let isMounted = true;

    const fetchOrder = async () => {
      try {
        const result = await getOrder(orderId, accessToken);

        if (!result.success) {
          throw new Error(result.message || "주문 정보를 불러오지 못했습니다.");
        }

        if (!isMounted) {
          return;
        }

        const order = result.order;

        const orderItems = order?.items ?? [];

        const mappedProducts = orderItems.map((item) => ({
          id: item.orderItemId ?? item.productId,

          orderItemId: item.orderItemId ?? item.productId,

          productId: item.productId,

          orderNumber: order.orderId ?? orderId,

          name: item.name ?? item.productName ?? "",

          option: item.option ?? item.optionName ?? "기본형",

          price: item.price ?? item.unitPrice ?? 0,

          quantity: item.quantity ?? 1,

          image: item.thumbnail ?? item.image ?? "",
        }));

        setProducts(mappedProducts);

        // 최초 진입 시 전체 상품 선택
        setSelectedProducts(mappedProducts.map((product) => product.id));
      } catch (error) {
        console.error("교환 주문 조회 실패:", error);

        if (!isMounted) {
          return;
        }

        showToast(error.message || "주문 정보를 불러오지 못했습니다.", false);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchOrder();

    return () => {
      isMounted = false;
    };
  }, [orderId, accessToken, isLoggedIn, isAuthLoading, showToast]);

  // ========================================
  // 드롭다운 외부 클릭
  // ========================================
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

  // ========================================
  // 전체 선택 / 전체 해제
  // ========================================
  const handleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([]);

      return;
    }

    setSelectedProducts(products.map((product) => product.id));
  };

  // ========================================
  // 개별 상품 선택
  // ========================================
  const handleSelectProduct = (productId) => {
    setSelectedProducts((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }

      return [...prev, productId];
    });
  };

  // ========================================
  // 선택 삭제
  //
  // 기존 UI 동작 유지
  // 실제 주문 상품 자체를 삭제하는 것이 아니라
  // 교환 대상 선택을 해제
  // ========================================
  const handleDeleteSelected = () => {
    setSelectedProducts([]);
  };

  // ========================================
  // 교환 사유 드롭다운
  // ========================================
  const handleToggleDropdown = (productId) => {
    setOpenDropdown((prev) => (prev === productId ? null : productId));
  };

  // ========================================
  // 교환 사유 선택
  // ========================================
  const handleSelectReason = (productId, reason) => {
    setSelectedReasons((prev) => ({
      ...prev,
      [productId]: reason,
    }));

    setOpenDropdown(null);
  };

  // ========================================
  // 상세 사유 입력
  // ========================================
  const handleDetailReasonChange = (productId, value) => {
    setDetailReasons((prev) => ({
      ...prev,
      [productId]: value,
    }));
  };

  // ========================================
  // 교환 신청
  //
  // POST /claims
  //
  // type:
  // EXCHANGE
  //
  // scope:
  // ALL / PARTIAL
  // ========================================
  const handleSubmitExchange = async () => {
    if (isSubmitting) {
      return;
    }

    if (!isLoggedIn || !accessToken) {
      showToast("로그인 후 교환 신청이 가능합니다.", false);

      navigate("/login");

      return;
    }

    if (!orderId) {
      showToast("주문 정보를 확인할 수 없습니다.", false);

      return;
    }

    if (selectedProducts.length === 0) {
      showToast("교환할 상품을 선택해주세요.", false);

      return;
    }

    // ========================================
    // 선택된 모든 상품의 교환 사유 확인
    // ========================================
    const hasEmptyReason = selectedProducts.some(
      (productId) =>
        !selectedReasons[productId] ||
        selectedReasons[productId] === "교환 사유 선택",
    );

    if (hasEmptyReason) {
      showToast("교환 사유를 선택해주세요.", false);

      return;
    }

    // ========================================
    // 전체 / 부분 교환 판단
    // ========================================
    const isAllExchange = selectedProducts.length === products.length;

    const scope = isAllExchange ? "ALL" : "PARTIAL";

    // ========================================
    // 선택된 교환 상품 구성
    // ========================================
    const selectedExchangeItems = products
      .filter((product) => selectedProducts.includes(product.id))
      .map((product) => ({
        orderItemId: product.orderItemId,

        productId: product.productId,

        quantity: product.quantity,

        reason: selectedReasons[product.id],

        detailReason: detailReasons[product.id]?.trim() || "",
      }));

    try {
      setIsSubmitting(true);

      // ========================================
      // Claim 생성
      // ========================================
      const result = await createClaim(
        {
          orderId,
          type: "EXCHANGE",
          scope,

          items:
            scope === "PARTIAL" ? selectedExchangeItems : selectedExchangeItems,
        },
        accessToken,
      );

      if (!result.success) {
        throw new Error(result.message || "교환 신청에 실패했습니다.");
      }

      showToast(result.message || "상품 교환 신청이 완료되었습니다.", true);

      navigate("/mypage/orders");
    } catch (error) {
      console.error("상품 교환 신청 실패:", error);

      showToast(error.message || "교환 신청 중 문제가 발생했습니다.", false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isAllSelected =
    products.length > 0 && selectedProducts.length === products.length;

  // ========================================
  // 인증 상태 확인 중
  // ========================================
  if (isAuthLoading) {
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

  // ========================================
  // 비로그인
  // ========================================
  if (!isLoggedIn || !accessToken) {
    return (
      <>
        <style>{styles}</style>

        <div className="return-page">
          <Header />

          <main className="return-main">
            <p>로그인 후 교환 신청이 가능합니다.</p>
          </main>

          <Footer />
        </div>
      </>
    );
  }

  // ========================================
  // 주문번호 없음
  // ========================================
  if (!orderId) {
    return (
      <>
        <style>{styles}</style>

        <div className="return-page">
          <Header />

          <main className="return-main">
            <p>주문 정보를 확인할 수 없습니다.</p>
          </main>

          <Footer />
        </div>
      </>
    );
  }

  // ========================================
  // 주문 조회 중
  // ========================================
  if (isLoading) {
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

  return (
    <>
      <style>{styles}</style>

      <div className="return-page">
        <Header />

        <main className="return-main">
          <section className="return-page-header">
            <h1>상품 교환</h1>

            <p>교환하실 상품과 사유를 선택해주세요.</p>
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
                  selectedReasons[product.id] || "교환 사유 선택";

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
                          {Number(product.price).toLocaleString()}원
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
                            {exchangeReasons.map((reason) => (
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
                          {currentDetailReason.length}
                          /100
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

                <h2>교환 안내</h2>
              </div>

              <ul>
                <li>
                  교환 신청 후 상품 확인까지 영업일 기준 1~3일 정도 소요될 수
                  있습니다.
                </li>

                <li>
                  상품 상태 및 교환 사유에 따라 교환이 어려울 수 있습니다.
                </li>

                <li>
                  교환할 상품은 받으신 상태 그대로 포장하여 보내주시기 바랍니다.
                </li>
              </ul>
            </div>

            <div className="notice-submit-area">
              <button
                type="button"
                className="return-submit-button"
                onClick={handleSubmitExchange}
                disabled={isSubmitting}
              >
                {isSubmitting ? "교환 신청 중..." : "교환 신청하기"}
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

export default ExchangePage;
