import styled from "styled-components";


export const CustomSelectContainer = styled.div`
    min-width: 70px;
    padding: 0 10px;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`;

export const ActiveSelect = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    border-radius: 5px;
    cursor: pointer;
    p {
        font-size: 14px;
        margin-right: 5px;
    }
    img {
        width: 15px;
    }
`;

export const OptionSelect = styled.div`
    width: 100px;
    height: auto;
    padding: 10px 10%;
    background: #666269;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 5px;
    z-index: 2;
    p {
        font-size: 14px;
        margin: 0;
        text-align: left;
        margin-bottom: 5px;
        cursor: pointer;
        color: white;
        font-weight: 500;
    }
`;