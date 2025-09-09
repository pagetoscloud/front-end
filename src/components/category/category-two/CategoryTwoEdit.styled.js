import styled from "styled-components";


export const CategoryText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 85%;
    margin: 20px 0;
    position: relative;
    textarea {
        text-align: left;
        width: auto;
        field-sizing: content;
        padding: 0 10px;
        height: auto;
        margin: 0;
        overflow: hidden;
        background-color: transparent;
        border: none;
        margin-bottom: 5px;
        line-height: auto;
        z-index: 3;
        position: relative;
        cursor: text;
        resize: none;
        &:hover {
            // border: 1px solid blue;
             box-shadow:0px 0px 0px 1px blue inset;

        }
        &::-webkit-scrollbar {
            display: none;
        }
    }

    textarea:focus {
        outline: none;
    }
    textarea:focus-within {
        // border: 1px solid blue;
         box-shadow:0px 0px 0px 1px blue inset;
    }
    @media only screen and (min-width: 400px){
        width: 85%;
        max-width: 400px;
    }
    @media only screen and (min-width: 600px){
        width: 85%;
        max-width: 600px;
    }
`;
