import { LabelText } from "../../../../assets/Global.styled";
import { ColorListGradientWrapper, ColorListItems, ColorListItemsDisplay, ColorListWrapper, ColorPickerHeader, EditorColorContainer, GradientType, GradientTypeWrapper, SelectColorType } from "./EditorColorPicker.styled";
import closeIcon from '../../../../../../assets/images/close-icon.png';
import { useEffect, useState } from "react";
import { ChromePicker } from "react-color";

const gradientTypeData = [
    {value: '45deg', label: '45°'},
    {value: '90deg', label: '90°'},
    {value: '135deg', label: '135°'},
    {value: '180deg', label: '180°'},
    {value: '270deg', label: '270°'},
    {value: '360deg', label: '360°'}
]

 export default function EditorColorPicker({handleShow, handleChangeColor, currentColor, mode}){
    const [color, setColor] = useState(currentColor);
    const [gradientColor, setGradientColor] = useState(currentColor.type === 'gradient' ? currentColor.color : [{r: 0, g: 0, b: 0, a: 1}, {r: 255, g: 255, b: 255, a: 1}]);
    const [activeColor, setActiveColor] = useState(0);
    const [colorType, setColorType] = useState(currentColor.type === 'gradient' ? 'gradient' : 'solid');
    const [gradientType, setGradientType] = useState(currentColor.type === 'gradient' ? currentColor.gradientType : '90deg');
    const handleChangeGradientColor = (value, gradientTypeInputValue) => {
        const gradientTypeValue = gradientTypeInputValue ? gradientTypeInputValue : gradientType;
        if (value.length === 2){
            const rgbaFirst = `rgba(${value[0].r}, ${value[0].g}, ${value[0].b}, ${value[0].a})`;
            const rgbaSecond = `rgba(${value[1].r}, ${value[1].g}, ${value[1].b}, ${value[1].a})`;
            handleChangeColor({data: {type: 'gradient', gradientType: gradientTypeValue, color: value}, style: `linear-gradient(${gradientTypeValue}, ${rgbaFirst}, ${rgbaSecond})`});
        } else if (value.length === 3){
            const rgbaFirst = `rgba(${value[0].r}, ${value[0].g}, ${value[0].b}, ${value[0].a})`;
            const rgbaSecond = `rgba(${value[1].r}, ${value[1].g}, ${value[1].b}, ${value[1].a})`;
            const rgbaThird = `rgba(${value[2].r}, ${value[2].g}, ${value[2].b}, ${value[2].a})`;
            handleChangeColor({data: {type: 'gradient', gradientType: gradientTypeValue, color: value}, style: `linear-gradient(${gradientTypeValue}, ${rgbaFirst}, ${rgbaSecond}, ${rgbaThird})`});
        } else if (value.length === 4){
            const rgbaFirst = `rgba(${value[0].r}, ${value[0].g}, ${value[0].b}, ${value[0].a})`;
            const rgbaSecond = `rgba(${value[1].r}, ${value[1].g}, ${value[1].b}, ${value[1].a})`;
            const rgbaThird = `rgba(${value[2].r}, ${value[2].g}, ${value[2].b}, ${value[2].a})`;
            const rgbaFourth = `rgba(${value[3].r}, ${value[3].g}, ${value[3].b}, ${value[3].a})`;
            handleChangeColor({data: {type: 'gradient', gradientType: gradientTypeValue, color: value}, style: `linear-gradient(${gradientTypeValue}, ${rgbaFirst}, ${rgbaSecond}, ${rgbaThird}, ${rgbaFourth})`});
        }
    }
    function rgbaToHex(rgba) {
        const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);

        if (!match) {
          throw new Error("Invalid RGB/RGBA format")
        }
      
        const red = parseInt(match[1]).toString(16).padStart(2, "0");
        const green = parseInt(match[2]).toString(16).padStart(2, "0");
        const blue = parseInt(match[3]).toString(16).padStart(2, "0");
      
        return `#${red}${green}${blue}`;
    }
    const handleColorType = (value) => {
        if (value === 'solid') {
            if (gradientColor.length >= 1){
                const colorHex = rgbaToHex(`rgba(${gradientColor[0].r}, ${gradientColor[0].g}, ${gradientColor[0].b}, ${gradientColor[0].a})`);
                setColor(gradientColor[0]);
                handleChangeColor({data: colorHex, style: `rgba(${gradientColor[0].r}, ${gradientColor[0].g}, ${gradientColor[0].b}, ${gradientColor[0].a})`});
            } else {
                handleChangeColor({data: '#000000', style: '#000000'});
            }
        } else  {
            if (colorType === 'solid'){
                setGradientColor([{r: 0, g: 0, b: 0, a: 1}, {r: 255, g: 255, b: 255, a: 1}]);
                handleChangeGradientColor([{r: 0, g: 0, b: 0, a: 1}, {r: 255, g: 255, b: 255, a: 1}], gradientType);
            } else {
                handleChangeGradientColor(gradientColor, gradientType);
            }
        }
        setColorType(value);
    }
    const handleCurrentColor = (color) => {
        if (colorType === 'gradient'){
            const newArray = [...gradientColor];
            newArray[activeColor] = color.rgb;
            setGradientColor(newArray);
            handleChangeGradientColor(newArray);

        } else {
            setColor(color.rgb);
            handleChangeColor({data: color.hex, style: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`});
        }
    }
    const handleGradientType = (value) => {
        setGradientType(value);
        handleChangeGradientColor(gradientColor, value);
    }
    const handleAddNewColorGradient = () => {
        const newArray = [...gradientColor];
        newArray.push({r: 0, g: 0, b: 0, a: 1});
        setGradientColor(newArray);
        setActiveColor(newArray.length - 1);
        handleChangeGradientColor(newArray);
    }
    const handleRemoveColorGradient = (index) => {
        if (gradientColor.length > 2){
            const newArray = [...gradientColor];
            newArray.splice(index, 1);
            setGradientColor(newArray);
            setActiveColor(0);
            handleChangeGradientColor(newArray);
        } else {
            setColorType('solid');
            const colorHex = rgbaToHex(`rgba(${gradientColor[0].r}, ${gradientColor[0].g}, ${gradientColor[0].b}, ${gradientColor[0].a})`);
            setColor(gradientColor[0]);
            handleChangeColor({data: colorHex, style: `rgba(${gradientColor[0].r}, ${gradientColor[0].g}, ${gradientColor[0].b}, ${gradientColor[0].a})`});
        }
    }
    useEffect(() => {

    }, []);
    return (
        <EditorColorContainer>
            <ColorPickerHeader>
                {
                    mode === 'background' ?
                    <SelectColorType onChange={(e) => handleColorType(e.target.value)} value={colorType}>
                        <option value={'solid'}>Solid</option>
                        <option value={'gradient'}>Gradient</option>
                    </SelectColorType> :
                    <LabelText>Text Color</LabelText>
                }
                {/* <LabelText>Custom Color</LabelText> */}
                <img onClick={() => handleShow({type: 'color list', mode: 'background'})} src={closeIcon} alt="close" />
            </ColorPickerHeader>
            <ChromePicker
                color={colorType === 'gradient' ? gradientColor[activeColor] : color}
                onChange={handleCurrentColor}
                styles={{default: {picker: {boxShadow: 'none', width: '100%'}}}}
            />
            {
                colorType === 'gradient' &&
                <>
                    <ColorListGradientWrapper>
                        <ColorListWrapper>
                            {
                                gradientColor.length > 0 &&
                                gradientColor.map((item, index) => {
                                    return (
                                        <ColorListItems 
                                            key={`${index}-gradient-color`}
                                        >
                                            <p onClick={() => handleRemoveColorGradient(index)}>X</p>
                                            <ColorListItemsDisplay
                                                key={`${index}-gradient-color-display`}
                                                style={{background: `rgba(${item.r}, ${item.g}, ${item.b}, ${item.a})`}} 
                                                onClick={() => {
                                                    console.log('click gradient color', index);
                                                    setActiveColor(index);
                                                    setColor(item);
                                                }}
                                            />
                                        </ColorListItems>
                                    )
                                })
                            }
                            {
                                gradientColor.length < 4 &&
                                <ColorListItems 
                                    onClick={handleAddNewColorGradient}
                                >+</ColorListItems>
                            }
                        </ColorListWrapper>
                    </ColorListGradientWrapper>
                    <GradientTypeWrapper>
                        {
                            gradientTypeData.map((item, index) => {
                                return (
                                    <GradientType 
                                        onClick={() => handleGradientType(item.value)}
                                        style={
                                            gradientColor.length === 2 ?
                                            {background: `linear-gradient(${item.value}, rgba(${gradientColor[0].r}, ${gradientColor[0].g}, ${gradientColor[0].b}, ${gradientColor[0].a}), rgba(${gradientColor[1].r}, ${gradientColor[1].g}, ${gradientColor[1].b}, ${gradientColor[1].a})`} :
                                            gradientColor.length === 3 ?
                                            {background: `linear-gradient(${item.value}, rgba(${gradientColor[0].r}, ${gradientColor[0].g}, ${gradientColor[0].b}, ${gradientColor[0].a}), rgba(${gradientColor[1].r}, ${gradientColor[1].g}, ${gradientColor[1].b}, ${gradientColor[1].a}), rgba(${gradientColor[2].r}, ${gradientColor[2].g}, ${gradientColor[2].b}, ${gradientColor[2].a})`} :
                                            {background: `linear-gradient(${item.value}, rgba(${gradientColor[0].r}, ${gradientColor[0].g}, ${gradientColor[0].b}, ${gradientColor[0].a}), rgba(${gradientColor[1].r}, ${gradientColor[1].g}, ${gradientColor[1].b}, ${gradientColor[1].a}), rgba(${gradientColor[2].r}, ${gradientColor[2].g}, ${gradientColor[2].b}, ${gradientColor[2].a}), rgba(${gradientColor[3].r}, ${gradientColor[3].g}, ${gradientColor[3].b}, ${gradientColor[3].a})`}
                                        }
                                    />
                                )
                            })
                        }
                    </GradientTypeWrapper>
                </>
            }
            {/* <EditorColorPickerWrapper>
            </EditorColorPickerWrapper> */}
        </EditorColorContainer>
    )
}