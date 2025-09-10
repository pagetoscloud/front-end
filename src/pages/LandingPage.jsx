import { useState } from "react";
import { 
    IntegrationFeature, Jumbotron,
    Banner, TargetUser, 
    Footer, QnA,
    Advantage,
    Detail
} from "../features/landing-page";
import TemplateSample from "../features/landing-page/components/TemplateSample";
import VerticalLayout from "../layouts/VerticalLayout";
import { templateListData } from "../data/TemplateListData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initialContent } from "../features/template-editor/templateContentSlice";
import { initialStyle } from "../features/template-editor/templateStyleSlice";
import { changePage } from "../features/template-editor/templatePagePositionSlice";
import { initialDataLocally } from "../features/template-editor/templateProductSlice";

export default function LandingPage(){
    const [detail, setDetail] = useState(false);
    const mockTemplate = templateListData[0];
    const handleDetail = (e) => {
        setDetail(e)
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLocalStorage = () => {
        // handleChangeComponents(e);
        dispatch(initialDataLocally(mockTemplate.content.product))
        dispatch(changePage('page three'));
        dispatch({
            ...initialStyle({
                data: mockTemplate.style,
            }),
            meta: {initialData: true}
        });
        dispatch({
            ...initialContent({
                data: mockTemplate.content,
            }),
            meta: {initialData: true}
        });
        const data = {
            templateId: mockTemplate.id,
            style: mockTemplate.style,
            content: mockTemplate.content,
            products: mockTemplate.content.product
        }
        const message = JSON.stringify(data);
        localStorage.setItem('templateEditor', message);
        navigate('/editor/*');
    }
    return (
        <VerticalLayout>
            {
                detail &&
                <Detail handleDetail={handleDetail} detail={detail}/>
            }
            <Jumbotron handleDetail={handleDetail}/>
            <IntegrationFeature handleLocalStorage={handleLocalStorage}/>
            <Banner />
            <TemplateSample />
            <TargetUser />
            <Advantage />
            <QnA />
            <Footer />
        </VerticalLayout>
    )
}