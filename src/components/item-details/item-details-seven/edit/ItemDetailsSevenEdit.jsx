import { useEffect, useState } from "react";
import { useCustomRef } from "../../../../hooks/useCustomRef";
import { 
    BoxEditWrapper,
    CloseButton,
    Image,
    ImageWrapper,
    ItemDetailsBox, ItemDetailsBoxHover, ItemDetailsButton, ItemDetailsImage, 
    ItemDetailslBoxBackground, 
    ItemDetailsText, ItemDetailsWrapper, 
    ItemsDetailsBackground, 
    ItemsDetailsInput 
} from "./ItemDetailsSevenEdit.styled";


export default function ItemDetailsSevenEdit({page, styleData, contentData, handleEditMode}){
    const itemsNoOne = contentData.product[0].listItems[0];
    const [height, setHeight] = useState(0);
    const {
        refOne, activeOne, setActiveOne,
        refTwo, activeTwo, setActiveTwo,
        refThree, activeThree, setActiveThree,
        refFour, activeFour, setActiveFour,
        // refFive, activeFive, setActiveFive
    } = useCustomRef();
    useEffect(() => {
        if (page === 'page two'){
            const detailWrapper = document.getElementById("detailWrapper");
            const newHeight = detailWrapper.clientHeight > 800 ? (detailWrapper.clientHeight - 400) : (detailWrapper.clientHeight / 2);
            setHeight(newHeight);
        }
    }, [page])
    return (
        <>
            {
                page === 'page two' ?
                <ItemDetailsWrapper id='detailWrapper'>
                    {/* <ItemDetailslBoxBackground 
                        style={styleData.itemDetails.style.background}
                        /> */}
                    <ImageWrapper>
                        <CloseButton 
                            style={styleData.itemDetails.style.button} 
                            ref={refTwo}
                        >
                            <BoxEditWrapper 
                                onClick={() => {
                                    setActiveTwo(true);
                                    handleEditMode({mode: 'Button', type: 'button', component: 'itemDetails', buttonIndex: 1, id: 2})}
                                }
                                style={activeTwo ? {boxShadow: '0px 0px 0px 1px blue inset'}: {}}
                            />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height={30}
                                    width={30}
                                    viewBox="0 0 24 24"
                                    fill={styleData.itemDetails.style.button.color}
                                >
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 1 0-1.41 1.42L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
                                </svg>
                        </CloseButton>
                        <ItemDetailsImage 
                            ref={refFour}
                            onClick={() => {
                                setActiveFour(true);
                                handleEditMode({mode: 'Image', type: 'image', component: 'itemDetails', image: contentData.banner.image})
                            }}
                        >
                            <BoxEditWrapper 
                                style={activeFour ? {boxShadow: '0px 0px 0px 1px blue inset'}: {}}
                            />
                            <Image 
                                style={{
                                    filter: styleData.itemDetails.style.image.filter,
                                    borderRadius: `0 0 ${styleData.itemDetails.data.image.borderRadius}px ${styleData.itemDetails.data.image.borderRadius}px`
                                }} 
                            >
                                <img
                                    src={itemsNoOne.image} 
                                    alt="item detail" 
                                />
                            </Image>
                        </ItemDetailsImage>
                    </ImageWrapper>
                    <ItemDetailslBoxBackground 
                        style={styleData.itemDetails.style.background}
                    />
                    <ItemDetailsBox
                        style={{
                            height: height,
                            borderRadius: `${styleData.itemDetails.style.background.borderRadius}px 0`
                        }}
                        // style={{borderRadius: `${styleData.itemDetails.style.background.borderRadius}px 0`}}
                    >
                        <ItemDetailsBoxHover 
                            ref={refOne}
                            style={activeOne ? {boxShadow: '0px 0px 0px 1px blue inset'}: {}}
                            onClick={() => { 
                                setActiveOne(true);
                                handleEditMode({mode: 'Background', type: 'background', component: 'itemDetails'})
                            }}
                        />
                        <ItemDetailsText>
                            <ItemsDetailsInput
                                onClick={() => handleEditMode({mode: 'Text', type: 'title', component: 'itemDetails'})}
                                style={styleData.itemDetails.style.title}
                                value={itemsNoOne.name}
                                readOnly
                            />
                            <ItemsDetailsInput 
                                onClick={() => handleEditMode({mode: 'Text', type: 'paragraph', component: 'itemDetails'})}
                                style={styleData.itemDetails.style.paragraph}
                                value={itemsNoOne.description} 
                                readOnly
                            />
                            <ItemsDetailsInput 
                                onClick={() => handleEditMode({mode: 'Text', type: 'price', component: 'itemDetails'})}
                                style={styleData.itemDetails.style.price}
                                value={itemsNoOne.price} 
                                readOnly
                            />
                            <ItemDetailsButton 
                                style={styleData.itemDetails.style.button} 
                                ref={refThree}
                                    // onClick={() => handleEditMode({mode: 'Button', type: 'button', component: 'itemDetails', buttonIndex: 0, id: 1}) }
                                >
                                <BoxEditWrapper 
                                    onClick={() => {
                                        setActiveThree(true);
                                        handleEditMode({mode: 'Button', type: 'button', component: 'itemDetails', buttonIndex: 0, id: 1})}
                                    }
                                    style={activeThree ? {boxShadow: '0px 0px 0px 1px blue inset'}: {}}
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height={30}
                                    width={30}
                                    viewBox="0 0 24 24"
                                    fill={styleData.itemDetails.style.button.color}
                                >
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                                </svg>
                            </ItemDetailsButton>
                        </ItemDetailsText>
                        {/* <ItemsDetailsBackground /> */}
                    </ItemDetailsBox>
                </ItemDetailsWrapper> :
                <></>
            }
        </>
    )
}