import styled from "styled-components";

export const QnAContainer = styled.div`
    width: 80%;
    height: auto;
    padding: 25px 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    @media only screen and (max-width: 600px){
        90%;
    }
`;

export const QnATitle = styled.h2`
    width: 100px;
    height: auto;
    font-size: 28px;

`;

export const QnaWrapper = styled.div`
    width: 90%;
    height: auto;
    padding: 20px 0;
    // background-color: blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const QnAItems = styled.div`
    width: 100%;
    height: 50px;
    background-color: black;
    border-radius: 10px;
`;