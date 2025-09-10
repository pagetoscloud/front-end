import { 
    AddDesignButton, HeaderWrapper, 
    LeftContent, Logo, 
    Menu, ProfilePicture, 
    RightContent, SolidButton, Toggle, 
} from "./Header.styled";
import logo from '../../../assets/images/Pixel-style-logo.png';
import toggle from '../../../assets/images/togle-icon.png';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header({handleShowNavigation}){
    const navigate = useNavigate();
    const accountData = useSelector(state => state.accountData.personalData);
    const { loggedIn } = useSelector(state => state.authentication)
    return (
        <HeaderWrapper>
            <LeftContent>
                {
                    loggedIn &&
                    <Toggle onClick={handleShowNavigation}>
                        <img src={toggle} alt='toggle icon' />
                    </Toggle>
                }
                <Logo>
                    <img onClick={() => navigate('/')} src={logo} alt='logo' />
                </Logo>
                <Menu>
                    <p>Pelajari</p>
                    <p>Tentang</p>
                    <p>Berlangganan</p>
                </Menu>
            </LeftContent>
            <RightContent style={loggedIn ? {} : {width: '230px'} }>
                <AddDesignButton onClick={() => navigate('/editor/*')}>
                    <p>Add</p>
                </AddDesignButton>
                {
                    loggedIn ? 
                    <SolidButton>
                        <p>Upgrade</p>
                    </SolidButton> :
                    <SolidButton>
                        <Link to={'/login'}>Login</Link>
                    </SolidButton>
                }
                {
                    loggedIn &&
                    <ProfilePicture>
                        {
                            accountData.profilePicture ?
                            <img src={accountData.profilePicture} alt='profile' />:
                            <h2>{accountData.username[0].toUpperCase()}</h2>
                        }
                    </ProfilePicture>
                }
            </RightContent>
        </HeaderWrapper>
    )
}