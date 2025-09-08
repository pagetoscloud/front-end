import ItemDetailsFiveEdit from "./edit/ItemDetailsFiveEdit";
import ItemDetailsFivePreview from "./preview/ItemDetailsFivePreview";

export default function ItemDetailsFive({mode, page, styleData, contentData, handleChangePage, currentItems, handleEditMode}){

    return (
        <>
            {
                mode === 'edit' ?
                <ItemDetailsFiveEdit 
                    page={page}
                    styleData={styleData}
                    contentData={contentData}
                    handleEditMode={handleEditMode}
                />:
                <ItemDetailsFivePreview
                    page={page}
                    styleData={styleData}
                    contentData={contentData}
                    handleChangePage={handleChangePage}
                    currentItems={currentItems}
                />
            }
        </>
    )
}