// // // import { useEffect, useRef, useState } from "react";
// // // import Header from "../../components/header/header";
// // // import Footer from "../../components/footer/Footer";
// // // import styles from "./CancelPageStyle";

// // // import logoEat from "../../assets/logo-eat.webp";
// // // import logoPlay from "../../assets/logo-play.webp";
// // // import logoRest from "../../assets/logo-rest.webp";
// // // import logoHigh from "../../assets/logo-high.webp";
// // // import logoClean from "../../assets/logo-clean.webp";
// // // import logoMyshop from "../../assets/logo-myshop.webp";

// // // const products = [
// // //   {
// // //     id: 1,
// // //     orderNumber: "202609120001",
// // //     name: "냥이가 다 해먹",
// // //     option: "기본형",
// // //     price: "59,000원",
// // //     quantity: 1,
// // //     image: "https://i.ibb.co/QjJZXCZv/4.webp",
// // //   },
// // //   {
// // //     id: 2,
// // //     orderNumber: "202609120002",
// // //     name: "버튼 꾹꾹이",
// // //     option: "핑크",
// // //     price: "29,000원",
// // //     quantity: 1,
// // //     image: "https://i.ibb.co/N6bjxkch/3.webp",
// // //   },
// // //   {
// // //     id: 3,
// // //     orderNumber: "202609120003",
// // //     name: "미끄럼틀 캣타워",
// // //     option: "브라운",
// // //     price: "129,000원",
// // //     quantity: 1,
// // //     image: "https://i.ibb.co/dsm3wd0T/4.webp",
// // //   },
// // //   {
// // //     id: 4,
// // //     orderNumber: "202609120004",
// // //     name: "산뜻한 냥장실",
// // //     option: "화이트",
// // //     price: "89,000원",
// // //     quantity: 1,
// // //     image: "https://i.ibb.co/4rKBbsd/5.webp",
// // //   },
// // // ];

// // // const cancelReasons = [
// // //   "취소 사유 선택",
// // //   "단순 변심",
// // //   "상품을 잘못 주문했어요",
// // //   "다른 상품으로 주문하고 싶어요",
// // //   "배송이 너무 늦어요",
// // //   "상품 정보가 잘못되었어요",
// // // ];

// // // const catImages = [logoEat, logoPlay, logoRest, logoHigh, logoClean];

// // // function CancelPage() {
// // //   const [selectedProducts, setSelectedProducts] = useState(
// // //     products.map((product) => product.id),
// // //   );

// // //   const [selectedReasons, setSelectedReasons] = useState({});
// // //   const [detailReasons, setDetailReasons] = useState({});
// // //   const [openDropdown, setOpenDropdown] = useState(null);

// // //   const dropdownRefs = useRef({});

// // //   useEffect(() => {
// // //     const handleOutsideClick = (event) => {
// // //       const isInsideDropdown = Object.values(dropdownRefs.current).some(
// // //         (element) => element && element.contains(event.target),
// // //       );

// // //       if (!isInsideDropdown) {
// // //         setOpenDropdown(null);
// // //       }
// // //     };

// // //     document.addEventListener("mousedown", handleOutsideClick);

// // //     return () => {
// // //       document.removeEventListener("mousedown", handleOutsideClick);
// // //     };
// // //   }, []);

// // //   const handleSelectAll = () => {
// // //     if (selectedProducts.length === products.length) {
// // //       setSelectedProducts([]);
// // //     } else {
// // //       setSelectedProducts(products.map((product) => product.id));
// // //     }
// // //   };

// // //   const handleSelectProduct = (productId) => {
// // //     setSelectedProducts((prev) => {
// // //       if (prev.includes(productId)) {
// // //         return prev.filter((id) => id !== productId);
// // //       }

// // //       return [...prev, productId];
// // //     });
// // //   };

// // //   const handleDeleteSelected = () => {
// // //     setSelectedProducts([]);
// // //   };

// // //   const handleToggleDropdown = (productId) => {
// // //     setOpenDropdown((prev) => (prev === productId ? null : productId));
// // //   };

// // //   const handleSelectReason = (productId, reason) => {
// // //     setSelectedReasons((prev) => ({
// // //       ...prev,
// // //       [productId]: reason,
// // //     }));

// // //     setOpenDropdown(null);
// // //   };

// // //   const handleDetailReasonChange = (productId, value) => {
// // //     setDetailReasons((prev) => ({
// // //       ...prev,
// // //       [productId]: value,
// // //     }));
// // //   };

// // //   const handleSubmitCancel = () => {
// // //     if (selectedProducts.length === 0) {
// // //       alert("취소할 상품을 선택해주세요.");
// // //       return;
// // //     }

// // //     const hasEmptyReason = selectedProducts.some(
// // //       (productId) =>
// // //         !selectedReasons[productId] ||
// // //         selectedReasons[productId] === "취소 사유 선택",
// // //     );

// // //     if (hasEmptyReason) {
// // //       alert("취소 사유를 선택해주세요.");
// // //       return;
// // //     }

// // //     alert("주문 취소 신청이 완료되었습니다.");
// // //   };

// // //   const isAllSelected = selectedProducts.length === products.length;

// // //   return (
// // //     <>
// // //       <style>{styles}</style>

// // //       <div className="return-page">
// // //         <Header />

// // //         <main className="return-main">
// // //           <section className="return-page-header">
// // //             <h1>주문 취소</h1>
// // //             <p>취소하실 상품과 사유를 선택해주세요.</p>
// // //           </section>

// // //           <section className="product-selection">
// // //             <div className="product-selection-header">
// // //               <div className="selection-title-area">
// // //                 <button
// // //                   type="button"
// // //                   className={`select-all-checkbox ${
// // //                     isAllSelected ? "checked" : ""
// // //                   }`}
// // //                   onClick={handleSelectAll}
// // //                   aria-label="전체 상품 선택"
// // //                 >
// // //                   {isAllSelected ? "✓" : ""}
// // //                 </button>

// // //                 <strong>상품 선택</strong>

// // //                 <span>
// // //                   {selectedProducts.length}/{products.length}
// // //                 </span>
// // //               </div>

// // //               <div className="delete-button-area">
// // //                 <button
// // //                   type="button"
// // //                   className="delete-button"
// // //                   onClick={handleDeleteSelected}
// // //                 >
// // //                   선택 삭제
// // //                 </button>

// // //                 <div className="delete-cat-decoration">
// // //                   <img src={logoMyshop} alt="" />
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="product-list">
// // //               {products.map((product) => {
// // //                 const isSelected = selectedProducts.includes(product.id);
// // //                 const isOpen = openDropdown === product.id;

// // //                 const currentReason =
// // //                   selectedReasons[product.id] || "취소 사유 선택";

// // //                 const currentDetailReason = detailReasons[product.id] || "";

// // //                 return (
// // //                   <article className="return-product-card" key={product.id}>
// // //                     <button
// // //                       type="button"
// // //                       className={`product-checkbox ${
// // //                         isSelected ? "checked" : ""
// // //                       }`}
// // //                       onClick={() => handleSelectProduct(product.id)}
// // //                       aria-label={`${product.name} 선택`}
// // //                     >
// // //                       {isSelected ? "✓" : ""}
// // //                     </button>

// // //                     <div className="product-main-info">
// // //                       <img
// // //                         className="product-image"
// // //                         src={product.image}
// // //                         alt={product.name}
// // //                       />

// // //                       <div className="product-info">
// // //                         <p className="product-order-number">
// // //                           주문번호: {product.orderNumber}
// // //                         </p>

// // //                         <h2>{product.name}</h2>

// // //                         <p className="product-option">{product.option}</p>

// // //                         <strong className="product-price">
// // //                           {product.price}
// // //                         </strong>
// // //                       </div>
// // //                     </div>

// // //                     <p className="product-quantity">{product.quantity}개</p>

// // //                     <div
// // //                       className="return-reason-area"
// // //                       ref={(element) => {
// // //                         dropdownRefs.current[product.id] = element;
// // //                       }}
// // //                     >
// // //                       <div className="custom-dropdown">
// // //                         <button
// // //                           type="button"
// // //                           className="dropdown-trigger"
// // //                           onClick={() => handleToggleDropdown(product.id)}
// // //                         >
// // //                           <span>{currentReason}</span>

// // //                           <svg
// // //                             xmlns="http://www.w3.org/2000/svg"
// // //                             width="12"
// // //                             height="12"
// // //                             fill="currentColor"
// // //                             className="bi bi-caret-down dropdown-arrow"
// // //                             viewBox="0 0 16 16"
// // //                           >
// // //                             <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753.659" />
// // //                           </svg>
// // //                         </button>

// // //                         {isOpen && (
// // //                           <div className="dropdown-menu">
// // //                             {cancelReasons.map((reason) => (
// // //                               <button
// // //                                 type="button"
// // //                                 className="dropdown-option"
// // //                                 key={reason}
// // //                                 onClick={() =>
// // //                                   handleSelectReason(product.id, reason)
// // //                                 }
// // //                               >
// // //                                 {reason}
// // //                               </button>
// // //                             ))}
// // //                           </div>
// // //                         )}
// // //                       </div>

// // //                       <div className="reason-textarea-wrapper">
// // //                         <textarea
// // //                           value={currentDetailReason}
// // //                           onChange={(event) =>
// // //                             handleDetailReasonChange(
// // //                               product.id,
// // //                               event.target.value,
// // //                             )
// // //                           }
// // //                           placeholder="상세 사유를 입력해주세요. (선택)"
// // //                           maxLength={100}
// // //                         />

// // //                         <span className="text-counter">
// // //                           {currentDetailReason.length}/100
// // //                         </span>
// // //                       </div>
// // //                     </div>
// // //                   </article>
// // //                 );
// // //               })}
// // //             </div>
// // //           </section>

// // //           <section className="return-notice">
// // //             <div className="notice-content">
// // //               <div className="notice-title-area">
// // //                 <span className="notice-icon">ⓘ</span>
// // //                 <h2>취소 안내</h2>
// // //               </div>

// // //               <ul>
// // //                 <li>
// // //                   상품이 배송 준비 중이거나 배송 중인 경우 주문 취소가 어려울 수
// // //                   있습니다.
// // //                 </li>
// // //                 <li>
// // //                   결제 취소 후 카드사 및 결제 수단에 따라 환불까지 시간이 소요될
// // //                   수 있습니다.
// // //                 </li>
// // //                 <li>
// // //                   이미 배송이 시작된 상품은 반품 절차로 진행될 수 있습니다.
// // //                 </li>
// // //               </ul>
// // //             </div>

// // //             <div className="notice-submit-area">
// // //               <button
// // //                 type="button"
// // //                 className="return-submit-button"
// // //                 onClick={handleSubmitCancel}
// // //               >
// // //                 주문 취소하기
// // //               </button>

// // //               <div className="cat-decoration">
// // //                 {catImages.map((catImage, index) => (
// // //                   <img
// // //                     src={catImage}
// // //                     alt=""
// // //                     className={`cat cat-${index + 1}`}
// // //                     key={index}
// // //                   />
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </section>
// // //         </main>

// // //         <Footer />
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // export default CancelPage;

// // import { useEffect, useRef, useState } from "react";
// // import { useNavigate, useSearchParams } from "react-router-dom";

// // import Header from "../../components/header/header";
// // import Footer from "../../components/footer/Footer";
// // import Loader from "../../components/loader/Loader";

// // import useAuth from "../../hooks/useAuth";
// // import useToast from "../../hooks/useToast";

// // import { getOrder } from "../../services/orderServices";
// // import { createCancelClaim } from "../../services/claimServices";

// // import styles from "./CancelPageStyle";

// // import logoEat from "../../assets/logo-eat.webp";
// // import logoPlay from "../../assets/logo-play.webp";
// // import logoRest from "../../assets/logo-rest.webp";
// // import logoHigh from "../../assets/logo-high.webp";
// // import logoClean from "../../assets/logo-clean.webp";

// // const cancelReasons = [
// //   "취소 사유 선택",
// //   "단순 변심",
// //   "상품을 잘못 주문했어요",
// //   "다른 상품으로 주문하고 싶어요",
// //   "배송이 너무 늦어요",
// //   "상품 정보가 잘못되었어요",
// // ];

// // const catImages = [logoEat, logoPlay, logoRest, logoHigh, logoClean];

// // function CancelPage() {
// //   const navigate = useNavigate();
// //   const [searchParams] = useSearchParams();

// //   const { accessToken, isAuthLoading } = useAuth();
// //   const { showToast } = useToast();

// //   const orderId = searchParams.get("orderId");

// //   const [order, setOrder] = useState(null);
// //   const [selectedReason, setSelectedReason] = useState("취소 사유 선택");
// //   const [detailReason, setDetailReason] = useState("");
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [errorMessage, setErrorMessage] = useState("");

// //   const dropdownRef = useRef(null);

// //   /*
// //    * URL의 orderId로 주문 상세 조회
// //    */
// //   // useEffect(() => {
// //   //   if (isAuthLoading) {
// //   //     return;
// //   //   }

// //   //   if (!accessToken) {
// //   //     navigate("/login", {
// //   //       replace: true,
// //   //       state: {
// //   //         from: orderId
// //   //           ? `/claims/cancel?orderId=${encodeURIComponent(orderId)}`
// //   //           : "/claims/cancel",
// //   //       },
// //   //     });

// //   //     return;
// //   //   }

// //   //   if (!orderId) {
// //   //     setErrorMessage("주문번호가 없습니다.");
// //   //     setIsLoading(false);
// //   //     return;
// //   //   }

// //   //   let isCancelled = false;

// //   //   const fetchOrder = async () => {
// //   //     try {
// //   //       setIsLoading(true);
// //   //       setErrorMessage("");

// //   //       const response = await getOrder(orderId, accessToken);

// //   //       if (isCancelled) {
// //   //         return;
// //   //       }

// //   //       if (!response.success || !response.order) {
// //   //         throw new Error(
// //   //           response.message || "주문 정보를 불러오지 못했습니다.",
// //   //         );
// //   //       }

// //   //       setOrder(response.order);
// //   //     } catch (error) {
// //   //       if (isCancelled) {
// //   //         return;
// //   //       }

// //   //       setErrorMessage(
// //   //         error.message || "주문 정보를 불러오는 중 문제가 발생했습니다.",
// //   //       );
// //   //     } finally {
// //   //       if (!isCancelled) {
// //   //         setIsLoading(false);
// //   //       }
// //   //     }
// //   //   };

// //   //   fetchOrder();

// //   //   return () => {
// //   //     isCancelled = true;
// //   //   };
// //   // }, [accessToken, isAuthLoading, navigate, orderId]);
// //   useEffect(() => {
// //     if (isAuthLoading) {
// //       return;
// //     }

// //     if (!accessToken) {
// //       navigate("/login", {
// //         replace: true,
// //         state: {
// //           from: orderId
// //             ? `/claims/cancel?orderId=${encodeURIComponent(orderId)}`
// //             : "/claims/cancel",
// //         },
// //       });

// //       return;
// //     }

// //     // orderId가 없으면 API를 호출하지 않습니다.
// //     // 오류 화면은 렌더링 과정에서 직접 처리합니다.
// //     if (!orderId) {
// //       return;
// //     }

// //     let isCancelled = false;

// //     getOrder(orderId, accessToken)
// //       .then((response) => {
// //         if (isCancelled) {
// //           return;
// //         }

// //         if (!response.success || !response.order) {
// //           throw new Error(
// //             response.message || "주문 정보를 불러오지 못했습니다.",
// //           );
// //         }

// //         setOrder(response.order);
// //         setErrorMessage("");
// //       })
// //       .catch((error) => {
// //         if (isCancelled) {
// //           return;
// //         }

// //         setErrorMessage(
// //           error.message || "주문 정보를 불러오는 중 문제가 발생했습니다.",
// //         );
// //       })
// //       .finally(() => {
// //         if (!isCancelled) {
// //           setIsLoading(false);
// //         }
// //       });

// //     return () => {
// //       isCancelled = true;
// //     };
// //   }, [accessToken, isAuthLoading, navigate, orderId]);

// //   /*
// //    * 커스텀 드롭다운 외부 클릭 처리
// //    */
// //   useEffect(() => {
// //     const handleOutsideClick = (event) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setIsDropdownOpen(false);
// //       }
// //     };

// //     document.addEventListener("mousedown", handleOutsideClick);

// //     return () => {
// //       document.removeEventListener("mousedown", handleOutsideClick);
// //     };
// //   }, []);

// //   const handleSelectReason = (reason) => {
// //     setSelectedReason(reason);
// //     setIsDropdownOpen(false);
// //   };

// //   /*
// //    * 주문취소 신청
// //    */
// //   const handleSubmitCancel = async () => {
// //     if (!orderId || !order) {
// //       showToast("주문 정보를 확인할 수 없습니다.", "error");
// //       return;
// //     }

// //     if (selectedReason === "취소 사유 선택") {
// //       showToast("취소 사유를 선택해주세요.", "error");
// //       return;
// //     }

// //     if (order.status !== "PAYMENT_COMPLETED") {
// //       showToast("결제완료 상태의 주문만 취소할 수 있습니다.", "error");
// //       return;
// //     }

// //     try {
// //       setIsSubmitting(true);

// //       const response = await createCancelClaim(
// //         {
// //           orderId,
// //           reason: selectedReason,
// //           detailReason: detailReason.trim() || null,
// //         },
// //         accessToken,
// //       );

// //       showToast(
// //         response.message || "주문 취소 신청이 완료되었습니다.",
// //         "success",
// //       );

// //       navigate("/mypage/orders", {
// //         replace: true,
// //         state: {
// //           claimCreated: true,
// //           orderId,
// //         },
// //       });
// //     } catch (error) {
// //       showToast(
// //         error.message || "주문 취소 신청 중 문제가 발생했습니다.",
// //         "error",
// //       );
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const formatPrice = (price) => {
// //     return `${Number(price ?? 0).toLocaleString("ko-KR")}원`;
// //   };

// //   const orderItems = order?.items ?? [];

// //   if (isAuthLoading || isLoading) {
// //     return (
// //       <>
// //         <style>{styles}</style>

// //         <div className="return-page">
// //           <Header />

// //           <main className="return-main">
// //             <Loader />
// //           </main>

// //           <Footer />
// //         </div>
// //       </>
// //     );
// //   }

// //   if (errorMessage || !order) {
// //     return (
// //       <>
// //         <style>{styles}</style>

// //         <div className="return-page">
// //           <Header />

// //           <main className="return-main">
// //             <section className="return-page-header">
// //               <h1>주문 취소</h1>
// //               <p>{errorMessage || "주문 정보를 찾을 수 없습니다."}</p>

// //               <button
// //                 type="button"
// //                 className="return-submit-button"
// //                 onClick={() => navigate("/mypage/orders")}
// //               >
// //                 주문내역으로 돌아가기
// //               </button>
// //             </section>
// //           </main>

// //           <Footer />
// //         </div>
// //       </>
// //     );
// //   }

// //   return (
// //     <>
// //       <style>{styles}</style>

// //       <div className="return-page">
// //         <Header />

// //         <main className="return-main">
// //           <section className="return-page-header">
// //             <h1>주문 취소</h1>
// //             <p>주문 전체 상품이 취소됩니다. 취소 사유를 선택해주세요.</p>
// //           </section>

// //           <section className="product-selection">
// //             <div className="product-selection-header">
// //               <div className="selection-title-area">
// //                 <strong>취소 상품</strong>

// //                 <span>{orderItems.length}개</span>
// //               </div>

// //               <p className="product-order-number">
// //                 주문번호: {order.orderNumber ?? order.orderId}
// //               </p>
// //             </div>

// //             <div className="product-list">
// //               {orderItems.map((item, index) => {
// //                 const productId =
// //                   item.productId ?? item.product?.productId ?? index;

// //                 const productName =
// //                   item.name ??
// //                   item.productName ??
// //                   item.product?.name ??
// //                   "상품명 없음";

// //                 const productImage =
// //                   item.thumbnail ??
// //                   item.image ??
// //                   item.product?.thumbnail ??
// //                   item.product?.image ??
// //                   "";

// //                 const productOption =
// //                   item.option ?? item.optionName ?? item.product?.option ?? "";

// //                 const productPrice = item.price ?? item.product?.price ?? 0;

// //                 return (
// //                   <article
// //                     className="return-product-card"
// //                     key={`${productId}-${index}`}
// //                   >
// //                     <div className="product-main-info">
// //                       {productImage && (
// //                         <img
// //                           className="product-image"
// //                           src={productImage}
// //                           alt={productName}
// //                         />
// //                       )}

// //                       <div className="product-info">
// //                         <p className="product-order-number">
// //                           주문번호: {order.orderNumber ?? order.orderId}
// //                         </p>

// //                         <h2>{productName}</h2>

// //                         {productOption && (
// //                           <p className="product-option">{productOption}</p>
// //                         )}

// //                         <strong className="product-price">
// //                           {formatPrice(productPrice)}
// //                         </strong>
// //                       </div>
// //                     </div>

// //                     <p className="product-quantity">{item.quantity ?? 1}개</p>
// //                   </article>
// //                 );
// //               })}
// //             </div>

// //             <div className="return-reason-area" ref={dropdownRef}>
// //               <div className="custom-dropdown">
// //                 <button
// //                   type="button"
// //                   className="dropdown-trigger"
// //                   aria-expanded={isDropdownOpen}
// //                   onClick={() => setIsDropdownOpen((previous) => !previous)}
// //                 >
// //                   <span>{selectedReason}</span>

// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     width="12"
// //                     height="12"
// //                     fill="currentColor"
// //                     className="bi bi-caret-down dropdown-arrow"
// //                     viewBox="0 0 16 16"
// //                     aria-hidden="true"
// //                   >
// //                     <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753.659" />
// //                   </svg>
// //                 </button>

// //                 {isDropdownOpen && (
// //                   <div className="dropdown-menu">
// //                     {cancelReasons.map((reason) => (
// //                       <button
// //                         type="button"
// //                         className="dropdown-option"
// //                         key={reason}
// //                         onClick={() => handleSelectReason(reason)}
// //                       >
// //                         {reason}
// //                       </button>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>

// //               <div className="reason-textarea-wrapper">
// //                 <textarea
// //                   value={detailReason}
// //                   onChange={(event) => setDetailReason(event.target.value)}
// //                   placeholder="상세 사유를 입력해주세요. (선택)"
// //                   maxLength={100}
// //                 />

// //                 <span className="text-counter">{detailReason.length}/100</span>
// //               </div>
// //             </div>
// //           </section>

// //           <section className="return-notice">
// //             <div className="notice-content">
// //               <div className="notice-title-area">
// //                 <span className="notice-icon">ⓘ</span>
// //                 <h2>취소 안내</h2>
// //               </div>

// //               <ul>
// //                 <li>결제완료 상태의 주문만 취소할 수 있습니다.</li>

// //                 <li>
// //                   주문취소는 선택한 상품이 아닌 주문 전체를 대상으로 진행됩니다.
// //                 </li>

// //                 <li>
// //                   결제 취소 후 카드사 및 결제 수단에 따라 환불까지 시간이 소요될
// //                   수 있습니다.
// //                 </li>

// //                 <li>이미 배송이 시작된 상품은 반품 절차로 진행해야 합니다.</li>
// //               </ul>
// //             </div>

// //             <div className="notice-submit-area">
// //               <button
// //                 type="button"
// //                 className="return-submit-button"
// //                 onClick={handleSubmitCancel}
// //                 disabled={isSubmitting || order.status !== "PAYMENT_COMPLETED"}
// //               >
// //                 {isSubmitting
// //                   ? "취소 신청 중..."
// //                   : order.status === "PAYMENT_COMPLETED"
// //                     ? "주문 취소하기"
// //                     : "취소할 수 없는 주문"}
// //               </button>

// //               <div className="cat-decoration">
// //                 {catImages.map((catImage, index) => (
// //                   <img
// //                     src={catImage}
// //                     alt=""
// //                     className={`cat cat-${index + 1}`}
// //                     key={catImage}
// //                   />
// //                 ))}
// //               </div>
// //             </div>
// //           </section>
// //         </main>

// //         <Footer />
// //       </div>
// //     </>
// //   );
// // }

// // export default CancelPage;

// import { useEffect, useRef, useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";

// import Header from "../../components/header/header";
// import Footer from "../../components/footer/Footer";
// import Loader from "../../components/loader/Loader";

// import useAuth from "../../hooks/useAuth";
// import useToast from "../../hooks/useToast";

// import { getOrder } from "../../services/orderServices";
// import { createCancelClaim } from "../../services/claimServices";

// import styles from "./CancelPageStyle";

// import logoEat from "../../assets/logo-eat.webp";
// import logoPlay from "../../assets/logo-play.webp";
// import logoRest from "../../assets/logo-rest.webp";
// import logoHigh from "../../assets/logo-high.webp";
// import logoClean from "../../assets/logo-clean.webp";

// const cancelReasons = [
//   "취소 사유 선택",
//   "단순 변심",
//   "상품을 잘못 주문했어요",
//   "다른 상품으로 주문하고 싶어요",
//   "배송이 너무 늦어요",
//   "상품 정보가 잘못되었어요",
// ];

// const catImages = [logoEat, logoPlay, logoRest, logoHigh, logoClean];

// /*
//  * 주문 상품을 프론트에서 구분하기 위한 key
//  *
//  * 실제 Claim API에는 productId를 사용하고,
//  * 화면 선택 상태를 관리할 때만 이 값을 사용합니다.
//  */
// const getItemKey = (item, index) => {
//   return (
//     item.orderItemId ??
//     item.itemId ??
//     item.productId ??
//     item.product?.productId ??
//     String(index)
//   );
// };

// const getProductId = (item) => {
//   return item.productId ?? item.product?.productId ?? "";
// };

// function CancelPage() {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();

//   const { accessToken, isAuthLoading } = useAuth();
//   const { showToast } = useToast();

//   const orderId = searchParams.get("orderId");

//   const [order, setOrder] = useState(null);

//   /*
//    * 상품별 취소 선택
//    */
//   const [selectedProducts, setSelectedProducts] = useState([]);

//   /*
//    * {
//    *   [itemKey]: "단순 변심"
//    * }
//    */
//   const [selectedReasons, setSelectedReasons] = useState({});

//   /*
//    * {
//    *   [itemKey]: "상세 사유"
//    * }
//    */
//   const [detailReasons, setDetailReasons] = useState({});

//   /*
//    * 현재 열려있는 상품별 사유 드롭다운
//    */
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const [isLoading, setIsLoading] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   /*
//    * 상품별 드롭다운 DOM 저장
//    */
//   const dropdownRefs = useRef({});

//   /*
//    * URL의 orderId로 주문 상세 조회
//    */
//   useEffect(() => {
//     if (isAuthLoading) {
//       return;
//     }

//     if (!accessToken) {
//       navigate("/login", {
//         replace: true,
//         state: {
//           from: orderId
//             ? `/claims/cancel?orderId=${encodeURIComponent(orderId)}`
//             : "/claims/cancel",
//         },
//       });

//       return;
//     }

//     if (!orderId) {
//       return;
//     }

//     let isCancelled = false;

//     getOrder(orderId, accessToken)
//       .then((response) => {
//         if (isCancelled) {
//           return;
//         }

//         if (!response.success || !response.order) {
//           throw new Error(
//             response.message || "주문 정보를 불러오지 못했습니다.",
//           );
//         }

//         const fetchedOrder = response.order;
//         const fetchedItems = fetchedOrder.items ?? [];

//         /*
//          * 처음 화면에 들어오면
//          * 사진처럼 모든 상품이 선택된 상태로 시작
//          */
//         const initialSelectedProducts = fetchedItems.map((item, index) =>
//           getItemKey(item, index),
//         );

//         setOrder(fetchedOrder);
//         setSelectedProducts(initialSelectedProducts);
//         setErrorMessage("");
//       })
//       .catch((error) => {
//         if (isCancelled) {
//           return;
//         }

//         setErrorMessage(
//           error.message || "주문 정보를 불러오는 중 문제가 발생했습니다.",
//         );
//       })
//       .finally(() => {
//         if (!isCancelled) {
//           setIsLoading(false);
//         }
//       });

//     return () => {
//       isCancelled = true;
//     };
//   }, [accessToken, isAuthLoading, navigate, orderId]);

//   /*
//    * 커스텀 드롭다운 외부 클릭
//    */
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

//   const orderItems = order?.items ?? [];

//   /*
//    * 전체 상품 선택 여부
//    */
//   const isAllSelected =
//     orderItems.length > 0 && selectedProducts.length === orderItems.length;

//   /*
//    * 전체 선택 / 전체 해제
//    */
//   const handleSelectAll = () => {
//     if (isAllSelected) {
//       setSelectedProducts([]);
//       setOpenDropdown(null);

//       return;
//     }

//     const allItemKeys = orderItems.map((item, index) =>
//       getItemKey(item, index),
//     );

//     setSelectedProducts(allItemKeys);
//   };

//   /*
//    * 상품 하나 선택 / 선택 해제
//    */
//   const handleSelectProduct = (itemKey) => {
//     setSelectedProducts((prev) => {
//       if (prev.includes(itemKey)) {
//         return prev.filter((key) => key !== itemKey);
//       }

//       return [...prev, itemKey];
//     });

//     if (openDropdown === itemKey) {
//       setOpenDropdown(null);
//     }
//   };

//   /*
//    * 선택 삭제
//    *
//    * 실제 주문 상품을 삭제하는 것이 아니라
//    * 취소 대상 선택을 모두 해제합니다.
//    */
//   const handleDeleteSelected = () => {
//     setSelectedProducts([]);
//     setOpenDropdown(null);
//   };

//   /*
//    * 상품별 사유 드롭다운
//    */
//   const handleToggleDropdown = (itemKey) => {
//     if (!selectedProducts.includes(itemKey)) {
//       return;
//     }

//     setOpenDropdown((prev) => (prev === itemKey ? null : itemKey));
//   };

//   /*
//    * 상품별 취소 사유
//    */
//   const handleSelectReason = (itemKey, reason) => {
//     setSelectedReasons((prev) => ({
//       ...prev,
//       [itemKey]: reason,
//     }));

//     setOpenDropdown(null);
//   };

//   /*
//    * 상품별 상세 사유
//    */
//   const handleDetailReasonChange = (itemKey, value) => {
//     setDetailReasons((prev) => ({
//       ...prev,
//       [itemKey]: value,
//     }));
//   };

//   /*
//    * 가격 표시
//    */
//   const formatPrice = (price) => {
//     return `${Number(price ?? 0).toLocaleString("ko-KR")}원`;
//   };

//   /*
//    * 취소 대상 상품 추출
//    */
//   const getSelectedItems = () => {
//     return orderItems
//       .map((item, index) => ({
//         item,
//         itemKey: getItemKey(item, index),
//       }))
//       .filter(({ itemKey }) => selectedProducts.includes(itemKey));
//   };

//   /*
//    * 동일한 취소 사유를 가진 상품끼리 묶기
//    *
//    * Claim API는 Claim 하나당
//    * reason / detailReason 하나를 받기 때문에
//    * 서로 다른 사유는 각각 별도의 Claim으로 요청합니다.
//    */
//   const createClaimGroups = (selectedItems) => {
//     const groups = new Map();

//     selectedItems.forEach(({ item, itemKey }) => {
//       const reason = selectedReasons[itemKey];

//       const detailReason = (detailReasons[itemKey] ?? "").trim();

//       const groupKey = JSON.stringify({
//         reason,
//         detailReason,
//       });

//       if (!groups.has(groupKey)) {
//         groups.set(groupKey, {
//           reason,
//           detailReason,
//           items: [],
//         });
//       }

//       groups.get(groupKey).items.push({
//         productId: getProductId(item),
//         quantity: Number(item.quantity ?? 1),
//       });
//     });

//     return Array.from(groups.values());
//   };

//   /*
//    * 주문 취소 신청
//    */
//   const handleSubmitCancel = async () => {
//     if (!orderId || !order) {
//       showToast("주문 정보를 확인할 수 없습니다.", "error");

//       return;
//     }

//     /*
//      * 취소 가능한 주문 상태 확인
//      */
//     if (order.status !== "PAYMENT_COMPLETED") {
//       showToast("결제완료 상태의 주문만 취소할 수 있습니다.", "error");

//       return;
//     }

//     /*
//      * 선택 상품 확인
//      */
//     if (selectedProducts.length === 0) {
//       showToast("취소할 상품을 선택해주세요.", "error");

//       return;
//     }

//     const selectedItems = getSelectedItems();

//     /*
//      * 선택 상품에 취소 사유가 전부 입력됐는지 확인
//      */
//     const hasEmptyReason = selectedItems.some(({ itemKey }) => {
//       const reason = selectedReasons[itemKey];

//       return !reason || reason === "취소 사유 선택";
//     });

//     if (hasEmptyReason) {
//       showToast("선택한 상품의 취소 사유를 모두 선택해주세요.", "error");

//       return;
//     }

//     /*
//      * productId 확인
//      */
//     const hasInvalidProduct = selectedItems.some(({ item }) => {
//       return !getProductId(item);
//     });

//     if (hasInvalidProduct) {
//       showToast("취소할 상품 정보를 확인할 수 없습니다.", "error");

//       return;
//     }

//     try {
//       setIsSubmitting(true);

//       /*
//        * 모든 상품을 선택했더라도
//        * 상품별 사유 UI를 사용하므로
//        * PARTIAL 형식으로 상품을 명시해서 요청합니다.
//        *
//        * 같은 사유끼리는 한 Claim으로 묶고,
//        * 사유가 다르면 Claim을 나눠 요청합니다.
//        */
//       const claimGroups = createClaimGroups(selectedItems);

//       const responses = [];

//       for (const group of claimGroups) {
//         const response = await createCancelClaim(
//           {
//             orderId,
//             type: "CANCEL",
//             scope: "PARTIAL",

//             items: group.items,

//             reason: group.reason,

//             detailReason: group.detailReason || null,
//           },
//           accessToken,
//         );

//         responses.push(response);
//       }

//       const responseMessage =
//         responses.length === 1 ? responses[0]?.message : null;

//       showToast(
//         responseMessage ||
//           `${selectedItems.length}개 상품의 취소 신청이 완료되었습니다.`,
//         "success",
//       );

//       navigate("/mypage/orders", {
//         replace: true,
//         state: {
//           claimCreated: true,
//           orderId,
//         },
//       });
//     } catch (error) {
//       console.error("상품 취소 신청 실패:", error);

//       showToast(
//         error.message || "주문 취소 신청 중 문제가 발생했습니다.",
//         "error",
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   /*
//    * 로딩
//    */
//   if (isAuthLoading || isLoading) {
//     return (
//       <>
//         <style>{styles}</style>

//         <div className="return-page">
//           <Header />

//           <main className="return-main">
//             <Loader />
//           </main>

//           <Footer />
//         </div>
//       </>
//     );
//   }

//   /*
//    * 주문 조회 실패
//    */
//   if (errorMessage || !order) {
//     return (
//       <>
//         <style>{styles}</style>

//         <div className="return-page">
//           <Header />

//           <main className="return-main">
//             <section className="return-page-header">
//               <h1>주문 취소</h1>

//               <p>{errorMessage || "주문 정보를 찾을 수 없습니다."}</p>

//               <button
//                 type="button"
//                 className="return-submit-button"
//                 onClick={() => navigate("/mypage/orders")}
//               >
//                 주문내역으로 돌아가기
//               </button>
//             </section>
//           </main>

//           <Footer />
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <style>{styles}</style>

//       <div className="return-page">
//         <Header />

//         <main className="return-main">
//           {/* 페이지 제목 */}
//           <section className="return-page-header">
//             <h1>주문 취소</h1>

//             <p>취소하실 상품과 사유를 선택해주세요.</p>
//           </section>

//           {/* 상품 선택 */}
//           <section className="product-selection">
//             <div className="product-selection-header">
//               <div className="selection-title-area">
//                 {/* 전체 선택 */}
//                 <button
//                   type="button"
//                   className={`select-all-checkbox ${
//                     isAllSelected ? "checked" : ""
//                   }`}
//                   onClick={handleSelectAll}
//                   aria-label="전체 상품 선택"
//                   aria-pressed={isAllSelected}
//                 >
//                   {isAllSelected ? "✓" : ""}
//                 </button>

//                 <strong>상품 선택</strong>

//                 <span>
//                   {selectedProducts.length}/{orderItems.length}
//                 </span>
//               </div>

//               <div className="delete-button-area">
//                 <button
//                   type="button"
//                   className="delete-button"
//                   onClick={handleDeleteSelected}
//                   disabled={selectedProducts.length === 0}
//                 >
//                   선택 삭제
//                 </button>
//               </div>
//             </div>

//             {/* 상품 목록 */}
//             <div className="product-list">
//               {orderItems.map((item, index) => {
//                 const itemKey = getItemKey(item, index);

//                 const productName =
//                   item.name ??
//                   item.productName ??
//                   item.product?.name ??
//                   "상품명 없음";

//                 const productImage =
//                   item.thumbnail ??
//                   item.image ??
//                   item.product?.thumbnail ??
//                   item.product?.image ??
//                   "";

//                 const productOption =
//                   item.option ?? item.optionName ?? item.product?.option ?? "";

//                 const productPrice = item.price ?? item.product?.price ?? 0;

//                 const isSelected = selectedProducts.includes(itemKey);

//                 const isOpen = openDropdown === itemKey;

//                 const currentReason =
//                   selectedReasons[itemKey] ?? "취소 사유 선택";

//                 const currentDetailReason = detailReasons[itemKey] ?? "";

//                 return (
//                   <article
//                     className={`return-product-card ${
//                       !isSelected ? "is-unselected" : ""
//                     }`}
//                     key={itemKey}
//                   >
//                     {/* 상품 체크박스 */}
//                     <button
//                       type="button"
//                       className={`product-checkbox ${
//                         isSelected ? "checked" : ""
//                       }`}
//                       onClick={() => handleSelectProduct(itemKey)}
//                       aria-label={`${productName} 선택`}
//                       aria-pressed={isSelected}
//                     >
//                       {isSelected ? "✓" : ""}
//                     </button>

//                     {/* 상품 정보 */}
//                     <div className="product-main-info">
//                       {productImage && (
//                         <img
//                           className="product-image"
//                           src={productImage}
//                           alt={productName}
//                         />
//                       )}

//                       <div className="product-info">
//                         <p className="product-order-number">
//                           주문번호: {order.orderNumber ?? order.orderId}
//                         </p>

//                         <h2>{productName}</h2>

//                         {productOption && (
//                           <p className="product-option">{productOption}</p>
//                         )}

//                         <strong className="product-price">
//                           {formatPrice(productPrice)}
//                         </strong>
//                       </div>
//                     </div>

//                     {/* 수량 */}
//                     <p className="product-quantity">{item.quantity ?? 1}개</p>

//                     {/* 상품별 취소 사유 */}
//                     <div
//                       className="return-reason-area"
//                       ref={(element) => {
//                         dropdownRefs.current[itemKey] = element;
//                       }}
//                     >
//                       {/* 사유 드롭다운 */}
//                       <div className="custom-dropdown">
//                         <button
//                           type="button"
//                           className="dropdown-trigger"
//                           aria-expanded={isOpen}
//                           disabled={!isSelected}
//                           onClick={() => handleToggleDropdown(itemKey)}
//                         >
//                           <span>{currentReason}</span>

//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="12"
//                             height="12"
//                             fill="currentColor"
//                             className="bi bi-caret-down dropdown-arrow"
//                             viewBox="0 0 16 16"
//                             aria-hidden="true"
//                           >
//                             <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753.659" />
//                           </svg>
//                         </button>

//                         {isOpen && isSelected && (
//                           <div className="dropdown-menu">
//                             {cancelReasons.map((reason) => (
//                               <button
//                                 type="button"
//                                 className="dropdown-option"
//                                 key={reason}
//                                 onClick={() =>
//                                   handleSelectReason(itemKey, reason)
//                                 }
//                               >
//                                 {reason}
//                               </button>
//                             ))}
//                           </div>
//                         )}
//                       </div>

//                       {/* 상세 사유 */}
//                       <div className="reason-textarea-wrapper">
//                         <textarea
//                           value={currentDetailReason}
//                           disabled={!isSelected}
//                           onChange={(event) =>
//                             handleDetailReasonChange(
//                               itemKey,
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

//           {/* 취소 안내 */}
//           <section className="return-notice">
//             <div className="notice-content">
//               <div className="notice-title-area">
//                 <span className="notice-icon">ⓘ</span>

//                 <h2>취소 안내</h2>
//               </div>

//               <ul>
//                 <li>결제완료 상태의 상품만 취소할 수 있습니다.</li>

//                 <li>전체 상품 또는 일부 상품을 선택하여 취소할 수 있습니다.</li>

//                 <li>취소할 상품마다 취소 사유를 선택해주세요.</li>

//                 <li>
//                   주문 시 적립금을 사용한 경우 환불 대상 적립금이 먼저 복원되고,
//                   남은 환불 금액은 실제 결제수단으로 환불됩니다.
//                 </li>

//                 <li>
//                   결제 취소 후 카드사 및 결제 수단에 따라 실제 환불까지 시간이
//                   소요될 수 있습니다.
//                 </li>

//                 <li>이미 배송이 시작된 상품은 반품 절차로 진행해야 합니다.</li>
//               </ul>
//             </div>

//             {/* 취소 신청 */}
//             <div className="notice-submit-area">
//               <button
//                 type="button"
//                 className="return-submit-button"
//                 onClick={handleSubmitCancel}
//                 disabled={
//                   isSubmitting ||
//                   order.status !== "PAYMENT_COMPLETED" ||
//                   selectedProducts.length === 0
//                 }
//               >
//                 {isSubmitting
//                   ? "취소 신청 중..."
//                   : order.status !== "PAYMENT_COMPLETED"
//                     ? "취소할 수 없는 주문"
//                     : selectedProducts.length === 0
//                       ? "취소할 상품을 선택해주세요"
//                       : `${selectedProducts.length}개 상품 취소하기`}
//               </button>

//               <div className="cat-decoration">
//                 {catImages.map((catImage, index) => (
//                   <img
//                     src={catImage}
//                     alt=""
//                     className={`cat cat-${index + 1}`}
//                     key={catImage}
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

// export default CancelPage;

import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";

import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";

// import { getOrder } from "../../services/orderServices";
// import { createCancelClaim } from "../../services/claimServices";

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

  /*
   * 취소 대상 상품
   */
  const [selectedProducts, setSelectedProducts] = useState([]);

  /*
   * 취소 사유
   */
  const [selectedReason, setSelectedReason] = useState("취소 사유 선택");

  const [detailReason, setDetailReason] = useState("");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dropdownRef = useRef(null);

  /*
   * 주문 상세 조회
   */
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

        /*
         * 처음에는 전체 상품 선택
         */
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

  /*
   * 드롭다운 외부 클릭
   */
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

  /*
   * 전체 선택 여부
   */
  const isAllSelected =
    orderItems.length > 0 && selectedProducts.length === orderItems.length;

  /*
   * 부분 선택 여부
   */
  // const isPartialSelected = selectedProducts.length > 0 && !isAllSelected;

  /*
   * 전체 선택 / 전체 해제
   */
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

  /*
   * 개별 상품 선택
   */
  const handleSelectProduct = (itemKey) => {
    setSelectedProducts((prev) => {
      if (prev.includes(itemKey)) {
        return prev.filter((key) => key !== itemKey);
      }

      return [...prev, itemKey];
    });
  };

  /*
   * 선택 전체 해제
   */
  const handleDeleteSelected = () => {
    setSelectedProducts([]);
  };

  /*
   * 취소 사유 선택
   */
  const handleSelectReason = (reason) => {
    setSelectedReason(reason);
    setIsDropdownOpen(false);
  };

  /*
   * 선택된 상품 데이터
   */
  const getSelectedItems = () => {
    return orderItems
      .map((item, index) => ({
        item,
        itemKey: getItemKey(item, index),
      }))
      .filter(({ itemKey }) => selectedProducts.includes(itemKey));
  };

  /*
   * 취소 신청
   */
  const handleSubmitCancel = async () => {
    if (!orderId || !order) {
      showToast("주문 정보를 확인할 수 없습니다.", "error");

      return;
    }

    if (order.status !== "PAYMENT_COMPLETED") {
      showToast("결제완료 상태의 주문만 취소할 수 있습니다.", "error");

      return;
    }

    /*
     * 아무 상품도 선택하지 않은 경우
     */
    if (selectedProducts.length === 0) {
      showToast("취소할 상품을 선택해주세요.", "error");

      return;
    }

    /*
     * 취소 사유 확인
     */
    if (selectedReason === "취소 사유 선택") {
      showToast("취소 사유를 선택해주세요.", "error");

      return;
    }

    const selectedItems = getSelectedItems();

    /*
     * 전체 선택이면 ALL
     * 일부 선택이면 PARTIAL
     */
    const scope = isAllSelected ? "ALL" : "PARTIAL";

    /*
     * PARTIAL일 때만 items 생성
     */
    const claimItems = selectedItems.map(({ item }) => ({
      productId: getProductId(item),
      quantity: Number(item.quantity ?? 1),
    }));

    /*
     * 부분취소 상품의 productId 확인
     */
    if (scope === "PARTIAL" && claimItems.some((item) => !item.productId)) {
      showToast("취소할 상품 정보를 확인할 수 없습니다.", "error");

      return;
    }

    try {
      setIsSubmitting(true);

      /*
       * 전체취소
       *
       * {
       *   orderId,
       *   type: "CANCEL",
       *   scope: "ALL",
       *   reason,
       *   detailReason
       * }
       *
       *
       * 부분취소
       *
       * {
       *   orderId,
       *   type: "CANCEL",
       *   scope: "PARTIAL",
       *   items: [...],
       *   reason,
       *   detailReason
       * }
       */

      const requestData = {
        orderId,

        type: "CANCEL",

        scope,

        /*
         * PARTIAL일 때만 items 추가
         */
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

  /*
   * 로딩
   */
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

  /*
   * 주문 조회 실패
   */
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
          {/* 페이지 제목 */}
          <section className="return-page-header">
            <h1>주문 취소</h1>

            <p>취소할 상품을 선택하고 취소 사유를 입력해주세요.</p>
          </section>

          {/* 상품 선택 영역 */}
          <section className="product-selection">
            <div className="product-selection-header">
              <div className="selection-title-area">
                {/* 전체 선택 체크박스 */}
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

                {/* 취소 범위 표시 */}
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

            {/* 상품 목록 */}
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
                    {/* 상품 체크박스 */}
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

                    {/* 상품 정보 */}
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

                    {/* 선택 상태 */}
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

            {/* 취소 사유 */}
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

          {/* 취소 안내 */}
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
              {/* 현재 취소 범위 요약 */}
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
