
import styled from "styled-components";

export const CollectionListWrapper = styled.div`
    height: 350px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    overflow-x: scroll;
    // background: pink;
    &::-webkit-scrollbar {
        display: none;
    }
    @media only scree and (min-width: 600px){
        width: 100%;
        margin: 0;
    }
`;

export const CollectionListHorizontalScroll = styled.div`
    width: auto;
    height: auto;
    padding: 10px 5%;
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

export const CollectionThumbnail = styled.div`
    width: 140px;
    margin-right: 30px;
    height: auto;
    cursor: pointer;
    img {
        width: 100%;
        border-radius: 20px;
    }
    p {
        font-size: 14px;
        margin: 10px 0;
        font-weight: 700;
    }
    @media only screen and (min-width: 900px){
        width: 160px;
        // margin-right: 10%;
    }
`;

export const TitleWrapper = styled.div`
    width: 99%;
    padding-left: 1%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    // background: pink;
`;

export const SlideButton = styled.div`
    width: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin-left: 50%;
    img {
        width: 20px;
        height: auto;
        margin-right: 5px;
    }
        
`;