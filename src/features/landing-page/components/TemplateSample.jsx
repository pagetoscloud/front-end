import { ColumnFive, ColumnFour, ColumnOne, ColumnThree, ColumnTwo, TemplateSampleContainer, TemplateSampleText } from "./styles/TemplateSample.styled";
// import imageOne from '../../../assets/images/mawar-merah-muda-1.png';
// import imageTwo from '../../../assets/images/mawar-merah-muda-2.png';
import imageThree from '../../../assets/images/belimbing-1.png';
import imageFour from '../../../assets/images/zebra-pelari-1.png';
import imageFive from '../../../assets/images/zebra-pelari-2.png';
import imageSix from '../../../assets/images/melon-manis-1.png';
import imageSeven from '../../../assets/images/zebra-pelari-2.png';
import imageEight from '../../../assets/images/matahari-penerang-1.png';
import kingKebabMenu from '../../../assets/images/king-kebab-main-menu.png';
import greenFoodDetail from '../../../assets/images/greenfood-detail-items.png'

export default function TemplateSample(){
    return (
        <TemplateSampleContainer>
            <TemplateSampleText>
                <h6>Pilihan Desain Beragam</h6>
            </TemplateSampleText>
            <ColumnOne>
                <img src={greenFoodDetail} alt="template one" />
            </ColumnOne>
            <ColumnTwo>
                <img src={imageThree} alt="template two" />
                <img src={kingKebabMenu} alt="template three" />
            </ColumnTwo>
            <ColumnThree>
                <img src={imageFour} alt="template four" />
                <img src={imageFive} alt="template five" />
            </ColumnThree>
            <ColumnFour>
                <img src={imageSix} alt="template six" />
                <img src={imageSeven} alt="template seven" />
            </ColumnFour>
            <ColumnFive>
                <img src={imageEight} alt="template eight" />
            </ColumnFive>
        </TemplateSampleContainer>
    )
}