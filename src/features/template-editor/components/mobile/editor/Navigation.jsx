// import { useWindowSize } from "../../../../../hooks/useWindowSize";
import { MenuNav, NavigationContainer } from "./Navigation.styled";
import share from '../../../../../assets/images/share-icon-2.png'
import setting from '../../../../../assets/images/setting-icon-2.png';
import product from '../../../../../assets/images/product-icon-2.png';
import template from '../../../../../assets/images/template-icon-2.png';

export default function Navigation({handleEditMode}){
    return (
        <NavigationContainer>
            <MenuNav>
                <img  onClick={() => handleEditMode('Template')} src={template} alt="product icon" />
                <p>Template</p>
            </MenuNav>
            <MenuNav>
                <img  onClick={() => handleEditMode('Product')} src={product} alt="product icon" />
                <p>Product</p>
            </MenuNav>
            <MenuNav>
                <img  onClick={() => handleEditMode('Share')} src={share} alt="share icon" />
                <p>Share</p>
            </MenuNav>
            <MenuNav>
                <img onClick={() => handleEditMode('Setting')} src={setting} alt="setting icon" />
                <p>Setting</p>
            </MenuNav>
        </NavigationContainer>
    )
}