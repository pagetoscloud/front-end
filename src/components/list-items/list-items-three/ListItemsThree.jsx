import { useEffect, useRef, useState } from "react";
import ListItemsThreeEdit from "./ListItemsThreeEdit";
import ListItemsThreePreview from "./ListItemsThreePreview";
import rightArrow from '../../../assets/images/right-arrow.png';
import leftArrow from '../../../assets/images/left-arrow.png';
import { ListItemsThreeContainer, ScrollLeftButton, ScrollRightButton } from "./ListItemsThree.styled";
import { useWindowSize } from "../../../hooks/useWindowSize";


export default function ListItemsThree({data, handleEditMode, styleData, components, mode, handleChangePage, handleChangeCurrentItems, onEdit}){
    const totalItems = data.listItems.length;
    const containerRef = useRef(0);
    const contentRef = useRef(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [leftSpace, setLeftSpace] = useState(0);
    const [rightSpace, setRightSpace] = useState(0);
    const [slideWidth, setSlideWidth] = useState(((contentRef.current.clientWidth - containerRef.current.clientWidth) / 4) * 1.15);
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
    }, [totalItems])
    return (
        <ListItemsThreeContainer style={mode === 'edit' ? {width: '100%'} : {}}>
            {
                mode === 'edit' ?
                <ListItemsThreeEdit
                    containerRef={containerRef}
                    contentRef={contentRef}
                    handleChangeScroll={handleChangeScroll}
                    handleClickScroll={handleClickScroll}
                >
                    {
                        data.listItems.map((list, index) => {
                            return <components.child.specialItems
                                key={`${index}-child-items`}
                                styleData={styleData}
                                data={list}
                                items={data}
                                handleEditMode={handleEditMode}
                                mode={mode}
                                onEdit={onEdit}
                            />
                        })
                    }
                </ListItemsThreeEdit> :
                <ListItemsThreePreview
                    containerRef={containerRef}
                    contentRef={contentRef}
                    handleChangeScroll={handleChangeScroll}
                    handleClickScroll={handleClickScroll}
                >
                    {
                        data.listItems.map(list => {
                            return <components.child.specialItems
                            handleChangePage={handleChangePage}
                            handleChangeCurrentItems={handleChangeCurrentItems}
                            styleData={styleData}
                            data={list}
                            items={data}
                            />
                        })

                    }
                </ListItemsThreePreview>
            }
            <>
                {
                    rightSpace > 0 ?
                    <ScrollRightButton onClick={() => handleClickScroll(slideWidth)}>
                        <img src={rightArrow} alt="right arrow" />
                    </ScrollRightButton> :
                    <ScrollRightButton>
                        <img style={{opacity: '40%'}} src={rightArrow} alt="right arrow" />
                    </ScrollRightButton>
                }
                {
                    leftSpace > 0 ?
                    <ScrollLeftButton onClick={() => handleClickScroll(-slideWidth)}>
                        <img src={leftArrow} alt="left arrow" />
                    </ScrollLeftButton>:
                    <ScrollLeftButton>
                        <img style={{opacity: '40%'}} src={leftArrow} alt="left arrow" />
                    </ScrollLeftButton>
                }
            </>
        </ListItemsThreeContainer>
    )
}