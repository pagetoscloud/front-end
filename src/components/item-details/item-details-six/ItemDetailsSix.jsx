import ItemDetailsFourEdit from "./edit/ItemDetailsSixEdit";
import ItemDetailsFourPreview from "./preview/ItemDetailsSixPreview";

export default function ItemDetailsSix({mode, page, styleData, contentData, handleChangePage, currentItems, handleEditMode}){

    return (
        <>
            {
                mode === 'edit' ?
                <ItemDetailsFourEdit 
                    page={page}
                    styleData={styleData}
                    contentData={contentData}
                    handleEditMode={handleEditMode}
                />:
                <ItemDetailsFourPreview 
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