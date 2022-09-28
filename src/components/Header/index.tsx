import { Coins } from "phosphor-react";
import { HeaderContainer, HeaderContent, LogoContent, NewTransactionButton, TextLogo } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal";

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
            <NewTransactionModal />
           </Dialog.Root>
        </HeaderContent>
    </HeaderContainer>
    )
}