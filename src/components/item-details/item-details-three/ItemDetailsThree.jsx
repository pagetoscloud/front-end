import ItemDetailsThreeEdit from "./ItemDetailsThreeEdit";
import ItemDetailsThreePreview from "./ItemDetailsThreePreview";


export default function ItemDetailsThree({mode, page, styleData, contentData, handleChangePage, currentItems, handleEditMode}){
    return (
        <>
            {
                mode === 'edit' ?
                <ItemDetailsThreeEdit 
                    page={page}
                    styleData={styleData}
                    contentData={contentData}
                    handleEditMode={handleEditMode}
                />:
                <ItemDetailsThreePreview 
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