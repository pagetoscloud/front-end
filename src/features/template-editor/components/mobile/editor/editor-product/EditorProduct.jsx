import { 
    EditorProductContainer, EditorProductHeader, 
} from "./EditorProduct.styled";
import { 
        EditorContentWrapper, TextButtonBold, TitleHeader 
} from "../../../../assets/Global.styled";
// import {useWindowSize} from '../../../../../../hooks/useWindowSize';
import EditorProductItems from "./EditorProductItems";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addNewCategory } from "../../../../templateContentSlice";
import { CustomSelect } from "../../../desktop/micro-components/CustomSelect";

export default function EditorProduct({handleEditMode}){
    // const size = useWindowSize();
    // const height = size[0] - (190);
    const dispatch = useDispatch();
    const contentData = useSelector(state => state.templateContent);
    const findCategory = (e) => {
        let data = [];
        for (let i = 0; i < e.length; i++){
            data.push(e[i].name)
        }
        return data;
    }
    const category = findCategory(contentData.product);
    const [currentCategory, setCurrentCategory] = useState(category[0]);
    const productItems = contentData.product.filter(data => data.name === currentCategory);
    const product = productItems[0].listItems;
    const handleAddNewCategory = () => {
        dispatch(addNewCategory({
            data: {
                name: 'New Category',
                listItems: [
                    {
                        id: 1,
                        name: 'buldak',
                        price: 4000,
                        description: 'wkejkejfkej',
                    }
                ]
            }
        }));
    }
    return (
        <EditorProductContainer>
            <TitleHeader>
                <h3>Product</h3>
                {/* <img onClick={() => handleEditMode(false)} src={rightArrow} alt="close icon" /> */}
            </TitleHeader>
            <EditorProductHeader>
                <CustomSelect
                    value={currentCategory}
                    list={category}
                    handleChange={setCurrentCategory}
                    handleAddNewCategory={handleAddNewCategory}
                />
                <TextButtonBold onClick={() => handleEditMode('New Product')}>Add</TextButtonBold>
            </EditorProductHeader>
            <EditorContentWrapper style={{height: 320}}>
                {
                    product &&
                    product.map((data, index) => {
                        return (
                            <EditorProductItems data={data} index={index}/>
                        )
                    })
                }
            </EditorContentWrapper>
        </EditorProductContainer>
    )
}