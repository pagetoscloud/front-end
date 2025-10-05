import { useState } from "react";
import { ImageListData } from "../../../../../../../data/ImageListData";
import { ImageWrapper, SelectImageContent, SelectTypeImageButton, UploadImageButton } from "./Image.styled";


export default function Image({loggedIn, browserImage, handleChangeImageBrowser, uploadImageList, selectedUploadImage, handleChangeImageUpload, handleChangeUploadImage, handleLoginPopUp}){
    const [selectImageType, setSelectImageType] = useState('browse');
    console.log(loggedIn);
    return (
        <ImageWrapper>
            <SelectTypeImageButton>
                <p style={selectImageType === 'browse' ? {fontWeight: 800}: {}} onClick={() => setSelectImageType('browse')}>Browse</p>
                <p style={selectImageType === 'upload' ? {fontWeight: 800}: {}} onClick={() => setSelectImageType('upload')}>Upload</p>
            </SelectTypeImageButton>
            <SelectImageContent>
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
                    }) :
                    <>
                        {
                            uploadImageList.length > 0 &&
                            uploadImageList.map((image, index) => {
                                if (image === selectedUploadImage){
                                    return (
                                        <img 
                                            style={{boxShadow: '0px 0px 0px 2px blue inset'}}
                                            onClick={() => {handleChangeImageUpload(image.image_link)}} 
                                            // src={image} 
                                            src={image.image_link}
                                            alt="upload" 
                                        />
                                    )
                                } else {
                                    return (
                                        <img 
                                            onClick={() => {handleChangeImageUpload(image)}} 
                                            // src={image} 
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
            </SelectImageContent>
        </ImageWrapper>
    )
}