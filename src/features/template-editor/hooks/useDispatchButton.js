import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeStyleButton } from "../templateStyleSlice";

export function useDispatchButton(data, editMode) {
    const [background, setBackground] = useState(data[editMode.component].data.button.background || {});
    const [color, setColor] = useState(data[editMode.component].data.button.color || {});
    const [borderRadius, setBorderRadius] = useState(data[editMode.component].data.button.borderRadius || 0);
    const [opacity, setOpacity] = useState(data[editMode.component].data.button.opacity || 1);
    const dispatch = useDispatch();
    const handleChangeBackgroundColor = (e) => {
        setBackground(e.data);
        dispatch({
            ...changeStyleButton({
                component: editMode.component,
                itemData: 'background',
                itemStyle: 'background',
                data: e.data,
                style: e.style
            }), 
            meta: {record: true}
        });
    }
    const handleChangeFontColor = (e) => {
        setColor(e.data);
        dispatch({
            ...changeStyleButton({
                component: editMode.component,
                itemData: 'color',
                itemStyle: 'color',
                data: e.data,
                style: e.style,
            }),
            meta: {record: true}
        });
    }
    const handleChangeBorderRadius = (e) => {
        setBorderRadius(e);
        dispatch({
            ...changeStyleButton({
                component: editMode.component,
                type: editMode.type,
                itemData: 'borderRadius',
                itemStyle: 'borderRadius',
                data: e,
                style: `${e}px`
            }),
            meta: {record: true}
        });
    }
    const handleChangeOpacity = (e) => {
        setOpacity(e);
        dispatch({
            ...changeStyleButton({
                component: editMode.component,
                type: editMode.type,
                itemData: 'opacity',
                itemStyle: 'opacity',
                data: e,
                style: `${e}%`
            }),
            meta: {record: true}
        });
    }
    return {
        background, handleChangeBackgroundColor,
        color, handleChangeFontColor,
        borderRadius, handleChangeBorderRadius,
        opacity, handleChangeOpacity
    }
}