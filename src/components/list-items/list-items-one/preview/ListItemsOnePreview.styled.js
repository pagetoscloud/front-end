import styled from "styled-components";

export const ListItemsWrapper = styled.div`
    width: 85%;
    min-width: 200px;
    height: auto;
    z-index: 6;
    // max-width: 600px;
    display: grid;
    grid-template-columns: 100%;
    // column-gap: 8%;
    row-gap: 30px;
    @media only screen and (min-width: 300px){
        display: grid;
        // min-width: 280px;
        width: 85%;
        grid-template-columns: 45% 45%;
        column-gap: 10%;
    }
    @media only screen and (min-width: 400px){
        display: grid;
        max-width: 400px;
        width: 85%;
        grid-template-columns: 45% 45%;
        column-gap: 10%;
    }
    @media only screen and (min-width: 600px){
        width: 85%;
        max-width: 600px;
        display: grid;
        grid-template-columns: 30% 30% 30%;
        column-gap: 5%;
    }
`;