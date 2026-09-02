import styled from "@emotion/styled";

export const LoginPage = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Noto+Sans+KR:wght@400;500;600;700;800&display=swap");

  box-sizing: border-box;

  display: inline-flex;
  width: 100%;
  height: 1254px;
  justify-content: center;
  align-items: flex-start;
  gap: 1px;

  background: #faf8f4;
  font-family: "Noto Sans KR", sans-serif;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    display: block;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    height: auto;
  }
`;

/* 오른쪽 로그인 영역 */
export const LoginContent = styled.section`
  display: flex;
  width: 699px;
  height: 100%;
  padding: 40px 28px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 61px;

  background: #faf8f4;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    padding: 40px 24px;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 32px 20px;
    gap: 40px;
  }
`;

export const LoginContainer = styled.div`
  width: min(100%, 380px);
  transform: translateY(-6px);

  @media (min-width: 768px) and (max-width: 1023px) {
    transform: none;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const LoginTopNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 42px;

  color: #2e2e2e;
  font-size: 11px;

  a {
    color: #73583e;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    order: 1;
    margin-top: 24px;
    margin-bottom: 0;
  }
`;

export const LoginHeader = styled.header`
  margin-bottom: 43px;
  text-align: center;

  h2 {
    margin: 0;
    color: #070707;
    font-size: 44px;
    font-weight: 800;
    letter-spacing: -1px;
  }

  svg {
    display: block;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    h2 {
      font-size: 36px;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 32px;

    h2 {
      font-size: 28px;
    }

    svg {
      display: none;
    }
  }
`;

export const LoginGreeting = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 9px 0 0;

  color: #171717;
  font-size: 22px;

  span {
    display: inline-flex;
    align-items: center;
    margin-left: 5px;
    opacity: 0.55;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    gap: 8px;
    font-size: 20px;

    span {
      margin-left: 0;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 18px;
  }
`;

export const LoginFormEl = styled.form`
  width: 100%;
`;

export const FormGroup = styled.div`
  margin-bottom: 45px;

  label {
    display: block;
    margin-bottom: 11px;
    color: #202020;
    font-size: 17px;
    font-weight: 500;
  }

  input {
    width: 380px;
    height: 45px;
    border: 1px solid #d2d0ce;
    border-radius: 9px;
    outline: none;
    padding: 0 10px;
    color: #333;
    font-family: inherit;
    font-size: 17px;
    transition:
      border-color 0.2s,
      box-shadow 0.2s;

    &::placeholder {
      color: #b8b8b8;
    }

    &:focus {
      border-color: #806145;
      box-shadow: 0 0 0 3px rgba(128, 97, 69, 0.1);
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    label {
      font-size: 16px;
    }

    input {
      font-size: 16px;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 32px;

    label {
      font-size: 16px;
    }

    input {
      width: 100%;
      font-size: 16px;
    }
  }
`;

export const PasswordInput = styled.div`
  position: relative;

  input {
    padding-right: 40px;
  }
`;

export const PasswordToggle = styled.button`
  position: absolute;
  top: 50%;
  right: 9px;
  border: 0;
  padding: 0;
  color: #aaa;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  transform: translateY(-50%);
`;

export const LoginOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 45px;

  color: #4f4f4f;
  font-size: 16px;

  a {
    color: #3b3b3b;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    a {
      font-size: 15px;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    a {
      font-size: 15px;
    }
  }
`;

export const SaveId = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  input {
    width: 12px;
    height: 12px;
    margin: 0;
    accent-color: #7c5d42;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    span {
      font-size: 15px;
    }
  }
`;

export const LoginButton = styled.button`
  display: flex;
  width: 380px;
  height: 45px;
  padding: 13.5px 168.5px 13.5px 163.5px;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 8px;
  color: #fff;
  background: #806145;
  cursor: pointer;
  font-family: inherit;
  font-size: 17px;
  font-weight: 500;
  transition:
    background 0.2s,
    transform 0.2s;

  &:hover {
    background: #674b34;
  }

  &:active {
    transform: translateY(1px);
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    padding: 13.5px 0;
    font-size: 16px;
  }
`;
