import { useState } from "react";
import { colorGradientListData, colorSolidListData, colorTemplateListData } from "../../../../../../../data/ColorListData";
import { LabelText, SelectEditorLargeMobile } from "../../../../../assets/Global.styled";
import EditorColorPicker from "../../editor-color-picker/EditorColorPicker";
import { ColorContent, ColorHeader, ColorListItems, ColorListWrapper, ColorWrapper } from "./Color.styled";

export default function Color({backgroundColor, handleChangeBackgroundColor, fontColor, handleChangeFontColor}){
    const [customColor, setCustomColor] = useState(false);
    const [colorType, setColorType] = useState('Background Color');
    // console.log(colorType);
    const handleCustomColor = () => {
        if (customColor){
            setCustomColor(false);
        } else {
            setCustomColor(true);
        }
    }
    // const [currentColor, setCurrentColor] = useState(backgroundColor);
    const currentColor = colorType === 'Background Color' ? backgroundColor : fontColor;
    // const handleChangeColorType = (e) => {
    //     setCurrentColor({type: 'gradient', gradientType: '90deg', color: [ {r: 0, g: 0, b: 0, a: 1}, {r: 255, g: 255, b: 255, a: 1}]})
    //     if (e === 'Gradient'){
    //     } else {
    //         setCurrentColor('#000000')
    //     }
    //     handleCustomColor();
    // }
    const handleChangeColorType = (e) => {
        setColorType(e);
    }
    const handleChangeColor = (e) => {
        if (colorType === 'Background Color'){
            handleChangeBackgroundColor(e);
        } else {
            handleChangeFontColor(e);
        }
    } 
    return(
        <ColorWrapper>
            {
                customColor === false ?
                <>
                    <ColorHeader>
                        <SelectEditorLargeMobile>
                            <select value={colorType} onChange={(e) => handleChangeColorType(e.target.value)}>
                                <option>Background Color</option>
                                <option>Font Color</option>
                            </select>
                        </SelectEditorLargeMobile>
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
                                            onClick={() => handleChangeColor({data: color.hex, style: color.hex})}
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
                                            onClick={() => handleChangeColor({data: color.hex, style: color.hex})}
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
                                            onClick={() => handleChangeColor({data: color.value, style: color.value})}
                                        />  
                                    )
                                })
                            }
                        </ColorListWrapper>
                    </ColorContent> 
                </>:
                <EditorColorPicker
                    handleShow={handleCustomColor}
                    handleChangeColor={handleChangeColor}
                    currentColor={currentColor}
                    mode={'background'}
                /> 
            }
        </ColorWrapper>
    )
}