import { useSelector } from "react-redux";
import { useDispatchImageContent } from "../../../../hooks/useDispatchImageContent";
import { useDispatchImageStyle } from "../../../../hooks/useDispatchImageStyle";
import { EditorImageContainer } from "./EditorImage.styled";
import Opacity from "./opacity/Opacity";
import Radius from "./radius/Radius";
import Filter from "./filter/Filter";
import Image from "./image/Image";
import Blur from "./blur/Blur";
import { useEffect, useState } from "react";

export default function EditorImage({editMode, componentsMode, handleUploadImageCollection, handleLoginPopUp}){
    const styleData = useSelector(state => state.templateStyle.current);
    const { loggedIn } = useSelector(state => state.authentication);
    console.log(loggedIn);
    // const contentData = useSelector(state => state.templateContent);
    // const [selectImageType, setSelectImageType] = useState('browse');
    const [uploadImageList, setUploadImageList] = useState([]);
    const {
        imageOpacity, handleChangeImageOpacity,
        imageBlur, handleChangeImageBlur,
        imageBorderRadius, handleChangeImageBorderRadius,
        imageFilter, handleChangeImageFilter
    } = useDispatchImageStyle(styleData, editMode);
    const {
        browserImage, handleChangeImageBrowser,
        selectedUploadImage, handleChangeImageUpload
    } = useDispatchImageContent(editMode);
    const handleChangeUploadImage = async (e) => {
        const fetchImageCollection = async () => {
            const url = import.meta.env.VITE_NODE_ENV !== 'development' 
            ? `${import.meta.env.VITE_API_URL}/personal-area/collection-image` 
            : 'http://localhost:5001/personal-area/collection-image';

            try {
                const response = await fetch(url, {
                    method: "GET",
                    credentials: 'include',
                    mode: 'cors',
                    headers: {
                        "Content-Type":"application/json"
                    }
                });
                const json = await response.json();
                setUploadImageList(json.data);
            } catch (error) {
                throw error;
            }
        }
        await handleUploadImageCollection(e);
        await fetchImageCollection()
    }
    useEffect(() => {
        const fetchImageCollection = async () => {
            const url = import.meta.env.VITE_NODE_ENV !== 'development' 
                ? `${import.meta.env.VITE_API_URL}/personal-area/collection-image` 
                : 'http://localhost:5001/personal-area/collection-image';

            try {
                const response = await fetch(url, {
                    method: "GET",
                    credentials: 'include',
                    mode: 'cors',
                    headers: {
                        "Content-Type":"application/json"
                    }
                });
                const json = await response.json();
                setUploadImageList(json.data);
            } catch (error) {
                throw error;
            }
        }
        if (loggedIn){
            fetchImageCollection();
        }
    }, [loggedIn]);
    return (
        <EditorImageContainer>
            {
                componentsMode === 'Image' ?
                <Image 
                    loggedIn={loggedIn}
                    browserImage={browserImage}
                    uploadImageList={uploadImageList}
                    handleChangeImageBrowser={handleChangeImageBrowser}
                    imageBlur={imageBlur}
                    handleLoginPopUp={handleLoginPopUp}
                    handleChangeImageBlur={handleChangeImageBlur}
                    selectedUploadImage={selectedUploadImage}
                    handleChangeUploadImage={handleChangeUploadImage}
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