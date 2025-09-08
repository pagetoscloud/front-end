import styled from "styled-components";

export const EmailVerificationWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
    z-index: 3;
`;

export const EmailVerificationBox = styled.div`
    width: 80%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 20px;
    position: relative;
    @media only screen and (min-width: 600px){
        width: 500px;
        height: 400px;
    }
`;

export const CloseButton = styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    img {
        width: 100%;
    }
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

export const TitleText = styled.h1`
    width: 90%;
    text-align: center;
    font-size: 21px;
    margin-bottom: 40px;
    @media only screen and (min-width: 600px){
        font-size: 24px;
    }
`;

export const ParagraphText = styled.p`
    width: 80%;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 40px;
    margin-top: 10px;
    @media only screen and (min-width: 600px){
        width: 60%;
    }
`;

export const LabelText = styled.label`
    font-size: 16px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
    margin: 15px 0;
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

export const EmailVerificationForm = styled.form`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
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
    margin-top: 20px;
    @media only screen and (max-width: 400px){
        width: 250px;
    }
`;