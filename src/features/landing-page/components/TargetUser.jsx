import { 
    IconItemsDark, IconItemsLight, 
    IconListWrapper, TargetUserContainer, 
    TargetUserText, TargetUserWrapper 
} from "./styles/TargetUser.styled";
import croissant from '../../../assets/images/croissant.png';
import onlineShop from '../../../assets/images/online-store.png';
import restaurant from '../../../assets/images/restaurant.png';
import bento from '../../../assets/images/bento.png';
import { ActionButtonSolid } from "./styles/Global.styled";
import { Link } from "react-router-dom";
export default function TargetUser(){
    return (
        <TargetUserContainer>
            <TargetUserWrapper>
                <TargetUserText>
                    <h2>Dibuat Khusus Untuk UMKM Indonesia.</h2>
                    <p>Desain menyesuaikan dengan UMKM Indonesia.</p>
                    <ActionButtonSolid><Link to={'/template'}>Lihat Desain</Link></ActionButtonSolid>
                </TargetUserText>
                <IconListWrapper>
                    <IconItemsDark>
                        <img src={croissant} alt="croissant" />
                        <h6>Kafe</h6>
                    </IconItemsDark>
                    <IconItemsLight>
                        <img src={restaurant} alt="restaurant" />
                        <h6>Restoran</h6>
                    </IconItemsLight>
                    <IconItemsLight>
                        <img src={bento} alt="bento" />
                        <h6>Katering</h6>
                    </IconItemsLight>
                    <IconItemsDark>
                        <img src={onlineShop} alt="online shop" />
                        <h6>Toko Online</h6>
                    </IconItemsDark>
                </IconListWrapper>
            </TargetUserWrapper>
        </TargetUserContainer>
    )

}