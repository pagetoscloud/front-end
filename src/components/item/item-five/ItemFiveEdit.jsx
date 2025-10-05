import addIcon from '../../../assets/images/white-close-icon.png';
import PriceInput from '../../others/price-input/PriceInput';
import { 
    AddButton,
    DeleteItemsButton,
    ItemsBackground, ItemsClick, 
    ItemsImageClick, ItemsImageEdit, 
    ItemsInput, ItemsText, 
    ItemsWrapper 
} from "./ItemFiveEdit.styled";

export default function ItemFiveEdit({items, productRef, imageRef, activeBox, activeImageBox, title, description, price, data, styleData, paragraphShorter, showDetail, handleShow, handleEditMode, handleChangeTitle, handleChangePrice, handleChangeDescription, handleClickActiveBox, handleClickActiveImageBox, handleDeleteProduct, onEdit}){
    return (
        <ItemsWrapper
        >
            
                {
                    activeBox &&
                    <DeleteItemsButton onClick={handleDeleteProduct}>X</DeleteItemsButton>
                }
                <ItemsClick
                    ref={productRef}
                    style={activeBox ? {boxShadow: '0px 0px 0px 1px blue inset'}: {}}
                    onClick={() => {
                            handleClickActiveBox(true);
                            handleEditMode({mode: 'Background', type: 'background', component: 'specialItems'})}
                    }
                /> 
            <ItemsImageClick
                style={activeImageBox ? {boxShadow: '0px 0px 0px 1px blue inset'}: {}}
                ref={imageRef}
                onClick={() => {
                        handleClickActiveImageBox(true);
                        handleEditMode({mode: 'Image', type: 'image', component: 'specialItems', id: data.id, image: data.image, category: items.name})}
                }
            >
                <ItemsImageEdit
                    style={{
                            borderRadius: styleData.specialItems.style.image.borderRadius,
                            filter: styleData.specialItems.style.image.filter,
                        }}
                >
                    <img 
                        src={data.image} 
                        alt={data.name}
                        // crossOrigin="anonymous"
                    />
                </ItemsImageEdit>
            </ItemsImageClick> 
            {
                onEdit? 
                <ItemsText>
                    <ItemsInput
                        onClick={() => handleEditMode({mode: 'Text', type: 'title', component: 'specialItems'})}
                        style={styleData.specialItems.style.title}
                        value={title}
                        onChange={(e) => handleChangeTitle(e.target.value)}
                    />
                    <ItemsInput
                        onClick={() => {
                            handleEditMode({mode: 'Text', type: 'paragraph', component: 'specialItems'});
                            handleShow(true);
                        }}
                        style={styleData.specialItems.style.paragraph}
                        value={showDetail ? description: paragraphShorter(description)}
                        onChange={(e) => handleChangeDescription(e.target.value)}
                    />
                    {/* <ItemsInput
                        onClick={() => handleEditMode({mode: 'Text', type: 'price', component: 'specialItems'})}
                        style={styleData.specialItems.style.price}
                        value={price}
                        onChange={(e) => handleChangePrice(e.target.value)}
                    /> */}
                    <PriceInput
                        handleEditMode={handleEditMode}
                        handleChangePrice={handleChangePrice}
                        style={styleData.specialItems.style.price} 
                        componentType="specialItems"
                        prefix="Rp"
                        price={price}
                    />
                </ItemsText>:
                <ItemsText>
                    <h4 style={styleData.specialItems.style.title}>{title}</h4>
                    <p style={styleData.specialItems.style.paragraph}>{paragraphShorter(description)}</p>
                    <h5 style={styleData.specialItems.style.price}>{price}</h5>
                </ItemsText>
            }
            <ItemsBackground
                style={styleData.specialItems.style.background}
            />
            <AddButton 
                style={styleData.specialItems.style.button} 
                onClick={() => {
                    handleEditMode({mode: 'Button', type: 'button', component: 'specialItems', buttonIndex: 0, id: 1})
                }}
                
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={25}
                    width={25}
                    viewBox="0 0 24 24"
                    fill={styleData.specialItems.style.button.color}
                >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                </svg>
            </AddButton>
        </ItemsWrapper>
    )
}