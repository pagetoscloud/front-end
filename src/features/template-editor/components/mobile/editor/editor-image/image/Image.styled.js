
import styled from "styled-components";

export const ImageWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const SelectImageContent = styled.div`
    width: 90%;
    padding: 0 5%;
    height: 200px;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    padding: 10px 0;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    column-gap: 3.33%;
    img {
        width: 100%;
        padding: 2%;
        cursor: pointer;
        margin-bottom: 20px;
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
        // font-weight: 700;
        padding: 10px;
        cursor: pointer;
        margin: 0;
    }
`;

export const UploadImageButton = styled.button`
    width: 100%;
    padding: 10px 0;
    height: 40px;
    grid-column: 1 / span 3; 
    // margin: 25px;
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