import styled from "styled-components";

export const NavigationContainer = styled.div`
    width: 90%;
    padding: 0 5%;
    height: 70px;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
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