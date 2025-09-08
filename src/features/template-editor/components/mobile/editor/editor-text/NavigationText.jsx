import { CloseButton, MenuNav, NavigationContainer } from "./NavigationText.styled";
import colorIcon from '../../../../../../assets/images/color-icon.png'
import fontStyleIcon from '../../../../../../assets/images/font-style-icon.png';
import alignIcon from '../../../../../../assets/images/align-icon.png';
import spaceIcon from '../../../../../../assets/images/space-icon.png';
import closeIcon from '../../../../../../assets/images/close-icon.png';

export default function NavigationText({componentsMode, handleComponentsMode, handleEditMode}){
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
                <img  onClick={() => handleComponentsMode('Style')} src={fontStyleIcon} alt="product icon" />
                <p>Style</p>
            </MenuNav>
            <MenuNav>
                <img  onClick={() => handleComponentsMode('Align')} src={alignIcon} alt="share icon" />
                <p>Align</p>
            </MenuNav>
            <MenuNav>
                <img onClick={() => handleComponentsMode('Space')} src={spaceIcon} alt="setting icon" />
                <p>Space</p>
            </MenuNav>
        </NavigationContainer>
    )
}