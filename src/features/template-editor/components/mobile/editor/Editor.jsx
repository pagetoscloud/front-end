import EditBoard from "./EditorBoard";
import { EditorWrapper } from "./Editor.styled";
import Navigation from "./Navigation";
import NavigationBackground from "./editor-background/NavigationBackground";
import { useEffect, useRef, useState } from "react";
import NavigationText from "./editor-text/NavigationText";
import NavigationImage from "./editor-image/NavigationImage";
import NavigationButton from "./editor-button/NavigationButton";
import { useDispatch } from "react-redux";
import { changeRef } from "../../../editorBoardRefSlice";

export default function Editor({editMode, handleEditMode, handleChangeComponents, linkPage, setLinkPage, handleChangeLinkPage, handleUploadImageCollection, handleLoginPopUp}){
    const [componentsMode, setComponentsMode] = useState(false);
    const editorBoardRef = useRef();
    const dispatch = useDispatch();
    const handleComponentsMode = (value) => {
        setComponentsMode(value);
    }
    useEffect(() => {
        function handleClickOutside(e) {
            console.log(e.x);
            if (editorBoardRef.current.contains(e.target)){
                dispatch(changeRef({x: e.x, y: e.y}))
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);
    return (
        <EditorWrapper ref={editorBoardRef}>
            {
                editMode === 'Setting' || editMode === 'Template' || editMode === 'Share' || editMode === 'Product' ?
                <EditBoard 
                    editMode={editMode} 
                    linkPage={linkPage}
                    setLinkPage={setLinkPage}
                    handleLoginPopUp={handleLoginPopUp}
                    handleUploadImageCollection={handleUploadImageCollection}
                    handleComponentsMode={handleComponentsMode}
                    handleEditMode={handleEditMode}
                    handleChangeComponents={handleChangeComponents}
                    handleChangeLinkPage={handleChangeLinkPage}
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
                    handleLoginPopUp={handleLoginPopUp}
                    handleUploadImageCollection={handleUploadImageCollection}
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