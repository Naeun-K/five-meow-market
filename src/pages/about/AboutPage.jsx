import BasicPage from "../basicPage/BasicPage";
import logo from "../../assets/logo.webp";
import * as S from "./AboutPageStyle";

const values = [
  {
    number: "01",
    title: "고양이의 기준",
    description:
      "사람의 취향만큼 고양이의 편안함과 안전을 먼저 살핍니다. 매일 곁에 두고 싶은 물건을 고릅니다.",
  },
  {
    number: "02",
    title: "생활의 발견",
    description:
      "집사와 반려묘의 일상에서 발견한 작은 불편을 좋은 상품과 다정한 아이디어로 바꿉니다.",
  },
  {
    number: "03",
    title: "오래 쓰는 마음",
    description:
      "잠깐의 유행보다 오래 사용할 수 있는 품질과 꼭 필요한 소비를 지향합니다.",
  },
];

export default function AboutPage() {
  return (
    <BasicPage>
      <S.AboutMain>
        <S.AboutHero>
          <S.HeroCopy>
            <S.Eyebrow>ABOUT OMYO LIFE</S.Eyebrow>
            <S.HeroTitle>
              고양이와 함께하는
              <br />
              조금 더 좋은 생활
            </S.HeroTitle>
            <S.HeroDescription>
              오묘한 생활은 다섯 고양이의 시선으로 집사의 하루를 살펴보고,
              생활에 꼭 맞는 물건과 이야기를 전하는 라이프스타일 숍입니다.
            </S.HeroDescription>
          </S.HeroCopy>
          <S.HeroMark>
            <img src={logo} alt="오묘한 생활 로고" />
            <span>FIVE CATS, ONE GOOD LIFE</span>
          </S.HeroMark>
        </S.AboutHero>

        <S.IntroSection>
          <S.SectionLabel>OUR STORY</S.SectionLabel>
          <S.IntroText>
            매일 반복되는 집사의 생활 속에는 고양이와 나누는 작고 분명한 기쁨이
            있습니다. 오묘한 생활은 그 기쁨이 더 오래 이어지도록 쓰임새가 좋고
            마음이 가는 상품을 천천히 소개합니다.
          </S.IntroText>
        </S.IntroSection>

        <S.ValuesSection>
          <S.SectionLabel>WHAT WE BELIEVE</S.SectionLabel>
          <S.ValueGrid>
            {values.map((value) => (
              <S.ValueItem key={value.number}>
                <S.ValueNumber>{value.number}</S.ValueNumber>
                <h2>{value.title}</h2>
                <p>{value.description}</p>
              </S.ValueItem>
            ))}
          </S.ValueGrid>
        </S.ValuesSection>

        <S.ContactSection>
          <div>
            <S.SectionLabel>CONTACT</S.SectionLabel>
            <h2>궁금한 이야기가 있나요?</h2>
          </div>
          <S.ContactInfo>
            <span>고객 문의</span>
            <strong>help@omyo-life.example</strong>
            <small>평일 10:00 - 17:00</small>
          </S.ContactInfo>
        </S.ContactSection>
      </S.AboutMain>
    </BasicPage>
  );
}
