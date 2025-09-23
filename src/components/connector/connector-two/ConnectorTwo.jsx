import { ConnectorTwoEdit } from "./ConnectorTwoEdit";
import { ConnectorTwoPreview } from "./ConnectorTwoPreview";


export default function ConnectorTwo({mode, page, styleData, contentData, handleEditMode, handleChangePage}) {
    return (
        <>
        {
            mode === 'edit' ?
            <ConnectorTwoEdit
                page={page}
                styleData={styleData}
                contentData={contentData}
                handleEditMode={handleEditMode}
            /> :
            <ConnectorTwoPreview
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