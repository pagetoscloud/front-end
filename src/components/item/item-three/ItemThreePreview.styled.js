import styled from "styled-components";

export const ItemsClick = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    margin-top: -20px;
    background-color: transparent;
    position: absolute;
    z-index: 1;
    cursor: pointer;
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
export const ItemsCircle = styled.div`
    width: 130px;
    height: 130px;
    border: 2px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 5;
    position: relative;
    @media only screen and (min-width: 400px){
        width: 160px;
        height: 160px;
    }
`;
export const ItemsImage = styled.div`
    width: 110px;
    height: 110px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 6;
    margin: 5px 0;
    img {
        width: 100%;
        z-index: 7;
        // padding: 5px 1%;
        // margin: 5px 0;
    }
    @media only screen and (min-width: 400px){
        width: 130px;
        height: 130px;
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
    }
    h5 {
        font-size: 12px;
        margin: 0;
        z-index: 5;
    }
    p {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
        margin: 5px;
        z-index: 5;

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
    &:focus-within {
        box-shadow:0px 0px 0px 1px blue inset;
    }
    resize: none;
`;