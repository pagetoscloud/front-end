import styled from "styled-components";

export const DetailContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 100;
    background: white;
`;

export const ExitButton = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50px;
    top: 50px;
    cursor: pointer;
`;

export const TextContent = styled.div`
    width: 80%;
    max-width: 600px;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    p {
        font-size: 18px;
        text-align: center;
        line-height: 2;
    }
    font-family: Lato;
`;