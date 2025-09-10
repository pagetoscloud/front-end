import { useNavigate } from "react-router-dom";
import { DocumentName, NavigationButton, SideNavigationBox, SideNavigationWrapper, SpaceButton } from "./SideNavigation.styled";
import { useDispatch, useSelector } from "react-redux";
import { clearProductList } from "../../../templateProductSlice";

export default function SideNavigation({showNavigation, handleShowNavigation}){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.authentication.loggedIn);
    const handleNavigate = (route) => {
        dispatch(clearProductList());
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
                        {
                            loggedIn ? 
                            <>
                                <DocumentName>
                                    <input type="text" value="Document Name"/>
                                </DocumentName>
                                <NavigationButton onClick={() => handleNavigate('/dashboard')}>Dashboard</NavigationButton>
                                <NavigationButton onClick={() => handleNavigate('/template')}>Template</NavigationButton>
                                <NavigationButton onClick={() => handleNavigate('/collection')}>Collection</NavigationButton>
                            </> : 
                            <>
                                <NavigationButton onClick={() => handleNavigate('/')}>Back</NavigationButton>
                            </>
                        }
                    </SideNavigationBox>
                    <SpaceButton onClick={handleShowNavigation}>
                    </SpaceButton>
                </SideNavigationWrapper>
            }
        </>
    )
}