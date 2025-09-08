import { useState } from "react";
import { ImageListData } from "../../../../../../../data/ImageListData";
import { ImageWrapper, SelectImageContent, SelectTypeImageButton, UploadImageButton } from "./Image.styled";


export default function Image({browserImage, handleChangeImageBrowser, selectedUploadImage, handleChangeImageUpload}){
    const [condition, setCondition] = useState('browse');
    const [uploadImageList, setUploadImageList] = useState([]);
    const handleChangeUploadImage = (e) => {
        const prevData = [...uploadImageList];
        prevData.push(e);
        setUploadImageList(prevData);
    }
    return (
        <ImageWrapper>
            <SelectTypeImageButton>
                <p style={condition === 'browse' ? {fontWeight: 800}: {}} onClick={() => setCondition('browse')}>Browse</p>
                <p style={condition === 'upload' ? {fontWeight: 800}: {}} onClick={() => setCondition('upload')}>Upload</p>
            </SelectTypeImageButton>
            <SelectImageContent>
                {
                    condition === 'browse' ?
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
                                            onClick={() => {handleChangeImageUpload(image)}} 
                                            src={image} 
                                            alt="upload" 
                                        />
                                    )
                                } else {
                                    return (
                                        <img 
                                            onClick={() => {handleChangeImageUpload(image)}} 
                                            src={image} 
                                            alt="upload" 
                                        />
                                    )
                                }
                            })
                        }
                        <input 
                            onChange={(e) => handleChangeUploadImage(URL.createObjectURL(e.target.files[0]))}
                            style={{display: 'none'}}
                            id="inputNewImage" 
                            type='file' 
                        />
                        <UploadImageButton
                            onClick={() => document.getElementById('inputNewImage').click()}
                        >Upload Image</UploadImageButton>
                    </>

                }
            </SelectImageContent>
        </ImageWrapper>
    )
}