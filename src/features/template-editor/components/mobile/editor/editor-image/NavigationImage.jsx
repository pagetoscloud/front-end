import { CloseButton, MenuNav, NavigationContainer } from "./NavigationImage.styled";
import imageIcon from '../../../../../../assets/images/image-icon.png'
import filterIcon from '../../../../../../assets/images/filter-icon.png';
import opacityIcon from '../../../../../../assets/images/opacity-icon.png';
import borderRadiusIcon from '../../../../../../assets/images/border-radius-icon.png';
import closeIcon from '../../../../../../assets/images/close-icon.png';

export default function NavigationImage({componentsMode, handleComponentsMode, handleEditMode}){
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
                <img  onClick={() => handleComponentsMode('Image')} src={imageIcon} alt="product icon" />
                <p>Image</p>
            </MenuNav>
            <MenuNav>
                <img  onClick={() => handleComponentsMode('Filter')} src={filterIcon} alt="product icon" />
                <p>Filter</p>
            </MenuNav>
            <MenuNav>
                <img  onClick={() => handleComponentsMode('Opacity')} src={opacityIcon} alt="share icon" />
                <p>Opacity</p>
            </MenuNav>
            <MenuNav>
                <img onClick={() => handleComponentsMode('Radius')} src={borderRadiusIcon} alt="setting icon" />
                <p>Radius</p>
            </MenuNav>
        </NavigationContainer>
    )
}