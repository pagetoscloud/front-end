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

export default function LandingPage(){
    const [detail, setDetail] = useState(false);
    const handleDetail = (e) => {
        setDetail(e)
    }
    return (
        <VerticalLayout>
            {
                detail &&
                <Detail handleDetail={handleDetail} detail={detail}/>
            }
            <Jumbotron handleDetail={handleDetail}/>
            <IntegrationFeature />
            <Banner />
            <TemplateSample />
            <TargetUser />
            <Advantage />
            <QnA />
            <Footer />
        </VerticalLayout>
    )
}