// import { useWindowSize } from "../../../../../hooks/useWindowSize";
import {MenuNav} from "./NavigationBackground.styled";
import colorIcon from '../../../../../../assets/images/color-icon.png'
import opacityIcon from '../../../../../../assets/images/opacity-icon.png';
import blurIcon from '../../../../../../assets/images/blur-icon.png';
import borderIcon from '../../../../../../assets/images/border-icon.png';
import borderRadiusIcon from '../../../../../../assets/images/border-radius-icon.png';
import Navigation from "../../../micro-components/navigation/Navigation";
export default function NavigationBackground({handleComponentsMode, handleEditMode, componentsMode}){
    return (
        <Navigation 
            handleEditMode={handleEditMode}
            componentsMode={componentsMode}
        >
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
                <img onClick={() => handleComponentsMode('Border')} src={borderIcon} alt="setting icon" />
                <p>Border</p>
            </MenuNav>
            <MenuNav>
                <img onClick={() => handleComponentsMode('Radius')} src={borderRadiusIcon} alt="setting icon" />
                <p>Radius</p>
            </MenuNav>
        </Navigation>

    )
}