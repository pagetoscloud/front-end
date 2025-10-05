import styled from "styled-components";

export const MainSettingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 40px;
    padding-bottom: 40px;
    background: pink;
    @media only screen and (max-height: 800px){
        padding-bottom: 120px;
    }
    @media only screen and (min-width: 1080px){
        width: 820px;
    }
`;
// export const TitlePage = styled.h1`
//     width: auto;
//     height: auto;
//     font-size: 18px;
//     margin: 10px 0 20px 0;
// `;

export const HorizontalWrapper = styled.div`
    width: 90%;
    margin: 0 5%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media only screen and (min-width: 600px){
        width: 100%;
        margin: 0;
    }
`;

export const VerticalWrapper = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

`;
export const LabelInput = styled.label`
    width: auto;
    font-size: 16px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
    margin-left: 5%;
    @media only screen and (min-width: 600px){
        margin: 0;
    }
`;

export const InputSetting = styled.div`
    width: 80%;
    height: 40px;
    margin: 10px 0 30px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    &:focus-within {
        border-bottom: 1px solid #A2F1CC;
    }
    input {
        width: 90%;
        height: 90%;
        border: none;
        background: transparent;
        font-size: 16px;
    }
    input:focus-within {
        outline: none;
    }
`;

export const EditButton = styled.button`
    width: auto;
    height: auto;
    padding: 5px 20px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    background: #A2F1CC;
    color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ProfilePicture = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 70px;
    // background: pink;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
    }
`;
