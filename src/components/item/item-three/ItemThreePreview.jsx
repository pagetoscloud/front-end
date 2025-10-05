import { toCurrency } from "../../../utils/utils";
import { ItemsBackground, ItemsCircle, ItemsClick, ItemsImage, ItemsText, ItemsWrapper } from "./ItemThreePreview.styled";

export default function ItemThreePreview({styleData, data, title, price, description, showDetail, handleShow, paragraphShorter, handleChangePage, handleChangeCurrentItems}){
    return (
        <ItemsWrapper
            onClick={() => {
                handleChangeCurrentItems(data)
                handleChangePage('page two')
            }}
        >
            <ItemsClick/>
            <ItemsCircle
                style={styleData.product.style.circle}
            >
                <ItemsImage
                    style={{borderRadius: styleData.product.style.image.borderRadius}}
                >
                    <img 
                        src={data.image} 
                        alt={data.name} 
                    />
                </ItemsImage>
            </ItemsCircle>
            <ItemsText>
                <ItemsText>
                    <h4 style={styleData.product.style.title}>{title}</h4>
                    <p style={styleData.product.style.paragraph}>{paragraphShorter(description)}</p>
                    <h5 style={styleData.product.style.price}>{toCurrency(price)}</h5>
                </ItemsText>
            </ItemsText>
            <ItemsBackground
                style={styleData.product.style.background}
            />
        </ItemsWrapper>
    )
}