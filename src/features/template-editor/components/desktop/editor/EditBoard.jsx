// import { useWindowSize } from "../../../../../hooks/useWindowSize";
import { EditBoardContainer } from "./EditBoard.styled";
import EditorBackground from "./editor-background/EditorBackground";
import EditorImage from "./editor-image/EditorImage";
import EditorText from "./editor-text/EditorText";
import EditorSetting from "./editor-setting/EditorSetting";
import EditorShare from "./editor-share/EditorShare";
import EditorProduct from "./editor-product/EditorProduct";
import EditorNewProduct from "./editor-new-product/EditorNewProduct";
import TemplateList from "./template-list/TemplateList";
import EditorButton from "./editor-button/EditorButton";

export default function EditBoard({editMode, handleEditMode, handleChangeComponents, linkPage, setLinkPage, handleChangeLinkPage, handleShowColorList, handleUploadImageCollection, handleLoginPopUp}) {
    return (
        <EditBoardContainer>
            {
                editMode.mode === 'Background'?
                <EditorBackground 
                    handleEditMode={handleEditMode} 
                    editMode={editMode}
                    handleShowColorList={handleShowColorList}
                    /> : 
                    <></>
            }            
            {
                editMode.mode === 'Image'? 
                <EditorImage 
                    handleEditMode={handleEditMode} 
                    handleUploadImageCollection={handleUploadImageCollection}
                    editMode={editMode}
                    handleLoginPopUp={handleLoginPopUp}
                /> : 
                <></>
            }
            {
                editMode.mode === 'Text'? 
                <EditorText 
                    handleEditMode={handleEditMode} 
                    editMode={editMode}

                /> : 
                <></>
            }
            {
                editMode === 'Setting'? 
                <EditorSetting 
                    handleEditMode={handleEditMode} 
                    editMode={editMode}

                /> : 
                <></>
            }
            {
                editMode === 'Template' ?
                <TemplateList 
                    handleChangeComponents={handleChangeComponents}
                    handleEditMode={handleEditMode} 
                /> :
                <></>
            }
            {
                editMode === 'Share'? 
                <EditorShare 
                    handleEditMode={handleEditMode} 
                    editMode={editMode}
                    linkPage={linkPage}
                    setLinkPage={setLinkPage}
                    handleChangeLinkPage={handleChangeLinkPage}
                    handleLoginPopUp={handleLoginPopUp}
                /> : 
                <></>
            }
            {
                editMode === 'Product'? 
                <EditorProduct 
                    handleEditMode={handleEditMode} 
                    editMode={editMode}

                /> : 
                <></>
            }
            {
                editMode === 'New Product'? 
                <EditorNewProduct 
                    handleEditMode={handleEditMode} 
                    editMode={editMode}
                /> : 
                <></>
            }
            {
                editMode.mode === 'Button'?
                <EditorButton
                    handleEditMode={handleEditMode} 
                    editMode={editMode}
                    handleShowColorList={handleShowColorList}
                    /> : 
                    <></>
            }  
        </EditBoardContainer>
    );
};