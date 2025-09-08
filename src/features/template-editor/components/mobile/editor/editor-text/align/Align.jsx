import { AlignContent, AlignItems, AlignWrapper } from "./Align.styled";
import alignLeft from '../../../../../../../assets/images/align-left.png';
import alignCenter from '../../../../../../../assets/images/align-center.png';
import alignRight from '../../../../../../../assets/images/align-right.png';

export default function Align(){
    return (
        <AlignWrapper>
            <AlignContent>
                <AlignItems>
                    <img src={alignLeft} alt="left align" />
                    <p>Left</p>
                </AlignItems>
                <AlignItems>
                    <img src={alignCenter} alt="left align" />
                    <p>Center</p>
                </AlignItems>
                <AlignItems>
                    <img src={alignRight} alt="left align" />
                    <p>Right</p>
                </AlignItems>
            </AlignContent>
        </AlignWrapper>
    )

}