import { CategoryText } from "./CategoryTwoPreview.styled";

export default function CategoryTwoPreview({category, styleData}){
    return (
        <CategoryText>
            <h3 style={styleData.product.style.category}
            >
            {category} 
            </h3>
        </CategoryText>
    )
}