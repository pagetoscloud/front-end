import { useState } from "react";
import { changeCategoryName } from "../../../features/template-editor/templateContentSlice";
import { useDispatch } from "react-redux";
import CategoryTwoEdit from "./CategoryTwoEdit";
import CategoryTwoPreview from "./CategoryTwoPreview";

export default function CategoryTwo({styleData, data, handleEditMode, mode}){
    const [category, setCategory] = useState(data? data.name : '');
    const dispatch = useDispatch();
    const handleChangeCategory = (e) => {
        setCategory(e);
        dispatch(changeCategoryName({
            id: data.id,
            data: e
        }));
    }
    return (
       <>
        {
            mode === 'edit'?
            <CategoryTwoEdit 
                handleChangeCategory={handleChangeCategory}
                handleEditMode={handleEditMode}
                styleData={styleData}
                category={category}
            />:
            <CategoryTwoPreview 
                styleData={styleData}
                category={category}
            />
        }
       </>
    )
}