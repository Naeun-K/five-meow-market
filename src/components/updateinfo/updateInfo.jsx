import {
    Container,
    Header,
    Main,
    InfoRow,
    FormGroup,
    InputWrapper,
    PhoneRow,
    VerifyButton,
    AddressRow,
    AddressButton,
    SubmitButton
} from "./updateInfoStyle";

const UpdateInfo = () => {
    return (
        <Container>
            <Header>
                <h1>Update Info</h1>
                <p>집사가 변했어

                    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="120"
  height="120"
  viewBox="0 0 120 120"
  fill="currentColor"
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
                </p>
            </Header>

        <Main>
            <InfoRow>
                <span>닉네임</span>
                <p>김오묘</p>
            </InfoRow>

            <InfoRow>
                <span>이메일</span>
                <p>ohmyoh@domain.com</p>
            </InfoRow>

            <FormGroup>
                <label>새 비밀번호</label>
                <InputWrapper>
                    <input type="password"
                    placeholder="새 비밀번호를 입력해주세요."
                    />
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
</svg></button>
                </InputWrapper>
            </FormGroup>

            <FormGroup>
                <label>새 비밀번호 확인</label>
                <InputWrapper>
                    <input type="password"
                    placeholder="새 비밀번호를 다시 입력해주세요."
                    />
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
</svg></button>
                </InputWrapper>
            </FormGroup>

            <FormGroup>
                <label>휴대폰 번호</label>
                <PhoneRow>
                    <input 
                     type="tel"
                     placeholder="휴대폰 번호를 입력해주세요."
                    />
                    <VerifyButton>본인인증</VerifyButton>
                </PhoneRow>
            </FormGroup>

            <FormGroup>
                <label>주소</label>

                <AddressRow>
                    <input type="text" placeholder="우편번호"/>
                    <AddressButton>우편번호 검색</AddressButton>
                </AddressRow>

                    <input type="text" placeholder="주소를 입력해주세요."/>
                    <input type="text" placeholder="상세 주소를 입력해주세요.   "/>
            </FormGroup>

            <SubmitButton>회원정보수정</SubmitButton>
        </Main>
        </Container>
    );
};

export default UpdateInfo;