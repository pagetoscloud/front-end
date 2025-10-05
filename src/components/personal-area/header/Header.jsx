import { 
    AddDesignButton, HeaderWrapper, 
    LeftContent, Logo, 
    Menu, ProfilePicture, 
    RightContent, SolidButton, Toggle, 
} from "./Header.styled";
import logo from '../../../assets/images/Pixel-style-logo.png';
import toggle from '../../../assets/images/togle-icon.png';
import { data, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAuthStatus } from "../../../features/authentication/authSlice";
import { changeAllData } from "../../../features/setting/accountDataSlice";

export default function Header({handleShowNavigation}){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accountData = useSelector(state => state.accountData.personalData);
    const { loggedIn } = useSelector(state => state.authentication);
    useEffect(() => {
        const getData = async () => {
            const url = import.meta.env.VITE_NODE_ENV !== 'development' 
                ? `${import.meta.env.VITE_API_URL}/auth/profile-data` 
                : 'http://localhost:5001/auth/profile-data';

            try {
                const response = await fetch(url, {
                    method: "GET",
                    credentials: "include",
                    mode: 'cors',
                    // headers: {
                    //     'Content-Type': 'application/json'
                    // }
                });
                if (!response.ok){
                    throw new Error('fail to fetch');
                }
                const json = await response.json();
                if (json.status === 'ok'){
                    if (json.data.profile_picture === null){
                        dispatch(changeAllData({
                            username: json.data.username,
                            email: json.data.email,
                            password: '****',
                            profilePicture: null,
                            accountType: json.data.account_type,
                        }));
                    } else {
                        dispatch(changeAllData({
                            username: json.data.username,
                            email: json.data.email,
                            password: '****',
                            profilePicture: json.data.profile_picture.link,
                            accountType: json.data.account_type,
                        }));
                    }
                } else {
                    navigate('/login');
                }
            } catch (error) {
                // navigate('/login');
            }
        }
        if (!loggedIn){
            dispatch(fetchAuthStatus());
            getData();
        }
    }, []);
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