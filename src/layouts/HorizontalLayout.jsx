import { HorizontalLayoutWrapper } from "./HorizontalLayout.styled";


export default function HorizontalLayout({children}){
    return (
        <HorizontalLayoutWrapper>
            {children}
        </HorizontalLayoutWrapper>
    )
}