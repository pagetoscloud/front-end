import styled from "styled-components";
export const EffectWrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`;

export const InputNumberSmall = styled.div`
    width: 50px;
    height: 40px;
    padding: 0 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    input {
        width: 90%;
        height: 90%;
        border: none;
    }
    input:focus {
        outline: none;
    }
    border-radius: 5px;
`;

export const SelectEditorSmall = styled.div`
    width: 100px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    select {
        cursor: pointer;
        border: none;
        background-color: transparent;
        width: 90%;
        height: 90%;
    }
    select:focus {
        outline: none;
    }
    &:focus-within {
        border: 1px solid pink;   
    }
`;

export const DeleteButton = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    p {
        font-size: 24px;
        margin: 0;
        line-height: 0;
        background: pink;
    }
`;

export const BoxShadowSetting = styled.div`
    position: absolute;
    width: 90%;
    padding: 5px 5%;
    height: 140px;
    z-index: 10;
    border-radius: 5px;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    right: 0px;
    bottom: 0;
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    grid-template-rows: 50px 50px;
    column-gap: 5%;
    p {
        font-size: 14px;
        // margin-bottom: 10px;
    }
    input{
        width: 80%;
        height: 30px;
        padding: 0 10%;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
    @media only screen and (min-width: 600px){
        top: 0;
    }
`;

export const BoxShadowSettingIcon = styled.div`
    width: 15px;
    height: 15px;
    // background: rgba(0, 0, 0, 0.7);
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.6);
    cursor: pointer;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const BoxShadowCloseButton = styled.div`
    width: 15px;
    height: 15px;
    img {
        width: 100%;
    }
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
`;