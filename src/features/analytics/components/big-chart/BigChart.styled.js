import styled from "styled-components";

export const BigChartWrappper = styled.div`
    width: 90%;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    border-radius: 20px;
    height: 400px;
    position: relative;
    @media only screen and (min-width: 600px){
        width: 100%;
        margin: 0;
    }
    @media only screen and (min-width: 1200px){
        width: 100%;
        height: 400px;
    }
`;

export const ContentWrapper = styled.div`
    width: 85%;
    height: 65%;
    margin-bottom: 12%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    position: relative;
    @media only screen and (min-width: 600px){
        height: 60%;
    }
`;

export const ChartBackground = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    position: absolute;
`;
    
export const DateWrapper = styled.div`
    width: 85%;
    bottom: -15%;
    position: absolute;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ChartHeader = styled.div`
    width: 85%;
    height: auto;
    margin-bottom: 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 5%;
    h5 {
        font-size: 16px;
        margin: 0;
        // width: 100px;
    }
    p {
        font-size: 16px;
        font-weight: 600;
        margin: 0;
        position: absolute;
        right: 0;
    }
`;

export const ChartBarWrapper = styled.div`
    width: 85%;
    height: 100%;
    // padding-left: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // background: pink;
    // background: orange;
`;

export const DashedLine = styled.div`
    width: 85%;
    height: 1px;
    border-top: 1px dashed rgba(0, 0, 0, 0.3);
`;

export const NumberData = styled.p`
    width: 15%;
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    margin: 0;
    line-height: 0;
`;
export const DateData = styled.div`
    width: 30px;
    overflow: hidden;
    padding: 10px 0;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    p {
        margin: 0;
        width: auto;
        height: 10%;
        font-size: 14px;
    }
`;


export const HorizontalWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const VerticalWrapper = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    z-index: 2;
    background: pink;
`;