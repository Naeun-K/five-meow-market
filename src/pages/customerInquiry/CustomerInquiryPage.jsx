// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import Header from "../../components/header/header";
// import Footer from "../../components/footer/Footer";
// import FloatingIcon from "../../components/FloatingIcon/FloatingIcon";
// import Loader from "../../components/loader/Loader";

// import logoEat from "../../assets/logo-eat.webp";
// import logoClean from "../../assets/logo-clean.webp";
// import logoHigh from "../../assets/logo-high.webp";
// import logoPlay from "../../assets/logo-play.webp";
// import logoRest from "../../assets/logo-rest.webp";

// import CustomerInquiryPageStyle from "./CustomerInquiryPageStyle";

// import useAuth from "../../hooks/useAuth";
// import useToast from "../../hooks/useToast";

// import { createInquiry } from "../../services/inquiryService";

// import * as orderService from "../../services/orderServices";
// import * as productService from "../../services/productServices";

// const CATEGORY_OPTIONS = [
//   {
//     value: "product",
//     label: "상품 문의",
//   },
//   {
//     value: "delivery",
//     label: "배송 문의",
//   },
//   {
//     value: "order",
//     label: "주문/결제 문의",
//   },
//   {
//     value: "exchange",
//     label: "교환/반품 문의",
//   },
//   {
//     value: "etc",
//     label: "기타 문의",
//   },
// ];

// const ORDER_RELATED_CATEGORIES = ["delivery", "order", "exchange"];

// const ORDER_STATUS_LABELS = {
//   PAYMENT_COMPLETED: "결제완료",
//   PREPARING_SHIPMENT: "상품준비중",
//   SHIPPING: "배송중",
//   DELIVERED: "배송완료",
//   CONFIRMED: "구매결정",
//   CANCELED: "주문취소",
// };

// function formatPrice(price) {
//   return `${Number(price ?? 0).toLocaleString()}원`;
// }

// function formatDateTime(dateString) {
//   if (!dateString) {
//     return "";
//   }

//   const date = new Date(dateString);

//   if (Number.isNaN(date.getTime())) {
//     return dateString;
//   }

//   return new Intl.DateTimeFormat("ko-KR", {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit",
//   }).format(date);
// }

// function SelectArrow({ isOpen }) {
//   return (
//     <svg
//       className={`select-arrow ${isOpen ? "is-open" : ""}`}
//       viewBox="0 0 24 24"
//       aria-hidden="true"
//     >
//       <path d="M7 10l5 5 5-5H7z" />
//     </svg>
//   );
// }

// const CustomerInquiryPage = () => {
//   const navigate = useNavigate();

//   const categorySelectRef = useRef(null);

//   const relatedSelectRef = useRef(null);

//   const { accessToken, isLoggedIn, isAuthLoading } = useAuth();

//   const { showToast } = useToast();

//   const [formData, setFormData] = useState({
//     category: "",
//     orderId: null,
//     productId: null,
//     title: "",
//     content: "",
//     isPrivate: false,
//   });

//   const [products, setProducts] = useState([]);

//   const [orders, setOrders] = useState([]);

//   const [isCategoryOpen, setIsCategoryOpen] = useState(false);

//   const [isRelatedSelectOpen, setIsRelatedSelectOpen] = useState(false);

//   const [isRelatedDataLoading, setIsRelatedDataLoading] = useState(false);

//   const [hasLoadedProducts, setHasLoadedProducts] = useState(false);

//   const [hasLoadedOrders, setHasLoadedOrders] = useState(false);

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const selectedCategory = CATEGORY_OPTIONS.find(
//     (option) => option.value === formData.category,
//   );

//   const isProductCategory = formData.category === "product";

//   const isOrderRelatedCategory = ORDER_RELATED_CATEGORIES.includes(
//     formData.category,
//   );

//   /*
//    * 주문 관련 문의이면서 로그인한 회원일 때만
//    * 주문내역 드롭다운을 표시한다.
//    */
//   const canSelectOrder =
//     isOrderRelatedCategory && isLoggedIn && Boolean(accessToken);

//   const selectedProduct = products.find(
//     (product) => product.productId === formData.productId,
//   );

//   const selectedOrder = orders.find(
//     (order) => order.orderId === formData.orderId,
//   );

//   /**
//    * 드롭다운 외부 클릭
//    */
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         categorySelectRef.current &&
//         !categorySelectRef.current.contains(event.target)
//       ) {
//         setIsCategoryOpen(false);
//       }

//       if (
//         relatedSelectRef.current &&
//         !relatedSelectRef.current.contains(event.target)
//       ) {
//         setIsRelatedSelectOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   /**
//    * 상품 문의용 전체 상품 조회
//    *
//    * 상품 문의의 전체 상품 드롭다운은
//    * 로그인 여부와 관계없이 표시한다.
//    */
//   useEffect(() => {
//     if (!isProductCategory || hasLoadedProducts) {
//       return undefined;
//     }

//     let isCancelled = false;

//     productService
//       .getProducts({
//         page: 1,
//         limit: 100,
//       })
//       .then((response) => {
//         if (isCancelled) {
//           return;
//         }

//         if (response.success === false) {
//           throw new Error(
//             response.message || "상품 목록을 불러오지 못했습니다.",
//           );
//         }

//         const productList = response.data?.products ?? response.products ?? [];

//         setProducts(productList);

//         setHasLoadedProducts(true);
//       })
//       .catch((error) => {
//         if (isCancelled) {
//           return;
//         }

//         console.error("전체 상품 조회 실패:", error);

//         showToast(error.message || "상품 목록을 불러오지 못했습니다.", false);

//         setHasLoadedProducts(true);
//       })
//       .finally(() => {
//         if (!isCancelled) {
//           setIsRelatedDataLoading(false);
//         }
//       });

//     return () => {
//       isCancelled = true;
//     };
//   }, [hasLoadedProducts, isProductCategory, showToast]);

//   /**
//    * 로그인한 사용자의 주문내역 조회
//    *
//    * 배송 문의, 주문/결제 문의,
//    * 교환/반품 문의에서 사용한다.
//    */
//   useEffect(() => {
//     if (!canSelectOrder || hasLoadedOrders) {
//       return undefined;
//     }

//     let isCancelled = false;

//     orderService
//       .getOrders(
//         {
//           period: "all",
//           status: "ALL",
//           keyword: "",
//           page: 1,
//           limit: 100,
//         },
//         accessToken,
//       )
//       .then((response) => {
//         if (isCancelled) {
//           return;
//         }

//         if (!response.success) {
//           throw new Error(
//             response.message || "주문내역을 불러오지 못했습니다.",
//           );
//         }

//         const orderList = response.data?.orders ?? response.orders ?? [];

//         setOrders(orderList);

//         setHasLoadedOrders(true);
//       })
//       .catch((error) => {
//         if (isCancelled) {
//           return;
//         }

//         console.error("주문내역 조회 실패:", error);

//         showToast(error.message || "주문내역을 불러오지 못했습니다.", false);

//         setHasLoadedOrders(true);
//       })
//       .finally(() => {
//         if (!isCancelled) {
//           setIsRelatedDataLoading(false);
//         }
//       });

//     return () => {
//       isCancelled = true;
//     };
//   }, [accessToken, canSelectOrder, hasLoadedOrders, showToast]);

//   const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;

//     setFormData((previous) => ({
//       ...previous,

//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleCategorySelect = (category) => {
//     if (category === "product" && !hasLoadedProducts) {
//       setIsRelatedDataLoading(true);
//     }

//     const isSelectedOrderCategory = ORDER_RELATED_CATEGORIES.includes(category);

//     /*
//      * 로그인한 회원이 주문 관련 문의를
//      * 선택한 경우에만 로딩 상태를 시작한다.
//      */
//     if (
//       isSelectedOrderCategory &&
//       isLoggedIn &&
//       accessToken &&
//       !hasLoadedOrders
//     ) {
//       setIsRelatedDataLoading(true);
//     }

//     setFormData((previous) => ({
//       ...previous,
//       category,
//       orderId: null,
//       productId: null,
//     }));

//     setIsCategoryOpen(false);

//     setIsRelatedSelectOpen(false);
//   };

//   const handleProductSelect = (productId) => {
//     setFormData((previous) => ({
//       ...previous,

//       /*
//        * 상품 문의는 productId만 사용한다.
//        */
//       orderId: null,
//       productId,
//     }));

//     setIsRelatedSelectOpen(false);
//   };

//   const handleOrderSelect = (orderId) => {
//     setFormData((previous) => ({
//       ...previous,

//       /*
//        * 주문 관련 문의는 orderId만 사용한다.
//        */
//       orderId,
//       productId: null,
//     }));

//     setIsRelatedSelectOpen(false);
//   };

//   const validateForm = () => {
//     if (!formData.category) {
//       showToast("문의 유형을 선택해주세요.", false);

//       return false;
//     }

//     if (isProductCategory && !formData.productId) {
//       showToast("문의할 상품을 선택해주세요.", false);

//       return false;
//     }

//     /*
//      * 로그인한 회원에게 주문내역 드롭다운이
//      * 표시된 경우에만 주문 선택을 검사한다.
//      */
//     if (canSelectOrder && !formData.orderId) {
//       showToast("문의할 주문내역을 선택해주세요.", false);

//       return false;
//     }

//     if (!formData.title.trim()) {
//       showToast("제목을 입력해주세요.", false);

//       return false;
//     }

//     if (!formData.content.trim()) {
//       showToast("문의 내용을 입력해주세요.", false);

//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (isSubmitting) {
//       return;
//     }

//     /*
//      * 현재 Inquiry API 명세는 문의 작성 시
//      * 로그인을 요구한다.
//      */
//     if (!isLoggedIn || !accessToken) {
//       showToast("로그인 후 문의를 작성해주세요.", false);

//       navigate("/login");

//       return;
//     }

//     if (!validateForm()) {
//       return;
//     }

//     try {
//       setIsSubmitting(true);

//       const result = await createInquiry(
//         {
//           category: formData.category,

//           /*
//            * 상품 문의에서만 productId 전달
//            */
//           productId: isProductCategory ? formData.productId : null,

//           /*
//            * 로그인 회원의 주문 관련 문의에서만
//            * orderId 전달
//            */
//           orderId: canSelectOrder ? formData.orderId : null,

//           title: formData.title.trim(),

//           content: formData.content.trim(),

//           isPrivate: formData.isPrivate,
//         },
//         accessToken,
//       );

//       if (!result.success) {
//         throw new Error(result.message || "문의 등록에 실패했습니다.");
//       }

//       showToast(result.message || "문의가 등록되었습니다.", true);

//       navigate("/community/qna");
//     } catch (error) {
//       console.error("문의 등록 실패:", error);

//       showToast(error.message || "문의 등록에 실패했습니다.", false);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleCancel = () => {
//     navigate(-1);
//   };

//   if (isAuthLoading) {
//     return (
//       <CustomerInquiryPageStyle>
//         <Header />

//         <main className="customer-inquiry-layout">
//           <Loader />
//         </main>

//         <Footer />
//       </CustomerInquiryPageStyle>
//     );
//   }

//   return (
//     <CustomerInquiryPageStyle>
//       <Header />

//       <main className="customer-inquiry-layout">
//         <section className="customer-inquiry-page">
//           <div className="customer-inquiry-inner">
//             <div className="page-heading">
//               <h1>문의하기</h1>

//               <p className="page-description">
//                 궁금한 점이나 도움이 필요한 내용을 남겨주세요.
//                 <br />
//                 확인 후 빠르게 답변드리겠습니다.
//               </p>
//             </div>

//             <form className="inquiry-form" onSubmit={handleSubmit}>
//               {/* 문의 유형 */}
//               <div className="form-field">
//                 <label htmlFor="category">문의 유형</label>

//                 <div className="select-wrapper" ref={categorySelectRef}>
//                   <button
//                     type="button"
//                     id="category"
//                     className={`custom-select-button ${
//                       isCategoryOpen ? "is-open" : ""
//                     }`}
//                     onClick={() => setIsCategoryOpen((previous) => !previous)}
//                     aria-haspopup="listbox"
//                     aria-expanded={isCategoryOpen}
//                   >
//                     <span
//                       className={
//                         selectedCategory ? "selected-value" : "placeholder"
//                       }
//                     >
//                       {selectedCategory
//                         ? selectedCategory.label
//                         : "문의 유형을 선택해주세요"}
//                     </span>

//                     <SelectArrow isOpen={isCategoryOpen} />
//                   </button>

//                   {isCategoryOpen && (
//                     <ul className="custom-select-options" role="listbox">
//                       {CATEGORY_OPTIONS.map((option) => (
//                         <li
//                           key={option.value}
//                           role="option"
//                           aria-selected={formData.category === option.value}
//                         >
//                           <button
//                             type="button"
//                             className={`custom-select-option ${
//                               formData.category === option.value
//                                 ? "is-selected"
//                                 : ""
//                             }`}
//                             onClick={() => handleCategorySelect(option.value)}
//                           >
//                             {option.label}
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               </div>

//               {/* 상품 문의 */}
//               {isProductCategory && (
//                 <div className="form-field">
//                   <label htmlFor="product">문의 상품</label>

//                   <div
//                     className="select-wrapper related-select-wrapper"
//                     ref={relatedSelectRef}
//                   >
//                     <button
//                       type="button"
//                       id="product"
//                       className={`custom-select-button ${
//                         isRelatedSelectOpen ? "is-open" : ""
//                       }`}
//                       onClick={() =>
//                         setIsRelatedSelectOpen((previous) => !previous)
//                       }
//                       aria-haspopup="listbox"
//                       aria-expanded={isRelatedSelectOpen}
//                       disabled={isRelatedDataLoading}
//                     >
//                       <span
//                         className={
//                           selectedProduct ? "selected-value" : "placeholder"
//                         }
//                       >
//                         {isRelatedDataLoading
//                           ? "상품을 불러오는 중입니다."
//                           : selectedProduct
//                             ? selectedProduct.name
//                             : "문의할 상품을 선택해주세요"}
//                       </span>

//                       <SelectArrow isOpen={isRelatedSelectOpen} />
//                     </button>

//                     {isRelatedSelectOpen && !isRelatedDataLoading && (
//                       <ul
//                         className="custom-select-options related-select-options"
//                         role="listbox"
//                       >
//                         {products.length === 0 ? (
//                           <li className="empty-select-option">
//                             등록된 상품이 없습니다.
//                           </li>
//                         ) : (
//                           products.map((product) => (
//                             <li
//                               key={product.productId}
//                               role="option"
//                               aria-selected={
//                                 formData.productId === product.productId
//                               }
//                             >
//                               <button
//                                 type="button"
//                                 className={`custom-select-option related-select-option ${
//                                   formData.productId === product.productId
//                                     ? "is-selected"
//                                     : ""
//                                 }`}
//                                 onClick={() =>
//                                   handleProductSelect(product.productId)
//                                 }
//                               >
//                                 <span className="select-product-image">
//                                   {product.thumbnail ? (
//                                     <img src={product.thumbnail} alt="" />
//                                   ) : (
//                                     <span>사진</span>
//                                   )}
//                                 </span>

//                                 <span className="select-product-info">
//                                   <strong>{product.name}</strong>

//                                   <span>{formatPrice(product.price)}</span>
//                                 </span>
//                               </button>
//                             </li>
//                           ))
//                         )}
//                       </ul>
//                     )}
//                   </div>
//                 </div>
//               )}

//               {/*
//                * 주문 관련 문의
//                *
//                * 로그인한 회원에게만 표시된다.
//                * 비회원에게는 이 영역 자체가 렌더링되지 않는다.
//                */}
//               {canSelectOrder && (
//                 <div className="form-field">
//                   <label htmlFor="order">관련 주문</label>

//                   <div
//                     className="select-wrapper related-select-wrapper"
//                     ref={relatedSelectRef}
//                   >
//                     <button
//                       type="button"
//                       id="order"
//                       className={`custom-select-button ${
//                         isRelatedSelectOpen ? "is-open" : ""
//                       }`}
//                       onClick={() =>
//                         setIsRelatedSelectOpen((previous) => !previous)
//                       }
//                       aria-haspopup="listbox"
//                       aria-expanded={isRelatedSelectOpen}
//                       disabled={isRelatedDataLoading}
//                     >
//                       <span
//                         className={
//                           selectedOrder ? "selected-value" : "placeholder"
//                         }
//                       >
//                         {isRelatedDataLoading
//                           ? "주문내역을 불러오는 중입니다."
//                           : selectedOrder
//                             ? `주문번호 ${selectedOrder.orderId} · ${formatPrice(
//                                 selectedOrder.finalAmount,
//                               )}`
//                             : "문의할 주문내역을 선택해주세요"}
//                       </span>

//                       <SelectArrow isOpen={isRelatedSelectOpen} />
//                     </button>

//                     {isRelatedSelectOpen && !isRelatedDataLoading && (
//                       <ul
//                         className="custom-select-options related-select-options order-select-options"
//                         role="listbox"
//                       >
//                         {orders.length === 0 ? (
//                           <li className="empty-select-option">
//                             주문내역이 없습니다.
//                           </li>
//                         ) : (
//                           orders.map((order) => {
//                             const firstItem = order.items?.[0];

//                             const itemCount = order.items?.length ?? 0;

//                             const extraItemCount = Math.max(itemCount - 1, 0);

//                             const productSummary = firstItem
//                               ? `${firstItem.name}${
//                                   extraItemCount > 0
//                                     ? ` 외 ${extraItemCount}개`
//                                     : ""
//                                 }`
//                               : "주문 상품 정보 없음";

//                             return (
//                               <li
//                                 key={order.orderId}
//                                 role="option"
//                                 aria-selected={
//                                   formData.orderId === order.orderId
//                                 }
//                               >
//                                 <button
//                                   type="button"
//                                   className={`custom-select-option order-select-option ${
//                                     formData.orderId === order.orderId
//                                       ? "is-selected"
//                                       : ""
//                                   }`}
//                                   onClick={() =>
//                                     handleOrderSelect(order.orderId)
//                                   }
//                                 >
//                                   <span className="order-option-top">
//                                     <strong>주문번호 {order.orderId}</strong>

//                                     <span>
//                                       {ORDER_STATUS_LABELS[order.status] ??
//                                         order.status}
//                                     </span>
//                                   </span>

//                                   <span className="order-option-date">
//                                     주문일시: {formatDateTime(order.createdAt)}
//                                   </span>

//                                   <span className="order-option-product">
//                                     주문상품: {productSummary}
//                                   </span>

//                                   <strong className="order-option-price">
//                                     결제금액: {formatPrice(order.finalAmount)}
//                                   </strong>
//                                 </button>
//                               </li>
//                             );
//                           })
//                         )}
//                       </ul>
//                     )}
//                   </div>
//                 </div>
//               )}

//               {/* 제목 */}
//               <div className="form-field">
//                 <label htmlFor="title">제목</label>

//                 <input
//                   id="title"
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   placeholder="문의 제목을 입력해주세요."
//                   maxLength={100}
//                 />
//               </div>

//               {/* 문의 내용 */}
//               <div className="form-field">
//                 <label htmlFor="content">문의 내용</label>

//                 <textarea
//                   id="content"
//                   name="content"
//                   value={formData.content}
//                   onChange={handleChange}
//                   placeholder="문의하실 내용을 입력해주세요."
//                   maxLength={2000}
//                 />

//                 <span className="content-length">
//                   {formData.content.length}
//                   /2000
//                 </span>
//               </div>

//               {/* 비밀글 */}
//               <label className="secret-check">
//                 <input
//                   type="checkbox"
//                   name="isPrivate"
//                   checked={formData.isPrivate}
//                   onChange={handleChange}
//                 />

//                 <span className="custom-checkbox">
//                   {formData.isPrivate ? "✓" : ""}
//                 </span>

//                 <svg
//                   className="lock-icon"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   fill="currentColor"
//                   viewBox="0 0 16 16"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"
//                   />
//                 </svg>

//                 <span>비밀글로 문의하기</span>
//               </label>

//               {/* 하단 버튼 */}
//               <div className="form-buttons">
//                 <button
//                   type="button"
//                   className="cancel-button"
//                   onClick={handleCancel}
//                   disabled={isSubmitting}
//                 >
//                   취소
//                 </button>

//                 <div className="submit-button-wrapper">
//                   <div className="hover-cats" aria-hidden="true">
//                     <img src={logoEat} alt="" />

//                     <img src={logoClean} alt="" />

//                     <img src={logoHigh} alt="" />

//                     <img src={logoPlay} alt="" />

//                     <img src={logoRest} alt="" />
//                   </div>

//                   <button
//                     type="submit"
//                     className="submit-button"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? "등록 중..." : "문의 등록"}
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </section>
//       </main>

//       <FloatingIcon />

//       <Footer />
//     </CustomerInquiryPageStyle>
//   );
// };

// export default CustomerInquiryPage;

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import FloatingIcon from "../../components/FloatingIcon/FloatingIcon";
import Loader from "../../components/loader/Loader";

import logoEat from "../../assets/logo-eat.webp";
import logoClean from "../../assets/logo-clean.webp";
import logoHigh from "../../assets/logo-high.webp";
import logoPlay from "../../assets/logo-play.webp";
import logoRest from "../../assets/logo-rest.webp";

import CustomerInquiryPageStyle from "./CustomerInquiryPageStyle";

import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";

import { createInquiry } from "../../services/inquiryService";

import * as orderService from "../../services/orderServices";
import * as productService from "../../services/productServices";

const CATEGORY_OPTIONS = [
  {
    value: "product",
    label: "상품 문의",
  },
  {
    value: "delivery",
    label: "배송 문의",
  },
  {
    value: "order",
    label: "주문/결제 문의",
  },
  {
    value: "exchange",
    label: "교환/반품 문의",
  },
  {
    value: "etc",
    label: "기타 문의",
  },
];

const ORDER_RELATED_CATEGORIES = ["delivery", "order", "exchange"];

/*
 * 일반 주문 상태
 */
const ORDER_STATUS_LABELS = {
  PAYMENT_COMPLETED: "결제완료",
  PREPARING_SHIPMENT: "상품준비중",
  SHIPPING: "배송중",
  DELIVERED: "배송완료",
  CONFIRMED: "구매결정",
  CANCELED: "주문취소",
};

/*
 * Claim 유형
 */
const CLAIM_TYPE_LABELS = {
  CANCEL: "취소",
  EXCHANGE: "교환",
  RETURN: "반품",
};

/*
 * Claim 처리 상태
 */
const CLAIM_STATUS_LABELS = {
  REQUESTED: "신청완료",
  PROCESSING: "처리중",
  COMPLETED: "처리완료",
  REJECTED: "처리불가",
};

function formatPrice(price) {
  return `${Number(price ?? 0).toLocaleString("ko-KR")}원`;
}

function formatDateTime(dateString) {
  if (!dateString) {
    return "";
  }

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

/*
 * 주문 드롭다운에 표시할 상태를 계산합니다.
 *
 * 취소 신청 직후에는 order.status가 PAYMENT_COMPLETED여도
 * claimSummary를 확인하여 "취소 신청완료"를 표시합니다.
 */
function getOrderStatusLabel(order) {
  /*
   * 서버 주문 상태가 최종적으로 취소된 경우
   */
  if (order.status === "CANCELED") {
    return ORDER_STATUS_LABELS.CANCELED;
  }

  /*
   * 주문에 취소·교환·반품 Claim이 연결된 경우
   */
  if (order.claimSummary) {
    const typeLabel =
      CLAIM_TYPE_LABELS[order.claimSummary.type] ?? order.claimSummary.type;

    const statusLabel =
      CLAIM_STATUS_LABELS[order.claimSummary.status] ??
      order.claimSummary.status;

    return `${typeLabel} ${statusLabel}`;
  }

  /*
   * Claim이 없는 일반 주문
   */
  return ORDER_STATUS_LABELS[order.status] ?? order.status ?? "-";
}

function SelectArrow({ isOpen }) {
  return (
    <svg
      className={`select-arrow ${isOpen ? "is-open" : ""}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M7 10l5 5 5-5H7z" />
    </svg>
  );
}

const CustomerInquiryPage = () => {
  const navigate = useNavigate();

  const categorySelectRef = useRef(null);
  const relatedSelectRef = useRef(null);

  const { accessToken, isLoggedIn, isAuthLoading } = useAuth();

  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    category: "",
    orderId: null,
    productId: null,
    title: "",
    content: "",
    isPrivate: false,
  });

  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const [isRelatedSelectOpen, setIsRelatedSelectOpen] = useState(false);

  const [isRelatedDataLoading, setIsRelatedDataLoading] = useState(false);

  const [hasLoadedProducts, setHasLoadedProducts] = useState(false);

  const [hasLoadedOrders, setHasLoadedOrders] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedCategory = CATEGORY_OPTIONS.find(
    (option) => option.value === formData.category,
  );

  const isProductCategory = formData.category === "product";

  const isOrderRelatedCategory = ORDER_RELATED_CATEGORIES.includes(
    formData.category,
  );

  /*
   * 주문 관련 문의이면서 로그인한 회원일 때만
   * 주문내역 드롭다운을 표시합니다.
   */
  const canSelectOrder =
    isOrderRelatedCategory && isLoggedIn && Boolean(accessToken);

  const selectedProduct = products.find(
    (product) => product.productId === formData.productId,
  );

  const selectedOrder = orders.find(
    (order) => order.orderId === formData.orderId,
  );

  /*
   * 드롭다운 외부 클릭 처리
   */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categorySelectRef.current &&
        !categorySelectRef.current.contains(event.target)
      ) {
        setIsCategoryOpen(false);
      }

      if (
        relatedSelectRef.current &&
        !relatedSelectRef.current.contains(event.target)
      ) {
        setIsRelatedSelectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /*
   * 상품 문의용 전체 상품 조회
   */
  useEffect(() => {
    if (!isProductCategory || hasLoadedProducts) {
      return undefined;
    }

    let isCancelled = false;

    productService
      .getProducts({
        page: 1,
        limit: 100,
      })
      .then((response) => {
        if (isCancelled) {
          return;
        }

        if (response.success === false) {
          throw new Error(
            response.message || "상품 목록을 불러오지 못했습니다.",
          );
        }

        const productList = response.data?.products ?? response.products ?? [];

        setProducts(productList);
        setHasLoadedProducts(true);
      })
      .catch((error) => {
        if (isCancelled) {
          return;
        }

        console.error("전체 상품 조회 실패:", error);

        showToast(error.message || "상품 목록을 불러오지 못했습니다.", false);

        setHasLoadedProducts(true);
      })
      .finally(() => {
        if (!isCancelled) {
          setIsRelatedDataLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [hasLoadedProducts, isProductCategory, showToast]);

  /*
   * 로그인 사용자의 주문내역 조회
   *
   * 각 주문 응답에 claimSummary가 포함되어야
   * 취소·교환·반품 상태를 표시할 수 있습니다.
   */
  useEffect(() => {
    if (!canSelectOrder || hasLoadedOrders) {
      return undefined;
    }

    let isCancelled = false;

    orderService
      .getOrders(
        {
          period: "all",
          status: "ALL",
          keyword: "",
          page: 1,
          limit: 100,
        },
        accessToken,
      )
      .then((response) => {
        if (isCancelled) {
          return;
        }

        if (!response.success) {
          throw new Error(
            response.message || "주문내역을 불러오지 못했습니다.",
          );
        }

        const orderList = response.data?.orders ?? response.orders ?? [];

        setOrders(orderList);
        setHasLoadedOrders(true);
      })
      .catch((error) => {
        if (isCancelled) {
          return;
        }

        console.error("주문내역 조회 실패:", error);

        showToast(error.message || "주문내역을 불러오지 못했습니다.", false);

        setHasLoadedOrders(true);
      })
      .finally(() => {
        if (!isCancelled) {
          setIsRelatedDataLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [accessToken, canSelectOrder, hasLoadedOrders, showToast]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,

      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCategorySelect = (category) => {
    if (category === "product" && !hasLoadedProducts) {
      setIsRelatedDataLoading(true);
    }

    const isSelectedOrderCategory = ORDER_RELATED_CATEGORIES.includes(category);

    if (
      isSelectedOrderCategory &&
      isLoggedIn &&
      accessToken &&
      !hasLoadedOrders
    ) {
      setIsRelatedDataLoading(true);
    }

    setFormData((previous) => ({
      ...previous,
      category,
      orderId: null,
      productId: null,
    }));

    setIsCategoryOpen(false);
    setIsRelatedSelectOpen(false);
  };

  const handleProductSelect = (productId) => {
    setFormData((previous) => ({
      ...previous,
      orderId: null,
      productId,
    }));

    setIsRelatedSelectOpen(false);
  };

  const handleOrderSelect = (orderId) => {
    setFormData((previous) => ({
      ...previous,
      orderId,
      productId: null,
    }));

    setIsRelatedSelectOpen(false);
  };

  const validateForm = () => {
    if (!formData.category) {
      showToast("문의 유형을 선택해주세요.", false);

      return false;
    }

    if (isProductCategory && !formData.productId) {
      showToast("문의할 상품을 선택해주세요.", false);

      return false;
    }

    if (canSelectOrder && !formData.orderId) {
      showToast("문의할 주문내역을 선택해주세요.", false);

      return false;
    }

    if (!formData.title.trim()) {
      showToast("제목을 입력해주세요.", false);

      return false;
    }

    if (!formData.content.trim()) {
      showToast("문의 내용을 입력해주세요.", false);

      return false;
    }

    return true;
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   if (isSubmitting) {
  //     return;
  //   }

  //   if (!isLoggedIn || !accessToken) {
  //     showToast("로그인 후 문의를 작성해주세요.", false);

  //     navigate("/login");

  //     return;
  //   }

  //   if (!validateForm()) {
  //     return;
  //   }

  //   try {
  //     setIsSubmitting(true);

  //     const result = await createInquiry(
  //       {
  //         category: formData.category,

  //         /*
  //          * 상품 문의일 때만 productId를 전달합니다.
  //          */
  //         productId: isProductCategory ? formData.productId : null,

  //         /*
  //          * 주문 관련 문의일 때만 orderId를 전달합니다.
  //          */
  //         orderId: canSelectOrder ? formData.orderId : null,

  //         title: formData.title.trim(),

  //         content: formData.content.trim(),

  //         isPrivate: formData.isPrivate,
  //       },
  //       accessToken,
  //     );

  //     if (!result.success) {
  //       throw new Error(result.message || "문의 등록에 실패했습니다.");
  //     }

  //     showToast(result.message || "문의가 등록되었습니다.", true);

  //     navigate("/community/inquiry");
  //   } catch (error) {
  //     console.error("문의 등록 실패:", error);

  //     showToast(error.message || "문의 등록에 실패했습니다.", false);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    // 문의 작성은 로그인 필요
    if (!isLoggedIn || !accessToken) {
      showToast("로그인 후 문의를 작성해주세요.", false);
      navigate("/login");

      return;
    }

    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);

      const inquiryData = {
        category: formData.category,
        title: formData.title.trim(),
        content: formData.content.trim(),
        isPrivate: formData.isPrivate,
      };

      // 상품 문의
      // productId만 추가
      if (isProductCategory) {
        inquiryData.productId = formData.productId;
      }

      // 배송 / 주문·결제 / 교환·반품 문의
      // orderId만 추가
      if (isOrderRelatedCategory) {
        inquiryData.orderId = formData.orderId;
      }

      const result = await createInquiry(inquiryData, accessToken);

      if (!result.success) {
        throw new Error(result.message || "문의 등록에 실패했습니다.");
      }

      showToast(result.message || "문의가 등록되었습니다.", true);

      navigate("/community/inquiry");
    } catch (error) {
      console.error("문의 등록 실패:", error);

      showToast(error.message || "문의 등록에 실패했습니다.", false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  if (isAuthLoading) {
    return (
      <CustomerInquiryPageStyle>
        <Header />

        <main className="customer-inquiry-layout">
          <Loader />
        </main>

        <Footer />
      </CustomerInquiryPageStyle>
    );
  }

  return (
    <CustomerInquiryPageStyle>
      <Header />

      <main className="customer-inquiry-layout">
        <section className="customer-inquiry-page">
          <div className="customer-inquiry-inner">
            <div className="page-heading">
              <h1>문의하기</h1>

              <p className="page-description">
                궁금한 점이나 도움이 필요한 내용을 남겨주세요.
                <br />
                확인 후 빠르게 답변드리겠습니다.
              </p>
            </div>

            <form className="inquiry-form" onSubmit={handleSubmit}>
              {/* 문의 유형 */}
              <div className="form-field">
                <label htmlFor="category">문의 유형</label>

                <div className="select-wrapper" ref={categorySelectRef}>
                  <button
                    type="button"
                    id="category"
                    className={`custom-select-button ${
                      isCategoryOpen ? "is-open" : ""
                    }`}
                    onClick={() => setIsCategoryOpen((previous) => !previous)}
                    aria-haspopup="listbox"
                    aria-expanded={isCategoryOpen}
                  >
                    <span
                      className={
                        selectedCategory ? "selected-value" : "placeholder"
                      }
                    >
                      {selectedCategory
                        ? selectedCategory.label
                        : "문의 유형을 선택해주세요"}
                    </span>

                    <SelectArrow isOpen={isCategoryOpen} />
                  </button>

                  {isCategoryOpen && (
                    <ul className="custom-select-options" role="listbox">
                      {CATEGORY_OPTIONS.map((option) => (
                        <li
                          key={option.value}
                          role="option"
                          aria-selected={formData.category === option.value}
                        >
                          <button
                            type="button"
                            className={`custom-select-option ${
                              formData.category === option.value
                                ? "is-selected"
                                : ""
                            }`}
                            onClick={() => handleCategorySelect(option.value)}
                          >
                            {option.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* 상품 문의 */}
              {isProductCategory && (
                <div className="form-field">
                  <label htmlFor="product">문의 상품</label>

                  <div
                    className="select-wrapper related-select-wrapper"
                    ref={relatedSelectRef}
                  >
                    <button
                      type="button"
                      id="product"
                      className={`custom-select-button ${
                        isRelatedSelectOpen ? "is-open" : ""
                      }`}
                      onClick={() =>
                        setIsRelatedSelectOpen((previous) => !previous)
                      }
                      aria-haspopup="listbox"
                      aria-expanded={isRelatedSelectOpen}
                      disabled={isRelatedDataLoading}
                    >
                      <span
                        className={
                          selectedProduct ? "selected-value" : "placeholder"
                        }
                      >
                        {isRelatedDataLoading
                          ? "상품을 불러오는 중입니다."
                          : selectedProduct
                            ? selectedProduct.name
                            : "문의할 상품을 선택해주세요"}
                      </span>

                      <SelectArrow isOpen={isRelatedSelectOpen} />
                    </button>

                    {isRelatedSelectOpen && !isRelatedDataLoading && (
                      <ul
                        className="custom-select-options related-select-options"
                        role="listbox"
                      >
                        {products.length === 0 ? (
                          <li className="empty-select-option">
                            등록된 상품이 없습니다.
                          </li>
                        ) : (
                          products.map((product) => (
                            <li
                              key={product.productId}
                              role="option"
                              aria-selected={
                                formData.productId === product.productId
                              }
                            >
                              <button
                                type="button"
                                className={`custom-select-option related-select-option ${
                                  formData.productId === product.productId
                                    ? "is-selected"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleProductSelect(product.productId)
                                }
                              >
                                <span className="select-product-image">
                                  {product.thumbnail ? (
                                    <img src={product.thumbnail} alt="" />
                                  ) : (
                                    <span>사진</span>
                                  )}
                                </span>

                                <span className="select-product-info">
                                  <strong>{product.name}</strong>

                                  <span>{formatPrice(product.price)}</span>
                                </span>
                              </button>
                            </li>
                          ))
                        )}
                      </ul>
                    )}
                  </div>
                </div>
              )}

              {/* 주문 관련 문의 */}
              {canSelectOrder && (
                <div className="form-field">
                  <label htmlFor="order">관련 주문</label>

                  <div
                    className="select-wrapper related-select-wrapper"
                    ref={relatedSelectRef}
                  >
                    <button
                      type="button"
                      id="order"
                      className={`custom-select-button ${
                        isRelatedSelectOpen ? "is-open" : ""
                      }`}
                      onClick={() =>
                        setIsRelatedSelectOpen((previous) => !previous)
                      }
                      aria-haspopup="listbox"
                      aria-expanded={isRelatedSelectOpen}
                      disabled={isRelatedDataLoading}
                    >
                      <span
                        className={
                          selectedOrder ? "selected-value" : "placeholder"
                        }
                      >
                        {isRelatedDataLoading
                          ? "주문내역을 불러오는 중입니다."
                          : selectedOrder
                            ? `주문번호 ${
                                selectedOrder.orderId
                              } · ${getOrderStatusLabel(
                                selectedOrder,
                              )} · ${formatPrice(selectedOrder.finalAmount)}`
                            : "문의할 주문내역을 선택해주세요"}
                      </span>

                      <SelectArrow isOpen={isRelatedSelectOpen} />
                    </button>

                    {isRelatedSelectOpen && !isRelatedDataLoading && (
                      <ul
                        className="custom-select-options related-select-options order-select-options"
                        role="listbox"
                      >
                        {orders.length === 0 ? (
                          <li className="empty-select-option">
                            주문내역이 없습니다.
                          </li>
                        ) : (
                          orders.map((order) => {
                            const firstItem = order.items?.[0];

                            const itemCount = order.items?.length ?? 0;

                            const extraItemCount = Math.max(itemCount - 1, 0);

                            const productSummary = firstItem
                              ? `${firstItem.name}${
                                  extraItemCount > 0
                                    ? ` 외 ${extraItemCount}개`
                                    : ""
                                }`
                              : "주문 상품 정보 없음";

                            /*
                             * order.status와 claimSummary를
                             * 함께 확인한 상태입니다.
                             */
                            const orderStatusLabel = getOrderStatusLabel(order);

                            return (
                              <li
                                key={order.orderId}
                                role="option"
                                aria-selected={
                                  formData.orderId === order.orderId
                                }
                              >
                                <button
                                  type="button"
                                  className={`custom-select-option order-select-option ${
                                    formData.orderId === order.orderId
                                      ? "is-selected"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    handleOrderSelect(order.orderId)
                                  }
                                >
                                  <span className="order-option-top">
                                    <strong>주문번호 {order.orderId}</strong>

                                    {/*
                                     * 기존의 order.status 대신
                                     * Claim 상태까지 반영합니다.
                                     */}
                                    <span>{orderStatusLabel}</span>
                                  </span>

                                  <span className="order-option-date">
                                    주문일시: {formatDateTime(order.createdAt)}
                                  </span>

                                  <span className="order-option-product">
                                    주문상품: {productSummary}
                                  </span>

                                  <strong className="order-option-price">
                                    결제금액: {formatPrice(order.finalAmount)}
                                  </strong>
                                </button>
                              </li>
                            );
                          })
                        )}
                      </ul>
                    )}
                  </div>
                </div>
              )}

              {/* 제목 */}
              <div className="form-field">
                <label htmlFor="title">제목</label>

                <input
                  id="title"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="문의 제목을 입력해주세요."
                  maxLength={100}
                />
              </div>

              {/* 문의 내용 */}
              <div className="form-field">
                <label htmlFor="content">문의 내용</label>

                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="문의하실 내용을 입력해주세요."
                  maxLength={2000}
                />

                <span className="content-length">
                  {formData.content.length}
                  /2000
                </span>
              </div>

              {/* 비밀글 */}
              <label className="secret-check">
                <input
                  type="checkbox"
                  name="isPrivate"
                  checked={formData.isPrivate}
                  onChange={handleChange}
                />

                <span className="custom-checkbox">
                  {formData.isPrivate ? "✓" : ""}
                </span>

                <svg
                  className="lock-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"
                  />
                </svg>

                <span>비밀글로 문의하기</span>
              </label>

              {/* 하단 버튼 */}
              <div className="form-buttons">
                <button
                  type="button"
                  className="cancel-button"
                  onClick={handleCancel}
                  disabled={isSubmitting}
                >
                  취소
                </button>

                <div className="submit-button-wrapper">
                  <div className="hover-cats" aria-hidden="true">
                    <img src={logoEat} alt="" />

                    <img src={logoClean} alt="" />

                    <img src={logoHigh} alt="" />

                    <img src={logoPlay} alt="" />

                    <img src={logoRest} alt="" />
                  </div>

                  <button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "등록 중..." : "문의 등록"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      <FloatingIcon />

      <Footer />
    </CustomerInquiryPageStyle>
  );
};

export default CustomerInquiryPage;
