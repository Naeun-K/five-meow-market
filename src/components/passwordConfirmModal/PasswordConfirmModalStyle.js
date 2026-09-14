import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgb(28 19 14 / 52%);
`;

export const Modal = styled.div`
  width: min(100%, 440px);
  padding: 32px;
  box-sizing: border-box;
  background: var(--bg, #fffaf6);
  border: 1px solid var(--border, #dfd2c9);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgb(44 28 18 / 20%);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const Title = styled.h2`
  margin: 0;
  color: var(--text-primary, #34231a);
  font-size: 24px;
  line-height: 1.3;
`;

export const Description = styled.p`
  margin: 12px 0 24px;
  color: var(--text-secondary, #77675d);
  font-size: 15px;
  line-height: 1.6;
`;

export const CloseButton = styled.button`
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  padding: 0;
  color: var(--text-secondary, #77675d);
  border: 0;
  background: transparent;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 14px;
  border: 1px solid var(--border, #dfd2c9);
  border-radius: 8px;
  background: #fff;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &:focus-within {
    border-color: var(--text-primary, #34231a);
    box-shadow: 0 0 0 3px rgb(117 78 54 / 10%);
  }
`;

export const PasswordInput = styled.input`
  flex: 1;
  min-width: 0;
  height: 48px;
  padding: 0;
  color: var(--text-primary, #34231a);
  border: 0;
  outline: 0;
  background: transparent;
  font: inherit;

  &::placeholder {
    color: #aa9b91;
  }
`;

export const ToggleButton = styled.button`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  padding: 4px;
  color: var(--text-secondary, #77675d);
  border: 0;
  background: transparent;
  cursor: pointer;

  svg {
    width: 22px;
    height: 22px;
  }
`;

export const ErrorMessage = styled.p`
  margin: 0;
  color: #b04343;
  font-size: 13px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
`;

const ActionButton = styled.button`
  min-width: 84px;
  height: 44px;
  padding: 0 18px;
  border-radius: 8px;
  font: inherit;
  cursor: pointer;

  &:disabled {
    opacity: 0.55;
    cursor: wait;
  }
`;

export const CancelButton = styled(ActionButton)`
  color: var(--text-primary, #34231a);
  border: 1px solid var(--border, #dfd2c9);
  background: transparent;
`;

export const ConfirmButton = styled(ActionButton)`
  color: #fff;
  border: 1px solid var(--text-primary, #34231a);
  background: var(--text-primary, #34231a);
`;
