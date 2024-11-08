import styled from "styled-components"

export const Container = styled.button`
  height: 56px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;

  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`
