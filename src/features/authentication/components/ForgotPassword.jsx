import { useState } from "react";
import { 
    ForgotPasswordContainer, ForgotPasswordForm, 
    ForgotPasswordWrapper, InputText, 
    LabelText, SubmitButton, 
    SubParagraphText, SubTitleText, 
    TitleText 
} from "./styles/Global.styled";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const handleChangeEmail = (e) => {
        setEmail(e);
    }
    return (
        <ForgotPasswordContainer>
            <ForgotPasswordWrapper>
                <TitleText>Forgot Password</TitleText>
                <SubTitleText>Recover With Email</SubTitleText>
                <SubParagraphText>Enter your email to send verification code.</SubParagraphText>
                <ForgotPasswordForm>
                    <LabelText htmlFor="email">Email</LabelText>
                    <InputText>
                        <input 
                            type='text' 
                            id="email"
                            value={email} 
                            onChange={(e) => handleChangeEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </InputText>
                    <SubmitButton style={{marginTop: 20}} onClick={() => navigate('/email-verification')}>Send</SubmitButton>
                </ForgotPasswordForm>
            </ForgotPasswordWrapper>
        </ForgotPasswordContainer>
    )
}