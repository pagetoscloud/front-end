// import { useState } from "react";
import { 
    BoxEditWrapper,
    Image,
        ItemDetailsBox, ItemDetailsBoxHover, 
        ItemDetailsButton, ItemDetailsImage, 
        ItemDetailslBoxBackground, ItemDetailsText, 
        ItemDetailsWrapper, ItemsDetailsInput 
} from "./ItemDetailsOneEdit.styled";
// import arrowDown from '../../../assets/images/arrow-down.png';
import { useWindowSize } from "../../../hooks/useWindowSize";
import { useCustomRef } from "../../../hooks/useCustomRef";

export default function ItemDetailOneEdit({data, page, styleData, contentData, handleEditMode}){
    const itemsNoOne = contentData.product[0].listItems[0];
    const size = useWindowSize();
    const height = size[1] < 600 ? size[0] - 140 : size[0] - 120;
    const {
        refOne, activeOne, setActiveOne,
        refTwo, activeTwo, setActiveTwo,
        refThree, activeThree, setActiveThree,
        // refFour, activeFour, setActiveFour,
        // refFive, activeFive, setActiveFive
    } = useCustomRef();
    return (
        <>
            {
                page === 'page two' ?
                <ItemDetailsWrapper 
                    style={{height: height}}
                >
                    <ItemDetailsBoxHover 
                        ref={refOne}
                        style={activeOne ? {boxShadow: '0px 0px 0px 1px blue inset'}: {}}
                        onClick={() => {
                            setActiveOne(true);
                            handleEditMode({mode: 'Background', type: 'background', component: 'itemDetails'})}
                        }
                    />
                    <ItemDetailsBox>
                        <div style={{position: 'absolute', zIndex: 10, top: 10, right: 10, cursor: 'pointer'}} onClick={() => handleEditMode(false)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height={30}
                                width={30}
                                viewBox="0 0 24 24"
                                fill={styleData.itemDetails.style.button.background}
                            >
                                <title>close</title>
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 1 0-1.41 1.42L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
                            </svg>
                        </div>
                        <ItemDetailslBoxBackground 
                            style={styleData.itemDetails.style.background}
                        />
                        <ItemDetailsImage 
                            ref={refTwo}
                            onClick={() => {
                                setActiveTwo(true);
                                handleEditMode({mode: 'Image', type: 'image', component: 'itemDetails', image: contentData.banner.image})}
                            }
                        >
                            <BoxEditWrapper 
                                style={activeTwo ? {boxShadow: '0px 0px 0px 1px blue inset'}: {}}
                            />
                            <Image
                                style={styleData.itemDetails.style.image} 
                            >
                                <img 
                                    src={itemsNoOne.image} 
                                    alt="item detail" 
                                />
                            </Image>
                        </ItemDetailsImage>
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
                        </ItemDetailsText>
                        <ItemDetailsButton
                            ref={refThree}
                            style={styleData.itemDetails.style.button} 
                            onClick={() => {
                                setActiveThree(true)
                                handleEditMode({mode: 'Button', type: 'button', component: 'itemDetails', buttonIndex: 0, id: 1})}
                            }
                        >
                            <BoxEditWrapper 
                                style={activeThree ? {boxShadow: '0px 0px 0px 1px blue inset'}: {}}
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height={20}
                                width={20}
                                viewBox="0 0 24 24"
                                fill={styleData.itemDetails.style.button.color}
                            >
                                <title>add button</title>
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                            </svg>
                        </ItemDetailsButton>
                    </ItemDetailsBox>
                </ItemDetailsWrapper> :
                <></>
            }
        </>
    )
}