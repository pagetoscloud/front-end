// import { useState } from "react";
import { 
    ForgotPasswordContainer, ForgotPasswordForm, 
    ForgotPasswordWrapper, SubmitButton, 
    SubParagraphText, SubTitleText, 
    TitleText, 
    VerifyCodeInput, 
    VerifyCodeInputWrapper
} from "./styles/Global.styled";
import { useNavigate } from "react-router-dom";

export default function EmailVerification(){
    const navigate = useNavigate();
    return (
        <ForgotPasswordContainer>
           <ForgotPasswordWrapper>
                <TitleText>Email Verification</TitleText>
                <SubTitleText>Enter Your Code.</SubTitleText>
                <SubParagraphText>Please enter the 4 digit code that send to your email address.</SubParagraphText>
                <ForgotPasswordForm>
                    <VerifyCodeInputWrapper>
                        <VerifyCodeInput />
                        <VerifyCodeInput />
                        <VerifyCodeInput />
                        <VerifyCodeInput />
                    </VerifyCodeInputWrapper>
                    <p style={{color: 'rgba(0, 0, 0, 0.6', width: '100%', textAlign: 'center', margin: '5px 0'}}>Don't receive the code! <span style={{fontWeight: 700, color: 'rgba(0, 0, 0, 0.9'}}>Resend</span></p>
                    <SubmitButton style={{marginTop: 20}} onClick={() => navigate('/reset-password')}>Send</SubmitButton>
                </ForgotPasswordForm>
            </ForgotPasswordWrapper>
        </ForgotPasswordContainer>
    )
}