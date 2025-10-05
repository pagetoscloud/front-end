import { toCurrency } from "../../../utils/utils";
import { ItemsBackground, ItemsImage, ItemsText, ItemsWrapper } from "./ItemFourPreview.styled";

export default function ItemFourPreview({styleData, data, title, price, description, showDetail, handleShow, paragraphShorter, handleChangeCurrentItems, handleChangePage}){
    return (
        <ItemsWrapper
            onClick={() => {
                handleChangePage('page two');
                handleChangeCurrentItems(data);
            }}
        >
            <ItemsImage
                style={styleData.specialItems.style.image}
            >
                <img 
                    src={data.image} 
                    alt={data.name} 
                />
            </ItemsImage>
            <ItemsText>
                <h4 style={styleData.specialItems.style.title}>{title}</h4>
                <p style={styleData.specialItems.style.paragraph}>{paragraphShorter(description)}</p>
                <h5 style={styleData.specialItems.style.price}>{toCurrency(price)}</h5>
            </ItemsText>
            <ItemsBackground
                style={styleData.specialItems.style.background}
            />
        </ItemsWrapper>
    )
}