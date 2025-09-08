
import styled from "styled-components";

export const BannerWrapper = styled.div`
    width: 90%;
    margin: 0 5%;
    margin-bottom: 10px;
    margin-top: 20px;
    height: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    background: linear-gradient(90deg, rgba(162, 241, 204, 1), rgba(31, 208, 125, 0.65));
    overflow: hidden;
    img {
        width: 220px;
    }
    @media only screen and (min-width: 600px){
        width: 100%;
        height: 240px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        margin-top: 40px;
    }
`;

export const BannerText = styled.div`
    width: 140px;
    height: auto;
    // margin: 20px 50px;
    margin-left: 10%;
    h2 {
        font-size: 20px;
        font-weight: 800;
        line-height: 1.5;
        margin: 0;
        text-align: left;
    }
    p {
        display: none;
        font-size: 14px;
        margin: 0;
        margin-top: 10px;
    }
    @media only screen and (min-width: 600px){
        width: 80%;
        p {
            display: block
        }
    }
    @media only screen and (min-width: 1000px){
        width: 250px;
        margin: 0;
        h2 {
            font-size: 28px;
            text-align: left;
        }
        p {
            font-size: 16px;
        }
    }
`;

export const ImageLeft = styled.div`
    display: none;
    @media only screen and (min-width: 1000px){
        height: auto;
        img {
            width: 100%;
        }
        display: block;
        width: 180px;
        margin-left: 5%;
    }
`;

export const ImageRight = styled.div`
    height: 160%;
    width: auto;
    img {
        width: auto;
        height: 100%;
    }
    margin-bottom: -50px;
    margin-right: -10%;
    @media only screen and (min-width: 600px){
        width: 40%;
        height: auto;
        margin: 0;
    }
    @media only screen and (min-width: 1000px){
        width: 350px;
        height: auto;
        margin: 0;
        margin-right: 5%;
        img {
            width: 100%;
        }
    }

`;