import * as S from "./productStatusStyle";

import goodslogo from "../../assets/goods.logo.webp";

const EmptyResult = ({
  title = "상품이 없습니다.",
  description = "다른 카테고리나 검색어를 이용해보세요.",
}) => {
  return (
    <S.StatusContainer>
      <S.EmptyImage src={goodslogo} alt="상품이 없는 고양이" />

      <S.StatusTitle>{title}</S.StatusTitle>

      <S.StatusDescription>{description}</S.StatusDescription>

      <S.HomeButton to="/">홈으로 돌아가기</S.HomeButton>
    </S.StatusContainer>
  );
};

export default EmptyResult;
