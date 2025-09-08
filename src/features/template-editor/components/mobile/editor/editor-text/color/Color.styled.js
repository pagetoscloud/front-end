
import styled from "styled-components";

export const ColorWrapper = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const ColorContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-y: scroll;
`;

export const ColorHeader = styled.div`
    width: 90%;
    height: 80px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ColorListWrapper = styled.div`
    // background: pink;
    width: 90%;
    margin: 0 5%;
    height: auto;
    margin-bottom: 10px;
    padding: 10px 0;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(6, 10%);
    column-gap: 20px;
`;

export const ColorListItems = styled.div`
    width: 35px;
    height: 35px;
    background-color: transparent;
    overflow: hidden;
    border-radius: 25px;
    // margin: 10px 10px 0 0;
    margin-top: 10px;
    cursor: pointer;
    box-shadow:0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 120%;
        height: auto;
    }
`;

export const ColorListHeader = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
        width: 20px;
        height: auto;
        cursor: pointer;
    }
`;