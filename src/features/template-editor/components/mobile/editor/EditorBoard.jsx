import EditorSetting from "./editor-setting/EditorSetting";
import TemplateList from "./editor-template-list/TemplateList";
import { CloseButton, EditorBoardContent, EditorBoardWrapper } from "./EditorBoard.styled";
import closeIcon from '../../../../../assets/images/close-icon.png';

// import Navigation from "./Navigation";
// import downArrow from '../../../../../assets/images/arrow-down.png';
import EditorProduct from "./editor-product/EditorProduct";
import EditorShare from "./editor-share/EditorShare";
import EditorBackground from "./editor-background/EditorBackground";
import EditorText from "./editor-text/EditorText";
import EditorImage from "./editor-image/EditorImage";
import EditorButton from "./editor-button/EditorButton";

export default function EditBoard({editMode, handleEditMode, handleChangeComponents, handleComponentsMode, componentsMode}){
    return (
        <EditorBoardWrapper>
            <EditorBoardContent>
                {
                    editMode === 'Setting' || editMode === 'Template' || editMode === 'Share' || editMode === 'Product' ?
                    <CloseButton onClick={() => handleEditMode(false)}>
                        <img src={closeIcon} alt='down arrow' />
                    </CloseButton> :
                    <CloseButton onClick={() => handleComponentsMode(false)}>
                        <img src={closeIcon} alt='down arrow' />
                    </CloseButton>
                }
                {
                    editMode.mode === 'Background' ?
                    <EditorBackground 
                        handleEditMode={handleEditMode}
                        editMode={editMode}
                        componentsMode={componentsMode}
                    />:
                    <></>
                }
                {
                    editMode.mode === 'Image' ?
                    <EditorImage
                        handleEditMode={handleEditMode}
                        editMode={editMode}
                        componentsMode={componentsMode}
                    />:
                    <></>
                }
                {
                    editMode.mode === 'Text' ?
                    <EditorText 
                        handleEditMode={handleEditMode}
                        editMode={editMode}
                        componentsMode={componentsMode}
                    />:
                    <></>
                }
                {
                    editMode.mode === 'Button' ?
                    <EditorButton
                        handleEditMode={handleEditMode}
                        editMode={editMode}
                        componentsMode={componentsMode}
                    />:
                    <></>
                }
                {
                    editMode === 'Setting' ?
                    <EditorSetting />:
                    <></>
                }
                                {
                    editMode === 'Share' ?
                    <EditorShare />:
                    <></>
                }
                {
                    editMode === 'Product' ?
                    <EditorProduct />:
                    <></>
                }
                {
                    editMode === 'Template' ?
                    <TemplateList 
                        handleChangeComponents={handleChangeComponents}
                    />:
                    <></>
                }
            </EditorBoardContent>
        </EditorBoardWrapper>
    )
}