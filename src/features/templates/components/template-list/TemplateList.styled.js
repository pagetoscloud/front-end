import styled from "styled-components";

export const TemplateListWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    @media only screen and (min-width: 600px){
        overflow-x: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
        width: 100%;
        padding: 0;
    }
    @media only screen and (min-width: 900px){
        width: 100%;
    }
`;

export const TemplateListHorizontalScroll = styled.div`
    width: 90%;
    margin: 0 5%;
    display: grid;
    grid-template-columns: 100%;
    height: auto;
    padding-bottom: 50px;
    row-gap: 20px;
    @media only screen and (min-width: 600px){
        width: 100%;
        margin: 0;
        grid-template-columns: 45% 45%;
        column-gap: 10%;
    }
    @media only screen and (min-width: 900px){
        width: 100%;
        margin: 0;
        padding-bottom: 10px;
        display: grid;
        grid-template-columns: 22% 22% 22% 22%;
        column-gap: 4%;
    }
`;

export const TemplateThumbnail = styled.div`
    width: 100%;
    min-width: 200px;
    // margin-right: 2%;
    height: auto;
    cursor: pointer;
    img {
        width: 100%;
        border-radius: 10px;
    }
    p {
        font-size: 14px;
        margin: 10px 0;
    }
    z-index: 2;
    @media only screen and (min-width: 600px){
        // width: 50%;

    }
    @media only screen and (min-width: 900px){
        // min-width: 200px;
        width: 100%;
    }
`;
