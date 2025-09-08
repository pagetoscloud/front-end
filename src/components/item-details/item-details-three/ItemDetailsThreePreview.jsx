import { 
    ItemDetailsBox, ItemDetailsButton, 
    ItemDetailsImage, ItemDetailslBoxBackground, ItemDetailsText, 
    ItemDetailsWrapper, ItemsDescription,
    ItemsPrice, ItemsTitle
} from "./ItemDetailsThreePreview.styled";
import arrowDown from '../../../assets/images/arrow-down.png';

export default function ItemDetailsThreePreview({page, styleData, handleChangePage, currentItems}){
    return (
        <>
            {
                page === 'page two' ?
                <ItemDetailsWrapper>
                    <ItemDetailsBox>
                        <div style={{position: 'absolute', zIndex: 10, top: 10, right: 10, cursor: 'pointer'}} onClick={() => handleChangePage('page one')}>
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
                        <ItemDetailsImage>
                            <img 
                                style={styleData.itemDetails.style.image} 
                                src={currentItems.image} 
                                alt="item detail" 
                            />
                        </ItemDetailsImage>
                        <ItemDetailsText>
                            <ItemsTitle style={styleData.itemDetails.style.title}>{currentItems.name}</ItemsTitle>
                            <ItemsDescription style={styleData.itemDetails.style.paragraph}>{currentItems.description}</ItemsDescription>
                            <ItemsPrice style={styleData.itemDetails.style.price}>{currentItems.price}</ItemsPrice>
                        </ItemDetailsText>
                        <ItemDetailsButton 
                            onClick={() => handleChangePage('page three')}
                            style={styleData.itemDetails.style.button}
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