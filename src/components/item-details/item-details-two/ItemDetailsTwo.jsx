import ItemDetailsTwoEdit from "./ItemDetailsTwoEdit";
import ItemDetailsTwoPreview from "./ItemDetailsTwoPreview";

export default function ItemDetailsTwo({mode, page, styleData, contentData, handleChangePage, currentItems, handleEditMode}){

    return (
        <>
            {
                mode === 'edit' ?
                <ItemDetailsTwoEdit 
                    page={page}
                    styleData={styleData}
                    contentData={contentData}
                    handleEditMode={handleEditMode}
                />:
                <ItemDetailsTwoPreview 
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