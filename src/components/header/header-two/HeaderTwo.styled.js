import styled from "styled-components";

export const HeaderWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
`;
export const HeaderTextLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    // margin: 15px 0;
    h1 {
        z-index: 3;
        position: relative;
        margin: 0;
    }
    textarea {
        text-align: center;
        width: 300px;
        field-sizing: content;
        padding: 0 10px;
        height: auto;
        margin: 0;
        overflow: hidden;
        background-color: transparent;
        border: none;
        margin-bottom: 5px;
        line-height: auto;
        color: white;
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

`;