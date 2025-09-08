import styled from "styled-components";

export const JumbotronContainer = styled.div`
    width: 100%;
    min-height: 700px;
    max-height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(190deg, #DBF8EB 45%, #F7F7E5);
    // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    @media only screen and (max-width: 900px){
        max-height: 1000px;
    }
    @media only screen and (max-width: 600px){
        max-height: 370px;
    }
`;

export const VerticalContentWrapper = styled.div`
    width: 90%;
    height: 350px;
    padding-left: 10%;
    margin-top: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    img {
        margin-right: -100px;
        width: 70%;
    }
    @media only screen and (max-width: 600px){
        flex-direction: column;
        width: 100%;
        img {
            width: 130%;
            margin: 0 -15%;
        }
    }
    @media only screen and (max-width: 900px){
        width: 90%;
        height: auto;
        padding: 0 5%;
        // flex-wrap: wrap-reverse;
        // flex-direction: column;
        img {
            // margin-right: 0;
            width: 100%;
            min-width: 500px;
        }
    }
`;

export const TextContent = styled.div`
    width: 350px;
    // background: pink;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Arial', sans-serif;
    h1 {
        max-width: 260px;
        font-size: 34px;
        font-weight: 700;
        line-height: 1.3;
        margin: 0;
        text-align: center;
    }
    p {
        font-size: 16px;
        margin-top: 20px;
        margin-bottom: 30px;
    }
    margin-bottom: 50px;
    @media only screen and (min-width: 600px){
        // margin-top: 50px;
        align-items: flex-start;
        h1 {
            font-size: 48px;
            max-width: 350px;
            text-align: left;
        }
        // padding: 0 10%;
    }
`;

export const JumbotronHeader = styled.header`
    width: 80%;
    height: 70px;
    padding: 5px 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
        width: 120px;
        height: auto;
        // padding-top: 30px;
    }
    position: absolute;
    top: 0;
    @media only screen and (min-width: 900px){
        img {
            width: 180px
        }
    }
`;

export const JumbotronNavigation = styled.nav`
    width: 300px;
    height: 35px;
    // background-color: pink;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    a, p {
        font-size: 16px;
        font-weight: 600;
        text-decoration: none;
        color: black;
        cursor: pointer;
        margin: 0;
    }
    
    // display: none;
    @media only screen and (max-width: 1000px){
        display: none;
    }
`;

export const ButtonWrapper = styled.div`
    width: 220px;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 600px){
        width: auto;
        // display: none;
    }
`;

export const LoginButton = styled.div`
    a {
        border: 2px solid black;
        background-color: black;
        border-radius: 5px;
        width: 70px;
        height: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 16px;
        font-weight: 800;
        text-decoration: none;
        cursor: pointer;
    }
    @media only screen and (min-width: 600px){
        a {
            border-radius: 10px;
            width: 100px;
            height: 35px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            text-decoration: none;
            cursor: pointer;
        }
    }
`;

export const SignUpButton = styled.div`
    a {
        border: 2px solid black;
        background-color: transparent;
        border-radius: 10px;
        width: 100px;
        height: 35px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: black;
        font-size: 16px;
        font-weight: 800;
        text-decoration: none;
        cursor: pointer;
    }
    @media only screen and (max-width: 600px){
        display: none;
    }
`;

export const CreateButton = styled.button`
    width: auto;
    height: auto;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 5px;
    background-color: transparent;
    border: 2px solid black;
    a {
        color: black;
        text-decoration: none;
    }
`;