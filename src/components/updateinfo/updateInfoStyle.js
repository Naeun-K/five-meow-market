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

  @media (max-width: 1023px) {
    width: 384px;
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    width: calc(100% - 32px);
    min-width: 0;
    max-width: 100%;
    height: auto;

    padding: 12px 24px;
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
      flex-shrink: 0;
      fill: #ebccb2;
    }
  }

  @media (max-width: 1023px) {
    h1 {
      font-size: 36px;
    }

    p {
      font-size: 20px;
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
  }

  @media (max-width: 767px) {
    width: 100%;
    min-width: 0;
    max-width: 100%;
    gap: 25px;
  }
`;

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
    span {
      width: auto;
      font-size: 16px;
    }
    p {
      width: auto;
      font-size: 16px;
    }
    @media (max-width: 767px) {
      width: 100%;

      gap: 20px;
    }
  }
`;

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
`;

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

  button {
    position: absolute;
    right: 0;
    top: 50;
    

    width: 94px;
    height: 53px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: var(--radius-md);
    color: #A8A7A7;


    cursor: pointer;
    z-index: 1;
  }

  @media (max-width: 1023px) {
  input {
  height: 45px;
  padding: 12px 50px 12px 11px;
  font-size: 16px;
   }
  button {
  width: 45px;
  height: 45px;
  background: var(--acent-beidge)
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
  
  button {
    width: 45px;
    height: 45px;
    z-index: 2;}
  }
`;

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

  input::placeholder {
    color: var(--text-secondary);
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: 1023px) {
    height: 45px;

    input {
      height: 45px;
      padding: 12px 10px;
    }

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
    gap: 10px;

    input {
      height: 45px;
      padding: 12px 10px;
    }
    button {
      width: 120px;
      height: 48px;
      padding: 10px;
      font-size: 16px;
    }
  }
`;

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
  }
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

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
  }
`;
