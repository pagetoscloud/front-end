import { InputEditorLargeMobile, InputEditorWrapper, LabelText, SelectEditorLargeMobile } from "../../../../../assets/Global.styled";
import { TypeWrapper } from "./Effect.styled";

export default function Type({buttonType, handleChangeButtonType, link, handleChangeLink, page, handleChangePage}){
    return (
        <TypeWrapper>
            <InputEditorWrapper>
                <LabelText>Button Type</LabelText>
                <SelectEditorLargeMobile>
                    <select value={buttonType} onChange={(e) => handleChangeButtonType(e.target.value)}>
                        <option value={'link'}>Link</option>
                        <option value={'back'}>Back</option>
                        <option value={'change page'}>Change Page</option>
                    </select>
                </SelectEditorLargeMobile>
                {
                    buttonType === 'link' &&
                    <>
                        <LabelText>Input Link</LabelText>
                        <InputEditorLargeMobile>
                            <input 
                                onChange={(e) => handleChangeLink(e.target.value)}
                                type="text" 
                                placeholder="Button Name" 
                                value={link}
                            />
                        </InputEditorLargeMobile>
                    </>
                }
                {
                    buttonType === 'change page' &&
                    <>
                        <LabelText>Choose Page</LabelText>
                        <SelectEditorLargeMobile>
                            <select value={page} onChange={(e) => handleChangePage(e.target.value)}>
                                <option value={'page one'}>Main Page</option>
                                <option value={'page two'}>Product Details</option>
                                <option value={'page three'}>Connector Page</option>
                            </select>
                        </SelectEditorLargeMobile>
                    </>
                }
            </InputEditorWrapper>
        </TypeWrapper>
    )
}