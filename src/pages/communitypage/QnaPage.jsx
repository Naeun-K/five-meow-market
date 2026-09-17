






























































































































































































































































































































import { useEffect, useState } from "react";

import BasicPage from "../basicPage/BasicPage";
import BoardPage from "../../components/board/BoardPage";
import Loader from "../../components/loader/Loader";
import { HomeButton } from "../product/productListPage/ProductListStyle";

import useAuth from "../../hooks/useAuth";
import { getMyInquiries } from "../../services/inquiryService";
import { mockInquiryData } from "../../mock/mockInquiry";


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


const convertInquiryForBoard = (
  inquiry,
  number,
  isMine = false,
  maskedNickname = "",
) => {
  
  const author = isMine ? maskedNickname : (inquiry.author ?? "");

  return {
    
    id: inquiry.inquiryId,

    
    inquiryId: inquiry.inquiryId,

    number,

    category: inquiry.category ?? "etc",

    productId: inquiry.productId ?? null,
    orderId: inquiry.orderId ?? null,

    title: inquiry.title ?? "",
    content: inquiry.content ?? "",

    
    writer: author,

    
    author,

    
    date: formatInquiryDate(inquiry.createdAt),

    
    createdAt: inquiry.createdAt,

    views: inquiry.views ?? 0,

    status: inquiry.status ?? "WAITING",

    
    isPrivate: Boolean(inquiry.isPrivate),

    
    isSecret: Boolean(inquiry.isPrivate),

    
    isNew: checkIsNew(inquiry.createdAt),

    
    isMine,
  };
};

export default function QnaPage() {
  const { accessToken, user, isLoggedIn, isAuthLoading } = useAuth();

  const [myInquiries, setMyInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  const maskedNickname = maskNickname(user?.nickname);

  
  useEffect(() => {
    let isMounted = true;

    const loadMyInquiries = async () => {
      if (isAuthLoading) {
        return;
      }

      
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

  
  const sortedMyInquiries = [...myInquiries].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  
  const myInquiryIds = new Set(
    sortedMyInquiries.map((inquiry) => inquiry.inquiryId),
  );

  
  const sortedMockInquiries = [...mockInquiryData]
    .filter((inquiry) => !myInquiryIds.has(inquiry.inquiryId))
    .sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  
  const maxMockNumber = sortedMockInquiries.reduce((maxNumber, inquiry) => {
    return Math.max(maxNumber, inquiry.number ?? 0);
  }, 0);

  
  const myInquiryCount = sortedMyInquiries.length;

  const convertedMyInquiries = sortedMyInquiries.map((inquiry, index) => {
    const number = maxMockNumber + myInquiryCount - index;

    return convertInquiryForBoard(inquiry, number, true, maskedNickname);
  });

  
  const convertedMockInquiries = sortedMockInquiries.map((inquiry) => {
    return convertInquiryForBoard(inquiry, inquiry.number, false);
  });

  
  const qnaData = [...convertedMyInquiries, ...convertedMockInquiries];

  
  if (isAuthLoading) {
    return (
      <BasicPage>
        <Loader />
      </BasicPage>
    );
  }

  
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
          max-width: 1450px;
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

      {}
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

      <BoardPage type="qna" data={qnaData} />
    </BasicPage>
  );
}
