import * as Dialog from "@radix-ui/react-dialog";

import { NewTransactionModal } from "src/components/NewTransactionModal";

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

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
