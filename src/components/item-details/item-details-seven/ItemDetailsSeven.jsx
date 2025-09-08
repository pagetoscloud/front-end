import ItemDetailsSevenEdit from "./edit/ItemDetailsSevenEdit";
import ItemDetailsSevenPreview from "./preview/ItemDetailsSevenPreview";

export default function ItemDetailsSeven({mode, page, styleData, contentData, handleChangePage, currentItems, handleEditMode}){

    return (
        <>
            {
                mode === 'edit' ?
                <ItemDetailsSevenEdit 
                    page={page}
                    styleData={styleData}
                    contentData={contentData}
                    handleEditMode={handleEditMode}
                />:
                <ItemDetailsSevenPreview
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