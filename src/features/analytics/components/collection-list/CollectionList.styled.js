import styled, { keyframes } from "styled-components";

export const CollectionListWrapper = styled.div`
    width: 100%;
    padding-bottom: 20px;
    height: 350px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-x: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
    @media only scree and (min-width: 600px){
        margin: 0;
    }
`;
export const CollectionListHorizontalScroll = styled.div`
    width: auto;
    height: 100%;
    padding: 0 5%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    @media only screen and (min-width: 600px){
        padding: 0;
    }
`;

export const CollectionThumbnail = styled.div`
    transition: width 2s;
    delay: 2s;
    width: 120px;
    margin-right: 20px;
    height: auto;
    cursor: pointer;
    transition: width 2s;
    img {
        width: 100%;
        border-radius: 15px;
        border: 1px soldid rgba(0, 0, 0, 0.1);
    }
    p {
        font-size: 14px;
        margin: 10px 0;
    }
    @media only screen and (min-width: 900px){
        // width: 120px;
        // margin-right: 20px;
    }
`;

export const GrowAnimation = keyframes`
    0% {width: 120px}
    30% {width: 125px}
    60% {width: 130px}
    90% {width: 135px}
    100% {width: 140px}
`;

export const CollectionThumbnailActive = styled.div`
    transition: width 2s;
    width: 140px;
    margin-right: 20px;
    height: auto;
    cursor: pointer;
    img {
        width: 100%;
        border-radius: 20px;
        border: 2px solid #1FD07D;
    }
    p {
        font-size: 14px;
        margin: 10px 0;
        font-weight: 700;
    }
    @media only screen and (min-width: 900px){
        width: 150px;
    }
`;