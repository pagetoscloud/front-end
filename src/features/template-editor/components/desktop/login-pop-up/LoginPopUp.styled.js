import styled from "styled-components";

export const LoginPopUpContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.4);
    z-index: 20;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LoginPopUpBox = styled.div`
    width: 80%;
    height: 250px;
    padding: 0 5%;
    // top: 100px;
    // right: 5%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    background: white;
    z-index: 9999;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    @media only screen and (min-width: 600px){
        justify-content: center;
        width: 400px;
        height: 350px;
        padding: 20px;
        // top: 100px;
        // right: 30px;
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
    margin-bottom: 20px;
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

export const LoginButton = styled.div`
    width: 300px;
    height: 40px;
    border-radius: 40px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 20px;
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
