import styled, { css } from "styled-components"

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      margin-right: 8px;
      font-weight: bold;
    }

    img {
      margin-right: 8px;
      ${({ orderBy }) => orderBy === 'asc' && css`
        transform: rotate(180deg);
      `}
      transition: transform 0.2s ease-in;
    }
  }
`

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .info {
    .contact-name{
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;
    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }

  & + & {
    margin-top: 16px;
  }
`