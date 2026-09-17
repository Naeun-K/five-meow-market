// // // import { useState } from "react";
// // // import * as S from "./reviewListStyle";
// // // import EmptyReviewCat from "../../assets/empty-review-cat.webp";

// // // const TABS = [
// // //   {
// // //     key: "available",
// // //     label: "작성 가능한 리뷰",
// // //   },
// // //   {
// // //     key: "written",
// // //     label: "작성한 리뷰",
// // //   },
// // // ];

// // // const REVIEWS = [
// // //   {
// // //     id: 1,
// // //     productName: "고양이 캣타워",
// // //     image: null,
// // //     rating: 5,
// // //     date: "2026.09.12",
// // //     content: "너무 가성비 있게 구매했고 추후에 재구매 의향 있습니다!",
// // //   },

// // //   {
// // //     id: 2,
// // //     productName: "집사말고 이거물어",
// // //     image: null,
// // //     rating: 5,
// // //     date: "2026.09.12",
// // //     content: "덕분에 주인님께 평소보다 덜 물렸습니다.",
// // //   },

// // //   {
// // //     id: 3,
// // //     productName: "못잡겠쥐?",
// // //     image: null,
// // //     rating: 5,
// // //     date: "2026.09.12",
// // //     content: "고양이한테 터키 아이스크림 빙의했다가 냥냥펀치 당했습니다.",
// // //   },
// // // ];

// // // function StarIcon({ filled }) {
// // //   return (
// // //     <svg
// // //       viewBox="0 0 24 24"
// // //       fill={filled ? "currentColor" : "none"}
// // //       stroke="currentColor"
// // //       strokeWidth="1.5"
// // //       aria-hidden="true"
// // //     >
// // //       <path
// // //         d="
// // //           M12 3.8
// // //           L14.5 8.9
// // //           L20.1 9.7
// // //           L16.1 13.6
// // //           L17 19.1
// // //           L12 16.5
// // //           L7 19.1
// // //           L7.9 13.6
// // //           L3.9 9.7
// // //           L9.5 8.9
// // //           Z
// // //         "
// // //       />
// // //     </svg>
// // //   );
// // // }

// // // function Rating({ rating }) {
// // //   return (
// // //     <S.StarRating>
// // //       {Array.from({ length: 5 }).map((_, index) => (
// // //         <StarIcon key={index} filled={index < rating} />
// // //       ))}
// // //     </S.StarRating>
// // //   );
// // // }

// // // function ReviewCard({ review, onEdit, onDelete }) {
// // //   return (
// // //     <S.ReviewCard>
// // //       <S.ProductArea>
// // //         <S.ProductImage>
// // //           {review.image ? (
// // //             <img src={review.image} alt={review.productName} />
// // //           ) : (
// // //             "사진"
// // //           )}
// // //         </S.ProductImage>

// // //         <S.ProductInfo>
// // //           <S.ProductName>{review.productName}</S.ProductName>

// // //           <S.MobileActions>
// // //             <S.ActionButton type="button" onClick={() => onEdit(review.id)}>
// // //               수정
// // //             </S.ActionButton>

// // //             <S.ActionDivider>|</S.ActionDivider>

// // //             <S.ActionButton type="button" onClick={() => onDelete(review.id)}>
// // //               {" "}
// // //               삭제
// // //             </S.ActionButton>
// // //           </S.MobileActions>
// // //         </S.ProductInfo>
// // //       </S.ProductArea>

// // //       <S.ReviewContent>
// // //         <S.ReviewTop>
// // //           <S.ReviewMeta>
// // //             <Rating rating={review.rating} />

// // //             <S.ReviewDate>{review.date} 작성</S.ReviewDate>
// // //           </S.ReviewMeta>

// // //           <S.ReviewActions>
// // //             <S.ActionButton type="button" onClick={() => onEdit(review.id)}>
// // //               수정
// // //             </S.ActionButton>

// // //             <S.ActionDivider>|</S.ActionDivider>

// // //             <S.ActionButton type="button" onClick={() => onDelete(review.id)}>
// // //               삭제
// // //             </S.ActionButton>
// // //           </S.ReviewActions>
// // //         </S.ReviewTop>

// // //         <S.ReviewTextBox>
// // //           <S.ReviewText>{review.content}</S.ReviewText>
// // //         </S.ReviewTextBox>
// // //       </S.ReviewContent>
// // //     </S.ReviewCard>
// // //   );
// // // }

// // // function EmptyReview({ activeTab }) {
// // //   const isWritten = activeTab === "written";

// // //   return (
// // //     <S.EmptyReview>
// // //       <S.EmptyImage src={EmptyReviewCat} alt="리뷰 내역 없음" />

// // //       <S.EmptyTitle>
// // //         {isWritten ? "리뷰내역이 없습니다." : "작성 가능한 리뷰가 없습니다."}
// // //       </S.EmptyTitle>

// // //       <S.EmptyDescription>
// // //         {isWritten ? (
// // //           <>
// // //             아직 작성한 리뷰가 없어요.
// // //             <br />
// // //             상품을 구매하고 소중한 후기를 남겨주세요!
// // //           </>
// // //         ) : (
// // //           <>
// // //             아직 작성 가능한 리뷰가 없어요.
// // //             <br />
// // //             상품을 구매하고 리뷰를 작성해보세요!
// // //           </>
// // //         )}
// // //       </S.EmptyDescription>

// // //       <S.ProductButton type="button">상품보러가기</S.ProductButton>
// // //     </S.EmptyReview>
// // //   );
// // // }

// // // export default function ReviewList() {
// // //   const [activeTab, setActiveTab] = useState("written");

// // //   const availableReviews = [];
// // //   const writtenReviews = REVIEWS;

// // //   const currentReviews =
// // //     activeTab === "written" ? writtenReviews : availableReviews;

// // //   const handleEdit = (reviewId) => {
// // //     console.log("리뷰 수정:", reviewId);
// // //   };

// // //   const handleDelete = (reviewId) => {
// // //     const isDelete = window.confirm("해당 리뷰를 삭제하시겠습니까?");

// // //     if (!isDelete) return;

// // //     console.log("리뷰 삭제:", reviewId);
// // //   };

// // //   return (
// // //     <S.Page>
// // //       <S.Header>
// // //         <S.Title>리뷰내역</S.Title>

// // //         <S.Subtitle>고객님의 리뷰 내역을 확인해보세요.</S.Subtitle>
// // //       </S.Header>

// // //       <S.TabSection>
// // //         <S.MainTabList>
// // //           {TABS.map((tab) => (
// // //             <S.MainTabButton
// // //               key={tab.key}
// // //               type="button"
// // //               isActive={activeTab === tab.key}
// // //               onClick={() => setActiveTab(tab.key)}
// // //             >
// // //               {tab.label}
// // //             </S.MainTabButton>
// // //           ))}
// // //         </S.MainTabList>

// // //         {/* [수정] 리뷰가 없으면 EmptyReview, 있으면 ReviewCard */}
// // //         <S.ReviewList>
// // //           {currentReviews.length === 0 ? (
// // //             <EmptyReview activeTab={activeTab} />
// // //           ) : (
// // //             currentReviews.map((review) => (
// // //               <ReviewCard
// // //                 key={review.id}
// // //                 review={review}
// // //                 onEdit={handleEdit}
// // //                 onDelete={handleDelete}
// // //               />
// // //             ))
// // //           )}
// // //         </S.ReviewList>
// // //       </S.TabSection>
// // //     </S.Page>
// // //   );
// // // }

// // import { useCallback, useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // import * as S from "./reviewListStyle";
// // import EmptyReviewCat from "../../assets/empty-review-cat.webp";

// // import {
// //   deleteReview,
// //   getMyReviews,
// //   getWritableReviews,
// // } from "../../services/reviewServices";

// // import { useAuth } from "../../providers/AuthProvider";

// // const TABS = [
// //   {
// //     key: "available",
// //     label: "작성 가능한 리뷰",
// //   },
// //   {
// //     key: "written",
// //     label: "작성한 리뷰",
// //   },
// // ];

// // function StarIcon({ filled }) {
// //   return (
// //     <svg
// //       viewBox="0 0 24 24"
// //       fill={filled ? "currentColor" : "none"}
// //       stroke="currentColor"
// //       strokeWidth="1.5"
// //       aria-hidden="true"
// //     >
// //       <path
// //         d="
// //           M12 3.8
// //           L14.5 8.9
// //           L20.1 9.7
// //           L16.1 13.6
// //           L17 19.1
// //           L12 16.5
// //           L7 19.1
// //           L7.9 13.6
// //           L3.9 9.7
// //           L9.5 8.9
// //           Z
// //         "
// //       />
// //     </svg>
// //   );
// // }

// // function Rating({ rating }) {
// //   return (
// //     <S.StarRating aria-label={`별점 ${rating}점`}>
// //       {Array.from({ length: 5 }).map((_, index) => (
// //         <StarIcon key={index} filled={index < rating} />
// //       ))}
// //     </S.StarRating>
// //   );
// // }

// // function formatDate(date) {
// //   if (!date) {
// //     return "";
// //   }

// //   const parsedDate = new Date(date);

// //   if (Number.isNaN(parsedDate.getTime())) {
// //     return date;
// //   }

// //   return new Intl.DateTimeFormat("ko-KR", {
// //     year: "numeric",
// //     month: "2-digit",
// //     day: "2-digit",
// //   })
// //     .format(parsedDate)
// //     .replaceAll(" ", "")
// //     .replace(/\.$/, "");
// // }

// // /**
// //  * 작성 가능한 리뷰 카드
// //  *
// //  * CONFIRMED 주문 중 아직 리뷰를 작성하지 않은
// //  * 주문 상품만 전달받는다.
// //  */
// // function WritableReviewCard({ item, onWrite }) {
// //   return (
// //     <S.ReviewCard>
// //       <S.ProductArea>
// //         <S.ProductImage>
// //           {item.thumbnail ? (
// //             <img src={item.thumbnail} alt={item.name} />
// //           ) : (
// //             "사진"
// //           )}
// //         </S.ProductImage>

// //         <S.ProductInfo>
// //           <S.ProductName>{item.name}</S.ProductName>
// //         </S.ProductInfo>
// //       </S.ProductArea>

// //       <S.ReviewContent>
// //         <S.ReviewTop>
// //           <S.ReviewMeta>
// //             <S.ReviewDate>
// //               {formatDate(item.confirmedAt)} 구매 확정
// //             </S.ReviewDate>
// //           </S.ReviewMeta>

// //           <S.ReviewActions>
// //             <S.ActionButton type="button" onClick={() => onWrite(item)}>
// //               리뷰 작성
// //             </S.ActionButton>
// //           </S.ReviewActions>
// //         </S.ReviewTop>

// //         <S.ReviewTextBox>
// //           <S.ReviewText>
// //             주문번호: {item.orderId}
// //             <br />
// //             수량: {item.quantity}개
// //             <br />
// //             결제 가격: {Number(item.price).toLocaleString()}원
// //           </S.ReviewText>
// //         </S.ReviewTextBox>
// //       </S.ReviewContent>
// //     </S.ReviewCard>
// //   );
// // }

// // /**
// //  * 작성한 리뷰 카드
// //  */
// // function WrittenReviewCard({ review, onEdit, onDelete }) {
// //   return (
// //     <S.ReviewCard>
// //       <S.ProductArea>
// //         <S.ProductImage>
// //           {review.productThumbnail ? (
// //             <img src={review.productThumbnail} alt={review.productName} />
// //           ) : (
// //             "사진"
// //           )}
// //         </S.ProductImage>

// //         <S.ProductInfo>
// //           <S.ProductName>{review.productName}</S.ProductName>

// //           <S.MobileActions>
// //             <S.ActionButton type="button" onClick={() => onEdit(review)}>
// //               수정
// //             </S.ActionButton>

// //             <S.ActionDivider>|</S.ActionDivider>

// //             <S.ActionButton
// //               type="button"
// //               onClick={() => onDelete(review.reviewId)}
// //             >
// //               삭제
// //             </S.ActionButton>
// //           </S.MobileActions>
// //         </S.ProductInfo>
// //       </S.ProductArea>

// //       <S.ReviewContent>
// //         <S.ReviewTop>
// //           <S.ReviewMeta>
// //             <Rating rating={review.rating} />

// //             <S.ReviewDate>{formatDate(review.createdAt)} 작성</S.ReviewDate>
// //           </S.ReviewMeta>

// //           <S.ReviewActions>
// //             <S.ActionButton type="button" onClick={() => onEdit(review)}>
// //               수정
// //             </S.ActionButton>

// //             <S.ActionDivider>|</S.ActionDivider>

// //             <S.ActionButton
// //               type="button"
// //               onClick={() => onDelete(review.reviewId)}
// //             >
// //               삭제
// //             </S.ActionButton>
// //           </S.ReviewActions>
// //         </S.ReviewTop>

// //         <S.ReviewTextBox>
// //           <S.ReviewText>{review.content}</S.ReviewText>
// //         </S.ReviewTextBox>
// //       </S.ReviewContent>
// //     </S.ReviewCard>
// //   );
// // }

// // function EmptyReview({ activeTab }) {
// //   const isWritten = activeTab === "written";

// //   const navigate = useNavigate();

// //   return (
// //     <S.EmptyReview>
// //       <S.EmptyImage src={EmptyReviewCat} alt="" aria-hidden="true" />

// //       <S.EmptyTitle>
// //         {isWritten ? "리뷰내역이 없습니다." : "작성 가능한 리뷰가 없습니다."}
// //       </S.EmptyTitle>

// //       <S.EmptyDescription>
// //         {isWritten ? (
// //           <>
// //             아직 작성한 리뷰가 없어요.
// //             <br />
// //             상품을 구매하고 소중한 후기를 남겨주세요!
// //           </>
// //         ) : (
// //           <>
// //             구매 결정된 주문 상품이 없거나
// //             <br />
// //             모든 상품의 리뷰를 이미 작성했어요.
// //           </>
// //         )}
// //       </S.EmptyDescription>

// //       <S.ProductButton type="button" onClick={() => navigate("/products")}>
// //         상품보러가기
// //       </S.ProductButton>
// //     </S.EmptyReview>
// //   );
// // }

// // export default function ReviewList({ onOpenWriteModal, onOpenEditModal }) {
// //   const { accessToken } = useAuth();

// //   const [activeTab, setActiveTab] = useState("available");

// //   const [availableReviews, setAvailableReviews] = useState([]);

// //   const [writtenReviews, setWrittenReviews] = useState([]);

// //   const [isLoading, setIsLoading] = useState(true);

// //   const [errorMessage, setErrorMessage] = useState("");

// //   const loadAvailableReviews = useCallback(async () => {
// //     if (!accessToken) {
// //       setAvailableReviews([]);
// //       return;
// //     }

// //     const response = await getWritableReviews(
// //       {
// //         page: 1,
// //         limit: 10,
// //       },
// //       accessToken,
// //     );

// //     setAvailableReviews(response.data?.items ?? []);
// //   }, [accessToken]);

// //   const loadWrittenReviews = useCallback(async () => {
// //     if (!accessToken) {
// //       setWrittenReviews([]);
// //       return;
// //     }

// //     const response = await getMyReviews(
// //       {
// //         page: 1,
// //         limit: 10,
// //       },
// //       accessToken,
// //     );

// //     setWrittenReviews(response.data?.reviews ?? []);
// //   }, [accessToken]);

// //   useEffect(() => {
// //     let isMounted = true;

// //     const loadReviews = async () => {
// //       try {
// //         setIsLoading(true);
// //         setErrorMessage("");

// //         if (activeTab === "available") {
// //           const response = await getWritableReviews(
// //             {
// //               page: 1,
// //               limit: 10,
// //             },
// //             accessToken,
// //           );

// //           if (!isMounted) {
// //             return;
// //           }

// //           setAvailableReviews(response.data?.items ?? []);
// //         } else {
// //           const response = await getMyReviews(
// //             {
// //               page: 1,
// //               limit: 10,
// //             },
// //             accessToken,
// //           );

// //           if (!isMounted) {
// //             return;
// //           }

// //           setWrittenReviews(response.data?.reviews ?? []);
// //         }
// //       } catch (error) {
// //         if (!isMounted) {
// //           return;
// //         }

// //         console.error("리뷰 목록 조회 실패:", error);

// //         setErrorMessage(error.message || "리뷰 목록을 불러오지 못했습니다.");
// //       } finally {
// //         if (isMounted) {
// //           setIsLoading(false);
// //         }
// //       }
// //     };

// //     if (accessToken) {
// //       loadReviews();
// //     } else {
// //       setIsLoading(false);
// //     }

// //     return () => {
// //       isMounted = false;
// //     };
// //   }, [activeTab, accessToken]);

// //   const handleTabChange = (tabKey) => {
// //     if (tabKey === activeTab) {
// //       return;
// //     }

// //     setActiveTab(tabKey);
// //     setErrorMessage("");
// //   };

// //   const handleWrite = (item) => {
// //     if (onOpenWriteModal) {
// //       onOpenWriteModal({
// //         orderId: item.orderId,
// //         productId: item.productId,
// //         productName: item.name,
// //         productThumbnail: item.thumbnail,
// //       });

// //       return;
// //     }

// //     console.log("리뷰 작성 대상:", item);
// //   };

// //   const handleEdit = (review) => {
// //     if (onOpenEditModal) {
// //       onOpenEditModal(review);
// //       return;
// //     }

// //     console.log("리뷰 수정 대상:", review);
// //   };

// //   const handleDelete = async (reviewId) => {
// //     const isDelete = window.confirm("해당 리뷰를 삭제하시겠습니까?");

// //     if (!isDelete) {
// //       return;
// //     }

// //     try {
// //       await deleteReview(reviewId, accessToken);

// //       /*
// //        * 삭제된 리뷰는 작성한 리뷰 목록에서 제거한다.
// //        */
// //       setWrittenReviews((previousReviews) =>
// //         previousReviews.filter((review) => review.reviewId !== reviewId),
// //       );

// //       /*
// //        * 리뷰 삭제 후 해당 주문 상품은
// //        * 다시 작성 가능한 리뷰가 된다.
// //        */
// //       await loadAvailableReviews();
// //     } catch (error) {
// //       console.error("리뷰 삭제 실패:", error);

// //       window.alert(error.message || "리뷰 삭제에 실패했습니다.");
// //     }
// //   };

// //   return (
// //     <S.Page>
// //       <S.Header>
// //         <S.Title>리뷰내역</S.Title>

// //         <S.Subtitle>고객님의 리뷰 내역을 확인해보세요.</S.Subtitle>
// //       </S.Header>

// //       <S.TabSection>
// //         <S.MainTabList>
// //           {TABS.map((tab) => (
// //             <S.MainTabButton
// //               key={tab.key}
// //               type="button"
// //               isActive={activeTab === tab.key}
// //               onClick={() => handleTabChange(tab.key)}
// //             >
// //               {tab.label}
// //             </S.MainTabButton>
// //           ))}
// //         </S.MainTabList>

// //         <S.ReviewList>
// //           {isLoading ? (
// //             <S.EmptyReview>리뷰 목록을 불러오는 중입니다.</S.EmptyReview>
// //           ) : errorMessage ? (
// //             <S.EmptyReview>
// //               <S.EmptyTitle>리뷰 목록을 불러오지 못했습니다.</S.EmptyTitle>

// //               <S.EmptyDescription>{errorMessage}</S.EmptyDescription>
// //             </S.EmptyReview>
// //           ) : activeTab === "available" ? (
// //             availableReviews.length === 0 ? (
// //               <EmptyReview activeTab={activeTab} />
// //             ) : (
// //               availableReviews.map((item) => (
// //                 <WritableReviewCard
// //                   key={`${item.orderId}-${item.productId}`}
// //                   item={item}
// //                   onWrite={handleWrite}
// //                 />
// //               ))
// //             )
// //           ) : writtenReviews.length === 0 ? (
// //             <EmptyReview activeTab={activeTab} />
// //           ) : (
// //             writtenReviews.map((review) => (
// //               <WrittenReviewCard
// //                 key={review.reviewId}
// //                 review={review}
// //                 onEdit={handleEdit}
// //                 onDelete={handleDelete}
// //               />
// //             ))
// //           )}
// //         </S.ReviewList>
// //       </S.TabSection>
// //     </S.Page>
// //   );
// // }

// import { useCallback, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import * as S from "./reviewListStyle";
// import EmptyReviewCat from "../../assets/empty-review-cat.webp";

// import {
//   deleteReview,
//   getMyReviews,
//   getWritableReviews,
// } from "../../services/reviewService";
// import useAuth from "../../hooks/useAuth";

// const TABS = [
//   {
//     key: "available",
//     label: "작성 가능한 리뷰",
//   },
//   {
//     key: "written",
//     label: "작성한 리뷰",
//   },
// ];

// function StarIcon({ filled }) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill={filled ? "currentColor" : "none"}
//       stroke="currentColor"
//       strokeWidth="1.5"
//       aria-hidden="true"
//     >
//       <path
//         d="
//           M12 3.8
//           L14.5 8.9
//           L20.1 9.7
//           L16.1 13.6
//           L17 19.1
//           L12 16.5
//           L7 19.1
//           L7.9 13.6
//           L3.9 9.7
//           L9.5 8.9
//           Z
//         "
//       />
//     </svg>
//   );
// }

// function Rating({ rating }) {
//   return (
//     <S.StarRating aria-label={`별점 ${rating}점`}>
//       {Array.from({ length: 5 }).map((_, index) => (
//         <StarIcon key={index} filled={index < rating} />
//       ))}
//     </S.StarRating>
//   );
// }

// function formatDate(date) {
//   if (!date) {
//     return "";
//   }

//   const parsedDate = new Date(date);

//   if (Number.isNaN(parsedDate.getTime())) {
//     return date;
//   }

//   const year = parsedDate.getFullYear();

//   const month = String(parsedDate.getMonth() + 1).padStart(2, "0");

//   const day = String(parsedDate.getDate()).padStart(2, "0");

//   return `${year}.${month}.${day}`;
// }

// /**
//  * 작성 가능한 리뷰 카드
//  *
//  * 구매 결정된 주문 상품 중 아직 리뷰를
//  * 작성하지 않은 상품을 표시한다.
//  */
// function WritableReviewCard({ item, onWrite }) {
//   return (
//     <S.ReviewCard>
//       <S.ProductArea>
//         <S.ProductImage>
//           {item.thumbnail ? (
//             <img src={item.thumbnail} alt={item.name} />
//           ) : (
//             "사진"
//           )}
//         </S.ProductImage>

//         <S.ProductInfo>
//           <S.ProductName>{item.name}</S.ProductName>

//           <S.MobileActions>
//             <S.ActionButton type="button" onClick={() => onWrite(item)}>
//               리뷰 작성
//             </S.ActionButton>
//           </S.MobileActions>
//         </S.ProductInfo>
//       </S.ProductArea>

//       <S.ReviewContent>
//         <S.ReviewTop>
//           <S.ReviewMeta>
//             <S.ReviewDate>
//               {formatDate(item.confirmedAt)} 구매 확정
//             </S.ReviewDate>
//           </S.ReviewMeta>

//           <S.ReviewActions>
//             <S.ActionButton type="button" onClick={() => onWrite(item)}>
//               리뷰 작성
//             </S.ActionButton>
//           </S.ReviewActions>
//         </S.ReviewTop>

//         <S.ReviewTextBox>
//           <S.ReviewText>
//             주문번호: {item.orderId}
//             <br />
//             수량: {item.quantity}개
//             <br />
//             결제 가격: {Number(item.price ?? 0).toLocaleString()}원
//           </S.ReviewText>
//         </S.ReviewTextBox>
//       </S.ReviewContent>
//     </S.ReviewCard>
//   );
// }

// /**
//  * 작성한 리뷰 카드
//  */
// function WrittenReviewCard({ review, onEdit, onDelete }) {
//   return (
//     <S.ReviewCard>
//       <S.ProductArea>
//         <S.ProductImage>
//           {review.productThumbnail ? (
//             <img src={review.productThumbnail} alt={review.productName} />
//           ) : (
//             "사진"
//           )}
//         </S.ProductImage>

//         <S.ProductInfo>
//           <S.ProductName>{review.productName}</S.ProductName>

//           <S.MobileActions>
//             <S.ActionButton type="button" onClick={() => onEdit(review)}>
//               수정
//             </S.ActionButton>

//             <S.ActionDivider>|</S.ActionDivider>

//             <S.ActionButton
//               type="button"
//               onClick={() => onDelete(review.reviewId)}
//             >
//               삭제
//             </S.ActionButton>
//           </S.MobileActions>
//         </S.ProductInfo>
//       </S.ProductArea>

//       <S.ReviewContent>
//         <S.ReviewTop>
//           <S.ReviewMeta>
//             <Rating rating={review.rating} />

//             <S.ReviewDate>{formatDate(review.createdAt)} 작성</S.ReviewDate>
//           </S.ReviewMeta>

//           <S.ReviewActions>
//             <S.ActionButton type="button" onClick={() => onEdit(review)}>
//               수정
//             </S.ActionButton>

//             <S.ActionDivider>|</S.ActionDivider>

//             <S.ActionButton
//               type="button"
//               onClick={() => onDelete(review.reviewId)}
//             >
//               삭제
//             </S.ActionButton>
//           </S.ReviewActions>
//         </S.ReviewTop>

//         <S.ReviewTextBox>
//           <S.ReviewText>{review.content}</S.ReviewText>
//         </S.ReviewTextBox>
//       </S.ReviewContent>
//     </S.ReviewCard>
//   );
// }

// /**
//  * 리뷰가 없을 때 표시되는 화면
//  */
// function EmptyReview({ activeTab }) {
//   const navigate = useNavigate();

//   const isWritten = activeTab === "written";

//   return (
//     <S.EmptyReview>
//       <S.EmptyImage src={EmptyReviewCat} alt="" aria-hidden="true" />

//       <S.EmptyTitle>
//         {isWritten ? "리뷰내역이 없습니다." : "작성 가능한 리뷰가 없습니다."}
//       </S.EmptyTitle>

//       <S.EmptyDescription>
//         {isWritten ? (
//           <>
//             아직 작성한 리뷰가 없어요.
//             <br />
//             상품을 구매하고 소중한 후기를 남겨주세요!
//           </>
//         ) : (
//           <>
//             구매 결정된 주문 상품이 없거나
//             <br />
//             모든 상품의 리뷰를 이미 작성했어요.
//           </>
//         )}
//       </S.EmptyDescription>

//       <S.ProductButton type="button" onClick={() => navigate("/products")}>
//         상품보러가기
//       </S.ProductButton>
//     </S.EmptyReview>
//   );
// }

// /**
//  * 로그인이 필요할 때 표시되는 화면
//  */
// function LoginRequiredReview() {
//   const navigate = useNavigate();

//   return (
//     <S.EmptyReview>
//       <S.EmptyImage src={EmptyReviewCat} alt="" aria-hidden="true" />

//       <S.EmptyTitle>로그인이 필요합니다.</S.EmptyTitle>

//       <S.EmptyDescription>
//         로그인 후 작성 가능한 리뷰와
//         <br />
//         작성한 리뷰를 확인할 수 있습니다.
//       </S.EmptyDescription>

//       <S.ProductButton type="button" onClick={() => navigate("/login")}>
//         로그인하러가기
//       </S.ProductButton>
//     </S.EmptyReview>
//   );
// }

// export default function ReviewList({ onOpenWriteModal, onOpenEditModal }) {
//   const { accessToken } = useAuth();

//   const [activeTab, setActiveTab] = useState("available");

//   const [availableReviews, setAvailableReviews] = useState([]);

//   const [writtenReviews, setWrittenReviews] = useState([]);

//   const [loadedRequestKey, setLoadedRequestKey] = useState("");

//   const [errorMessage, setErrorMessage] = useState("");

//   /*
//    * 현재 사용자와 현재 탭을 기준으로
//    * 요청을 구분한다.
//    */
//   const currentRequestKey = accessToken ? `${accessToken}:${activeTab}` : "";

//   /*
//    * 현재 요청에 대한 데이터가 아직
//    * 로드되지 않았으면 로딩 상태이다.
//    *
//    * 별도의 isLoading state를 사용하지 않으므로
//    * useEffect 내부에서 동기적으로
//    * setIsLoading을 호출하지 않는다.
//    */
//   const isLoading =
//     Boolean(accessToken) && loadedRequestKey !== currentRequestKey;

//   /**
//    * 리뷰 삭제 후 작성 가능한 리뷰 목록을
//    * 다시 불러오기 위한 함수
//    */
//   const loadAvailableReviews = useCallback(async () => {
//     if (!accessToken) {
//       return;
//     }

//     const response = await getWritableReviews(
//       {
//         page: 1,
//         limit: 10,
//       },
//       accessToken,
//     );

//     setAvailableReviews(response.data?.items ?? []);
//   }, [accessToken]);

//   /**
//    * 현재 선택된 탭의 리뷰 목록 조회
//    */
//   useEffect(() => {
//     if (!accessToken) {
//       return undefined;
//     }

//     let isCancelled = false;

//     const requestKey = `${accessToken}:${activeTab}`;

//     const reviewRequest =
//       activeTab === "available"
//         ? getWritableReviews(
//             {
//               page: 1,
//               limit: 10,
//             },
//             accessToken,
//           )
//         : getMyReviews(
//             {
//               page: 1,
//               limit: 10,
//             },
//             accessToken,
//           );

//     reviewRequest
//       .then((response) => {
//         if (isCancelled) {
//           return;
//         }

//         if (activeTab === "available") {
//           setAvailableReviews(response.data?.items ?? []);
//         } else {
//           setWrittenReviews(response.data?.reviews ?? []);
//         }

//         setErrorMessage("");
//         setLoadedRequestKey(requestKey);
//       })
//       .catch((error) => {
//         if (isCancelled) {
//           return;
//         }

//         console.error("리뷰 목록 조회 실패:", error);

//         setErrorMessage(error.message || "리뷰 목록을 불러오지 못했습니다.");

//         setLoadedRequestKey(requestKey);
//       });

//     return () => {
//       isCancelled = true;
//     };
//   }, [activeTab, accessToken]);

//   const handleTabChange = (tabKey) => {
//     if (tabKey === activeTab) {
//       return;
//     }

//     setErrorMessage("");
//     setActiveTab(tabKey);
//   };

//   /**
//    * 리뷰 작성 버튼
//    */
//   const handleWrite = (item) => {
//     if (onOpenWriteModal) {
//       onOpenWriteModal({
//         orderId: item.orderId,
//         productId: item.productId,
//         productName: item.name,
//         productThumbnail: item.thumbnail,
//         price: item.price,
//         quantity: item.quantity,
//       });

//       return;
//     }

//     console.log("리뷰 작성 대상:", item);
//   };

//   /**
//    * 리뷰 수정 버튼
//    */
//   const handleEdit = (review) => {
//     if (onOpenEditModal) {
//       onOpenEditModal(review);
//       return;
//     }

//     console.log("리뷰 수정 대상:", review);
//   };

//   /**
//    * 리뷰 삭제
//    */
//   const handleDelete = async (reviewId) => {
//     const isDelete = window.confirm("해당 리뷰를 삭제하시겠습니까?");

//     if (!isDelete) {
//       return;
//     }

//     try {
//       await deleteReview(reviewId, accessToken);

//       /*
//        * 삭제한 리뷰를 작성한 리뷰 목록에서
//        * 즉시 제거한다.
//        */
//       setWrittenReviews((previousReviews) =>
//         previousReviews.filter((review) => review.reviewId !== reviewId),
//       );

//       /*
//        * 리뷰를 삭제하면 해당 주문 상품은
//        * 다시 작성 가능한 리뷰가 된다.
//        */
//       await loadAvailableReviews();
//     } catch (error) {
//       console.error("리뷰 삭제 실패:", error);

//       window.alert(error.message || "리뷰 삭제에 실패했습니다.");
//     }
//   };

//   return (
//     <S.Page>
//       <S.Header>
//         <S.Title>리뷰내역</S.Title>

//         <S.Subtitle>고객님의 리뷰 내역을 확인해보세요.</S.Subtitle>
//       </S.Header>

//       <S.TabSection>
//         <S.MainTabList>
//           {TABS.map((tab) => (
//             <S.MainTabButton
//               key={tab.key}
//               type="button"
//               isActive={activeTab === tab.key}
//               onClick={() => handleTabChange(tab.key)}
//             >
//               {tab.label}
//             </S.MainTabButton>
//           ))}
//         </S.MainTabList>

//         <S.ReviewList>
//           {!accessToken ? (
//             <LoginRequiredReview />
//           ) : isLoading ? (
//             <S.EmptyReview>
//               <S.EmptyTitle>리뷰 목록을 불러오는 중입니다.</S.EmptyTitle>
//             </S.EmptyReview>
//           ) : errorMessage ? (
//             <S.EmptyReview>
//               <S.EmptyTitle>리뷰 목록을 불러오지 못했습니다.</S.EmptyTitle>

//               <S.EmptyDescription>{errorMessage}</S.EmptyDescription>
//             </S.EmptyReview>
//           ) : activeTab === "available" ? (
//             availableReviews.length === 0 ? (
//               <EmptyReview activeTab={activeTab} />
//             ) : (
//               availableReviews.map((item) => (
//                 <WritableReviewCard
//                   key={`${item.orderId}-${item.productId}`}
//                   item={item}
//                   onWrite={handleWrite}
//                 />
//               ))
//             )
//           ) : writtenReviews.length === 0 ? (
//             <EmptyReview activeTab={activeTab} />
//           ) : (
//             writtenReviews.map((review) => (
//               <WrittenReviewCard
//                 key={review.reviewId}
//                 review={review}
//                 onEdit={handleEdit}
//                 onDelete={handleDelete}
//               />
//             ))
//           )}
//         </S.ReviewList>
//       </S.TabSection>
//     </S.Page>
//   );
// }

import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./reviewListStyle";
import EmptyReviewCat from "../../assets/empty-review-cat.webp";
import ForwardButton from "../common/forwardBtn/ForwardButton";

import {
  deleteReview,
  getMyReviews,
  getWritableReviews,
} from "../../services/reviewService";

import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";

const TABS = [
  {
    key: "available",
    label: "작성 가능한 리뷰",
  },
  {
    key: "written",
    label: "작성한 리뷰",
  },
];

function StarIcon({ filled }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        d="
          M12 3.8
          L14.5 8.9
          L20.1 9.7
          L16.1 13.6
          L17 19.1
          L12 16.5
          L7 19.1
          L7.9 13.6
          L3.9 9.7
          L9.5 8.9
          Z
        "
      />
    </svg>
  );
}

function Rating({ rating }) {
  const normalizedRating = Number(rating) || 0;

  return (
    <S.StarRating aria-label={`별점 ${normalizedRating}점`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon key={index} filled={index < normalizedRating} />
      ))}
    </S.StarRating>
  );
}

function formatDate(date) {
  if (!date) {
    return "";
  }

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  const year = parsedDate.getFullYear();

  const month = String(parsedDate.getMonth() + 1).padStart(2, "0");

  const day = String(parsedDate.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
}

/**
 * 작성 가능한 리뷰 카드
 *
 * 구매 확정된 주문 상품 중 아직 리뷰를
 * 작성하지 않은 상품을 표시한다.
 */
function WritableReviewCard({ item, onWrite }) {
  return (
    <S.ReviewCard>
      <S.ProductArea>
        <S.ProductImage>
          {item.thumbnail ? (
            <img src={item.thumbnail} alt={item.name} />
          ) : (
            "사진"
          )}
        </S.ProductImage>

        <S.ProductInfo>
          <S.ProductName>{item.name}</S.ProductName>

          <S.MobileActions>
            <S.ActionButton type="button" onClick={() => onWrite(item)}>
              리뷰 작성
            </S.ActionButton>
          </S.MobileActions>
        </S.ProductInfo>
      </S.ProductArea>

      <S.ReviewContent>
        <S.ReviewTop>
          <S.ReviewMeta>
            <S.ReviewDate>
              {formatDate(item.confirmedAt)} 구매 확정
            </S.ReviewDate>
          </S.ReviewMeta>

          <S.ReviewActions>
            <S.ActionButton type="button" onClick={() => onWrite(item)}>
              리뷰 작성
            </S.ActionButton>
          </S.ReviewActions>
        </S.ReviewTop>

        <S.ReviewTextBox>
          <S.ReviewText>
            주문번호: {item.orderId}
            <br />
            수량: {item.quantity}개
            <br />
            결제 가격: {Number(item.price ?? 0).toLocaleString()}원
          </S.ReviewText>
        </S.ReviewTextBox>
      </S.ReviewContent>
    </S.ReviewCard>
  );
}

/**
 * 작성한 리뷰 카드
 */
function WrittenReviewCard({ review, onEdit, onDelete }) {
  return (
    <S.ReviewCard>
      <S.ProductArea>
        <S.ProductImage>
          {review.productThumbnail ? (
            <img src={review.productThumbnail} alt={review.productName} />
          ) : (
            "사진"
          )}
        </S.ProductImage>

        <S.ProductInfo>
          <S.ProductName>{review.productName}</S.ProductName>

          <S.MobileActions>
            <S.ActionButton type="button" onClick={() => onEdit(review)}>
              수정
            </S.ActionButton>

            <S.ActionDivider>|</S.ActionDivider>

            <S.ActionButton
              type="button"
              onClick={() => onDelete(review.reviewId)}
            >
              삭제
            </S.ActionButton>
          </S.MobileActions>
        </S.ProductInfo>
      </S.ProductArea>

      <S.ReviewContent>
        <S.ReviewTop>
          <S.ReviewMeta>
            <Rating rating={review.rating} />

            <S.ReviewDate>{formatDate(review.createdAt)} 작성</S.ReviewDate>
          </S.ReviewMeta>

          <S.ReviewActions>
            <S.ActionButton type="button" onClick={() => onEdit(review)}>
              수정
            </S.ActionButton>

            <S.ActionDivider>|</S.ActionDivider>

            <S.ActionButton
              type="button"
              onClick={() => onDelete(review.reviewId)}
            >
              삭제
            </S.ActionButton>
          </S.ReviewActions>
        </S.ReviewTop>

        <S.ReviewTextBox>
          <S.ReviewText>{review.content}</S.ReviewText>
        </S.ReviewTextBox>
      </S.ReviewContent>
    </S.ReviewCard>
  );
}

/**
 * 리뷰가 없을 때 표시되는 화면
 */
function EmptyReview({ activeTab }) {
  const navigate = useNavigate();

  const isWritten = activeTab === "written";

  return (
    <S.EmptyReview>
      <S.EmptyImage src={EmptyReviewCat} alt="" aria-hidden="true" />

      <S.EmptyTitle>
        {isWritten ? "리뷰내역이 없습니다." : "작성 가능한 리뷰가 없습니다."}
      </S.EmptyTitle>

      <S.EmptyDescription>
        {isWritten ? (
          <>
            아직 작성한 리뷰가 없어요.
            <br />
            상품을 구매하고 소중한 후기를 남겨주세요!
          </>
        ) : (
          <>
            구매 확정된 주문 상품이 없거나
            <br />
            모든 상품의 리뷰를 이미 작성했어요.
          </>
        )}
      </S.EmptyDescription>

      <S.ProductButton type="button" onClick={() => navigate("/products")}>
        상품보러가기
      </S.ProductButton>
    </S.EmptyReview>
  );
}

/**
 * 로그인이 필요할 때 표시되는 화면
 */
function LoginRequiredReview() {
  const navigate = useNavigate();

  return (
    <S.EmptyReview>
      <S.EmptyImage src={EmptyReviewCat} alt="" aria-hidden="true" />

      <S.EmptyTitle>로그인이 필요합니다.</S.EmptyTitle>

      <S.EmptyDescription>
        로그인 후 작성 가능한 리뷰와
        <br />
        작성한 리뷰를 확인할 수 있습니다.
      </S.EmptyDescription>

      <S.ProductButton type="button" onClick={() => navigate("/login")}>
        로그인하러가기
      </S.ProductButton>
    </S.EmptyReview>
  );
}

export default function ReviewList({ onOpenWriteModal, onOpenEditModal }) {
  const navigate = useNavigate();

  const { accessToken } = useAuth();

  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState("available");

  const [availableReviews, setAvailableReviews] = useState([]);

  const [writtenReviews, setWrittenReviews] = useState([]);

  const [loadedRequestKey, setLoadedRequestKey] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  /*
   * 현재 로그인 사용자와 탭을 조합하여
   * 현재 요청을 식별한다.
   */
  const currentRequestKey = accessToken ? `${accessToken}:${activeTab}` : "";

  /*
   * useEffect 내부에서 동기적으로
   * setIsLoading(false)를 호출하지 않기 위해
   * 별도의 isLoading state를 두지 않고 계산한다.
   */
  const isLoading =
    Boolean(accessToken) && loadedRequestKey !== currentRequestKey;

  /**
   * 작성 가능한 리뷰 다시 조회
   *
   * 리뷰 작성 또는 삭제 이후 목록을
   * 최신 상태로 변경할 때 사용한다.
   */
  const loadAvailableReviews = useCallback(async () => {
    if (!accessToken) {
      return;
    }

    const response = await getWritableReviews(
      {
        page: 1,
        limit: 10,
      },
      accessToken,
    );

    if (!response.success) {
      throw new Error(
        response.message || "작성 가능한 리뷰를 불러오지 못했습니다.",
      );
    }

    const items =
      response.data?.items ?? response.items ?? response.writableReviews ?? [];

    setAvailableReviews(items);
  }, [accessToken]);

  /**
   * 작성한 리뷰 다시 조회
   */
  const loadWrittenReviews = useCallback(async () => {
    if (!accessToken) {
      return;
    }

    const response = await getMyReviews(
      {
        page: 1,
        limit: 10,
      },
      accessToken,
    );

    if (!response.success) {
      throw new Error(response.message || "작성한 리뷰를 불러오지 못했습니다.");
    }

    const reviews = response.data?.reviews ?? response.reviews ?? [];

    setWrittenReviews(reviews);
  }, [accessToken]);

  /**
   * 현재 선택된 탭의 리뷰 목록 조회
   */
  useEffect(() => {
    if (!accessToken) {
      return undefined;
    }

    let isCancelled = false;

    const requestKey = `${accessToken}:${activeTab}`;

    const reviewRequest =
      activeTab === "available"
        ? getWritableReviews(
            {
              page: 1,
              limit: 10,
            },
            accessToken,
          )
        : getMyReviews(
            {
              page: 1,
              limit: 10,
            },
            accessToken,
          );

    reviewRequest
      .then((response) => {
        if (isCancelled) {
          return;
        }

        if (!response.success) {
          throw new Error(
            response.message || "리뷰 목록을 불러오지 못했습니다.",
          );
        }

        if (activeTab === "available") {
          const items =
            response.data?.items ??
            response.items ??
            response.writableReviews ??
            [];

          setAvailableReviews(items);
        } else {
          const reviews = response.data?.reviews ?? response.reviews ?? [];

          setWrittenReviews(reviews);
        }

        setErrorMessage("");

        setLoadedRequestKey(requestKey);
      })
      .catch((error) => {
        if (isCancelled) {
          return;
        }

        console.error("리뷰 목록 조회 실패:", error);

        setErrorMessage(error.message || "리뷰 목록을 불러오지 못했습니다.");

        setLoadedRequestKey(requestKey);
      });

    return () => {
      isCancelled = true;
    };
  }, [activeTab, accessToken]);

  /**
   * 탭 변경
   */
  const handleTabChange = (tabKey) => {
    if (tabKey === activeTab) {
      return;
    }

    setErrorMessage("");

    setActiveTab(tabKey);
  };

  /**
   * 리뷰 작성
   *
   * ReviewModal에 리뷰 작성에 필요한
   * 주문/상품 정보를 전달한다.
   */
  const handleWrite = (item) => {
    if (onOpenWriteModal) {
      onOpenWriteModal({
        orderId: item.orderId,
        productId: item.productId,
        productName: item.name,
        productThumbnail: item.thumbnail,
        price: item.price,
        quantity: item.quantity,

        /*
         * 리뷰 작성 완료 후 ReviewModal에서
         * 호출할 수 있도록 갱신 함수를 같이 전달한다.
         */
        onReviewCreated: async () => {
          try {
            await Promise.all([loadAvailableReviews(), loadWrittenReviews()]);

            showToast("리뷰가 등록되었습니다.", true);
          } catch (error) {
            console.error("리뷰 작성 후 목록 갱신 실패:", error);
          }
        },
      });

      return;
    }

    console.log("리뷰 작성 대상:", item);
  };

  /**
   * 리뷰 수정
   *
   * 기존 리뷰 전체 데이터를 ReviewModal에 전달한다.
   */
  const handleEdit = (review) => {
    if (onOpenEditModal) {
      onOpenEditModal({
        ...review,

        onReviewUpdated: async () => {
          try {
            await loadWrittenReviews();

            showToast("리뷰가 수정되었습니다.", true);
          } catch (error) {
            console.error("리뷰 수정 후 목록 갱신 실패:", error);
          }
        },
      });

      return;
    }

    console.log("리뷰 수정 대상:", review);
  };

  /**
   * 리뷰 삭제
   */
  const handleDelete = async (reviewId) => {
    if (!accessToken) {
      showToast("로그인이 필요합니다.", false);

      return;
    }

    const isDelete = window.confirm("해당 리뷰를 삭제하시겠습니까?");

    if (!isDelete) {
      return;
    }

    try {
      const result = await deleteReview(reviewId, accessToken);

      if (!result.success) {
        throw new Error(result.message || "리뷰 삭제에 실패했습니다.");
      }

      /*
       * 삭제한 리뷰는 작성한 리뷰 목록에서
       * 즉시 제거한다.
       */
      setWrittenReviews((previousReviews) =>
        previousReviews.filter((review) => review.reviewId !== reviewId),
      );

      /*
       * 리뷰를 삭제하면 해당 주문 상품은
       * 다시 작성 가능한 리뷰가 되므로
       * 작성 가능 목록을 다시 조회한다.
       */
      await loadAvailableReviews();

      showToast(result.message || "리뷰가 삭제되었습니다.", true);
    } catch (error) {
      console.error("리뷰 삭제 실패:", error);

      showToast(error.message || "리뷰 삭제에 실패했습니다.", false);
    }
  };

  return (
    <S.Page>
      <S.Header>
        <ForwardButton onClick={() => navigate("/mypage")}>
          마이페이지로
        </ForwardButton>

        <div>
          <S.Title>리뷰내역</S.Title>

          <S.Subtitle>고객님의 리뷰 내역을 확인해보세요.</S.Subtitle>
        </div>
      </S.Header>

      <S.TabSection>
        <S.MainTabList>
          {TABS.map((tab) => (
            <S.MainTabButton
              key={tab.key}
              type="button"
              isActive={activeTab === tab.key}
              onClick={() => handleTabChange(tab.key)}
            >
              {tab.label}
            </S.MainTabButton>
          ))}
        </S.MainTabList>

        <S.ReviewList>
          {!accessToken ? (
            <LoginRequiredReview />
          ) : isLoading ? (
            <S.EmptyReview>
              <S.EmptyTitle>리뷰 목록을 불러오는 중입니다.</S.EmptyTitle>
            </S.EmptyReview>
          ) : errorMessage ? (
            <S.EmptyReview>
              <S.EmptyTitle>리뷰 목록을 불러오지 못했습니다.</S.EmptyTitle>

              <S.EmptyDescription>{errorMessage}</S.EmptyDescription>
            </S.EmptyReview>
          ) : activeTab === "available" ? (
            availableReviews.length === 0 ? (
              <EmptyReview activeTab={activeTab} />
            ) : (
              availableReviews.map((item) => (
                <WritableReviewCard
                  key={`${item.orderId}-${item.productId}`}
                  item={item}
                  onWrite={handleWrite}
                />
              ))
            )
          ) : writtenReviews.length === 0 ? (
            <EmptyReview activeTab={activeTab} />
          ) : (
            writtenReviews.map((review) => (
              <WrittenReviewCard
                key={review.reviewId}
                review={review}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          )}
        </S.ReviewList>
      </S.TabSection>
    </S.Page>
  );
}
