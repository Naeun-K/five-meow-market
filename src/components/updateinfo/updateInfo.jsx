// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import { verifyPassword, verifyPhone } from "../../services/authService";
// import { searchAddress } from "../../services/addressService";

// import { updateUser, deleteUser } from "../../services/userService";

// import useToast from "../../hooks/useToast";
// import useAuth from "../../hooks/useAuth";

// import { UpdateStyle } from "./updateInfoStyle";

// import PawIcon from "../common/PawIcon/PawIcon";
// import PasswordConfirmModal from "../passwordConfirmModal/PasswordConfirmModal";

// /*
//  * 새 비밀번호 유효성 검사
//  *
//  * 최소 8자 이상이며 영문 대문자, 소문자, 숫자를
//  * 각각 하나 이상 포함해야 합니다.
//  */
// function isValidPassword(password) {
//   return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
// }

// /*
//  * 휴대폰 번호 화면 표시 형식
//  */
// function formatPhoneNumber(value) {
//   const numbers = value.replace(/\D/g, "").slice(0, 11);

//   if (numbers.length <= 3) {
//     return numbers;
//   }

//   if (numbers.length <= 7) {
//     return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
//   }

//   return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
// }

// const UpdateInfo = () => {
//   const navigate = useNavigate();
//   const { showToast } = useToast();

//   const { user, accessToken, logout, clearAuth } = useAuth();

//   const nickname =
//     user?.nickname || user?.nickName || user?.username || user?.name || "회원";

//   const email = user?.email ?? "";

//   /*
//    * 비밀번호 입력 상태
//    */
//   const [password, setPassword] = useState("");

//   const [passwordConfirm, setPasswordConfirm] = useState("");

//   /*
//    * 비밀번호 표시 상태
//    *
//    * true이면 input type이 text로 변경되고,
//    * false이면 password로 변경됩니다.
//    */
//   const [showPassword, setShowPassword] = useState(false);

//   const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

//   /*
//    * 휴대폰 관련 상태
//    */
//   const [phone, setPhone] = useState("");

//   const [isPhoneVerified, setIsPhoneVerified] = useState(false);

//   /*
//    * 실제로 인증받은 휴대폰 번호입니다.
//    *
//    * 인증 후 번호를 다시 변경하면 인증 상태를
//    * 무효화하기 위해 별도로 저장합니다.
//    */
//   const [verifiedPhone, setVerifiedPhone] = useState("");

//   /*
//    * 주소 관련 상태
//    */
//   const [zipCode, setZipCode] = useState("");

//   const [address, setAddress] = useState("");

//   const [detailAddress, setDetailAddress] = useState("");

//   /*
//    * 회원탈퇴 비밀번호 확인 모달
//    */
//   const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

//   /*
//    * 중복 요청 방지 상태
//    */
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const [isDeleting, setIsDeleting] = useState(false);

//   /*
//    * 휴대폰 번호 입력
//    */
//   const handlePhoneChange = (event) => {
//     const formattedPhone = formatPhoneNumber(event.target.value);

//     setPhone(formattedPhone);

//     const rawPhone = formattedPhone.replace(/\D/g, "");

//     /*
//      * 인증받은 번호와 현재 입력한 번호가 달라지면
//      * 기존 인증 결과를 무효화합니다.
//      */
//     if (rawPhone !== verifiedPhone) {
//       setIsPhoneVerified(false);
//     }
//   };

//   /*
//    * 휴대폰 인증
//    */
//   const handleVerifyPhone = async () => {
//     const rawPhone = phone.replace(/\D/g, "");

//     if (!rawPhone) {
//       showToast("휴대폰번호를 입력해주세요.", false);

//       return;
//     }

//     /*
//      * 기존 프로젝트의 휴대폰 형식 검사를 유지합니다.
//      *
//      * 010만 허용하는 것이 아니라
//      * 010, 011, 016, 017, 018, 019를 허용합니다.
//      */
//     if (!/^01[016789]\d{8}$/.test(rawPhone)) {
//       showToast("올바른 휴대폰번호를 입력해주세요.", false);

//       return;
//     }

//     try {
//       const result = await verifyPhone(rawPhone);

//       if (!result.success) {
//         setIsPhoneVerified(false);
//         setVerifiedPhone("");

//         showToast(result.message || "휴대폰 인증에 실패했습니다.", false);

//         return;
//       }

//       setIsPhoneVerified(true);
//       setVerifiedPhone(rawPhone);

//       showToast(result.message || "휴대폰 인증이 완료되었습니다.", true);
//     } catch (error) {
//       console.error("휴대폰 인증 실패:", error);

//       setIsPhoneVerified(false);
//       setVerifiedPhone("");

//       showToast(
//         error.message || "휴대폰 인증 처리 중 오류가 발생했습니다.",
//         false,
//       );
//     }
//   };

//   /*
//    * 주소 검색
//    */
//   const handleSearchAddress = async () => {
//     try {
//       const result = await searchAddress();

//       /*
//        * 주소검색 서비스가 zoneCode 또는 zipCode 중
//        * 어느 이름을 반환해도 처리할 수 있도록 합니다.
//        */
//       const searchedZipCode = result.zipCode ?? result.zoneCode ?? "";

//       if (!searchedZipCode || !result.address) {
//         throw new Error("주소 검색 결과를 확인할 수 없습니다.");
//       }

//       setZipCode(searchedZipCode);
//       setAddress(result.address);

//       /*
//        * 새 주소를 선택하면 이전 상세 주소를 제거합니다.
//        */
//       setDetailAddress("");
//     } catch (error) {
//       console.error("주소 검색 실패:", error);

//       showToast(
//         error.message || "주소 검색에 실패했습니다. 다시 시도해주세요.",
//         false,
//       );
//     }
//   };

//   /*
//    * 회원정보 수정
//    */
//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();

//   //   if (isSubmitting) {
//   //     return;
//   //   }

//   //   if (!accessToken) {
//   //     showToast("로그인 정보가 없습니다. 다시 로그인해주세요.", false);

//   //     navigate("/login");

//   //     return;
//   //   }

//   //   /*
//   //    * 비밀번호를 입력한 경우에만 유효성을 검사합니다.
//   //    */
//   //   if (password && !isValidPassword(password)) {
//   //     showToast(
//   //       "비밀번호는 최소 8자이며 영문 대문자, 소문자, 숫자를 각각 하나 이상 포함해야 합니다.",
//   //       false,
//   //     );

//   //     return;
//   //   }

//   //   /*
//   //    * 비밀번호 확인만 입력된 경우
//   //    */
//   //   if (!password && passwordConfirm) {
//   //     showToast("새 비밀번호를 먼저 입력해주세요.", false);

//   //     return;
//   //   }

//   //   /*
//   //    * 새 비밀번호와 확인 값 비교
//   //    */
//   //   if (password && password !== passwordConfirm) {
//   //     showToast("새 비밀번호가 일치하지 않습니다.", false);

//   //     return;
//   //   }

//   //   const rawPhone = phone.replace(/\D/g, "");

//   //   /*
//   //    * 휴대폰 번호가 입력된 경우에만 형식을 확인합니다.
//   //    */
//   //   if (rawPhone && !/^01[016789]\d{8}$/.test(rawPhone)) {
//   //     showToast("올바른 휴대폰번호를 입력해주세요.", false);

//   //     return;
//   //   }

//   //   /*
//   //    * 휴대폰 번호를 변경하려면 현재 번호와
//   //    * 인증받은 번호가 일치해야 합니다.
//   //    */
//   //   if (rawPhone && (!isPhoneVerified || verifiedPhone !== rawPhone)) {
//   //     showToast("변경할 휴대폰 번호의 인증을 완료해주세요.", false);

//   //     return;
//   //   }

//   //   /*
//   //    * 주소 입력값 중 하나라도 있으면
//   //    * 주소 변경 요청으로 판단합니다.
//   //    */
//   //   const hasAddressInput = Boolean(zipCode || address || detailAddress.trim());

//   //   /*
//   //    * 주소 변경 시 우편번호와 기본 주소가 필요합니다.
//   //    * 상세 주소는 빈 문자열을 허용합니다.
//   //    */
//   //   if (hasAddressInput && (!zipCode || !address)) {
//   //     showToast("주소 변경 시 우편번호 검색을 먼저 진행해주세요.", false);

//   //     return;
//   //   }

//   //   /*
//   //    * 변경된 필드만 Request Body에 포함합니다.
//   //    */
//   //   const updateData = {};

//   //   if (password) {
//   //     updateData.newPassword = password;
//   //   }

//   //   if (rawPhone) {
//   //     updateData.phone = rawPhone;
//   //   }

//   //   if (hasAddressInput) {
//   //     updateData.zipCode = zipCode;
//   //     updateData.address = address;
//   //     updateData.detailAddress = detailAddress.trim();
//   //   }

//   //   if (Object.keys(updateData).length === 0) {
//   //     showToast("수정할 정보를 입력해주세요.", false);

//   //     return;
//   //   }

//   //   try {
//   //     setIsSubmitting(true);

//   //     /*
//   //      * 회원정보 수정 API에는 Access Token을
//   //      * 두 번째 인자로 전달합니다.
//   //      */
//   //     const result = await updateUser(updateData, accessToken);

//   //     if (!result.success) {
//   //       throw new Error(result.message || "회원정보 수정에 실패했습니다.");
//   //     }

//   //     showToast(result.message || "회원정보가 수정되었습니다.", true);

//   //     /*
//   //      * 수정 성공 후 입력값을 초기화합니다.
//   //      */
//   //     setPassword("");
//   //     setPasswordConfirm("");

//   //     setShowPassword(false);
//   //     setShowPasswordConfirm(false);

//   //     setPhone("");
//   //     setIsPhoneVerified(false);
//   //     setVerifiedPhone("");

//   //     setZipCode("");
//   //     setAddress("");
//   //     setDetailAddress("");

//   //     navigate("/mypage", {
//   //       replace: true,
//   //     });
//   //   } catch (error) {
//   //     console.error("회원정보 수정 실패:", error);

//   //     showToast(error.message || "회원정보 수정에 실패했습니다.", false);
//   //   } finally {
//   //     setIsSubmitting(false);
//   //   }
//   // };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (isSubmitting) {
//       return;
//     }

//     if (!accessToken) {
//       showToast("로그인 정보가 없습니다. 다시 로그인해주세요.", false);

//       navigate("/login");
//       return;
//     }

//     /*
//      * 비밀번호를 입력한 경우에만 검사합니다.
//      *
//      * 비밀번호를 입력하지 않았다면 휴대폰이나 주소만
//      * 수정할 수 있습니다.
//      */
//     if (password && !isValidPassword(password)) {
//       showToast(
//         "비밀번호는 최소 8자이며 영문 대문자, 소문자, 숫자를 각각 하나 이상 포함해야 합니다.",
//         false,
//       );

//       return;
//     }

//     /*
//      * 비밀번호 확인만 입력한 경우
//      */
//     if (!password && passwordConfirm) {
//       showToast("새 비밀번호를 먼저 입력해주세요.", false);

//       return;
//     }

//     /*
//      * 비밀번호를 변경할 때만 일치 여부를 검사합니다.
//      */
//     if (password && password !== passwordConfirm) {
//       showToast("새 비밀번호가 일치하지 않습니다.", false);

//       return;
//     }

//     const rawPhone = phone.replace(/\D/g, "");

//     /*
//      * 휴대폰 번호를 입력한 경우에만 검사합니다.
//      *
//      * 휴대폰 번호를 입력하지 않았다면 비밀번호나 주소만
//      * 수정할 수 있습니다.
//      */
//     if (rawPhone && !/^01[016789]\d{8}$/.test(rawPhone)) {
//       showToast("올바른 휴대폰번호를 입력해주세요.", false);

//       return;
//     }

//     /*
//      * 휴대폰 번호를 변경할 때만 인증 여부를 검사합니다.
//      */
//     if (rawPhone && (!isPhoneVerified || verifiedPhone !== rawPhone)) {
//       showToast("변경할 휴대폰 번호의 인증을 완료해주세요.", false);

//       return;
//     }

//     /*
//      * 주소 검색으로 우편번호 또는 기본 주소가 입력된 경우에만
//      * 주소 변경으로 판단합니다.
//      *
//      * detailAddress만 입력했다고 주소 변경으로 판단하지 않습니다.
//      */
//     const isAddressChanged = Boolean(zipCode || address);

//     /*
//      * 주소를 변경할 때는 우편번호와 기본 주소가
//      * 모두 있어야 합니다.
//      */
//     if (isAddressChanged && (!zipCode || !address)) {
//       showToast("주소 변경 시 우편번호 검색을 먼저 진행해주세요.", false);

//       return;
//     }

//     /*
//      * PATCH 요청에는 실제로 변경할 필드만 넣습니다.
//      */
//     const updateData = {};

//     /*
//      * 비밀번호만 수정 가능
//      */
//     if (password) {
//       updateData.newPassword = password;
//     }

//     /*
//      * 휴대폰 번호만 수정 가능
//      */
//     if (rawPhone) {
//       updateData.phone = rawPhone;
//     }

//     /*
//      * 주소만 수정 가능
//      *
//      * 주소는 세 필드를 하나의 묶음으로 전달합니다.
//      * detailAddress는 빈 문자열을 허용합니다.
//      */
//     if (isAddressChanged) {
//       updateData.zipcode = zipCode;
//       updateData.address = address;
//       updateData.detailAddress = detailAddress.trim();
//     }

//     /*
//      * 변경할 값이 없는 경우에만 요청을 막습니다.
//      */
//     if (Object.keys(updateData).length === 0) {
//       showToast("수정할 정보를 입력해주세요.", false);

//       return;
//     }

//     try {
//       setIsSubmitting(true);

//       /*
//        * 변경된 필드와 Access Token을 전달합니다.
//        */
//       const result = await updateUser(updateData, accessToken);

//       if (!result.success) {
//         throw new Error(result.message || "회원정보 수정에 실패했습니다.");
//       }

//       showToast(result.message || "회원정보가 수정되었습니다.", true);

//       setPassword("");
//       setPasswordConfirm("");
//       setShowPassword(false);
//       setShowPasswordConfirm(false);

//       setPhone("");
//       setIsPhoneVerified(false);
//       setVerifiedPhone("");

//       setZipCode("");
//       setAddress("");
//       setDetailAddress("");

//       navigate("/mypage", {
//         replace: true,
//       });
//     } catch (error) {
//       console.error("회원정보 수정 실패:", error);

//       showToast(error.message || "회원정보 수정에 실패했습니다.", false);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   /*
//    * 회원탈퇴
//    *
//    * PasswordConfirmModal에서 비밀번호 확인이
//    * 성공한 후 실행됩니다.
//    */
//   const handleDeleteAccount = async (currentPassword) => {
//     if (isDeleting) {
//       return;
//     }

//     if (!accessToken) {
//       showToast("로그인 정보가 없습니다. 다시 로그인해주세요.", false);

//       navigate("/login");
//       return;
//     }

//     if (!currentPassword?.trim()) {
//       showToast("현재 비밀번호를 입력해주세요.", false);

//       return;
//     }

//     try {
//       setIsDeleting(true);

//       /*
//        * 1. 현재 비밀번호 확인
//        */
//       const verifyResult = await verifyPassword(currentPassword, accessToken);

//       /*
//        * authService가 실제 서버의 data.verified를
//        * verifyResult.verified로 반환합니다.
//        */
//       if (!verifyResult.success || !verifyResult.verified) {
//         showToast(
//           verifyResult.message || "비밀번호가 일치하지 않습니다.",
//           false,
//         );

//         return;
//       }

//       /*
//        * 2. 비밀번호 확인 성공 후 회원탈퇴
//        */
//       const deleteResult = await deleteUser(accessToken);

//       if (!deleteResult.success) {
//         throw new Error(deleteResult.message || "회원탈퇴에 실패했습니다.");
//       }

//       setIsPasswordModalOpen(false);

//       /*
//        * 3. 클라이언트 인증 정보 초기화
//        */
//       if (typeof clearAuth === "function") {
//         clearAuth();
//       } else if (typeof logout === "function") {
//         await logout();
//       }

//       showToast(deleteResult.message || "회원탈퇴가 완료되었습니다.", true);

//       navigate("/", {
//         replace: true,
//       });
//     } catch (error) {
//       console.error("회원탈퇴 실패:", error);

//       showToast(error.message || "회원탈퇴에 실패했습니다.", false);
//     } finally {
//       setIsDeleting(false);
//     }
//   };
//   /*
//    * Enter 또는 Space 키로도 눈 아이콘을
//    * 조작할 수 있도록 처리합니다.
//    */
//   const handlePasswordKeyDown = (event, setter) => {
//     if (event.key === "Enter" || event.key === " ") {
//       event.preventDefault();

//       setter((previous) => !previous);
//     }
//   };

//   return (
//     <UpdateStyle>
//       <nav className="top-nav">
//         <span>회원정보를 삭제하시겠습니까?</span>

//         <button
//           type="button"
//           onClick={() => setIsPasswordModalOpen(true)}
//           disabled={isDeleting || isSubmitting}
//         >
//           {isDeleting ? "탈퇴 처리 중..." : "회원탈퇴"}
//         </button>
//       </nav>

//       <header className="header">
//         <h1>Update Info</h1>

//         <div className="header-wrapper">
//           <p>집사가 변했어</p>

//           <span className="svg-container">
//             <PawIcon />
//           </span>
//         </div>
//       </header>

//       <div className="main">
//         <div className="info-container">
//           <span>닉네임</span>
//           <p>{nickname}</p>
//         </div>

//         <div className="info-container">
//           <span>이메일</span>
//           <p>{email}</p>
//         </div>

//         <form className="form-style" onSubmit={handleSubmit}>
//           {/* 새 비밀번호 */}
//           <div className="input-container mobile-input-container">
//             <div className="label-guide-container">
//               <label htmlFor="new-password">새 비밀번호</label>

//               <p
//                 className={`password-guide ${
//                   !password
//                     ? "guide-hidden"
//                     : isValidPassword(password)
//                       ? "password-check"
//                       : "password-error"
//                 }`}
//               >
//                 {isValidPassword(password)
//                   ? "사용 가능한 비밀번호입니다."
//                   : "최소 8자, 영문 대문자·소문자·숫자를 각각 포함해주세요."}
//               </p>
//             </div>

//             <div className="password-container">
//               <input
//                 id="new-password"
//                 className="password-input"
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//                 placeholder="새 비밀번호를 입력해주세요."
//                 autoComplete="new-password"
//                 disabled={isSubmitting}
//               />

//               {/*
//                * 기존 span, 클래스명, SVG를 그대로 유지합니다.
//                *
//                * 클릭하면 showPassword 상태가 변경되면서
//                * input의 type이 password와 text 사이에서
//                * 전환됩니다.
//                */}
//               <span
//                 className={`svg-container show-password ${
//                   showPassword ? "active" : ""
//                 }`}
//                 onClick={() => setShowPassword((previous) => !previous)}
//                 onKeyDown={(event) =>
//                   handlePasswordKeyDown(event, setShowPassword)
//                 }
//                 role="button"
//                 tabIndex={0}
//                 aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 표시"}
//               >
//                 {showPassword ? (
//                   /*
//                    * 비밀번호가 보이는 상태의 눈 SVG
//                    */
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="100%"
//                     height="100%"
//                     fill="currentColor"
//                     viewBox="0 0 16 16"
//                     aria-hidden="true"
//                   >
//                     <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />

//                     <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
//                   </svg>
//                 ) : (
//                   /*
//                    * 비밀번호가 숨겨진 상태의 눈 가림 SVG
//                    */
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="100%"
//                     height="100%"
//                     fill="currentColor"
//                     viewBox="0 0 16 16"
//                     aria-hidden="true"
//                   >
//                     <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />

//                     <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />

//                     <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
//                   </svg>
//                 )}
//               </span>
//             </div>
//           </div>

//           {/* 새 비밀번호 확인 */}
//           <div className="input-container mobile-input-container">
//             <div className="label-guide-container">
//               <label htmlFor="new-password-confirm">새 비밀번호 확인</label>

//               <p
//                 className={`password-guide ${
//                   !passwordConfirm
//                     ? "guide-hidden"
//                     : password === passwordConfirm
//                       ? "password-check"
//                       : "password-error"
//                 }`}
//               >
//                 {passwordConfirm
//                   ? password === passwordConfirm
//                     ? "비밀번호가 일치합니다."
//                     : "비밀번호가 일치하지 않습니다."
//                   : ""}
//               </p>
//             </div>

//             <div className="password-container">
//               <input
//                 id="new-password-confirm"
//                 className="password-input"
//                 type={showPasswordConfirm ? "text" : "password"}
//                 value={passwordConfirm}
//                 onChange={(event) => setPasswordConfirm(event.target.value)}
//                 placeholder="새 비밀번호를 다시 입력해주세요."
//                 autoComplete="new-password"
//                 disabled={isSubmitting}
//               />

//               {/*
//                * 비밀번호 확인 입력창도 기존 구조와
//                * SVG를 그대로 유지합니다.
//                */}
//               <span
//                 className={`svg-container showPasswordConfirm ${
//                   showPasswordConfirm ? "active" : ""
//                 }`}
//                 onClick={() => setShowPasswordConfirm((previous) => !previous)}
//                 onKeyDown={(event) =>
//                   handlePasswordKeyDown(event, setShowPasswordConfirm)
//                 }
//                 role="button"
//                 tabIndex={0}
//                 aria-label={
//                   showPasswordConfirm
//                     ? "비밀번호 확인 숨기기"
//                     : "비밀번호 확인 표시"
//                 }
//               >
//                 {showPasswordConfirm ? (
//                   /*
//                    * 비밀번호 확인값이 보이는 상태
//                    */
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="100%"
//                     height="100%"
//                     fill="currentColor"
//                     viewBox="0 0 16 16"
//                     aria-hidden="true"
//                   >
//                     <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />

//                     <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
//                   </svg>
//                 ) : (
//                   /*
//                    * 비밀번호 확인값이 숨겨진 상태
//                    */
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="100%"
//                     height="100%"
//                     fill="currentColor"
//                     viewBox="0 0 16 16"
//                     aria-hidden="true"
//                   >
//                     <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />

//                     <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />

//                     <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
//                   </svg>
//                 )}
//               </span>
//             </div>
//           </div>

//           {/* 휴대폰 번호 */}
//           <div className="input-container">
//             <label htmlFor="phone">휴대폰 번호</label>

//             <div className="phone-container">
//               <input
//                 id="phone"
//                 type="tel"
//                 placeholder="휴대폰을 입력해주세요"
//                 value={phone}
//                 maxLength={13}
//                 onChange={handlePhoneChange}
//                 autoComplete="tel"
//                 disabled={isSubmitting}
//               />

//               <button
//                 type="button"
//                 onClick={handleVerifyPhone}
//                 disabled={isSubmitting || !phone}
//               >
//                 {isPhoneVerified ? "인증완료" : "본인인증"}
//               </button>
//             </div>
//           </div>

//           {/* 주소 */}
//           <div className="input-container">
//             <label htmlFor="zip-code">주소</label>

//             <div className="zip-container">
//               <input
//                 id="zip-code"
//                 type="text"
//                 value={zipCode}
//                 readOnly
//                 placeholder="우편번호"
//               />

//               <button
//                 type="button"
//                 onClick={handleSearchAddress}
//                 disabled={isSubmitting}
//               >
//                 우편번호 검색
//               </button>
//             </div>

//             <input type="text" value={address} readOnly placeholder="주소" />

//             <input
//               type="text"
//               value={detailAddress}
//               onChange={(event) => setDetailAddress(event.target.value)}
//               placeholder="상세 주소를 입력해주세요."
//               disabled={isSubmitting || !zipCode || !address}
//             />
//           </div>

//           <button type="submit" disabled={isSubmitting || isDeleting}>
//             {isSubmitting ? "수정 중..." : "회원정보수정"}
//           </button>
//         </form>
//       </div>

//       <PasswordConfirmModal
//         isOpen={isPasswordModalOpen}
//         onClose={() => {
//           if (!isDeleting) {
//             setIsPasswordModalOpen(false);
//           }
//         }}
//         onSuccess={handleDeleteAccount}
//         purpose="회원탈퇴를 진행"
//       />
//     </UpdateStyle>
//   );
// };

// export default UpdateInfo;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { verifyPhone } from "../../services/authService";
import { searchAddress } from "../../services/addressService";

import { updateUser, deleteUser } from "../../services/userService";

import useToast from "../../hooks/useToast";
import useAuth from "../../hooks/useAuth";

import { UpdateStyle } from "./updateInfoStyle";

import PawIcon from "../common/PawIcon/PawIcon";
import PasswordConfirmModal from "../passwordConfirmModal/PasswordConfirmModal";

/*
 * 새 비밀번호 유효성 검사
 */
function isValidPassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/.test(
    password,
  );
}

/*
 * 휴대폰 번호 화면 표시 형식
 */
function formatPhoneNumber(value) {
  const numbers = value.replace(/\D/g, "").slice(0, 11);

  if (numbers.length <= 3) {
    return numbers;
  }

  if (numbers.length <= 7) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
  }

  return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
}

const UpdateInfo = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const { user, accessToken, logout, clearAuth } = useAuth();

  const nickname =
    user?.nickname || user?.nickName || user?.username || user?.name || "회원";

  const email = user?.email ?? "";

  /*
   * 비밀번호 입력 상태
   */
  const [password, setPassword] = useState("");

  const [passwordConfirm, setPasswordConfirm] = useState("");

  /*
   * 비밀번호 표시 상태
   */
  const [showPassword, setShowPassword] = useState(false);

  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  /*
   * 휴대폰 관련 상태
   */
  const [phone, setPhone] = useState("");

  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  /*
   * 실제 인증받은 휴대폰 번호
   */
  const [verifiedPhone, setVerifiedPhone] = useState("");

  /*
   * 주소 관련 상태
   */
  const [zipCode, setZipCode] = useState("");

  const [address, setAddress] = useState("");

  const [detailAddress, setDetailAddress] = useState("");

  /*
   * 회원탈퇴 비밀번호 확인 모달
   */
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  /*
   * API 요청 상태
   */
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isDeleting, setIsDeleting] = useState(false);

  /*
   * 휴대폰 번호 입력
   */
  const handlePhoneChange = (event) => {
    const formattedPhone = formatPhoneNumber(event.target.value);

    setPhone(formattedPhone);

    const rawPhone = formattedPhone.replace(/\D/g, "");

    /*
     * 인증 후 번호가 변경되면 인증 상태를 초기화합니다.
     */
    if (rawPhone !== verifiedPhone) {
      setIsPhoneVerified(false);
    }
  };

  /*
   * 휴대폰 인증
   */
  const handleVerifyPhone = async () => {
    const rawPhone = phone.replace(/\D/g, "");

    if (!rawPhone) {
      showToast("휴대폰번호를 입력해주세요.", false);

      return;
    }

    /*
     * 기존 프로젝트의 휴대폰 번호 규칙을 유지합니다.
     */
    if (!/^01[016789]\d{8}$/.test(rawPhone)) {
      showToast("올바른 휴대폰번호를 입력해주세요.", false);

      return;
    }

    try {
      const result = await verifyPhone(rawPhone);

      if (!result.success || !result.verified) {
        setIsPhoneVerified(false);
        setVerifiedPhone("");

        showToast(result.message || "휴대폰 인증에 실패했습니다.", false);

        return;
      }

      setIsPhoneVerified(true);
      setVerifiedPhone(rawPhone);

      showToast(result.message || "휴대폰 인증이 완료되었습니다.", true);
    } catch (error) {
      console.error("휴대폰 인증 실패:", error);

      setIsPhoneVerified(false);
      setVerifiedPhone("");

      showToast(
        error.message || "휴대폰 인증 처리 중 오류가 발생했습니다.",
        false,
      );
    }
  };

  /*
   * 주소 검색
   */
  const handleSearchAddress = async () => {
    try {
      const result = await searchAddress();

      const searchedZipCode = result.zipCode ?? result.zoneCode ?? "";

      if (!searchedZipCode || !result.address) {
        throw new Error("주소 검색 결과를 확인할 수 없습니다.");
      }

      setZipCode(searchedZipCode);
      setAddress(result.address);

      /*
       * 새 주소를 검색하면 이전 상세 주소를 초기화합니다.
       */
      setDetailAddress("");
    } catch (error) {
      console.error("주소 검색 실패:", error);

      showToast(
        error.message || "주소 검색에 실패했습니다. 다시 시도해주세요.",
        false,
      );
    }
  };

  /*
   * 회원정보 수정
   *
   * 비밀번호, 휴대폰, 주소 중 입력한 항목만 전송합니다.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    if (!accessToken) {
      showToast("로그인 정보가 없습니다. 다시 로그인해주세요.", false);

      navigate("/login");
      return;
    }

    /*
     * 비밀번호를 변경하는 경우에만 검사합니다.
     */
    if (password && !isValidPassword(password)) {
      showToast(
        "비밀번호는 최소 8자이며 영문 대문자, 소문자, 숫자를 각각 하나 이상 포함해야 합니다.",
        false,
      );

      return;
    }

    /*
     * 확인 비밀번호만 입력한 경우
     */
    if (!password && passwordConfirm) {
      showToast("새 비밀번호를 먼저 입력해주세요.", false);

      return;
    }

    /*
     * 비밀번호를 변경할 때만 일치 여부를 확인합니다.
     */
    if (password && password !== passwordConfirm) {
      showToast("새 비밀번호가 일치하지 않습니다.", false);

      return;
    }

    const rawPhone = phone.replace(/\D/g, "");

    /*
     * 휴대폰 번호를 변경하는 경우에만 형식을 검사합니다.
     */
    if (rawPhone && !/^01[016789]\d{8}$/.test(rawPhone)) {
      showToast("올바른 휴대폰번호를 입력해주세요.", false);

      return;
    }

    /*
     * 휴대폰 번호를 변경하는 경우 인증이 필요합니다.
     */
    if (rawPhone && (!isPhoneVerified || verifiedPhone !== rawPhone)) {
      showToast("변경할 휴대폰 번호의 인증을 완료해주세요.", false);

      return;
    }

    /*
     * 우편번호 또는 기본 주소가 있으면 주소 변경으로 판단합니다.
     */
    const isAddressChanged = Boolean(zipCode || address);

    /*
     * 주소 변경 시 우편번호와 기본 주소가 모두 필요합니다.
     */
    if (isAddressChanged && (!zipCode || !address)) {
      showToast("주소 변경 시 우편번호 검색을 먼저 진행해주세요.", false);

      return;
    }

    /*
     * 변경된 필드만 Request Body에 포함합니다.
     */
    const updateData = {};

    /*
     * 비밀번호만 수정 가능
     */
    if (password) {
      updateData.newPassword = password;
    }

    /*
     * 휴대폰 번호만 수정 가능
     */
    if (rawPhone) {
      updateData.phone = rawPhone;
    }

    /*
     * 주소만 수정 가능
     *
     * 주소는 세 필드를 함께 전달합니다.
     */
    if (isAddressChanged) {
      updateData.zipcode = zipCode;
      updateData.address = address;
      updateData.detailAddress = detailAddress.trim();
    }

    /*
     * 변경할 값이 없는 경우 API를 호출하지 않습니다.
     */
    if (Object.keys(updateData).length === 0) {
      showToast("수정할 정보를 입력해주세요.", false);

      return;
    }

    try {
      setIsSubmitting(true);

      const result = await updateUser(updateData, accessToken);

      if (!result.success) {
        throw new Error(result.message || "회원정보 수정에 실패했습니다.");
      }

      showToast(result.message || "회원정보가 수정되었습니다.", true);

      /*
       * 입력값 초기화
       */
      setPassword("");
      setPasswordConfirm("");

      setShowPassword(false);
      setShowPasswordConfirm(false);

      setPhone("");
      setIsPhoneVerified(false);
      setVerifiedPhone("");

      setZipCode("");
      setAddress("");
      setDetailAddress("");

      navigate("/mypage", {
        replace: true,
      });
    } catch (error) {
      console.error("회원정보 수정 실패:", error);

      showToast(error.message || "회원정보 수정에 실패했습니다.", false);
    } finally {
      setIsSubmitting(false);
    }
  };

  /*
   * 회원탈퇴
   *
   * PasswordConfirmModal에서 비밀번호 확인이
   * 성공한 경우에만 이 함수가 실행됩니다.
   *
   * 이 함수에서는 비밀번호를 다시 검증하지 않고
   * 실제 회원탈퇴 API만 요청합니다.
   */
  const handleDeleteAccount = async () => {
    if (isDeleting) {
      return;
    }

    if (!accessToken) {
      showToast("로그인 정보가 없습니다. 다시 로그인해주세요.", false);

      navigate("/login");
      return;
    }

    try {
      setIsDeleting(true);

      /*
       * 비밀번호 검증은 PasswordConfirmModal에서
       * 이미 완료했으므로 탈퇴 요청만 실행합니다.
       */
      const result = await deleteUser(accessToken);

      if (!result.success) {
        throw new Error(result.message || "회원탈퇴에 실패했습니다.");
      }

      setIsPasswordModalOpen(false);

      /*
       * 탈퇴 성공 후 Access Token과 회원정보를 초기화합니다.
       */
      if (typeof clearAuth === "function") {
        clearAuth();
      } else if (typeof logout === "function") {
        await logout();
      }

      showToast(result.message || "회원탈퇴가 완료되었습니다.", true);

      navigate("/", {
        replace: true,
      });
    } catch (error) {
      console.error("회원탈퇴 실패:", error);

      showToast(error.message || "회원탈퇴에 실패했습니다.", false);
    } finally {
      setIsDeleting(false);
    }
  };

  /*
   * 비밀번호 눈 아이콘 키보드 처리
   */
  const handlePasswordKeyDown = (event, setter) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();

      setter((previous) => !previous);
    }
  };

  return (
    <UpdateStyle>
      <nav className="top-nav">
        <span>회원정보를 삭제하시겠습니까?</span>

        <button
          type="button"
          onClick={() => setIsPasswordModalOpen(true)}
          disabled={isDeleting || isSubmitting}
        >
          {isDeleting ? "탈퇴 처리 중..." : "회원탈퇴"}
        </button>
      </nav>

      <header className="header">
        <h1>Update Info</h1>

        <div className="header-wrapper">
          <p>집사가 변했어</p>

          <span className="svg-container">
            <PawIcon />
          </span>
        </div>
      </header>

      <div className="main">
        <div className="info-container">
          <span>닉네임</span>
          <p>{nickname}</p>
        </div>

        <div className="info-container">
          <span>이메일</span>
          <p>{email}</p>
        </div>

        <form className="form-style" onSubmit={handleSubmit}>
          {/* 새 비밀번호 */}
          <div className="input-container mobile-input-container">
            <div className="label-guide-container">
              <label htmlFor="new-password">새 비밀번호</label>

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
                  : "비밀번호는 8자이상 16자 이하로 영문, 숫자, 대문자, @ $ ! % * # ? & 를 포함해야 합니다."}
              </p>
            </div>

            <div className="password-container">
              <input
                id="new-password"
                className="password-input"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="새 비밀번호를 입력해주세요."
                autoComplete="new-password"
                disabled={isSubmitting}
              />

              {/*
               * 기존 span, 클래스명, SVG를 유지합니다.
               */}
              <span
                className={`svg-container show-password ${
                  showPassword ? "active" : ""
                }`}
                onClick={() => setShowPassword((previous) => !previous)}
                onKeyDown={(event) =>
                  handlePasswordKeyDown(event, setShowPassword)
                }
                role="button"
                tabIndex={0}
                aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 표시"}
              >
                {showPassword ? (
                  /*
                   * 비밀번호 표시 상태
                   */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />

                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                ) : (
                  /*
                   * 비밀번호 숨김 상태
                   */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />

                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />

                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                  </svg>
                )}
              </span>
            </div>
          </div>

          {/* 새 비밀번호 확인 */}
          <div className="input-container mobile-input-container">
            <div className="label-guide-container">
              <label htmlFor="new-password-confirm">새 비밀번호 확인</label>

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
                  ? password === passwordConfirm
                    ? "비밀번호가 일치합니다."
                    : "비밀번호가 일치하지 않습니다."
                  : ""}
              </p>
            </div>

            <div className="password-container">
              <input
                id="new-password-confirm"
                className="password-input"
                type={showPasswordConfirm ? "text" : "password"}
                value={passwordConfirm}
                onChange={(event) => setPasswordConfirm(event.target.value)}
                placeholder="새 비밀번호를 다시 입력해주세요."
                autoComplete="new-password"
                disabled={isSubmitting}
              />

              {/*
               * 기존 확인 비밀번호 눈 SVG를 유지합니다.
               */}
              <span
                className={`svg-container showPasswordConfirm ${
                  showPasswordConfirm ? "active" : ""
                }`}
                onClick={() => setShowPasswordConfirm((previous) => !previous)}
                onKeyDown={(event) =>
                  handlePasswordKeyDown(event, setShowPasswordConfirm)
                }
                role="button"
                tabIndex={0}
                aria-label={
                  showPasswordConfirm
                    ? "비밀번호 확인 숨기기"
                    : "비밀번호 확인 표시"
                }
              >
                {showPasswordConfirm ? (
                  /*
                   * 확인 비밀번호 표시 상태
                   */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />

                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                ) : (
                  /*
                   * 확인 비밀번호 숨김 상태
                   */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />

                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />

                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                  </svg>
                )}
              </span>
            </div>
          </div>

          {/* 휴대폰 번호 */}
          <div className="input-container">
            <label htmlFor="phone">휴대폰 번호</label>

            <div className="phone-container">
              <input
                id="phone"
                type="tel"
                placeholder="휴대폰을 입력해주세요"
                value={phone}
                maxLength={13}
                onChange={handlePhoneChange}
                autoComplete="tel"
                disabled={isSubmitting}
              />

              <button
                type="button"
                onClick={handleVerifyPhone}
                disabled={isSubmitting || !phone}
              >
                {isPhoneVerified ? "인증완료" : "본인인증"}
              </button>
            </div>
          </div>

          {/* 주소 */}
          <div className="input-container">
            <label htmlFor="zip-code">주소</label>

            <div className="zip-container">
              <input
                id="zip-code"
                type="text"
                value={zipCode}
                readOnly
                placeholder="우편번호"
              />

              <button
                type="button"
                onClick={handleSearchAddress}
                disabled={isSubmitting}
              >
                우편번호 검색
              </button>
            </div>

            <input type="text" value={address} readOnly placeholder="주소" />

            <input
              type="text"
              value={detailAddress}
              onChange={(event) => setDetailAddress(event.target.value)}
              placeholder="상세 주소를 입력해주세요."
              disabled={isSubmitting || !zipCode || !address}
            />
          </div>

          <button type="submit" disabled={isSubmitting || isDeleting}>
            {isSubmitting ? "수정 중..." : "회원정보수정"}
          </button>
        </form>
      </div>

      {/*
       * 이 모달에서 verifyPassword를 처리하고,
       * 검증 성공 시 handleDeleteAccount를 실행해야 합니다.
       */}
      <PasswordConfirmModal
        isOpen={isPasswordModalOpen}
        onClose={() => {
          if (!isDeleting) {
            setIsPasswordModalOpen(false);
          }
        }}
        onSuccess={handleDeleteAccount}
        purpose="회원탈퇴를 진행"
      />
    </UpdateStyle>
  );
};

export default UpdateInfo;
