import styled from "styled-components";

export const ListItemsWrapper = styled.div`
    // width: 100%;
    height: auto;
    z-index: 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    // @media only screen and (min-width: 1000px){
    //     width: 500px;
    // }

    width: 300px;
    height: auto;
    z-index: 6;
    max-width: 600px;
    @media only screen and (min-width: 400px){
        width: 400px;
    }
    @media only screen and (min-width: 600px){
        width: 600px;
    }
`;