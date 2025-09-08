import styled from "styled-components";

export const TemplateListWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
`;

export const TemplateListHorizontalScroll = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    overflow-x: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
    @media only screen and (min-width: 600px){
        // width: 100%;
        padding: 0;
    }
    @media only screen and (min-width: 1000px){
        // width: 102%;
    }
`;

export const TemplateContent = styled.div`
    width: auto;
    height: auto;
    padding: 10px 0 10px 5%;
    padding-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    @media only screen and (min-width: 600px){
        padding: 0;
        padding-bottom: 10px;
    }
`;

export const TemplateThumbnail = styled.div`
    min-width: 300px;
    margin-right: 30px;
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
        width: 25%;
    }
`;


export const SlideButtonPrev = styled.div`
    width: 25px;
    height: 25px;
    background: white;
    position: absolute;
    // border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    left: 10px;
    z-index: 3;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
        width: 60%;
        height: auto;
        margin-left: -2px;
    }
    @media only screen and (min-width: 600px){
        right: 0;
        width: 30px;
        height: 30px;
    }
`;


export const SlideButtonNext = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 20px;
    position: absolute;
    // border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    right: 10px;
    z-index: 3;
    background: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
        width: 60%;
        height: auto;
        margin-right: -2px;
    }
    @media only screen and (min-width: 600px){
        // right: 0;
        width: 30px;
        height: 30px;
    }
`;
export const ButtonWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    z-index: 5;
    top: 40%;
`;