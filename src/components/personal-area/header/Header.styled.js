import styled from "styled-components";

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    z-index: 2;
    @media only screen and (min-width: 600px){
        width: 100%;
    }
`;
    
export const LeftContent = styled.div`
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 5%;
    @media only screen and (min-width: 600px){
        padding-left: 30px;
    }
    @media only screen and (min-width: 900px){
        padding-left: 40px;
    }
`;

export const RightContent = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-right: 5%;
    @media only screen and (min-width: 600px){
        justify-content: space-between;
        width: 300px;
        padding-right: 30px;
    }
    @media only screen and (min-width: 900px){
        padding-right: 40px;
        // background: pink;
    }
`;

export const SolidButton = styled.div`
    width: 100px;
    height: 35px;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px solid #1FD07D;
    background: #1FD07D;
    border-radius: 10px;
    cursor: pointer;
    p, a {
        font-size: 16px;
        font-weight: 600;
        color: white;
        margin: 0;
        text-align: center;
        text-decoration: none;
    }
    @media only screen and (min-width: 600px){
        display: flex;
    }
`;

export const AddDesignButton = styled.div`
    width: 50px;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    background: white;
    border-radius: 10px;
    cursor: pointer;
    p {
        font-size: 16px;
        font-weight: 600;
        color: black;
        margin: 0;
        text-align: center;
    }
    @media only screen and (min-width: 600px){
        width: 100px;
    }
`;

export const ProfilePicture = styled.div`
    display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    // background: pink;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.7) inset;
    width: 60px;
    height: 60px;
    border-radius: 40px;
    overflow: hidden;
    img {
        width: 100%;
    }
    @media only screen and (min-width: 600px){
        display: flex;
    }
`;

export const HorizontalWrapper = styled.div`
    width: auto;
    height: auto;
`;

export const Toggle = styled.div`
    display: none;
    width: 20px;
    height: auto;
    img {
        width: 100%;
    }
    cursor: pointer;
    @media only screen and (min-width: 600px){
        display: block;
    }
`;

export const Logo = styled.div` 
    width: 120px;
    height: auto;
    margin: 0;
    cursor: pointer;
    img {
        width: 100%;
    }
    @media only screen and (min-width: 600px){
        display: none;
    }
    @media only screen and (min-width: 900px){
        padding: 0 30px 0 10px;
        display: flex;
    }
`;

export const Menu = styled.div`
    display: none;
    height: auto;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    p {
        margin-right: 20px;
    }
    @media only screen and (min-width: 900px){
        display: flex;
        // margin-left: 0px;
    }
`;