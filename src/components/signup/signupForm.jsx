import {
  SignupLayout,
  SignupContainer,
  FormGroup,
  Row,
  Agreement,
  BottomArea,
} from "./signupStyle";

import { useState } from "react";

const SignupForm = () => {
  // 비밀번호 보기/숨기기 상태
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <SignupLayout>
      <SignupContainer>
        <h1>SIGN UP</h1>

        <div className="subtitle">
          <span>집사 채용 공고</span>

          <svg
            className="paw-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            fill="currentColor"
            aria-hidden="true"
          >
            <ellipse
              cx="25"
              cy="46"
              rx="10"
              ry="14"
              transform="rotate(-25 25 46)"
            />

            <ellipse
              cx="47"
              cy="29"
              rx="10"
              ry="14"
              transform="rotate(-8 47 29)"
            />

            <ellipse
              cx="73"
              cy="29"
              rx="10"
              ry="14"
              transform="rotate(8 73 29)"
            />

            <ellipse
              cx="95"
              cy="46"
              rx="10"
              ry="14"
              transform="rotate(25 95 46)"
            />

            <path
              d="
                M60 52
                C47 52 39 61 34 71
                C31 77 27 82 27 90
                C27 101 35 108 46 108
                C51 108 56 104 60 104
                C64 104 69 108 74 108
                C85 108 93 101 93 90
                C93 82 89 77 86 71
                C81 61 73 52 60 52Z
              "
            />
          </svg>
        </div>

        <form>
          {/* 닉네임 */}
          <FormGroup>
            <label>닉네임</label>

            <Row>
              <input placeholder="닉네임을 입력해주세요" />
              <button type="button">중복확인</button>
            </Row>
          </FormGroup>

          {/* 이메일 */}
          <FormGroup>
            <label>이메일</label>

            <Row>
              <input type="email" placeholder="이메일을 입력해주세요" />
              <button type="button">중복확인</button>
            </Row>
          </FormGroup>

          {/* 비밀번호 */}
          <FormGroup>
            <label>비밀번호</label>

            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호를 입력해주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className={`eye-button ${showPassword ? "active" : ""}`}
                aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  // 🔴 비밀번호 보임 = 일반 눈
                  <svg
                    className="eye-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                ) : (
                  // 🔴 비밀번호 숨김 = 사선 눈
                  <svg
                    className="eye-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                  </svg>
                )}
              </button>
            </div>
          </FormGroup>

          {/* 비밀번호 확인 */}
          <FormGroup>
            <label>비밀번호 확인</label>

            <div className="password-input">
              <input
                type={showPasswordConfirm ? "text" : "password"}
                placeholder="비밀번호를 다시 입력해주세요"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className={
                  passwordConfirm && password !== passwordConfirm
                    ? "password-error-input"
                    : ""
                }
              />
              <button
                type="button"
                className={`eye-button ${showPasswordConfirm ? "active" : ""}`}
                aria-label={
                  showPasswordConfirm ? "비밀번호 숨기기" : "비밀번호 보기"
                }
                onClick={() => setShowPasswordConfirm((prev) => !prev)}
              >
                {showPasswordConfirm ? (
                  // 🔴 비밀번호 보임 = 일반 눈
                  <svg
                    className="eye-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                ) : (
                  // 🔴 비밀번호 숨김 = 사선 눈
                  <svg
                    className="eye-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                  </svg>
                )}
              </button>
            </div>
            {passwordConfirm && password !== passwordConfirm && (
              <p className="password-error">비밀번호가 일치하지 않습니다.</p>
            )}
          </FormGroup>

          {/* 휴대폰번호 */}
          <FormGroup>
            <label>휴대폰번호</label>

            <Row>
              <input type="tel" placeholder="휴대폰번호를 입력해주세요" />
              <button type="button">중복확인</button>
            </Row>
          </FormGroup>

          {/* 주소 */}
          <FormGroup>
            <label>주소</label>

            <Row>
              <input type="text" placeholder="우편번호" />

              <button type="button">우편번호검색</button>
            </Row>

            <input type="text" placeholder="주소를 입력해주세요" />

            <input type="text" placeholder="상세주소를 입력해주세요" />
          </FormGroup>

          {/* 이용약관 */}
          <Agreement>
            <input type="checkbox" />

            <span>
              <strong>이용약관 및 개인정보 처리방침</strong>에 동의합니다
            </span>
          </Agreement>

          {/* 하단 */}
          <BottomArea>
            <button type="button" className="signup-button">
              회원가입
            </button>

            <div className="login-area">
              <span>이미 회원이신가요?</span>

              <a href="/login">로그인</a>
            </div>
          </BottomArea>
        </form>
      </SignupContainer>
    </SignupLayout>
  );
};

export default SignupForm;
