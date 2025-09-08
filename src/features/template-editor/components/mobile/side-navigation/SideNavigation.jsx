import { useNavigate } from "react-router-dom";
import { DocumentName, NavigationButton, SideNavigationBox, SideNavigationWrapper, SpaceButton } from "./SideNavigation.styled";

export default function SideNavigation({showNavigation, handleShowNavigation}){
    const navigate = useNavigate();
    const handleNavigate = (route) => {
        localStorage.removeItem('templateEditor');
        localStorage.removeItem('templatedata');
        navigate(route);
    }
    return (
        <>
            {
                showNavigation && 
                <SideNavigationWrapper>
                    <SideNavigationBox>
                        <DocumentName>
                            <input type="text" value="Document Name"/>
                        </DocumentName>
                        <NavigationButton onClick={() => handleNavigate('/')}>Home</NavigationButton>
                        <NavigationButton onClick={() => handleNavigate('/collection')}>Collection</NavigationButton>
                    </SideNavigationBox>
                    <SpaceButton onClick={handleShowNavigation}>
                    </SpaceButton>
                </SideNavigationWrapper>
            }
        </>
    )
}