import styled from 'styled-components';


export const TargetUserContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // background-color: pink;
`;

export const TargetUserWrapper = styled.div`
    width: 70%;
    height: auto;
    padding: 50px 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 1100px){
        width: 80%;
        padding: 50px 10%;
    }
    @media only screen and (max-width: 900px){
        flex-direction: column;
        justify-content: space-around;
    }
`;

export const TargetUserText = styled.div`
    width: 350px;
    height: auto;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-family: 'Arial', sans-serif;
    h2 {
        font-size: 46px;
        margin: 0;
        line-height: 1.5;
        font-weight: 700;
    }
    p {
        width: 70%;
        font-size: 16px;
        font-weight: 500;
        margin: 20px 0;
        line-height: 1.5;
    }
    @media only screen and (max-width: 900px){
        align-items: center;
        margin-bottom: 50px;
        h2 {
            font-size: 36px;
            text-align: center;
        }
        p {
            width: 180px;
            text-align: center;
        }
    }
    @media only screen and (max-width: 600px){
        align-items: center;
    }
`;

export const IconListWrapper = styled.div`
    width: auto;
    height: auto;
    display: grid;
    column-gap: 50px;
    row-gap: 50px;
    grid-template-columns: auto auto;
    // background-color: blue;
    @media only screen and (max-width: 600px){
        column-gap: 20px;
        row-gap: 20px;
    }
`;

export const IconItemsDark = styled.div`
    width: 200px;
    height: 250px;
    background-color: black;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        width: 70%;
        height: auto;
        margin-bottom: 20px;
    }
    h6 {
        font-size: 24px;
        color: white;
        margin: 0;
    }
    @media only screen and (max-width: 1000px){
        width: 150px;
        height: 200px;
    }
`;

export const IconItemsLight = styled.div`
    width: 200px;
    height: 250px;
    background-color: #FFFAE9;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        width: 70%;
        height: auto;
        margin-bottom: 20px;
    }
    h6 {
        font-size: 24px;
        margin: 0;
    }
    @media only screen and (max-width: 1000px){
        width: 150px;
        height: 200px;
    }
`;