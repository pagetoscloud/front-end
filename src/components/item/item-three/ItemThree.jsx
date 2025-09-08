import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeProductText } from "../../../features/template-editor/templateContentSlice";
import ItemsThreeEdit from "./ItemThreeEdit";
import ItemsThreePreview from "./ItemThreePreview";

export default function ItemThree({styleData, data, items, handleEditMode, mode, handleChangePage, handleChangeCurrentItems, onEdit}){
    const [title, setTitle] = useState(data.name);
    const [description, setDescription] = useState(data.description);
    const [price, setPrice] = useState(data.price);
    const [showDetail, setShowDetail] = useState(false);
    const handleShow = (e) => {
        setShowDetail(e)
    }
    const dispatch = useDispatch();
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
        setPrice(data.price)
    }, [data])
    return (
        <>
            {
                mode === "edit" ?
                <ItemsThreeEdit 
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
                    onEdit={onEdit}
                /> :
                <ItemsThreePreview 
                    handleChangeDescription={handleChangeDescription}
                    handleChangePrice={handleChangePrice}
                    handleChangeTitle={handleChangeTitle}
                    paragraphShorter={paragraphShorter}
                    handleEditMode={handleEditMode}
                    handleChangePage={handleChangePage}
                    handleChangeCurrentItems={handleChangeCurrentItems}
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