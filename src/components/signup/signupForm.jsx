import {
  SignupLayout,
  SignupContainer,
  FormGroup,
  Row,
  Agreement,
  BottomArea,
} from "./signupStyle";

import { useEffect, useRef, useState } from "react";
import useToast from "../../hooks/useToast";
import * as authService from "../../services/authService";
import { searchAddress } from "../../services/addressService";
import { useNavigate } from "react-router-dom";
import PawIcon from "../common/PawIcon/PawIcon";

const isValidPassword = (password) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
};

const SignupForm = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();

  // 비밀번호 보기/숨기기 상태
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const [nickname, setNickname] = useState("");
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);

  const [email, setEmail] = useState("");
  const [isEmailChecked, setIsEmailChecked] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [phone, setPhone] = useState("");
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  const [zoneCode, setZoneCode] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  const [agreed, setAgreed] = useState(false);

  const inputRef = useRef(null);

  // 닉네임 중복확인
  const handleCheckNickname = async () => {
    const trimmed = nickname.trim();

    // 필수 입력
    if (!trimmed) {
      showToast("닉네임을 입력해주세요.", false);
      return;
    }

    // 길이 검사
    if (trimmed.length < 2 || trimmed.length > 10) {
      showToast("닉네임은 2자 이상 10자 이하로 입력해주세요.", false);
      return;
    }

    // 한글, 영문, 숫자 검사
    if (!/^[가-힣a-zA-Z0-9]+$/.test(trimmed)) {
      showToast("닉네임은 한글, 영문, 숫자만 사용할 수 있습니다.", false);
      return;
    }

    try {
      const result = await authService.checkNickname(trimmed);

      if (result.isDuplicate) {
        showToast(result.message, result.success);
      }
      const isAvailable = result.success && !result.isDuplicate;

      setIsNicknameChecked(isAvailable);

      showToast(result.message, isAvailable);
    } catch (error) {
      console.error(error.message);

      showToast(
        "닉네임 중복 확인 중 오류가 발생했습니다. 다시 시도해주세요",
        false,
      );
    }
  };

  // 이메일 중복확인
  const handleCheckEmail = async () => {
    const trimmed = email.trim();
    if (!trimmed) {
      showToast("이메일을 입력해주세요.", false);
      return;
    }

    // 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmed)) {
      showToast("올바른 이메일 형식으로 입력해주세요.", false);
      return;
    }

    try {
      const result = await authService.checkEmail(trimmed);

      if (result.isDuplicate) {
        showToast(result.message, result.success);
      }

      const isAvailable = result.success && !result.isDuplicate;
      setIsEmailChecked(isAvailable);
      showToast(result.message, isAvailable);
    } catch (error) {
      console.error(error.message);
      showToast(
        "이메일 중복 확인 중 오류가 발생했습니다. 다시 시도해주세요",
        false,
      );
    }
  };

  // 휴대폰번호처럼 화면에 보이기
  const formatPhoneNumber = (value) => {
    // 숫자가 아닌 문자 제거
    const numbers = value.replace(/\D/g, "").slice(0, 11);

    if (numbers.length <= 3) {
      return numbers;
    }

    if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    }

    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
  };

  // 휴대폰 인증
  const handleVerifyPhone = async () => {
    const raw = phone.replace(/\D/g, "");

    if (!/^01[016789]\d{8}$/.test(raw)) {
      showToast("올바른 휴대폰번호를 입력해주세요.", false);
      return;
    }

    const trimmed = raw.trim();
    if (!trimmed) {
      showToast("휴대폰번호를 입력해주세요.", false);
      return;
    }

    try {
      const result = await authService.verifyPhone(trimmed);
      setIsPhoneVerified(result.success);
      showToast(result.message, result.success);
    } catch (error) {
      console.error(error.message);
      showToast(
        "휴대폰 인증 처리 중 오류가 발생했습니다. 다시 시도해주세요",
        false,
      );
    }
  };

  // 주소 검색
  const handleSearchAddress = async () => {
    try {
      const result = await searchAddress();
      setZoneCode(result.zoneCode);
      setAddress(result.address);
    } catch {
      showToast("주소 검색에 실패했습니다. 다시 시도해주세요.", false);
    }
  };

  // 회원가입
  const handleSignup = async (event) => {
    event.preventDefault();

    const rawPhone = phone.replace(/\D/g, "");

    // 필수 입력값 확인
    if (
      !nickname.trim() ||
      !email.trim() ||
      !password ||
      !passwordConfirm ||
      !rawPhone ||
      !zoneCode ||
      !address
    ) {
      showToast("필수 정보를 모두 입력해주세요.", false);
      return;
    }

    // 중복 확인 / 인증 여부
    if (!isNicknameChecked) {
      showToast("닉네임 중복확인을 해주세요.", false);
      return;
    }

    if (!isEmailChecked) {
      showToast("이메일 중복확인을 해주세요.", false);
      return;
    }

    if (!isPhoneVerified) {
      showToast("휴대폰 인증을 완료해주세요.", false);
      return;
    }

    // 비밀번호 확인
    if (password !== passwordConfirm) {
      showToast("비밀번호가 일치하지 않습니다.", false);
      return;
    }

    // 이용약관
    if (!agreed) {
      showToast("이용약관에 동의해주세요.", false);
      return;
    }

    const userData = {
      nickname: nickname.trim(),
      email: email.trim(),
      password,
      phone: rawPhone,
      zipcode: zoneCode,
      address,
      detailAddress: detailAddress.trim(),
      agreements: agreed,
    };

    try {
      const result = await authService.signup(userData);

      if (!result.success) {
        showToast(result.message || "회원가입에 실패했습니다.", result.success);
        return;
      }

      showToast(result.message || "회원가입이 완료되었습니다.", result.success);

      console.log("회원가입 성공:", result);

      navigate("/login");
    } catch (error) {
      console.error(error.message);
      showToast(
        "회원가입 처리 중 오류가 발생했습니다. 다시 시도해주세요.",
        false,
      );
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <SignupLayout>
      <SignupContainer>
        <h1>SIGN UP</h1>

        <div className="subtitle">
          <span>집사 채용 공고</span>

          <PawIcon />
        </div>

        <form onSubmit={handleSignup}>
          {/* 닉네임 */}
          <FormGroup>
            <label>닉네임</label>

            <Row>
              <input
                ref={inputRef}
                placeholder="닉네임을 입력해주세요"
                value={nickname}
                onChange={(event) => {
                  setNickname(event.target.value);
                  setIsNicknameChecked(false);
                }}
              />
              <button type="button" onClick={handleCheckNickname}>
                중복확인
              </button>
            </Row>
          </FormGroup>

          {/* 이메일 */}
          <FormGroup>
            <label>이메일</label>

            <Row>
              <input
                type="email"
                placeholder="이메일을 입력해주세요"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setIsEmailChecked(false);
                }}
              />
              <button type="button" onClick={handleCheckEmail}>
                중복확인
              </button>
            </Row>
          </FormGroup>

          {/* 비밀번호 */}
          <FormGroup>
            <div className="label-guide-container">
              <label>비밀번호</label>
              <p
                className={`password-guide ${
                  !password
                    ? "guide-hidden"
                    : isValidPassword(password)
                      ? "password-check"
                      : "password-error"
                }`}
              >
                {isValidPassword(password)
                  ? "사용 가능한 비밀번호입니다."
                  : "비밀번호는 영문, 숫자, 대문자를 포함해야 합니다."}
              </p>
            </div>

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
            <div className="label-guide-container">
              <label>비밀번호 확인</label>
              <p
                className={`password-guide ${
                  !passwordConfirm
                    ? "guide-hidden"
                    : password === passwordConfirm
                      ? "password-check"
                      : "password-error"
                }`}
              >
                {passwordConfirm
                  ? password !== passwordConfirm
                    ? "비밀번호가 일치하지 않습니다."
                    : "비밀번호가 일치합니다."
                  : ""}
              </p>
            </div>

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
          </FormGroup>

          {/* 휴대폰번호 */}
          <FormGroup>
            <label>휴대폰번호</label>

            <Row>
              <input
                type="tel"
                placeholder="휴대폰번호를 입력해주세요"
                value={phone}
                onChange={(event) => {
                  setPhone(formatPhoneNumber(event.target.value));
                  setIsPhoneVerified(false);
                }}
              />
              <button type="button" onClick={handleVerifyPhone}>
                본인인증
              </button>
            </Row>
          </FormGroup>

          {/* 주소 */}
          <FormGroup>
            <label>주소</label>

            <Row>
              <input
                type="text"
                placeholder="우편번호"
                value={zoneCode}
                readOnly
              />

              <button type="button" onClick={handleSearchAddress}>
                우편번호검색
              </button>
            </Row>

            <input type="text" placeholder="주소" value={address} readOnly />

            <input
              type="text"
              placeholder="상세주소를 입력해주세요"
              value={detailAddress}
              onChange={(event) => setDetailAddress(event.target.value)}
            />
          </FormGroup>

          {/* 이용약관 */}
          <Agreement>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(event) => setAgreed(event.target.checked)}
            />

            <span>
              <strong>이용약관 및 개인정보 처리방침</strong>에 동의합니다
            </span>
          </Agreement>

          {/* 하단 */}
          <BottomArea>
            <button type="submit" className="signup-button">
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
