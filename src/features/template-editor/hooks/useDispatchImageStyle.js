import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { changeStyleImage } from "../templateStyleSlice";

export function useDispatchImageStyle(data, editMode){
    const [imageOpacity, setImageOpacity] = useState(data[editMode.component].data[editMode.type].opacity);
    const [imageBlur, setImageBlur] = useState(data[editMode.component].data[editMode.type].filter.value);
    const [imageBorderRadius, setImageBorderRadius] = useState(data[editMode.component].data[editMode.type].borderRadius);
    const [imageFilter, setImageFilter] = useState(data[editMode.component].data[editMode.type].filter.type);
    const dispatch = useDispatch();
    console.log(imageFilter)
    console.log(imageOpacity)
    useEffect(() => {
        setImageOpacity(data[editMode.component].data[editMode.type].opacity);
        setImageBlur(data[editMode.component].data[editMode.type].filter.value);
        setImageBorderRadius(data[editMode.component].data[editMode.type].borderRadius);
        setImageFilter(data[editMode.component].data[editMode.type].filter.type);
    }, [data, editMode.type, editMode.component]);
    const handleChangeImageOpacity = (e) => {
        setImageOpacity(e);
        dispatch({
            ...changeStyleImage({
                component: editMode.component,
                itemData: 'opacity',
                itemStyle: 'opacity',
                data: e,
                style: `${e}%`
            }),
            meta: {record: true}
        });
    }
    const handleChangeImageBlur = (e) => {
        setImageBlur(e);
        dispatch(changeStyleImage({
            component: editMode.component,
            itemData: 'filter',
            itemStyle: 'filter',
            data: {type: 'blur', value: e},
            style: `blur(${e}px)`
        }));
    }
    const handleChangeImageBorderRadius = (e) => {
        setImageBorderRadius(e);
        dispatch(changeStyleImage({
            component: editMode.component,
            itemData: 'borderRadius',
            itemStyle: 'borderRadius',
            data: e,
            style: `${e}px`
        }));
    }
    const handleChangeImageFilter = (e) => {
        setImageFilter(e.data);
        dispatch(changeStyleImage({
            component: editMode.component,
            itemData: 'filter',
            itemStyle: 'filter',
            data: e.data,
            style: e.style
        }));
    }
    return [
        imageOpacity, handleChangeImageOpacity,
        imageBlur, handleChangeImageBlur,
        imageBorderRadius, handleChangeImageBorderRadius,
        imageFilter, handleChangeImageFilter
    ]
}