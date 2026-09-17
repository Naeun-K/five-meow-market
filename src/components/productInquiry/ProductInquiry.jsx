// // import { useEffect, useMemo, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // import * as S from "./CustomerInquiryPageStyle";

// // import EmptyReviewCat from "../../assets/empty-review-cat.webp";
// // import Loader from "../../components/loader/Loader";

// // import useAuth from "../../hooks/useAuth";
// // import useToast from "../../hooks/useToast";

// // import { getMyInquiries } from "../../services/inquiryService";
// // import * as productService from "../../services/productServices";

// // const STATUS_FILTERS = [
// //   {
// //     key: "all",
// //     label: "전체",
// //   },
// //   {
// //     key: "ANSWERED",
// //     label: "답변완료",
// //   },
// //   {
// //     key: "WAITING",
// //     label: "답변대기",
// //   },
// // ];

// // const CATEGORY_LABELS = {
// //   product: "상품 문의",
// //   delivery: "배송 문의",
// //   order: "주문/결제 문의",
// //   exchange: "교환/반품 문의",
// //   etc: "기타 문의",
// // };

// // const ORDER_RELATED_CATEGORIES = ["delivery", "order", "exchange"];

// // function formatDate(dateString) {
// //   if (!dateString) {
// //     return "";
// //   }

// //   const date = new Date(dateString);

// //   if (Number.isNaN(date.getTime())) {
// //     return dateString;
// //   }

// //   const year = date.getFullYear();
// //   const month = String(date.getMonth() + 1).padStart(2, "0");
// //   const day = String(date.getDate()).padStart(2, "0");

// //   return `${year}-${month}-${day}`;
// // }

// // function getProductImage(product) {
// //   return (
// //     product?.thumbnail ||
// //     product?.thumbnailUrl ||
// //     product?.image ||
// //     product?.imageUrl ||
// //     product?.images?.[0] ||
// //     null
// //   );
// // }

// // function LockIcon() {
// //   return (
// //     <svg
// //       className="lock-icon"
// //       xmlns="http://www.w3.org/2000/svg"
// //       width="16"
// //       height="16"
// //       viewBox="0 0 16 16"
// //       fill="currentColor"
// //       aria-label="비밀글"
// //     >
// //       <path
// //         fillRule="evenodd"
// //         d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"
// //       />
// //     </svg>
// //   );
// // }

// // function RelatedInformation({ inquiry, product }) {
// //   if (inquiry.category === "product") {
// //     const productImage = getProductImage(product);

// //     return (
// //       <div className="product">
// //         <div className="product-image">
// //           {productImage ? (
// //             <img src={productImage} alt={product?.name || "문의 상품"} />
// //           ) : (
// //             <span>사진</span>
// //           )}
// //         </div>

// //         <div className="product-info">
// //           <strong>{product?.name || "상품 정보 없음"}</strong>
// //           <span>{CATEGORY_LABELS.product}</span>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (ORDER_RELATED_CATEGORIES.includes(inquiry.category)) {
// //     return (
// //       <div className="related-order">
// //         <strong>{CATEGORY_LABELS[inquiry.category] || "주문 관련 문의"}</strong>

// //         <span>
// //           {inquiry.orderId ? `주문번호 ${inquiry.orderId}` : "연결된 주문 없음"}
// //         </span>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="related-order">
// //       <strong>{CATEGORY_LABELS[inquiry.category] || "기타 문의"}</strong>

// //       <span>관련 정보 없음</span>
// //     </div>
// //   );
// // }

// // function EmptyInquiry({ filter, onResetFilter, onWriteInquiry }) {
// //   const isFiltered = filter !== "all";

// //   return (
// //     <div className="empty-inquiry">
// //       <div className="empty-image-wrapper">
// //         <img
// //           src={EmptyReviewCat}
// //           alt=""
// //           aria-hidden="true"
// //           className="empty-image"
// //         />
// //       </div>

// //       <strong className="empty-title">
// //         {isFiltered
// //           ? "조건에 맞는 문의가 없습니다."
// //           : "작성한 문의가 없습니다."}
// //       </strong>

// //       <p className="empty-description">
// //         {isFiltered ? (
// //           <>
// //             선택한 답변 상태에 해당하는
// //             <br />
// //             문의 내역이 없습니다.
// //           </>
// //         ) : (
// //           <>
// //             상품이나 주문에 대해 궁금한 내용이 있다면
// //             <br />
// //             문의를 작성해주세요.
// //           </>
// //         )}
// //       </p>

// //       {isFiltered ? (
// //         <button type="button" className="empty-button" onClick={onResetFilter}>
// //           전체 문의 보기
// //         </button>
// //       ) : (
// //         <button type="button" className="empty-button" onClick={onWriteInquiry}>
// //           문의 작성하기
// //         </button>
// //       )}
// //     </div>
// //   );
// // }

// // function LoginRequired({ onLogin }) {
// //   return (
// //     <div className="empty-inquiry">
// //       <div className="empty-image-wrapper">
// //         <img
// //           src={EmptyReviewCat}
// //           alt=""
// //           aria-hidden="true"
// //           className="empty-image"
// //         />
// //       </div>

// //       <strong className="empty-title">로그인이 필요합니다.</strong>

// //       <p className="empty-description">
// //         로그인 후 내가 작성한
// //         <br />
// //         문의 내역을 확인할 수 있습니다.
// //       </p>

// //       <button type="button" className="empty-button" onClick={onLogin}>
// //         로그인하러 가기
// //       </button>
// //     </div>
// //   );
// // }

// // function ErrorInquiry({ message, onRetry }) {
// //   return (
// //     <div className="empty-inquiry">
// //       <div className="empty-image-wrapper">
// //         <img
// //           src={EmptyReviewCat}
// //           alt=""
// //           aria-hidden="true"
// //           className="empty-image"
// //         />
// //       </div>

// //       <strong className="empty-title">문의 내역을 불러오지 못했습니다.</strong>

// //       <p className="empty-description">
// //         {message || "잠시 후 다시 시도해주세요."}
// //       </p>

// //       <button type="button" className="empty-button" onClick={onRetry}>
// //         다시 불러오기
// //       </button>
// //     </div>
// //   );
// // }

// // function InquiryPageTitle() {
// //   return (
// //     <S.TitleArea>
// //       <div>
// //         <h1>문의 내역</h1>
// //         <p>내가 작성한 문의 내역을 확인할 수 있어요.</p>
// //       </div>
// //     </S.TitleArea>
// //   );
// // }

// // export default function ProductInquiry() {
// //   const navigate = useNavigate();

// //   const { accessToken, isLoggedIn, isAuthLoading } = useAuth();

// //   const { showToast } = useToast();

// //   const [filter, setFilter] = useState("all");
// //   const [sortOrder, setSortOrder] = useState("latest");

// //   const [inquiries, setInquiries] = useState([]);
// //   const [products, setProducts] = useState([]);

// //   const [requestStatus, setRequestStatus] = useState("loading");

// //   const [errorMessage, setErrorMessage] = useState("");
// //   const [reloadKey, setReloadKey] = useState(0);

// //   useEffect(() => {
// //     if (!accessToken) {
// //       return undefined;
// //     }

// //     let isCancelled = false;

// //     Promise.all([
// //       getMyInquiries(
// //         {
// //           page: 1,
// //           limit: 100,
// //         },
// //         accessToken,
// //       ),

// //       productService.getProducts({
// //         page: 1,
// //         limit: 100,
// //       }),
// //     ])
// //       .then(([inquiryResponse, productResponse]) => {
// //         if (isCancelled) {
// //           return;
// //         }

// //         if (inquiryResponse?.success === false) {
// //           throw new Error(
// //             inquiryResponse.message || "문의 내역을 불러오지 못했습니다.",
// //           );
// //         }

// //         const inquiryList =
// //           inquiryResponse?.data?.inquiries ?? inquiryResponse?.inquiries ?? [];

// //         const productList =
// //           productResponse?.data?.products ?? productResponse?.products ?? [];

// //         setInquiries(Array.isArray(inquiryList) ? inquiryList : []);

// //         setProducts(Array.isArray(productList) ? productList : []);

// //         setErrorMessage("");
// //         setRequestStatus("success");
// //       })
// //       .catch((error) => {
// //         if (isCancelled) {
// //           return;
// //         }

// //         console.error("문의 내역 조회 실패:", error);

// //         const message = error?.message || "문의 내역을 불러오지 못했습니다.";

// //         setErrorMessage(message);
// //         setRequestStatus("error");

// //         showToast(message, false);
// //       });

// //     return () => {
// //       isCancelled = true;
// //     };
// //   }, [accessToken, reloadKey, showToast]);

// //   const productMap = useMemo(() => {
// //     return new Map(products.map((product) => [product.productId, product]));
// //   }, [products]);

// //   const inquiryCounts = useMemo(() => {
// //     return {
// //       all: inquiries.length,

// //       ANSWERED: inquiries.filter((inquiry) => inquiry.status === "ANSWERED")
// //         .length,

// //       WAITING: inquiries.filter((inquiry) => inquiry.status === "WAITING")
// //         .length,
// //     };
// //   }, [inquiries]);

// //   const filteredInquiries = useMemo(() => {
// //     const filtered =
// //       filter === "all"
// //         ? inquiries
// //         : inquiries.filter((inquiry) => inquiry.status === filter);

// //     return [...filtered].sort((first, second) => {
// //       const firstDate = new Date(first.createdAt).getTime();

// //       const secondDate = new Date(second.createdAt).getTime();

// //       const safeFirstDate = Number.isNaN(firstDate) ? 0 : firstDate;

// //       const safeSecondDate = Number.isNaN(secondDate) ? 0 : secondDate;

// //       if (sortOrder === "latest") {
// //         return safeSecondDate - safeFirstDate;
// //       }

// //       return safeFirstDate - safeSecondDate;
// //     });
// //   }, [filter, inquiries, sortOrder]);

// //   const showTableHeader =
// //     requestStatus === "success" && filteredInquiries.length > 0;

// //   const handleInquiryClick = (inquiryId) => {
// //     navigate(`/community/qna/${inquiryId}`);
// //   };

// //   const handleRetry = () => {
// //     setRequestStatus("loading");
// //     setErrorMessage("");
// //     setReloadKey((previous) => previous + 1);
// //   };

// //   if (isAuthLoading) {
// //     return (
// //       <S.Container>
// //         <div className="page-loader">
// //           <Loader />
// //         </div>
// //       </S.Container>
// //     );
// //   }

// //   if (!isLoggedIn || !accessToken) {
// //     return (
// //       <S.Container>
// //         <InquiryPageTitle />

// //         <S.Table>
// //           <LoginRequired onLogin={() => navigate("/login")} />
// //         </S.Table>
// //       </S.Container>
// //     );
// //   }

// //   return (
// //     <S.Container>
// //       <InquiryPageTitle />

// //       <S.FilterArea>
// //         <S.Filter>
// //           {STATUS_FILTERS.map((statusFilter) => (
// //             <button
// //               key={statusFilter.key}
// //               type="button"
// //               className={filter === statusFilter.key ? "active" : ""}
// //               onClick={() => setFilter(statusFilter.key)}
// //             >
// //               {statusFilter.label}

// //               <span>{inquiryCounts[statusFilter.key] ?? 0}</span>
// //             </button>
// //           ))}
// //         </S.Filter>

// //         <S.Sort>
// //           <button
// //             type="button"
// //             className={sortOrder === "latest" ? "active" : ""}
// //             onClick={() => setSortOrder("latest")}
// //           >
// //             최신순
// //           </button>

// //           <span aria-hidden="true">|</span>

// //           <button
// //             type="button"
// //             className={sortOrder === "oldest" ? "active" : ""}
// //             onClick={() => setSortOrder("oldest")}
// //           >
// //             오래된순
// //           </button>
// //         </S.Sort>
// //       </S.FilterArea>

// //       <S.Table>
// //         {showTableHeader && (
// //           <div className="table-header">
// //             <span>번호</span>
// //             <span>관련 정보</span>
// //             <span>제목</span>
// //             <span>작성일</span>
// //             <span>답변상태</span>
// //             <span>조회</span>
// //           </div>
// //         )}

// //         {requestStatus === "loading" ? (
// //           <div className="table-loader">
// //             <Loader />
// //           </div>
// //         ) : requestStatus === "error" ? (
// //           <ErrorInquiry message={errorMessage} onRetry={handleRetry} />
// //         ) : filteredInquiries.length === 0 ? (
// //           <EmptyInquiry
// //             filter={filter}
// //             onResetFilter={() => setFilter("all")}
// //             onWriteInquiry={() => navigate("/inquiries/write")}
// //           />
// //         ) : (
// //           filteredInquiries.map((inquiry, index) => {
// //             const product = productMap.get(inquiry.productId);

// //             const originalIndex = inquiries.findIndex(
// //               (item) => item.inquiryId === inquiry.inquiryId,
// //             );

// //             const fallbackNumber =
// //               originalIndex >= 0
// //                 ? inquiries.length - originalIndex
// //                 : filteredInquiries.length - index;

// //             return (
// //               <div
// //                 className="table-row"
// //                 key={inquiry.inquiryId || `inquiry-${index}`}
// //               >
// //                 <span className="number">
// //                   {inquiry.number ?? fallbackNumber}
// //                 </span>

// //                 <RelatedInformation inquiry={inquiry} product={product} />

// //                 <button
// //                   type="button"
// //                   className="inquiry-title"
// //                   onClick={() => handleInquiryClick(inquiry.inquiryId)}
// //                 >
// //                   {inquiry.isPrivate && <LockIcon />}

// //                   <span className="title-text">{inquiry.title}</span>
// //                 </button>

// //                 <span className="date">{formatDate(inquiry.createdAt)}</span>

// //                 <span
// //                   className={`status ${
// //                     inquiry.status === "ANSWERED" ? "complete" : "waiting"
// //                   }`}
// //                 >
// //                   {inquiry.status === "ANSWERED" ? "답변완료" : "답변대기"}
// //                 </span>

// //                 <span className="views">{inquiry.viewCount ?? 0}</span>
// //               </div>
// //             );
// //           })
// //         )}
// //       </S.Table>
// //     </S.Container>
// //   );
// // }
// import { useEffect, useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import * as S from "./ProductInquiry.style";

// import EmptyReviewCat from "../../assets/empty-review-cat.webp";
// import Loader from "../../components/loader/Loader";

// import useAuth from "../../hooks/useAuth";
// import useToast from "../../hooks/useToast";

// import { getMyInquiries } from "../../services/inquiryService";
// import * as productService from "../../services/productServices";

// const STATUS_FILTERS = [
//   {
//     key: "all",
//     label: "전체",
//   },
//   {
//     key: "ANSWERED",
//     label: "답변완료",
//   },
//   {
//     key: "WAITING",
//     label: "답변대기",
//   },
// ];

// const CATEGORY_LABELS = {
//   product: "상품 문의",
//   delivery: "배송 문의",
//   order: "주문/결제 문의",
//   exchange: "교환/반품 문의",
//   etc: "기타 문의",
// };

// const ORDER_RELATED_CATEGORIES = ["delivery", "order", "exchange"];

// function formatDate(dateString) {
//   if (!dateString) {
//     return "";
//   }

//   const date = new Date(dateString);

//   if (Number.isNaN(date.getTime())) {
//     return dateString;
//   }

//   const year = date.getFullYear();

//   const month = String(date.getMonth() + 1).padStart(2, "0");

//   const day = String(date.getDate()).padStart(2, "0");

//   return `${year}-${month}-${day}`;
// }

// function getProductImage(product) {
//   return (
//     product?.thumbnail ||
//     product?.thumbnailUrl ||
//     product?.image ||
//     product?.imageUrl ||
//     product?.images?.[0] ||
//     null
//   );
// }

// function LockIcon() {
//   return (
//     <svg
//       className="lock-icon"
//       xmlns="http://www.w3.org/2000/svg"
//       width="16"
//       height="16"
//       viewBox="0 0 16 16"
//       fill="currentColor"
//       aria-label="비밀글"
//     >
//       <path
//         fillRule="evenodd"
//         d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"
//       />
//     </svg>
//   );
// }

// function RelatedInformation({ inquiry, product }) {
//   if (inquiry.category === "product") {
//     const productImage = getProductImage(product);

//     return (
//       <div className="product">
//         <div className="product-image">
//           {productImage ? (
//             <img src={productImage} alt={product?.name || "문의 상품"} />
//           ) : (
//             <span>사진</span>
//           )}
//         </div>

//         <div className="product-info">
//           <strong>{product?.name || "상품 정보 없음"}</strong>

//           <span>{CATEGORY_LABELS.product}</span>
//         </div>
//       </div>
//     );
//   }

//   if (ORDER_RELATED_CATEGORIES.includes(inquiry.category)) {
//     return (
//       <div className="related-order">
//         <strong>{CATEGORY_LABELS[inquiry.category] || "주문 관련 문의"}</strong>

//         <span>
//           {inquiry.orderId ? `주문번호 ${inquiry.orderId}` : "연결된 주문 없음"}
//         </span>
//       </div>
//     );
//   }

//   return (
//     <div className="related-order">
//       <strong>{CATEGORY_LABELS[inquiry.category] || "기타 문의"}</strong>

//       <span>관련 정보 없음</span>
//     </div>
//   );
// }

// function EmptyInquiry({ filter, onResetFilter, onWriteInquiry }) {
//   const isFiltered = filter !== "all";

//   return (
//     <S.EmptyState>
//       <S.EmptyImageWrapper>
//         <S.EmptyImage src={EmptyReviewCat} alt="" aria-hidden="true" />
//       </S.EmptyImageWrapper>

//       <S.EmptyTitle>
//         {isFiltered
//           ? "조건에 맞는 문의가 없습니다."
//           : "작성한 문의가 없습니다."}
//       </S.EmptyTitle>

//       <S.EmptyDescription>
//         {isFiltered ? (
//           <>
//             선택한 답변 상태에 해당하는 문의가 없어요.
//             <br />
//             다른 조건으로 확인해주세요.
//           </>
//         ) : (
//           <>
//             상품이나 주문에 대해 궁금한 내용이 있다면
//             <br />
//             문의를 작성해주세요.
//           </>
//         )}
//       </S.EmptyDescription>

//       <S.EmptyButton
//         type="button"
//         onClick={isFiltered ? onResetFilter : onWriteInquiry}
//       >
//         {isFiltered ? "전체 문의 보기" : "문의 작성하기"}
//       </S.EmptyButton>
//     </S.EmptyState>
//   );
// }

// function ErrorInquiry({ message, onRetry }) {
//   return (
//     <S.EmptyState>
//       <S.EmptyImageWrapper>
//         <S.EmptyImage src={EmptyReviewCat} alt="" aria-hidden="true" />
//       </S.EmptyImageWrapper>

//       <S.EmptyTitle>문의 내역을 불러오지 못했습니다.</S.EmptyTitle>

//       <S.EmptyDescription>
//         {message || "잠시 후 다시 시도해주세요."}
//       </S.EmptyDescription>

//       <S.EmptyButton type="button" onClick={onRetry}>
//         다시 불러오기
//       </S.EmptyButton>
//     </S.EmptyState>
//   );
// }

// function InquiryPageTitle() {
//   return (
//     <S.TitleArea>
//       <div>
//         <h1>문의 내역</h1>

//         <p>내가 작성한 문의 내역을 확인할 수 있어요.</p>
//       </div>
//     </S.TitleArea>
//   );
// }

// export default function ProductInquiry() {
//   const navigate = useNavigate();

//   const { accessToken, isAuthLoading } = useAuth();

//   const { showToast } = useToast();

//   const [filter, setFilter] = useState("all");

//   const [sortOrder, setSortOrder] = useState("latest");

//   const [inquiries, setInquiries] = useState([]);

//   const [products, setProducts] = useState([]);

//   const [requestStatus, setRequestStatus] = useState("loading");

//   const [errorMessage, setErrorMessage] = useState("");

//   const [reloadKey, setReloadKey] = useState(0);

//   useEffect(() => {
//     if (!accessToken) {
//       return undefined;
//     }

//     let isCancelled = false;

//     Promise.all([
//       getMyInquiries(
//         {
//           page: 1,
//           limit: 100,
//         },
//         accessToken,
//       ),

//       productService.getProducts({
//         page: 1,
//         limit: 100,
//       }),
//     ])
//       .then(([inquiryResponse, productResponse]) => {
//         if (isCancelled) {
//           return;
//         }

//         if (inquiryResponse?.success === false) {
//           throw new Error(
//             inquiryResponse.message || "문의 내역을 불러오지 못했습니다.",
//           );
//         }

//         const inquiryList =
//           inquiryResponse?.data?.inquiries ?? inquiryResponse?.inquiries ?? [];

//         const productList =
//           productResponse?.data?.products ?? productResponse?.products ?? [];

//         setInquiries(Array.isArray(inquiryList) ? inquiryList : []);

//         setProducts(Array.isArray(productList) ? productList : []);

//         setErrorMessage("");

//         setRequestStatus("success");
//       })
//       .catch((error) => {
//         if (isCancelled) {
//           return;
//         }

//         console.error("문의 내역 조회 실패:", error);

//         const message = error?.message || "문의 내역을 불러오지 못했습니다.";

//         setErrorMessage(message);

//         setRequestStatus("error");

//         showToast(message, false);
//       });

//     return () => {
//       isCancelled = true;
//     };
//   }, [accessToken, reloadKey, showToast]);

//   const productMap = useMemo(() => {
//     return new Map(products.map((product) => [product.productId, product]));
//   }, [products]);

//   const inquiryCounts = useMemo(() => {
//     return {
//       all: inquiries.length,

//       ANSWERED: inquiries.filter((inquiry) => inquiry.status === "ANSWERED")
//         .length,

//       WAITING: inquiries.filter((inquiry) => inquiry.status === "WAITING")
//         .length,
//     };
//   }, [inquiries]);

//   const filteredInquiries = useMemo(() => {
//     const filtered =
//       filter === "all"
//         ? inquiries
//         : inquiries.filter((inquiry) => inquiry.status === filter);

//     return [...filtered].sort((first, second) => {
//       const firstDate = new Date(first.createdAt).getTime();

//       const secondDate = new Date(second.createdAt).getTime();

//       const safeFirstDate = Number.isNaN(firstDate) ? 0 : firstDate;

//       const safeSecondDate = Number.isNaN(secondDate) ? 0 : secondDate;

//       if (sortOrder === "latest") {
//         return safeSecondDate - safeFirstDate;
//       }

//       return safeFirstDate - safeSecondDate;
//     });
//   }, [filter, inquiries, sortOrder]);

//   const showTableHeader =
//     requestStatus === "success" && filteredInquiries.length > 0;

//   const handleInquiryClick = (inquiryId) => {
//     navigate(`/community/qna/${inquiryId}`);
//   };

//   const handleRetry = () => {
//     setRequestStatus("loading");

//     setErrorMessage("");

//     setReloadKey((previous) => previous + 1);
//   };

//   if (isAuthLoading) {
//     return (
//       <S.Container>
//         <S.PageLoader>
//           <Loader />
//         </S.PageLoader>
//       </S.Container>
//     );
//   }

//   return (
//     <S.Container>
//       <InquiryPageTitle />

//       <S.FilterArea>
//         <S.Filter>
//           {STATUS_FILTERS.map((statusFilter) => (
//             <button
//               key={statusFilter.key}
//               type="button"
//               className={filter === statusFilter.key ? "active" : ""}
//               onClick={() => setFilter(statusFilter.key)}
//             >
//               {statusFilter.label}

//               <span>{inquiryCounts[statusFilter.key] ?? 0}</span>
//             </button>
//           ))}
//         </S.Filter>

//         <S.Sort>
//           <button
//             type="button"
//             className={sortOrder === "latest" ? "active" : ""}
//             onClick={() => setSortOrder("latest")}
//           >
//             최신순
//           </button>

//           <span aria-hidden="true">|</span>

//           <button
//             type="button"
//             className={sortOrder === "oldest" ? "active" : ""}
//             onClick={() => setSortOrder("oldest")}
//           >
//             오래된순
//           </button>
//         </S.Sort>
//       </S.FilterArea>

//       <S.Table>
//         {showTableHeader && (
//           <div className="table-header">
//             <span>번호</span>
//             <span>관련 정보</span>
//             <span>제목</span>
//             <span>작성일</span>
//             <span>답변상태</span>
//             <span>조회</span>
//           </div>
//         )}

//         {requestStatus === "loading" ? (
//           <S.TableLoader>
//             <Loader />
//           </S.TableLoader>
//         ) : requestStatus === "error" ? (
//           <ErrorInquiry message={errorMessage} onRetry={handleRetry} />
//         ) : filteredInquiries.length === 0 ? (
//           <EmptyInquiry
//             filter={filter}
//             onResetFilter={() => setFilter("all")}
//             onWriteInquiry={() => navigate("/support/inquiry")}
//           />
//         ) : (
//           filteredInquiries.map((inquiry, index) => {
//             const product = productMap.get(inquiry.productId);

//             const originalIndex = inquiries.findIndex(
//               (item) => item.inquiryId === inquiry.inquiryId,
//             );

//             const fallbackNumber =
//               originalIndex >= 0
//                 ? inquiries.length - originalIndex
//                 : filteredInquiries.length - index;

//             return (
//               <div
//                 className="table-row"
//                 key={inquiry.inquiryId || `inquiry-${index}`}
//               >
//                 <span className="number">
//                   {inquiry.number ?? fallbackNumber}
//                 </span>

//                 <RelatedInformation inquiry={inquiry} product={product} />

//                 <button
//                   type="button"
//                   className="inquiry-title"
//                   onClick={() => handleInquiryClick(inquiry.inquiryId)}
//                 >
//                   {inquiry.isPrivate && <LockIcon />}

//                   <span className="title-text">{inquiry.title}</span>
//                 </button>

//                 <span className="date">{formatDate(inquiry.createdAt)}</span>

//                 <span
//                   className={`status ${
//                     inquiry.status === "ANSWERED" ? "complete" : "waiting"
//                   }`}
//                 >
//                   {inquiry.status === "ANSWERED" ? "답변완료" : "답변대기"}
//                 </span>

//                 <span className="views">{inquiry.viewCount ?? 0}</span>
//               </div>
//             );
//           })
//         )}
//       </S.Table>
//     </S.Container>
//   );
// }

import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./ProductInquiry.style";

import EmptyReviewCat from "../../assets/empty-review-cat.webp";
import Loader from "../../components/loader/Loader";
import ForwardButton from "../common/forwardBtn/ForwardButton";

import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";

import { getMyInquiries } from "../../services/inquiryService";
import * as productService from "../../services/productServices";

const STATUS_FILTERS = [
  {
    key: "all",
    label: "전체",
  },
  {
    key: "ANSWERED",
    label: "답변완료",
  },
  {
    key: "WAITING",
    label: "답변대기",
  },
];

const CATEGORY_LABELS = {
  product: "상품 문의",
  delivery: "배송 문의",
  order: "주문/결제 문의",
  exchange: "교환/반품 문의",
  etc: "기타 문의",
};

const ORDER_RELATED_CATEGORIES = ["delivery", "order", "exchange"];

function formatDate(dateString) {
  if (!dateString) {
    return "";
  }

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  const year = date.getFullYear();

  const month = String(date.getMonth() + 1).padStart(2, "0");

  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getProductImage(product) {
  return (
    product?.thumbnail ||
    product?.thumbnailUrl ||
    product?.image ||
    product?.imageUrl ||
    product?.images?.[0] ||
    null
  );
}

function LockIcon() {
  return (
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
  );
}

function RelatedInformation({ inquiry, product }) {
  // 상품 문의
  if (inquiry.category === "product") {
    const productImage = getProductImage(product);

    return (
      <div className="product">
        <div className="product-image">
          {productImage ? (
            <img src={productImage} alt={product?.name || "문의 상품"} />
          ) : (
            <span>사진</span>
          )}
        </div>

        <div className="product-info">
          <strong>{product?.name || "상품 정보 없음"}</strong>

          <span>{CATEGORY_LABELS.product}</span>
        </div>
      </div>
    );
  }

  // 배송 / 주문 / 교환·반품 문의
  if (ORDER_RELATED_CATEGORIES.includes(inquiry.category)) {
    return (
      <div className="related-order">
        <strong>{CATEGORY_LABELS[inquiry.category] || "주문 관련 문의"}</strong>

        <span>
          {inquiry.orderId ? `주문번호 ${inquiry.orderId}` : "연결된 주문 없음"}
        </span>
      </div>
    );
  }

  // 기타 문의
  return (
    <div className="related-order">
      <strong>{CATEGORY_LABELS[inquiry.category] || "기타 문의"}</strong>

      <span>관련 정보 없음</span>
    </div>
  );
}

function EmptyInquiry({ filter, onResetFilter, onWriteInquiry }) {
  const isFiltered = filter !== "all";

  return (
    <S.EmptyState>
      <S.EmptyImageWrapper>
        <S.EmptyImage src={EmptyReviewCat} alt="" aria-hidden="true" />
      </S.EmptyImageWrapper>

      <S.EmptyTitle>
        {isFiltered
          ? "조건에 맞는 문의가 없습니다."
          : "작성한 문의가 없습니다."}
      </S.EmptyTitle>

      <S.EmptyDescription>
        {isFiltered ? (
          <>
            선택한 답변 상태에 해당하는 문의가 없어요.
            <br />
            다른 조건으로 확인해주세요.
          </>
        ) : (
          <>
            상품이나 주문에 대해 궁금한 내용이 있다면
            <br />
            문의를 작성해주세요.
          </>
        )}
      </S.EmptyDescription>

      <S.EmptyButton
        type="button"
        onClick={isFiltered ? onResetFilter : onWriteInquiry}
      >
        {isFiltered ? "전체 문의 보기" : "문의 작성하기"}
      </S.EmptyButton>
    </S.EmptyState>
  );
}

function ErrorInquiry({ message, onRetry }) {
  return (
    <S.EmptyState>
      <S.EmptyImageWrapper>
        <S.EmptyImage src={EmptyReviewCat} alt="" aria-hidden="true" />
      </S.EmptyImageWrapper>

      <S.EmptyTitle>문의 내역을 불러오지 못했습니다.</S.EmptyTitle>

      <S.EmptyDescription>
        {message || "잠시 후 다시 시도해주세요."}
      </S.EmptyDescription>

      <S.EmptyButton type="button" onClick={onRetry}>
        다시 불러오기
      </S.EmptyButton>
    </S.EmptyState>
  );
}

function InquiryPageTitle() {
  const navigate = useNavigate();

  return (
    <S.TitleArea>
      <ForwardButton onClick={() => navigate("/mypage")}>
        마이페이지로
      </ForwardButton>

      <div>
        <h1>문의 내역</h1>

        <p>내가 작성한 문의 내역을 확인할 수 있어요.</p>
      </div>
    </S.TitleArea>
  );
}

export default function ProductInquiry() {
  const navigate = useNavigate();

  const { accessToken, isLoggedIn, isAuthLoading } = useAuth();

  const { showToast } = useToast();

  const [filter, setFilter] = useState("all");

  const [sortOrder, setSortOrder] = useState("latest");

  const [inquiries, setInquiries] = useState([]);

  const [products, setProducts] = useState([]);

  const [requestStatus, setRequestStatus] = useState("loading");

  const [errorMessage, setErrorMessage] = useState("");

  const [reloadKey, setReloadKey] = useState(0);

  // ==========================================
  // 내 문의 내역 + 상품 정보 조회
  // ==========================================
  useEffect(() => {
    if (isAuthLoading || !isLoggedIn || !accessToken) {
      return;
    }

    let isCancelled = false;

    const fetchInquiryData = async () => {
      try {
        // ======================================
        // 문의 조회
        //
        // GET /users/me/inquiries
        //
        // inquiryService 반환:
        //
        // {
        //   success,
        //   inquiries,
        //   pagination,
        //   message
        // }
        // ======================================
        const inquiryResult = await getMyInquiries(
          {
            page: 1,
            limit: 100,

            // 전체가 아닐 때만 API에 전달
            status: filter === "all" ? undefined : filter,
          },
          accessToken,
        );

        if (!inquiryResult.success) {
          throw new Error(
            inquiryResult.message || "문의 내역을 불러오지 못했습니다.",
          );
        }

        if (isCancelled) {
          return;
        }

        const inquiryList = inquiryResult.inquiries ?? [];

        // ======================================
        // 상품 문의에 필요한 productId만 추출
        // ======================================
        const hasProductInquiry = inquiryList.some(
          (inquiry) => inquiry.category === "product" && inquiry.productId,
        );

        let productList = [];

        // ======================================
        // 상품 문의가 있을 때만 상품 조회
        // ======================================
        if (hasProductInquiry) {
          const productResult = await productService.getProducts({
            page: 1,
            limit: 100,
          });

          if (productResult?.success === false) {
            throw new Error(
              productResult.message || "상품 정보를 불러오지 못했습니다.",
            );
          }

          if (isCancelled) {
            return;
          }

          productList = productResult.products ?? [];
        }

        if (isCancelled) {
          return;
        }

        setInquiries(Array.isArray(inquiryList) ? inquiryList : []);

        setProducts(Array.isArray(productList) ? productList : []);

        setErrorMessage("");

        setRequestStatus("success");
      } catch (error) {
        if (isCancelled) {
          return;
        }

        console.error("문의 내역 조회 실패:", error);

        const message = error?.message || "문의 내역을 불러오지 못했습니다.";

        setErrorMessage(message);

        setRequestStatus("error");

        showToast(message, false);
      }
    };

    fetchInquiryData();

    return () => {
      isCancelled = true;
    };
  }, [accessToken, isLoggedIn, isAuthLoading, filter, reloadKey, showToast]);

  // ==========================================
  // 상품 ID → 상품 정보
  // ==========================================
  const productMap = useMemo(() => {
    return new Map(
      products.map((product) => [String(product.productId), product]),
    );
  }, [products]);

  // ==========================================
  // 문의 개수
  //
  // 현재 조회된 문의 기준
  // ==========================================
  const inquiryCounts = useMemo(() => {
    return {
      all: filter === "all" ? inquiries.length : inquiries.length,

      ANSWERED:
        filter === "ANSWERED"
          ? inquiries.length
          : inquiries.filter((inquiry) => inquiry.status === "ANSWERED").length,

      WAITING:
        filter === "WAITING"
          ? inquiries.length
          : inquiries.filter((inquiry) => inquiry.status === "WAITING").length,
    };
  }, [filter, inquiries]);

  // ==========================================
  // 최신순 / 오래된순
  // ==========================================
  const filteredInquiries = useMemo(() => {
    return [...inquiries].sort((first, second) => {
      const firstDate = new Date(first.createdAt).getTime();

      const secondDate = new Date(second.createdAt).getTime();

      const safeFirstDate = Number.isNaN(firstDate) ? 0 : firstDate;

      const safeSecondDate = Number.isNaN(secondDate) ? 0 : secondDate;

      if (sortOrder === "latest") {
        return safeSecondDate - safeFirstDate;
      }

      return safeFirstDate - safeSecondDate;
    });
  }, [inquiries, sortOrder]);

  const showTableHeader =
    requestStatus === "success" && filteredInquiries.length > 0;

  // ==========================================
  // 문의 상세
  // ==========================================
  const handleInquiryClick = (inquiryId) => {
    if (!inquiryId) {
      showToast("문의 정보를 확인할 수 없습니다.", false);

      return;
    }

    navigate(`/community/qna/${inquiryId}`);
  };

  // ==========================================
  // 재조회
  // ==========================================
  const handleRetry = () => {
    setRequestStatus("loading");

    setErrorMessage("");

    setReloadKey((previous) => previous + 1);
  };

  // ==========================================
  // 필터 변경
  // ==========================================
  const handleFilterChange = (nextFilter) => {
    if (filter === nextFilter) {
      return;
    }

    setRequestStatus("loading");

    setFilter(nextFilter);
  };

  // ==========================================
  // 인증 복구 중
  // ==========================================
  if (isAuthLoading) {
    return (
      <S.Container>
        <S.PageLoader>
          <Loader />
        </S.PageLoader>
      </S.Container>
    );
  }

  // ==========================================
  // 비로그인
  // ==========================================
  if (!isLoggedIn || !accessToken) {
    return (
      <S.Container>
        <InquiryPageTitle />

        <S.Table>
          <S.EmptyState>
            <S.EmptyImageWrapper>
              <S.EmptyImage src={EmptyReviewCat} alt="" aria-hidden="true" />
            </S.EmptyImageWrapper>

            <S.EmptyTitle>로그인이 필요합니다.</S.EmptyTitle>

            <S.EmptyDescription>
              로그인 후 내가 작성한
              <br />
              문의 내역을 확인할 수 있습니다.
            </S.EmptyDescription>

            <S.EmptyButton type="button" onClick={() => navigate("/login")}>
              로그인하러 가기
            </S.EmptyButton>
          </S.EmptyState>
        </S.Table>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <InquiryPageTitle />

      <S.FilterArea>
        <S.Filter>
          {STATUS_FILTERS.map((statusFilter) => (
            <button
              key={statusFilter.key}
              type="button"
              className={filter === statusFilter.key ? "active" : ""}
              onClick={() => handleFilterChange(statusFilter.key)}
            >
              {statusFilter.label}

              <span>{inquiryCounts[statusFilter.key] ?? 0}</span>
            </button>
          ))}
        </S.Filter>

        <S.Sort>
          <button
            type="button"
            className={sortOrder === "latest" ? "active" : ""}
            onClick={() => setSortOrder("latest")}
          >
            최신순
          </button>

          <span aria-hidden="true">|</span>

          <button
            type="button"
            className={sortOrder === "oldest" ? "active" : ""}
            onClick={() => setSortOrder("oldest")}
          >
            오래된순
          </button>
        </S.Sort>
      </S.FilterArea>

      <S.Table>
        {showTableHeader && (
          <div className="table-header">
            <span>번호</span>
            <span>관련 정보</span>
            <span>제목</span>
            <span>작성일</span>
            <span>답변상태</span>
            <span>조회</span>
          </div>
        )}

        {requestStatus === "loading" ? (
          <S.TableLoader>
            <Loader />
          </S.TableLoader>
        ) : requestStatus === "error" ? (
          <ErrorInquiry message={errorMessage} onRetry={handleRetry} />
        ) : filteredInquiries.length === 0 ? (
          <EmptyInquiry
            filter={filter}
            onResetFilter={() => handleFilterChange("all")}
            onWriteInquiry={() => navigate("/support/inquiry")}
          />
        ) : (
          filteredInquiries.map((inquiry, index) => {
            const product = productMap.get(String(inquiry.productId));

            const fallbackNumber = filteredInquiries.length - index;

            return (
              <div
                className="table-row"
                key={inquiry.inquiryId || `inquiry-${index}`}
              >
                <span className="number">
                  {inquiry.number ?? fallbackNumber}
                </span>

                <RelatedInformation inquiry={inquiry} product={product} />

                <button
                  type="button"
                  className="inquiry-title"
                  onClick={() => handleInquiryClick(inquiry.inquiryId)}
                >
                  {inquiry.isPrivate && <LockIcon />}

                  <span className="title-text">{inquiry.title}</span>
                </button>

                <span className="date">{formatDate(inquiry.createdAt)}</span>

                <span
                  className={`status ${
                    inquiry.status === "ANSWERED" ? "complete" : "waiting"
                  }`}
                >
                  {inquiry.status === "ANSWERED" ? "답변완료" : "답변대기"}
                </span>

                <span className="views">{inquiry.viewCount ?? 0}</span>
              </div>
            );
          })
        )}
      </S.Table>
    </S.Container>
  );
}
