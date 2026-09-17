import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StatusContainer = styled.div`
  display: flex;
  min-height: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 40px 20px;
  color: var(--text-color);
  text-align: center;
`;

export const EmptyImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    width: 200px;
    height: 200px;
  }
`;

export const StatusTitle = styled.p`
  margin: 0;
  color: var(--text-color);
  font-size: 30px;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 1.5;
  }
`;

export const StatusDescription = styled.span`
  max-width: 300px;
  color: var(--text-color);
  font-size: 19px;
  line-height: 1.5;
  text-align: center;

  @media (max-width: 767px) {
    max-width: 270px;
    font-size: 15px;
    line-height: 1.7;
  }
`;

export const HomeButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 170px;
  height: 46px;
  margin-top: 28px;
  padding: 0 24px;
  border: none;
  border-radius: 30px;
  background-color: var(--acent-beidge);
  color: var(--text-color);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  /* PC 마우스 호버 */
  &:hover {
    background-color: var(--bg-button);
    color: #fff;
  }

  /* 모바일 터치 및 클릭 시 */
  &:active {
    background-color: var(--bg-button);
    color: #fff;
  }

  /* 키보드 포커스 시 */
  &:focus-visible {
    outline: 2px solid var(--bg-button);
    outline-offset: 3px;
    background-color: var(--bg-button);
    color: #fff;
  }

  @media (max-width: 767px) {
    min-width: 165px;
    height: 44px;
    padding: 0 20px;
    font-size: 14px;

    /* 모바일에서 터치할 때 색상 유지 */
    &:hover,
    &:active,
    &:focus-visible {
      background-color: var(--bg-button);
      color: #fff;
    }
  }
`;
