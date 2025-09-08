import { useState } from "react";
import { 
    ForgotPasswordContainer, ForgotPasswordForm, 
    ForgotPasswordWrapper, InputText, 
    LabelText, SubmitButton, 
    SubParagraphText, SubTitleText, 
    TitleText 
} from "./styles/Global.styled";
import { useNavigate } from "react-router-dom";

export default function ResetPassword(){
        const navigate = useNavigate();
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        // const handleChangePassword = (e) => {
        //     setPassword(e);
        // }
        return (
            <ForgotPasswordContainer>
                <ForgotPasswordWrapper>
                    <TitleText>Reset Password</TitleText>
                    <SubTitleText>Enter Your New Password.</SubTitleText>
                    <SubParagraphText>Your new password must be different from previously use password.</SubParagraphText>
                    <ForgotPasswordForm>
                        <LabelText>Password</LabelText>
                        <InputText>
                            <input 
                                type='text' 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your new passord"
                            />
                        </InputText>
                        <LabelText>Confirm Password</LabelText>
                        <InputText>
                            <input 
                                type='text' 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm your new password"
                            />
                        </InputText>
                        <SubmitButton style={{marginTop: 20}} onClick={() => navigate('/login')}>Verify and Proceed</SubmitButton>
                    </ForgotPasswordForm>
                </ForgotPasswordWrapper>
            </ForgotPasswordContainer>
        )
}