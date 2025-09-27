import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeText } from "../templateStyleSlice";

export function useDispatchTextStyle(data, editMode){
    const dispatch = useDispatch();
    const [fontColor, setFontColor] = useState(data[editMode.component].data[editMode.type].color);
    const [opacity, setOpacity] = useState(data[editMode.component].data[editMode.type].opacity);
    const [fontSize, setFontSize] = useState(data[editMode.component].data[editMode.type].fontSize);
    const [fontStyle, setFontStyle] = useState(data[editMode.component].data[editMode.type].textDecoration ? data[editMode.component].data[editMode.type].textDecoration : data[editMode.component].data[editMode.type].fontWeight);
    const [fontFamily, setFontFamily] = useState('Roboto');
    const [fontLineHeight, setFontLineHeight] = useState(data[editMode.component].data[editMode.type].lineHeight);
    const [fontSpacing, setFontSpacing] = useState(data[editMode.component].data[editMode.type].wordSpacing);
    const [textAlign, setTextAlign] = useState(data[editMode.component].data[editMode.type].textAlign);
    useEffect(() => {
        if (data[editMode.component].data[editMode.type].textDecoration === 'underline'){
            setFontStyle('underline');
        } else {
            setFontStyle(data[editMode.component].data[editMode.type].fontWeight)
        }
        setFontColor(data[editMode.component].data[editMode.type].color);
        setOpacity(data[editMode.component].data[editMode.type].opacity);
        setFontSize(data[editMode.component].data[editMode.type].fontSize);
        setFontFamily(data[editMode.component].data[editMode.type].fontFamily);
        setFontLineHeight(data[editMode.component].data[editMode.type].lineHeight);
        setFontSpacing(data[editMode.component].data[editMode.type].wordSpacing);
        setTextAlign(data[editMode.component].data[editMode.type].textAlign);
    }, [editMode.type, editMode.component, data]);

    const handleChangeFontColor = (e) => {
        setFontColor(e);
        dispatch(changeText({
            component: editMode.component,
            type: editMode.type,
            itemData:'color',
            itemStyle: 'color',
            data: e.data,
            style: e.style
        }));
    }
    const handleChangeFontOpacity = (e) => {
        setOpacity(e);
        dispatch(changeText({
            component: editMode.component,
            type: editMode.type,
            itemData: 'opacity',
            itemStyle: 'opacity',
            data: e,
            style: `${e}%`
        }));
    }
    const handleChangeFontFamily = (e) => {
        setFontFamily(e);
        dispatch({
            ...changeText({
                component: editMode.component,
                type: editMode.type,
                itemData: 'fontFamily',
                itemStyle: 'fontFamily',
                data: e,
                style: e
            }),
            meta: {record: true}
        });
    }
    const handleChangeFontSize = (e) => {
        setFontSize(e);
        dispatch({
            ...changeText({
                    component: editMode.component,
                    type: editMode.type,
                    itemData: 'fontSize',
                    itemStyle: 'fontSize',
                    data: e,
                    style: `${e}px`
            }),
            meta: {record: true}
        });
    }
    const handleChangeFontStyle = (e) => {
        if (e === 400){
            setFontStyle('Thin');
        } else if (e === 500){
            setFontStyle('Normal');
        } else if (e === 700){
            setFontStyle('Medium');
        } else if (e === 800){
            setFontStyle('Bold')
        } else {
            setFontStyle(e);
        }
        if (e === 'underline'){
            dispatch(changeText({
                component: editMode.component,
                type: editMode.type,
                itemData: 'fontWeight',
                itemStyle: 'fontWeight',
                data: 400,
                style: 400,
            }));
            dispatch(changeText({
                component: editMode.component,
                type: editMode.type,
                itemData: 'textDecoration',
                itemStyle: 'textDecoration',
                data: e,
                style: e,
            }));
        } else {
            dispatch(changeText({
                component: editMode.component,
                type: editMode.type,
                itemData: 'textDecoration',
                itemStyle: 'textDecoration',
                data: 'none',
                style: 'none',
            }));
            dispatch(changeText({
                component: editMode.component,
                type: editMode.type,
                itemData: 'fontWeight',
                itemStyle: 'fontWeight',
                data: e,
                style: e,
            }));
        }
    }
    const handleChangeFontLineHeight = (e) => {
        setFontLineHeight(e);
        dispatch(changeText({
            component: editMode.component,
            type: editMode.type,
            itemData:'lineHeight',
            itemStyle: 'lineHeight',
            data: e,
            style: e
        }));
    }
    const handleChangeFontSpacing = (e) => {
        setFontSpacing(e);
        if (e === 'Normal'){
            dispatch(changeText({
                component: editMode.component,
                type: editMode.type,
                itemData:'letterSpacing',
                itemStyle: 'letterSpacing',
                data: e,
                style: e
            }));
        } else {
            dispatch(changeText({
                component: editMode.component,
                type: editMode.type,
                itemData:'letterSpacing',
                itemStyle: 'letterSpacing',
                data: e,
                style: `${e}px`
            }));
        }
    }
    const handleChangeTextAlign = (e) => {
        setTextAlign(e);
        dispatch({
            ...changeText({
                    component: editMode.component,
                    type: editMode.type,
                    itemData:'textAlign',
                    itemStyle: 'textAlign',
                    data: e,
                    style: e
            }),
            meta: {recored: true}
        });
    }
    return {
        fontColor, handleChangeFontColor, 
        opacity, handleChangeFontOpacity,
        fontSize, handleChangeFontSize,
        fontFamily, handleChangeFontFamily,
        fontStyle, handleChangeFontStyle,
        fontLineHeight, handleChangeFontLineHeight,
        fontSpacing, handleChangeFontSpacing,
        textAlign, handleChangeTextAlign
    }
}