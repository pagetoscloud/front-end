import { 
    ButtonWrapper,
    CreateButton,
    JumbotronContainer, JumbotronHeader, 
    JumbotronNavigation, 
    LoginButton, 
    SignUpButton, 
    TextContent, 
    VerticalContentWrapper 
} from "./styles/Jumbotron.styled";
import logo from '../../../assets/images/Pixel-style-logo.png';
import jumbotronHero from '../../../assets/images/jumbotron-hero.png';
import { useWindowSize } from "../../../hooks/useWindowSize";
// import { ActionButtonSolid, ActionButtonSolidWhite } from "./styles/Global.styled";
import { Link } from "react-router-dom";

export default function Jumbotron({handleDetail}){
    const size = useWindowSize();
    let height = size[0];
    return (
        <JumbotronContainer style={{height: height}}>
            <JumbotronHeader>
                <img src={logo} alt="logo" />
                <JumbotronNavigation>
                    {/* <a href="http://youtube.com">Product</a>
                    <a href="http://youtube.com">Price</a>
                    <a href="http://youtube.com">About</a> */}
                    <p onClick={() => handleDetail('product')}>Product</p>
                    <p onClick={() => handleDetail('price')}>Price</p>
                    <p onClick={() => handleDetail('about')}>About</p>
                </JumbotronNavigation>
                <ButtonWrapper>
                    <LoginButton>
                        <Link to='/login'>Login</Link>
                    </LoginButton>
                    <SignUpButton>
                        <Link to='/signup'>Signup</Link>
                    </SignUpButton>
                </ButtonWrapper>
            </JumbotronHeader>
            <VerticalContentWrapper>
                <TextContent>
                    <h1>Produk Terlihat lebih Menarik</h1>
                    <p>Tingkatkan penjualan anda.</p>
                    {/* <ActionButtonSolidWhite><Link to={'/editor/*'}>Buat Sekarang</Link></ActionButtonSolidWhite> */}
                    <CreateButton><Link to={'/editor/*'}>Buat Sekarang</Link></CreateButton>
                </TextContent>
                <img src={jumbotronHero} alt='hero jumbotron' />
            </VerticalContentWrapper>
        </JumbotronContainer>
    )
}