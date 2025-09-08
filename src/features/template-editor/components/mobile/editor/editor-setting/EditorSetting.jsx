import { LabelText, SelectEditorLarge, TitleHeader } from "../../../../assets/Global.styled";
import { EditorSettingContainer, EditorSettingContent } from "./EditorSetting.styled";

export default function EditorSetting({handleEditMode}){
    return (
        <EditorSettingContainer>
            <TitleHeader>
                <h3>Setting</h3>
                {/* <img onClick={() => handleEditMode(false)} src={rightArrow} alt="close icon" /> */}
            </TitleHeader>
            <EditorSettingContent>
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
            </EditorSettingContent>
        </EditorSettingContainer>
    )
}