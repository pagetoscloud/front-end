import PriceInput from "../../others/price-input/PriceInput";
import { ItemsBackground, ItemsCircle, ItemsClick, ItemsImage, ItemsInput, ItemsText, ItemsWrapper } from "./ItemThreeEdit.styled";


export default function ItemThreeEdit({styleData, data, title, price, description, showDetail, items, handleEditMode, handleShow,  handleChangeTitle, handleChangeDescription, handleChangePrice, paragraphShorter, onEdit}){
    return (
        <ItemsWrapper>
            <ItemsClick
                onClick={() => handleEditMode({mode: 'Background', type: 'background', component: 'product'})}
            />
            <ItemsCircle
                style={styleData.product.style.circle}
                onClick={() => handleEditMode({mode: 'Background', type: 'circle', component: 'product'})}
            >
                <ItemsImage
                    style={{borderRadius: styleData.product.style.image.borderRadius}}
                    onClick={() => handleEditMode({mode: 'Image', type: 'image', component: 'product', id: data.id, image: data.image, category: items.name})}
                >
                    <img 
                        // onClick={() => handleEditMode({mode: 'Image', type: 'image', component: 'product', id: data.id, image: data.image, category: items.name})}
                        src={data.image} 
                        alt={data.name} 
                        // crossOrigin="anonymous"
                    />
                </ItemsImage>
            </ItemsCircle>
            {
                onEdit?
                <ItemsText>
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
                    {/* <ItemsInput
                        onClick={() => handleEditMode({mode: 'Text', type: 'price', component: 'product'})}
                        style={styleData.product.style.price}
                        value={price}
                        onChange={(e) => handleChangePrice(e.target.value)}
                    /> */}
                    <PriceInput
                        handleEditMode={handleEditMode}
                        handleChangePrice={handleChangePrice}
                        style={styleData.product.style.price} 
                        prefix="Rp"
                        price={price}
                    />
                </ItemsText>:
                <ItemsText>
                    <h4 style={styleData.product.style.title}>{title}</h4>
                    <p style={styleData.product.style.paragraph}>{paragraphShorter(description)}</p>
                    <h5 style={styleData.product.style.price}>{price}</h5>
                </ItemsText>

            }
            <ItemsBackground
                style={styleData.product.style.background}
            />
        </ItemsWrapper>
    )
}