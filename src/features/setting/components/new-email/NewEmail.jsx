import { CloseButton, InputText, LabelText, NewEmailBox, NewEmailForm, NewEmailWrapper, ParagraphText, SubmitButton, TitleText } from "./NewEmail.styled";
import closeIcon from '../../../../assets/images/close-icon.png';
export default function NewEmail({handleChangeShowNewEmail}) {
    return (
        <NewEmailWrapper>
            <NewEmailBox>
                <CloseButton onClick={handleChangeShowNewEmail}>
                    <img src={closeIcon} alt='close icon' />
                </CloseButton>
                <TitleText>Change your email.</TitleText>
                <ParagraphText>Please enter the new email address below.</ParagraphText>
                <NewEmailForm>
                    <LabelText>New Email</LabelText>
                    <InputText>
                        <input 
                            type='email' 
                            placeholder="Enter your new email address"
                        />
                    </InputText>
                    <LabelText>Validation Email</LabelText>
                    <InputText>
                        <input 
                            type='email' 
                            placeholder="Enter your new email address"
                        />
                    </InputText>
                    <SubmitButton onClick={handleChangeShowNewEmail}>Send</SubmitButton>
                </NewEmailForm>
            </NewEmailBox>
        </NewEmailWrapper>
    )
}