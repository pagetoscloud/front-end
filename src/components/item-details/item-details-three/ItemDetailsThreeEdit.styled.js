
import styled from "styled-components";

export const ItemDetailsWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: sticky;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 20;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;

export const ItemDetailsBox = styled.div`
    width: 100%;
    height: 450px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    // background: white;
    border-radius: 20px 20px 0 0;
    left: 0;
    overflow: hidden;
`;

export const ItemDetailsBoxHover = styled.div`
    width: 100%;
    height: 450px;
    position: absolute;
    background: white;
    border-radius: 20px 20px 0 0;
    overflow: hidden;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 0px 1px blue inset;
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
    width: 80%;
    height: auto;
    max-width: 300px;
    max-height: 250px;
    margin-top: 40px;
    overflow: hidden;
    border-radius: 10px;
    z-index: 4;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 0px 1px blue inset;
    }
    img {
        width: 100%;
        height: auto;
    }
`;

export const ItemDetailsText = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0;
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
    bottom: 20px;
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