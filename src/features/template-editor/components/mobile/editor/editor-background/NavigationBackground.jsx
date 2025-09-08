// import { useWindowSize } from "../../../../../hooks/useWindowSize";
import { CloseButton, MenuNav, NavigationContainer } from "./NavigationBackground.styled";
import colorIcon from '../../../../../../assets/images/color-icon.png'
import opacityIcon from '../../../../../../assets/images/opacity-icon.png';
import blurIcon from '../../../../../../assets/images/blur-icon.png';
import borderRadiusIcon from '../../../../../../assets/images/border-radius-icon.png';
import closeIcon from '../../../../../../assets/images/close-icon.png';
export default function NavigationBackground({handleComponentsMode, handleEditMode, componentsMode}){
    return (
        <NavigationContainer>
            {
                !componentsMode ?
                <CloseButton onClick={() => handleEditMode(false)}>
                    <img src={closeIcon} alt='close' />
                </CloseButton> :
                <></>
            }
            <MenuNav>
                <img  onClick={() => handleComponentsMode('Color')} src={colorIcon} alt="product icon" />
                <p>Color</p>
            </MenuNav>
            <MenuNav>
                <img  onClick={() => handleComponentsMode('Opacity')} src={opacityIcon} alt="product icon" />
                <p>Opacity</p>
            </MenuNav>
            <MenuNav>
                <img  onClick={() => handleComponentsMode('Blur')} src={blurIcon} alt="share icon" />
                <p>Effect</p>
            </MenuNav>
            <MenuNav>
                <img onClick={() => handleComponentsMode('Radius')} src={borderRadiusIcon} alt="setting icon" />
                <p>Radius</p>
            </MenuNav>
        </NavigationContainer>
    )
}