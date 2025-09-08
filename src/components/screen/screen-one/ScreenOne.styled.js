import styled from "styled-components";

export const Screen = styled.div`
    width: 100%;
    height: auto;
    overflow: scroll;
    // position: relative;
    &::-webkit-scrollbar{
        display: none;
    }
`;

export const Scroll = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: transparent;
`;