import { useCustomRef } from "../../../../hooks/useCustomRef";
import { 
    BoxEditWrapper,
    CloseButton,
    Image,
    ImageBoxEditWrapper,
    ImageWrapper,
    ItemDetailsBox, ItemDetailsBoxHover, ItemDetailsButton, ItemDetailsImage, 
    ItemDetailslBoxBackground, 
    ItemDetailsText, ItemDetailsWrapper, 
    ItemsDetailsBackground, 
    ItemsDetailsInput 
} from "./ItemDetailsFiveEdit.styled";




export default function ItemDetailsFiveEdit({page, styleData, contentData, handleEditMode}){
    const itemsNoOne = contentData.product[0].listItems[0];
    const {
        refOne, activeOne, setActiveOne,
        refTwo, activeTwo, setActiveTwo,
        refThree, activeThree, setActiveThree,
        refFour, activeFour, setActiveFour,
        // refFive, activeFive, setActiveFive
    } = useCustomRef();
    return (
        <>
            {
                page === 'page two' ?
                <ItemDetailsWrapper>
                    <ItemDetailsBoxHover 
                        ref={refOne}
                        style={activeOne ? {boxShadow: '0px 0px 0px 1px blue inset'}: {}}
                        onClick={() => { 
                            setActiveOne(true);
                            handleEditMode({mode: 'Background', type: 'background', component: 'itemDetails'})
                        }}
                    />
                    <ItemDetailsBox
                        style={{borderRadius: styleData.itemDetails.style.background.borderRadius}}
                    >
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
                        <ItemDetailslBoxBackground 
                            style={styleData.itemDetails.style.background}
                        />
                        <ImageWrapper>
                            <ItemDetailsImage 
                                ref={refFour}
                                onClick={() => {
                                    setActiveFour(true);
                                    // handleEditMode({mode: 'Background', type: 'circle', component: 'itemDetails'})
                                    handleEditMode({mode: 'Image', type: 'image', component: 'itemDetails', image: contentData.banner.image})
                                }}
                            >
                                <ImageBoxEditWrapper
                                    style={activeFour ? {boxShadow: '0px 0px 0px 1px blue inset'}: {}}
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
                            {/* <ItemDetailsCircle
                                ref={refFour}
                                style={styleData.itemDetails.style.circle}
                            >
                                <BoxEditWrapper 
                                    onClick={() => {
                                        setActiveFour(true);
                                        handleEditMode({mode: 'Background', type: 'circle', component: 'itemDetails'})
                                    }}
                                    style={activeFour ? {boxShadow: '0px 0px 0px 1px blue inset'}: {}}
                                />
                            </ItemDetailsCircle> */}
                        </ImageWrapper>
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
                        <ItemsDetailsBackground />
                    </ItemDetailsBox>
                </ItemDetailsWrapper> :
                <></>
            }
        </>
    )
}