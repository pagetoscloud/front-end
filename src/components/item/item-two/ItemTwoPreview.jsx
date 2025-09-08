import { 
    ItemsBackground, ItemsDescription, ItemsImage, 
    ItemsPrice, 
    ItemsText, ItemsTitle, ItemsWrapper, 
    ShowButton 
} from "./ItemTwoPreview.styled";
import arrowUp from '../../../assets/images/arrow-up-white.png';

export default function ItemsTwoPreview({styleData, data, title, price, description, showDetail, handleShow, paragraphShorter, handleChangeCurrentItems, handleChangePage}){
    return (
        <ItemsWrapper
            onClick={() => {
                handleChangeCurrentItems(data);
                handleChangePage('page two');
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
                <ItemsTitle style={styleData.product.style.title}>{title}</ItemsTitle>
                <ItemsDescription style={styleData.product.style.paragraph}>{description}</ItemsDescription>
                <ItemsPrice style={styleData.product.style.price}>{price}</ItemsPrice>
            </ItemsText>
            <ShowButton>
                <img src={arrowUp} alt="show button" />
            </ShowButton>
            <ItemsBackground
                style={styleData.product.style.background}
            />
        </ItemsWrapper>
    )
}