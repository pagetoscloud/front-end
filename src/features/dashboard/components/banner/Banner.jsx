import editableIcon from '../../../../assets/images/editable-icon.png';
import menuDisplay from '../../../../assets/images/menu-display.png';
import { BannerText, BannerWrapper, ImageLeft, ImageRight } from "./Banner.styled";
export default function Banner(){
    return (
        <BannerWrapper>
            <ImageLeft>
                <img src={editableIcon} alt="editable icon" />
            </ImageLeft>
            <BannerText>
                <h2>Buat Produk Jadi Lebih Menarik.</h2>
                <p>Buat sekarang juga.</p>
            </BannerText>
            <ImageRight>
                <img src={menuDisplay} alt="editable icon" />
            </ImageRight>
        </BannerWrapper>
    )
}