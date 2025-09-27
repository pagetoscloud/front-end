import { useEffect, useState } from 'react';
import { 
    CloseButton,
    ItemDetailsBox, ItemDetailsButton, 
     ItemDetailsImage, 
    ItemDetailsText, ItemDetailsWrapper, 
    ItemsDescription, ItemsDetailsBackground, // ItemsDetailsInput, 
    ItemsPrice, ItemsTitle
} from './ItemDetailsSevenPreview.styled';
import { useWindowSize } from '../../../../hooks/useWindowSize';
// import closeIcon from '../../../../assets/images/close-icon.png';
// import addIcon from '../../../../assets/images/Plus-Math.png';

export default function ItemDetailsSevenPreview({page, styleData, contentData, handleChangePage, currentItems}){
    const buttonList = contentData.itemDetails.buttonList;
    const addButtonData = buttonList[0];
    const closeButtonData = buttonList[1];
    const windowSize = useWindowSize();
    const height = windowSize[0];
    const boxHeight = height > 800 ? height - 400 : height / 2;
    const imageHeight = height > 800 ? 400 : height / 2;
    return (
        <>
            {
                page === 'page two' ?
                <ItemDetailsWrapper id='detailWrapper'>
                    <ItemDetailsImage
                        style={{
                            height: imageHeight, 
                            filter: styleData.itemDetails.style.image.filter,
                            borderRadius: `0 0 ${styleData.itemDetails.data.image.borderRadius}px ${styleData.itemDetails.data.image.borderRadius}px`
                        }} 
                    >
                        <CloseButton 
                            style={styleData.itemDetails.style.button} 
                            onClick={() => {
                            if (closeButtonData.type === 'link') {
                                window.open(closeButtonData.link, '_blank');
                            } else if (closeButtonData.type === 'change page') {
                                handleChangePage(closeButtonData.page);
                                // navigate(`/${button.page}`);
                            } else if (closeButtonData.type === 'back'){
                                handleChangePage('page one');
                                // navigate(-1);
                            }
                        }}
                        >
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
                        <img 
                            src={currentItems.image} 
                            alt="item detail" 
                        />
                    </ItemDetailsImage>
                    <ItemsDetailsBackground 
                        style={{
                            background: styleData.itemDetails.style.background.background,
                        }}
                    />
                    <ItemDetailsBox 
                        style={{
                            height: boxHeight,
                            borderRadius: `${styleData.itemDetails.style.background.borderRadius}px 0`
                        }}
                    >
                        <ItemDetailsText>
                            <ItemsTitle style={styleData.itemDetails.style.title}>{currentItems.name}</ItemsTitle>
                            <ItemsDescription style={styleData.itemDetails.style.paragraph}>{currentItems.description}</ItemsDescription>
                            <ItemsPrice style={styleData.itemDetails.style.price}>{currentItems.price}</ItemsPrice>
                            <ItemDetailsButton 
                                style={styleData.itemDetails.style.button}
                                onClick={() => {
                                if (addButtonData.type === 'link') {
                                    window.open(addButtonData.link, '_blank');
                                } else if (addButtonData.type === 'change page') {
                                    handleChangePage(addButtonData.page);
                                    // navigate(`/${button.page}`);
                                } else if (addButtonData.type === 'back'){
                                    // navigate(-1);
                                    handleChangePage('page one');
                                }
                            }}>
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
                        {/* <ItemDetailsCircle
                            style={styleData.itemDetails.style.circle}
                        > */}
                        {/* </ItemDetailsCircle> */}
                    </ItemDetailsBox>
                </ItemDetailsWrapper> :
                <></>
            }
        </>
    )
}