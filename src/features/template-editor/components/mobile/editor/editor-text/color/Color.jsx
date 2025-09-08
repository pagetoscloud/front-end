import { useState } from "react";
import { colorSolidListData, colorTemplateListData } from "../../../../../../../data/ColorListData";
import { ColorInputHex, LabelText, SelectEditorSmall } from "../../../../../assets/Global.styled";
import { 
    ColorContent, ColorHeader, 
    ColorListItems, ColorListWrapper, 
    ColorWrapper 
} from "./Color.styled";
import EditorColorPicker from "../../editor-color-picker/EditorColorPicker";

export default function Color({handleChangeFontColor, fontColor}){
    const [customColor, setCustomColor] = useState(false);
    const handleCustomColor = () => {
        if (customColor){
            setCustomColor(false);
        } else {
            setCustomColor(true);
        }
    }
    return(
        <ColorWrapper>
            {
                customColor === false ?
                <>
                    <ColorHeader>
                        <SelectEditorSmall style={{marginTop: 0}}>
                            <select>
                                <option>Solid</option>
                                <option>Gradient</option>
                            </select>
                        </SelectEditorSmall>
                        <ColorListItems style={{background: fontColor, marginTop: 0}} />
                        <ColorInputHex>
                            <input type="text" value={fontColor} onChange={(e) => handleChangeFontColor(e.target.value)} />
                        </ColorInputHex>
                        <ColorInputHex >
                            <input style={{textAlign: 'center'}} type="text" />
                        </ColorInputHex>
                    </ColorHeader>
                    <ColorContent>
                        <LabelText style={{margin: '10px 5%'}}>Template Color</LabelText>
                        <ColorListWrapper>
                            <ColorListItems onClick={handleCustomColor}>+</ColorListItems>
                            {
                                colorTemplateListData.map(color => {
                                    return (
                                        <ColorListItems 
                                            style={{backgroundColor: color.hex}} 
                                            onClick={() => handleChangeFontColor({data: color.hex, style: color.hex})}
                                        />  
                                    )
                                })
                            }
                        </ColorListWrapper>
                        <LabelText style={{margin: '10px 5%'}}>Solid Color</LabelText>
                        <ColorListWrapper>
                            {
                                colorSolidListData.map(color => {
                                    return (
                                        <ColorListItems 
                                            style={{backgroundColor: color.hex}} 
                                            onClick={() => handleChangeFontColor({data: color.hex, style: color.hex})}
                                        />  
                                    )
                                })
                            }
                        </ColorListWrapper>            
                    </ColorContent>
                </>:
                <EditorColorPicker 
                    handleShow={handleCustomColor}
                    handleChangeColor={handleChangeFontColor}
                    currentColor={fontColor}
                    mode={'text'}
                />
            }
        </ColorWrapper>
    )
}