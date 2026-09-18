import { useNavigate } from "react-router-dom";
import {
  BoardContainer,
  BoardTitle,
  DetailBox,
  DetailHeader,
  TitleRow,
  PostTitle,
  StatusBadge,
  MetaInfo,
  MetaItem,
  MetaLabel,
  MetaValue,
  ProductInfo,
  ProductImage,
  ProductText,
  ProductName,
  ReviewRating,
  Star,
  ContentArea,
  ContentText,
  PrivateArea,
  LockIcon,
  PrivateTitle,
  PrivateDescription,
  PrivateLoginDescription,
  ButtonArea,
  ListButton,
  LoginButton,
} from "./BoardDetailStyle";

const formatDate = (dateString) => {
  if (!dateString) {
    return "";
  }

  const date = new Date(dateString);

  return date
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\. /g, ".")
    .replace(/\.$/, "");
};

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

function BoardDetail({
  type = "notice",
  data,
  isLoggedIn = false,
  canViewPrivate = false,
  listPath,
}) {
  const navigate = useNavigate();

  if (!data) {
    return null;
  }

  const isReview = type === "review";
  const isInquiry = type === "qna";
  const isNotice = type === "notice";

  const isPrivateBlocked = isInquiry && data.isPrivate && !canViewPrivate;

  const pageTitle = isReview ? "제품후기" : isInquiry ? "Q&A" : "공지사항";

  const defaultListPath = isReview
    ? "/community/review"
    : isInquiry
      ? "/community/qna"
      : "/community/notice";

  const handleGoList = () => {
    navigate(listPath || defaultListPath);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  if (isPrivateBlocked) {
    return (
      <BoardContainer>
        <BoardTitle>{pageTitle}</BoardTitle>

        <DetailBox>
          <PrivateArea>
            <LockIcon aria-hidden="true">
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
            </LockIcon>

            <PrivateTitle>비공개 문의입니다.</PrivateTitle>

            <PrivateDescription>
              작성자만 확인할 수 있는 문의입니다.
            </PrivateDescription>

            {!isLoggedIn && (
              <PrivateLoginDescription>
                작성자라면 로그인 후 확인해주세요.
              </PrivateLoginDescription>
            )}

            <ButtonArea $private>
              {!isLoggedIn && (
                <LoginButton type="button" onClick={handleLogin}>
                  로그인
                </LoginButton>
              )}

              <ListButton type="button" onClick={handleGoList}>
                목록으로
              </ListButton>
            </ButtonArea>
          </PrivateArea>
        </DetailBox>
      </BoardContainer>
    );
  }

  return (
    <BoardContainer>
      <BoardTitle>{pageTitle}</BoardTitle>

      <DetailBox>
        <DetailHeader>
          {isReview ? (
            <>
              <ProductInfo>
                {data.product?.thumbnail && (
                  <ProductImage
                    src={data.product.thumbnail}
                    alt={data.product?.name || "상품 이미지"}
                  />
                )}

                <ProductText>
                  <ProductName>{data.product?.name || "상품 정보"}</ProductName>

                  <ReviewRating aria-label={`별점 ${data.rating || 0}점`}>
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        $active={index < (data.rating || 0)}
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </Star>
                    ))}
                  </ReviewRating>
                </ProductText>
              </ProductInfo>

              <MetaInfo>
                <MetaItem>
                  <MetaLabel>작성자</MetaLabel>
                  <MetaValue>{data.author}</MetaValue>
                </MetaItem>

                <MetaItem>
                  <MetaLabel>작성일</MetaLabel>
                  <MetaValue>{formatDate(data.createdAt)}</MetaValue>
                </MetaItem>
              </MetaInfo>
            </>
          ) : (
            <>
              <TitleRow>
                <PostTitle>{data.title || "게시글"}</PostTitle>

                {isInquiry && getStatusText(data.status) && (
                  <StatusBadge $answered={data.status === "ANSWERED"}>
                    {getStatusText(data.status)}
                  </StatusBadge>
                )}
              </TitleRow>

              <MetaInfo>
                <MetaItem>
                  <MetaLabel>작성자</MetaLabel>
                  <MetaValue>
                    {isNotice ? data.author || "관리자" : data.author}
                  </MetaValue>
                </MetaItem>

                <MetaItem>
                  <MetaLabel>작성일</MetaLabel>
                  <MetaValue>{formatDate(data.createdAt)}</MetaValue>
                </MetaItem>

                {data.views !== undefined && (
                  <MetaItem>
                    <MetaLabel>조회</MetaLabel>
                    <MetaValue>{data.views}</MetaValue>
                  </MetaItem>
                )}
              </MetaInfo>
            </>
          )}
        </DetailHeader>

        <ContentArea>
          <ContentText>{data.content}</ContentText>
        </ContentArea>

        <ButtonArea>
          <ListButton type="button" onClick={handleGoList}>
            목록으로
          </ListButton>
        </ButtonArea>
      </DetailBox>
    </BoardContainer>
  );
}

export default BoardDetail;
