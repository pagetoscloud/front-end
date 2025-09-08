import styled from "styled-components";

export const EditorContainer = styled.div`
    width: 100%;
    height: 50%;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    // z-index: 10;
    // background: blue;
    @media only screen and (min-width: 600px){
        width: 361px;
        left: 0;
        height: 100%;
        justify-content: flex-start;
    }
`;
