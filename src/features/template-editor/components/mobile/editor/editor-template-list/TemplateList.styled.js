import styled from "styled-components";

export const TemplateListContainer = styled.div`
    width: 100%;
    height: 400px;
    // padding-top: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    left: 0;
    // z-index: 5;
`;

export const NavigationWrapper = styled.div`
    position: absolute;
    left: 0;
    width: 40px;
    height: 100%;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: white;
    z-index: 5;
    img {
        width: 20px;
        height: auto;
        margin-top: 20px;
        cursor: pointer;
    }
`;

export const TemplateTypeMenu = styled.div`
    width: 90%;
    padding: 0 5% 5px 5%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TemplateTypeButtonWrapper = styled.div`
    width: 220px;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    p {
        font-size: 12px;
        font-weight: 600;
        line-height: 0;
        margin: 0;
        padding: 5px 10px 10px 0;

    }
`;

export const TemplateItemsWrapper = styled.div`
    width: 90%;
    height: auto;
    padding: 10px 5%;
    overflow-y: scroll;
    cursor: pointer;
    &::-webkit-scrollbar {
        display: none;
    }
    display: grid;
    grid-template-columns: 100%;
    // column-gap: 10%;
`;

export const TemplateItems = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    z-index: 2;
    h4 {
        font-size: 14px;
        font-weight: 700;
        line-height: 1.5;
        margin-top: 10px;
        margin-bottom: 0;
    }
    p {
        font-size: 12px;
        font-weight: 500;
        margin: 0;
    }
    img {
        width: 100%;
        border-radius: 5px;
    }
`;