import styled from "styled-components";


export const ActionButtonSolid = styled.button`
    width: auto;
    height: 40px;
    padding: 0 20px;
    border-radius: 20px;
    background-color: black;
    font-weight: 800;
    font-size: 14px;
    color: white;
    border: none;
    a {
        padding: 10px;
        height: 100%;
        width: 100%;
        color: white;
        text-decoration: none;
    }
    @media only screen and (min-width: 600px){
        font-size: 16px;
    }
`;

export const ActionButtonSolidWhite = styled.button`
    width: auto;
    height: 40px;
    padding: 0 10px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 1);
    backdrop-filter: blur(30px);
    font-weight: 800;
    font-size: 14px;
    // color: white;
    border: none;
    a {
        padding: 10px;
        height: 100%;
        width: 100%;
        color: white;
        text-decoration: none;
    }
    @media only screen and (min-width: 600px){
        font-size: 16px;
    }
`;
