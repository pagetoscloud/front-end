import styled from "styled-components";

export const ImageFilterWrapper = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ImageFilterList = styled.div`
    width: 90%;
    padding: 0 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const ImageFilterItems = styled.div`
    width: 65px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // img {
    //     width: 60px;
    //     height: auto;
    //     // margin-right: 10px;
    // }
    p {
        font-size: 14px;
        font-weight: 600;
        margin: 5px 0;
    }
`;

export const ImageBox = styled.div`
    width: 65px;
    height: 65px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        width: 60px;
        height: auto;
        // margin-right: 10px;
    }
`;