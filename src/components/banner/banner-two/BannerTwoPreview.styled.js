
import styled from "styled-components";

export const Banner = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    // background: transparent;
    // @media only screen and (min-width: 300px){
    //     width: 300px;
    // }
    // @media only screen and (min-width: 400px){
    //     width: 400px;
    // }
    @media only screen and (min-width: 600px){
        width: 600px;
    }
`;

export const BannerContent = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    overflow: hidden;
    // background: pink;
    img {
        padding: 1%;
        margin-right: 5%;
        width: 40%;
        height: auto;
        position: relative;
        z-index: 4;
    }
`;
export const BannerImage = styled.div`
    width: 40%;
    margin-right: 5%;
    padding: 1%;
    img {
        width: 100%;
        height: auto;
        position: relative;
        z-index: 4;
        cursor: pointer;
    }
    @media only screen and (min-width: 600px){
        width: 30%;
        margin-right: 10%;
    }
`;
export const BannerBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`;
export const BannerBorder = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    cursor: pointer;
`;

export const BannerText = styled.div`
    width: 300px;
    height: auto;
    // margin-left: 5%;
    position: relative;
    z-index: 5;
    h1 {
        z-index: 3;
        position: relative;
        line-height: auto;
        margin: 0;
        margin-bottom: 5px;
    }
    p {
        // font-size: 16px;
        line-height: auto;
        position: relative;
        z-index: 3;
        cursor: pointer;
        margin: 0;
        margin-bottom: 5px;
    }
    @media only screen and (min-width: 600px){
        width: 600px;
        // margin-left: 10%;
    }
`;