import { ButtonWrapper, CloseButton, ContentWrapper, DetailHeaderDesktop, DetailTemplateBox, DetailTemplateWrapper, EditButton, ImageTemplate, PreviewButton, ScrollWrapper, TextDetail } from "./DetailTemplate.styled";
import closeIcon from '../../../../assets/images/white-close-icon.png';
import { useNavigate } from "react-router-dom";
export default function DetailTemplate({currentDetail, handleShowDetail, handleLocalStorage}){
    const navigate = useNavigate();
    return (
        <DetailTemplateWrapper>
            <DetailTemplateBox>
                <CloseButton onClick={handleShowDetail}>
                    <img src={closeIcon} alt="close icon" />
                </CloseButton>
                <ScrollWrapper>
                    <ContentWrapper>
                        <DetailHeaderDesktop>
                            <TextDetail>
                                <h4>{currentDetail.name}</h4>
                                <p>#{currentDetail.type}</p>
                            </TextDetail>
                            <ButtonWrapper>
                                <PreviewButton onClick={() => {
                                    handleLocalStorage();
                                    navigate('/preview')
                                }}>
                                    <p>Preview</p>
                                </PreviewButton>
                                <EditButton onClick={() => {
                                    handleLocalStorage();
                                    navigate('/editor/*')
                                }}>
                                    <p>Edit</p>
                                </EditButton>
                            </ButtonWrapper>
                        </DetailHeaderDesktop>
                        <ImageTemplate>
                            <img src={currentDetail.image} alt='template detail' />
                        </ImageTemplate>
                    </ContentWrapper>
                </ScrollWrapper>
            </DetailTemplateBox>
        </DetailTemplateWrapper>
    )
}