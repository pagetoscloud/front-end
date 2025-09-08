// import { useWindowSize } from "../../../../../hooks/useWindowSize";
import { NavigationContainer } from "./Navigation.styled";
import share from '../../../../../assets/images/share-icon-2.png'
import setting from '../../../../../assets/images/setting-icon-2.png';
import product from '../../../../../assets/images/product-icon-2.png';
import template from '../../../../../assets/images/template-icon-2.png';
export default function Navigation({handleEditMode}){
    return (
        <NavigationContainer>
            <img style={{marginTop: 20}} onClick={() => handleEditMode('Template')} src={template} alt="product icon" />
            <img  onClick={() => handleEditMode('Product')} src={product} alt="product icon" />
            <img  onClick={() => handleEditMode('Share')} src={share} alt="share icon" />
            <img onClick={() => handleEditMode('Setting')} src={setting} alt="setting icon" />
        </NavigationContainer>
    )
}