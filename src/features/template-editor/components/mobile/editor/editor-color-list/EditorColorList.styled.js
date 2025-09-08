import styled from "styled-components";

export const ColorListWrapper = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    padding: 10px 0;
    display: grid;
    grid-template-columns: repeat(4, 35px);
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