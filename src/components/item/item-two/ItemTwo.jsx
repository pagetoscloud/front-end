import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeProductText } from "../../../features/template-editor/templateContentSlice";
import ItemsTwoEdit from "./ItemTwoEdit";
import ItemsTwoPreview from "./ItemTwoPreview";

export default function ItemTwo({styleData, data, items, handleEditMode, mode, handleChangePage, handleChangeCurrentItems, onEdit}){
    const [title, setTitle] = useState(data.name);
    const [description, setDescription] = useState(data.description);
    const [price, setPrice] = useState(data.price);
    const [showDetail, setShowDetail] = useState(false);
    const dispatch = useDispatch();
    const handleShow = (e) => {
        setShowDetail(e)
    }
    const paragraphShorter = (e) => {
        let paragraphResult = '';
        for (let i = 0; i < e.length; i++){
            paragraphResult += e[i];
            if (i >= 25){
                break;
            }
        }
        paragraphResult += '..'
        return paragraphResult;
    }
    const handleChangeProductText = (data) => {
        dispatch(changeProductText({
            category: data.category,
            items: data.items,
            data: data.value,
            id: data.id,
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
        setDescription(data.description);
        setPrice(data.price);
    }, [data]);
    return (
        <>
            {
                mode === 'edit' ?
                <ItemsTwoEdit 
                    handleChangeDescription={handleChangeDescription}
                    handleChangePrice={handleChangePrice}
                    handleChangeTitle={handleChangeTitle}
                    paragraphShorter={paragraphShorter}
                    handleEditMode={handleEditMode}
                    handleShow={handleShow}
                    showDetail={showDetail}
                    styleData={styleData}
                    data={data}
                    price={price}
                    title={title}
                    description={description}
                    items={items}
                    onEdit={onEdit}
                /> :
                <ItemsTwoPreview 
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