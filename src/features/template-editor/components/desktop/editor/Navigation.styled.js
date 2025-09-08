import styled from "styled-components";

export const NavigationContainer = styled.div`
    width: 90%;
    padding: 0 5%;
    height: 50px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: white;
    img {
        width: 25px;
        height: auto;
        // margin-top: 40px;
        cursor: pointer;
    }
    img:hover {
        filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%);
    }
    position: absolute;
    bottom: 0;
    @media only screen and (min-width: 600px){
        position: relative;
        width: 40px;
        padding: 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        // background: pink;
        img {
            margin-bottom: 40px;
        }
    }
`;