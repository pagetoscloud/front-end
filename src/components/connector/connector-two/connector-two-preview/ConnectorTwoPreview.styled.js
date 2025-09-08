
import styled from "styled-components";

export const ConnectorOnePreviewContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    // background-color: rgba(0, 0, 0, 0.6);
    background: rgba(0, 0, 0, 0.1);
    h2 {
        margin-bottom: 20px;
        color: #333;
    }

    p {
        color: #666;
        text-align: center;
        max-width: 600px;
    }
    z-index: 100;
`;

export const ConnectorOnePreviewBox = styled.div`
    width: 100%;
    height: 95%;
    max-height: 600px;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: transparent;
    border-radius: 20px;
    @media only screen and (min-width: 1000px){
        width: 600px;
        height: 500px;
    }
`;
export const ConnectorOneBackground = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    z-index: -1;
    position: absolute;
`;
export const ConnectorContentWrapper = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 10px;
    p, h2 {
        margin: 0;
        padding: 5px 1%;
        max-width: 80%;
    }
`;

export const ConnectorButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    gap: 10px;
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
}`;
export const ConnectorButton = styled.button`
    width: 250px;
    height: 40px;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
    &:hover {
        opacity: 0.8;
    }
`;

export const CloseButton = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 100px;
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
    cursor: pointer;
`;