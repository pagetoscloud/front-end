import { AddButton, ItemsBackground, ItemsImage, ItemsText, ItemsWrapper } from "./ItemFivePreview.styled";

export default function ItemsFivePreview({styleData, data, title, price, description, showDetail, handleShow, paragraphShorter, handleChangeCurrentItems, handleChangePage}){
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
                <h5 style={styleData.specialItems.style.price}>{price}</h5>
            </ItemsText>
            <ItemsBackground
                style={styleData.specialItems.style.background}
            />
            <AddButton 
                style={styleData.specialItems.style.button} 
                onClick={() => {
                    handleChangePage('page three');
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