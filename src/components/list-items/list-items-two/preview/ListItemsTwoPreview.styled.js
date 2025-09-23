import styled from "styled-components";

export const ListItemsWrapper = styled.div`
    width: 85%;
    height: auto;
    z-index: 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 6;
    // max-width: 600px;
    // @media only screen and (min-width: 300px){
    //     width: 400px;
    // }
    @media only screen and (min-width: 400px){
        max-width: 400px;
    }
    @media only screen and (min-width: 600px){
        max-width: 600px;
    }
`;