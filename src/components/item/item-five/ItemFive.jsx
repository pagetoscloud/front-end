import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changeProductText, deleteProduct } from "../../../features/template-editor/templateContentSlice";
import ItemsFiveEdit from "./ItemFiveEdit";
import ItemsFivePreview from "./ItemFivePreview";
export default function ItemFive({styleData, data, items, handleEditMode, mode, handleChangePage, handleChangeCurrentItems, onEdit}){
    const [title, setTitle] = useState(data.name);
    const [description, setDescription] = useState(data.description);
    const [price, setPrice] = useState(data.price);
    const [showDetail, setShowDetail] = useState(false);
    const [activeBox, setActiveBox] = useState(false);
    const [activeImageBox, setActiveImageBox] = useState(false);
    const productRef = useRef(null);
    const imageRef = useRef(null);
    const dispatch = useDispatch();
    const handleClickActiveBox = (e) => {
        setActiveBox(e);
    }
    const handleCLickActiveImageBox = (e) => {
        setActiveImageBox(e);
    }
    const handleShow = (e) => {
        setShowDetail(e)
    }
    const handleDeleteProduct = () => {
        dispatch({
            ...deleteProduct({
                category: items.name,
                id: data.id,
            }),
            meta: {record: true}
        })
    }
    const paragraphShorter = (e) => {
        let paragraphResult = '';
        for (let i = 0; i < e.length; i++){
            paragraphResult += e[i];
            if (i >= 12){
                break;
            }
        }
        paragraphResult += '..'
        return paragraphResult;
    }
    const handleChangeProductText = (e) => {
        dispatch(changeProductText({
            category: e.category,
            items: e.items,
            data: e.value,
            id: e.id,
        }));
    }
    const handleChangeTitle = (e) => {
        setTitle(e);
        handleChangeProductText({items: 'name', value: e, id: data.id, category: items.name})
    }
    const handleChangeDescription = (e) => {
        setDescription(e);
        handleChangeProductText({items: 'description', value: e, id: data.id, category: items.name})
    }
    const handleChangePrice = (e) => {
        setPrice(e);
        handleChangeProductText({items: 'price', value: e, id: data.id, category: items.name})
    }
    useEffect(() => {
        setTitle(data.name);
        setPrice(data.price);
        setDescription(data.description);
    }, [data])
    useEffect(() => {
        function handleClickOutside(e) {
            if (productRef.current && !productRef.current.contains(e.target)) {
                setActiveBox(false);
            }
            if (imageRef.current && !imageRef.current.contains(e.target)) {
                setActiveImageBox(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [activeBox, productRef]);
    return (
        <>
        {
            mode === 'edit' ?
            <ItemsFiveEdit 
                handleClickActiveImageBox={handleCLickActiveImageBox}
                handleClickActiveBox={handleClickActiveBox}
                handleChangeDescription={handleChangeDescription}
                handleChangePrice={handleChangePrice}
                handleChangeTitle={handleChangeTitle}
                paragraphShorter={paragraphShorter}
                handleEditMode={handleEditMode}
                handleDeleteProduct={handleDeleteProduct}
                handleShow={handleShow}
                showDetail={showDetail}
                styleData={styleData}
                productRef={productRef} 
                imageRef={imageRef} 
                activeBox={activeBox}
                activeImageBox={activeImageBox}
                data={data}
                price={price}
                title={title}
                description={description}
                items={items}
                onEdit={onEdit}
            /> :
            <ItemsFivePreview 
                handleChangeCurrentItems={handleChangeCurrentItems}
                handleChangeDescription={handleChangeDescription}
                handleChangePrice={handleChangePrice}
                handleChangeTitle={handleChangeTitle}
                paragraphShorter={paragraphShorter}
                handleEditMode={handleEditMode}
                handleChangePage={handleChangePage}
                handleShow={handleShow}
                showDetail={showDetail}
                styleData={styleData}
                description={description}
                price={price}
                title={title}
                data={data}
            />
        }
        </>
    )
}