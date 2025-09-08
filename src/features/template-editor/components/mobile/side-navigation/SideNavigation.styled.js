import styled from "styled-components";

export const SideNavigationWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 10;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
`;

export const SpaceButton = styled.div`
    width: 50%;
    height: 100%;
    right: 0;
`;
export const SideNavigationBox = styled.div`
    width: 50%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const DocumentName = styled.div`
    width: 80%;
    margin: 30px 10% 10px 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 40px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    &:focus-within{
        border: 1px solid pink;
    }
    input {
        border: none;
        width: 90%;
        height: 90%;
    }
    input:focus {
        outline: none;
    }
`;
export const NavigationButton =  styled.p`
    font-size: 14px;
    padding: 5px 10%;
    margin-bottom: 10px;
`;

