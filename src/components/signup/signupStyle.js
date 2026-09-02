import styled from "@emotion/styled";

export const SignupLayout = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;

  background: var(--bg);
`;

export const SignupContainer = styled.div`
  width: 701px;
  padding: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  box-sizing: border-box;

  background: var(--bg);
  color: var(--text-color);

  h1 {
    margin: 0;

    color: var(--text-color);
    font-family: "Pretendard", sans-serif;
    font-size: 44px;
    font-weight: 600;
  }

  .subtitle {
    display: flex;
    align-items: center;
    gap: 10px;

    color: var(--text-color);
    font-family: "Pretendard", sans-serif;
    font-size: 22px;
    font-weight: 400;
  }

  .paw-icon {
    width: 28px;
    height: 28px;

    color: var(--acent-beidge);

    flex-shrink: 0;
  }

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  label {
    color: var(--text-color);

    font-family: "Pretendard", sans-serif;
    font-size: 17px;
    font-weight: 500;
  }

  input:not([type="checkbox"]) {
    width: 100%;
    height: 54px;
    padding: 19px 10px;

    box-sizing: border-box;

    border: 1px solid var(--border);
    border-radius: var(--radius-md);

    background: var(--bg);

    color: var(--text-color);

    font-family: "Pretendard", sans-serif;
    font-size: 17px;
    font-weight: 500;

    outline: none;

    &::placeholder {
      color: var(--text-secondary);
    }
  }

  .password-input {
    position: relative;
    width: 100%;
  }

  .eye-icon {
    position: absolute;

    top: 50%;
    right: 16px;

    transform: translateY(-50%);

    color: var(--text-secondary);

    font-size: 16px;
    line-height: 1;

    pointer-events: none;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 384px;
    padding: 20px 30px;
    gap: 15px;

    h1 {
      font-size: 28px;
    }

    .subtitle {
      font-size: 16px;
      gap: 10px;
    }

    .paw-icon {
      width: 20px;
      height: 20px;
    }

    form {
      gap: 15px;
    }

    label {
      font-size: 14px;
    }

    input:not([type="checkbox"]) {
      height: 54px;
      padding: 10px;

      font-size: 14px;
    }

    .eye-icon {
      right: 10px;

      width: 16px;
      height: 16px;
    }
  }

  /* Mobile */
  @media (max-width: 767px) {
    width: 320px;
    padding: 20px;
    gap: 15px;

    h1 {
      font-size: 24px;
    }

    .subtitle {
      font-size: 16px;
      gap: 10px;
    }

    .paw-icon {
      width: 20px;
      height: 20px;
    }

    form {
      gap: 15px;
    }

    button {
      height: 33px;
      padding: 8px 10px;

      font-size: 12px;
    }

    label {
      font-size: 12px;
    }

    input:not([type="checkbox"]) {
      height: 33px;
      padding: 8px 10px;

      font-size: 12px;
    }

    input {
      width: 14px;
      height: 16px;

      flex-shrink: 0;
    }

    span {
      font-size: 15px;
      white-space: nowrap;
    }

    .signup-button {
      width: 280px;
      height: 35px;

      margin: 0 auto;
      padding: 0;

      font-size: 16px;
    }

    .eye-icon {
      right: 10px;

      width: 14px;
      height: 14px;
    }
  }
`;

export const FormGroup = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 10px;

  input {
    flex: 1;
  }

  button {
    flex-shrink: 0;

    height: 54px;
    padding: 16px 24px;

    border-radius: var(--radius-md);

    background: var(--acent-beidge);

    color: var(--text-primary);

    font-family: "Pretendard", sans-serif;
    font-size: 17px;
    font-weight: 500;
  }

  @media (max-width: 767px) {
    button {
      height: 33px;
      padding: 8px 10px;

      font-size: 12px;
    }
  }
`;

export const Agreement = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 10px;

  input {
    width: 14px;
    height: 16px;

    flex-shrink: 0;
  }

  span {
    color: var(--text-color);

    font-family: "Pretendard", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }

  @media (max-width: 767px) {
    span {
      font-size: 12px;
      white-space: normal;
    }
  }
`;

export const BottomArea = styled.div`
  width: 100%;

  .signup-button {
    width: 100%;
    height: 52px;

    border-radius: var(--radius-md);

    background: var(--bg-button);

    color: var(--text-button);

    font-family: "Pretendard", sans-serif;
    font-size: 17px;
    font-weight: 600;
  }

  .login-area {
    margin-top: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 15px;

    color: var(--text-secondary);

    font-family: "Pretendard", sans-serif;
    font-size: 16px;
  }

  .login-area a {
    color: var(--text-primary);

    font-weight: 500;

    text-decoration: underline;
    text-underline-offset: 6px;
  }

  @media (max-width: 767px) {
    .signup-button {
      width: 100%;
      height: 35px;

      font-size: 16px;
    }

    .login-area {
      margin-top: 15px;

      font-size: 12px;
      gap: 10px;
    }
  }
`;
