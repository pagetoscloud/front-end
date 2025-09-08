import { ContainerLayout } from "./VerticalLayout.styled";

export default function VerticalLayout({children}){
    return (
        <ContainerLayout>
            {
                children
            }
        </ContainerLayout>
    )
}