
import styled from "styled-components";

export const BorderWrapper = styled.div`
    width: 100%;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ColorListWrapper = styled.div`
    height: auto;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
    gap: 10px;
    justify-content: space-between;
`;

export const ColorItems = styled.div`
    width: 35px;
    height: 35px;
    background-color: transparent;
    overflow: hidden;
    border-radius: 25px;
    margin-top: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
`;