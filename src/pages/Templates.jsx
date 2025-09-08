import { useState } from "react";
import { PersonalAreaHeader, PersonalAreaNavigation } from "../components";
import HorizontalLayout from "../layouts/HorizontalLayout";
import VerticalLayout from "../layouts/VerticalLayout";
import { DetailTemplate, MainTemplate } from "../features/templates";
import { useDispatch } from "react-redux";
import { initialStyle } from "../features/template-editor/templateStyleSlice";
import { initialContent } from "../features/template-editor/templateContentSlice";
import { initialDataLocally } from "../features/template-editor/templateProductSlice";

export default function Templates(){
    const [showNavigation, setShowNavigation] = useState(true);
    const [currentDetail, setCurrentDetail] = useState({});
    const [showDetail, setShowDetail] = useState(false);
    const dispatch = useDispatch();
    const handleLocalStorage = () => {
        dispatch(initialDataLocally(currentDetail.content.product));
        dispatch(initialStyle({data: currentDetail.style}));
        dispatch(initialContent({data: currentDetail.content}));
        const data = {
            templateId: currentDetail.id,
            style: currentDetail.style,
            content: currentDetail.content,
            products: currentDetail.content.product
        }
        const message = JSON.stringify(data);
        if (currentDetail){
            localStorage.setItem('templateEditor', message);
        }
    }
    const handleShowNavigation = () => {
        if (showNavigation){
            setShowNavigation(false);
        } else {
            setShowNavigation(true);
        }
    }
    const handleCurrentDetail = (e) => {
        setCurrentDetail(e);
    }
    const handleShowDetail = () => {
        if (showDetail){
            setShowDetail(false);
        } else {
            setShowDetail(true);
        }
    }
    return (
        <VerticalLayout>
            {
                showDetail &&
                <DetailTemplate 
                    currentDetail={currentDetail} 
                    handleShowDetail={handleShowDetail}
                    handleLocalStorage={handleLocalStorage}
                />

            }
            <PersonalAreaHeader 
                handleShowNavigation={handleShowNavigation}
            />
            <HorizontalLayout>
                {
                    showNavigation &&
                    <PersonalAreaNavigation currentPage={'Template'} />
                }
                <MainTemplate 
                    showNavigation={showNavigation}
                    handleCurrentDetail={handleCurrentDetail}
                    handleShowDetail={handleShowDetail}
                />
            </HorizontalLayout>
        </VerticalLayout>
    )
}