import { useEffect, useRef, useState } from "react";
import { 
    ButtonWrapper,
    CollectionListHorizontalScroll,
    CollectionListWrapper, CollectionThumbnail, 
    CollectionThumbnailActive,
    EditButton,
    // PreviewButton,
    SlideButton,
    SlideButtonWrapper,
    TitleWrapper, 
} from "./CollectionList.styled";
import viewIcon from '../../../../assets/images/visible-icon.png';
import editIcon from '../../../../assets/images/edit-icon.png';
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import leftArrow from '../../../../assets/images/left-arrow.png';
import rightArrow from '../../../../assets/images/right-arrow.png';
import { TitlePageH2 } from "../../../../assets/Global.styled";

export default function CollectionList({collectionData, handleCurrentCollection, handleShowDetail, handleChangePage, showDetail, showNavigation}){
    const [active, setActive] = useState(0);
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
    const handlePreviewPage = (list) => {
        if (process.env.NODE_ENV === 'development'){
            window.open(`http://localhost:3000/${list.link}`, "_blank")
        } else {
            window.open(`https://pagetos.com/${list.link}`, "_blank")
        }
    }
    useEffect(() => {
        setLeftSpace(containerRef.current.scrollLeft);
        setRightSpace(collectionWidthWrapper - containerRef.current.clientWidth - containerRef.current.scrollLeft);
    }, [showDetail, showNavigation, currentWidth, collectionWidthWrapper])
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
        <CollectionListWrapper  
            onScroll={handleChangeScroll} 
            id="containerScroll" 
            ref={containerRef}
        >
            <CollectionListHorizontalScroll>
                {
                    collectionData &&
                    collectionData.map((list, index) => {
                        if (index === active){
                            return (
                                <CollectionThumbnailActive key={`${index}-collection-list-active`}>
                                    <img 
                                        onClick={() => handleShowDetail(true)}
                                        src={list.image_link} 
                                        alt="template thumbnail"
                                    />
                                    <p>{list.name}</p>
                                    <ButtonWrapper>
                                        {/* <PreviewButton onClick={() => handlePreviewPage(list)}><p>Preview</p></PreviewButton> */}
                                        <EditButton onClick={() => handlePreviewPage(list)}><img src={viewIcon} alt="view icon"/></EditButton>
                                        <EditButton onClick={() => {
                                            handleChangePage();
                                            navigate(`/editor/${list.web_id}`);
                                        }}><img src={editIcon} alt="edit icon"/></EditButton>
                                    </ButtonWrapper>
                                </CollectionThumbnailActive>
                            )
                        }
                        return (
                            <CollectionThumbnail 
                                key={`${index}-collection-list`}
                                onClick={() => {
                                    setActive(index)
                                    handleCurrentCollection(collectionData[index]);
                                }}>
                                <img 
                                    onClick={() => handleShowDetail(true)}
                                    src={list.image_link} 
                                    alt="template thumbnail"
                                />
                                <p>{list.name}</p>
                            </CollectionThumbnail>
                        )
                    })
                }
            </CollectionListHorizontalScroll>
        </CollectionListWrapper>
        <SlideButtonWrapper
            style={
                showDetail && showNavigation && currentWidth > 900 ? 
                {width: currentWidth - 600} : 
                showDetail && showNavigation && currentWidth < 900 ? 
                {width: currentWidth - 470} :
                showDetail && currentWidth > 900 ?
                {width: currentWidth - 390} :
                showDetail && currentWidth < 900 ?
                {width: currentWidth - 390} :
                {width: '100%'} 
            } 
        >
        </SlideButtonWrapper>
        </>
    )
}
