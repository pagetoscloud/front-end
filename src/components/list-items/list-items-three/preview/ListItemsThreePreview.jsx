import { useEffect, useState } from "react";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { ListItemsContent, ListItemsWrapper } from "./ListItemsThreePreview.styled";

export default function ListItemsThreePreview({children, containerRef, contentRef, handleChangeScroll}){
    const windowSize = useWindowSize();
    const [left, setLeft] = useState(0)
    // const paddingLeft = windowSize[1] - 400;
    useEffect(() => {
        if (windowSize[1] > 300 && windowSize[1] < 400){
            setLeft((windowSize[1] - 300) / 2);
        } else if (windowSize[1] > 400) {
            setLeft((windowSize[1] - 400) / 2);
        } else if (windowSize[1] >= 600) {
            console.log('desktop');
            setLeft(0);
        } else {
            setLeft(25)
        }
    }, [windowSize])
    return (
        <ListItemsWrapper
            ref={containerRef}
            onScroll={handleChangeScroll}
            >
            <ListItemsContent
                ref={contentRef}
                // style={windowSize[1] < 600 ? {paddingLeft: `${left}px`}: {}}
            >
                {children}
            </ListItemsContent>
        </ListItemsWrapper>
    )
}