import CollectionList from "./collection-list/CollectionList";
import MainContentLayout from "../../../layouts/personal-area-layout/MainContentLayout";
import { DeleteButton, MainCollectionWrapper} from "./MainCollections.styled";
import { useState } from "react";
import DetailCollection from "./detail-collection/DetailCollection";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../template-editor/templatePagePositionSlice";
import { deletePageCollection } from "../utils/api";

export default function MainCollections({showNavigation, handleChangeLinkPage}){
    const [showDetail, setShowDetail] = useState(true);
    const collectionData = useSelector(state => state.collection);
    const dispatch = useDispatch();
    const [currentCollection, setCurrentCollection] = useState(collectionData.length > 0 ? collectionData[0] : []);
    const handleCondition = () => {
        return collectionData.length !== 0;
    }
    const condition = handleCondition();
    const handleCurrentCollection = (value) => {
        setCurrentCollection(value);
    }
    const handleShowDetail = (value) => {
        setShowDetail(value);
    }
    const handleChangePage = () => {
        dispatch(changePage('page one'));
    }
    return (
        <>
            <MainContentLayout showNavigation={showNavigation}>
                <MainCollectionWrapper>
                    {/* <TitleWrapper>
                        <TitlePageH2>Collection</TitlePageH2>
                    </TitleWrapper> */}
                    {
                        condition &&
                        <CollectionList 
                            collectionData={collectionData}
                            handleCurrentCollection={handleCurrentCollection}
                            handleShowDetail={handleShowDetail}
                            showDetail={showDetail}
                            showNavigation={showNavigation}
                            handleChangePage={handleChangePage}
                        />
                    }
                {
                    collectionData.length !== 0 && showDetail ?
                    <DetailCollection
                        handleChangeLinkPage={handleChangeLinkPage}
                        currentCollection={currentCollection}
                        handleShowDetail={handleShowDetail}
                    />: 
                    <></>
                }
                {
                    currentCollection.length > 0 &&
                    <DeleteButton onClick={() => deletePageCollection(currentCollection.web_id)}>Delete Page</DeleteButton>
                }
                </MainCollectionWrapper>
            </MainContentLayout>
        </>
    )
}