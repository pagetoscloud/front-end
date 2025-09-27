import { ColorDisplay, ColorDisplayWrapper, ColorInputHex, ColorOpacity, HorizontalWrapper, InputEditorWrapper, LabelText, SelectEditorLarge } from "../../../../../assets/Global.styled";
import { BorderWrapper, ColorItems, ColorListWrapper } from "./Border.styled";
import { colorSolidListData } from "../../../../../../../data/ColorListData";
import { useState } from "react";

export default function Border({borderColor, borderSize, borderType, handleChangeBorderColor, handleChangeBorderSize, handleChangeBorderType}){
    const [showColorList, setShowColorList] = useState(false);
    const handleShowColorList = () => {
        console.log(showColorList);
        if (showColorList){
            setShowColorList(false);
        } else {
            setShowColorList(true);
        }
    }
    return (
        <BorderWrapper>
            <InputEditorWrapper>
                <LabelText>Border</LabelText>
                <SelectEditorLarge>
                    <select value={borderType} onChange={(e) => handleChangeBorderType(e.target.value)}>
                        <option>None</option>
                        <option>Solid</option>
                        <option>Dotted</option>
                        <option>Dashed</option>
                    </select>
                </SelectEditorLarge>
                <HorizontalWrapper>
                    {
                        borderSize !== 0 &&
                        <>
                            <ColorDisplayWrapper>
                                <ColorDisplay 
                                        style={{background: borderColor}}
                                        onClick={() => handleShowColorList()}
                                />
                                <ColorInputHex>
                                    <input type="text" value={borderColor}/>
                                </ColorInputHex>
                            </ColorDisplayWrapper>
                            <ColorOpacity>
                                <input 
                                    value={borderSize}
                                    min={1}
                                    onChange={(e) => handleChangeBorderSize(e.target.value)} 
                                    type='number'
                                />
                            </ColorOpacity>
                        </>
                    }
                </HorizontalWrapper>
                {
                    showColorList &&
                    <ColorListWrapper>
                        {
                            colorSolidListData.map(color => {
                                return( <ColorItems 
                                    style={{background: color.hex}}
                                    onClick={() => {
                                        handleShowColorList()
                                        handleChangeBorderColor({data: color.hex, style: color.hex})
                                    }}
                                />)
                            })
                        }
                    </ColorListWrapper>
                }
            </InputEditorWrapper> 
        </BorderWrapper>
    )
}