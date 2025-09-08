
import styled from "styled-components";

export const EditorNewProductContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const EditorNewProductHeader = styled.div`
    width: 240px;
    padding: 20px 40px;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const InputNewProductWrapper = styled.div`
    width: 240px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const InputImage = styled.div`
    width: 240px;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 20px 0 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
        width: 50%;
        display: flex;
    }
`;

export const InputImageButton = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px;
    img {
        width: 20px;
        height: auto;
    }
`;