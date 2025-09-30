import styled from "styled-components";
export const ItemsWrapper = styled.div`
    width: 100%;
    // width: 130px;
    min-height: 150px;
    padding-bottom: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    positon: relative;
    cursor: pointer;
    z-index: 1;
    @media only screen and (min-width: 600px){
        width: 100%;
        height: auto;
        padding-bottom: 20px;
    }
`;

export const ItemsImage = styled.div`
    width: 120px;
    height: 120px;
    margin: 5px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 5;
    // margin: 5px 0;
    img {
        width: 100%;
        z-index: 4;
    }
    @media only screen and (min-width: 400px){
        width: 160px;
        height: 160px;
        margin: 10px;
    }
`;

export const ItemsText = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    h4 {
        font-size: 14px;
        text-align: center;
        margin: 0;
        z-index: 5;
    }
    h5 {
        font-size: 12px;
        margin: 0;
        z-index: 5;
    }
    p {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
        margin: 5px;
        z-index: 5;
    }
`;

export const ItemsBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
`;

