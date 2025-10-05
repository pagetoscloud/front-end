import { 
    EditorContentWrapper, HorizontalWrapper, 
    InputEditorWrapper, InputRangeEditor, 
    LabelText, TitleHeader 
} from "../../../../assets/Global.styled";
import { 
    EditorImageContainter, FilterImageItems, FilterImageScrollbar, FilterImageWrapper, 
    SelectImageWrapper, SelectTypeImageButton, 
    UploadImageButton
} from "./EditorImage.styled";
import { useWindowSize } from "../../../../../../hooks/useWindowSize";
import { ImageListData } from "../../../../../../data/ImageListData";
import filterImage from '../../../../../../assets/images/fried-rice.jpg'
import { useSelector } from "react-redux";
import { useDispatchImageStyle } from "../../../../hooks/useDispatchImageStyle";
import { useDispatchImageContent } from "../../../../hooks/useDispatchImageContent";
import rightArrow from '../../../../../../assets/images/right-arrow.png';
import { useEffect, useState } from "react";
const filterList = [
    {data: {type: 'none'}, style: 'none'},
    {data: {type: 'grayscale'}, style: 'grayscale(100%)'},
    {data: {type: 'sepia'}, style: 'sepia(50%)'},
    {data: {type: 'hue-rotate'}, style: 'hue-rotate(50deg)'},
    {data: {type: 'saturate'}, style: 'saturate(100%)'},
];

export default function EditorImage({handleEditMode, editMode, handleUploadImageCollection, handleLoginPopUp}){
    const size = useWindowSize();
    const height = size[0] - (130);
    const styleData = useSelector(state => state.templateStyle.current);
    // const contentData = useSelector(state => state.templateContent);
    const [selectImageType, setSelectImageType] = useState('browse');
    const [uploadImageList, setUploadImageList] = useState([]);
    const {loggedIn} = useSelector(state => state.authentication);
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
    const handleChangeUploadImage = async (e) => {
        await handleUploadImageCollection(e);
        await fetchImageCollection();
    }
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
    return(
        <EditorImageContainter>
            <TitleHeader>
                <h3>Image</h3>
                <img onClick={() => handleEditMode(false)} src={rightArrow} alt="close icon" />
            </TitleHeader>
            <EditorContentWrapper style={{height: height}}>
                {
                    editMode.component === 'itemDetails' ?
                    <></>:
                    <InputEditorWrapper>
                        <LabelText>Choose</LabelText>
                        <SelectImageWrapper>
                            
                            {
                                selectImageType === 'browse' ?
                                ImageListData.map((img, index) => {
                                    if (img.image === browserImage){
                                        return (
                                            <img 
                                                style={{boxShadow: "0px 0px 0px 2px blue inset"}} 
                                                onClick={() => handleChangeImageBrowser(img.id)} 
                                                src={img.image} alt={img.name} 
                                            />
                                        )
                                    } else {
                                        return (
                                            <img 
                                                onClick={() => handleChangeImageBrowser(img.id)} 
                                                src={img.image} alt='list' key={index}
                                            />
                                        )
                                    }
                                }):
                                <>
                                    {
                                        uploadImageList.length > 0 &&
                                        uploadImageList.map((image, index) => {
                                            if (image === selectedUploadImage){
                                                return (
                                                    <img 
                                                        style={{boxShadow: '0px 0px 0px 2px blue inset'}}
                                                        onClick={() => {handleChangeImageUpload(image.image_link)}} 
                                                        src={image.image_link}
                                                        alt="upload" 
                                                    />
                                                )
                                            } else {
                                                return (
                                                    <img 
                                                        onClick={() => {handleChangeImageUpload(image.image_link)}} 
                                                        src={image.image_link} 
                                                        alt="upload" 
                                                    />
                                                )
                                            }
                                        })
                                    }
                                    <input 
                                        onChange={(e) => handleChangeUploadImage(e.target.files[0])}
                                        style={{display: 'none'}}
                                        id="inputNewImage" 
                                        type='file' 
                                    />
                                    <UploadImageButton
                                        onClick={() => {
                                            loggedIn ? 
                                                document.getElementById('inputNewImage').click():
                                                handleLoginPopUp();
                                        }}
                                    >Upload Image</UploadImageButton>
                                </>
                            }
                        </SelectImageWrapper>
                        <SelectTypeImageButton>
                            <p style={selectImageType === 'browse' ? {fontWeight: 'bold'}: {}} onClick={() => setSelectImageType('browse')}>Browse</p>
                            <p style={selectImageType === 'upload' ? {fontWeight: 'bold'}: {}} onClick={() => setSelectImageType('upload')}>Upload</p>
                        </SelectTypeImageButton>
                    </InputEditorWrapper>
                }
                <InputEditorWrapper>
                <LabelText>Filter</LabelText>
                <FilterImageScrollbar>
                    <FilterImageWrapper>
                        {
                            filterList.map((filter, index) => {
                                    return (
                                        <FilterImageItems style={imageFilter === filter.data.type ? {boxShadow: '0px 0px 0px 1px blue inset'}: {}} key={index}>
                                            <img 
                                                onClick={() => handleChangeImageFilter({data: filter.data, style: filter.style})}
                                                style={{filter: filter.style}}
                                                src={filterImage} 
                                                alt='filter'
                                            />
                                        </FilterImageItems>
                                    )
                                }
                            )
                        }
                    </FilterImageWrapper>
                </FilterImageScrollbar>
                </InputEditorWrapper>        
                <InputEditorWrapper>
                    <HorizontalWrapper>
                        <LabelText>Opacity</LabelText>
                        <p>{imageOpacity}%</p>
                    </HorizontalWrapper>
                    <InputRangeEditor>
                        <input 
                            onChange={(e) => handleChangeImageOpacity(e.target.value)}
                            type="range" 
                            value={imageOpacity}
                        />
                    </InputRangeEditor>
                </InputEditorWrapper>    
                <InputEditorWrapper>
                    <HorizontalWrapper>
                        <LabelText>Blur</LabelText>
                        <p>{imageBlur} px</p>
                    </HorizontalWrapper>
                    <InputRangeEditor>
                        <input 
                            onChange={(e) => handleChangeImageBlur(e.target.value)}
                            type="range" 
                            value={imageBlur} 
                        />
                    </InputRangeEditor>
                </InputEditorWrapper>
                <InputEditorWrapper>
                    <HorizontalWrapper>
                        <LabelText>Border Radius</LabelText>
                        <p>{imageBorderRadius} px</p>
                    </HorizontalWrapper>
                    <InputRangeEditor>
                        <input 
                            onChange={(e) => handleChangeImageBorderRadius(e.target.value)}
                            type="range" 
                            value={imageBorderRadius}
                        />
                    </InputRangeEditor>
                </InputEditorWrapper>
            </EditorContentWrapper>
        </EditorImageContainter>
    )
}