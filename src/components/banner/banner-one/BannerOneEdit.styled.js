import styled from "styled-components";

export const Banner = styled.div`
    width: 85%;
    // max-width: 300px;
    height: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 7.5%;
    @media only screen and (min-width: 380px){
        // height: 200px;
        // background: pink;
    }
`;

export const BannerHover = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: transparent;
    position: absolute;
    z-index: 2;
    cursor: pointer;
    &:hover {
        box-shadow:0px 0px 0px 1px blue inset;
    }
    // backdrop-filter: blur(10px);
`;

export const BannerContent = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    overflow: hidden;
`;
export const BannerImage = styled.div`
    width: 40%;
    margin-right: 5%;
    padding: 1%;
    z-index: 5;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &:hover {
        box-shadow:0px 0px 0px 1px blue inset;
    }
    img {
        width: 100%;
        height: auto;
        position: relative;
        cursor: pointer;
    }
`;
export const BannerBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    // display: none;
`;
export const BannerBorder = styled.div`
    width: 100%;
    height: 100%;
    // padding: 10px;
    position: absolute;
    z-index: 1;
    cursor: pointer;
`;

export const BannerText = styled.div`
    width: 45%;
    height: auto;
    margin-left: 5%;
    position: relative;
    z-index: 5;
    textarea {
        field-sizing: content;
        padding: 0 1%;
        width: 98%;
        height: auto;
        // min-height: 100px;
        margin: 0;
        // font-family: "Roboto", serif;
        overflow: hidden;
        background-color: transparent;
        border: none;
        margin-bottom: 5px;
        line-height: auto;
        color: white;
        z-index: 4;
        position: relative;
        cursor: pointer;
        resize: none;
        &:hover {
            // border: 1px solid blue;
             box-shadow:0px 0px 0px 1px blue inset;

        }
        &::-webkit-scrollbar {
            display: none;
        }
    }

    textarea:focus {
        outline: none;
    }
    textarea:focus-within {
         box-shadow:0px 0px 0px 1px blue inset;
    }
    h1 {
        z-index: 4;
        position: relative;
        line-height: auto;
        margin: 0;
        margin-bottom: 5px;
    }
    p {
        font-size: 16px;
        line-height: auto;
        position: relative;
        z-index: 4;
        cursor: pointer;
        margin: 0;
        margin-bottom: 5px;
    }
    // h1:hover, p:hover {
    //     box-shadow:0px 0px 0px 1px blue inset;
    // }
`;