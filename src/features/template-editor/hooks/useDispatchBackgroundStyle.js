import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeBackground } from "../templateStyleSlice";


export function useDispatchBackgroundStyle(data, editMode){
    const [backgroundColor, setBackgroundColor] = useState(data[editMode.component].data[editMode.type].color);
    const [backgroundColorDisplay, setBackgroundColorDisplay] = useState(data[editMode.component].style[editMode.type].background);
    const [backgroundOpacity, setBackgroundOpacity] = useState(data[editMode.component].data[editMode.type].opacity);
    const [backgroundBlur, setBackgroundBlur] = useState(data[editMode.component].data[editMode.type].filter.value);
    const [backgroundBorderRadius, setBackgroundBorderRadius] = useState(data[editMode.component].data[editMode.type].borderRadius);
    const [backgroundEffect, setBackgroundEffect] = useState(data[editMode.component].data[editMode.type].effect);
    const [borderColor, setBorderColor] = useState(data[editMode.component].data[editMode.type].border.color);
    const [borderSize, setBorderSize] = useState(data[editMode.component].data[editMode.type].border.size);
    const [borderType, setBorderType] = useState(data[editMode.component].data[editMode.type].border.type);
    const dispatch = useDispatch();
    useEffect(() => {
        setBackgroundColor(data[editMode.component].data[editMode.type].color);
        setBackgroundColorDisplay(data[editMode.component].style[editMode.type].background);
        setBackgroundOpacity(data[editMode.component].data[editMode.type].opacity);
        setBackgroundBlur(data[editMode.component].data[editMode.type].filter.value);
        setBackgroundBorderRadius(data[editMode.component].data[editMode.type].borderRadius)
        setBorderColor(data[editMode.component].data[editMode.type].border.color);
        setBorderSize(data[editMode.component].data[editMode.type].border.size);
        setBorderType(data[editMode.component].data[editMode.type].border.type);
        setBackgroundEffect(data[editMode.component].data[editMode.type].effect);
    }, [data, editMode])
    const handleChangeBackgroundColor = (e) => {
        setBackgroundColor(e.data);
        dispatch(changeBackground({
            component: editMode.component,
            type: editMode.type,
            itemData: 'color',
            itemStyle: 'background',
            data: e.data,
            style: e.style,
        }));
    }
    const handleChangeBackgroundOpacity = (e) => {
        setBackgroundOpacity(e);
        dispatch(changeBackground({
            component: editMode.component,
            type: editMode.type,
            itemData: 'opacity',
            itemStyle: 'opacity',
            data: e,
            style: `${e}%`,
        }));
    }
    const handleChangeBackgroundBorderRadius = (e) => {
        setBackgroundBorderRadius(e);
        dispatch(changeBackground({
            component: editMode.component,
            type: editMode.type,
            itemData: 'borderRadius',
            itemStyle: 'borderRadius',
            data: e,
            style: `${e}%`
        }));
    }
    const handleChangeBackgroundBlur = (e) => {
        setBackgroundBlur(e);
        dispatch(changeBackground({
            component: editMode.component,
            type: editMode.type,
            itemData: 'filter',
            itemStyle: 'filter',
            data: {type: 'blur', value: e},
            style: `blur(${e}px`
        }));
    }
    const handleChangeBorderColor = (e) => {
        setBorderColor(e.data);
        dispatch(changeBackground({
            component: editMode.component,
            type: editMode.type,
            itemData: 'border',
            itemStyle: 'border',
            data: {size: borderSize, color: e.data, type: borderType},
            style: `${borderSize}px ${borderType} ${e.data}`
        }));
    }
    const handleChangeBorderSize = (e) => {
        setBorderSize(e);
        dispatch(changeBackground({
            component: editMode.component,
            type: editMode.type,
            itemData: 'border',
            itemStyle: 'border',
            data: {size: e, type: borderType, color: borderColor},
            style: `${e}px ${borderType} ${borderColor}`
        }));
    }
    const handleChangeBorderType = (e) => {
        setBorderType(e);
        let bSize = 0;
        if (e !== 'none' && borderSize === 0){
            bSize = 1
        }
        if (borderSize > 0 && e !== 'none'){
            bSize = borderSize
        }
        dispatch(changeBackground({
            component: editMode.component,
            type: editMode.type,
            itemData: 'border',
            itemStyle: 'border',
            data: {size: bSize, color: borderColor, type: e},
            style: `${bSize}px ${e} ${borderColor}`
        }));
    }
    const handleAddBackgroundEffect = () => {
        let listEffect = ['filter', 'backdropFilter', 'boxShadow'];
        const findNewEffect = () => {
            const arrayName = backgroundEffect.map(item => item.name);
            return listEffect.filter(item => !arrayName.includes(item))[0];
        }
        let newEffect = findNewEffect();
        if (backgroundEffect.length < 4){
            if (backgroundEffect.length === 0){
                let newData = [...backgroundEffect];
                newData.push({name: 'filter', value: 10, type: 'blur'})
                dispatch(changeBackground({
                    component: editMode.component,
                    type: editMode.type,
                    itemData: 'effect',
                    itemStyle: 'filter',
                    data: newData,
                    style: 'blur(10px)'
                }));
            }
            if (newEffect === 'boxShadow'){
                let newData = [...backgroundEffect];
                newData.push({name: 'boxShadow', value: {x: 1, y: 1, z: 1, size: 1, color: '#000000'}, type: 'shadow'});
                dispatch(changeBackground({
                    component: editMode.component,
                    type: editMode.type,
                    itemData: 'effect',
                    itemStyle: newEffect,
                    data: newData,
                    style: {x: 1, y: 1, z: 1, size: 1, color: '#000000'}
                }));
            } else {
                let newData = [...backgroundEffect];
                newData.push({name: newEffect, value: 10, type: 'blur'})
                dispatch(changeBackground({
                    component: editMode.component,
                    type: editMode.type,
                    itemData: 'effect',
                    itemStyle: newEffect,
                    data: newData,
                    style: 'blur(10px)'
                }));
            }
        }
    }
    const handleChangeBackgroundEffectValue = (name, value) => {
        const newData = backgroundEffect.filter(data => data.name !== name);
        if (name === 'boxShadow'){
            newData.push({name: name, value: value, type: 'shadow'});
            dispatch(changeBackground({
                component: editMode.component,
                type: editMode.type,
                itemData: 'effect',
                itemStyle: name,
                data: newData,
                style: `${value.x}px ${value.y}px ${value.z}px ${value.size}px ${value.color}`
            }));
        } else {
            newData.push({name: name, value: value, type: 'blur'});
            dispatch(changeBackground({
                component: editMode.component,
                type: editMode.type,
                itemData: 'effect',
                itemStyle: name,
                data: newData,
                style: `blur(${value}px)`
            }));
        }
    }
    const handleDeleteBackgroundEffect = (e) => {
        const newData = backgroundEffect.filter(data => data.name !== e);
        setBackgroundEffect(newData);
        dispatch(changeBackground({
            component: editMode.component,
            type: editMode.type,
            itemData: 'effect',
            itemStyle: e,
            data: newData,
            style: 'none'
        }));
    }
    const handleChangeEffectType = async (prevName, nextName, nextValue) => {
        dispatch(changeBackground({
            component: editMode.component,
            type: editMode.type,
            itemData: 'effect',
            itemStyle: prevName,
            data: backgroundEffect,
            style: `none`
        }));
        await new Promise((resolve) => setTimeout(resolve, 100));
        
        const newData = backgroundEffect.filter(data => data.name !== prevName);
        if (nextName === 'boxShadow'){
            newData.push({name: nextName, value: {x: 1, y: 1, z: 1, size: 3, color: '#000000'}, type: 'blur'});
            dispatch(changeBackground({
                component: editMode.component,
                type: editMode.type,
                itemData: 'effect',
                itemStyle: nextName,
                data: newData,
                style: '1px 1px 1px 3px #000000'
            }));
        } else {
            newData.push({name: nextName, value: nextValue, type: 'blur'});
            dispatch(changeBackground({
                component: editMode.component,
                type: editMode.type,
                itemData: 'effect',
                itemStyle: nextName,
                data: newData,
                style: `blur(${nextValue}px)`
            }));
        }
    }
    return {
        backgroundColor, handleChangeBackgroundColor,
        backgroundColorDisplay,
        backgroundOpacity, handleChangeBackgroundOpacity,
        backgroundBlur, handleChangeBackgroundBlur,
        backgroundBorderRadius, handleChangeBackgroundBorderRadius,
        backgroundEffect, handleAddBackgroundEffect,
        handleChangeBackgroundEffectValue, handleDeleteBackgroundEffect,
        handleChangeEffectType,
        borderColor, handleChangeBorderColor,
        borderSize, handleChangeBorderSize,
        borderType, handleChangeBorderType
    }
}