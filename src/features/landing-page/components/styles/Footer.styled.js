import styled from "styled-components";

export const FooterWrapper = styled.footer`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
        width: 100px;
        height: auto;
    }
    @media only screen and (min-width: 900px){
        img {
            width: 120px;
        }
    }
`;