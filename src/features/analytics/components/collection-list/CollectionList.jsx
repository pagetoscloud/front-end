import { useState } from "react";
import { 
    CollectionListHorizontalScroll,
    CollectionListWrapper, CollectionThumbnail, 
    CollectionThumbnailActive, 
} from "./CollectionList.styled";


export default function CollectionList({collectionListData, handleCurrentCollection}){
    const [active, setActive] = useState(0);
    return (
        <CollectionListWrapper>
            <CollectionListHorizontalScroll>
                {
                    collectionListData &&
                    collectionListData.map((list, index) => {
                        if (index === active){
                            return (
                                <CollectionThumbnailActive 
                                    key={`${index}-collection-list-active`}
                                    onClick={() => handleCurrentCollection(list)}
                                >
                                    <img src={list.image_link} alt="template thumbnail"/>
                                    <p>{list.name}</p>
                                </CollectionThumbnailActive>
                            )
                        }
                        return (
                            <CollectionThumbnail
                                key={`${index}-collection-list-active`}
                                onClick={() => {
                                    setActive(index);
                                    handleCurrentCollection(list);
                                }}
                            >
                                <img src={list.image_link} alt="template thumbnail"/>
                                <p>{list.name}</p>
                            </CollectionThumbnail>
                        )
                    })
                }
            </CollectionListHorizontalScroll>
        </CollectionListWrapper>
    )
}
