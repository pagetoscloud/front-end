import styled from "styled-components";

export const MainCollectionWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 20px;
    @media only screen and (min-width: 600px){
        margin-top: 40px;
        width: 100%;
    }
    @media only screen and (min-width: 900px){
        width: 100%;
    }
`;

export const MainCollectionContent = styled.div`
    padding-top: 40px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
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

export const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;