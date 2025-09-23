import styled from "styled-components";

export const ItemDetailsWrapper = styled.div`
    // width: 100%;
    // height: 100%;
    // position: sticky;
    // bottom: 0;
    // background: rgba(0, 0, 0, 0.1);
    // z-index: 10;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    // @media only screen and (min-width: 600px) {
    //     width: 350px;
    //     height: 100%;
    //     background: rgba(0, 0, 0, 0.1);
    //     border-radius: 10px;
    // }
    width: 100%;
    height: 100%;
    position: sticky;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ItemDetailsBox = styled.div`
    width: 90%;
    height: 450px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: transparent;
    border-radius: 0 10px 10px 0;
    left: 0;
    overflow: hidden;
`;

export const ItemDetailsBoxHover = styled.div`
    width: 90%;
    height: 450px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: white;
    border-radius: 0 10px 10px 0;
    left: 0;
    overflow: hidden;
    cursor: pointer;
    &:hover {
        border: 1px solid blue;
    }
    background: transparent;
    z-index: 2;
`;

export const ItemDetailslBoxBackground = styled.div`
    width: 100%;
    height: 450px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: white;
    border-radius: 0 10px 10px 0;
    left: 0;
    overflow: hidden;
    &:hover {
        border: 1px solid blue;
    }
    background: white;
`;

export const ItemDetailsImage = styled.div`
    position: relative;
    width: 80%;
    max-width: 250px;
    max-height: 250px;
    margin-top: 45px;
    // overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 3px;
    img {
        width: 100%;
        height: auto;
    }
    z-index: 4;
    cursor: pointer;
`;

export const ItemDetailsText = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
`;

export const ItemsDetailsInput = styled.textarea`
    // width: 98%;
    width: auto;
    height: auto;
    margin: 0;
    padding: 5px 1%;
    font-family: 'Roboto';
    background: transparent;
    z-index: 4;
    border: none;
    text-align: center;
    field-sizing: content;
    cursor: pointer;
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
export const ItemDetailsButton = styled.div`
    width: 30px;
    height: 30px;
    // border-top: 1px dashed black;
    border-radius: 50%;
    // background: black;
    position: absolute;
    bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 5;
    cursor: pointer;
    img {
        width: 20px;
    }
`;

export const Image = styled.div`
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    // display: flex;
    // flex-direction: row;
    // align-items: center;
    // justify-content: center;
`;

export const BoxEditWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 2px;
    z-index: 10;
    &:hover {
        box-shadow: 0px 0px 0px 1px blue inset;
    }
`;