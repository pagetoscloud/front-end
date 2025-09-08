import { useEffect, useState } from "react"
import { BoxShadowCloseButton, BoxShadowSetting, BoxShadowSettingIcon, DeleteButton, EffectWrapper, InputNumberSmall, SelectEditorSmall } from "./Effect.styled"
import closeIcon from '../../../assets/images/close-icon.png';

const optionList = [
    {name: 'filter', text: 'Layer Blur'},
    {name: 'backdropFilter', text: 'Background Blur'},
    {name: 'boxShadow', text: 'Shadow'},
];

export default function Effect({effectProps, listEffect, handleDeleteEffect, handleChangeEffectValue, handleChangeEffectType}){
    const [name, setName] = useState(effectProps.name);
    const [value, setValue] = useState(effectProps.value);
    const [boxShadowValue, setBoxShadowValue] = useState(name === 'boxShadow' ? {x: effectProps.value.x, y: effectProps.value.y, z: effectProps.value.z, size: effectProps.value.size, color: effectProps.value.color}: {x: 0, y: 0, z: 0, size: 5, color: '#000000'});
    const [boxShadowSetting, setBoxShadowSetting] = useState(false);
    const handleChangeBoxShadowValue = (key, value) => {
        const prevValue = {...boxShadowValue};
        prevValue[key] = Number(value);
        setBoxShadowValue(prevValue);
        handleChangeEffectValue(name, prevValue);
    } 
    const handleShowBoxShadowSetting = () => {
        if (boxShadowSetting){
            setBoxShadowSetting(false)
        } else {
            setBoxShadowSetting(true);
        }
    }
    const checkListEffect = (e) => {
        return listEffect.filter(data => data.name === e).length !== 0;
    }
    const handleChangeValue = (e) => {
        setValue(e);
        handleChangeEffectValue(name, e);
    }
    const handleChangeType = (e) => {
        const prevName = name;
        if (e !== name){
            setName(e);
            handleChangeEffectType(prevName, e, value);
        }
        setBoxShadowSetting(false);
        setBoxShadowValue(effectProps.value.x === undefined ? {x: 0, y: 0, z: 0, size: 5, color: '#000000'} : {x: effectProps.value.x, y: effectProps.value.y, z: effectProps.value.z, size: effectProps.value.size, color: effectProps.value.color})
    }
    useEffect(() => {
        setName(effectProps.name)
    }, [effectProps])
    return (
        <EffectWrapper>
            <SelectEditorSmall>
                <select value={name} onChange={(e) => handleChangeType(e.target.value)}>
                    {
                        optionList.map((data) => {
                            if (data.name === name){
                                return <option value={data.name}>{data.text}</option>
                            } else {
                                if (checkListEffect(data.name)){
                                    return <option value={data.name} disabled>{data.text}</option>
                                } else {
                                    return <option value={data.name}>{data.text}</option>
                                }
                            }
                        })
                    }
                </select>
            </SelectEditorSmall>
            {
                name === 'filter' || name === 'backdropFilter' ?
                <>
                    <InputNumberSmall>
                        <input 
                            onChange={(e) => handleChangeValue(e.target.value)}
                            type='number' 
                            value={value}
                        />
                    </InputNumberSmall>
                </> :
                <></>
            }
            {
                name === 'boxShadow' && !boxShadowSetting ?
                <BoxShadowSettingIcon 
                    onClick={handleShowBoxShadowSetting}
                />:
                <></>
            }
            {
                name === 'boxShadow' && boxShadowSetting ?
                <BoxShadowSetting>
                    <BoxShadowCloseButton
                        onClick={handleShowBoxShadowSetting}
                    >
                        <img src={closeIcon} alt='close' />
                    </BoxShadowCloseButton>
                    <p>x</p>
                    <p>y</p>
                    <p>z</p>
                    <p>Size</p>
                    <input 
                        onChange={(e) => handleChangeBoxShadowValue('x', e.target.value)}
                        type="number" 
                        value={boxShadowValue.x} 
                    />
                    <input 
                        onChange={(e) => handleChangeBoxShadowValue('y', e.target.value)}
                        type="number" 
                        value={boxShadowValue.y} 
                    />
                    <input 
                        onChange={(e) => handleChangeBoxShadowValue('z', e.target.value)}
                        type="number" 
                        value={boxShadowValue.z} 
                    />
                    <input 
                        onChange={(e) => handleChangeBoxShadowValue('size', e.target.value)}
                        type="number" 
                        value={boxShadowValue.size} 
                    />
                    <div style={{width: 20, height: 20, background: boxShadowValue.color}}></div>
                </BoxShadowSetting>:
                <></>
            }
            <DeleteButton onClick={() => handleDeleteEffect(name)}>
                <p>-</p>
            </DeleteButton>
        </EffectWrapper>
    )
}