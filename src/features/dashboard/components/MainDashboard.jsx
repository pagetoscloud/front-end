import { useDispatch, useSelector } from "react-redux";
import { TitlePageH2 } from "../../../assets/Global.styled";
import { templateListData } from "../../../data/TemplateListData";
import MainContentLayout from "../../../layouts/personal-area-layout/MainContentLayout";
import Banner from "./banner/Banner";
import CollectionList from "./collection-list/CollectionList";
import { 
    MainDashboardWrapper,
} from "./MainDashboard.styled";
import TemplateList from "./template-list/TemplateList";
import { changePage } from "../../template-editor/templatePagePositionSlice";

export default function MainDashboard({showNavigation, handleCurrentDetail, handleShowDetail, handleLocalStorage}){
    const collectionData = useSelector(state => state.collection);
    const dispatch = useDispatch();
    const handleChangePage = () => {
        dispatch(changePage('page one'));
    }
    return (
        <MainContentLayout showNavigation={showNavigation}>
            <MainDashboardWrapper>
                <Banner />
                <TitlePageH2>New Template</TitlePageH2>
                <TemplateList 
                    templateListData={templateListData} 
                    handleShowDetail={handleShowDetail}
                    handleCurrentDetail={handleCurrentDetail}
                />
                {/* <TitlePageH2>Collection</TitlePageH2> */}
                <CollectionList 
                    collectionData={collectionData} 
                    handleCurrentDetail={handleCurrentDetail}
                    handleLocalStorage={handleLocalStorage}
                    handleChangePage={handleChangePage}
                />
                {/* <TemplateList 
                    templateListData={collectionData}
                /> */}
                </MainDashboardWrapper>
        </MainContentLayout>
    )
}