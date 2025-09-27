import { HorizontalWrapper, InputEditorWrapper, InputRangeEditor, LabelText } from "../../../../../assets/Global.styled";
import { BlurWrapper } from "./Blur.styled";


export default function Blur({imageBlur, handleChangeImageBlur}){
    return (
        <BlurWrapper>
            <InputEditorWrapper>
                <HorizontalWrapper>
                    <LabelText>Blur</LabelText>
                    <p>{imageBlur}px</p>
                </HorizontalWrapper>
                <InputRangeEditor>
                    <input 
                        type="range" 
                        value={imageBlur}
                        onChange={(e) => handleChangeImageBlur(e.target.value)}
                    />
                </InputRangeEditor>
            </InputEditorWrapper>
        </BlurWrapper>
    )
}