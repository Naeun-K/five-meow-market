import "./updateInfo.css";

export default function UpdateInfo() {
    return (
<div className="update-info">

{/* 제목 영역 */}
    <div className="update-header">
                <h1>Update Info</h1>
                <h3>집사가 변했어</h3>        
                </div>

<div className="update-main">

    <div className="update-user">
        <div className="update-name">
            <span>닉네임</span>
            <span>김오묘</span>
        </div>

{/* 이메일 영역 */}
    <div className="update-email">
        <span className="email">이메일</span>
        <span className="email-name">ohmyoh@domain.com</span>
      </div>
    </div>

{/* 비밀번호 영역 */}
    <div className="update-password">

        <div className="update-password-section">
            <label>현재 비밀번호</label>
            <div className="update-password-input">
                <input type="password" placeholder="현재 비밀번호를 입력해주세요."/>
                <span>👁️</span>
            </div>
        </div>

        <div className="update-password-section">
            <label>새 비밀번호</label>

            <div className="update-password-input">
                <input
                type="password" 
                placeholder="새 비밀번호를 입력해주세요."/>
                <span>👁️</span>
            </div>        
        </div>

        <div className="update-password-section">
            <label>비밀번호 확인</label>
            <div className="update-password-input">
                <input type="password" placeholder="비밀번호를 확인해주세요."/>
                <span>👁️</span>
            </div>
        </div>

    </div>

{/* 휴대폰 번호 영역 */}
    <div className="update-phone">
        <label>휴대폰 번호</label>

        <div className="update-phone-input">
            <input placeholder="휴대폰 번호를 입력해주세요"/>
            <button>본인인증</button>
        </div>
    </div>

{/* 주소 영역 */}

    <div className="update-address">
        <label>주소</label>
        <div className="update-address-search">
            <input placeholder="우편번호"/>
            <button>우편번호 검색</button>
        </div>

        <input
          className="update-address-input"
          placeholder="주소를 입력해주세요"
          />
          </div>

{/* 회원정보수정 버튼 */}

          <button className="update-button">회원정보수정</button>
    </div>

    </div>
    )
}
