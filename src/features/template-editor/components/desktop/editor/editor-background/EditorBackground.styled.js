import styled from "styled-components";

export const EditorBackgroundContainer = styled.div`
    width: 320px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    // background-color: pink;
    position: relative;
`;

export const AddButton = styled.div`
    width: 15px;
    height: 15px;
    img {
        width: 100%;
        height: auto;
    }
    cursor: pointer;
`;