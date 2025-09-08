import { InputEditorWrapper, LabelText, SelectEditorLarge, TitleHeader } from "../../../../assets/Global.styled";
import { EditorSettingContainer } from "./EditorSetting.styled";
import leftArrow from '../../../../../../assets/images/left-arrow.png';

export default function EditorSetting({handleEditMode}){
    return (
        <EditorSettingContainer>
            <TitleHeader>
                <img onClick={() => handleEditMode(false)} src={leftArrow} alt="close icon" />
                <h3>Setting</h3>
            </TitleHeader>
            <InputEditorWrapper>
                <LabelText>Access</LabelText>
                <SelectEditorLarge>
                    <select>
                        <option>Private</option>
                        <option>Public</option>
                    </select>
                </SelectEditorLarge>
                <LabelText>Ads</LabelText>
                <SelectEditorLarge>
                    <select>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </SelectEditorLarge>
            </InputEditorWrapper>
        </EditorSettingContainer>
    )
}