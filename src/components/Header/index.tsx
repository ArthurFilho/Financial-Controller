import { Coins } from "phosphor-react";
import { HeaderContainer, HeaderContent, LogoContent, NewTransactionButton, TextLogo } from "./styles";

export function Header() {
    return(
    <HeaderContainer>
        <HeaderContent>
            <LogoContent>
                <Coins />
                <TextLogo>Financial Controller </TextLogo>
            </LogoContent>

            <NewTransactionButton>Nova transição</NewTransactionButton>
        </HeaderContent>
    </HeaderContainer>
    )
}