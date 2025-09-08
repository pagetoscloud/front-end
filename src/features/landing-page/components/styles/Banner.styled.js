
import styled from "styled-components";


export const BannerContainer = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const BannerWrapper = styled.div`
    width: 70%;
    height: 400px;
    padding: 50px 10%;
    background-image: linear-gradient(90deg, #DBF8EB 0%, #B0F4D2 45%, #F7F7E5);
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    img {
        width: 300px;
        margin-left: 10px;
        margin-top: 20px;
    }
    @media only screen and (min-width: 600px){
        flex-direction: row;
        img {
            width: 400px;
            margin-top: 0;
        }
    }
    @media only screen and (min-width: 1100px){
        img {
            width: 600px;
        }
    }
`;

export const BannerText = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Arial', sans-serif;
    h2 {
        font-size: 36px;
        color: black;
        line-height: 1.5;
        margin: 0;
        text-align: center;
    }
    p {
        font-size: 16px;
        color: black;
        line-height: 1.5;
        text-align: center;
    }
    @media only screen and (min-width: 600px){
        align-items: flex-start;
        h2 {
            font-size: 46px;
            text-align: left;
        }
        p {
            text-align: left;
        }
    }
`; 

export const BannerActionButton = styled.button`
    width: auto;
    height: auto;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 5px;
    background-color: transparent;
    border: 2px solid black;
`;