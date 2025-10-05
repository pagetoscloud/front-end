import styled from "styled-components";


export const PriceInputWrapper = styled.div`
    width: 100%;
    input {
        border: none;
        width: 98%;
        padding: 5px 1%;
        background: transparent;
        &:focus {
            outline: none;
        }
        &:hover {
            box-shadow:0px 0px 0px 1px blue inset;
        
        }
        &:focus-within {
            box-shadow:0px 0px 0px 1px blue inset;
        }
        field-sizing: content;
    }
    z-index: 5;
`;