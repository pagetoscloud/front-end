
import styled from "styled-components";

export const MainContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    position: relative;
`;