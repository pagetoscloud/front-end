import { ItemDetailsBox, ItemDetailsBoxHover, ItemDetailsButton, ItemDetailsImage, ItemDetailslBoxBackground, ItemDetailsText, ItemDetailsWrapper, ItemsDetailsInput } from "./ItemDetailsThreeEdit.styled";
import arrowDown from '../../../assets/images/arrow-down.png';

export default function ItemDetailsThreeEdit({page, styleData, contentData, handleEditMode}){
    const itemsNoOne = contentData.product[0].listItems[0];
    return (
        <>
            {
                page === 'page two' ?
                <ItemDetailsWrapper>
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
                        <ItemDetailsBoxHover 
                            onClick={() => handleEditMode({mode: 'Background', type: 'background', component: 'itemDetails'})}
                        />
                        <ItemDetailslBoxBackground 
                            style={styleData.itemDetails.style.background}
                        />
                        <ItemDetailsImage 
                            onClick={() => handleEditMode({mode: 'Image', type: 'image', component: 'itemDetails', image: contentData.banner.image})}
                            style={{borderRadius: styleData.itemDetails.style.image.borderRadius}} 
                            >
                            <img 
                                style={styleData.itemDetails.style.image} 
                                src={itemsNoOne.image} 
                                alt="item detail" 
                            />
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
                        {/* <ItemDetailsButton>
                            <img src={arrowDown} alt="arrow down" />
                        </ItemDetailsButton> */}
                        <ItemDetailsButton
                            style={styleData.itemDetails.style.button} 
                            onClick={() => handleEditMode({mode: 'Button', type: 'button', component: 'itemDetails', buttonIndex: 0, id: 1})}
                        >
                            {/* <img src={arrowDown} alt="arrow down" /> */}
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