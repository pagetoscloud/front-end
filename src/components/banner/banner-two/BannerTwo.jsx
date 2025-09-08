import BannerTwoEdit from "./BannerTwoEdit";
import BannerTwoPreview from "./BannerTwoPreview";

export default function BannerTwo({styleData, contentData, handleEditMode, mode}){
    return (
        <>
            {
                mode === 'edit' ?
                <BannerTwoEdit 
                    styleData={styleData}
                    contentData={contentData}
                    handleEditMode={handleEditMode}
                /> :
                <BannerTwoPreview 
                    styleData={styleData}
                    contentData={contentData}
                />
            }
        </>
    )
}