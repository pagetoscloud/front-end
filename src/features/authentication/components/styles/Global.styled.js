import styled from "styled-components";

export const LayoutContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const ForgotPasswordContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    background: white;
    @media only screen and (min-width: 900px){
        background-image: linear-gradient(190deg, #DBF8EB 45%, #F7F7E5);
    }
`;

export const ForgotPasswordWrapper = styled.div`
    width: 100%;   
    min-height: 50%;
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    background-color: white;
    border-radius: 20px;
    @media only screen and (min-width: 900px){
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.01);
        width: 500px;
        height: 60%;
    }
`;

export const ForgotPasswordForm = styled.form`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
`;

export const SubTitleText = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
    margin-top: 80px;
`;
export const SubParagraphText = styled.p`
    width: 250px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
    margin: 0;
    margin-bottom: 20px;
    text-align: center;
    // width: 100%;      
`;
export const FormWrapper = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: relative;
`;

export const HeroWrapper = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background-image: linear-gradient(180deg, #ECFDF6 20%, #DAFAE9 70%, #F5FAE8);
    @media only screen and (max-width: 900px){
        display: none;
    }
`;

export const HeroContent = styled.div`
    height: 550px;
    padding: 10px 0;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    h2 {
        font-size: 26px;
        font-weight: 600;
        margin: 0;
        width: 300px;
        text-align: center;
    }
    img {
        width: 110%;
        margin-left: 30%;
    }
`;
export const DividingLine = styled.div`
    width: 100%;
    height: 1px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin: 30px 0 10px 0;
`;

export const InputWrapper = styled.div`
    width: auto;
    min-height: 550px;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    // background: pink;
`;

export const TitleText = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 24px;
    margin: 0;
`;

export const ParagraphText = styled.p`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 40px;
    margin-top: 10px;
`;

export const LabelText = styled.label`
    font-size: 16px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
    margin: 15px 0;
`;

export const TextButton = styled.a`
    font-size: 14px;
    font-weight: 700;
    color: #1FD07D;
    text-decoration: none;
    margin: 10px 0;
    width: 100%;
    text-align: right;
    cursor: pointer;
`;

export const ToSignup = styled.div`
    width: 100%;
    text-align: center;
    p {
        font-size: 14px;
        margin: 10px 0;
    }
    span, a {
        color: #1FD07D;
        font-weight: 800;
        cursor: pointer;
        font-decoration: none;
    }
`;

export const ToLogin = styled.div`
    width: 100%;
    text-align: center;
    p {
        font-size: 14px;
        margin: 10px 0;
    }
    span, a {
        color: #1FD07D;
        font-weight: 800;
        cursor: pointer;
        font-decoration: none;
    }
`;

export const InputText = styled.div`
    width: 300px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    &:focus-within {
        border: 1px solid #1FD07D;
    }
    input {
        border: none;
        background-color: none;
        width: 85%;
        height: 90%;
    }
    input:focus {
        outline: none;
        border: none;
    }
    @media only screen and (max-width: 400px){
        width: 250px;
    }
`;

export const GoogleButton = styled.div`
    width: 300px;
    height: 40px;
    border-radius: 40px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    p {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.7);
    }
    img {
        width: 40px;
        height: auto;
        margin: 0 10px;
    }
    @media only screen and (max-width: 400px){
        width: 250px;
    }
`;

export const VerifyCodeInputWrapper = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    // background: pink;
`;

export const VerifyCodeInput = styled.input`
    width: 40px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
    // margin: 0 5px;
    background-color: rgba(0, 0, 0, 0.2);
`;
export const SubmitButton = styled.button`
    width: 300px;
    height: 40px;
    background-color: #1FD07D;
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    margin: 10px 0;
    font-weight: 800;
    cursor: pointer;
    @media only screen and (max-width: 400px){
        width: 250px;
    }
`;

export const Footer = styled.div`
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // background-color: pink;
    overflow: hidden;
    h6 {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.7);
    }
    img{
        width: 100px;
        cursor: pointer;
    }
`;

export const TextValidation = styled.p`
    font-size: 12px;
    color: red;
    width: 100%;
    text-align: center;
    margin: 5px 0;
    display: none;
`;