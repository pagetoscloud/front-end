import styled from "styled-components";

export const ListItemsWrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    // padding-bottom: 20px;
    z-index: 6;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    // @media only screen and (min-width: 400px){
    //     width: 400px;
    // }
    // @media only screen and (min-width: 600px){
    //     width: 300px;
    // }
`;

export const ListItemsContent = styled.div`
    height: auto;
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    // padding-left: 25px;
`;

export const ScrollRightButton = styled.div`
    position: absolute;
    top: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    right: 25px;
    width: 30px;
    height: 30px;
    border-radius: 40px;
    background: white;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    z-index: 10;
    cursor: pointer;
    img{
        width: 60%;
    }
`;

export const ScrollLeftButton = styled.div`
    position: absolute;
    top: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    left: 25px;
    width: 30px;
    height: 30px;
    border-radius: 40px;
    background: white;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    z-index: 10;
    cursor: pointer;
    img{
        width: 60%;
    }
`;
