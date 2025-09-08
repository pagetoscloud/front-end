import styled from "styled-components";

export const IntegrationContainer = styled.div`
    width: 70%;
    height: 800px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 1200px){
        width: 80%;
    }
    @media only screen and (max-width: 1000px){
        flex-direction: column;
        height: 1000px;
        padding: 100px 0;
        // background-color: pink;
        justify-content: space-between;
    }
    @media only screen and (max-width: 600px){
        width: 90%;
        height: 800px;
    }
`;

export const TextContent = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    font-family: 'Arial', sans-serif;
    h2 {
        width: 280px;
        font-size: 34px;
        font-weight: 800;
        line-height: 1.5;
        margin: 0;
        text-align: right;
    }
    p {
        width: 200px;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.5;
        text-align: right;
    }
    @media only screen and (min-width: 600px){
        width: 400px;
        h2 {
            width: 400px;
            font-size: 48px;
            font-weight: 800;
            line-height: 1.5;
            margin: 0;
            text-align: right;
        }
        p {
            width: 250px;
            font-size: 16px;
            font-weight: 500;
            line-height: 1.5;
            text-align: right;
        }
    }
`;

export const IntegrationListWrapper = styled.div`
    width: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media only screen and (max-width: 600px){
        width: 90%;
        // background: blue;
    }
`;

export const IntegrationItems = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    @media only screen and (max-width: 600px){
        height: 125px;

    }
`;

export const IntegrationItemsIcon = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: black;
    border-radius: 20px;
    img {
        width: 60%;
        height: auto;
    }
    @media only screen and (max-width: 600px){
        width: 70px;
        height: 70px;
        border-radius: 10px;
    }
`;

export const IntegrationItemsText = styled.div`
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    h4 {
        font-size: 22px;
        margin-top: 0;
        margin-bottom: 5px;
    }
    p {
        width: 80%;
        font-size: 14px;
        margin: 0;
        line-height: 1.5;
    }
    // background: blue;
    margin-left: 20px;
    @media only screen and (max-width: 600px){
        width: 180px;
        h4 {
            font-size: 20px;
        }
        p {
            width: 100%;
        }
    }
`;