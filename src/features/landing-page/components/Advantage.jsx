import { 
    AdvantageContainer, AdvantageItemsImage, 
    AdvantageItemsText, AdvantageItemsTextParagraph, 
    AdvantageItemsTextTitle, AdvantageItemsTextWrapper, 
    AdvantageItemsWrapper, AdvantageTitle 
} from "./styles/Advantage.styled";
import linkMockup from '../../../assets/images/link-mockup.png';
import qrCodeScan from '../../../assets/images/qr-code-scan.png';
export default function Advantage(){
    return (
        <AdvantageContainer>
            <AdvantageTitle>Banyak Manfaatnya.</AdvantageTitle>
            <AdvantageItemsWrapper>
                <AdvantageItemsImage>
                    <img src={linkMockup} alt='link mockup' />
                </AdvantageItemsImage>
                <AdvantageItemsTextWrapper>
                    <AdvantageItemsText>
                        <AdvantageItemsTextTitle>
                            <h6>1</h6>
                            <h5>Informasi Produk.</h5>
                        </AdvantageItemsTextTitle>
                        <AdvantageItemsTextParagraph>
                            <p>Link dapat diletakan di berbagai media sosial untuk memberikan informasi tentang produk.</p>
                        </AdvantageItemsTextParagraph>
                    </AdvantageItemsText>
                    <AdvantageItemsText>
                        <AdvantageItemsTextTitle>
                            <h6>2</h6>
                            <h5>Link Iklan Online.</h5>
                        </AdvantageItemsTextTitle>
                        <AdvantageItemsTextParagraph>
                            <p>Link dapat diletakan di iklan online untuk memberi informasi lebih lanjut mengenai produk dalam iklan tersebut.</p>
                        </AdvantageItemsTextParagraph>
                    </AdvantageItemsText>
                </AdvantageItemsTextWrapper>
                <AdvantageItemsImage>
                    <img src={qrCodeScan} alt='qr code' />
                </AdvantageItemsImage>
                <AdvantageItemsTextWrapper>
                    <AdvantageItemsText>
                        <AdvantageItemsTextTitle>
                            <h6>3</h6>
                            <h5>Menu Online.</h5>
                        </AdvantageItemsTextTitle>
                        <AdvantageItemsTextParagraph>
                            <p>QR Code dapat diletakan di meja pelanggan sebagai pengganti menu biasa. Pelanggan akan scan QR Code lalu terhubung ke halaman menu yang telah dibuat sebelumnya.</p>
                        </AdvantageItemsTextParagraph>
                    </AdvantageItemsText>
                    <AdvantageItemsText>
                        <AdvantageItemsTextTitle>
                            <h6>4</h6>
                            <h5>Promosi Offline.</h5>
                        </AdvantageItemsTextTitle>
                        <AdvantageItemsTextParagraph>
                            <p>QR Code dapat diletakan di media cetak sebagai metode promosi.</p>
                        </AdvantageItemsTextParagraph>
                    </AdvantageItemsText>
                </AdvantageItemsTextWrapper>
            </AdvantageItemsWrapper>
        </AdvantageContainer>
    )
}