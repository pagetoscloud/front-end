// import { useDispatch } from "react-redux";
import { ConnectorOneEdit } from "./connector-one-edit/ConnectorOneEdit";
import { ConnectorOnePreview } from "./connector-one-preview/ConnectorOnePreview";
// import { deleteButton } from "../../../features/template-editor/templateContentSlice";

export default function ConnectorOne({mode, page, styleData, contentData, handleEditMode, handleChangePage}) {
    return (
        <>
        {
            mode === 'edit' ?
            <ConnectorOneEdit 
                page={page}
                styleData={styleData}
                contentData={contentData}
                handleEditMode={handleEditMode}
            /> :
            <ConnectorOnePreview 
                page={page}
                styleData={styleData}
                contentData={contentData}
                handleEditMode={handleEditMode}
                handleChangePage={handleChangePage}
            />
        }
        </>

    );
}