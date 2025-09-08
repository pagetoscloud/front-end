import EditBoard from "./EditorBoard";
import { EditorWrapper } from "./Editor.styled";
import Navigation from "./Navigation";
import NavigationBackground from "./editor-background/NavigationBackground";
import { useState } from "react";
import NavigationText from "./editor-text/NavigationText";
import NavigationImage from "./editor-image/NavigationImage";
import NavigationButton from "./editor-button/NavigationButton";

export default function Editor({editMode, handleEditMode, handleChangeComponents}){
    const [componentsMode, setComponentsMode] = useState(false);
    const handleComponentsMode = (value) => {
        setComponentsMode(value);
    }
    return (
        <EditorWrapper>
            {
                editMode === 'Setting' || editMode === 'Template' || editMode === 'Share' || editMode === 'Product' ?
                <EditBoard 
                    editMode={editMode} 
                    handleEditMode={handleEditMode}
                    handleChangeComponents={handleChangeComponents}
                    componentsMode={componentsMode}
                /> :
                <></>
            }
            {
                componentsMode ?
                <EditBoard 
                    editMode={editMode}
                    handleEditMode={handleEditMode}
                    handleChangeComponents={handleChangeComponents}
                    handleComponentsMode={handleComponentsMode}
                    componentsMode={componentsMode}
                /> :
                <></>
            }
            {
                editMode.mode === 'Background' ?
                <NavigationBackground 
                    handleComponentsMode={handleComponentsMode}
                    handleEditMode={handleEditMode}
                    componentsMode={componentsMode}
                />:
                <></>
            }
                        {
                editMode.mode === 'Button' ?
                <NavigationButton
                    handleComponentsMode={handleComponentsMode}
                    handleEditMode={handleEditMode}
                    componentsMode={componentsMode}
                />:
                <></>
            }
                        {
                editMode.mode === 'Image' ?
                <NavigationImage
                    handleComponentsMode={handleComponentsMode}
                    handleEditMode={handleEditMode}
                    componentsMode={componentsMode}
                />:
                <></>
            }
            {
                editMode.mode === 'Text' ?
                <NavigationText 
                    handleComponentsMode={handleComponentsMode}
                    handleEditMode={handleEditMode}
                    componentsMode={componentsMode}
                /> :
                <></>
            }
            {
                editMode === 'Setting' || editMode === 'Template' || editMode === 'Share' || editMode === 'Product' || editMode === false ?
                <Navigation 
                    editMode={editMode} 
                    handleEditMode={handleEditMode}
                    handleChangeComponents={handleChangeComponents}
                /> :
                <></>
            }
        </EditorWrapper>
    )
}