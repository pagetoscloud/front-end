import styled from "styled-components";

export const EditorTextContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    z-index: 3;
`;
export const TextAlignWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 15px;
`;

export const TextAlignItems = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5%;
    background: #f5f5f5;
    margin-right: 20px;
    cursor: pointer;
    img {
        width: 70%;
        height: auto;
    }
`;