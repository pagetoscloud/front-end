import { HorizontalWrapper, InputEditorWrapper, InputRangeEditor, LabelText } from "../../../../../assets/Global.styled";
import { OpacityWrapper } from "./Opacity.styled";


export default function Opacity({backgroundOpacity, handleChangeBackgroundOpacity}){
    return (
        <OpacityWrapper>
            <InputEditorWrapper>
                <HorizontalWrapper>
                    <LabelText>Opacity</LabelText>
                    <p>{backgroundOpacity}%</p>
                </HorizontalWrapper>
                <InputRangeEditor>
                    <input 
                        onChange={(e) => handleChangeBackgroundOpacity(e.target.value)} 
                        type="range" 
                        value={backgroundOpacity}
                    />
                </InputRangeEditor>
            </InputEditorWrapper> 
        </OpacityWrapper>
    )
}