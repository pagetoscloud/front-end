
import { 
    DeleteItemsButton,
        ItemsBackground, ItemsClick, 
        ItemsImageClick, ItemsImageEdit, 
        ItemsInput, ItemsText, 
        ItemsWrapper 
} from "./ItemOneEdit.styled";

export default function ItemOneEdit({items, productRef, imageRef, activeBox, activeImageBox, title, description, price, data, styleData, paragraphShorter, showDetail, handleShow, handleEditMode, handleChangeTitle, handleChangePrice, handleChangeDescription, handleClickActiveBox, handleClickActiveImageBox, handleDeleteProduct, onEdit}){
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
                            handleEditMode({mode: 'Background', type: 'background', component: 'product'})}
                    }
                /> 
            <ItemsImageClick
                style={activeImageBox ? {boxShadow: '0px 0px 0px 1px blue inset'}: {}}
                ref={imageRef}
                onClick={() => {
                        handleClickActiveImageBox(true);
                        handleEditMode({mode: 'Image', type: 'image', component: 'product', id: data.id, image: data.image, category: items.name})}
                }
            >
                <ItemsImageEdit
                    style={{
                            borderRadius: styleData.product.style.image.borderRadius, 
                            filter: styleData.product.style.image.filter,
                            opacity: styleData.product.style.image.opacity,
                        }}
                >
                    <img 
                        src={data.image} 
                        alt={data.name} 
                        // crossOrigin="anonymous"
                    />
                </ItemsImageEdit>
            </ItemsImageClick> 
            <ItemsText>
                {
                    onEdit ?
                    <>
                        <ItemsInput
                            onClick={() => handleEditMode({mode: 'Text', type: 'title', component: 'product'})}
                            style={styleData.product.style.title}
                            value={title}
                            onChange={(e) => handleChangeTitle(e.target.value)}
                        />
                        <ItemsInput
                            onClick={() => {
                                handleEditMode({mode: 'Text', type: 'paragraph', component: 'product'});
                                handleShow(true);
                            }}
                            style={styleData.product.style.paragraph}
                            value={showDetail ? description: paragraphShorter(description)}
                            onChange={(e) => handleChangeDescription(e.target.value)}
                        />
                        <ItemsInput
                            onClick={() => handleEditMode({mode: 'Text', type: 'price', component: 'product'})}
                            style={styleData.product.style.price}
                            value={price}
                            onChange={(e) => handleChangePrice(e.target.value)}
                        />
                    </>:
                    <>
                        <h4 style={styleData.product.style.title}>{title}</h4>
                        <p style={styleData.product.style.paragraph}>{paragraphShorter(description)}</p>
                        <h5 style={styleData.product.style.price}>{price}</h5>
                    </>
                }
            </ItemsText>
            <ItemsBackground
                style={styleData.product.style.background}
            />
        </ItemsWrapper>
    )
}