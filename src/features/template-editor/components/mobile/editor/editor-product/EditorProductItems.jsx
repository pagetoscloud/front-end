import { useState } from "react";
import { 
    ProductListItems,
    ProductListItemsDetail, ProductListItemsDisplay, 
    ProductListItemsImage, ProductListItemsWrapper 
} from "./EditorProductItems.styled";

export default function EditorProductItems({data, handleDeleteProduct}){
    const [show, setShow] = useState(false);
    const handleShow = () => {
        if (show){
            setShow(false);
        } else {
            setShow(true);
        }
    }
    return (
        <ProductListItemsWrapper>
            <ProductListItems onClick={handleShow}>
                <ProductListItemsDisplay>
                    <h4>{data.name}</h4>
                    <p>Rp {data.price}</p>
                </ProductListItemsDisplay>
                {
                    show && 
                    <ProductListItemsDetail>
                        <ProductListItemsImage>
                            <img src={data.image} alt={data.name} />
                        </ProductListItemsImage>
                        <p>{data.description}</p>
                    </ProductListItemsDetail>
                }
            </ProductListItems>
            <p onClick={() => handleDeleteProduct(data.id)}>-</p>
        </ProductListItemsWrapper>
    )
}