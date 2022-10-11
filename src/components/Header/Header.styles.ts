import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background: ${({ theme }) => theme["gray-900"]};
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  padding-inline: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  font-weight: bold;
  padding-inline: 1.25rem;
  border-radius: 6px;
  transition: background 0.2s;
  cursor: pointer;

  ${({ theme }) => css`
    background: ${theme["green-500"]};
    color: ${theme.white};

    &:hover {
      background: ${theme["green-700"]};
    }
  `}
`;
