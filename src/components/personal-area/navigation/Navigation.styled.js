import styled from "styled-components";


export const NavigationWrapper = styled.div`
    width: 90%;
    padding: 0 5%;
    height: 60px;
    background: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    overflow: hidden;
    z-index: 10;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    @media only screen and (min-width: 600px){
        border: none;
        position: relative;
        width: 60px;
        height: 400px;
        // background: pink;
        padding: 0;
        padding-left: 30px;
        margin-top: 40px;
        display: none;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        overflow: hidden;
        display: flex;
        padding-right: 10px;
        z-index: 1;
    }
    @media only screen and (min-width: 900px){
        width: 180px;
        padding-left: 40px;
        padding-right: 0;
    }
`;

export const NavigationButton = styled.div`
    width: auto;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0 10px;
    cursor: pointer;
    &:hover {
        p {
            font-weight: 700;
        }
    }
    p {
        display: none;
        font-size: 16px;
        margin: 0;
        margin-left: 10px;
    }
    img {
        width: 20px;
        height: auto;
    }
    @media only screen and (min-width: 600px){
        padding: 0;
        margin-bottom: 20px;
        width: 40px;
    }
    @media only screen and (min-width: 900px){
        p {
            display: block;
        }
    }
`;

export const NavigationActiveButton = styled.div`
    width: auto;
    height: 40px;
    background: rgba(0, 0, 0, 0.05);
    padding: 0 10px;
    // margin-left: -10px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    p {
        display: none;
        font-size: 16px;
        margin: 0;
        margin-left: 10px;
        font-weight: 700;
    }
    img {
        width: 20px;
        height: auto;
    }
    @media only screen and (min-width: 600px){
        margin-left: -10px;
        width: auto;
        margin-bottom: 20px;
    }
    @media only screen and (min-width: 900px){
        padding: 0 20px;
        margin-left: -20px;
        width: 120px;
        p {
            display: block;
        }
    }
`;

export const LogoutButton = styled.div`
    width: 40px;
    height: 40px;
    padding: 0 20px;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    cursor: pointer;
    position: absolute;
    bottom: 0px;
    left: 10px;
    &:hover {
        p {
            font-weight: 700;
        }
    }
    p {
        display: none;
        font-size: 16px;
        margin: 0;
        margin-left: 10px;
    }
    img {
        width: 20px;
        height: auto;
    }
    @media only screen and (min-width: 600px){
        display: flex;
    }
    @media only screen and (min-width: 900px){
        width: 120px;
        left: 20px;
        p {
            display: block;
        }
    
`;