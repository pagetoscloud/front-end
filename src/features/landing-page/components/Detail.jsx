import { DetailContainer, ExitButton, TextContent } from "./styles/Detail.styled";

export default function Detail({handleDetail, detail}){
    const product = 'Our product is digital page that will help business owner to show their product. Connect to several e-commerce and social media.';
    const price = 'Our price is free for now.';
    const about = 'Our company from Indonesia. That why we create design that will fit with business owner need.'
    return (
        <DetailContainer>
            <ExitButton onClick={() => handleDetail(false)}>
                <p>X</p>
            </ExitButton>
            <TextContent>
                {
                    detail === 'product' &&
                    <p>{product}</p>
                }
                {
                    detail === 'price' &&
                    <p>{price}</p>
                }
                {
                    detail === 'about' &&
                    <p>{about}</p>
                }
            </TextContent>
        </DetailContainer>
    )
}