import { useWindowSize } from "../../../hooks/useWindowSize";
import { 
    DividingLine, Footer, 
    FormWrapper, GoogleButton, 
    HeroContent, HeroWrapper, 
    InputText, InputWrapper, 
    LabelText, LayoutContainer, 
    ParagraphText, SubmitButton, 
    TextButton, TextValidation, TitleText, 
    ToSignup
} from "./styles/Global.styled";
import hero from '../../../assets/images/jumbotron-hero.png';
import googleLogo from '../../../assets/images/google-logo.png';
import logo from '../../../assets/images/Pixel-style-logo.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginForm({authenticationProcess, status}){
    console.log(`${import.meta.env.VITE_API_URL}/auth/google`);
    // console.log(process.env.VITE_API_URL);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const checkEmailType = (email) => {
        let condition = false;
        for (let i = 0; i < email.length; i++){
            if (email[i] === '@' && email.length > 12){
                condition = true;
                break;
            }
        }
        return condition;
    }
    const handleLogin = () => {
        const emailElement = document.getElementById('emailValidation');
        const passwordElement = document.getElementById('passwordValidation');
        const emailType = checkEmailType(email);
        if (!emailType && password.length < 8) {
            emailElement.style.display = 'block';
            emailElement.innerHTML = 'Invalid email.';
            passwordElement.style.display = 'block';
            passwordElement.innerHTML = 'Minimum 8 character.'
        } else if (password.length < 8) {
            passwordElement.style.display = 'block';
            passwordElement.innerHTML = 'Minimum 8 character.';
        } else if (!emailType) {
            emailElement.style.display = 'block';
            emailElement.innerHTML = 'Invalid email.';
        } else {
            authenticationProcess({email, password});
        }
    }
    const handleChangeEmail = (e) => {
        const emailElement = document.getElementById('emailValidation');
        const emailType = checkEmailType(e);
        if (emailType){
            emailElement.style.display = 'none';
        }
        setEmail(e);
    }
    const handleChangePassword = (e) => {
        const passwordElement = document.getElementById('passwordValidation');
        if (e.length >= 8){
            passwordElement.style.display = 'none';
        }
        setPassword(e);
    }
    const size = useWindowSize();
    const height = size[0];
    const handleGoogleAuth = async () => {
        const redirectUrl = import.meta.env.VITE_NODE_ENV !== 'development' 
            ? 'https://pagetos-express-backend-v1-561278679973.asia-southeast2.run.app/auth/google'
            : 'http://localhost:5001/auth/google';

        window.location = redirectUrl;
        // Uncomment this code if you want to use fetch to handle Google authentication
        // const url = 'http://localhost:5000/auth/google';
        // try {
        //     await fetch(url, {
        //         method: 'GET',
        //         mode: 'cors',
        //         credentials: 'include'
        //     });
        // } catch (error) {
            
        // }
    }
    return (
        <LayoutContainer style={{height: height}}>
            <FormWrapper>
                <InputWrapper>
                    <TitleText>Login</TitleText>
                    <ParagraphText>Selamat datang kembali.</ParagraphText>
                    <GoogleButton>
                        <img src={googleLogo} alt="google logo" />
                        <p onClick={handleGoogleAuth}>Masuk dengan Google</p>
                    </GoogleButton>
                    <DividingLine/>
                    <LabelText>Email</LabelText>
                    <InputText>
                        <input 
                            type='text' 
                            value={email} 
                            onChange={(e) => handleChangeEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </InputText>
                    <TextValidation id="emailValidation"/>
                    <LabelText>Password</LabelText>
                    <InputText>
                        <input 
                        type='password' 
                        value={password} 
                        onChange={(e) => handleChangePassword(e.target.value)}
                        placeholder="Enter your password" 
                    />
                    </InputText>
                    <TextValidation id="passwordValidation"/>
                    <TextButton onClick={() => navigate('/forgot-password')}>Lupa Password ?</TextButton>
                    <SubmitButton onClick={handleLogin}>Masuk</SubmitButton>
                    <TextValidation style={{display: 'block'}}>{status === 'ok'? '' : status}</TextValidation>
                    <ToSignup>
                        <p>Belum punya akun? <span onClick={() => navigate('/signup')}>Daftar</span></p>
                    </ToSignup>
                </InputWrapper>
                <Footer><img onClick={() => navigate('/')} src={logo} alt="logo" /></Footer>
            </FormWrapper>
            <HeroWrapper>
                <HeroContent>
                    <h2>Tampilan menarik buat penjualan naik.</h2>
                    <img src={hero} alt="hero" />
                </HeroContent>
                <Footer>
                    <p>PT. Energi Kreatif Bangsa</p>
                </Footer>
            </HeroWrapper>
        </LayoutContainer>
    )
};