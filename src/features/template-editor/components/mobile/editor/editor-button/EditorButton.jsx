// import { useState } from "react";
import { EditorBackgroundContainer } from "./EditorButton.styled";
import { useDispatch, useSelector } from "react-redux";
// import EditorColorList from "../editor-color-list/EditorColorList";
import Opacity from "./opacity/Opacity";
// import Blur from "./type/Type";
import Radius from "./radius/Radius";
import Color from "./color/Color";
import { useEffect, useState } from "react";
import { useDispatchButton } from "../../../../hooks/useDispatchButton";
import { changeButton } from "../../../../templateContentSlice";
import Type from "./type/Type";
// import EditorColorPicker from "../editor-color-picker/EditorColorPicker";

export default function EditorButton({editMode, componentsMode}){
    const styleData = useSelector(state => state.templateStyle.current);
    const contentData = useSelector(state => state.templateContent);
    // const [showBackground, setShowBackground] = useState(false);
    // const [showBorder, setShowBorder] = useState(false);
    const [buttonType, setButtonType] = useState(contentData[editMode.component].buttonList[editMode.buttonIndex].type || 'link');
    const [link, setLink] = useState(contentData[editMode.component].buttonList[editMode.buttonIndex].link || '');
    const [page, setPage] = useState(contentData[editMode.component].buttonList[editMode.buttonIndex].page || 'page one');
    const dispatch = useDispatch();
    const {
        background, handleChangeBackgroundColor,
        color, handleChangeFontColor,
        borderRadius, handleChangeBorderRadius,
        opacity, handleChangeOpacity
    } = useDispatchButton(styleData, editMode);
    const handleChangeLink = (value) => {
        setLink(value);
        dispatch(changeButton({
            component: 'connector',
            id: editMode.id,
            type: 'link',
            value: value,
        }))
    }
    const handleChangePage = (value) => {
        setPage(value);
        dispatch(changeButton({
            component: 'connector',
            id: editMode.id,
            type: 'page',
            value: value,
        }))
    }
    const handleChangeButtonType = (value) => {
        setButtonType(value);
        dispatch(changeButton({
            component: 'connector',
            id: editMode.id,
            type: 'type',
            value: value,
        }))
    };
    // const [pickColor, setPickColor] = useState(false);
    // const [showBackground, setShowBackground] = useState(false);
    // const [showFont, setShowFont] = useState(false);
    // const handleShowColorList = (e) => {
    //     setPickColor(e.type);
    //     if (e.type === 'color list' && e.mode === 'background'){
    //         setShowBackground(true);
    //         setShowFont(false);
    //     } else if (e.type === 'color list' && e.mode === 'font'){
    //         setShowFont(true);            
    //         setShowBackground(false);
    //     } else if (e.type === 'custom color'){
            
    //     } else {
    //         setShowBackground(false);  
    //         setShowFont(false);
    //         setPickColor(false);
    //     }
    // }
    // const handleShowCustomColor = (e) => {
    //     setPickColor(e);
    // }
    useEffect(() => {
        setButtonType(contentData[editMode.component].buttonList[editMode.buttonIndex].type);
        setLink(contentData[editMode.component].buttonList[editMode.buttonIndex].link);
        setPage(contentData[editMode.component].buttonList[editMode.buttonIndex].page);
    }, [editMode, setButtonType, setPage, contentData]);
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
                    backgroundColor={background}
                    handleChangeBackgroundColor={handleChangeBackgroundColor}
                    fontColor={color}
                    handleChangeFontColor={handleChangeFontColor}
                />:
                <></>
            }
            {
                componentsMode === 'Opacity' ?
                <Opacity 
                    handleChangeOpacity={handleChangeOpacity}
                    opacity={opacity}

                /> :
                <></>
            }
            {
                componentsMode === 'Type' ?
                <Type
                    buttonType={buttonType}
                    handleChangeButtonType={handleChangeButtonType}
                    link={link}
                    handleChangeLink={handleChangeLink}
                    page={page}
                    handleChangePage={handleChangePage}
                />:
                <></>
            }
            {
                componentsMode === 'Radius' ?
                <Radius 
                    handleChangeBorderRadius={handleChangeBorderRadius}
                    borderRadius={borderRadius}
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