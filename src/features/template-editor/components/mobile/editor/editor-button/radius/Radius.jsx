import { HorizontalWrapper, InputEditorWrapper, InputRangeEditor, LabelText } from "../../../../../assets/Global.styled";
import { RadiusWrapper } from "./Radius.styled";


export default function Radius({borderRadius, handleChangeBorderRadius}){
    return (
        <RadiusWrapper>
            <InputEditorWrapper>
                <HorizontalWrapper>
                    <LabelText>Border Radius</LabelText>
                    <p>{borderRadius}px</p>
                </HorizontalWrapper>
                <InputRangeEditor>
                    <input 
                        type="range" 
                        value={borderRadius}
                        onChange={(e) => handleChangeBorderRadius(e.target.value)}
                    />
                </InputRangeEditor>
            </InputEditorWrapper>
        </RadiusWrapper>
    )
}