import { 
    LogoutButton,
    // LogoutButton,
    NavigationActiveButton,
    NavigationButton, NavigationWrapper 
} from "./Navigation.styled";

import home from '../../../assets/images/home-icon.png';
import template from '../../../assets/images/template-icon-type-1.png';
import collection from '../../../assets/images/collection-icon.png';
import analytics from '../../../assets/images/analytics-icon.png';
import setting from '../../../assets/images/setting-icon copy.png';
import logoutIcon from '../../../assets/images/logout-icon.png';
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../../hooks/useWindowSize";

export default function Navigation({currentPage}){
    const navigate = useNavigate();
    const size = useWindowSize();
    const pageList = [
        {name: 'Dashboard', link: '/dashboard', image: home}, 
        {name: 'Template', link: '/template', image: template}, 
        {name: 'Collection', link: '/collection', image: collection}, 
        {name: 'Analytics', link: '/analytics', image: analytics}, 
        {name: 'Setting', link: '/setting', image: setting}
    ];
    const handleLogout = async () => {
        const url = process.env.NODE_ENV !== 'development' 
            ? `${process.env.API_URL}/auth/logout` 
            : 'http://localhost:5001/auth/logout';

        try {
            const response = await fetch(url, {
                method: "GET",
                mode: 'cors',
                credentials: 'include',
            });
            const json = await response.json();
            if (json.status === 'ok'){
                navigate('/login');
            }
            
        } catch (error) {
            // throw error;
            console.error(error);
        }
    }
    if (size[1] > 600){
        return (
    
            <NavigationWrapper style={{height: size[0] - 200}}>
                {
                    pageList.map((list, index) => {
                        if (list.name === currentPage){
                            return (
                                <NavigationActiveButton key={`${index}-navigation-button-active`}>
                                    <img src={list.image} alt={list.name} />
                                    <p>{list.name}</p>
                                </NavigationActiveButton>
                            )
                        }
                        return (
                            <NavigationButton onClick={() => navigate(list.link)} key={`${index}-navigation-button`}>
                                <img src={list.image} alt={list.name} />
                                <p>{list.name}</p>
                            </NavigationButton>
                        )
                    })
                }
                <LogoutButton data-testid="logout-button" onClick={handleLogout}>
                    <img src={logoutIcon} alt={'logout icon'} />
                    <p>Logout</p>
                </LogoutButton>
            </NavigationWrapper>
        )
    } else {
        return (
            <NavigationWrapper>
                {
                    pageList.map((list, index) => {
                        if (list.name === currentPage){
                            return (
                                <NavigationActiveButton key={`${index}-navigation-button-active`}>
                                    <img src={list.image} alt={list.name} />
                                    <p>{list.name}</p>
                                </NavigationActiveButton>
                            )
                        }
                        return (
                            <NavigationButton onClick={() => navigate(list.link)} key={`${index}-navigation-button`}>
                                <img src={list.image} alt={list.name} />
                                <p>{list.name}</p>
                            </NavigationButton>
                        )
                    })
                }
                <LogoutButton data-testid="logout-button" onClick={handleLogout}>
                    <img src={home} alt={'logout icon'} />
                    <p>Logout</p>
                </LogoutButton>
            </NavigationWrapper>
        )
    }
}