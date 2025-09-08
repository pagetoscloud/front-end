import styled from "styled-components";

export const EditBoardContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 10;
    position: absolute;
    // overflow: scroll;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    bottom: 50px;
    @media only screen and (min-width: 600px){
        position: relative;
        width: 320px;
        bottom: 0;
    }
`;