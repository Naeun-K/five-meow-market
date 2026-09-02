import styled from "@emotion/styled";

{/*와이드 및 PC 버전*/}
export const Container = styled.div`
  display: flex;
  width: 720px;
  height: 1187px;
  padding: 50px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  flex-shrink: 0;

  background: var(--bg);

  box-sizing: border-box;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 159px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  flex-shrink: 0;

  h1 {
    width: 248px;
    height: 74px;

    color: var(--text-color);
    font-family: Inter;
    font-size: 44px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    white-space: nowrap;
    margin: 0;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 29px;

    color: var(--text-color);
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    gap: 8px;

    margin: 0;

    svg {
      width: 40px;
      height: 40px; 
      flex-shrink: 0;
      fill: #EBCCB2;}
  }
`;

export const Main = styled.main`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 620px;

  align-self: stretch;
`;

export const InfoRow = styled.div`
  display: flex;
  height: 30px;

  align-items: center;
  gap: 20px;

  align-self: stretch;

  span {
    width: 117px;
    height: 13.864px;

    color: var(--text-color);
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  p {
    width: 116px;
    height: 13.864px;

    color: var(--text-color);
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    margin: 0;
  }
`;

export const FormGroup = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  align-self: stretch;

  label {
    height: 14px;
    align-self: stretch;

    color: var(--text-color);
    font-family: Inter;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  input {
    display: flex;
    width: 100%;
    height: 53px;

    padding: 21px 38.294px 18px 13px;

    align-items: flex-start;

    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    background: #fff;

    box-sizing: border-box;
  }

  input::placeholder {
    color: var(--text-secondary);
    font-family: Inter;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 53px;

  align-items: center;

  position: relative;

  input {
    width: 100%;
    height: 53px;

    padding: 21px 60px 18px 13px;

    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    background: #fff;

    box-sizing: border-box;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;

    width: 94px;
    height: 53px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: var(--radius-md);
    color: #A8A7A7;


    cursor: pointer;
  }
`;

export const PhoneRow = styled.div`
  display: flex;
  width: 100%;
  height: 53px;

  align-items: center;
  gap: 10px;

  input {
    flex: 1;
    min-width: 0;

    height: 53px;
    padding: 21px 13px 18px;

    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    background: #fff;

    box-sizing: border-box;
  }
`;

export const VerifyButton = styled.button`
  width: 140px;
  height: 53px;

  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: var(--radius-md);

  background: var(--acent-beidge);
  color: var(--text-primary);

  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  cursor: pointer;
`;

export const AddressRow = styled.div`
  display: flex;
  width: 100%;

  align-items: flex-start;
  gap: 15px;

  align-self: stretch;

  input {
    display: flex;
    height: 53px;

    padding: 15px 10px;

    align-items: center;

    flex: 1;

    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    background: #fff;

    box-sizing: border-box;
  }

  button {
    display: flex;
    width: 140px;
    height: 53px;

    padding: 15px 10px;

    justify-content: center;
    align-items: center;
    gap: 10px;

    flex-shrink: 0;

    border: none;
    border-radius: var(--radius-md);
    color: var(--text-primary);

    background: var(--acent-beidge);

    cursor: pointer;
  }
`;

export const AddressButton = styled.button`
  color: var(--text-button);
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SubmitButton = styled.button`
  display: flex;
  width: 100%;
  height: 53px;

  padding: 10px 113px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  align-self: stretch;

  border: none;
  border-radius: var(--radius-md);

  background: var(--bg-button);
  color: var(--text-button);

  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  cursor: pointer;
`;