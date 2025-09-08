import styled from "styled-components";

export const ListItemsWrapper = styled.div`
    width: 100%;
    height: auto;
    z-index: 6;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    // @media only screen and (min-width: 300px){
    //     // width: 300px;
    //     // padding: 0;
    // }
    // @media only screen and (min-width: 400px){
    //     width: 400px;
    // }
    // @media only screen and (min-width: 600px){
    //     padding: 0;
    //     width: 600px;
    // }
`;

export const ListItemsContent = styled.div`
    height: auto;
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
`;