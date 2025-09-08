import { 
    EditorContentWrapper, InputEditorLarge, 
    LabelText, SelectEditorLarge, 
    TextAreaEditor, TextButtonBold, 
    TitleHeader 
} from "../../../../assets/Global.styled";
import { 
    EditorNewProductContainer, EditorNewProductHeader, 
    InputImage, InputImageButton, InputNewProductWrapper 
} from "./EditorNewProduct.styled";
import closeImage from '../../../../../../assets/images/close-icon.png';
import { useWindowSize } from "../../../../../../hooks/useWindowSize";
import uploadImageIcon from "../../../../../../assets/images/upload-image.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addNewProduct } from "../../../../templateProductSlice";

export default function EditorNewProduct({handleEditMode}){
    const size = useWindowSize();
    const height = size[0] - 190;
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('a');
    const contentData = useSelector(state => state.product.product);
    const findCategory = (e) => {
        let data = [];
        for (let i = 0; i < e.length; i++){
            data.push({name: e[i].name, id: e[i].id})
        }
        return data;
    }
    const category = findCategory(contentData.list);
    const [currentCategory, setCurrentCategory] = useState(category[0]);
    console.log(category, currentCategory);
    // const randomId = Math.floor(Math.random() * 123);
    const handleNewProduct = () => {
        if (name && price && description && currentCategory){
            dispatch({
                ...addNewProduct({
                    data: {
                        name: name,
                        price: price,
                        description: description,
                        image: image
                    },
                    category: currentCategory
                }),
                meta: {record: true}
            });
            console.log('added new product');
        }
    }
    return (
        <EditorNewProductContainer>
            <TitleHeader>
                <img onClick={() => handleEditMode(false)} src={closeImage} alt="close icon" />
                <h3>New Product</h3>
            </TitleHeader>
            <EditorNewProductHeader>
                <TextButtonBold onClick={handleNewProduct}>Add</TextButtonBold>
                <TextButtonBold onClick={() => handleEditMode('Product')}>Cancel</TextButtonBold>
            </EditorNewProductHeader>
            <EditorContentWrapper style={{height: height}}>
                <InputNewProductWrapper>
                    <InputImage>
                        <InputImageButton>
                            <img src={uploadImageIcon} alt='upload cloud icon' />
                        </InputImageButton>
                        <input
                            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} 
                            type='file' 
                        />
                    </InputImage>
                </InputNewProductWrapper>
                <InputNewProductWrapper>
                    <LabelText>Name</LabelText>
                    <InputEditorLarge>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text" 
                        />
                    </InputEditorLarge>
                </InputNewProductWrapper>
                <InputNewProductWrapper>
                    <LabelText>Price</LabelText>
                    <InputEditorLarge>
                        <input 
                            onChange={(e) => setPrice(e.target.value)}
                            type="text" 
                        />
                    </InputEditorLarge>
                </InputNewProductWrapper>
                <InputNewProductWrapper>
                    <LabelText>Category</LabelText>
                    <SelectEditorLarge>
                        <select value={currentCategory} onChange={(e) => setCurrentCategory(e.target.value)}>
                            {
                                category.map(data => {
                                    return <option>{data.name}</option>
                                })
                            }
                        </select>
                    </SelectEditorLarge>
                </InputNewProductWrapper>
                <InputNewProductWrapper>
                    <LabelText>Description</LabelText>
                    <TextAreaEditor>
                        <textarea 
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        />
                    </TextAreaEditor>
                </InputNewProductWrapper>
            </EditorContentWrapper>
        </EditorNewProductContainer>
    )
}