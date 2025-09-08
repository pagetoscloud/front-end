import styled from 'styled-components';

export const ContainerLayout = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    &::-webkit-scrollbar {
        display: none;
    }
`;

