import { 
        CloseButton, NavigationContainer, 
        ScrollButtonLeft, 
        ScrollButtonRight, 
        ScrollContent, ScrollWrapper 
} from "./Navigation.styled";
import closeIcon from '../../../../../assets/images/close-icon.png';
import rightArrow from '../../../../../assets/images/right-arrow.png';
import leftArrow from '../../../../../assets/images/left-arrow.png';
import { useWindowSize } from "../../../../../hooks/useWindowSize";
import { useEffect, useRef, useState } from "react";


export default function Navigation({children, handleEditMode, componentsMode}){
    const size = useWindowSize();
    const width = size[1] * 0.9;
    const column = (width - (40 * 4)) / 3;
    const widthContent = Math.floor((width + 40 + column));
    console.log(widthContent);
    const containerRef = useRef(0);
    const contentRef = useRef(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [leftSpace, setLeftSpace] = useState(0);
    const [rightSpace, setRightSpace] = useState(0);
    const [slideWidth, setSlideWidth] = useState(((contentRef.current.clientWidth - containerRef.current.clientWidth) / 4) * 1.15);
    console.log(contentRef.current.clientWidth);
    const handleChangeScroll = () => {
        setScrollPosition(containerRef.current.scrollLeft);
        setLeftSpace(containerRef.current.scrollLeft);
        setRightSpace(contentRef.current.clientWidth - containerRef.current.clientWidth - containerRef.current.scrollLeft)
    }
    const handleClickScroll = (value) => {
        containerRef.current.scrollLeft = scrollPosition + value;
        setScrollPosition(scrollPosition + value);
    }
    useEffect(() => {
        setSlideWidth(((contentRef.current.clientWidth - containerRef.current.clientWidth) / 4) * 1.15);
        setLeftSpace(containerRef.current.scrollLeft);
        setRightSpace(contentRef.current.clientWidth - containerRef.current.clientWidth - containerRef.current.scrollLeft);
    }, [scrollPosition])
    return (
        <NavigationContainer>
            {
                !componentsMode ?
                <CloseButton onClick={() => handleEditMode(false)}>
                    <img src={closeIcon} alt='close' />
                </CloseButton> :
                <></>
            }
            {
                leftSpace !== 0 &&
                <ScrollButtonLeft onClick={(() => handleClickScroll(-leftSpace))}>
                    <img src={leftArrow} alt="right scroll" />
                </ScrollButtonLeft>
            }
            <ScrollWrapper 
                ref={containerRef}
                onScroll={handleChangeScroll} 
                style={{width: '100%'}}
            >
                <ScrollContent 
                    ref={contentRef}
                    style={{width: widthContent}}
                >
                    {
                        children
                    }
                </ScrollContent>
            </ScrollWrapper>
            {
                rightSpace !== 0 &&
                <ScrollButtonRight onClick={(() => handleClickScroll(rightSpace))}>
                    <img src={rightArrow} alt="right scroll" />
                </ScrollButtonRight>
            }
        </NavigationContainer>
    )
}