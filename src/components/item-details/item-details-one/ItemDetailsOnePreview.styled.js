import styled from "styled-components";

export const ItemDetailsWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
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
    @media only screen and (min-width: 1000px){
        width: 500px;
        height: 500px;
        position: relative;
        border-radius: 20px;
    }
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
    @media only screen and (min-width: 1000px){
        height: 500px;
        border-radius: 20px;
    }
`;

export const ItemDetailsImage = styled.div`
    width: 80%;
    max-width: 250px;
    max-height: 250px;
    margin-top: 45px;
    overflow: hidden;
    border-radius: 10px;
    img {
        width: 100%;
        height: auto;
    }
    z-index: 4;
    @media only screen and (min-width: 1000px){
        width: 300px;
        height: 300px;
        margin-top: 50px;
    }
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
    &:focus {
        outline: none;
    }
    &:focus-within {
        box-shadow:0px 0px 0px 1px blue inset;
    }
    resize: none;
`;

export const ItemsTitle = styled.h4`
    width: auto;
    height: auto;
    margin: 0;
    padding: 5px 1%;
    font-family: 'Roboto';
    background: transparent;
    z-index: 4;
    text-align: center;
`;

export const ItemsDescription = styled.p`
    width: 70%;
    height: auto;
    margin: 0;
    padding: 5px 1%;
    font-family: 'Roboto';
    background: transparent;
    z-index: 4;
    text-align: center;
`;

export const ItemsPrice = styled.h5`
    width: auto;
    height: auto;
    margin: 0;
    padding: 5px 1%;
    font-family: 'Roboto';
    background: transparent;
    z-index: 4;
    text-align: center;
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