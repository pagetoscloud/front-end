import ItemDetailOneEdit from "./ItemDetailsOneEdit";
import ItemDetailOnePreview from "./ItemDetailsOnePreview";

export default function ItemDetailsOne({mode, page, styleData, contentData, handleChangePage, currentItems, handleEditMode}){
    return (
        <>
            {
                mode === 'edit'?
                <ItemDetailOneEdit
                    page={page}
                    styleData={styleData}
                    contentData={contentData}
                    handleEditMode={handleEditMode}
                />:
                <ItemDetailOnePreview 
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