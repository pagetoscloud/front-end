import BannerOneEdit from "./BannerOneEdit";
import BannerOnePreview from "./BannerOnePreview";

export default function BannerOne({styleData, contentData, handleEditMode, mode, onEdit}){
    return (
        <>
            {
                mode === 'edit' ?
                <BannerOneEdit 
                    styleData={styleData}
                    contentData={contentData}
                    handleEditMode={handleEditMode}
                    onEdit={onEdit}
                /> :
                <BannerOnePreview 
                    styleData={styleData}
                    contentData={contentData}
                />
            }
        </>
    )
}