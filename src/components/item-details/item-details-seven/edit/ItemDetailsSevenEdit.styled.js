import styled from "styled-components";

export const ItemDetailsWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: sticky;
    bottom: 0;
    background: white;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const ItemDetailslBoxBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    // background: white;
    // border-radius: 20px;
    overflow: hidden;
    &:hover {
        border: 1px solid blue;
    }
    // background: transparent;
`;

export const ItemDetailsBoxHover = styled.div`
    width: 95%;
    height: 95%;
    margin: 2%;
    padding: 2px;
    background: blue;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: pink;
    overflow: hidden;
    cursor: pointer;
    &:hover {
        border: 1px solid blue;
    }
    background: transparent;
    z-index: 6;
`;

export const ItemDetailsBox = styled.div`
    width: 100%;
    height: 45%;
    bottom: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    // background: transparent;
    // background: blue;
`;

export const ItemsDetailsBackground = styled.div`
    width: 100%;
    height: 450px;
    position: absolute;
    z-index: -1;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 50%;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: center;
`;

export const ItemDetailsCircle = styled.div`
    // margin-top: 30px;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 150px;
    border: 2px solid white;
    position: absolute;
    z-index: 4;
    cursor: pointer;
`;

export const ItemDetailsImage = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 7;
    cursor: pointer;
    position: relative;
`;
        
export const Image = styled.div`
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0 0 20px 20px;
    background: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
        height: auto;
    }
`;

export const ItemDetailsText = styled.div`
    margin-top: 30px;
    width: 80%;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // margin-bottom: 10px;
    padding-bottom: 80px;
    z-index: 10;
`;

export const ItemsDetailsInput = styled.textarea`
    width: auto;
    height: auto;
    margin: 0;
    padding: 5px 1%;
    font-family: 'Roboto';
    background: transparent;
    // background: pink;
    z-index: 10;
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
    width: 40px;
    height: 40px;
    position: absolute;
    border-radius: 50px;
    background: white;
    bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
        width: 20px;
    }
    z-index: 5;
    cursor: pointer;
`;

export const CloseButton = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    border-radius: 50px;
    background: white;
    top: 15px;
    right: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
        width: 20px;
    }
    z-index: 10;
    cursor: pointer;
`;

export const BoxEditWrapper = styled.div`
    width: 96%;
    height: 96%;
    margin: 2%;
    position: absolute;
    padding: 2px;
    &:hover {
        box-shadow: 0px 0px 0px 1px blue inset;
    }
`;