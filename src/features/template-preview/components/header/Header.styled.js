import styled from "styled-components";

export const HeaderWrapper = styled.div`
    width: 90%;
    padding: 0 5%;
    height: 70px;
    background: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: white;
    @media only screen and (min-width: 900px){
        width: 95%;
        padding: 0 2.5%;
    }
`;

export const LeftSideHeader = styled.div`
    width: 300px;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    // background: pink;
`;

export const SolidButton = styled.div`
    width: 80px;
    height: 40px;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: black;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    p {
        color: white;
        font-size: 14px;
        font-weight: 600;
        font-family: "Roboto", serif;
    }
    @media only screen and (min-width: 600px){
        display: flex;
    }
`;

export const HollowButton = styled.div`
    width: 80px;
    height: 40px;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    p {
        color: black;
        font-size: 14px;
        font-weight: 600;
        font-family: "Roboto", serif;
    }
    @media only screen and (min-width: 600px){
        display: flex;
    }
`;

export const BackButton = styled.div`
    width: 80px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    p {
        color: black;
        font-size: 14px;
        font-weight: 600;
        font-family: "Roboto", serif;
    }
`;

export const VerticalLine = styled.div`
    display: none;
    height: 40px;
    width: 1px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    @media only screen and (min-width: 600px){
        display: block;
    }
`;

export const RightSideHeader = styled.div`
    width: 200px;
    height: auto;
`;

export const ScreenSizeButton = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
        height: auto;
        cursor: pointer;
    }
`;