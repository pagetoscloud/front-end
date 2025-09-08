import styled from "styled-components";

export const AdvantageContainer = styled.div`
    width: 90%;
    padding: 200px 5% 150px 5%;
    margin: 20px 0;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFFBF0;
    position: relative;
    @media only screen and (max-width: 600px){
        padding: 200px 5% 100px 5%;
    }
`;
export const AdvantageTitle = styled.h2`
    font-size: 36px;
    padding: 50px 0;
    margin-bottom: 30px;
    position: absolute;
    top: 0;
    @media only screen and (max-width: 600px){
        top: -25px;
        width: 200px;
        text-align: center;
        line-height: 1.5;
    }
`;

export const AdvantageItemsWrapper = styled.div`
    width: auto;
    height: auto;
    display: grid;
    column-gap: 40px;
    row-gap: 40px;
    grid-template-columns: auto auto auto auto;
    @media only screen and (max-width: 1050px){
        grid-template-columns: auto auto;
    }
    @media only screen and (max-width: 600px){
        // width: aut;
        // background-color: pink;
        // column-gap: 50px;
        grid-template-columns: auto;
    }
`;

export const AdvantageItemsTextWrapper = styled.div`
    width: auto;
    height: auto;
    display: grid;
    row-gap: 40px;
    grid-template-rows: auto auto;
`;

export const AdvantageItemsText = styled.div`
    width: 250px;
    height: 250px;
    background-color: white;
    border-radius: 10px;
`;

export const AdvantageItemsTextTitle = styled.div`
    h6 {
        font-size: 20px;
        margin: 0;
        padding: 10px 15px;
        background-color: #FFE89F;
        border-radius: 5px;
    }
    h5 {
        font-size: 18px;
        margin: 0;
        margin-left: 10px;
    }
    width: 80%;
    padding: 20px 10% 10px 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const AdvantageItemsTextParagraph = styled.div`
    width: 80%;
    padding: 0 10%;
    // background-color: blue;
    p {
        font-size: 14px;
        line-height: 1.5;
        margin: 0;
        margin-top: 10px;
    }

`;

export const AdvantageItemsImage = styled.div`
    max-width: 300px;
    min-width: 200px;
    height: 550px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        width: 90%;
        margin: 0 5%;
    }
    @media only screen and (max-width: 600px){
        display: none;
        // width: 80%;
        // height: 250px;
        // overflow: hidden;
    }
`;