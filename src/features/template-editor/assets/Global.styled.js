
import styled from "styled-components";

export const TitleHeader = styled.div`
    width: 90%;
    padding: 0 5%;
    height: 60px;
    // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h3 {
        font-size: 16px;
        font-weight: 400;
        // letter-spacing: 1px;
        font-family: 'Roboto';
    }
    img {
        width: 20px;
        height: auto;
        cursor: pointer;
    }
    @media only screen and (min-width: 600px){
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        width: 240px;
        padding: 0 40px;
    }
`;

export const EditorContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const InputEditorLarge = styled.div`
    width: 240px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 10px 0;
    input {
        cursor: pointer;
        border: none;
        background-color: transparent;
        width: 90%;
        height: 90%;
    }
    input:focus {
        outline: none;
    }
    &:focus-within {
        border: 1px solid #82F08B;   
    }
`;

export const InputEditorLargeMobile = styled.div`
    width: 100%;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 10px 0;
    input {
        cursor: pointer;
        border: none;
        background-color: transparent;
        width: 90%;
        height: 90%;
    }
    input:focus {
        outline: none;
    }
    &:focus-within {
        border: 1px solid #82F08B;   
    }
`;

export const SelectEditorLarge = styled.div`
    width: 100%;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 10px 0;
    select {
        cursor: pointer;
        border: none;
        background-color: transparent;
        width: 90%;
        height: 90%;
    }
    select:focus {
        outline: none;
    }
    &:focus-within {
        border: 1px solid blue;   
    }
    @media only screen and (min-width: 600px){
        width: 240px;
    }
`;


export const SelectEditorLargeMobile = styled.div`
    width: 100%;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 10px 0;
    select {
        cursor: pointer;
        border: none;
        background-color: transparent;
        width: 90%;
        height: 90%;
    }
    select:focus {
        outline: none;
    }
    &:focus-within {
        border: 1px solid blue;   
    }
`;

export const SelectEditorSmallMobile = styled.div`
    width: 100%;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    select {
        cursor: pointer;
        border: none;
        background-color: transparent;
        width: 90%;
        height: 90%;
    }
    select:focus {
        outline: none;
    }
    &:focus-within {
        border: 1px solid pink;   
    }
`;

export const SelectEditorSmall = styled.div`
    width: 100px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    select {
        cursor: pointer;
        border: none;
        background-color: transparent;
        width: 90%;
        height: 90%;
    }
    select:focus {
        outline: none;
    }
    &:focus-within {
        border: 1px solid pink;   
    }
`;

export const InputRangeEditor = styled.div`
    width: 100%;
    height: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    input {
        // width: 250px;
        // height: 5px;
        // accent-color: #4C4C4C;
        // border: none;
        // margin: 0;
        // cursor: pointer;
        -webkit-appearance: none;
        width: 100%;
        height: 5px;
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .5s;
        transition: opacity .5s;
        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 15px;
            height: 15px;
            border-radius: 15px;
            background: #82F08B;
            cursor: pointer;
        }
        &::-moz-range-thumb {
            width: 25px;
            height: 25px;
            background: #82F08B;
            cursor: pointer;
        }
    }
`;
export const TextAreaEditor = styled.div`
    width: 100%;
    height: 100px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    textarea {
        resize: none;
        width: 90%;
        height: 90%;
        border: none;
    }
    textarea:focus {
        outline: none;
    }
`;

export const LabelText = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.7);
`;

export const InputEditorWrapper = styled.div`
    width: 90%;
    padding: 20px 5%;
    height: auto;
    // background: pink;
    // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    // background-color: pink;
    @media only screen and (min-width: 600px){
        width: 240px;
        padding: 20px 40px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
`;

export const HorizontalWrapper = styled.div`
    width: 100%;
    // padding: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    p {
        margin: 0;
        font-size: 14px;
        text-align: right;
    }
`;

export const VerticalWrapper = styled.div`
    width: 47.5%;
    height: auto;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media only screen and (min-width: 600px){
        width: auto;
    }
`;

export const ColorDisplayWrapper = styled.div`
    width: 120px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 10px;
`;

export const ColorDisplay = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 25px;
    border: 1px solid rgba(0, 0, 0, 0.1); 
    cursor: pointer;
`;

export const ColorInputHex = styled.div`
    width: 60px;
    height: 20px;
    &:focus-within {
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
    input {
        border: none;
        width: 90%;
        height: 80%;
        background-color: transparent;
    }
    input:focus {
        outline: none;
    }
`;

export const ColorOpacity = styled.div`
    width: 80px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 10px;
    &:focus-within {
        border: 1px solid green;
    }
    input {
        width: 70%;
        padding: 0 10%;
        height: 90%;
        border: none;
        text-align: center;
    }
    input:focus {
        outline: none;
    }
`;

export const TextButtonBold = styled.p`
    font-size: 14px;
    font-weight: 800;
    line-height: 1;
    margin: 0;
    text-align: center;
    cursor: pointer;
`;

export const EditorColorContainer = styled.div`
    width: 200px;
    height: auto;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    padding: 20px 25px;
    position: absolute;
    background: white;
    left: 360px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    position: fixed;
`;