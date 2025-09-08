import styled from "styled-components";

export const ListItemsWrapper = styled.div`
    min-width: 300px;
    height: auto;
    z-index: 6;
    // max-width: 600px;
    display: grid;
    grid-template-columns: 140px 140px;
    column-gap: 20px;
    row-gap: 30px;
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