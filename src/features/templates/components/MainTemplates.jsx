import { TitlePageH2 } from "../../../assets/Global.styled";
import { templateListData } from "../../../data/TemplateListData";
import MainContentLayout from "../../../layouts/personal-area-layout/MainContentLayout";
import { MainTemplateContent, MainTemplateWrapper } from "./MainTemplates.styled";
import TemplateList from "./template-list/TemplateList";

export default function MainTemplates({showNavigation, handleShowDetail, handleCurrentDetail}){
    return (
        <MainContentLayout showNavigation={showNavigation}>
            <MainTemplateWrapper>
                <MainTemplateContent>
                    <TitlePageH2>New Template</TitlePageH2>
                    <TemplateList 
                        templateListData={templateListData} 
                        handleShowDetail={handleShowDetail}
                        handleCurrentDetail={handleCurrentDetail}    
                    />
                </MainTemplateContent>
            </MainTemplateWrapper>
        </MainContentLayout>
    )
}