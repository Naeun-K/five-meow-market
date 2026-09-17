import { useEffect, useRef, useState } from "react";
import useToast from "../../hooks/useToast";
import { verifyPhone } from "../../services/authService";
import {
  FindPasswordStyle,
  FindPasswordFormStyle,
  FindPasswordModalOverlay,
} from "./findPasswordStyle";

const isValidPassword = (password) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);

function PasswordVisibilityIcon({ isVisible }) {
  return isVisible ? (
    <svg
      className="eye-icon"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
    </svg>
  ) : (
    <svg
      className="eye-icon"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
      <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
    </svg>
  );
}

export default function FindPasswordForm({ onClose }) {
  const { showToast } = useToast();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewPasswordConfirm, setShowNewPasswordConfirm] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      showToast("이메일을 입력해주세요.", false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      showToast("올바른 이메일 형식으로 입력해주세요.", false);
      return;
    }

    const trimmedPhone = phone.trim();

    if (!trimmedPhone) {
      showToast("휴대전화번호를 입력해주세요.", false);
      return;
    }

    if (!/^01[016789]-?\d{3,4}-?\d{4}$/.test(trimmedPhone)) {
      showToast("올바른 휴대전화번호를 입력해주세요.", false);
      return;
    }

    showToast("비밀번호 재설정 안내를 이메일로 보내드릴게요.", true);
  };

  const handlePhoneVerification = async () => {
    const trimmedPhone = phone.trim();

    if (!trimmedPhone) {
      showToast("휴대전화번호를 입력해주세요.", false);
      return;
    }

    if (!/^01[016789]-?\d{3,4}-?\d{4}$/.test(trimmedPhone)) {
      showToast("올바른 휴대전화번호를 입력해주세요.", false);
      return;
    }

    try {
      setIsVerifying(true);
      const result = await verifyPhone(trimmedPhone);

      if (!result.success || result.verified === false) {
        showToast(result.message || "본인인증에 실패했습니다.", false);
        return;
      }

      setIsPhoneVerified(true);
      showToast("본인인증이 완료되었습니다. 새 비밀번호를 입력해주세요.", true);
    } catch (error) {
      showToast(error.message || "본인인증에 실패했습니다.", false);
    } finally {
      setIsVerifying(false);
    }
  };

  const handlePasswordReset = (event) => {
    event.preventDefault();

    if (!newPassword || !newPasswordConfirm) {
      showToast("새 비밀번호를 입력해주세요.", false);
      return;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(newPassword)) {
      showToast(
        "비밀번호는 8자 이상이며 영문 대/소문자와 숫자를 포함해야 합니다.",
        false,
      );
      return;
    }

    if (newPassword !== newPasswordConfirm) {
      showToast("새 비밀번호가 일치하지 않습니다.", false);
      return;
    }

    showToast("새 비밀번호가 설정되었습니다.", true);
  };

  return (
    <FindPasswordModalOverlay onMouseDown={onClose}>
      <FindPasswordStyle
        role="dialog"
        aria-modal="true"
        aria-labelledby="find-password-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="close-button"
          aria-label="비밀번호 찾기 창 닫기"
          onClick={onClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <header className="header">
          <h2 id="find-password-title">
            {isPhoneVerified ? "RESET PASSWORD" : "FIND PASSWORD"}
          </h2>
          <div className="greeting">
            <p>
              {isPhoneVerified
                ? "새 비밀번호를 입력해주세요"
                : "가입한 이메일과 휴대전화번호를 입력해주세요"}
            </p>
          </div>
        </header>

        <FindPasswordFormStyle
          onSubmit={isPhoneVerified ? handlePasswordReset : handleSubmit}
          noValidate
        >
          {!isPhoneVerified ? (
            <>
              <div className="input-container">
                <label htmlFor="find-password-email">이메일</label>
                <input
                  id="find-password-email"
                  name="email"
                  type="email"
                  ref={inputRef}
                  placeholder="가입한 이메일을 입력해주세요"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="input-container">
                <label htmlFor="find-password-phone">휴대전화번호</label>
                <div className="phone-input-row">
                  <input
                    id="find-password-phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    placeholder="휴대전화번호 입력"
                    autoComplete="tel-national"
                    value={phone}
                    onChange={(event) => {
                      setPhone(event.target.value);
                      setIsPhoneVerified(false);
                    }}
                  />
                  <button
                    type="button"
                    className="verify-phone-button"
                    onClick={handlePhoneVerification}
                    disabled={isVerifying}
                  >
                    {isVerifying ? "인증 중..." : "본인인증"}
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="input-container">
                <label htmlFor="new-password">새 비밀번호</label>
                <div className="password-input">
                  <input
                    id="new-password"
                    type={showNewPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="새 비밀번호를 입력해주세요"
                    value={newPassword}
                    onChange={(event) => setNewPassword(event.target.value)}
                  />
                  <button
                    type="button"
                    className={`eye-button ${showNewPassword ? "active" : ""}`}
                    aria-label={
                      showNewPassword ? "비밀번호 숨기기" : "비밀번호 보기"
                    }
                    onClick={() => setShowNewPassword((previous) => !previous)}
                  >
                    <PasswordVisibilityIcon isVisible={showNewPassword} />
                  </button>
                </div>
                <p
                  className={`password-guide ${
                    newPassword
                      ? isValidPassword(newPassword)
                        ? "password-check"
                        : "password-error"
                      : "guide-hidden"
                  }`}
                >
                  {newPassword
                    ? isValidPassword(newPassword)
                      ? "사용 가능한 비밀번호입니다."
                      : "비밀번호는 8자 이상이며 영문 대/소문자와 숫자를 포함해야 합니다."
                    : ""}
                </p>
              </div>

              <div className="input-container">
                <label htmlFor="new-password-confirm">새 비밀번호 확인</label>
                <div className="password-input">
                  <input
                    id="new-password-confirm"
                    type={showNewPasswordConfirm ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="새 비밀번호를 다시 입력해주세요"
                    value={newPasswordConfirm}
                    onChange={(event) =>
                      setNewPasswordConfirm(event.target.value)
                    }
                  />
                  <button
                    type="button"
                    className={`eye-button ${showNewPasswordConfirm ? "active" : ""}`}
                    aria-label={
                      showNewPasswordConfirm
                        ? "비밀번호 숨기기"
                        : "비밀번호 보기"
                    }
                    onClick={() =>
                      setShowNewPasswordConfirm((previous) => !previous)
                    }
                  >
                    <PasswordVisibilityIcon
                      isVisible={showNewPasswordConfirm}
                    />
                  </button>
                </div>
                <p
                  className={`password-guide ${
                    newPasswordConfirm
                      ? newPassword === newPasswordConfirm
                        ? "password-check"
                        : "password-error"
                      : "guide-hidden"
                  }`}
                >
                  {newPasswordConfirm
                    ? newPassword !== newPasswordConfirm
                      ? "비밀번호가 일치하지 않습니다."
                      : "비밀번호가 일치합니다."
                    : ""}
                </p>
              </div>
            </>
          )}

          <button type="submit" className="find-button" disabled={isVerifying}>
            {isPhoneVerified ? "비밀번호 변경" : "재설정 안내 받기"}
          </button>
        </FindPasswordFormStyle>
      </FindPasswordStyle>
    </FindPasswordModalOverlay>
  );
}
