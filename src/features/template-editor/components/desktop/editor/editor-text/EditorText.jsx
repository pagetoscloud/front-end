import {useState } from "react";
import { 
        ColorDisplay, ColorDisplayWrapper, 
        ColorInputHex, ColorOpacity, 
        HorizontalWrapper, InputEditorWrapper, 
        LabelText, SelectEditorLarge, 
        SelectEditorSmall, TitleHeader, 
        VerticalWrapper 
} from "../../../../assets/Global.styled";
import { EditorTextContainer, TextAlignItems, TextAlignWrapper } from "./EditorText.styled";
import leftArrow from '../../../../../../assets/images/left-arrow.png';
import {  useSelector } from "react-redux";
import EditorColorList from "../editor-color-list/EditorColorList";
import { useDispatchTextStyle } from "../../../../hooks/useDispatchTextStyle";
import EditorColorPicker from "../editor-color-picker/EditorColorPicker";
import leftAlign from '../../../../../../assets/images/align-left.png';
import centerAlign from '../../../../../../assets/images/align-center.png';
import rightAlign from '../../../../../../assets/images/align-right.png';

const textAlignList = [
    {
        id: 1,
        name: 'left',
        icon: leftAlign
    },
    {
        id: 2,
        name: 'center',
        icon: centerAlign
    },
    {
        id: 3,
        name: 'right',
        icon: rightAlign
    }
]

export default function EditorText({handleEditMode, editMode}){
    const styleData = useSelector(state => state.templateStyle.current);
    const [pickColor, setPickColor] = useState(false);
    const [
        fontColor, handleChangeFontColor,
        opacity, handleChangeFontOpacity,
        fontSize, handleChangeFontSize,
        fontFamily, handleChangeFontFamily,
        fontStyle, handleChangeFontStyle,
        fontLineHeight, handleChangeFontLineHeight,
        fontSpacing, handleChangeFontSpacing,
        textAlign, handleChangeTextAlign
    ] = useDispatchTextStyle(styleData, editMode);
    // const [show, setShow] = useState();
    console.log(styleData);
    const handleShowColorPicker = (e) => {
        setPickColor(e.type);
    }
    return (
        <EditorTextContainer>
            {
                pickColor === 'color list' &&
                <EditorColorList 
                    handleChangeColor={handleChangeFontColor}
                    handleShow={handleShowColorPicker}
                    items={'color'}
                />
            }
            {
                pickColor === 'custom color' &&
                <EditorColorPicker
                    handleShow={handleShowColorPicker}
                    handleChangeColor={handleChangeFontColor}
                    currentColor={fontColor}
                    mode={'text'}
                />
            }
            <TitleHeader>
                <img 
                    onClick={() => handleEditMode(false)} 
                    src={leftArrow} 
                    alt="close icon" 
                />
                <h3>Text</h3>
            </TitleHeader>
            <InputEditorWrapper>
                <LabelText>Font Color</LabelText>
                <HorizontalWrapper>
                    <ColorDisplayWrapper>
                        <ColorDisplay 
                            style={{backgroundColor: fontColor}}
                            onClick={() => handleShowColorPicker({type: 'color list', mode: 'font'})}
                        />
                        <ColorInputHex>
                            <input type='text' value={fontColor} />
                        </ColorInputHex>
                    </ColorDisplayWrapper>
                    <ColorOpacity>
                        <input 
                            type="number" 
                            value={opacity} 
                            onChange={(e) => handleChangeFontOpacity(e.target.value)} 
                            max={100}   
                        />
                    </ColorOpacity>
                </HorizontalWrapper>
            </InputEditorWrapper>
            <InputEditorWrapper>
                <LabelText>Font Family</LabelText>
                <SelectEditorLarge>
                    <select value={fontFamily} onChange={(e) => handleChangeFontFamily(e.target.value)}>
                        <option>Lato</option>
                        <option>Noto Sans</option>
                        <option>Nunito</option>
                        <option>Open Sans</option>
                        <option>Orbitron</option>
                        <option>Roboto</option>
                        <option>Sour Gummy</option>
                    </select>
                </SelectEditorLarge>
                <HorizontalWrapper>
                    <VerticalWrapper>
                        <LabelText>Size</LabelText>
                        <SelectEditorSmall>
                            <select value={fontSize} onChange={(e) => handleChangeFontSize(e.target.value)}>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>20</option>
                                <option>22</option>
                                <option>24</option>
                                <option>26</option>
                            </select>
                        </SelectEditorSmall>
                    </VerticalWrapper>
                    <VerticalWrapper>
                        <LabelText>Style</LabelText>
                        <SelectEditorSmall>
                            <select value={fontStyle} onChange={(e) => handleChangeFontStyle(e.target.value)}>
                                <option value={700}>Bold</option>
                                <option value={500}>Medium</option>
                                <option value={400}>Normal</option>
                                <option value={300}>Thin</option>
                                <option value={'underline'}>Underline</option>
                            </select>
                        </SelectEditorSmall>
                    </VerticalWrapper>
                </HorizontalWrapper>
                <HorizontalWrapper>
                <VerticalWrapper>
                        <LabelText>Line Height</LabelText>
                        <SelectEditorSmall>
                            <select value={fontLineHeight} onChange={(e) => handleChangeFontLineHeight(e.target.value)}>
                                <option>Normal</option>
                                <option>0</option>
                                <option>0.5</option>
                                <option>1</option>
                                <option>1.5</option>
                                <option>2</option>
                                <option>2.5</option>
                                <option>3</option>
                            </select>
                        </SelectEditorSmall>
                    </VerticalWrapper>                    
                    <VerticalWrapper>
                        <LabelText>Line Spacing</LabelText>
                        <SelectEditorSmall>
                            <select value={fontSpacing} onChange={(e) => handleChangeFontSpacing(e.target.value)}>
                                <option>Normal</option>
                                <option>0.5</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </SelectEditorSmall>
                    </VerticalWrapper>
                </HorizontalWrapper>
            </InputEditorWrapper>
            <InputEditorWrapper>
                <LabelText>Text Align</LabelText>
                <TextAlignWrapper>
                    {
                        textAlignList.map(item => {
                            return (
                                <TextAlignItems key={item.id} style={textAlign === item.name ? {boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.4) inset'} : {}}>
                                    <img
                                        onClick={() => handleChangeTextAlign(item.name)}
                                        src={item.icon} 
                                        alt={item.name}
                                    />
                                </TextAlignItems>
                            )
                        })
                    }
                </TextAlignWrapper>
            </InputEditorWrapper>
        </EditorTextContainer>
    )
}