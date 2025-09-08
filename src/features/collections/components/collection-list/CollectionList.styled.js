import styled from "styled-components";

export const CollectionListWrapper = styled.div`
    width: 98%;
    padding: 0 1%;
    height: 450px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    scroll-behavior: smooth;
    // background: pink;
    @media only screen and (min-width: 600px){
        height: 700px;
        // background: blue;
        // padding-right: 20px
    }
`;
export const CollectionListHorizontalScroll = styled.div`
    width: auto;
    height: auto;
    // padding: 10px 10px 10px 30px;
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
    width: 80px;
    margin-right: 20px;
    height: auto;
    img {
        cursor: pointer;
        width: 100%;
        border-radius: 10px;
        border: 1px soldid rgba(0, 0, 0, 0.1);
    }
    p {
        font-size: 14px;
        margin: 10px 0;
        text-align: center;
    }
    @media only screen and (min-width: 600px){
        width: 120px;
        img {
            border-radius: 15px;
        }
        // margin-right: 2%;
        // width: 10%;
    }
`;

export const CollectionThumbnailActive = styled.div`
    width: 100px;
    margin-right: 20px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        cursor: pointer;
        width: 100%;
        border-radius: 15px;
        border: 2px solid #1FD07D;
    }
    p {
        font-size: 14px;
        text-align: center;
        font-weight: 700;
    }
    @media only screen and (min-width: 600px){
        width: 140px;
        img {
            border-radius: 20px;
        }
    }
`;

export const PreviewButton = styled.div`
    width: 70px;
    height: 30px;
    background: black;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    p {
        font-size: 14px;
        color: white;
        font-weight: 600;
    }
`;

export const EditButton = styled.div`
    width: 40px;
    height: 30px;
    background: white;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    p {
        font-size: 14px;
    }
    img {
        width: 20px;
        height: auto;
        // margin-right: 5px;
        border: none;
    }
`;

export const ButtonWrapper = styled.div`
    width: 90px;
    height: auto;
    // background: pink;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const SlideButtonWrapper = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    background: blue;
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

export const TitleWrapper = styled.div`
    width: 99%;
    padding-left: 1%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    // background: pink;
`;