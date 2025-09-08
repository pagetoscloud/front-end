import styled from "styled-components";

export const MainTemplateWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media only screen and (min-width: 1000px){
        width: 100%;
        margin: 0;
    }
`;

export const MainTemplateContent = styled.div`
    padding-top: 20px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media only screen and (min-width: 600px){
        padding-top: 40px;
    }
`;


export const HorizontalListScroll = styled.div`
    width: 102%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const TemplateThumbnail = styled.div`
    width: 24%;
    margin-right: 2%;
    height: auto;
    img {
        width: 100%;
        border-radius: 10px;
    }
    p {
        font-size: 14px;
        margin: 10px 0;
    }

`;