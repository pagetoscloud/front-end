import ItemDetailsFourEdit from "./ItemDetailsFourEdit";
import ItemDetailsFourPreview from "./ItemDetailsFourPreview";

export default function ItemDetailsFour({mode, page, styleData, contentData, handleChangePage, currentItems, handleEditMode}){

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