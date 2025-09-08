import { CloseButton, InputText, LabelText, NewEmailBox, NewEmailForm, NewEmailWrapper, ParagraphText, SubmitButton, TitleText } from "./NewPassword.styled";
import closeIcon from '../../../../assets/images/close-icon.png';
export default function NewPassword({handleChangeShowNewEmail}) {
    return (
        <NewEmailWrapper>
            <NewEmailBox>
                <CloseButton onClick={handleChangeShowNewEmail}>
                    <img src={closeIcon} alt='close icon' />
                </CloseButton>
                <TitleText>Change your password.</TitleText>
                <ParagraphText>Please enter the new password below.</ParagraphText>
                <NewEmailForm>
                    <LabelText>New Password</LabelText>
                    <InputText>
                        <input 
                            type='password' 
                            placeholder="Enter your new password"
                        />
                    </InputText>
                    <LabelText>Validation Password</LabelText>
                    <InputText>
                        <input 
                            type='password' 
                            placeholder="Enter your verification password"
                        />
                    </InputText>
                    <SubmitButton onClick={handleChangeShowNewEmail}>Change Password</SubmitButton>
                </NewEmailForm>
            </NewEmailBox>
        </NewEmailWrapper>
    )
}