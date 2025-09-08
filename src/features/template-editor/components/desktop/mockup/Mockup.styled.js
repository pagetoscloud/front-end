import styled from "styled-components";
export const MockupContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    position: relative;
    // border-radius: 10px;
    z-index: 2;
    width: 100%;
    box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.05);
    @media only screen and (min-width: 400px){
        width: 350px;
        // border-radius: 10px;
    }
    @media only screen and (min-width: 600px){
        border-radius: 10px;
    }
`;

export const MockupScroll = styled.div`
    width: 350px;
    height: auto;
    padding: 10px 0;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    // position: relative;
    z-index: 1;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Banner = styled.div`
    width: 85%;
    height: 100px;
    background-color: pink;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
    img {
        width: 40%;
        margin-right: 5%;
        padding: 1%;
        height: auto;
        position: relative;
        z-index: 4;
        cursor: pointer;
        &:hover {
            box-shadow:0px 0px 0px 1px blue inset;
        }
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
    // padding: 10px;
    position: absolute;
    z-index: 1;
    cursor: pointer;
`;

export const ScreenClick = styled.div`
    width: 98%;
    margin: 0 1%;
    position: fixed;
    cursor: pointer;
    background-color: transparent;
    z-index: 1;
    &:hover {
        box-shadow:0px 0px 0px 1px blue;
    }
    @media only screen and (min-width: 400px){
        width: 350px;
        margin: 0;
    }
    @media only screen and (min-width: 600px){
        border-radius: 10px;
    }
`;
export const MockupTextLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    margin: 20px 0;
    textarea {
        text-align: center;
        width: auto;
        field-sizing: content;
        padding: 0 10px;
        height: auto;
        margin: 0;
        overflow: hidden;
        background-color: transparent;
        border: none;
        margin-bottom: 5px;
        line-height: auto;
        color: white;
        z-index: 3;
        position: relative;
        cursor: text;
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
        // border: 1px solid blue;
         box-shadow:0px 0px 0px 1px blue inset;
    }
`;

export const BannerText = styled.div`
    width: 45%;
    height: auto;
    margin-left: 5%;
    position: relative;
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
        // border: 1px solid blue;
         box-shadow:0px 0px 0px 1px blue inset;
    }
    p {
        font-size: 16px;
        line-height: 1;
        color: white;
        position: relative;
        z-index: 3;
        cursor: pointer;
        margin: 0;
    }
`;

export const ItemsContainer = styled.div`
    width: 78%;
    padding: 0 1%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    // background: pink;
`;

export const ItemsListWrapper = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 45% 45%;
    column-gap: 10%;
    row-gap: 30px;
    margin: 10px 0;
    @media only screen and (max-width: 420px){
        display
    }
`;

export const CategoryText = styled.h3`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 20px 0;
    textarea {
        text-align: center;
        width: auto;
        field-sizing: content;
        padding: 0 10px;
        height: auto;
        margin: 0;
        overflow: hidden;
        background-color: transparent;
        border: none;
        margin-bottom: 5px;
        line-height: auto;
        z-index: 3;
        position: relative;
        cursor: text;
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
        // border: 1px solid blue;
         box-shadow:0px 0px 0px 1px blue inset;
    }
`;

export const ItemsClick = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    margin-top: -20px;
    background-color: transparent;
    position: absolute;
    z-index: 1;
    cursor: pointer;
    &:hover {
        box-shadow:0px 0px 0px 1px blue inset;
    }
`;

export const ItemsWrapper = styled.div`
    width: 100%;
    min-height: 150px;
    padding: 10px 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    positon: relative;
    cursor: pointer;
    z-index: 1;
`;

export const ItemsImage = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 5;
    margin: 5px 0;
    &:hover {
        box-shadow: 0px 0px 0px 1px blue;
    }
    img {
        width: 100%;
        z-index: 4;
        // padding: 5px 1%;
        // margin: 5px 0;
    }
`;
export const ItemsText = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    h4 {
        font-size: 14px;
        text-align: center;
        margin: 0;
        z-index: 5;
        &:hover {
            box-shadow:0px 0px 0px 1px blue inset;
        }
    }
    h5 {
        font-size: 12px;
        margin: 0;
        z-index: 5;
        &:hover {
            box-shadow:0px 0px 0px 1px blue inset;
        }
    }
    p {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
        margin: 5px;
        z-index: 5;
        &:hover {
            box-shadow:0px 0px 0px 1px blue inset;
        }
    }
`;
export const ItemsBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
`;

export const ItemsInput = styled.textarea`
    width: 98%;
    height: auto;
    margin: 0;
    padding: 5px 1%;
    font-family: 'Roboto';
    background: transparent;
    z-index: 4;
    border: none;
    text-align: center;
    field-sizing: content;
    &:focus {
        outline: none;
    }
    &:hover {
        box-shadow:0px 0px 0px 1px blue inset;
    
    }
    &:focus-within {
        box-shadow:0px 0px 0px 1px blue inset;
    }
    resize: none;
`;