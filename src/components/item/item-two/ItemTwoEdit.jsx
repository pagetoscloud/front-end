import { 
    ItemsBackground, ItemsClick, 
    ItemsDescription, 
    ItemsImage, ItemsInput, 
    ItemsPrice, 
    ItemsText, ItemsTitle, ItemsWrapper, 
    ShowButton 
} from "./ItemTwoEdit.styled";
import arrowUp from '../../../assets/images/arrow-up-white.png';
// import { useState } from "react";

export default function ItemTwoEdit({styleData, data, items, title, price, description, showDetail, handleEditMode, handleShow,  handleChangeTitle, handleChangeDescription, handleChangePrice, paragraphShorter, onEdit}){
    return (
        <ItemsWrapper >
            <ItemsClick
                onClick={() => {
                    handleEditMode({mode: 'Background', type: 'background', component: 'product'})}
                }
            />
            <ItemsImage
                style={styleData.product.style.image}
            
            >
                <img 
                    src={data.image} 
                    alt={data.name} 
                    onClick={() => handleEditMode({mode: 'Image', type: 'image', component: 'product', id: data.id, image: data.image, category: items.name})}
                    // crossOrigin="anonymous"
                />
            </ItemsImage>
            {
                onEdit ?
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
                    <ItemsInput
                        onClick={() => handleEditMode({mode: 'Text', type: 'price', component: 'product'})}
                        style={styleData.product.style.price}
                        value={price}
                        onChange={(e) => handleChangePrice(e.target.value)}
                    />
                </ItemsText>:
                <ItemsText>
                    <ItemsTitle style={styleData.product.style.title}>{title}</ItemsTitle>
                    <ItemsDescription style={styleData.product.style.paragraph}>{description}</ItemsDescription>
                    <ItemsPrice style={styleData.product.style.price}>{price}</ItemsPrice>
                </ItemsText>
            }
            <ShowButton>
                <img src={arrowUp} alt="show button" />
            </ShowButton>
            <ItemsBackground
                style={styleData.product.style.background}
            />
        </ItemsWrapper>
    )
}