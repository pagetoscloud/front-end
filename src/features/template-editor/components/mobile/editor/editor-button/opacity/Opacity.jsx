import { HorizontalWrapper, InputEditorWrapper, InputRangeEditor, LabelText } from "../../../../../assets/Global.styled";
import { OpacityWrapper } from "./Opacity.styled";


export default function Opacity({opacity, handleChangeOpacity}){
    return (
        <OpacityWrapper>
            <InputEditorWrapper>
                <HorizontalWrapper>
                    <LabelText>Opacity</LabelText>
                    <p>{opacity}%</p>
                </HorizontalWrapper>
                <InputRangeEditor>
                    <input 
                        onChange={(e) => handleChangeOpacity(e.target.value)} 
                        type="range" 
                        value={opacity}
                    />
                </InputRangeEditor>
            </InputEditorWrapper> 
        </OpacityWrapper>
    )
}