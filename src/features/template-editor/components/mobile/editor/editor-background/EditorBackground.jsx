// import { useState } from "react";
import { EditorBackgroundContainer } from "./EditorBackground.styled";
import { useSelector } from "react-redux";
// import EditorColorList from "../editor-color-list/EditorColorList";
import { useDispatchBackgroundStyle } from "../../../../hooks/useDispatchBackgroundStyle";
import Opacity from "./opacity/Opacity";
import Blur from "./effect/Effect";
import Radius from "./radius/Radius";
import Color from "./color/Color";
// import EditorColorPicker from "../editor-color-picker/EditorColorPicker";

export default function EditorBackground({editMode, componentsMode}){
    const styleData = useSelector(state => state.templateStyle.current);
    // const [showBackground, setShowBackground] = useState(false);
    // const [showBorder, setShowBorder] = useState(false);
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
        // borderSize, handleChangeBorderSize
    ] = useDispatchBackgroundStyle(styleData, editMode);
    // console.log(componentsMode);
    // const handleShowColorList = (e) => {
    //     if (e === 'border'){
    //         if (showBackground){
    //             setShowBackground(false);
    //             setShowBorder(true);
    //         } else {
    //             setShowBorder(true);
    //         }
    //         if (showBorder){
    //             setShowBorder(false);
    //         }
    //     } else if (e === 'background') {
    //         if (showBorder){
    //             setShowBorder(false);
    //             setShowBackground(true);
    //         } else {
    //             setShowBackground(true);
    //         }
    //         if (showBackground){
    //             setShowBackground(false);
    //         }
    //     } else {
    //         setShowBackground(false);
    //         setShowBorder(false);
    //     }
    // }
    return (
        <EditorBackgroundContainer>
            {/* {
                showBackground &&
                <EditorColorList 
                        handleChangeBackgroundColor={handleChangeBackgroundColor}
                        handleShow={handleShowColorList}
                        items={'background'}
                />
            } */}
            {
                componentsMode === 'Color' ?
                <Color 
                    backgroundColor={backgroundColor}
                    backgroundOpacity={backgroundOpacity}
                    backgroundColorDisplay={backgroundColorDisplay}
                    borderColor={borderColor}
                    handleChangeBackgroundColor={handleChangeBackgroundColor}
                    handleChangeBackgroundOpacity={handleChangeBackgroundOpacity}
                    handleChangeBorderColor={handleChangeBorderColor}
                    // showBackground={showBackground}
                    // showBorder={showBorder}
                />:
                <></>
            }
            {
                componentsMode === 'Opacity' ?
                <Opacity 
                    handleChangeBackgroundOpacity={handleChangeBackgroundOpacity}
                    backgroundOpacity={backgroundOpacity}

                /> :
                <></>
            }
            {
                componentsMode === 'Blur' ?
                <Blur 
                    handleChangeBackgroundBlur={handleChangeBackgroundBlur}
                    backgroundBlur={backgroundBlur}
                    backgroundEffect={backgroundEffect}
                    handleChangeEffectType={handleChangeEffectType}
                    handleAddBackgroundEffect={handleAddBackgroundEffect}
                    handleDeleteBackgroundEffect={handleDeleteBackgroundEffect}
                    handleChangeBackgroundEffectValue={handleChangeBackgroundEffectValue}
                />:
                <></>
            }
            {
                componentsMode === 'Radius' ?
                <Radius 
                    handleChangeBackgroundBorderRadius={handleChangeBackgroundBorderRadius}
                    backgroundBorderRadius={backgroundBorderRadius}
                />:
                <></>
            }
            
            {/* {
                showBorder &&
                <EditorColorList 
                        handleChangeColor={handleChangeBorderColor}
                        handleShow={handleShowColorList}
                        items={'background'}
                />
            } */}
        </EditorBackgroundContainer>
    )
}