import { toCurrency } from "../../../utils/utils";
import { ItemsBackground, ItemsImage, ItemsText, ItemsWrapper } from "./ItemOnePreview.styled";

export default function ItemOnePreview({styleData, data, title, price, description, showDetail, handleShow, paragraphShorter, handleChangeCurrentItems, handleChangePage}){
    // function toCurrency(num, locale = "id-ID", currency = "IDR") {
    //     return new Intl.NumberFormat(locale, {
    //         style: "currency",
    //         currency: currency,
    //     }).format(num);
    // }

    return (
        <ItemsWrapper
            onClick={() => {
                handleChangePage('page two');
                handleChangeCurrentItems(data);
            }}
        >
            <ItemsImage
                style={styleData.product.style.image}
            >
                <img 
                    src={data.image} 
                    alt={data.name} 
                />
            </ItemsImage>
            <ItemsText>
                <h4 style={styleData.product.style.title}>{title}</h4>
                <p style={styleData.product.style.paragraph}>{paragraphShorter(description)}</p>
                <h5 style={styleData.product.style.price}>{toCurrency(price)}</h5>
            </ItemsText>
            <ItemsBackground
                style={styleData.product.style.background}
            />
        </ItemsWrapper>
    )
}