import { useNavigate } from "react-router-dom";
import { 
    BackButton,
        HeaderWrapper, HollowButton, 
        LeftSideHeader, ScreenSizeButton, SolidButton, 
        VerticalLine,
} from "./Header.styled";
import normalScreenIcon from '../../../../assets/images/normal-screen-icon.png';
import fullScreenIcon from '../../../../assets/images/full-screen-icon.png';
import { useState } from "react";


export default function Header({screenMode, handleScreenMode, handleFullScreen, handleLocalStorage}){
    const navigate = useNavigate();
    const [fullScreen, setFullScreen] = useState(false);
    const handleScreen = () => {
        if (fullScreen){
            setFullScreen(false);
            handleFullScreen();
        } else {
            setFullScreen(true);
            handleFullScreen();
        }
    }
    return (
        <HeaderWrapper 
            style={fullScreen ? 
                {
                    width: 60, 
                    height: 60, 
                    padding: 0, 
                    justifyContent: 'center', 
                    position: 'absolute', 
                    right: 0,
                    boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.1)',
                    borderRadius: '0 0 0 5px'
                }: {}}
        >
            {
                !fullScreen &&
                <LeftSideHeader>
                    <BackButton onClick={() => {
                        handleLocalStorage();
                        navigate(-1);
                    }}>
                        <p>Back</p>
                    </BackButton>
                    <VerticalLine />
                    {
                        screenMode === 'mobile' ?
                        <SolidButton>
                            <p>Device</p>
                        </SolidButton> :
                        <HollowButton onClick={() => handleScreenMode('mobile')} >
                            <p>Device</p>
                        </HollowButton>
                    }
                    {
                        screenMode === 'desktop' ?
                        <SolidButton>
                            <p>Desktop</p>
                        </SolidButton> :
                        <HollowButton onClick={() => handleScreenMode('desktop')}>
                            <p>Desktop</p>
                        </HollowButton> 
                    }
                </LeftSideHeader>
            }
            <ScreenSizeButton onClick={handleScreen}>
                <img src={fullScreen ? normalScreenIcon : fullScreenIcon} alt='screen button icon' />
            </ScreenSizeButton>
        </HeaderWrapper>
    )
}