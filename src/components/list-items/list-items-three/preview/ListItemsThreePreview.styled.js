import styled from "styled-components";

export const ListItemsWrapper = styled.div`
    width: 100%;
    height: auto;
    z-index: 6;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    white-space: nowrap;
    overflow-x: auto;
    // overflow-y: hidden;
    &::-webkit-scrollbar {
        display: none;
    }
    box-sizing: border-box;
    // @media only screen and (min-width: 300px){
    //     width: 92.5%;
    //     margin-left: 7.5%;
    //     background: pink;
    //     // width: 92.5%;
    //     // // max-width: 300px;
    //     // // padding-right: 15%;
    // }
    @media only screen and (min-width: 400px){
        padding: 0;
        margin: 0;
        max-width: 400px;
        width: 85%;
    }
    @media only screen and (min-width: 600px){
        max-width: 600px;
        width: 85%;
        // margin-left: 15%;
    }
`;

export const ListItemsContent = styled.div`
    height: auto;
    width: auto;
    margin: 0 7.5%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    @media only screen and (min-width: 400px){
        margin: 0;
    }
`;