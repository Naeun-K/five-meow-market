import { useState } from "react";
import { verifyPhone } from "../../services/authService";
import { searchAddress } from "../../services/addressService";
import { updateMyInfo } from "../../services/userService";
import useToast from "../../hooks/useToast";
import { UpdateStyle } from "./updateInfoStyle";

const UpdateInfo = () => {
  // 비밀번호
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  // 휴대폰 번호
  const [phone, setPhone] = useState("");
  const { showToast } = useToast();

  // 주소
  const [zoneCode, setZoneCode] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  // 본인인증
  const handleVerifyPhone = async () => {
    if (phone.length !== 11) {
      showToast("휴대폰 번호 11자리를 입력해주세요.", false);
      return;
    }

    const fullphone = `010-${phone.slice(0, 4)}-${phone.slice(4)}`;

    try {
      const result = await verifyPhone(fullphone);
      console.log("휴대폰 인증 결과:", result);
      showToast("본인인증 요청이 완료되었습니다.", true);
    } catch (error) {
      console.error("휴대폰 인증 실패:", error);
      showToast("본인인증에 실패했습니다.", false);
    }
  };

  // 주소 검색
  const handleSearchAddress = async () => {
    try {
      const result = await searchAddress();

      console.log("주소 검색 결과:", result);

      setZoneCode(result.zoneCode);
      setAddress(result.address);
    } catch (error) {
      console.error("주소 검색 실패:", error);

      showToast("주소 검색에 실패했습니다.", false);
    }
  };

  // 회원정보 수정
  const isValidPassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z]).+$/.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 비밀번호 입력했을 때만 형식 검사
    if (password && !isValidPassword(password)) {
      showToast("비밀번호는 영문, 숫자, 대문자를 포함해야 합니다.", false);
      return;
    }
    // 비밀번호 입력했을 때만 일치 여부 확인
    if (password && password !== passwordConfirm) {
      showToast("새 비밀번호가 일치하지 않습니다.", false);
      return;
    }

    const fullPhone = phone ? `010-${phone.slice(0, 4)}-${phone.slice(4)}` : "";

    const updateData = {
      password,
      phone: fullPhone,
      zoneCode,
      address,
      detailAddress,
    };

    try {
      const result = await updateMyInfo(updateData);

      console.log("회원정보 수정 결과:", result);

      if (!result.success) {
        showToast(result.message || "회원정보 수정에 실패했습니다.", false);
        return;
      }

      showToast("회원정보가 수정되었습니다.", true);
    } catch (error) {
      console.error("회원정보 수정 실패:", error);

      showToast("회원정보 수정에 실패했습니다.", false);
    }
  };

  return (
    <UpdateStyle>
      <header className="header">
        <h1>Update Info</h1>
        <div className="header-wrapper">
          <p>집사가 변했어</p>
          <span className="svg-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 120 120"
              fill="var(--acent-beidge)"
              aria-hidden="true"
            >
              {/* 왼쪽 바깥 발가락 젤리 */}
              <ellipse
                cx="25"
                cy="46"
                rx="10"
                ry="14"
                transform="rotate(-25 25 46)"
              />

              {/* 왼쪽 안쪽 발가락 젤리 */}
              <ellipse
                cx="47"
                cy="29"
                rx="10"
                ry="14"
                transform="rotate(-8 47 29)"
              />

              {/* 오른쪽 안쪽 발가락 젤리 */}
              <ellipse
                cx="73"
                cy="29"
                rx="10"
                ry="14"
                transform="rotate(8 73 29)"
              />

              {/* 오른쪽 바깥 발가락 젤리 */}
              <ellipse
                cx="95"
                cy="46"
                rx="10"
                ry="14"
                transform="rotate(25 95 46)"
              />

              {/* 중앙 발바닥 젤리 */}
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
        </div>
      </header>

      <div className="main">
        <div className="info-container">
          <span>닉네임</span>
          <p>김오묘</p>
        </div>

        <div className="info-container">
          <span>이메일</span>
          <p>ohmyoh@domain.com</p>
        </div>

        <form className="form-style">
          <div className="input-container">
            <label>새 비밀번호</label>
            <div className="password-container">
              <input
                className="password-input"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="새 비밀번호를 입력해주세요."
              />

              <span
                className={`svg-container show-password ${showPassword ? `${showPassword}  active` : showPassword}`}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                  </svg>
                )}
              </span>
            </div>
            {password && !isValidPassword(password) && (
              <p className="guide-container">
                영문, 숫자, 대문자를 포함해주세요.
              </p>
            )}
          </div>
          <div className="input-container">
            <label>새 비밀번호 확인</label>
            <div className="password-container">
              <input
                className="password-input"
                type={showPasswordConfirm ? "text" : "password"}
                value={passwordConfirm}
                onChange={(event) => setPasswordConfirm(event.target.value)}
                placeholder="새 비밀번호를 다시 입력해주세요."
              />
              <span
                className={`svg-container showPasswordConfirm ${showPasswordConfirm ? `${showPasswordConfirm} active` : showPasswordConfirm}`}
                onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
              >
                {showPasswordConfirm ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                  </svg>
                )}
              </span>
            </div>
            {passwordConfirm && password !== passwordConfirm && (
              <p className="guide-container">
                새 비밀번호가 일치하지 않습니다.
              </p>
            )}
          </div>
          <div className="input-container">
            <label>휴대폰 번호</label>
            <div className="phone-container">
              <input
                type="tel"
                value={
                  phone.length > 7
                    ? `${phone.slice(0, 3)}-${phone.slice(3, 7)}-${phone.slice(7)}`
                    : phone.length > 3
                      ? `${phone.slice(0, 3)}-${phone.slice(3)}`
                      : phone
                }
                onChange={(event) => {
                  const value = event.target.value.replace(/\D/g, "");

                  setPhone(value.slice(0, 11));
                }}
                placeholder="010-0000-0000"
                maxLength={13}
              />

              <button type="button" onClick={handleVerifyPhone}>
                본인인증
              </button>
            </div>
          </div>
          <div className="input-container">
            <label>주소</label>

            <div className="zip-container">
              <input
                type="text"
                value={zoneCode}
                readOnly
                placeholder="우편번호"
              />
              <button type="button" onClick={handleSearchAddress}>
                우편번호 검색
              </button>
            </div>

            <input
              type="text"
              value={address}
              readOnly
              placeholder="주소를 입력해주세요."
            />
            <input
              type="text"
              value={detailAddress}
              onChange={(event) => setDetailAddress(event.target.value)}
              placeholder="상세 주소를 입력해주세요.   "
            />
          </div>

          <button type="submit" onClick={handleSubmit}>
            회원정보수정
          </button>
        </form>
      </div>
    </UpdateStyle>
  );
};

export default UpdateInfo;
