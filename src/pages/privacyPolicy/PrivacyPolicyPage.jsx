import BasicPage from "../basicPage/BasicPage";
import * as S from "./PrivacyPolicyPageStyle";

const sections = [
  {
    number: "01",
    title: "개인정보의 수집 항목 및 이용 목적",
    content: (
      <>
        <p>
          오묘한 생활은 회원가입, 상품 주문, 고객 문의를 위해 필요한 최소한의
          개인정보만 수집합니다.
        </p>
        <S.PolicyTable>
          <thead>
            <tr>
              <th>구분</th>
              <th>수집 항목</th>
              <th>이용 목적</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>회원가입</td>
              <td>이메일, 이름, 비밀번호</td>
              <td>회원 식별 및 서비스 제공</td>
            </tr>
            <tr>
              <td>주문 및 배송</td>
              <td>수령인 이름, 배송지, 연락처</td>
              <td>상품 배송 및 주문 안내</td>
            </tr>
            <tr>
              <td>고객 문의</td>
              <td>이름, 이메일, 문의 내용</td>
              <td>문의 확인 및 답변</td>
            </tr>
          </tbody>
        </S.PolicyTable>
      </>
    ),
  },
  {
    number: "02",
    title: "개인정보의 보유 및 이용 기간",
    content: (
      <p>
        개인정보는 수집 및 이용 목적이 달성되면 지체 없이 파기합니다. 다만, 관계
        법령에 따라 보존할 필요가 있는 경우에는 해당 기간 동안 안전하게
        보관합니다. 전자상거래 계약 및 청약철회 기록은 5년, 대금결제 기록은 5년,
        소비자 불만 또는 분쟁 처리 기록은 3년간 보관합니다.
      </p>
    ),
  },
  {
    number: "03",
    title: "개인정보의 제3자 제공",
    content: (
      <p>
        오묘한 생활은 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
        배송, 결제 등 서비스 제공에 꼭 필요한 경우에는 제공받는 자와 제공 목적,
        항목 및 보유 기간을 안내하고 동의를 받은 뒤 제공합니다. 법령에 근거가
        있는 경우에도 필요한 범위 안에서만 제공합니다.
      </p>
    ),
  },
  {
    number: "04",
    title: "개인정보 처리의 위탁",
    content: (
      <p>
        원활한 서비스 운영을 위해 배송 및 결제 업무를 전문 업체에 맡길 수
        있습니다. 위탁 계약 시 개인정보가 안전하게 관리되도록 관련 법령에 따른
        보호 의무와 책임을 명확히 하고, 위탁 업체의 변경 사항은 이 방침을 통해
        안내합니다.
      </p>
    ),
  },
  {
    number: "05",
    title: "이용자의 권리와 행사 방법",
    content: (
      <p>
        이용자는 언제든지 자신의 개인정보를 조회하거나 수정할 수 있으며,
        회원탈퇴를 통해 개인정보의 삭제를 요청할 수 있습니다. 개인정보 관련
        요청은 아래 문의처로 접수해 주세요. 오묘한 생활은 요청을 확인한 뒤 지체
        없이 필요한 조치를 진행합니다.
      </p>
    ),
  },
  {
    number: "06",
    title: "개인정보 보호책임자 및 문의처",
    content: (
      <S.ContactBox>
        <strong>개인정보 보호책임자</strong>
        <span>대표 관리자</span>
        <span>이메일: privacy@omyo-life.example</span>
        <span>문의 가능 시간: 평일 10:00 - 17:00</span>
      </S.ContactBox>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <BasicPage>
      <S.PolicyMain>
        <S.PolicyHeader>
          <S.Eyebrow>LEGAL &amp; PRIVACY</S.Eyebrow>
          <S.PolicyTitle>개인정보처리방침</S.PolicyTitle>
          <S.PolicyIntro>
            오묘한 생활은 이용자의 개인정보를 소중하게 보호하며, 관련 법령과
            원칙에 따라 안전하게 관리합니다.
          </S.PolicyIntro>
          <S.EffectiveDate>시행일: 2026년 9월 12일</S.EffectiveDate>
        </S.PolicyHeader>

        <S.PolicyBody>
          {sections.map((section) => (
            <S.PolicySection key={section.number}>
              <S.SectionHeading>
                <S.SectionNumber>{section.number}</S.SectionNumber>
                <h2>{section.title}</h2>
              </S.SectionHeading>
              <S.SectionContent>{section.content}</S.SectionContent>
            </S.PolicySection>
          ))}
        </S.PolicyBody>
      </S.PolicyMain>
    </BasicPage>
  );
}
