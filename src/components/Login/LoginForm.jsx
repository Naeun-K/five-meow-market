import { useState } from "react";
import {
  LoginPage,
  LoginContent,
  LoginContainer,
  LoginTopNav,
  LoginHeader,
  LoginGreeting,
  LoginFormEl,
  FormGroup,
  PasswordInput,
  PasswordToggle,
  LoginOptions,
  SaveId,
  LoginButton,
} from "./LoginStyle";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <LoginPage>
      <LoginContent>
        <LoginContainer>
          <LoginTopNav>
            <span>처음이신가요?</span>
            <a href="/signup">회원가입</a>
          </LoginTopNav>

          <LoginHeader>
            <h2>LOGIN</h2>
            <LoginGreeting>
              다시 만나서 반가워요{" "}
              <span aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 120 120"
                  fill="var(--acent-beidge)"
                  aria-hidden="true"
                >
                  {/* <!-- 왼쪽 바깥 발가락 젤리 --> */}
                  <ellipse
                    cx="25"
                    cy="46"
                    rx="10"
                    ry="14"
                    transform="rotate(-25 25 46)"
                  />

                  {/* <!-- 왼쪽 안쪽 발가락 젤리 --> */}
                  <ellipse
                    cx="47"
                    cy="29"
                    rx="10"
                    ry="14"
                    transform="rotate(-8 47 29)"
                  />

                  {/* <!-- 오른쪽 안쪽 발가락 젤리 --> */}
                  <ellipse
                    cx="73"
                    cy="29"
                    rx="10"
                    ry="14"
                    transform="rotate(8 73 29)"
                  />

                  {/* <!-- 오른쪽 바깥 발가락 젤리 --> */}
                  <ellipse
                    cx="95"
                    cy="46"
                    rx="10"
                    ry="14"
                    transform="rotate(25 95 46)"
                  />

                  {/* <!-- 중앙 발바닥 젤리 --> */}
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
              </span>
            </LoginGreeting>
          </LoginHeader>

          <LoginFormEl onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="email">이메일</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="이메일을 입력해주세요"
                autoComplete="email"
                required
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="password">비밀번호</label>
              <PasswordInput>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="비밀번호를 입력해주세요"
                  autoComplete="current-password"
                  required
                />
                <PasswordToggle
                  type="button"
                  aria-label={
                    showPassword ? "비밀번호 숨기기" : "비밀번호 보기"
                  }
                  onClick={() => setShowPassword((previous) => !previous)}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                      <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                    </svg>
                  )}
                </PasswordToggle>
              </PasswordInput>
            </FormGroup>

            <LoginOptions>
              <SaveId>
                <input type="checkbox" name="saveId" />
                <span>아이디 저장</span>
              </SaveId>

              <a href="/find-password">비밀번호 찾기</a>
            </LoginOptions>

            <LoginButton type="submit">로그인</LoginButton>
          </LoginFormEl>
        </LoginContainer>
      </LoginContent>
    </LoginPage>
  );
}
