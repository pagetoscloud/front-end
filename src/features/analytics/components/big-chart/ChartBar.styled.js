import styled from "styled-components";

export const ChartBarWrapper = styled.div`
    height: 100%;
    width: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    z-index: 2;
`;

export const ChartOne = styled.div`
    height: 0%;
    width: 20px;
    border-radius: 20px;
    background: #1FD07D;
    z-index: 2;
    border-top: 2px solid #1FD07D;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &:hover {
        p {
            display: block;
        }
    }
    p {
        font-weight: 600;
        font-size: 12px;
        border-radius: 5px;
        width: 40px;
        text-align: center;
        margin: 0;
        position: absolute;
        top: -30px;
        display: none;
        font-size: 12px;
        color: black;
        z-index: 10;
    }
    @media only screen and (min-width: 900px){
        width: 30px;
    }
`;

export const ChartTwo = styled.div`
    height: 0%;
    width: 20px;
    border-radius: 20px;
    background: #9EE7C5;
    z-index: 2;
    border-top: 2px solid #9EE7C5;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &:hover {
        p {
            display: block;
        }
    }
    p {
        font-weight: 600;
        font-size: 12px;
        border-radius: 5px;
        width: 40px;
        text-align: center;
        margin: 0;
        position: absolute;
        top: -30px;
        display: none;
        font-size: 12px;
        color: black;
        z-index: 10;
    }
    @media only screen and (min-width: 900px){
        width: 30px;
    }
`;