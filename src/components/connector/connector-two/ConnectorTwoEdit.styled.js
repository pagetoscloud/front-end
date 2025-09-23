
import styled from "styled-components";

export const ConnectorOneEditContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: sticky;
    bottom: 0;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    background-color: rgba(0, 0, 0, 0.1);
    h2 {
        margin-bottom: 20px;
        color: #333;
    }

    p {
        color: #666;
        text-align: center;
        max-width: 600px;
    }
    z-index: 10;
`;

export const ConnectorOneEditBox = styled.div`
    width: 100%;
    height: 95%;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: transparent;
    border-radius: 20px;
`;

export const ConnectorOneBackground = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    z-index: -1;
    position: absolute;
`;

export const ConnectorOneBackgroundHover = styled.div`
    width: 98%;
    height: 95%;
    // margin: 1% 0;
    // padding: 5px;
    background: transparent;
    z-index: 1;
    position: absolute;
    cursor: pointer;
    &:hover {
        border: 1px solid blue;
    }
    transition: all 0.3s ease-in-out;
`;

export const ConnectorInput = styled.textarea`
    // width: 98%;
    width: auto;
    max-width: 80%;
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

export const ConnectorContentWrapper = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 10px;
`;

export const ConnectorButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    min-height: 300px;
    gap: 10px;
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
}`;
export const ConnectorButton = styled.div`
    width: 250px;
    height: 40px;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: bold;
    z-index: 5;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    input {
        width: auto;
        height: auto;
        background: transparent;
        color: white;
        border: none;
        font-size: 16px;
        font-weight: bold;
        cursor: text;
        text-align: center;
        z-index: 11;
        field-sizing: content;
    }
    input:focus {
        outline: none;
    }
`;

export const ActiveBoxButton = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 5px;
    z-index: 10;
    &:hover {
        box-shadow: 0px 0px 0px 1px blue inset;
    }
    &:focus {
        box-shadow: 0px 0px 0px 1px blue inset;
    }
`;
export const DeleteButton = styled.div`
    width: auto;
    height: auto;
    position: absolute;
    left: -25px;
    img {
        width: 15px;
    }
`;
export const AddButton = styled.button`
    width: 250px;
    height: 40px;
    background-color: transparent;
    color: black;;
    border-radius: 50px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    font-size: 16px;
    // margin-top: 20px;
    font-weight: bold;
    z-index: 5;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &:hover {
        border: 2px solid rgba(162, 0, 255, 0.6);
        color: rgba(162, 0, 255, 0.6);
    }
    @media only screen and (max-width: 350px) {
        width: 200px;
    }
`;