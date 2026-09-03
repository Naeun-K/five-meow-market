import styled from "@emotion/styled";

{
  /* 전체 틀 프레임 */
}
export const Container = styled.div`
  display: flex;
  width: 720px;
  height: 1187px;
  padding: 50px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  flex-shrink: 0;

  background: var(--bg);

  box-sizing: border-box;

  margin: 0 auto;

  input:not([type="checkbox"]) {
    width: 100%;
    height: 54px;
    padding: 19px 10px;

    box-sizing: border-box;

    border: 1px solid var(--border);
    border-radius: var(--radius-md);

    background: #fff;

    color: var(--text-color);

    font-family: "Pretendard", sans-serif;
    font-size: 17px;
    font-weight: 500;

    outline: none;

    &::placeholder {
      color: var(--text-secondary);
    }

    &:hover {
      border-color: #bb9678;
    }

    &:focus {
      border-color: #8a664a;

      box-shadow:
        0 0 0 2px rgba(201, 143, 120, 0.22),
        0 0 0 4px rgba(217, 184, 166, 0.12);
    }
  }
  @media (max-width: 1023px) {
    width: 384px;
    margin: 0 auto;
    width: 384px;
    margin: 0 auto;
  }

  /* 기존 모바일 */
  @media (max-width: 767px) {
    width: calc(100%);
    min-width: 0;
    max-width: 100%;
    height: auto;

    padding: 12px 16px;
    gap: 20px;

    margin: 16px auto;
    box-sizing: border-box;
  }
`;

{
  /*Update Info, 집사변했어, 고양이 발바닥 */
}
export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 159px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  flex-shrink: 0;

  h1 {
    width: 248px;
    height: 74px;

    color: var(--text-color);
    font-family: Inter;
    font-size: 44px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    white-space: nowrap;
    margin: 0;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 29px;

    color: var(--text-color);
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    gap: 8px;

    margin: 0;

    svg {
      width: 40px;
      height: 40px;
      height: 40px;
      flex-shrink: 0;
      fill: #ebccb2;
    }
      fill: #ebccb2;
    }
  }

  @media (max-width: 1023px) {
    h1 {
      font-size: 36px;
    }
    h1 {
      font-size: 36px;
    }

    p {
      font-size: 20px;
    }
    p {
      font-size: 20px;
    }

    p svg {
      width: 28px;
      height: 28px;
    }
    p svg {
      width: 28px;
      height: 28px;
    }

    @media (max-width: 767px) {
      width: 100%;
      padding: 30px 12px;
      gap: 20px;
    }
  }
    @media (max-width: 767px) {
      width: 100%;
      padding: 30px 12px;
      gap: 20px;
    }
  }
`;

{
  /*헤더 밑에 부분 전체 묶음 */
}
export const Main = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 40px;
  width: 100%;

  align-self: stretch;

  max-width: none;
  min-height: auto;
  margin: 0;

  @media (max-width: 1023px) {
    gap: 30px;
    gap: 30px;
  }

  @media (max-width: 767px) {
    width: 100%;
    min-width: 0;
    max-width: 100%;ff
    gap: 25px;
  }
    width: 100%;
    min-width: 0;
    max-width: 100%;
    gap: 25px;
  }
`;

{
  /*닉네임, 설정 닉네임, 이메일, 사용 이메일  */
}
{
  /*닉네임, 설정 닉네임, 이메일, 사용 이메일  */
}
export const InfoRow = styled.div`
  display: flex;
  width: 100%;
  min-width: 0;
  height: 30px;

  align-items: center;
  gap: 20px;

  align-self: stretch;

  span {
    width: 117px;
    flex-shrink: 0;
    font-size: 14px;

    color: var(--text-color);
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  p {
    flex: 1;
    min-width: 0;
    overflow-wrap: break-word;
    word-brack: brack-all;
    width: auto;
    min-width: 0;
    font-size: 14px;

    color: var(--text-color);
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    margin: 0;
  }
  @media (max-width: 1023px) {
  @media (max-width: 1023px) {
    span {
      width: auto;
      font-size: 16px;
      width: auto;
      font-size: 16px;
    }
    p {
      width: auto;
      font-size: 16px;
      width: auto;
      font-size: 16px;
    }
    @media (max-width: 767px) {
      width: 100%;
      width: 100%;

      gap: 20px;
    }
  }
      gap: 20px;
    }
  }
`;

{
  /*새 비번, 새 비번 확인, 휴대폰 번호, 주소 */
}
{
  /*새 비번, 새 비번 확인, 휴대폰 번호, 주소 */
}
export const FormGroup = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  align-self: stretch;

  label {
    height: 14px;
    align-self: stretch;

    color: var(--text-color);
    font-family: Inter;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  input {
    display: flex;
    width: 100%;
    height: 53px;

    padding: 21px 40px 18px 13px;

    align-items: flex-start;

    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    background: #fff;

    box-sizing: border-box;
  }

  input::placeholder {
    color: var(--text-secondary);
    font-family: Inter;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
    @media (max-width: 1023px) {
    gap: 15px;

    label {
    font-size: 16px;
    }

    input {
    height: 45px;
    padding: 12px 17px 12px 12px;
    }

    input::placeholder {
    font-size: 16px;
    }
}
    
    @media (max-width: 767px) {
    gap: 10px;

    label {
    font-size: 14px;}

    input {
    padding: 12px 10px;
    }

    input::placeholder {
      font-size: 14px;}
    }
}
   .password-error-input {
    border-color: #eb2d2d;
  }

  /* 🔴 추가 - 비밀번호 불일치 안내 문구 */
  .password-error {
    margin: 0;

    color: #ee2f2f;

    font-family: "Pretendard", sans-serif;
    font-size: 14px;
    font-weight: 400;
  }
`;

{
  /*비밀번호 입력칸 , input 및 Placeholder, 버튼 눈 */
}
{
  /*비밀번호 입력칸 , input 및 Placeholder, 버튼 눈 */
}
export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 53px;

  flex-direction: column;
  align-items: flex-start;

  position: relative;

  input {
    width: 100%;
    height: 53px;

    padding: 21px 60px 18px 13px;

    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    background: #fff;

    box-sizing: border-box;
    line-height: normal;
  }

  .eye-button {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);

    width: 32px;
    height: 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0;
    border: none;
    background: transparent;

    color: var(--text-secondary);
    cursor: pointer;
    z-index: 2;
  }

  .eye-button.active {
    color: #000;
  }

  .eye-icon {
    width: 16px;
    height: 16px;
    color: currentColor;
    pointer-events: none;
  }

  @media (max-width: 1023px) {
    input {
      height: 45px;
      padding: 12px 50px 12px 11px;
      font-size: 16px;
    }
    .eye-button {
      width: 32px;
      height: 32px;
      right: 10px;
      background: transparent;
      z-index: 2;
    }
  }

  @media (max-width: 767px) {
    height: 45px;

    input {
      height: 45px;
      padding: 12px 55px 12px 10px;
      font-size: 16px;
    }

    .eye-button {
      width: 28px;
      height: 28px;
      right: 8px;
      z-index: 2;
    }
  }
`;

{
  /* 휴대폰 번호, 본인인증 */
}
{
  /* 휴대폰 번호, 본인인증 */
}
export const PhoneRow = styled.div`
  display: flex;
  min-width: 0;
  width: 100%;
  height: 45px;

  align-items: center;
  gap: 10px;

  input {
    flex: 1;
    min-width: 0;

    height: 45px;
    padding: 21px 13px 18px;

    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    background: #fff;

    box-sizing: border-box;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  }

  input::placeholder {
    color: var(--text-secondary);
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
  input::placeholder {
    color: var(--text-secondary);
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: 1023px) {
  @media (max-width: 1023px) {
    height: 45px;

    input {
      height: 45px;
      padding: 12px 10px;
    }
      height: 45px;
      padding: 12px 10px;
    }

    input::placeholder {
      font-size: 16px;
    input::placeholder {
      font-size: 16px;
    }
  }

  @media (max-width: 767px) {
    gap: 8px;
    input::placeholder {
      font-size: 14px;
    }
  }
`;

{
  /* 우편번호 검색 버튼 */
}
{
  /* 우편번호 검색 버튼 */
}
export const VerifyButton = styled.button`
  width: 140px;
  height: 53px;

  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: var(--radius-md);

  background: var(--acent-beidge);
  color: var(--text-primary);

  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  cursor: pointer;

  @media (max-width: 1023px) {
    width: 107px;
    height: 45px;
    padding: 15px 10px;
    gap: 10px;
    white-space: nowrap;
    width: 107px;
    height: 45px;
    padding: 15px 10px;
    gap: 10px;
    white-space: nowrap;

    @media (max-width: 767px) {
      width: 100x;
      height: 45px;
      padding: 10px 5px;
      font-size: 14px;
      white-space: nowrap;
    }
  }
`;

{
  /* 우편번호 검색 버튼 */
}
{
  /* 우편번호 검색 버튼 */
}
export const AddressRow = styled.div`
  display: flex;
  width: 100%;

  align-items: flex-start;
  gap: 15px;

  align-self: stretch;

  input {
    display: flex;
    height: 53px;

    padding: 15px 10px;

    align-items: center;

    flex: 1;
    min-width: 0;

    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    background: #fff;

    box-sizing: border-box;
  }

  button {
    display: flex;
    width: 140px;
    height: 53px;

    padding: 15px 10px;

    justify-content: center;
    align-items: center;
    gap: 10px;

    flex-shrink: 0;

    border: none;
    border-radius: var(--radius-md);
    color: var(--text-primary);

    background: var(--acent-beidge);

    cursor: pointer;
  }
  @media (max-width: 1023px) {
  }
  @media (max-width: 1023px) {
    gap: 10px;

    input {
      height: 45px;
      padding: 12px 10px;
    }
    }
    button {
      width: 120px;
      height: 48px;
      padding: 10px;
      font-size: 16px;
    }
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    gap: 8px;

    flex-direction: row; /* 🔴 가로 유지 */
    align-items: center;

    input {
      flex: 1;
      min-width: 0; /* 🔴 중요 */
      width: auto;
      height: 45px;

      padding: 12px 8px;

      font-size: 14px;
    }

    button {
      width: 82px; /* 🔴 검색 버튼 고정폭 */
      height: 45px;

      flex-shrink: 0;

      padding: 8px 6px;

      font-size: 13px;
      white-space: nowrap;
    }
  }
`;

{
  /* 본인인증, 우편번호 검색 버튼 */
}
{
  /* 본인인증, 우편번호 검색 버튼 */
}
export const AddressButton = styled.button`
  color: var(--text-button);
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 1023px) {
    font-size: 16px;
    font-size: 16px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
  }
    font-size: 16px;
  }
`;

{
  /* 회원정보 수정 버튼 */
}
{
  /* 회원정보 수정 버튼 */
}
export const SubmitButton = styled.button`
  display: flex;
  width: 100%;
  height: 53px;

  padding: 10px 113px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  align-self: stretch;

  border: none;
  border-radius: var(--radius-md);

  background: var(--bg-button);
  color: var(--text-button);

  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  cursor: pointer;

  @media (max-width: 1023px) {
    font-size: 16px;
    white-space: nowrap;
    font-size: 16px;
    white-space: nowrap;
  }
`;
