import { useState } from "react";
import { colorGradientListData, colorSolidListData, colorTemplateListData } from "../../../../../../../data/ColorListData";
import { ColorInputHex, LabelText, SelectEditorSmall } from "../../../../../assets/Global.styled";
import EditorColorPicker from "../../editor-color-picker/EditorColorPicker";
import { ColorContent, ColorHeader, ColorListItems, ColorListWrapper, ColorWrapper } from "./Color.styled";

export default function Color({handleChangeBackgroundColor, handleChangeBackgroundOpacity, backgroundColorDisplay, backgroundColor, backgroundOpacity}){
    const [customColor, setCustomColor] = useState(false);
    const handleCustomColor = () => {
        if (customColor){
            setCustomColor(false);
        } else {
            setCustomColor(true);
        }
    }
    const [currentColor, setCurrentColor] = useState(backgroundColor);
    const handleChangeColorType = (e) => {
        if (e === 'Gradient'){
            setCurrentColor({type: 'gradient', gradientType: '90deg', color: [ {r: 0, g: 0, b: 0, a: 1}, {r: 255, g: 255, b: 255, a: 1}]})
        } else {
            setCurrentColor('#000000')
        }
        handleCustomColor();
    }
    return(
        <ColorWrapper>
            {
                customColor === false ?
                <>
                    <ColorHeader>
                        <SelectEditorSmall style={{marginTop: 0}}>
                            <select value={backgroundColor.length === 7 ? 'Solid' : 'Gradient'} onChange={(e) => handleChangeColorType(e.target.value)}>
                                <option>Solid</option>
                                <option>Gradient</option>
                            </select>
                        </SelectEditorSmall>
                        <ColorListItems 
                            onClick={handleCustomColor}
                            style={{background: backgroundColorDisplay, marginTop: 0}} 
                        />
                        <ColorInputHex>
                            <input type="text" value={backgroundColor.length === 7 ? backgroundColor : 'Gradient'} onChange={(e) => handleChangeBackgroundColor(e.target.value)} />
                        </ColorInputHex>
                        <ColorInputHex >
                            <input style={{textAlign: 'center'}} type="text" value={backgroundOpacity} onChange={(e) => handleChangeBackgroundOpacity(e.target.value)} />
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
                                            onClick={() => handleChangeBackgroundColor({data: color.hex, style: color.hex})}
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
                                            onClick={() => handleChangeBackgroundColor({data: color.hex, style: color.hex})}
                                        />  
                                    )
                                })
                            }
                        </ColorListWrapper>
                        <LabelText style={{margin: '10px 5%'}}>Gradient Color</LabelText>
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
                    </ColorContent> 
                </>:
                <EditorColorPicker
                    handleShow={handleCustomColor}
                    handleChangeColor={handleChangeBackgroundColor}
                    currentColor={currentColor}
                    mode={'background'}
                /> 
            }
        </ColorWrapper>
    )
}