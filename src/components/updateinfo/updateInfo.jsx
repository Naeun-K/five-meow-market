const UpdateInfo = () => {
    return (
        <Container>
            <Header>
                <h1>Update Info</h1>
                <p>집사가 변했어</p>
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
                    <Input type="password"
                    placeholder="새 비밀번호를 입력해주세요."
                    />
                    <button>👁️</button>
                </InputWrapper>
            </FormGroup>

            <FormGroup>
                <label>새 비밀번호 확인</label>
                <InputWrapper>
                    <Input type="password"
                    placeholder="새 비밀번호를 다시 입력해주세요."
                    />
                    <button>👁️</button>
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
                    <input type="text" placeholder="상세 주소를 입력해주세요/"/>
            </FormGroup>

            <SubmitButton>회원정보수정</SubmitButton>
        </Main>
        </Container>
    );
};