import styled from "styled-components";

export const DetailCollectionWrapper = styled.div`
    width: 90%;
    margin: 0 5%;
    background: pink;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    column-gap: 10%;    
    z-index: 1;
    background: white;
    margin-top: 20px;
    @media only screen and (min-width: 600px){
        padding: 0 1%;
        width: 98%;
        margin: 0;
        grid-template-columns: 80%;
        column-gap: 5%;
        // padding: 0 40px;
    }
    @media only screen and (min-width: 800px){
        grid-template-columns: 50% 50%;
        column-gap: 5%;
        grid-template-rows: 400px;
        // row-gap: 20px;
    }
    @media only screen and (min-width: 1200px){
        grid-template-columns: 30% 30% 30%;
        column-gap: 5%;
    }
`;
export const DetailHeader = styled.div`
    width: 90%;
    padding: 25px 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    h3 {
        margin: 0;
    }
    img {
        width: 20px;
    }
    @media only screen and (min-width: 600px){
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        width: 300px;
        padding: 20px 40px;
    }
`;
export const DetailScroll = styled.div`
    width: 90%;
    padding: 0 5%;
    height: auto;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media only screen and (min-width: 600px){ 
        // width: 300px;
        // padding: 0 40px;
    }
`;
export const DetailContent = styled.div`
    width: 100%;
    height: auto;
    padding-bottom: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;
export const HorizontalWrapper = styled.div`
    width: 85%;
    height: auto;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    // background: pink;
    @media only screen and (min-width: 600px){ 
        // width: 300px;
        // padding: 0 40px;
    }
`;

export const SquareWrapper = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: white;
    border-radius: 20px;
    // border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
`;
export const LabelText = styled.p`
    font-size: 14px;
    font-weight: 400;
`;

export const ActionText = styled.span`
    font-size: 14px;
    font-weight: 800;
    color: #1FD07D;
    cursor: pointer;
`;

export const QrCode = styled.div`
    width: 240px;
    height: 240px;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #1FD07D;
    border-radius: 20px;
    background: white;
    img {
        width: 10%;
        height: auto;
    }
    p {
        margin: 10px 0;
        font-size: 14px;
        font-weight: 600;
    }
    @media only screen and (min-width: 600px){ 
        width: 240px;
        height: 240px;
        img {
            width: 70%
        }
    }
`;

export const Line = styled.div`
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin: 20px 0;
`;

export const LinkEdit = styled.div`
    width: 85%;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    z-index: 2;
    border-radius: 5px;
    &:focus-within {
        border: 1px solid #1FD07D;
    }
    input {
        width: 90%;
        height: 90%;
        border: none;
    }
    input:focus-within{
        outline: none;
    }
    // @media only screen and (min-width: 600px){ 
    //     border-radius: 10px;
    //     width: 300px;
    //     height: 35px;
    //     input {
    //         width: 95%;
    //     }
    // }
`;


export const ActionButtonWrapper = styled.div`
    width: 85%;
    height: 60px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    // @media only screen and (min-width: 600px){ 
    //     width: 300px;
    //     // height: 240px;
    // }
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
    background-color: white;
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
    display: flex;
    flex-directon: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
        width: 65%;
    }
`;