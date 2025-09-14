import { Link } from "react-router-dom";
import { BannerActionButton, BannerContainer, BannerText, BannerWrapper } from "./styles/Banner.styled";
import bannerHero from '../.././../assets/images/product-edit-hero.png';
export default function Banner(){
    return (
        <BannerContainer>
            <BannerWrapper>
                <BannerText>
                    <h2>Mudah Buatnya.</h2>
                    <p>Menampilkan produk secara menarik dengan mudah dan gratis.</p>
                    <BannerActionButton><Link to='/editor/*'>Coba Edit!</Link></BannerActionButton>
                </BannerText>
                <img src={bannerHero} alt="banner hero" />
            </BannerWrapper>
        </BannerContainer>
    )
}