
import styled from "styled-components";

export const EditorImageContainter = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;


export const SelectImageWrapper = styled.div`
    width: 100%;
    height: 300px;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    margin: 10px 0;
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    img {
        width: 100px;
        padding: 2%;
        cursor: pointer;
        margin-bottom: 20px;
    }
`;

export const UploadImageButton = styled.button`
    width: 90%;
    padding: 10px 0;
    margin: 25px;
    border-radius: 5px;
    cursor: pointer;
    background: white;
    border: 1px solid black;
    font-size: 14px;
    font-weight: 800;
    &:hover {
        background: rgba(0, 0, 0, 0.8);
        color: white;
    }
`;

export const SelectTypeImageButton = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    p {
        font-size: 14px;
        padding: 0 10px;
        margin: 0;
        cursor: pointer;
    }
`;
export const FilterImageScrollbar = styled.div`
    width: 100%;
    height: 100px;
    overflow-x: scroll;
`;
export const FilterImageWrapper = styled.div`
    width: 350px;
    height: auto;
    padding: 10px 3px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const FilterImageItems = styled.div`
    width: 60px;
    height: 60px;
    margin-right: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
        width: 90%;
        height: auto;
    }
`;

export const FilterImageItemsActive = styled.div`
    width: 60px;
    height: auto;
    margin-right: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 0px 2px blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        height: auto;
    }
`;