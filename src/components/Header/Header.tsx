import logoImg from "src/assets/logo.svg";

import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from "./Header.styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
