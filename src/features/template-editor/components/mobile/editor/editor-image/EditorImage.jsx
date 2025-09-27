import { useSelector } from "react-redux";
import { useDispatchImageContent } from "../../../../hooks/useDispatchImageContent";
import { useDispatchImageStyle } from "../../../../hooks/useDispatchImageStyle";
import { EditorImageContainer } from "./EditorImage.styled";
import Opacity from "./opacity/Opacity";
import Radius from "./radius/Radius";
import Filter from "./filter/Filter";
import Image from "./image/Image";
import Blur from "./blur/Blur";

export default function EditorImage({editMode, componentsMode}){
    const styleData = useSelector(state => state.templateStyle.current);
    const contentData = useSelector(state => state.templateContent);
    const {
        imageOpacity, handleChangeImageOpacity,
        imageBlur, handleChangeImageBlur,
        imageBorderRadius, handleChangeImageBorderRadius,
        imageFilter, handleChangeImageFilter
    } = useDispatchImageStyle(styleData, editMode);
    const {
        browserImage, handleChangeImageBrowser,
        selectedUploadImage, handleChangeImageUpload

    } = useDispatchImageContent(contentData, editMode);
    return (
        <EditorImageContainer>
            {
                componentsMode === 'Image' ?
                <Image 
                    browserImage={browserImage}
                    handleChangeImageBrowser={handleChangeImageBrowser}
                    imageBlur={imageBlur}
                    handleChangeImageBlur={handleChangeImageBlur}
                    selectedUploadImage={selectedUploadImage}
                    handleChangeImageUpload={handleChangeImageUpload}
                />:
                <></>
            }
            {
                componentsMode === 'Filter' ?
                <Filter 
                    imageFilter={imageFilter}
                    handleChangeImageFilter={handleChangeImageFilter}
                />:
                <></>
            }
            {
                componentsMode === 'Opacity' ?
                <Opacity 
                    imageOpacity={imageOpacity}
                    handleChangeImageOpacity={handleChangeImageOpacity}
                />:
                <></>
            }
            {
                componentsMode === 'Radius' ?
                <Radius 
                    imageBorderRadius={imageBorderRadius}
                    handleChangeImageBorderRadius={handleChangeImageBorderRadius}
                />:
                <></>
            }
            {
                componentsMode === 'Blur' ?
                <Blur 
                   imageBlur={imageBlur}
                   handleChangeImageBlur={handleChangeImageBlur}
                />:
                <></>
            }
        </EditorImageContainer>
    )
}