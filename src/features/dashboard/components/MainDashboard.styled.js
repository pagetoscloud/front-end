import styled from "styled-components";

export const MainDashboardWrapper = styled.div`
    width: 100%;
    height: auto;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media only screen and (min-width: 1000px){
        width: 100%;
        margin: 0;
    }
`;

export const MainDasboardContent = styled.div`
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

export const TitlePage = styled.h1`
    width: auto;
    height: auto;
    font-size: 18px;
    margin: 10px 0 20px 0;
`;

export const BannerWrapper = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px;
    background: linear-gradient(90deg, rgba(162, 241, 204, 1), rgba(31, 208, 125, 0.65));
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