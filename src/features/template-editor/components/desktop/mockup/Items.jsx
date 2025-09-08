import { useState } from "react"
import { 
        ItemsBackground, ItemsClick, 
        ItemsImage, ItemsInput, 
        ItemsText, ItemsWrapper
} from "./Mockup.styled"

export default function Items({styleData, data, items, handleEditMode, handleChangeProductText}){
    const [title, setTitle] = useState(data.name);
    const [description, setDescription] = useState(data.description);
    const [price, setPrice] = useState(data.price);
    const [showDetail, setShowDetail] = useState(false);
    const paragraphShorter = (e) => {
        let paragraphResult = '';
        for (let i = 0; i < e.length; i++){
            paragraphResult += e[i];
            if (i >= 12){
                break;
            }
        }
        paragraphResult += '..'
        return paragraphResult;
    }
    const handleChangeTitle = (e) => {
        setTitle(e);
        handleChangeProductText({items: 'name', value: e, id: data.id, category: items.name})
    }
    const handleChangeDescription = (e) => {
        setDescription(e);
        handleChangeProductText({items: 'description', value: e, id: data.id, category: items.name})
    }
    const handleChangePrice = (e) => {
        setPrice(e);
        handleChangeProductText({items: 'price', value: e, id: data.id, category: items.name})
    }
    return (
        <ItemsWrapper>
            <ItemsClick
                onClick={() => handleEditMode({mode: 'Background', type: 'background', component: 'product'})}
            />
            <ItemsImage
                style={styleData.product.style.image}
            
            >
                <img 
                    src={data.image} 
                    alt={data.name} 
                    onClick={() => handleEditMode({mode: 'Image', type: 'image', component: 'product', id: data.id, image: data.image, category: items.name})}
                />
            </ItemsImage>
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
                        setShowDetail(true);
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
            </ItemsText>
            <ItemsBackground 
                style={styleData.product.style.background}
            />
        </ItemsWrapper>
    )
}