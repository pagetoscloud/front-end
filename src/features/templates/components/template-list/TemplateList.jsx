import { TemplateListHorizontalScroll, TemplateListWrapper, TemplateThumbnail } from "./TemplateList.styled";
export default function TemplateList({templateListData, handleCurrentDetail, handleShowDetail}){
    return (
        <TemplateListWrapper>
            <TemplateListHorizontalScroll>
            {
                templateListData.map((list, index) => {
                    return (
                        <TemplateThumbnail
                            key={`${index}-template-list`}
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
            </TemplateListHorizontalScroll>
        </TemplateListWrapper>
    )
}
