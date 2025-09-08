

import styled from "styled-components";

export const QnAItemsWrapper = styled.div`
    width: 90%;
    height: auto;
    padding: 20px 5%;
    background-color: #F3F3F3;
    cursor: pointer;
    border-radius: 10px;
    p {
        width: 90%;
        font-size: 14px;
        margin: 0;
        margin-top: 10px;
        line-height: 1.5;
    }
    margin-bottom: 40px;
    @media only screen and (max-width: 600px){
        width: 100%;
    }
`;

export const QnAItemsTitle = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    h6 {
        width: 90%;
        font-size: 16px;
        margin: 0;
        line-height: 1.5;
    }
    img {
        width: 20px;
    }
`;