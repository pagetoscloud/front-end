import { useWindowSize } from "../../../hooks/useWindowSize";
import { MainContentContainer } from "./MainContentLayout.styled";

export default function MainContentLayout({children}){
    const size = useWindowSize();
    const height = size[0] - 70;
    return (
        <MainContentContainer style={{height: `${height}px`}}>
            {
                children
            }
        </MainContentContainer>
    )
}