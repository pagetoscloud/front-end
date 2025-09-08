import { colorGradientListData, colorSolidListData, colorTemplateListData } from "../../../../../../data/ColorListData";
import { EditorColorContainer, LabelText } from "../../../../assets/Global.styled";
import { 
        ColorListHeader, ColorListItems, 
        ColorListWrapper 
} from "./EditorColorList.styled";
import closeIcon from '../../../../../../assets/images/close-icon.png';
import transparentIcon from '../../../../../../assets/images/transparent-icon.png';

export default function EditorColorList({handleChangeBackgroundColor, handleShow, items}){
    return (
        <EditorColorContainer>
            <ColorListHeader>
                <LabelText>Template Color</LabelText>
                <img onClick={handleShow} src={closeIcon} alt="close" />
            </ColorListHeader>
            <ColorListWrapper>
                {
                    colorTemplateListData.map(color => {
                        return (
                            <ColorListItems 
                                style={{backgroundColor: color.hex}} 
                                onClick={() => handleChangeBackgroundColor({data: color.hex, style: color.hex})}
                            />  
                        )
                    })
                }
            </ColorListWrapper>
            <LabelText>Solid Color</LabelText>
            <ColorListWrapper>
                <ColorListItems 
                    onClick={() => handleChangeBackgroundColor('transparent')}
                >
                    <img src={transparentIcon} alt="transparent icon" />
                </ColorListItems>
                {
                    colorSolidListData.map(color => {
                        return (
                            <ColorListItems 
                                style={{backgroundColor: color.hex}} 
                                onClick={() => handleChangeBackgroundColor({data: color.hex, style: color.hex})}
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
                                        onClick={() => handleChangeBackgroundColor({data: color.value, style: color.value})}
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