import { useEffect, useState } from "react";
import { verifyPassword } from "../../services/authService";
import useAuth from "../../hooks/useAuth";
import {
  ModalOverlay,
  Modal,
  Header,
  Title,
  Description,
  CloseButton,
  Form,
  InputWrapper,
  PasswordInput,
  ToggleButton,
  ErrorMessage,
  Actions,
  CancelButton,
  ConfirmButton,
} from "./PasswordConfirmModalStyle";

function PasswordConfirmModal({
  isOpen,
  onClose,
  onSuccess,
  purpose = "회원정보를 확인",
}) {
  const { accessToken } = useAuth();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setPassword("");
      setShowPassword(false);
      setErrorMessage("");
      setIsSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmedPassword = password.trim();

    if (!trimmedPassword) {
      setErrorMessage("비밀번호를 입력해주세요.");
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage("");
      const result = await verifyPassword(trimmedPassword, accessToken);

      if (!result.success || result.isMatched === false) {
        setErrorMessage(result.message || "비밀번호가 일치하지 않습니다.");
        return;
      }

      onSuccess();
    } catch (error) {
      setErrorMessage(
        error.message || "비밀번호 확인에 실패했습니다. 다시 시도해주세요.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ModalOverlay role="presentation">
      <Modal
        role="dialog"
        aria-modal="true"
        aria-labelledby="password-confirm-title"
      >
        <Header>
          <Title id="password-confirm-title">비밀번호 확인</Title>
          <CloseButton
            type="button"
            onClick={onClose}
            aria-label="비밀번호 확인 창 닫기"
          >
            <span aria-hidden="true">&times;</span>
          </CloseButton>
        </Header>

        <Description>
          {purpose}하기 위해 비밀번호를 다시 입력해주세요.
        </Description>

        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <PasswordInput
              autoFocus
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setErrorMessage("");
              }}
              placeholder="비밀번호를 입력해주세요"
              aria-label="비밀번호"
              aria-invalid={Boolean(errorMessage)}
            />
            <ToggleButton
              type="button"
              onClick={() => setShowPassword((visible) => !visible)}
              aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
            >
              {showPassword ? (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 12s3.5-5 9.5-5 9.5 5 9.5 5-3.5 5-9.5 5-9.5-5-9.5-5Z" />
                  <circle cx="12" cy="12" r="2.5" />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3l18 18" />
                  <path d="M10.6 6.3A10.8 10.8 0 0 1 12 6c6 0 9.5 6 9.5 6a17.3 17.3 0 0 1-3.1 3.7" />
                  <path d="M6.6 6.7C3.8 8.4 2.5 12 2.5 12s3.5 6 9.5 6a9.8 9.8 0 0 0 3-.5" />
                </svg>
              )}
            </ToggleButton>
          </InputWrapper>
          {errorMessage && (
            <ErrorMessage role="alert">{errorMessage}</ErrorMessage>
          )}

          <Actions>
            <CancelButton
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
            >
              취소
            </CancelButton>
            <ConfirmButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "확인 중..." : "확인"}
            </ConfirmButton>
          </Actions>
        </Form>
      </Modal>
    </ModalOverlay>
  );
}

export default PasswordConfirmModal;
