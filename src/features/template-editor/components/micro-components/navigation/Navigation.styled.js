import styled from "styled-components";

export const NavigationContainer = styled.div`
    width: 90%;
    padding: 0 5%;
    height: 70px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: white;
    z-index: 4;
    // img {
    //     width: 25px;
    //     height: auto;
    //     cursor: pointer;
    // }
    position: absolute;
    bottom: 0;
`;
export const ScrollWrapper = styled.div`
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;
    
export const ScrollContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const MenuNav = styled.div`
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        font-size: 12px;
        margin: 0;
        margin-top: 5px;
    }
    img {
        width: 25px;
        height: auto;
        cursor: pointer;
    }

`;

export const CloseButton = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 30px;
    background: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    img {
        width: 20px;
        height: auto;
    }
    position: absolute;
    top: -50px;
`;

export const ScrollButtonRight = styled.div`
    width: 15px;
    height: 15px;
    img {
        width: 100%;
        height: auto;
    }
    position: absolute;
    right: 5px;
`;

export const ScrollButtonLeft = styled.div`
    width: 15px;
    height: 15px;
    img {
        width: 100%;
        height: auto;
    }
    position: absolute;
    left: 5px;
`;

