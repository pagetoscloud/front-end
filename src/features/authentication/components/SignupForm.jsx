import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { DividingLine, Footer, FormWrapper, GoogleButton, HeroContent, HeroWrapper, InputText, InputWrapper, LabelText, LayoutContainer, ParagraphText, SubmitButton, TextButton, TextValidation, TitleText, ToLogin } from "./styles/Global.styled";
import logo from '../../../assets/images/Pixel-style-logo.png';
import googleLogo from '../../../assets/images/google-logo.png';
import hero from '../../../assets/images/jumbotron-hero.png';
import { useState } from "react";
export default function SignupForm({authSignup, status}){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const checkEmailType = (email) => {
        let condition = false;
        for (let i = 0; i < email.length; i++){
            console.log(email[i])
            if (email[i] === '@' && email.length > 12){
                condition = true;
                break;
            }
        }
        return condition;
    }

    const handleSignup = () => {
        const emailElement = document.getElementById('emailValidation');
        const passwordElement = document.getElementById('passwordValidation');
        const usernameElement = document.getElementById('usernameValidation');
        const emailType = checkEmailType(email);
        if (!emailType && password.length < 8 && username.length < 8) {
            usernameElement.style.display = 'block';
            usernameElement.innerHTML = 'Minimum 8 character.';
            emailElement.style.display = 'block';
            emailElement.innerHTML = 'Invalid email.';
            passwordElement.style.display = 'block';
            passwordElement.innerHTML = 'Minimum 8 character.';
        } else if (username.length < 8) {
            usernameElement.style.display = 'block';
            usernameElement.innerHTML = 'Minimum 8 character.';
        } else if(password.length < 8) {
            passwordElement.style.display = 'block';
            passwordElement.innerHTML = 'Minimum 8 character.';
        } else if (!emailType) {
            emailElement.style.display = 'block';
            emailElement.innerHTML = 'Invalid email.';
        } else {
            authSignup({username, email, password});
        }
    }
    const handleChangeUsername = (e) => {
        const usernameElement = document.getElementById('usernameValidation');
        setUsername(e);
        if (username.length >= 8){
            usernameElement.style.display = 'none';
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
    const navigate = useNavigate();
    return (
       <LayoutContainer style={{height: height}}>
            <FormWrapper>
                <InputWrapper>
                    <TitleText>Signup</TitleText>
                    <ParagraphText>Tingkatkan kualitas produk anda.</ParagraphText>
                    <GoogleButton>
                        <img src={googleLogo} alt="google logo" />
                        <p>Daftar dengan google</p>
                    </GoogleButton>
                    <DividingLine />
                    <LabelText>Username</LabelText>
                    <InputText>
                        <input 
                            type="text" 
                            value={username}
                            onChange={(e) => handleChangeUsername(e.target.value)}
                            placeholder="Username"
                        />
                    </InputText>
                    <TextValidation id="usernameValidation"/>       
                    <LabelText>Email</LabelText>
                    <InputText>
                        <input 
                            type="text" 
                            value={email}
                            onChange={(e) => handleChangeEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </InputText>
                    <TextValidation id="emailValidation"/>       
                    <LabelText>Password</LabelText>
                    <InputText>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => handleChangePassword(e.target.value)}
                            placeholder="Password"
                        />
                    </InputText>
                    <TextValidation id="passwordValidation"/>
                    <TextButton></TextButton>
                    <SubmitButton onClick={handleSignup}>Daftar</SubmitButton>
                    <TextValidation style={{display: 'block'}}>{status}</TextValidation>
                    <ToLogin>
                        <p>Sudah punya akun? <span onClick={() => navigate('/login')}>Masuk</span></p>
                    </ToLogin>
                </InputWrapper>
                <Footer>
                    <img onClick={() => navigate('/')} src={logo} alt="logo footer"/>
                </Footer>
            </FormWrapper>
            <HeroWrapper>
                <HeroContent>
                    <h2>Tampilan menarik buat penjualan naik.</h2>
                    <img src={hero} alt="hero" />
                </HeroContent>
                <Footer>
                    <p>PT. Energi kreatif bangsa.</p>
                </Footer>
            </HeroWrapper>
       </LayoutContainer>
    )
};