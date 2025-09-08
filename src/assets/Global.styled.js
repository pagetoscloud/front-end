import styled from "styled-components";

export const TitlePageH1 = styled.h1`
    width: auto;
    height: auto;
    font-size: 18px;
    margin: 10px 0 20px 0;
`;

export const TitlePageH2 = styled.h2`
    width: auto;
    height: auto;
    font-size: 16px;
    margin: 10px 0 20px 5%;
    font-family: 'Roboto';
    @media only screen and (min-width: 600px){
        margin: 10px 0 20px 0;
    }
`;

export const PersonalAreaContent = styled.div`
    display: flex;
    padding: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    @media only screen and (min-width: 600px){
        // padding: 0 30px;
    }
`;