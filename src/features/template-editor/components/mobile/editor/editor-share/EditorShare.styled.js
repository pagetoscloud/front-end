import styled from "styled-components";

export const EditorShareContainer = styled.div`
    width: 100%;
    height: 400px;
    // padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    // background: blue;
`;

export const ShareItems = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    // padding: 20px 0 0 0;
`;

export const QrCode = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid #82F08B;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    border-radius: 10px;
    img {
        width: 85%;
        height: auto;
    }
`;

export const DividingLine = styled.div`
    width: 240px;
    height: 1px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: 10px 0;
`;

export const ActionButtonWrapper = styled.div`
    width: 100%;
    height: 60px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const ActionButtonText = styled.div`
    width: 140px;
    height: auto;
    h4 {
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        margin: 0;
    }
    p {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.7);
        margin: 0;
    }
`;

export const ActionButtonIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    // background-color: #82F08B;
    display: flex;
    flex-directon: row;
    align-items: center;
    justify-content: center;
    img {
        width: 80%;
        height: auto;
    }
`;

export const ActionButton = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 5px;
    // background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    display: flex;
    flex-directon: row;
    align-items: center;
    justify-content: center;
    img {
        width: 65%;
    }
`;