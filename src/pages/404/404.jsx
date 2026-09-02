import errorImage from "../../assets/404img.svg";

import catClean from "../../assets/logo-clean.svg";
import catEat from "../../assets/logo-eat.svg";
import catHigh from "../../assets/logo-high.svg";
import catPlay from "../../assets/logo-play.svg";
import catRest from "../../assets/logo-rest.svg";

import * as S from "./404styles";

function NotFound() {
  return (
    <S.NotFoundPage>
      <S.NotFoundContent>
        {/* 404 */}
        <S.NotFoundNumber>404</S.NotFoundNumber>

        {/* 제목 + 이미지 + 안내 문구 */}
        <S.NotFoundMain>
          <S.NotFoundTitle>페이지를 찾을 수 없습니다</S.NotFoundTitle>

          <S.NotFoundImage src={errorImage} alt="404 페이지" />

          <S.NotFoundDescription>
            요청하신 페이지가 존재하지 않거나
            <br />
            주소가 변경되었을 수도 있습니다.
          </S.NotFoundDescription>
        </S.NotFoundMain>

        {/* 고양이 + 버튼 */}
        <S.NotFoundBottom>
          <S.NotFoundCats>
            <S.CatClean>
              <img src={catClean} alt="" />
            </S.CatClean>

            <S.CatEat>
              <img src={catEat} alt="" />
            </S.CatEat>

            <S.CatHigh>
              <img src={catHigh} alt="" />
            </S.CatHigh>

            <S.CatPlay>
              <img src={catPlay} alt="" />
            </S.CatPlay>

            <S.CatRest>
              <img src={catRest} alt="" />
            </S.CatRest>
          </S.NotFoundCats>

          <S.NotFoundButton type="button">홈으로 돌아가기</S.NotFoundButton>
        </S.NotFoundBottom>
      </S.NotFoundContent>
    </S.NotFoundPage>
  );
}

export default NotFound;
