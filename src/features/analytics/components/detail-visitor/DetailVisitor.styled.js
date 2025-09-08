import styled from "styled-components";

export const DetailVisitorWrapper = styled.div`
    width: 90%;
    height: auto;
    margin: 0 5%;
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    @media only screen and (min-width: 600px){
        height: auto;
        width: 90%;
        margin: 0;
        margin-top: 20px;
    }
    @media only screen and (min-width: 1200px){
        width: 47.5%;
    }
`;

export const DetailVisitorHeader = styled.div`
    width: 90%;
    height: auto;
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    // background: pink;
    p {
        font-size: 16px;
        font-weight: 600;
    }
`;

export const ScrollData = styled.div`
    width: 100%;
    height: 300px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 8px;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
    }
    &::-webkit-scrollbar-thumb{
        background: #1FD07D;
        width: 2px;
        height: 2px;
        border-radius: 5px;
    }
`;

export const SelectDate = styled.div`
    // padding: 0 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 100px;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    select {
        cursor: pointer;
        border: none;
        width: 95%;
        height: 90%;
        background: none;
    }
    select:focus-within {
        outline: none;
    }
`;

export const DataWrapper = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const DashedLine = styled.div`
    width: 50%;
    height: 1px;
    border-top: 1px dashed rgba(0, 0 ,0 ,0.2);
    @media only screen and (min-width: 900px){
        width: 70%;
    }
`;

export const DateData = styled.p`
    font-size: 14px;
    text-align: left;
    margin: 0;
`;

export const VisitorData = styled.p`
    font-size: 14px;
    font-weight: 600;
    margin: 0;

`;