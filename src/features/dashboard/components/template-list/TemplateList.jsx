import { useEffect, useRef, useState } from "react";
import { 
    ButtonWrapper,
    SlideButtonNext,
    SlideButtonPrev,
    TemplateContent,
    TemplateListHorizontalScroll, 
    TemplateListWrapper, TemplateThumbnail 
} from "./TemplateList.styled";

import leftArrow from '../../../../assets/images/left-arrow.png';
import rightArrow from '../../../../assets/images/right-arrow.png';


export default function TemplateList({templateListData, handleShowDetail, handleCurrentDetail}){
    const containerRef = useRef(0);
    const contentRef = useRef(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [leftSpace, setLeftSpace] = useState(0);
    const [rightSpace, setRightSpace] = useState(0);
    const [slideWidth, setSlideWidth] = useState(containerRef.current.clientWidth / 2);
    // console.log(containerRef.current.clientWidth / templateListData.length)
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
        setSlideWidth(containerRef.current.clientWidth / 2)
        setLeftSpace(containerRef.current.scrollLeft);
        setRightSpace(contentRef.current.clientWidth - containerRef.current.clientWidth - containerRef.current.scrollLeft);
    }, [templateListData])
    return (
        <TemplateListWrapper>
            <TemplateListHorizontalScroll onScroll={handleChangeScroll} id="containerScroll" ref={containerRef}>
                <TemplateContent
                    ref={contentRef}
                >
                    {
                        templateListData.map((list, index)=> {
                            return (
                                <TemplateThumbnail 
                                    key={`${index}-template-list`}
                                    id={`${index}template`}
                                    onClick={() => {
                                        handleCurrentDetail(list);
                                        handleShowDetail();
                                    }}
                                >
                                    <img src={list.image} alt="template thumbnail"/>
                                    <p>{list.name}</p>
                                </TemplateThumbnail>
                            )
                        })
                    }
                </TemplateContent>
            </TemplateListHorizontalScroll>
            <ButtonWrapper>
                {
                    leftSpace > 0 ?
                    <SlideButtonPrev onClick={() => handleClickScroll(-slideWidth)}>
                        <img src={leftArrow} alt="left arrow" />
                    </SlideButtonPrev> :
                    <></>
                }
                {
                    rightSpace > 0 ?
                    <SlideButtonNext onClick={() => handleClickScroll(slideWidth)}>
                        <img src={rightArrow} alt="right arrow" />
                    </SlideButtonNext> :
                    <></>
                }
            </ButtonWrapper>
        </TemplateListWrapper>
    )
}