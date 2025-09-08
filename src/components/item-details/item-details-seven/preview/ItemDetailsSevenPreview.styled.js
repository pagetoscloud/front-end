import styled from "styled-components";

export const ItemDetailsWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background: white;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    // @media only screen and (min-height: 600px){
    //     background: pink;
    //     height: 85%;
    //     top: 15%;
    // }
`;

export const ItemDetailsBox = styled.div`
    width: 100%;
    height: 45%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    // border-radius: 20px 20px 0 0;
    overflow: hidden;
    z-index: 5;
    @media only screen and (min-width: 900px){
        width: 400px;
        height: 500px;
        position: relative;
        // border-radius: 20px;
    }
`;

export const ItemsDetailsBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    // border-radius: 20px 20px 0 0;
    // @media only screen and (min-width: 1000px){
    //     width: 600px;
    //     height: 800px;
    //     position: relative;
        border-radius: 20px;
    // }
`;
// export const ItemsDetailsBackground = styled.div`
//     width: 100%;
//     height: 450px;
//     background: linear-gradient(45deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3));
//     filter: blur(8px);
//     // -webkit-filter: blur(80px);
//     position: absolute;
//     z-index: -1;
//     @media only screen and (min-width: 1000px){
//         width: 600px;
//         height: 90%;
//         position: relative;
// `;

export const ItemDetailsCircle = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 150px;
    border: 2px solid white;
    @media only screen and (min-width: 900px){
        width: 250px;
        height: 250px;
        border-radius: 200px;
    }
`;

export const ItemDetailsImage = styled.div`
    width: 100%;
    height: 60%;
    overflow: hidden;
    // border-radius: 100px;
    img {
        width: 100%;
        height: auto;
    }
    @media only screen and (min-height: 600px){
        // height: 50%;
        // margin-top: 20%;
        // img {
        //     width: auto;
        //     height: 100%;
        // }
    }
    @media only screen and (min-width: 900px){
        width: 400px;
        height: 320px;
        border-radius: 200px;
        // margin-top: 30px;
    }
`;

export const ItemDetailsText = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 30px;
    position: relative;
    padding-bottom: 80px;
    @media only screen and (min-width: 900px){
        margin-top: 10px;
    }
`;

export const ItemsDetailsInput = styled.textarea`
    // width: 98%;
    width: auto;
    height: auto;
    margin: 0;
    padding: 5px 1%;
    font-family: 'Roboto';
    background: transparent;
    z-index: 4;
    border: none;
    text-align: center;
    field-sizing: content;
    &:focus {
        outline: none;
    }
    &:hover {
        box-shadow:0px 0px 0px 1px blue inset;
    
    }
    &:focus-within {
        box-shadow:0px 0px 0px 1px blue inset;
    }
    resize: none;
`;

export const ItemsTitle = styled.h4`
    width: auto;
    height: auto;
    margin: 0;
    padding: 5px 1%;
    font-family: 'Roboto';
    background: transparent;
    z-index: 4;
    text-align: center;
`;

export const ItemsDescription = styled.p`
    width: 70%;
    height: auto;
    margin: 0;
    padding: 5px 1%;
    font-family: 'Roboto';
    background: transparent;
    z-index: 4;
    text-align: center;
`;

export const ItemsPrice = styled.h5`
    width: auto;
    height: auto;
    margin: 0;
    padding: 5px 1%;
    font-family: 'Roboto';
    background: transparent;
    z-index: 4;
    text-align: center;
`;

export const ItemDetailsButton = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    border-radius: 50px;
    background: white;
    bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
        width: 20px;
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
    z-index: 5;
`;