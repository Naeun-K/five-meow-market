import BasicPage from "../basicPage/BasicPage";
import * as S from "../privacyPolicy/PrivacyPolicyPageStyle";

const sections = [
  {
    number: "01",
    title: "목적",
    content: (
      <p>
        이 약관은 오묘한 생활(이하 “회사”)이 운영하는 온라인 쇼핑몰에서 제공하는
        상품 및 관련 서비스의 이용 조건과 절차, 회사와 이용자의 권리와 의무를
        정하는 것을 목적으로 합니다.
      </p>
    ),
  },
  {
    number: "02",
    title: "회원가입 및 계정 관리",
    content: (
      <p>
        이용자는 회사가 정한 가입 양식에 따라 회원정보를 입력하고 약관에
        동의하여 회원가입을 신청할 수 있습니다. 회원은 자신의 계정 정보를 최신
        상태로 관리해야 하며, 계정의 관리 소홀로 발생한 손해에 대해서는
        이용자에게 책임이 있을 수 있습니다. 회사는 허위 정보가 확인되거나 서비스
        운영을 방해하는 경우 이용을 제한할 수 있습니다.
      </p>
    ),
  },
  {
    number: "03",
    title: "상품의 주문과 결제",
    content: (
      <p>
        이용자는 상품의 상세 내용과 가격, 배송 조건을 확인한 후 주문할 수
        있습니다. 주문이 완료되면 회사는 주문 내용을 확인하고 결제 승인 여부,
        재고 및 배송 가능 여부를 기준으로 주문을 처리합니다. 품절이나 시스템
        오류 등으로 주문을 제공하기 어려운 경우에는 지체 없이 안내하고 결제된
        금액을 환급합니다.
      </p>
    ),
  },
  {
    number: "04",
    title: "배송 및 주문 취소",
    content: (
      <p>
        상품은 결제가 확인된 날부터 영업일 기준 2~5일 이내 배송하는 것을
        원칙으로 합니다. 천재지변, 택배사 사정 등으로 배송이 늦어질 경우 별도로
        안내합니다. 상품이 발송되기 전에는 주문 취소를 요청할 수 있으며, 발송
        후에는 반품 절차가 적용될 수 있습니다.
      </p>
    ),
  },
  {
    number: "05",
    title: "교환 및 반품",
    content: (
      <p>
        이용자는 상품을 받은 날부터 7일 이내 교환 또는 반품을 신청할 수
        있습니다. 단순 변심에 따른 반품의 배송비는 이용자가 부담하며, 상품의
        하자나 오배송으로 인한 교환 및 반품 비용은 회사가 부담합니다. 이용자의
        책임으로 상품이 훼손되었거나 사용 흔적이 있는 경우에는 교환 및 반품이
        제한될 수 있습니다.
      </p>
    ),
  },
  {
    number: "06",
    title: "서비스 이용 제한",
    content: (
      <p>
        회사는 시스템 점검, 장애, 천재지변 또는 운영상 필요한 경우 서비스의 전부
        또는 일부를 일시 중단할 수 있습니다. 회사는 서비스 이용 과정에서 다른
        이용자에게 피해를 주거나 법령 및 공서양속에 반하는 행위를 한 이용자에
        대해 이용을 제한하거나 회원자격을 해지할 수 있습니다.
      </p>
    ),
  },
  {
    number: "07",
    title: "책임의 제한",
    content: (
      <p>
        회사는 고의 또는 중대한 과실이 없는 한 무료로 제공되는 서비스의 이용으로
        발생한 손해에 대해 책임을 지지 않습니다. 다만 관련 법령에서 정한 회사의
        책임은 제한되지 않으며, 상품의 품질과 배송에 관한 책임은 해당 법령과
        회사의 안내 기준에 따라 성실히 처리합니다.
      </p>
    ),
  },
  {
    number: "08",
    title: "약관의 변경 및 문의",
    content: (
      <>
        <p>
          회사는 관련 법령을 위반하지 않는 범위에서 약관을 변경할 수 있습니다.
          변경되는 약관은 적용일과 함께 서비스 내에 공지하며, 이용자에게 불리한
          변경은 적용일 30일 전부터 안내합니다. 변경된 약관에 동의하지 않는
          이용자는 회원탈퇴를 할 수 있습니다.
        </p>
        <S.ContactBox>
          <strong>고객 문의</strong>
          <span>이메일: help@omyo-life.example</span>
          <span>문의 가능 시간: 평일 10:00 - 17:00</span>
        </S.ContactBox>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <BasicPage>
      <S.PolicyMain>
        <S.PolicyHeader>
          <S.Eyebrow>LEGAL &amp; TERMS</S.Eyebrow>
          <S.PolicyTitle>이용약관</S.PolicyTitle>
          <S.PolicyIntro>
            오묘한 생활 서비스를 이용하기 전에 회원과 회사의 권리와 책임을
            확인해 주세요.
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
