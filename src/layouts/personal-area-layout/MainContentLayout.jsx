import { useWindowSize } from "../../hooks/useWindowSize"
import { MainContentWrapper } from "./MainContentLayout.styled";


export default function MainContentLayout({children, showNavigation}){
    const size = useWindowSize();
    const height = size[0] - 70;
    const width = size[1];
    if (width > 900){
        return (
            <MainContentWrapper style={showNavigation ? {width: (width - 260), height: height}: {width: (width - 80), padding: '0 40px', height: height}}>
                {
                    children
                }
            </MainContentWrapper>
        )
    } else if (width > 600){
        return (
            <MainContentWrapper style={showNavigation ? {width: (width - 130), height: height}: {width: (width - 60), padding: '0 30px', height: height}}>
                {
                    children
                }
            </MainContentWrapper>
        )
    } else {
        return (
            <MainContentWrapper style={{width: '100%', height: height}}>
                {
                    children
                }
            </MainContentWrapper>
        )
    }
}