import { useNavigate } from "react-router-dom";
import { 
    CollectionListHorizontalScroll, CollectionListWrapper, 
    CollectionThumbnail, 
    SlideButton, 
    TitleWrapper
} from "./CollectionList.styled";
import { TitlePageH2 } from "../../../../assets/Global.styled";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import leftArrow from '../../../../assets/images/left-arrow.png';
import rightArrow from '../../../../assets/images/right-arrow.png';

export default function CollectionList({collectionData, handleLocalStorage, handleChangePage}){
    const navigate = useNavigate();
    const size = useWindowSize();
    const currentWidth = size[1];
    const collectionWidthWrapper  = (collectionData.length * 140) + 20;
    const scrollValue = collectionWidthWrapper / collectionData.length;
    const containerRef = useRef(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [leftSpace, setLeftSpace] = useState(0);
    const [rightSpace, setRightSpace] = useState(0);
    const handleChangeScroll = () => {
        setScrollPosition(containerRef.current.scrollLeft);
        setLeftSpace(containerRef.current.scrollLeft);
        setRightSpace(collectionWidthWrapper - containerRef.current.clientWidth - containerRef.current.scrollLeft)
    }
    const handleClickScroll = (value) => {
            containerRef.current.scrollLeft = scrollPosition + value;
            setScrollPosition(scrollPosition + value);
    }
    useEffect(() => {
        setLeftSpace(containerRef.current.scrollLeft);
        setRightSpace(collectionWidthWrapper - containerRef.current.clientWidth - containerRef.current.scrollLeft);
    }, [currentWidth, collectionWidthWrapper])
    return (
        <>
            <TitleWrapper>
                <TitlePageH2>Collection</TitlePageH2>
                <SlideButton>
                    {
                        leftSpace > 0 ?
                        <img onClick={() => handleClickScroll(-140)} src={leftArrow} alt="left arrow" />: 
                        <img style={{opacity: '30%'}} src={leftArrow} alt="left arrow" />
                    }
                    {
                        rightSpace > 0 ?
                        <img onClick={() => handleClickScroll(scrollValue)} src={rightArrow} alt="right arrow" />: 
                        <img style={{opacity: '30%'}} src={rightArrow} alt="right arrow" />
                    }
                </SlideButton>
            </TitleWrapper>
            {/* <TitlePageH2>Collection</TitlePageH2> */}
            <CollectionListWrapper
                onScroll={handleChangeScroll} 
                id="containerScroll" 
                ref={containerRef}
            >
                <CollectionListHorizontalScroll>
                    {
                        collectionData.map((thumbnail, index) => {
                            return (
                                <CollectionThumbnail 
                                    key={`${index}collection`} 
                                    onClick={() => {
                                        // handleLocalStorage(thumbnail);
                                        handleChangePage();
                                        navigate(`/editor/${thumbnail.web_id}`);
                                    }}
                                    
                                >
                                    <img src={thumbnail.image_link} alt={thumbnail.name} />
                                </CollectionThumbnail>
                            )
                        })
                    }
                </CollectionListHorizontalScroll>
            </CollectionListWrapper>
        </>
    )
}