// import { useEffect, useState } from "react";

// import BasicPage from "../basicPage/BasicPage";
// import BoardPage from "../../components/board/BoardPage";
// import Loader from "../../components/loader/Loader";
// import { HomeButton } from "../product/productListPage/ProductListStyle";

// import useAuth from "../../hooks/useAuth";
// import { getMyInquiries } from "../../services/inquiryService";
// import { mockInquiryData } from "../../mock/mockInquiry";

// /**
//  * 문의 작성 후 24시간 이내인지 확인
//  */
// const checkIsNew = (createdAt) => {
//   if (!createdAt) {
//     return false;
//   }

//   const createdTime = new Date(createdAt).getTime();

//   if (Number.isNaN(createdTime)) {
//     return false;
//   }

//   const currentTime = Date.now();
//   const twentyFourHours = 24 * 60 * 60 * 1000;

//   const elapsedTime = currentTime - createdTime;

//   return elapsedTime >= 0 && elapsedTime < twentyFourHours;
// };

// /**
//  * 날짜 표시
//  *
//  * 2026-09-17T20:30:00+09:00
//  * ↓
//  * 2026.09.17
//  */
// const formatInquiryDate = (createdAt) => {
//   if (!createdAt) {
//     return "";
//   }

//   const date = new Date(createdAt);

//   if (Number.isNaN(date.getTime())) {
//     return "";
//   }

//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const day = String(date.getDate()).padStart(2, "0");

//   return `${year}.${month}.${day}`;
// };

// /**
//  * BoardPage에서 사용하는 데이터 구조로 변환
//  */
// const convertInquiryForBoard = (inquiry, number, isMine = false) => {
//   return {
//     // 기존 BoardPage 호환
//     id: inquiry.inquiryId,

//     // 실제 Inquiry 데이터
//     inquiryId: inquiry.inquiryId,

//     number,

//     category: inquiry.category ?? "etc",

//     productId: inquiry.productId ?? null,
//     orderId: inquiry.orderId ?? null,

//     title: inquiry.title ?? "",
//     content: inquiry.content ?? "",

//     // 기존 BoardPage writer 사용
//     writer: inquiry.author ?? "",

//     // 실제 API 필드도 유지
//     author: inquiry.author ?? "",

//     // 기존 BoardPage 날짜 표시
//     date: formatInquiryDate(inquiry.createdAt),

//     // 실제 작성시간
//     createdAt: inquiry.createdAt,

//     views: inquiry.views ?? 0,

//     status: inquiry.status ?? "WAITING",

//     // 비밀글
//     isPrivate: Boolean(inquiry.isPrivate),

//     // 기존 BoardPage에서 isSecret을 사용하고 있을 수 있으므로 유지
//     isSecret: Boolean(inquiry.isPrivate),

//     // 작성 후 24시간
//     isNew: checkIsNew(inquiry.createdAt),

//     // 내가 작성한 문의 여부
//     isMine,
//   };
// };

// export default function QnaPage() {
//   const { accessToken, isLoggedIn, isAuthLoading } = useAuth();

//   const [myInquiries, setMyInquiries] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   /**
//    * 내가 작성한 문의 조회
//    *
//    * GET /users/me/inquiries
//    */
//   useEffect(() => {
//     let isMounted = true;

//     const loadMyInquiries = async () => {
//       if (isAuthLoading) {
//         return;
//       }

//       /**
//        * 비로그인 상태에서는
//        * Mock Inquiry만 표시
//        */
//       if (!isLoggedIn || !accessToken) {
//         if (isMounted) {
//           setIsLoading(false);
//         }

//         return;
//       }

//       try {
//         const response = await getMyInquiries(
//           {
//             page: 1,
//             limit: 100,
//           },
//           accessToken,
//         );

//         if (!isMounted) {
//           return;
//         }

//         if (response.success) {
//           setMyInquiries(response.inquiries ?? []);
//         }
//       } catch (error) {
//         console.error("내 문의 조회 실패:", error);

//         if (isMounted) {
//           setMyInquiries([]);
//         }
//       } finally {
//         if (isMounted) {
//           setIsLoading(false);
//         }
//       }
//     };

//     loadMyInquiries();

//     return () => {
//       isMounted = false;
//     };
//   }, [accessToken, isLoggedIn, isAuthLoading]);

//   /**
//    * 내가 작성한 문의
//    *
//    * 최신 문의가 위로 오도록 정렬
//    */
//   const sortedMyInquiries = [...myInquiries].sort((a, b) => {
//     return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
//   });

//   /**
//    * 실제 문의와 Mock 문의의 inquiryId가
//    * 중복되는 경우 제거
//    */
//   const myInquiryIds = new Set(
//     sortedMyInquiries.map((inquiry) => inquiry.inquiryId),
//   );

//   /**
//    * Mock 문의
//    *
//    * 중복 제거 후 최신순 정렬
//    */
//   const sortedMockInquiries = [...mockInquiryData]
//     .filter((inquiry) => !myInquiryIds.has(inquiry.inquiryId))
//     .sort((a, b) => {
//       return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
//     });

//   /**
//    * Mock 문의에서 가장 큰 번호
//    *
//    * 현재 Mock:
//    * 661 ~ 666
//    *
//    * 따라서 내가 작성한 첫 번째 문의는
//    * 667부터 시작
//    */
//   const maxMockNumber = sortedMockInquiries.reduce((maxNumber, inquiry) => {
//     return Math.max(maxNumber, inquiry.number ?? 0);
//   }, 0);

//   /**
//    * 내가 작성한 문의에 번호 부여
//    *
//    * 내가 작성한 문의가 2개라면
//    *
//    * 최신 → 668
//    * 이전 → 667
//    */
//   const myInquiryCount = sortedMyInquiries.length;

//   const convertedMyInquiries = sortedMyInquiries.map((inquiry, index) => {
//     const number = maxMockNumber + myInquiryCount - index;

//     return convertInquiryForBoard(inquiry, number, true);
//   });

//   /**
//    * Mock 문의는 명세에 정의된
//    * 기존 number를 그대로 사용
//    */
//   const convertedMockInquiries = sortedMockInquiries.map((inquiry) => {
//     return convertInquiryForBoard(inquiry, inquiry.number, false);
//   });

//   /**
//    * 최종 게시판 데이터
//    *
//    * 내가 작성한 문의
//    * ↓
//    * Mock 문의
//    */
//   const qnaData = [...convertedMyInquiries, ...convertedMockInquiries];

//   /**
//    * 인증 상태 복구 중
//    */
//   if (isAuthLoading) {
//     return (
//       <BasicPage>
//         <Loader />
//       </BasicPage>
//     );
//   }

//   /**
//    * 로그인 상태에서
//    * 내 문의 조회 중
//    */
//   if (isLoading) {
//     return (
//       <BasicPage>
//         <Loader />
//       </BasicPage>
//     );
//   }

//   return (
//     <BasicPage>
//       <style>{`
//         .home-button-wrapper {
//           display: block;
//           width: 100%;
//           margin-bottom: 0;
//           text-align: left;
//           padding-left: 120px;
//           box-sizing: border-box;
//         }

//         @media (max-width: 1024px) {
//           .home-button-wrapper {
//             padding-left: 50px;
//           }
//         }

//         @media (max-width: 767px) {
//           .home-button-wrapper {
//             padding-left: 20px;
//           }
//         }
//       `}</style>

//       {/* 홈으로 이동 */}
//       <div className="home-button-wrapper">
//         <HomeButton
//           to="/"
//           style={{
//             display: "block",
//             width: "fit-content",
//             margin: 0,
//             transform: "none",
//           }}
//         >
//           ← 홈으로 이동
//         </HomeButton>
//       </div>

//       {/* 문의 게시판 */}
//       <BoardPage type="qna" data={qnaData} />
//     </BasicPage>
//   );
// }

import { useEffect, useState } from "react";

import BasicPage from "../basicPage/BasicPage";
import BoardPage from "../../components/board/BoardPage";
import Loader from "../../components/loader/Loader";
import { HomeButton } from "../product/productListPage/ProductListStyle";

import useAuth from "../../hooks/useAuth";
import { getMyInquiries } from "../../services/inquiryService";
import { mockInquiryData } from "../../mock/mockInquiry";

/**
 * 문의 작성 후 24시간 이내인지 확인
 */
const checkIsNew = (createdAt) => {
  if (!createdAt) {
    return false;
  }

  const createdTime = new Date(createdAt).getTime();

  if (Number.isNaN(createdTime)) {
    return false;
  }

  const currentTime = Date.now();
  const twentyFourHours = 24 * 60 * 60 * 1000;

  const elapsedTime = currentTime - createdTime;

  return elapsedTime >= 0 && elapsedTime < twentyFourHours;
};

/**
 * 날짜 표시
 *
 * 2026-09-17T20:30:00+09:00
 * ↓
 * 2026.09.17
 */
const formatInquiryDate = (createdAt) => {
  if (!createdAt) {
    return "";
  }

  const date = new Date(createdAt);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};

/**
 * 닉네임 마스킹
 *
 * 일오묘 → 일****
 * 나은 → 나****
 * 김 → 김****
 */
const maskNickname = (nickname) => {
  if (!nickname) {
    return "";
  }

  const trimmedNickname = nickname.trim();

  if (!trimmedNickname) {
    return "";
  }

  return `${trimmedNickname.charAt(0)}****`;
};

/**
 * BoardPage에서 사용하는 데이터 구조로 변환
 */
const convertInquiryForBoard = (
  inquiry,
  number,
  isMine = false,
  maskedNickname = "",
) => {
  /**
   * 내가 작성한 문의라면
   * 로그인 사용자의 마스킹된 닉네임 사용
   *
   * Mock 문의라면
   * 기존 author 사용
   */
  const author = isMine ? maskedNickname : (inquiry.author ?? "");

  return {
    // 기존 BoardPage 호환
    id: inquiry.inquiryId,

    // 실제 Inquiry 데이터
    inquiryId: inquiry.inquiryId,

    number,

    category: inquiry.category ?? "etc",

    productId: inquiry.productId ?? null,
    orderId: inquiry.orderId ?? null,

    title: inquiry.title ?? "",
    content: inquiry.content ?? "",

    // BoardPage 작성자 표시
    writer: author,

    // 실제 데이터 필드
    author,

    // 기존 BoardPage 날짜 표시
    date: formatInquiryDate(inquiry.createdAt),

    // 실제 작성시간
    createdAt: inquiry.createdAt,

    views: inquiry.views ?? 0,

    status: inquiry.status ?? "WAITING",

    // 비밀글
    isPrivate: Boolean(inquiry.isPrivate),

    // 기존 BoardPage 호환
    isSecret: Boolean(inquiry.isPrivate),

    // 작성 후 24시간
    isNew: checkIsNew(inquiry.createdAt),

    // 내가 작성한 문의 여부
    isMine,
  };
};

export default function QnaPage() {
  const { accessToken, user, isLoggedIn, isAuthLoading } = useAuth();

  const [myInquiries, setMyInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * 현재 로그인 사용자 닉네임
   *
   * 예:
   * 일오묘 → 일****
   */
  const maskedNickname = maskNickname(user?.nickname);

  /**
   * 내가 작성한 문의 조회
   *
   * GET /users/me/inquiries
   */
  useEffect(() => {
    let isMounted = true;

    const loadMyInquiries = async () => {
      if (isAuthLoading) {
        return;
      }

      /**
       * 비로그인 상태에서는
       * Mock Inquiry만 표시
       */
      if (!isLoggedIn || !accessToken) {
        if (isMounted) {
          setIsLoading(false);
        }

        return;
      }

      try {
        const response = await getMyInquiries(
          {
            page: 1,
            limit: 100,
          },
          accessToken,
        );

        if (!isMounted) {
          return;
        }

        if (response.success) {
          setMyInquiries(response.inquiries ?? []);
        }
      } catch (error) {
        console.error("내 문의 조회 실패:", error);

        if (isMounted) {
          setMyInquiries([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadMyInquiries();

    return () => {
      isMounted = false;
    };
  }, [accessToken, isLoggedIn, isAuthLoading]);

  /**
   * 내가 작성한 문의
   *
   * 최신 문의가 위로 오도록 정렬
   */
  const sortedMyInquiries = [...myInquiries].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  /**
   * 실제 문의와 Mock 문의의 inquiryId가
   * 중복되는 경우 제거
   */
  const myInquiryIds = new Set(
    sortedMyInquiries.map((inquiry) => inquiry.inquiryId),
  );

  /**
   * Mock 문의
   *
   * 중복 제거 후 최신순 정렬
   */
  const sortedMockInquiries = [...mockInquiryData]
    .filter((inquiry) => !myInquiryIds.has(inquiry.inquiryId))
    .sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  /**
   * Mock 문의에서 가장 큰 번호
   *
   * 현재 Mock:
   * 1 ~ 6
   *
   * 따라서 내가 작성한 첫 번째 문의는
   * 7부터 시작
   */
  const maxMockNumber = sortedMockInquiries.reduce((maxNumber, inquiry) => {
    return Math.max(maxNumber, inquiry.number ?? 0);
  }, 0);

  /**
   * 내가 작성한 문의에 번호 부여
   *
   * 내가 작성한 문의가 2개라면
   *
   * 최신 → 8
   * 이전 → 7
   */
  const myInquiryCount = sortedMyInquiries.length;

  const convertedMyInquiries = sortedMyInquiries.map((inquiry, index) => {
    const number = maxMockNumber + myInquiryCount - index;

    return convertInquiryForBoard(inquiry, number, true, maskedNickname);
  });

  /**
   * Mock 문의는 기존 number 그대로 사용
   */
  const convertedMockInquiries = sortedMockInquiries.map((inquiry) => {
    return convertInquiryForBoard(inquiry, inquiry.number, false);
  });

  /**
   * 최종 게시판 데이터
   *
   * 내가 작성한 문의
   * ↓
   * Mock 문의
   */
  const qnaData = [...convertedMyInquiries, ...convertedMockInquiries];

  /**
   * 인증 상태 복구 중
   */
  if (isAuthLoading) {
    return (
      <BasicPage>
        <Loader />
      </BasicPage>
    );
  }

  /**
   * 로그인 상태에서
   * 내 문의 조회 중
   */
  if (isLoading) {
    return (
      <BasicPage>
        <Loader />
      </BasicPage>
    );
  }

  return (
    <BasicPage>
      <style>{`
        .home-button-wrapper {
          display: block;
          width: 100%;
          margin-bottom: 0;
          text-align: left;
          padding-left: 120px;
          box-sizing: border-box;
        }

        @media (max-width: 1024px) {
          .home-button-wrapper {
            padding-left: 50px;
          }
        }

        @media (max-width: 767px) {
          .home-button-wrapper {
            padding-left: 20px;
          }
        }
      `}</style>

      {/* 홈으로 이동 */}
      <div className="home-button-wrapper">
        <HomeButton
          to="/"
          style={{
            display: "block",
            width: "fit-content",
            margin: 0,
            transform: "none",
          }}
        >
          ← 홈으로 이동
        </HomeButton>
      </div>

      {/* 문의 게시판 */}
      <BoardPage type="qna" data={qnaData} />
    </BasicPage>
  );
}
