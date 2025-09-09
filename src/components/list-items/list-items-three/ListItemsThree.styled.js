
import styled from "styled-components";

export const ListItemsThreeContainer = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ScrollRightButton = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    top: -50px;
    right: 25px;
    width: 30px;
    height: 30px;
    img{
        width: 60%;
    }
    z-index: 10;
    cursor: pointer;
`;

export const ScrollLeftButton = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    top: -50px;
    right: 50px;
    width: 30px;
    height: 30px;
    img{
        width: 60%;
    }
    z-index: 10;
    cursor: pointer;
`;