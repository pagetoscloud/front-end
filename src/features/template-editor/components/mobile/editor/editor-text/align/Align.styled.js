
import styled from "styled-components";

export const AlignWrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // background: pink;
`;

export const AlignContent = styled.div`
    width: 200px;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    // background: blue;
`;

export const AlignItems = styled.div`
    width: 30px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        width: 25px;
    }
    p {
        font-size: 12px;
        font-weight: 600;
        margin: 4px;
    }

`;