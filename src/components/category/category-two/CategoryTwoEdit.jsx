import { CategoryText } from "./CategoryTwoEdit.styled";

export default function CategoryTwoEdit({styleData, category, handleEditMode, handleChangeCategory}){
    return (
        <CategoryText>
            <textarea 
                onClick={() => handleEditMode({mode: 'Text', type: 'category', component: 'product'})}
                style={styleData.product.style.category}
                value={category} 
                onChange={(e) => handleChangeCategory(e.target.value)}
            />
        </CategoryText>
    )
}