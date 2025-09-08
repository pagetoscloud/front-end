import { useState } from "react";
import { ColorDisplay, ColorDisplayWrapper, ColorInputHex, ColorOpacity, HorizontalWrapper, InputEditorWrapper, InputRangeEditor, LabelText, SelectEditorLarge, TitleHeader } from "../../../../assets/Global.styled";
import { EditorBackgroundContainer } from "./EditorBackground.styled";
import leftArrow from '../../../../../../assets/images/left-arrow.png';
import { useSelector } from "react-redux";
import EditorColorList from "../editor-color-list/EditorColorList";
import { useDispatchBackgroundStyle } from "../../../../hooks/useDispatchBackgroundStyle";
import EditorColorPicker from "../editor-color-picker/EditorColorPicker";
import { EffectTemplateEditor } from "../../../../../../components";

export default function EditorBackground({handleEditMode, editMode}){
    const styleData = useSelector(state => state.templateStyle.current);
    const contentData = useSelector(state => state.templateContent);
    console.log(contentData);
    console.log(styleData[editMode.component].data.circle);
    // const backgroundData = styleData.itemDetails.data.background.effect;
    const [pickColor, setPickColor] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    const [showBorder, setShowBorder] = useState(false);
    const [
        backgroundColor, handleChangeBackgroundColor,
        backgroundColorDisplay, 
        backgroundOpacity, handleChangeBackgroundOpacity,
        backgroundBlur, handleChangeBackgroundBlur,
        backgroundBorderRadius, handleChangeBackgroundBorderRadius,
        backgroundEffect, handleAddBackgroundEffect,
        handleChangeBackgroundEffectValue, handleDeleteBackgroundEffect,
        handleChangeEffectType,
        borderColor, handleChangeBorderColor,
        borderSize, handleChangeBorderSize,
        borderType, handleChangeBorderType
    ] = useDispatchBackgroundStyle(styleData, editMode);
    const handleShowColorList = (e) => {
        setPickColor(e.type);
        if (e.type === 'color list' && e.mode === 'background'){
            setShowBackground(true);
            setShowBorder(false);
        } else if (e.type === 'color list' && e.mode === 'border'){
            setShowBorder(true);            
            setShowBackground(false);
        } else if (e.type === 'custom color'){
            
        } else {
            setShowBackground(false);  
            setShowBorder(false);
            setPickColor(false);
        }
    }
    const handleShowCustomColor = (e) => {
        setPickColor(e);
    }
    return (
        <EditorBackgroundContainer>
            {
                pickColor === 'color list' &&
                <EditorColorList 
                    handleShow={handleShowColorList}
                    handleChangeColor={showBackground ? handleChangeBackgroundColor : handleChangeBorderColor}
                    handleShowCustomColor={handleShowCustomColor}
                    items={showBackground ? 'background' : 'border'}
                /> 
            }
            
            {
                pickColor === 'custom color' &&
                <EditorColorPicker 
                    handleShow={handleShowColorList}
                    handleChangeColor={showBorder? handleChangeBorderColor : handleChangeBackgroundColor}
                    currentColor={showBackground ? backgroundColor : borderColor}
                    mode={showBackground ? 'background' : 'border'}
                />
            }
            <TitleHeader>
                <img onClick={() => handleEditMode(false)} src={leftArrow} alt="close icon" />
                <h3>Background</h3>
            </TitleHeader>
            <InputEditorWrapper>
                <LabelText>Color</LabelText>
                <HorizontalWrapper>
                    <ColorDisplayWrapper>
                        <ColorDisplay 
                                style={{background: backgroundColorDisplay}}
                                onClick={() => handleShowColorList({type: 'color list', mode:'background'})}
                        />
                        <ColorInputHex>
                            {
                                backgroundColor.length === 7 ?
                                <input type="text" value={backgroundColor}/>:
                                <input type="text" value={'Gradient'} disabled/>
                            }
                        </ColorInputHex>
                    </ColorDisplayWrapper>
                    <ColorOpacity>
                        <input 
                            type="text" 
                            value={'100%'}
                        />
                    </ColorOpacity>
                </HorizontalWrapper>
            </InputEditorWrapper>
            <InputEditorWrapper>
                <LabelText>Border</LabelText>
                <SelectEditorLarge>
                    <select value={borderType} onChange={(e) => handleChangeBorderType(e.target.value)}>
                        <option value={'none'}>none</option>
                        <option value={'solid'}>Solid</option>
                        <option value={'dotted'}>Dotted</option>
                        <option value={'dashed'}>Dashed</option>
                    </select>
                </SelectEditorLarge>
                <HorizontalWrapper>
                {
                    borderSize !== 0 &&
                    <>
                        <ColorDisplayWrapper>
                            <ColorDisplay 
                                    style={{background: borderColor}}
                                    onClick={() => handleShowColorList({type: 'color list', mode:'border'})}
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
            </InputEditorWrapper>

            <InputEditorWrapper>
                <HorizontalWrapper>
                    <LabelText>Effect</LabelText>
                    <p onClick={() => handleAddBackgroundEffect()}>+</p>
                </HorizontalWrapper>
                {/* <SelectEditorLarge style={{marginBottom: 20}}>
                    <select 
                        onChange={(e) => handleChangeBackgroundBlur(e.target.value)}
                    >
                        <option>none</option>
                        <option>Blur</option>
                        <option>Backdrop Blur</option>
                    </select>
                </SelectEditorLarge> */}
                {
                    backgroundEffect.map((data, index) => {
                        console.log(data);
                        return (
                            <EffectTemplateEditor 
                                listEffect={backgroundEffect}
                                effectProps={data}
                                handleChangeEffectType={handleChangeEffectType}
                                handleDeleteEffect={handleDeleteBackgroundEffect}
                                handleChangeEffectValue={handleChangeBackgroundEffectValue}
                            />
                        )
                    })
                }
                {/* <HorizontalWrapper> */}
                {
                    backgroundBlur !== 0 &&
                    <>
                        <HorizontalWrapper>
                            <LabelText>Size</LabelText>
                            <p>{backgroundBlur} px</p>
                        </HorizontalWrapper>
                        <InputRangeEditor>
                            <input 
                                min={0}
                                max={10}
                                type="range" 
                                value={backgroundBlur}
                                onChange={(e) => handleChangeBackgroundBlur(e.target.value)}
                            />
                        </InputRangeEditor>
                    </>
                }
                {/* </HorizontalWrapper> */}
            </InputEditorWrapper>
            <InputEditorWrapper>
                <HorizontalWrapper>
                    <LabelText>Opacity</LabelText>
                    <p>{backgroundOpacity}%</p>
                </HorizontalWrapper>
                <InputRangeEditor>
                    <input 
                        onChange={(e) => handleChangeBackgroundOpacity(e.target.value)} 
                        type="range" 
                        value={backgroundOpacity}
                    />
                </InputRangeEditor>
            </InputEditorWrapper>            
            <InputEditorWrapper>
                <HorizontalWrapper>
                    <LabelText>Border Radius</LabelText>
                    <p>{backgroundBorderRadius} %</p>
                </HorizontalWrapper>
                <InputRangeEditor>
                    <input 
                        type="range" 
                        value={backgroundBorderRadius}
                        onChange={(e) => handleChangeBackgroundBorderRadius(e.target.value)}
                    />
                </InputRangeEditor>
            </InputEditorWrapper>
        </EditorBackgroundContainer>
    )
}