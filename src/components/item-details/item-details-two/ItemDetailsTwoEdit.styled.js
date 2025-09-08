import styled from "styled-components";

export const ItemDetailsWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: sticky;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    border-radius: 50px;
    overflow: hidden;
    &:hover {
        border: 1px solid blue;
    }
    background: transparent;
`;

export const ItemDetailsBoxHover = styled.div`
    width: 90%;
    height: 450px;
    padding: 2px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    // background: white;
    // border-radius: 0 10px 10px 0;
    overflow: hidden;
    cursor: pointer;
    &:hover {
        border: 1px solid blue;
    }
    background: transparent;
    z-index: 2;
`;

export const ItemDetailsBox = styled.div`
    width: 90%;
    height: 450px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    background: transparent;
`;

export const ItemsDetailsBackground = styled.div`
    width: 100%;
    height: 450px;
    position: absolute;
    z-index: -1;
`;

export const ImageWrapper = styled.div`
    margin-top: 30px;
    width: 200px;
    height: 200px;
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
    width: 170px;
    height: 170px;
    // overflow: hidden;
    border-radius: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // background: blue;
    img {
        width: 100%;
        height: auto;
        }
        z-index: 10;
        cursor: pointer;
        position: relative;
        `;
        
export const Image = styled.div`
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
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
export const ItemDetailsButton = styled.button`
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
    z-index: 4;
    cursor: pointer;
`;

export const CloseButton = styled.button`
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
    z-index: 4;
    cursor: pointer;
`;

export const BoxEditWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 2px;
    &:hover {
        box-shadow: 0px 0px 0px 1px blue inset;
    }
`;