import styled from "styled-components";

export const ProductListItemsWrapper = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    @media only screen and (min-width: 600px){
        width: 240px;
        height: auto;
    }
`;

export const ProductListItems = styled.div`
    width: 90%;
    height: auto;
    padding: 10px 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // margin-top: 20px;
    border-radius: 5px;
    cursor: pointer;
    @media only screen and (min-width: 600px){
        width: 240px;
        height: auto;
    }
`;
export const ProductListItemsDisplay = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    h4 {
        font-size: 14px;
        font-weight: 600;
        margin: 0;
        color: rgba(0, 0, 0, 0.8)
    }
    p {
        font-size: 12px;
        font-weight: 500;
        margin: 0;
    }
`;

export const ProductListItemsDetail = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    img {
        width: 30%;
    }
    p {
        font-size: 12px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.7);
        margin: 0;
        width: 60%;
        text-align: right;
    }
`;

export const ProductListItemsImage = styled.div`
    width: 60px;
    height: 60px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    // border: 1px solid rgba(0, 0, 0, 0.1);
    img {
        width: 90%;
        height: auto;
    }
`;