import { HorizontalWrapper, InputEditorWrapper, InputRangeEditor, LabelText } from "../../../../../assets/Global.styled";
import { RadiusWrapper } from "./Radius.styled";


export default function Radius({backgroundBorderRadius, handleChangeBackgroundBorderRadius}){
    return (
        <RadiusWrapper>
            <InputEditorWrapper>
                <HorizontalWrapper>
                    <LabelText>Border Radius</LabelText>
                    <p>{backgroundBorderRadius}px</p>
                </HorizontalWrapper>
                <InputRangeEditor>
                    <input 
                        type="range" 
                        value={backgroundBorderRadius}
                        onChange={(e) => handleChangeBackgroundBorderRadius(e.target.value)}
                    />
                </InputRangeEditor>
            </InputEditorWrapper>
        </RadiusWrapper>
    )
}