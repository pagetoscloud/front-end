import { CloseButton, GoogleButton, LoginButton, LoginPopUpBox, LoginPopUpContainer, SubParagraphText, TitleText } from "./LoginPopUp.styled";
import googleIcon from "../../../../../assets/images/google-logo.png";
import { useNavigate} from "react-router-dom";
export default function LoginPopUp({handleCloseLoginPopUp}) {
    const navigate = useNavigate();
    const handleClickLoginWithGoogle = () => {
        window.location = 'http://localhost:5001/auth/google';
    }
    return (
        <LoginPopUpContainer>
            <LoginPopUpBox>
                <CloseButton onClick={handleCloseLoginPopUp}>
                    <img src="https://img.icons8.com/ios-filled/50/000000/multiply.png" alt="close icon" />
                </CloseButton>
                <TitleText>You Need to Login.</TitleText>
                {/* <p>Login with gmail</p> */}
                {/* <p>Login</p> */}
                <LoginButton onClick={() => navigate('/login')}>
                    <p>Login With Email</p>
                </LoginButton>
                <GoogleButton onClick={handleClickLoginWithGoogle}>
                    <img src={googleIcon} alt="google icon" />
                    <p>Login with Google</p>
                </GoogleButton>
                <SubParagraphText>
                    Not have account?  
                    <span 
                        style={{color: 'blue', fontWeight: 800}}
                        onClick={() => navigate('/signup')}
                    > Signup</span>
                </SubParagraphText>
            </LoginPopUpBox>
        </LoginPopUpContainer>
    )
}