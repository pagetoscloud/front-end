// import { useState } from "react";
import { useState } from "react";
import { TitlePageH2 } from "../../../assets/Global.styled";
import { collectionListData } from "../../../data/CollectionListData";
import MainContentLayout from "../../../layouts/personal-area-layout/MainContentLayout";
import { MainAnalyticsContent, MainAnalyticsWrapper, MainChartWrapper } from "./MainAnalytics.styled";
import BigChart from "./big-chart/BigChart";
import CollectionList from './collection-list/CollectionList';
import DetailVisitor from "./detail-visitor/DetailVisitor";
import SmallChart from "./small-chart/SmallChart";

export default function MainAnalytics({showNavigation, collectionList, handleCurrentCollection, analyticsData}){
    const [currentCollection, setCurrentCollection] = useState(collectionListData[0]);
    const handleCurrentCollectionMain = (e) => {
        setCurrentCollection(e);
        handleCurrentCollection(e);
    }
    return (
        <MainContentLayout showNavigation={showNavigation}>
            <MainAnalyticsWrapper>
                <MainAnalyticsContent>
                    <TitlePageH2>Analytics</TitlePageH2>
                    {
                        collectionList && currentCollection ?
                        <CollectionList 
                            collectionListData={collectionList}
                            handleCurrentCollection={handleCurrentCollectionMain}
                        /> : 
                        <p>Loading..</p>
                    }
                    <TitlePageH2>Visitor Statistic</TitlePageH2>
                    {
                        analyticsData && currentCollection &&
                        <MainChartWrapper>
                            <SmallChart 
                                currentCollection={currentCollection}
                                analyticsData={analyticsData}
                            />
                            <BigChart 
                                currentCollection={currentCollection}
                                analyticsData={analyticsData}
                            />
                        </MainChartWrapper>
                    }
                    <DetailVisitor 
                            analyticsData={analyticsData}
                    />
                </MainAnalyticsContent>
            </MainAnalyticsWrapper>
        </MainContentLayout>
    )
}