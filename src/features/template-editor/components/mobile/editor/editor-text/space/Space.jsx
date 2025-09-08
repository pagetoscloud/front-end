import { HorizontalWrapper, InputEditorWrapper, LabelText, SelectEditorSmallMobile, VerticalWrapper } from "../../../../../assets/Global.styled";
import { SpaceWrapper } from "./Space.styled";

export default function Space({fontLineHeight, handleChangeFontLineHeight,fontSpacing, handleChangeFontSpacing}){
    return (
        <SpaceWrapper>
            <InputEditorWrapper>
                <HorizontalWrapper>
                    <VerticalWrapper>
                        <LabelText>Line Height</LabelText>
                        <SelectEditorSmallMobile>
                            <select value={fontLineHeight} onChange={(e) => handleChangeFontLineHeight(e.target.value)}>
                                <option>auto</option>
                                <option>0.5</option>
                                <option>1</option>
                                <option>1.5</option>
                                <option>2</option>
                                <option>2.5</option>
                                <option>3</option>
                            </select>
                        </SelectEditorSmallMobile>
                    </VerticalWrapper>
                    <VerticalWrapper>
                        <LabelText>Line Spacing</LabelText>
                        <SelectEditorSmallMobile>
                            <select value={fontSpacing} onChange={(e) => handleChangeFontSpacing(e.target.value)}>
                                <option>auto</option>
                                <option>0.5</option>
                                <option>1</option>
                                <option>1.5</option>
                                <option>2</option>
                                <option>2.5</option>
                                <option>3</option>
                            </select>
                        </SelectEditorSmallMobile>
                    </VerticalWrapper>
                </HorizontalWrapper>
            </InputEditorWrapper> 
        </SpaceWrapper>
    )
}