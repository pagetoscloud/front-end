import { useSelector } from "react-redux";
import { 
    Header, Mockup,
    TemplatePreviewLayout, 
} from "../features/template-preview";
import { useState } from "react";
import { templateListData } from "../data/TemplateListData";


export default function TemplatePreview(){
    const styleData = useSelector(state => state.templateStyle.current);
    const contentData = useSelector(state => state.templateContent);
    const templateData = JSON.parse(localStorage.getItem('templateEditor'));
    const components = templateListData.filter(temp => temp.id === templateData.templateId)[0];
    const handleLocalStorage = () => {
        const data = {
            templateId: components.id,
            style: styleData,
            content: contentData
        }
        const message = JSON.stringify(data);
        if (components.length !== 0){
            localStorage.setItem('templateEditor', message);
        }
    }
    const [screenMode, setScreenMode] = useState('mobile');
    const handleScreenMode = (e) => {
        if (e === 'desktop'){
            setScreenMode('desktop');
        } else {
            setScreenMode('mobile');
        }
    }
    const handleFullScreen = () => {
        if (screenMode === 'mobile') {
            setScreenMode('full-mobile');
        } else if (screenMode === 'full-mobile'){
            setScreenMode('mobile');
        } else if (screenMode === 'desktop') {
            setScreenMode('full-desktop');
        } else if (screenMode === 'full-desktop'){
            setScreenMode('desktop');
        }
    }
    return (
        <TemplatePreviewLayout>
            <Header 
                handleScreenMode={handleScreenMode}
                screenMode={screenMode}
                handleFullScreen={handleFullScreen}
                handleLocalStorage={handleLocalStorage}
            />
            <Mockup 
                screenMode={screenMode}
                styleData={styleData}
                contentData={contentData}
            />
        </TemplatePreviewLayout>
    )
}