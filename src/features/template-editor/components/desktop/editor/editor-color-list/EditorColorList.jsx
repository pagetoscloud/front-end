import { colorGradientListData, colorSolidListData, colorTemplateListData } from "../../../../../../data/ColorListData";
import { EditorColorContainer, LabelText } from "../../../../assets/Global.styled";
import { 
        ColorListHeader, ColorListItems, 
        ColorListWrapper 
} from "./EditorColorList.styled";
import closeIcon from '../../../../../../assets/images/close-icon.png';
import transparentIcon from '../../../../../../assets/images/transparent-icon.png';

export default function EditorColorList({handleChangeColor, handleShow, items, handleShowCustomColor}){
    return (
        <EditorColorContainer>
            <ColorListHeader>
                <LabelText>Template Color</LabelText>
                <img onClick={() => handleShow({type: false})} src={closeIcon} alt="close" />
            </ColorListHeader>
            <ColorListWrapper>
                <ColorListItems onClick={() => handleShow({type: 'custom color', mode: ''})}>+</ColorListItems>
                {
                    colorTemplateListData.map(color => {
                        return (
                            <ColorListItems 
                                style={{backgroundColor: color.hex}} 
                                onClick={() => handleChangeColor({data: color.hex, style: color.hex})}
                            />  
                        )
                    })
                }
            </ColorListWrapper>
            <LabelText>Solid Color</LabelText>
            <ColorListWrapper>
                <ColorListItems 
                    onClick={() => handleChangeColor('transparent')}
                >
                    <img src={transparentIcon} alt="transparent icon" />
                </ColorListItems>
                {
                    colorSolidListData.map(color => {
                        return (
                            <ColorListItems 
                                style={{backgroundColor: color.hex}} 
                                onClick={() => handleChangeColor({data: color.hex, style: color.hex})}
                            />  
                        )
                    })
                }
            </ColorListWrapper>
            {
                items === 'background' ?
                <>
                    <LabelText>Gradient Color</LabelText>
                    <ColorListWrapper>
                        {
                            colorGradientListData.map(color => {
                                return (
                                    <ColorListItems 
                                        style={{background: color.value}} 
                                        onClick={() => handleChangeColor({data: [], style: color.value})}
                                    />  
                                )
                            })
                        }
                    </ColorListWrapper>
                </> :
                <></>
            }
        </EditorColorContainer>
    )
}