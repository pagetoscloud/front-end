import styled from "styled-components";

export const EditorColorContainer = styled.div`
    min-width: 300px;
    height: auto;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    padding: 20px 25px;
    background: white;
    // position: absolute;
    // right: -250px;
    // box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
`;

export const EditorColorPickerWrapper = styled.div`
    width: 100%;
`;

export const ColorPickerHeader = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    // background: pink;
    margin-bottom: 20px;
    img {
        width: 20px;
        height: auto;
        cursor: pointer;
    }
`;
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
    border-radius: 25px;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    p {
        width: 20px;
        height: 20px;
        display: none;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: white;
        position: absolute;
        top: -20px;
        right: -10px;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.1);
        z-index: 3;
    }
    &:hover {
        // box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.9) inset;
        p {
            display: flex;
        }
    }
    // img {
    //     width: 120%;    
    //     height: auto;
    // }
`;

export const ColorListItemsDisplay = styled.div`
    width: 35px;
    height: 35px;
    background-color: transparent;
    border-radius: 25px;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow:0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
    &:hover {
        box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.9) inset;
    }
`;

export const ColorListItemsRemoveButton = styled.div`
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 50%;
    display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    img {
        width: 100%;
        height: auto;
        transform: rotate(45deg);
        margin-top: 5px;
    }
`;  

export const ColorListGradientWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    // margin-bottom: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const SelectColorType = styled.select`
    width: 100px;
    padding: 0 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    height: 30px;
    cursor: pointer;
    background-color: transparent;
    select:focus {
        outline: none;
    }
    &:focus-within {
        border: 1px solid blue;   
    }   
`;

export const GradientTypeWrapper = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, 30%);
    column-gap: 5%;
    row-gap: 10px;
    padding-top: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const GradientType = styled.div`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
`;