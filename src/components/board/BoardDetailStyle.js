import styled from "@emotion/styled";

export const BoardContainer = styled.main`
  width: 100%;
  max-width: 1300px;
  min-height: 850px;
  margin: 0 auto;
  padding: 50px;

  @media (max-width: 1023px) {
    min-height: 750px;
    padding: 30px;
  }

  @media (max-width: 767px) {
    min-height: 650px;
    padding: 30px 20px;
  }
`;

export const BoardTitle = styled.h1`
  margin: 0 0 70px;
  color: var(--text-primary, #4f3927);
  font-size: 32px;
  font-weight: 700;

  @media (max-width: 1023px) {
    margin-bottom: 50px;
    font-size: 28px;
  }

  @media (max-width: 767px) {
    margin-bottom: 35px;
    font-size: 24px;
  }
`;

export const DetailBox = styled.section`
  width: 100%;
  border-top: 1px solid var(--border, #e5ddd6);
  border-bottom: 1px solid var(--border, #e5ddd6);
`;

export const DetailHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding: 30px 40px;
  border-bottom: 1px solid var(--border, #e5ddd6);

  @media (max-width: 1023px) {
    gap: 22px;
    padding: 28px 30px;
  }

  @media (max-width: 767px) {
    gap: 20px;
    padding: 24px 16px;
  }
`;

export const TitleRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 767px) {
    align-items: flex-start;
    gap: 14px;
  }
`;

export const PostTitle = styled.h2`
  min-width: 0;
  margin: 0;
  color: var(--text-primary, #4f3927);
  font-size: 22px;
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;

  @media (max-width: 1023px) {
    font-size: 20px;
  }

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const StatusBadge = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 76px;
  height: 34px;
  padding: 0 12px;
  border-radius: 20px;
  background: ${({ $answered }) => ($answered ? "#4f3927" : "#f3e8de")};
  color: ${({ $answered }) => ($answered ? "#ffffff" : "#4f3927")};
  font-size: 14px;
  font-weight: 600;

  @media (max-width: 767px) {
    min-width: 68px;
    height: 30px;
    padding: 0 10px;
    font-size: 13px;
  }
`;

export const MetaInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 36px;

  @media (max-width: 1023px) {
    gap: 28px;
  }

  @media (max-width: 767px) {
    flex-wrap: wrap;
    gap: 10px 20px;
  }
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;

  @media (max-width: 767px) {
    gap: 7px;
  }
`;

export const MetaLabel = styled.span`
  color: var(--text-secondary, #8b8179);
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 13px;
  }
`;

export const MetaValue = styled.span`
  color: var(--text-primary, #4f3927);
  font-size: 15px;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 767px) {
    align-items: flex-start;
    gap: 16px;
  }
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 1023px) {
    width: 90px;
    height: 90px;
  }

  @media (max-width: 767px) {
    width: 80px;
    height: 80px;
    border-radius: 6px;
  }
`;

export const ProductText = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 767px) {
    gap: 10px;
  }
`;

export const ProductName = styled.p`
  margin: 0;
  color: var(--text-primary, #4f3927);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const ReviewRating = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const Star = styled.span`
  color: ${({ $active }) => ($active ? "#6b4d35" : "#d9d2cc")};
  font-size: 20px;
  line-height: 1;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const ContentArea = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 50px 40px;

  @media (max-width: 1023px) {
    min-height: 260px;
    padding: 40px 30px;
  }

  @media (max-width: 767px) {
    min-height: 220px;
    padding: 32px 16px;
  }
`;

export const ContentText = styled.p`
  margin: 0;
  color: var(--text-primary, #4f3927);
  font-size: 16px;
  line-height: 1.8;
  white-space: pre-wrap;
  word-break: keep-all;
  overflow-wrap: break-word;

  @media (max-width: 767px) {
    font-size: 15px;
    line-height: 1.75;
  }
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 30px 0;

  ${({ $private }) =>
    $private &&
    `
      padding-bottom: 0;
    `}

  @media (max-width: 767px) {
    gap: 10px;
    padding: 24px 0;

    ${({ $private }) =>
      $private &&
      `
        padding-bottom: 0;
      `}
  }
`;

export const ListButton = styled.button`
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

  &:hover {
    background: #4f3927;
    color: #ffffff;
  }

  @media (max-width: 767px) {
    min-width: 110px;
    height: 42px;
    padding: 0 20px;
    font-size: 14px;
  }
`;

export const LoginButton = styled.button`
  min-width: 120px;
  height: 44px;
  padding: 0 24px;
  border: 1px solid #4f3927;
  border-radius: 6px;
  background: #4f3927;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    border-color: #6b4d35;
    background: #6b4d35;
  }

  @media (max-width: 767px) {
    min-width: 110px;
    height: 42px;
    padding: 0 20px;
    font-size: 14px;
  }
`;

export const PrivateArea = styled.div`
  width: 100%;
  min-height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  padding: 60px 30px;
  text-align: center;

  @media (max-width: 1023px) {
    min-height: 380px;
    padding: 50px 30px;
  }

  @media (max-width: 767px) {
    min-height: 340px;
    gap: 12px;
    padding: 45px 20px;
  }
`;

export const LockIcon = styled.div`
  width: 46px;
  height: 46px;
  margin-bottom: 8px;
  color: #6b5a4d;

  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`;

export const PrivateTitle = styled.h2`
  margin: 0;
  color: var(--text-primary, #4f3927);
  font-size: 22px;
  font-weight: 700;

  @media (max-width: 767px) {
    font-size: 19px;
  }
`;

export const PrivateDescription = styled.p`
  margin: 0;
  color: var(--text-secondary, #746b64);
  font-size: 16px;
  line-height: 1.7;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const PrivateLoginDescription = styled.p`
  margin: -4px 0 0;
  color: var(--text-secondary, #8b8179);
  font-size: 14px;
  line-height: 1.7;

  @media (max-width: 767px) {
    font-size: 13px;
  }
`;
