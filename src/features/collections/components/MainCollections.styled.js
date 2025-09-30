import styled from "styled-components";

export const MainCollectionWrapper = styled.div`
    width: 100%;
    height: auto;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    // background: pink;
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

export const DeleteButton = styled.div`
    width: 40%;
    height: 40px;
    margin: 50px 30%;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    &:hover {
        border: 1px solid rgba(255, 0, 0, 0.7);
        color: red;
    }
    cursor: pointer;
    @media only screen (min-width: 600px){
        width: 20%;
        margin: 50px 40%;
    }
`;