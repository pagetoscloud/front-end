import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { changeImage, changeImageProduct } from "../templateContentSlice";
import { ImageListData } from "../../../data/ImageListData";
import { editProduct } from "../templateProductSlice";


export function useDispatchImageContent(data, editMode){
    const [browserImage, setBrowserImage] = useState(editMode.image);
    const [selectedUploadImage, setSelectedUploadImage] = useState(editMode.image);
    const dispatch = useDispatch();
    useEffect(() => {
        setBrowserImage(editMode.image);
        setSelectedUploadImage(editMode.image);
    }, [editMode]);
    const handleChangeImageBrowser = (e) => {
        const imageData = ImageListData.filter(data => data.id === e);
        if (editMode.component === 'product'){
            dispatch({
                ...editProduct({
                    items: 'image',
                    component: editMode.component,
                    category: editMode.category,
                    id: editMode.id,
                    data: imageData[0].image
                }),
                meta: {record: true}
            })
            setBrowserImage(imageData[0].image);
        } else {
            const imageData = ImageListData.filter(data => data.id === e);
            dispatch({
                ...changeImage({
                        component: 'banner',
                        itemData: 'image',
                        itemStyle: 'image',
                        data: imageData[0].image,
                }),
                meta: {record: true}
            });
            setBrowserImage(imageData[0].image);
        }
    }
    const handleChangeImageUpload = (e) => {
        if (editMode.component === 'product'){
            setSelectedUploadImage(e);
            dispatch(changeImageProduct({
                component: editMode.component,
                category: editMode.category,
                id: editMode.id,
                data: e
            }))
        } else {
            setSelectedUploadImage(e);
            dispatch(changeImage({
                component: 'banner',
                itemData: 'image',
                itemStyle: 'image',
                data: e
            }));
        }
    } 
    return [
        browserImage, handleChangeImageBrowser,
        selectedUploadImage, handleChangeImageUpload
    ]
}