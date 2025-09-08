import { useEffect, useState } from "react";
import { 
    ColorDisplay, ColorDisplayWrapper, 
    ColorInputHex, ColorOpacity, 
    HorizontalWrapper, InputEditorLarge, 
    InputEditorWrapper, 
    InputRangeEditor, 
    LabelText, SelectEditorLarge, TitleHeader 
} from "../../../../assets/Global.styled";
import { EditorBackgroundContainer } from "./EditorButton.styled";
import leftArrow from '../../../../../../assets/images/left-arrow.png';
import { useDispatch, useSelector } from "react-redux";
import EditorColorList from "../editor-color-list/EditorColorList";
// import { useDispatchBackgroundStyle } from "../../../../hooks/useDispatchBackgroundStyle";
import EditorColorPicker from "../editor-color-picker/EditorColorPicker";
// import { EffectTemplateEditor } from "../../../../../../components";
import { useDispatchButton } from "../../../../hooks/useDispatchButton";
import { changeButton } from "../../../../templateContentSlice";

export default function EditorButton({handleEditMode, editMode}){
    const styleData = useSelector(state => state.templateStyle.current);
    const contentData = useSelector(state => state.templateContent);
    // const buttonList = contentData[editMode.component].buttonList;
    const buttonList = contentData?.[editMode?.component]?.buttonList || [];
// Initial state
const [buttonType, setButtonType] = useState(
  buttonList[editMode?.buttonIndex]?.type || 'link'
);
const [link, setLink] = useState(
  buttonList[editMode?.buttonIndex]?.link || ''
);
const [page, setPage] = useState(
  buttonList[editMode?.buttonIndex]?.page || 'page one'
);
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
            component: editMode.component,
            id: editMode.id,
            type: 'link',
            value: value,
        }))
    }
    const handleChangePage = (value) => {
        setPage(value);
        dispatch(changeButton({
            component: editMode.component,
            id: editMode.id,
            type: 'page',
            value: value,
        }))
    }
    const handleChangeButtonType = (value) => {
        setButtonType(value);
        dispatch(changeButton({
            component: editMode.component,
            id: editMode.id,
            type: 'type',
            value: value,
        }))
    };
    const [pickColor, setPickColor] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    const [showFont, setShowFont] = useState(false);
    const handleShowColorList = (e) => {
        setPickColor(e.type);
        if (e.type === 'color list' && e.mode === 'background'){
            setShowBackground(true);
            setShowFont(false);
        } else if (e.type === 'color list' && e.mode === 'font'){
            setShowFont(true);            
            setShowBackground(false);
        } else if (e.type === 'custom color'){
            
        } else {
            setShowBackground(false);  
            setShowFont(false);
            setPickColor(false);
        }
    }
    const handleShowCustomColor = (e) => {
        setPickColor(e);
    }
    useEffect(() => {
        const currentButton = contentData?.[editMode?.component]?.buttonList?.[editMode?.buttonIndex];

        if (!currentButton) {
            handleEditMode(false); // nothing selected
            return;
        }

        setButtonType(currentButton.type || 'link');
        setLink(currentButton.link || '');
        setPage(currentButton.page || 'page one');
    }, [editMode, contentData, handleEditMode]);
    // useEffect(() => {
    //     if (contentData[editMode.component].buttonList.length === 0) {
    //         handleEditMode(false);
    //     } else {
    //         setButtonType(contentData[editMode.component].buttonList[editMode.buttonIndex].type);
    //         setLink(contentData[editMode.component].buttonList[editMode.buttonIndex].link);
    //         setPage(contentData[editMode.component].buttonList[editMode.buttonIndex].page);
    //     }
    // }, [editMode, setButtonType, setPage, contentData, handleEditMode]);
    return (
        <EditorBackgroundContainer>
            {
                pickColor === 'color list' &&
                <EditorColorList 
                    handleShow={handleShowColorList}
                    handleChangeColor={showBackground ? handleChangeBackgroundColor : handleChangeFontColor}
                    handleShowCustomColor={handleShowCustomColor}
                    items={showBackground ? 'background' : 'text'}
                /> 
            }
            
            {
                pickColor === 'custom color' &&
                <EditorColorPicker 
                    handleShow={handleShowColorList}
                    handleChangeColor={showFont? handleChangeFontColor : handleChangeBackgroundColor}
                    currentColor={showFont ? color : background}
                    mode={showBackground ? 'background' : 'text'}
                />
            }
            <TitleHeader>
                <img onClick={() => handleEditMode(false)} src={leftArrow} alt="close icon" />
                <h3>Button</h3>
            </TitleHeader>
            <InputEditorWrapper>
                <LabelText>Button Type</LabelText>
                <SelectEditorLarge>
                    <select value={buttonType} onChange={(e) => handleChangeButtonType(e.target.value)}>
                        <option value={'link'}>Link</option>
                        <option value={'back'}>Back</option>
                        <option value={'change page'}>Change Page</option>
                    </select>
                </SelectEditorLarge>
                {
                    buttonType === 'link' &&
                    <>
                        <LabelText>Input Link</LabelText>
                        <InputEditorLarge>
                            <input 
                                onChange={(e) => handleChangeLink(e.target.value)}
                                type="text" 
                                placeholder="Button Name" 
                                value={link}
                            />
                        </InputEditorLarge>
                    </>
                }
                {
                    buttonType === 'change page' &&
                    <>
                        <LabelText>Choose Page</LabelText>
                        <SelectEditorLarge>
                            <select value={page} onChange={(e) => handleChangePage(e.target.value)}>
                                <option value={'page one'}>Main Page</option>
                                <option value={'page two'}>Product Details</option>
                                <option value={'page three'}>Connector Page</option>
                            </select>
                        </SelectEditorLarge>
                    </>
                }
                {/* <HorizontalWrapper>
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
                </HorizontalWrapper> */}
            </InputEditorWrapper>
            <InputEditorWrapper>
                <LabelText>Background color</LabelText>
                <HorizontalWrapper>
                    <ColorDisplayWrapper>
                        <ColorDisplay 
                                style={{background: background}}
                                onClick={() => handleShowColorList({type: 'color list', mode:'background'})}
                        />
                        <ColorInputHex>
                            {
                                background.length === 7 ?
                                <input type="text" value={background}/>:
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
                <LabelText>Font Color</LabelText>
                <HorizontalWrapper>
                    <ColorDisplayWrapper>
                        <ColorDisplay 
                                style={{background: color}}
                                onClick={() => handleShowColorList({type: 'color list', mode:'font'})}
                        />
                        <ColorInputHex>
                            {
                                background.length === 7 ?
                                <input type="text" value={color}/>:
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
                <HorizontalWrapper>
                    <LabelText>Opacity</LabelText>
                    <p>{opacity}%</p>
                </HorizontalWrapper>
                <InputRangeEditor>
                    <input 
                        onChange={(e) => handleChangeOpacity(e.target.value)} 
                        type="range" 
                        value={opacity}
                    />
                </InputRangeEditor>
            </InputEditorWrapper>            
            <InputEditorWrapper>
                <HorizontalWrapper>
                    <LabelText>Border Radius</LabelText>
                    <p>{borderRadius} px</p>
                </HorizontalWrapper>
                <InputRangeEditor>
                    <input 
                        type="range" 
                        value={borderRadius}
                        onChange={(e) => handleChangeBorderRadius(e.target.value)}
                    />
                </InputRangeEditor>
            </InputEditorWrapper>
        </EditorBackgroundContainer>
    )
}