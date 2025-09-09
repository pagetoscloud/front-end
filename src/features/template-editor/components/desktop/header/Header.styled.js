import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: white;
    // background: blue;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    @media only screen and (max-width: 600px){
        width: 100%;
        padding: 0 !important;
    }
`;

export const LeftContentWrapper = styled.div`
    height: auto;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    // background: pink;
    p {
        font-size: 16px;
        font-weight: 400;
        font-family: "Roboto";
        cursor: pointer;
    }
    a {
        font-size: 16px;
        text-decoration: none;
        color: black;
    }
    @media only screen and (min-width: 900px){
        display: flex;
    }
`;

export const CenterContentWrapper = styled.div`
    width: 90%;
    margin: 0 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media only screen and (min-width: 900px){
        width: 400px;
    }
`; 

export const UndoRedoWrapper = styled.div`
    width: 100px;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    justify-content: space-around;
    img {
        width: 25px;
        height: auto;
        cursor: pointer;
    }
    @media only screen and (min-width: 600px){
        width: 120px;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        border-left: 1px solid rgba(0, 0, 0, 0.1);
    }
`;

export const InputDocumentName = styled.div`
    width: 120px;
    height: 30px;
    // background-color: pink;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &:focus-within {
        border-bottom: 1px solid #82F08B;
    }
    input:focus {
        outline: none;
    }
    input {
        width: 90%;
        height: 90%;
        border: none;
        background-color: transparent;
        text-align: left;
    }
    @media only screen and (min-width: 600px){
        display: flex;
    }
`;

export const PageNavigation = styled.div`
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    p {
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
    }
    @media only screen and (min-width: 600px){
        width: 120px;
    }
`;

export const MenuButton = styled.div`
    width: 50px;
    height: auto;
    // background: pink;
    // border-right: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    img {
        width: 20px;
    }
    @media only screen and (min-width: 600px){
        display: none;
    }
`;

export const RightContentWrapper = styled.div`
    height: auto;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    // background: pink;
    @media only screen and (min-width: 900px){
        display: flex;
    }
`; 

export const ProfilePicture = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    // background: #82F08B;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    p {
        font-size: 24px;
    }
    img {
        width: 70%;
    }
`;

export const PreviewButton = styled.div`
    width: 60px;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    p {
        font-size: 16px;
        font-weight: 700;
    }
    a {
        text-decoration: none;
        color: black;
        font-size: 16px;
        font-weight: 700;

    }
    img {
        width: 20px;
        height: auto;
    }
    @media only screen and (min-width: 900px){
        border-radius: 10px;
        width: 80px;
        height: 35px;
        background-color: #82F08B;
        border: 2px solid #82F08B;
    }
    @media only screen and (min-width: 1150px){
        width: 100px;
        height: 35px;
    }
`;

export const SaveButton = styled.div`
    width: 50px;
    // background: pink;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    cursor: pointer;
    p {
        font-size: 16px;
        font-weight: 700;
        margin: 5px 0;
    }
    @media only screen and (min-width: 900px){
        border-radius: 10px;
        border: 2px solid black;
        justify-content: center;
        width: 80px;
        height: 35px;
    }
    @media only screen and (min-width: 1150px){
        width: 100px;
        height: 35px;
    }
`;