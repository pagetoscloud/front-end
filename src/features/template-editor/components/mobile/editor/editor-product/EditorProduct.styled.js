
import styled from "styled-components";

export const EditorProductContainer = styled.div`
    width: 100%;
    height: 400px;
    // padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media only screen and (min-width: 600px){
        justify-content: flex-start;
    }
`;

export const EditorProductHeader = styled.div`
    width: 90%;
    height: auto;
    // background: pink;
    padding: 0 5% 10px 5%;
    // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    // @media only screen and (min-width: 600px){
    //     justify-content: flex-start;
    //     padding: 0 40px;
    //     width: 240px;
    //     height: 60px;
    // }
`;

export const ProductCategory = styled.div`
    width: 100px;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    select {
        border: none;
        width: 90%;
        height: 85%;
        &:focus {
            outline: none;
        }
        cursor: pointer;
    }
`;

export const SuggestionText = styled.p`
    width: 80%;
    margin: 0 10%;
    padding: 20px 0;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
`;