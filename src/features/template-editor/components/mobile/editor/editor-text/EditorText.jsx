// import { useState } from "react";
import { useSelector } from "react-redux";
import Color from "./color/Color";
import { useDispatchTextStyle } from "../../../../hooks/useDispatchTextStyle";
import { EditorTextContainer } from "./EditorText.styled";
import Style from "./style/Style";
import Space from "./space/Space";
import Align from "./align/Align";

export default function EditorText({editMode, componentsMode}){
    const styleData = useSelector(state => state.templateStyle.current);
    const [
        fontColor, handleChangeFontColor,
        opacity, handleChangeFontOpacity,
        fontSize, handleChangeFontSize,
        fontFamily, handleChangeFontFamily,
        fontStyle, handleChangeFontStyle,
        fontLineHeight, handleChangeFontLineHeight,
        fontSpacing, handleChangeFontSpacing
    ] = useDispatchTextStyle(styleData, editMode);
    // const [show, setShow] = useState();
    // const handleShowColorList = () => {
    //     if (show){
    //         setShow(false);
    //     } else {
    //         setShow(true);
    //     }
    // }
    return (
        <EditorTextContainer>
            {
                componentsMode === 'Align' ?
                <Align/>:
                <></>
            }
            {
                componentsMode === 'Color' ?
                <Color
                    handleChangeFontColor={handleChangeFontColor}
                    handleChangeFontOpacity={handleChangeFontOpacity}
                    fontColor={fontColor}
                    opacity={opacity}
                />:
                <></>
            }
            {
                componentsMode === 'Style' ?
                <Style
                    handleChangeFontFamily={handleChangeFontFamily}
                    fontFamily={fontFamily}
                    handleChangeFontSize={handleChangeFontSize}
                    fontSize={fontSize}
                    handleChangeFontStyle={handleChangeFontStyle}
                    fontStyle={fontStyle}
                />:
                <></>
            }
            {
                componentsMode === 'Space' ?
                <Space 
                    handleChangeFontLineHeight={handleChangeFontLineHeight}
                    fontLineHeight={fontLineHeight}
                    handleChangeFontSpacing={handleChangeFontSpacing}
                    fontSpacing={fontSpacing}
                />:
                <></>
            }
        </EditorTextContainer>
    )
}