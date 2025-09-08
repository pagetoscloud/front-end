import styled from "styled-components";

export const TemplateSampleContainer = styled.div`
    width: 90%;
    min-width: 1100px;
    padding: 0 5%;
    padding-bottom: 200px;
    margin: 50px 0;
    height: 900px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    // background-color: pink;
`;

export const ColumnOne = styled.div`
    height: auto;
    width: 180px;
    margin-top: 100px;
    img {
        width: 100%;
        border-radius: 20px;
    }
`;

export const ColumnTwo = styled.div`
    height: auto;
    width: 180px;
    img {
        width: 100%;
        border-radius: 20px;
    }
    display: grid;
    row-gap: 80px;
`;

export const ColumnThree = styled.div`
    height: auto;
    width: 180px;
    img {
        width: 100%;
        border-radius: 20px;
    }
    display: grid;
    row-gap: 80px;
    margin-top: 400px;
`;

export const ColumnFour = styled.div`
    height: auto;
    width: 180px;
    img {
        width: 100%;
        border-radius: 20px;
    }
    display: grid;
    row-gap: 80px;
    margin-top: 200px;
`;

export const ColumnFive = styled.div`
    height: auto;
    width: 180px;
    margin-top: 250px;
    img {
        width: 100%;
        border-radius: 20px;
    }
`;

export const TemplateSampleText = styled.div`
    h6 {
        width: 200px;
        font-size: 30px;
        font-weight: 700;
        text-align: center;
        margin: 0;
        line-height: 1.5;
    }
    position: absolute;
    top: 20px;
    width: 90%;
    min-width: 1100px;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    // background-color: black;
    @media only screen and (max-width: 600px){
        h6 {
            font-size: 26px;
        }
    }
`;