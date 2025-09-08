import styled from "styled-components";

export const EditorBoardWrapper = styled.div`
    width: 100%;
    height: 100%;
    z-index: 3;
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    // background: pink;
`;

export const EditorBoardContent = styled.div`
    width: 100%;
    height: auto;
    border-radius: 15px 15px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    // overflow: hidden;
    position: relative;
    margin-bottom: 70px;
    padding-top: 20px;
    background: white;
`;

// export const CloseButton = styled.div`
//     width: 100%;
//     border-bottom: 1px solid rgba(0, 0, 0, 0.1);
//     img {
//         width: 30px;
//         height: auto;
//     }
//     // position: absolute;
//     top: 20px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     padding: 10px 0;
//     // background: pink;
// `;

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
    right: 20px;
`;