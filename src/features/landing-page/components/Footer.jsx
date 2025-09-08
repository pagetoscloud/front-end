import { FooterWrapper } from "./styles/Footer.styled";
import logo from '../../../assets/images/Pixel-style-logo.png';
export default function Footer(){
    return (
        <FooterWrapper>
            <img src={logo} alt="logo" />
        </FooterWrapper>
    )
}