import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import BasicPage from "../../basicPage/BasicPage";
import Loader from "../../../components/loader/Loader";

import useAuth from "../../../hooks/useAuth";
import { getInquiryDetail } from "../../../services/inquiryService";
import { mockInquiryData } from "../../../mock/mockInquiry";

const getStatusText = (status) => {
  switch (status) {
    case "ANSWERED":
      return "답변완료";

    case "WAITING":
      return "답변대기";

    default:
      return "";
  }
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

const normalizeInquiry = (inquiry, currentUser) => {
  if (!inquiry) {
    return null;
  }

  const writer =
    inquiry.maskedNickname ??
    inquiry.author ??
    inquiry.writer ??
    maskNickname(inquiry.nickname);

  const views = inquiry.viewCount ?? inquiry.views ?? 0;

  const date = inquiry.date ?? formatInquiryDate(inquiry.createdAt);

  const isMine =
    inquiry.isMine === true ||
    Boolean(
      inquiry.userEmail &&
      currentUser?.email &&
      inquiry.userEmail === currentUser.email,
    );

  return {
    ...inquiry,

    id: inquiry.inquiryId ?? inquiry.id,

    inquiryId: inquiry.inquiryId ?? inquiry.id,

    author: writer,
    writer,

    date,

    views,
    viewCount: views,

    isPrivate: Boolean(inquiry.isPrivate ?? inquiry.isSecret),

    isSecret: Boolean(inquiry.isPrivate ?? inquiry.isSecret),

    isMine,
  };
};

export default function QnaDetailPage() {
  const { inquiryId } = useParams();
  const navigate = useNavigate();

  const { accessToken, user, isLoggedIn, isAuthLoading } = useAuth();

  const [inquiry, setInquiry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [errorType, setErrorType] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleGoBack = () => {
    navigate("/community/inquiry");
  };

  const handleLogin = () => {
    navigate("/login", {
      state: {
        from: `/community/qna/${inquiryId}`,
      },
    });
  };

  useEffect(() => {
    let isMounted = true;

    const loadInquiry = async () => {
      if (isAuthLoading) {
        return;
      }

      try {
        setIsLoading(true);

        /*
         * 1. Mock 문의 확인
         *
         * mockInquiryData에 존재하는 문의라면
         * 실제 API를 호출하지 않고 mock 데이터를 사용한다.
         */
        const mockInquiry = mockInquiryData.find(
          (item) => String(item.inquiryId) === String(inquiryId),
        );

        if (mockInquiry) {
          /*
           * Mock 비밀글 권한 확인
           *
           * 명세에서는 userEmail로 작성자를 판별한다.
           */
          const isMine =
            Boolean(
              mockInquiry.userEmail &&
              user?.email &&
              mockInquiry.userEmail === user.email,
            ) || mockInquiry.isMine === true;

          if (mockInquiry.isPrivate) {
            if (!isLoggedIn) {
              if (isMounted) {
                setInquiry(
                  normalizeInquiry(
                    {
                      ...mockInquiry,
                      isMine: false,
                    },
                    user,
                  ),
                );

                setErrorType("UNAUTHORIZED");
                setErrorMessage("비밀글은 로그인 후 확인할 수 있습니다.");
              }

              return;
            }

            if (!isMine) {
              if (isMounted) {
                setInquiry(
                  normalizeInquiry(
                    {
                      ...mockInquiry,
                      isMine: false,
                    },
                    user,
                  ),
                );

                setErrorType("FORBIDDEN");
                setErrorMessage("비밀글 작성자만 확인할 수 있습니다.");
              }

              return;
            }
          }

          if (isMounted) {
            setInquiry(
              normalizeInquiry(
                {
                  ...mockInquiry,
                  isMine,
                },
                user,
              ),
            );

            setErrorType(null);
            setErrorMessage("");
          }

          return;
        }

        /*
         * 2. Mock 데이터에 없다면 실제 API 상세 조회
         *
         * GET /inquiries/:inquiryId
         *
         * 공개글:
         * accessToken 없어도 조회 가능
         *
         * 비밀글:
         * accessToken 전달
         */
        const response = await getInquiryDetail(inquiryId, accessToken);

        if (!response?.success) {
          throw {
            status: 500,
            message:
              response?.message ?? "문의 상세 정보를 불러오는데 실패했습니다.",
          };
        }

        /*
         * 명세:
         *
         * {
         *   success: true,
         *   data: {
         *     inquiry: {...}
         *   }
         * }
         */
        const apiInquiry = response.data?.inquiry;

        if (!apiInquiry) {
          throw {
            status: 404,
            message: "문의 정보를 찾을 수 없습니다.",
          };
        }

        if (isMounted) {
          setInquiry(normalizeInquiry(apiInquiry, user));

          setErrorType(null);
          setErrorMessage("");
        }
      } catch (error) {
        console.error("문의 상세 조회 실패:", error);

        if (!isMounted) {
          return;
        }

        const status = error?.status;

        if (status === 401) {
          setErrorType("UNAUTHORIZED");

          setErrorMessage(
            error?.message ?? "비밀글은 로그인 후 확인할 수 있습니다.",
          );

          return;
        }

        if (status === 403) {
          setErrorType("FORBIDDEN");

          setErrorMessage(
            error?.message ?? "비밀글 작성자만 확인할 수 있습니다.",
          );

          return;
        }

        if (status === 404) {
          setErrorType("NOT_FOUND");

          setErrorMessage(error?.message ?? "문의 정보를 찾을 수 없습니다.");

          return;
        }

        setErrorType("ERROR");

        setErrorMessage(
          error?.message ?? "문의 상세 정보를 불러오는데 실패했습니다.",
        );
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadInquiry();

    return () => {
      isMounted = false;
    };
  }, [inquiryId, accessToken, user, isLoggedIn, isAuthLoading]);

  if (isAuthLoading || isLoading) {
    return (
      <BasicPage>
        <Loader />
      </BasicPage>
    );
  }

  if (errorType === "UNAUTHORIZED" || errorType === "FORBIDDEN") {
    return (
      <BasicPage>
        <style>{detailStyle}</style>

        <main className="qna-detail">
          <h1 className="qna-detail__page-title">Q&A</h1>

          <section className="private">
            <div className="private__lock" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
                <path
                  d="M7 10V7a5 5 0 0 1 10 0v3"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <rect
                  x="5"
                  y="10"
                  width="14"
                  height="11"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <circle cx="12" cy="15" r="1.3" fill="currentColor" />

                <path
                  d="M12 16.3V18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h2 className="private__title">비공개 문의입니다.</h2>

            <p className="private__description">
              {errorMessage || "작성자만 확인할 수 있는 문의입니다."}
            </p>

            {errorType === "UNAUTHORIZED" && (
              <p className="private__sub">작성자라면 로그인 후 확인해주세요.</p>
            )}

            <div className="private__buttons">
              {errorType === "UNAUTHORIZED" && (
                <button
                  type="button"
                  className="qna-button qna-button--primary"
                  onClick={handleLogin}
                >
                  로그인
                </button>
              )}

              <button
                type="button"
                className="qna-button"
                onClick={handleGoBack}
              >
                목록으로
              </button>
            </div>
          </section>
        </main>
      </BasicPage>
    );
  }

  if (errorType === "NOT_FOUND" || errorType === "ERROR" || !inquiry) {
    return (
      <BasicPage>
        <style>{detailStyle}</style>

        <main className="qna-detail">
          <h1 className="qna-detail__page-title">Q&A</h1>

          <div className="qna-empty">
            <p>{errorMessage || "문의 정보를 확인할 수 없습니다."}</p>

            <button type="button" className="qna-button" onClick={handleGoBack}>
              목록으로
            </button>
          </div>
        </main>
      </BasicPage>
    );
  }

  return (
    <BasicPage>
      <style>{detailStyle}</style>

      <main className="qna-detail">
        <h1 className="qna-detail__page-title">Q&A</h1>

        <article className="qna-post">
          <header className="qna-post__header">
            <div className="qna-post__title-row">
              <h2 className="qna-post__title">{inquiry.title}</h2>

              {getStatusText(inquiry.status) && (
                <span
                  className={`qna-post__status ${
                    inquiry.status === "ANSWERED"
                      ? "qna-post__status--answered"
                      : ""
                  }`}
                >
                  {getStatusText(inquiry.status)}
                </span>
              )}
            </div>

            <div className="qna-post__meta">
              <div className="qna-post__meta-item">
                <span className="qna-post__meta-label">작성자</span>

                <span>{inquiry.author || "-"}</span>
              </div>

              <div className="qna-post__meta-item">
                <span className="qna-post__meta-label">작성일</span>

                <span>{inquiry.date || "-"}</span>
              </div>

              <div className="qna-post__meta-item">
                <span className="qna-post__meta-label">조회</span>

                <span>{inquiry.views}</span>
              </div>
            </div>
          </header>

          <div className="qna-post__content">{inquiry.content}</div>

          {inquiry.status === "ANSWERED" && inquiry.answer && (
            <section className="qna-answer">
              <div className="qna-answer__header">
                <strong>답변</strong>

                {inquiry.answeredAt && (
                  <span>{formatInquiryDate(inquiry.answeredAt)}</span>
                )}
              </div>

              <div className="qna-answer__content">{inquiry.answer}</div>
            </section>
          )}

          <footer className="qna-post__footer">
            <button type="button" className="qna-button" onClick={handleGoBack}>
              목록으로
            </button>
          </footer>
        </article>
      </main>
    </BasicPage>
  );
}

const detailStyle = `
  .qna-detail {
    width: 100%;
    max-width: 1300px;
    min-height: 850px;
    margin: 0 auto;
    padding: 50px;
    box-sizing: border-box;
    color: #4f3927;
  }

  .qna-detail__page-title {
    margin: 0 0 70px;
    color: #4f3927;
    font-size: 32px;
    font-weight: 700;
  }

  .qna-post {
    width: 100%;
    border-top: 1px solid #e5ddd6;
    border-bottom: 1px solid #e5ddd6;
  }

  .qna-post__header {
    display: flex;
    flex-direction: column;
    gap: 26px;
    padding: 32px 40px;
    border-bottom: 1px solid #e5ddd6;
  }

  .qna-post__title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
  }

  .qna-post__title {
    min-width: 0;
    margin: 0;
    color: #4f3927;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.5;
    word-break: keep-all;
  }

  .qna-post__status {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 76px;
    height: 34px;
    padding: 0 14px;
    border-radius: 999px;
    background: #f3e8de;
    color: #4f3927;
    font-size: 14px;
    font-weight: 600;
  }

  .qna-post__status--answered {
    background: #4f3927;
    color: #ffffff;
  }

  .qna-post__meta {
    display: flex;
    align-items: center;
    gap: 36px;
  }

  .qna-post__meta-item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #4f3927;
    font-size: 15px;
  }

  .qna-post__meta-label {
    color: #8b8179;
    font-size: 14px;
    font-weight: 500;
  }

  .qna-post__content {
    min-height: 300px;
    padding: 50px 40px;
    box-sizing: border-box;
    color: #4f3927;
    font-size: 16px;
    line-height: 1.8;
    white-space: pre-wrap;
    word-break: keep-all;
    overflow-wrap: break-word;
  }

  .qna-answer {
    border-top: 1px solid #e5ddd6;
    background: #faf6f2;
  }

  .qna-answer__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 24px 40px 0;
  }

  .qna-answer__header strong {
    color: #4f3927;
    font-size: 17px;
    font-weight: 700;
  }

  .qna-answer__header span {
    color: #8b8179;
    font-size: 14px;
  }

  .qna-answer__content {
    min-height: 130px;
    padding: 24px 40px 40px;
    box-sizing: border-box;
    color: #4f3927;
    font-size: 16px;
    line-height: 1.8;
    white-space: pre-wrap;
    word-break: keep-all;
    overflow-wrap: break-word;
  }

  .qna-post__footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    border-top: 1px solid #e5ddd6;
  }

  .qna-button {
    min-width: 120px;
    height: 44px;
    padding: 0 24px;
    border: 1px solid #4f3927;
    border-radius: 6px;
    background: #ffffff;
    color: #4f3927;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition:
      background 0.2s ease,
      color 0.2s ease;
  }

  .qna-button:hover {
    background: #4f3927;
    color: #ffffff;
  }

  .qna-button--primary {
    background: #4f3927;
    color: #ffffff;
  }

  .qna-button--primary:hover {
    background: #6b4d35;
  }

  .private,
  .qna-empty {
    min-height: 430px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
    padding: 60px 30px;
    border-top: 1px solid #e5ddd6;
    border-bottom: 1px solid #e5ddd6;
    box-sizing: border-box;
    text-align: center;
  }

  .qna-empty p {
    margin: 0 0 10px;
    color: #746b64;
    font-size: 16px;
  }

  .private__lock {
    width: 46px;
    height: 46px;
    margin-bottom: 6px;
    color: #6b5a4d;
  }

  .private__title {
    margin: 0;
    color: #4f3927;
    font-size: 22px;
    font-weight: 700;
  }

  .private__description,
  .private__sub {
    margin: 0;
    color: #746b64;
    font-size: 15px;
    line-height: 1.7;
  }

  .private__sub {
    color: #8b8179;
    font-size: 14px;
  }

  .private__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-top: 12px;
  }

  @media (max-width: 1023px) {
    .qna-detail {
      min-height: 750px;
      padding: 30px;
    }

    .qna-detail__page-title {
      margin-bottom: 50px;
      font-size: 28px;
    }

    .qna-post__header {
      gap: 22px;
      padding: 28px 30px;
    }

    .qna-post__title {
      font-size: 20px;
    }

    .qna-post__meta {
      gap: 28px;
    }

    .qna-post__content {
      min-height: 260px;
      padding: 40px 30px;
    }

    .qna-answer__header {
      padding: 22px 30px 0;
    }

    .qna-answer__content {
      padding: 22px 30px 34px;
    }

    .private,
    .qna-empty {
      min-height: 380px;
    }
  }

  @media (max-width: 767px) {
    .qna-detail {
      min-height: 650px;
      padding: 30px 20px;
    }

    .qna-detail__page-title {
      margin-bottom: 35px;
      font-size: 24px;
    }

    .qna-post__header {
      gap: 20px;
      padding: 24px 16px;
    }

    .qna-post__title-row {
      align-items: flex-start;
      gap: 14px;
    }

    .qna-post__title {
      font-size: 18px;
    }

    .qna-post__status {
      min-width: 68px;
      height: 30px;
      padding: 0 10px;
      font-size: 13px;
    }

    .qna-post__meta {
      flex-wrap: wrap;
      gap: 10px 20px;
    }

    .qna-post__meta-item {
      gap: 7px;
      font-size: 14px;
    }

    .qna-post__meta-label {
      font-size: 13px;
    }

    .qna-post__content {
      min-height: 220px;
      padding: 32px 16px;
      font-size: 15px;
      line-height: 1.75;
    }

    .qna-answer__header {
      padding: 20px 16px 0;
    }

    .qna-answer__header strong {
      font-size: 16px;
    }

    .qna-answer__header span {
      font-size: 12px;
    }

    .qna-answer__content {
      min-height: 110px;
      padding: 20px 16px 30px;
      font-size: 15px;
      line-height: 1.75;
    }

    .qna-post__footer {
      padding: 24px 0;
    }

    .qna-button {
      min-width: 110px;
      height: 42px;
      padding: 0 20px;
      font-size: 14px;
    }

    .private,
    .qna-empty {
      min-height: 340px;
      gap: 12px;
      padding: 45px 20px;
    }

    .private__lock {
      width: 40px;
      height: 40px;
    }

    .private__title {
      font-size: 19px;
    }

    .private__description {
      font-size: 14px;
    }

    .private__sub {
      font-size: 13px;
    }

    .private__buttons {
      gap: 10px;
    }
  }
`;
