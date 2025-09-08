import styled from "styled-components";

export const TemplateListContainer = styled.div`
    // width: 100%;
    // height: 100%;
    // background-color: white;
    // display: none;
    // flex-direction: column;
    // align-items: center;
    // justify-content: flex-start;
    // position: absolute;
    // left: 0;
    // z-index: 5;
    // @media only screen and (min-width: 600px){
    //     display: flex;
    //     width: 320px;
    // }
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    z-index: 3;
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
    @media only screen and (min-width: 600px){
        display: flex;
        width: 40px;
        img {
            margin-top: 20px;
        }
    }
`;

export const TemplateTypeMenu = styled.div`
    width: 90%;
    padding: 0 5%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media only screen and (min-width: 600px){
        width: 240px;
        height: 40px;
    }
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
        margin-right: 10px;
    }
`;

export const TemplateItemsWrapper = styled.div`
    width: 90%;
    padding: 10px 5%;
    overflow: scroll;
    cursor: pointer;
    &::-webkit-scrollbar {
        display: none;
    }
    display: grid;
    grid-template-columns: 45% 45%;
    column-gap: 10%;
    @media only screen and (min-width: 600px){
        width: 240px;
        padding: 10px 2px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        // background: pink;
    }
    // -webkit-tap-highlight-color: transparent !important;
`;

export const TemplateItems = styled.div`
    width: 100%;
    height: auto;
    // background-color: pink;
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
    @media only screen and (min-width: 600px){
        width: 240px;
        height: auto;
    }
`;