import { TemplatePreviewLayoutWrapper } from "./TemplatePreviewLayout.styled";

export default function TemplatePreviewLayout({children}){
    return (
        <TemplatePreviewLayoutWrapper>
            {
                children
            }
        </TemplatePreviewLayoutWrapper>
    )
}