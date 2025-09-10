
import goFood from '../../../assets/images/gofood.png';
import grabFood from '../../../assets/images/grabfood.png';
import shopeeFood from '../../../assets/images/shopee.png';
import tokopedia from '../../../assets/images/tokopedia.png';
import { ActionButtonSolid } from "./styles/Global.styled";
import { 
    IntegrationContainer, 
    IntegrationItems, 
    IntegrationItemsIcon, 
    IntegrationItemsText, 
    IntegrationListWrapper,
    TextContent
} from './styles/IntegrationFeature.styled';

export default function IntegrationFeature({handleLocalStorage}){
    return (
        <IntegrationContainer>
            <IntegrationListWrapper>
                <IntegrationItems>
                    <IntegrationItemsIcon>
                        <img src={goFood} alt="gofood " />
                    </IntegrationItemsIcon>
                    <IntegrationItemsText>
                        <h4>GoFood</h4>
                        <p>Hubungkan dengan apliksi terkemukan di Indonesia saat ini.</p>
                    </IntegrationItemsText>
                </IntegrationItems>
                <IntegrationItems>
                    <IntegrationItemsIcon>
                        <img src={grabFood} alt="grabfood" />
                    </IntegrationItemsIcon>
                    <IntegrationItemsText>
                        <h4>GrabFood</h4>
                        <p>Menghubungkan akses pembelian untuk meningkatkan penjualan.</p>
                    </IntegrationItemsText>
                </IntegrationItems>                <IntegrationItems>
                    <IntegrationItemsIcon>
                        <img src={shopeeFood} alt="shopeefood" />
                    </IntegrationItemsIcon>
                    <IntegrationItemsText>
                        <h4>ShopeeFood</h4>
                        <p>Akses yang mudah ke perusahaan yang sedang banyak promo.</p>
                    </IntegrationItemsText>
                </IntegrationItems>                <IntegrationItems>
                    <IntegrationItemsIcon>
                        <img src={tokopedia} alt="tokopedia" />
                    </IntegrationItemsIcon>
                    <IntegrationItemsText>
                        <h4>Tokopedia</h4>
                        <p>Berikan akses pembelian yang mudah.</p>
                    </IntegrationItemsText>
                </IntegrationItems>
            </IntegrationListWrapper>
            <TextContent>
                <h2>Terhubung Dengan berbagai Platform lain.</h2>
                <p>Hubungkan semua platform populer yang kamu mau.</p>
                <ActionButtonSolid onClick={handleLocalStorage}>Hubungkan</ActionButtonSolid>
            </TextContent>
        </IntegrationContainer>
    )
}