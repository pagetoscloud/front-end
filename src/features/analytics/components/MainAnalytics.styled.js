import styled from "styled-components";

export const MainAnalyticsWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow: scroll;
    padding-bottom: 70px;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const MainAnalyticsContent = styled.div`
    padding-top: 20px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media only screen and (min-width: 600px){
        padding-top: 40px;
    }
`;

export const MainChartWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    row-gap: 20px;
    @media only screen and (min-width: 600px){
        grid-template-columns: 90%;
    }
    @media only screen and (min-width: 1200px){
        grid-template-columns: 47.5% 47.5%;
        column-gap: 4.8%;
    }
`;