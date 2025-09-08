
import styled from "styled-components";

export const DetailTemplateWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 10;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;

export const DetailTemplateBox = styled.div`
    width: 100%;
    height: 60%;
    margin-bottom: 60px;
    background: white;
    border-radius: 20px 20px 0 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    @media only screen and (min-width: 600px){
        height: 75%;
        margin-bottom: 0;
    }
    @media only screen and (min-width: 900px){
        height: 95%;
    }
`;

export const DetailHeaderDesktop = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px 0;
    background: white;
    @media only screen and (min-width: 600px){
        position: fixed;
    }
    @media only screen and (min-width: 1000px){
        width: 900px;
    }
`;
export const ScrollWrapper = styled.div`
    width: 100%;
    height: 100%;
    @media only screen and (min-width: 600px){
        overflow-y: scroll;
    }
`;
export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 20px;
`;
export const ImageTemplate = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 20px;
    img {
        width: 100%;
        height: auto;
        }
    @media only screen and (min-width: 600px){
        padding-top: 40px;
        margin-top: 40px;
    }
    @media only screen and (min-width: 900px){
        width: 900px;
    }
`;

export const TextDetail = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    h4 {
        margin: 0;
        margin-bottom: 5px;
    }
    p {
        margin: 0;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.8);
    }
    @media only screen and (min-width: 900px){
        width: 300px;
    }
`;

export const ButtonWrapper = styled.div`
    width: 160px;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media only screen and (min-width: 900px){
        width: 220px;
    }
`;

export const PreviewButton = styled.div`
    width: 70px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 2px solid black;
    cursor: pointer;
    p, a {
        font-size: 14px;
        color: black;
        font-weight: 800;
        text-decoration: none;
    }
    @media only screen and (min-width: 1000px){
        width: 100px;
        border-radius: 10px;
    }
`;

export const EditButton = styled.div`
    width: 70px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: black;
    border: 2px solid black;
    cursor: pointer;
    p, a {
        font-size: 14px;
        color: white;
        font-weight: 800;
        text-decoration: none;
    }
    @media only screen and (min-width: 1000px){
        width: 100px;
        border-radius: 10px;
    }
`;

export const CloseButton = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -15%;
    cursor: pointer;
    opacity: 80%;
    &:hover {
        opacity: 100%;
    }
    img {
        width: auto;
        height: 100%;
    }
    @media only screen and (min-width: 600px){
        top: -50px;
    }
    @media only screen and (min-width: 900px){
        width: auto;
        height: 3%;
        top: -4%;
        right: 10px;
    }
`;