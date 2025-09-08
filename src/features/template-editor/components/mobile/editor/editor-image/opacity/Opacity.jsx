import { HorizontalWrapper, InputEditorWrapper, InputRangeEditor, LabelText } from "../../../../../assets/Global.styled";
import { OpacityWrapper } from "./Opacity.styled";


export default function Opacity({imageOpacity, handleChangeImageOpacity}){
    return (
        <OpacityWrapper>
            <InputEditorWrapper>
                <HorizontalWrapper>
                    <LabelText>Opacity</LabelText>
                    <p>{imageOpacity}%</p>
                </HorizontalWrapper>
                <InputRangeEditor>
                    <input 
                        onChange={(e) => handleChangeImageOpacity(e.target.value)} 
                        type="range" 
                        value={imageOpacity}
                    />
                </InputRangeEditor>
            </InputEditorWrapper> 
        </OpacityWrapper>
    )
}