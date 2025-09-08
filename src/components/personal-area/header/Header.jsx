import { 
    AddDesignButton, HeaderWrapper, 
    LeftContent, Logo, 
    Menu, ProfilePicture, 
    RightContent, Toggle, 
    UpgradeButton 
} from "./Header.styled";
import logo from '../../../assets/images/Pixel-style-logo.png';
import toggle from '../../../assets/images/togle-icon.png';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header({handleShowNavigation}){
    const navigate = useNavigate();
    const accountData = useSelector(state => state.accountData.personalData);
    return (
        <HeaderWrapper>
            <LeftContent>
                <Toggle onClick={handleShowNavigation}>
                    <img src={toggle} alt='toggle icon' />
                </Toggle>
                <Logo>
                    <img onClick={() => navigate('/')} src={logo} alt='logo' />
                </Logo>
                <Menu>
                    <p>Pelajari</p>
                    <p>Tentang</p>
                    <p>Berlangganan</p>
                </Menu>
            </LeftContent>
            <RightContent>
                <AddDesignButton onClick={() => navigate('/editor/*')}>
                    <p>Add</p>
                </AddDesignButton>
                <UpgradeButton>
                    <p>Upgrade</p>
                </UpgradeButton>
                <ProfilePicture>
                    {
                        accountData.profilePicture ?
                        <img src={accountData.profilePicture} alt='profile' />:
                        <h2>{accountData.username[0].toUpperCase()}</h2>
                    }
                </ProfilePicture>
            </RightContent>
        </HeaderWrapper>
    )
}