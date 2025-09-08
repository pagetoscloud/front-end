import EditBoard from "./EditBoard";
import { EditorContainer } from "./Editor.styled";
import Navigation from "./Navigation";

export default function Editor({editMode, handleEditMode, handleChangeComponents, linkPage, setLinkPage, handleChangeLinkPage, handleUploadImageCollection, handleLoginPopUp}) {
    return (
        <EditorContainer>
            <Navigation handleEditMode={handleEditMode} />
            {
                editMode &&
                <EditBoard 
                    handleLoginPopUp={handleLoginPopUp}
                    handleUploadImageCollection={handleUploadImageCollection}
                    editMode={editMode} 
                    handleEditMode={handleEditMode}
                    handleChangeComponents={handleChangeComponents}
                    linkPage={linkPage}
                    handleChangeLinkPage={handleChangeLinkPage}
                    setLinkPage={setLinkPage}
                />
            }
        </EditorContainer>
    )
}