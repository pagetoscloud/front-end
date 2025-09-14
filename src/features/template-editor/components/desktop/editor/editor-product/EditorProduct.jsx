import { 
    EditorProductContainer, EditorProductHeader,
    SuggestionText, 
} from "./EditorProduct.styled";
import { 
        EditorContentWrapper, TextButtonBold, TitleHeader 
} from "../../../../assets/Global.styled";
import {useWindowSize} from '../../../../../../hooks/useWindowSize';
import EditorProductItems from "./EditorProductItems";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addNewCategory } from "../../../../templateContentSlice";
import { CustomSelect } from "../../../micro-components/CustomSelect";
import leftArrow from '../../../../../../assets/images/left-arrow.png';
import { deleteProduct } from "../../../../templateProductSlice";

export default function EditorProduct({handleEditMode}){
    const size = useWindowSize();
    const height = size[0] - (190);
    const dispatch = useDispatch();
    const productData = useSelector(state => state.product.product.list);
    // const Data = useSelector(state => state.product);
    const findCategory = (e) => {
        let data = [];
        for (let i = 0; i < e.length; i++){
            data.push(e[i].name)
        }
        return data;
    }
    const category = productData.length > 0 ? findCategory(productData) : [];
    const [currentCategory, setCurrentCategory] = useState(productData.length > 0 ? category[0] : []);
    const productItems = productData.length > 0 ? productData.filter(data => data.name === currentCategory) : [];
    const product = productItems.length > 0 ? productItems[0].listItems : [];
    const handleDeleteProduct = (id) => {
        dispatch({
            ...deleteProduct({
                category: currentCategory,
                id: id,
            }),
            meta: {record: true}
        })
    }
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
                <img onClick={() => handleEditMode(false)} src={leftArrow} alt="close icon" />
                <h3>Product</h3>
            </TitleHeader>
            {
                product.length > 0 ?
                <>
                    <EditorProductHeader>
                        <CustomSelect 
                            value={currentCategory}
                            list={category}
                            handleChange={setCurrentCategory}
                            handleAddNewCategory={handleAddNewCategory}
                        />
                        <TextButtonBold onClick={() => handleEditMode('New Product')}>Add</TextButtonBold>
                    </EditorProductHeader>
                    <EditorContentWrapper style={{height: height}}>
                        {
                            product &&
                            product.map((data, index) => {
                                return (
                                    <EditorProductItems 
                                        data={data} 
                                        handleDeleteProduct={handleDeleteProduct} 
                                        index={index}
                                    />
                                )
                            })
                        }
                    </EditorContentWrapper>
                </>: 
                <>
                    <SuggestionText>Empty Product</SuggestionText>
                </>
            }
        </EditorProductContainer>
    )
}