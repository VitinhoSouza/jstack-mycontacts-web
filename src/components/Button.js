import styled from 'styled-components';

export default styled.button`

  width: 100%;
  box-shadow: 0px 4px 10px rba(0, 0, 0, 0.04);
  height: 52px;
  background: ${({ theme }) => theme.colors.primary.main};
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border-radius: 4px;

  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }
`