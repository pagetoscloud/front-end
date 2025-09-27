import { AlignContent, AlignItems, AlignWrapper } from "./Align.styled";
import leftAlign from '../../../../../../../assets/images/align-left.png';
import centerAlign from '../../../../../../../assets/images/align-center.png';
import rightAlign from '../../../../../../../assets/images/align-right.png';

const textAlignList = [
    {
        id: 1,
        name: 'Left',
        icon: leftAlign
    },
    {
        id: 2,
        name: 'Center',
        icon: centerAlign
    },
    {
        id: 3,
        name: 'Right',
        icon: rightAlign
    }
]


export default function Align({textAlign, handleChangeTextAlign}){
    return (
        <AlignWrapper>
            <AlignContent>
                {/* <AlignItems>
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
                </AlignItems> */}
                {
                    textAlignList.map(item => {
                        return (
                            <AlignItems key={item.id} style={textAlign === item.name ? {boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.4) inset'} : {}}>
                                <img
                                    onClick={() => handleChangeTextAlign(item.name)}
                                    src={item.icon} 
                                    alt={item.name}
                                />
                            </AlignItems>
                        )
                    })
                }
            </AlignContent>
        </AlignWrapper>
    )

}