import styled from "@emotion/styled";

export const PolicyMain = styled.main`
  width: min(100% - 40px, 940px);
  color: var(--text-primary);
  padding: 32px 0 70px;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: min(100% - 60px, 940px);
    padding: 24px 0 58px;
  }

  @media (max-width: 767px) {
    width: min(100% - 32px, 940px);
    padding: 12px 0 42px;
  }
`;

export const PolicyHeader = styled.header`
  border-bottom: 2px solid var(--text-primary);
  padding-bottom: 34px;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding-bottom: 28px;
  }

  @media (max-width: 767px) {
    padding-bottom: 24px;
  }
`;

export const Eyebrow = styled.p`
  color: var(--text-secondary);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  margin-bottom: 14px;
`;

export const PolicyTitle = styled.h1`
  font-size: clamp(30px, 4vw, 48px);
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
`;

export const PolicyIntro = styled.p`
  color: var(--text-secondary);
  font-size: 17px;
  line-height: 1.7;
  margin: 18px 0 14px;

  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

export const EffectiveDate = styled.p`
  color: var(--text-secondary);
  font-size: 13px;
  margin: 0;
`;

export const PolicyBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PolicySection = styled.section`
  border-bottom: 1px solid var(--border);
  padding: 32px 0;

  &:last-child {
    border-bottom: 0;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 28px 0;
  }

  @media (max-width: 767px) {
    padding: 24px 0;
  }
`;

export const SectionHeading = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;

  h2 {
    font-size: 20px;
    line-height: 1.4;
    margin: 0;
  }

  @media (max-width: 767px) {
    gap: 10px;

    h2 {
      font-size: 17px;
    }
  }
`;

export const SectionNumber = styled.span`
  color: var(--point);
  font-size: 13px;
  font-weight: 700;
  flex-shrink: 0;
`;

export const SectionContent = styled.div`
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.8;
  padding-left: 42px;

  p {
    margin: 14px 0 0;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    padding-left: 0;
    overflow-wrap: anywhere;
  }
`;

export const PolicyTable = styled.table`
  border-collapse: collapse;
  font-size: 14px;
  margin-top: 18px;
  table-layout: fixed;
  width: 100%;

  th,
  td {
    border: 1px solid var(--border);
    padding: 12px 14px;
    text-align: left;
    vertical-align: top;
    word-break: keep-all;
  }

  th {
    background: var(--background-secondary);
    color: var(--text-primary);
    font-weight: 700;
  }

  @media (max-width: 600px) {
    font-size: 12px;

    th,
    td {
      padding: 9px 7px;
      word-break: keep-all;
    }
  }
`;

export const ContactBox = styled.div`
  background: var(--background-secondary);
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 14px;
  padding: 18px 20px;

  strong {
    color: var(--text-primary);
    margin-bottom: 4px;
  }
`;
