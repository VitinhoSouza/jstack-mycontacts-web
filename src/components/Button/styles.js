import styled, { css } from 'styled-components';

export const StyledButton = styled.button`

  padding: 0 16px;
  box-shadow: 0px 4px 10px rba(0, 0, 0, 0.04);
  height: 52px;
  background: ${({ theme }) => theme.colors.primary.main};
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  transition: background 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc !important;
    cursor: default !important;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }
  `}
`