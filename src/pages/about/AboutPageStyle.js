import styled from "@emotion/styled";

export const AboutMain = styled.main`
  width: min(100% - 40px, 1100px);
  color: var(--text-primary);
  padding: 32px 0 76px;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: min(100% - 60px, 1100px);
    padding: 24px 0 60px;
  }

  @media (max-width: 767px) {
    width: min(100% - 32px, 1100px);
    padding: 12px 0 44px;
  }
`;

export const AboutHero = styled.section`
  align-items: stretch;
  border-bottom: 2px solid var(--text-primary);
  display: grid;
  gap: 48px;
  grid-template-columns: minmax(0, 1.2fr) minmax(240px, 0.8fr);
  padding: 34px 0 56px;

  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 28px;
    grid-template-columns: minmax(0, 1.1fr) minmax(210px, 0.9fr);
    padding: 26px 0 42px;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 14px 0 34px;
  }
`;

export const HeroCopy = styled.div`
  align-self: center;
`;

export const Eyebrow = styled.p`
  color: var(--text-secondary);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  margin: 0 0 16px;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(34px, 5vw, 64px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.18;
  margin: 0;
`;

export const HeroDescription = styled.p`
  color: var(--text-secondary);
  font-size: 17px;
  line-height: 1.8;
  margin: 24px 0 0;
  max-width: 520px;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
    margin-top: 20px;
  }

  @media (max-width: 767px) {
    font-size: 15px;
    margin-top: 18px;
    overflow-wrap: anywhere;
  }
`;

export const HeroMark = styled.div`
  align-items: center;
  background: var(--background-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 280px;
  padding: 32px;

  img {
    max-width: 210px;
    width: 100%;
  }

  span {
    color: var(--text-secondary);
    font-size: 10px;
    letter-spacing: 0.16em;
    margin-top: 24px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    min-height: 240px;
    padding: 24px;

    img {
      max-width: 175px;
    }

    span {
      font-size: 9px;
      margin-top: 18px;
    }
  }

  @media (max-width: 767px) {
    min-height: 210px;
    padding: 24px 16px;

    img {
      max-width: 180px;
    }
  }
`;

export const SectionLabel = styled.p`
  color: var(--point);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  margin: 0;
`;

export const IntroSection = styled.section`
  border-bottom: 1px solid var(--border);
  display: grid;
  gap: 40px;
  grid-template-columns: 180px 1fr;
  padding: 56px 0;

  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 28px;
    grid-template-columns: 140px 1fr;
    padding: 42px 0;
  }

  @media (max-width: 767px) {
    display: block;
    padding: 36px 0;
  }
`;

export const IntroText = styled.p`
  font-size: clamp(21px, 3vw, 32px);
  line-height: 1.55;
  margin: 0;
  max-width: 720px;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 26px;
  }

  @media (max-width: 767px) {
    margin-top: 18px;
  }
`;

export const ValuesSection = styled.section`
  border-bottom: 1px solid var(--border);
  padding: 56px 0;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 42px 0;
  }

  @media (max-width: 767px) {
    padding: 36px 0;
  }
`;

export const ValueGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 28px;

  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 18px;
  }

  @media (max-width: 767px) {
    gap: 0;
    grid-template-columns: 1fr;
  }
`;

export const ValueItem = styled.article`
  border-top: 2px solid var(--text-primary);
  padding: 18px 0 0;

  h2 {
    font-size: 21px;
    margin: 28px 0 10px;
  }

  p {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.75;
    margin: 0;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    h2 {
      font-size: 18px;
      margin-top: 22px;
    }

    p {
      font-size: 13px;
    }
  }

  @media (max-width: 767px) {
    padding: 18px 0 24px;

    h2 {
      margin-top: 16px;
    }
  }
`;

export const ValueNumber = styled.span`
  color: var(--point);
  font-size: 13px;
  font-weight: 700;
`;

export const ContactSection = styled.section`
  align-items: end;
  display: flex;
  justify-content: space-between;
  padding: 56px 0 0;

  h2 {
    font-size: clamp(24px, 3vw, 36px);
    margin: 18px 0 0;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding-top: 42px;
  }

  @media (max-width: 767px) {
    align-items: start;
    flex-direction: column;
    gap: 28px;
    padding-top: 36px;
  }
`;

export const ContactInfo = styled.address`
  color: var(--text-secondary);
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-style: normal;
  gap: 5px;
  text-align: right;

  strong {
    color: var(--text-primary);
    font-size: 16px;
  }

  small {
    font-size: 12px;
  }

  @media (max-width: 767px) {
    text-align: left;
    max-width: 100%;
    overflow-wrap: anywhere;
  }
`;
