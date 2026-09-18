import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BasicPage from "../basicPage/BasicPage";
import BoardPage from "../../components/board/BoardPage";
import Loader from "../../components/loader/Loader";

import { HomeButton } from "../product/productListPage/ProductListStyle";

import useAuth from "../../hooks/useAuth";
import { getInquiries } from "../../services/inquiryService";
import { mockInquiryData } from "../../mock/mockInquiry";
import Pagination from "../../components/pagnation/Pagnation";

const ITEMS_PER_PAGE = 10;

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
  const apiAuthor =
    inquiry.maskedNickname ?? inquiry.author ?? inquiry.writer ?? "";

  const author = isMine && maskedNickname ? maskedNickname : apiAuthor;

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

    views: inquiry.viewCount ?? inquiry.views ?? 0,

    status: inquiry.status ?? "WAITING",

    isPrivate: Boolean(inquiry.isPrivate),
    isSecret: Boolean(inquiry.isPrivate),

    isNew: checkIsNew(inquiry.createdAt),

    isMine,
  };
};

export default function QnaPage() {
  const navigate = useNavigate();

  const { user, isLoggedIn, isAuthLoading } = useAuth();

  const [apiInquiries, setApiInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const maskedNickname = maskNickname(user?.nickname);

  useEffect(() => {
    let isMounted = true;

    const loadInquiries = async () => {
      try {
        const response = await getInquiries({
          page: 1,
          limit: 100,
        });

        if (!isMounted) {
          return;
        }

        if (response.success) {
          setApiInquiries(response.inquiries ?? []);
          return;
        }

        setApiInquiries([]);
      } catch (error) {
        console.error("문의 목록 조회 실패:", error);

        if (isMounted) {
          setApiInquiries([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadInquiries();

    return () => {
      isMounted = false;
    };
  }, []);

  const isMyInquiry = (inquiry) => {
    if (!isLoggedIn || !user) {
      return false;
    }

    if (inquiry.isMine === true) {
      return true;
    }

    if (
      inquiry.userId &&
      user.userId &&
      String(inquiry.userId) === String(user.userId)
    ) {
      return true;
    }

    if (inquiry.email && user.email && inquiry.email === user.email) {
      return true;
    }

    if (inquiry.userEmail && user.email && inquiry.userEmail === user.email) {
      return true;
    }

    return false;
  };

  const apiInquiryIds = new Set(
    apiInquiries.map((inquiry) => String(inquiry.inquiryId)),
  );

  const filteredMockInquiries = mockInquiryData.filter(
    (inquiry) => !apiInquiryIds.has(String(inquiry.inquiryId)),
  );

  const sortedMockInquiries = [...filteredMockInquiries].sort((a, b) => {
    return (b.number ?? 0) - (a.number ?? 0);
  });

  const maxMockNumber = sortedMockInquiries.reduce((maxNumber, inquiry) => {
    return Math.max(maxNumber, Number(inquiry.number) || 0);
  }, 0);

  const apiInquiryCount = apiInquiries.length;

  const convertedApiInquiries = apiInquiries.map((inquiry, index) => {
    const displayNumber = maxMockNumber + apiInquiryCount - index;

    return convertInquiryForBoard(
      inquiry,
      displayNumber,
      isMyInquiry(inquiry),
      maskedNickname,
    );
  });

  const convertedMockInquiries = sortedMockInquiries.map((inquiry) => {
    return convertInquiryForBoard(
      inquiry,
      inquiry.number,
      isMyInquiry(inquiry),
      maskedNickname,
    );
  });

  const qnaData = [...convertedApiInquiries, ...convertedMockInquiries];

  const totalPages = Math.max(1, Math.ceil(qnaData.length / ITEMS_PER_PAGE));

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const endIndex = startIndex + ITEMS_PER_PAGE;

  const paginatedQnaData = qnaData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleInquiryClick = (inquiry) => {
    if (!inquiry?.inquiryId) {
      return;
    }

    navigate(`/community/inquiry/${inquiry.inquiryId}`, {
      state: {
        inquiry,
      },
    });
  };

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

        .qna-pagination-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
        }

        @media (max-width: 1024px) {
          .home-button-wrapper {
            padding-left: 50px;
          }

          .qna-pagination-wrapper {
            margin-top: 30px;
          }
        }

        @media (max-width: 767px) {
          .home-button-wrapper {
            padding-left: 20px;
          }

          .qna-pagination-wrapper {
            margin-top: 24px;
          }
        }
      `}</style>

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

      <BoardPage
        type="qna"
        data={paginatedQnaData}
        onItemClick={handleInquiryClick}
      />

      {totalPages > 1 && (
        <div className="qna-pagination-wrapper">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </BasicPage>
  );
}
