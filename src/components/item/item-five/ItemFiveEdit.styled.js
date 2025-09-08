import styled from "styled-components";

export const ItemsClick = styled.div`
    width: 100%;
    height: 100%;
    // padding: 10px 0;
    // margin-top: -10px;
    background-color: transparent;
    position: absolute;
    z-index: 1;
    cursor: pointer;
    &:hover {
        box-shadow:0px 0px 0px 1px blue inset;
    }
`;

export const ItemsWrapper = styled.div`
    width: 200px;
    overflow: hidden;
    min-height: 150px;
    padding-bottom: 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    positon: relative;
    cursor: pointer;
    z-index: 1;
    margin-right: 10px;
`;

export const ItemsImageEdit = styled.div`
    width: 160px;
    height: 160px;
    // margin: 5px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 5;
    img {
        width: 100%;
        // height: 100%;
        z-index: 4;
    }
`;

export const ItemsImageClick = styled.div`
    width: auto;
    height: auto;
    padding: 1px;
    z-index: 6;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    &:hover {
        box-shadow: 0px 0px 0px 1px blue;
    }
`;
export const ItemsImage = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 5;
    margin: 5px 0;
    img {
        width: 100%;
        z-index: 4;
    }
`;

export const AddButton = styled.div`
    background: black;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 10;
    img {
        width: 60%;
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
    background: white;
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
    z-index: 5;
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

export const DeleteItemsButton = styled.button`
    width: 40px;
    height: 30px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    background: white;
    position: absolute;
    top: -40px;
    cursor: pointer;
    border-radius: 5px;
`;