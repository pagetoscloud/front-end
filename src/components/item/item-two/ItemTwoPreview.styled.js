import styled from "styled-components";

export const ItemsClick = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    margin-left: -10px;
    background-color: transparent;
    position: absolute;
    z-index: 1;
    cursor: pointer;
`;

export const ItemsWrapper = styled.div`
    width: 100%;
    padding: 10px 0;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    positon: relative;
    cursor: pointer;
    z-index: 1;
    margin-bottom: 10px;
`;

export const ItemsImage = styled.div`
    width: 70px;
    height: 70px;
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
export const ItemsText = styled.div`
    width: 55%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    // h4 {
    //     font-size: 14px;
    //     text-align: center;
    //     margin: 0;
    //     z-index: 5;
    // }
    // h5 {
    //     font-size: 12px;
    //     margin: 0;
    //     z-index: 5;
    // }
    // p {
    //     font-size: 12px;
    //     color: rgba(0, 0, 0, 0.6);
    //     margin: 5px;
    //     z-index: 5;
    // }
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
    padding: 2px 1%;
    font-family: 'Roboto';
    background: transparent;
    z-index: 4;
    border: none;
    text-align: left;
    field-sizing: content;
    &:focus {
        outline: none;
    }
    &:focus-within {
        box-shadow:0px 0px 0px 1px blue inset;
    }
    resize: none;
`;

export const ShowButton = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 30px;
    background: #EDC700;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
        width: 15px;
        height: auto;
    }
`;


export const ItemsTitle = styled.h4`
    width: 98%;
    height: auto;
    margin: 0;
    // padding: 5px 1%;
    font-family: 'Roboto';
    background: transparent;
    z-index: 4;
    // text-align: center;
`;

export const ItemsDescription = styled.p`
    width: 98%;
    height: auto;
    margin: 5px 0;
    // padding: 5px 1%;
    font-family: 'Roboto';
    background: transparent;
    z-index: 4;
    // text-align: center;
`;

export const ItemsPrice = styled.h5`
    width: 98%;
    height: auto;
    margin: 0;
    // padding: 5px 1%;
    font-family: 'Roboto';
    background: transparent;
    z-index: 4;
`;