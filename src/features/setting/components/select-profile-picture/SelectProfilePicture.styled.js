import styled from "styled-components";

export const SelectProfilePictureWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
    z-index: 3;
`;

export const SelectProfilePictureBox = styled.div`
    width: 80%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 20px;
    position: relative;
    @media only screen and (min-width: 600px){
        width: 500px;
        height: 400px;
    }
`;

export const ProfilePictureDisplay = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 100px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
        height: auto;
    }
    @media only screen and (min-width: 600px){
        width: 200px;
        height: 200px;
        border-radius: 100px;
    }
`;

export const CloseButton = styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    img {
        width: 100%;
    }
`;
export const SelectImageButton = styled.div`
    margin-top: 20px;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    p {
        font-size: 14px;
        font-weight: 600;
    }
`;

export const SelectImageForm = styled.form`
    width: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    display: none;
`;
