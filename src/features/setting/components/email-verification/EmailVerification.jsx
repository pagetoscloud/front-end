import { CloseButton, EmailVerificationBox, EmailVerificationForm, EmailVerificationWrapper, InputText, ParagraphText, SubmitButton, TitleText } from "./EmailVerification.styled";
import closeIcon from '../../../../assets/images/close-icon.png';
import { useState } from "react";

export default function EmailVerification({handleChangeShowEmailVerification, handleChangeShowNewEmailOrPassword}) {
    const [verificationCode, setVerificationCode] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // For example, you can call an API to verify the email
        if (verificationCode === "090745") {
            handleChangeShowEmailVerification();
            handleChangeShowNewEmailOrPassword();
        }
        console.log("Email verification code submitted");
    }
    return (
        <EmailVerificationWrapper>
            <EmailVerificationBox>
                <CloseButton onClick={handleChangeShowEmailVerification}><img src={closeIcon} alt='close icon' /></CloseButton>
                <TitleText>Verify your email.</TitleText>
                <ParagraphText>Please enter the code below to verify your email address.</ParagraphText>
                <EmailVerificationForm>
                    <InputText>
                        <input 
                            onChange={(e) => setVerificationCode(e.target.value)}
                            value={verificationCode}
                            type='text' 
                            placeholder="Enter your verification code"
                        />
                    </InputText>
                    <SubmitButton onClick={handleSubmit}>Send</SubmitButton>
                </EmailVerificationForm>
            </EmailVerificationBox>
        </EmailVerificationWrapper>
    )
}