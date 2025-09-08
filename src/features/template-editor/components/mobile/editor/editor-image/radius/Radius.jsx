import { HorizontalWrapper, InputEditorWrapper, InputRangeEditor, LabelText } from "../../../../../assets/Global.styled";
import { RadiusWrapper } from "./Radius.styled";


export default function Radius({imageBorderRadius, handleChangeImageBorderRadius}){
    return (
        <RadiusWrapper>
            <InputEditorWrapper>
                <HorizontalWrapper>
                    <LabelText>Border Radius</LabelText>
                    <p>{imageBorderRadius}px</p>
                </HorizontalWrapper>
                <InputRangeEditor>
                    <input 
                        type="range" 
                        value={imageBorderRadius}
                        onChange={(e) => handleChangeImageBorderRadius(e.target.value)}
                    />
                </InputRangeEditor>
            </InputEditorWrapper>
        </RadiusWrapper>
    )
}