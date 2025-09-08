import { useEffect, useState } from "react";
import { CategoryText } from "./CategoryOne.styled";
import { useDispatch } from "react-redux";
import { changeCategoryName } from "../../../features/template-editor/templateContentSlice";
import { editCategory } from "../../../features/template-editor/templateProductSlice";

export default function CategoryOne({styleData, data, handleEditMode, mode}){
    const [category, setCategory] = useState(data.name);
    const dispatch = useDispatch();
    const handleChangeCategory = (e) => {
        setCategory(e);
        dispatch({
            ...editCategory({
                id: data.id,
                data: e
            }), 
            meta: {record: true}
        });
        dispatch(changeCategoryName({
            id: data.id,
            data: e
        }));
    }
    useEffect(() => {
        setCategory(data.name);
    }, [data])
    return (
        <CategoryText
        >
            {
                mode === 'edit'?
                <textarea 
                    style={styleData.product.style.category}
                    value={category} 
                    onChange={(e) => handleChangeCategory(e.target.value)}
                    onClick={() => handleEditMode({mode: 'Text', type: 'category', component: 'product'})}
                />:
                <h3 style={styleData.product.style.category}>{category}</h3>
            }
        </CategoryText>
    )
}