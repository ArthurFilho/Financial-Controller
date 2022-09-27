import { Coins } from "phosphor-react";
import { HeaderContainer, HeaderContent, LogoContent, NewTransactionButton, TextLogo } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';

export function Header() {
    return(
    <HeaderContainer>
        <HeaderContent>
            <LogoContent>
                <Coins />
                <TextLogo>Financial Controller </TextLogo>
            </LogoContent>

           <Dialog.Root>
            <Dialog.Trigger asChild>
                <NewTransactionButton>Nova transição</NewTransactionButton>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay />

                <Dialog.Content>
                    <Dialog.Title>Nova Transação</Dialog.Title>

                    <Dialog.Close />
                </Dialog.Content>
            </Dialog.Portal>
           </Dialog.Root>
        </HeaderContent>
    </HeaderContainer>
    )
}