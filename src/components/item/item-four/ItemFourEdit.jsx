import PriceInput from "../../others/price-input/PriceInput";
import { 
    DeleteItemsButton,
    ItemsBackground, ItemsClick, 
    ItemsImageClick, ItemsImageEdit, 
    ItemsInput, ItemsText, 
    ItemsWrapper 
} from "./ItemFourEdit.styled";

export default function ItemFourEdit({items, productRef, imageRef, activeBox, activeImageBox, title, description, price, data, styleData, paragraphShorter, showDetail, handleShow, handleEditMode, handleChangeTitle, handleChangePrice, handleChangeDescription, handleClickActiveBox, handleClickActiveImageBox, handleDeleteProduct, onEdit}){
    return (
        <ItemsWrapper
        >
            
                {
                    activeBox &&
                    <DeleteItemsButton onClick={handleDeleteProduct}>X</DeleteItemsButton>
                }
                <ItemsClick
                    ref={productRef}
                    data-testid="background-click-area"
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
                onEdit ?
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
                        prefix="Rp"
                        price={price}
                        componentType="specialItems"
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
        </ItemsWrapper>
    )
}