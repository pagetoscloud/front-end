import { useState } from "react";
import { CategoryText } from "./Mockup.styled";

export function CategoryName({styleData, data, handleEditMode, handleChangeProductCategory}){
    const [category, setCategory] = useState(data.name);
    const handleChangeCategory = (e) => {
        setCategory(e);
        handleChangeProductCategory({
            id: data.id,
            name: e
        })
    }
    return (
        <CategoryText>
            <textarea 
                style={styleData.product.style.category}
                value={category} 
                onChange={(e) => handleChangeCategory(e.target.value)}
                onClick={() => handleEditMode({mode: 'Text', type: 'category', component: 'product'})}
            />
        </CategoryText>
    )
}