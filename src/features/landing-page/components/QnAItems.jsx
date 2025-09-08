import { useState } from "react";
import { QnAItemsTitle, QnAItemsWrapper } from "./styles/QnAItems.styled";
import arrowUp from '../../../assets/images/arrow-up.png';
import arrowDown from '../../../assets/images/arrow-down.png';

export default function QnAItems({title, paragraph}){
    const [show, setShow] = useState(false);
    const handleShow = () => {
        if (show){
            setShow(false);
        } else {
            setShow(true);
        }
    }
    return (
        <QnAItemsWrapper onClick={handleShow}>
            <QnAItemsTitle>
                <h6>{title}</h6>
                {
                    show ? <img src={arrowUp} alt="arrow icon up"/> : <img src={arrowDown} alt="arrow icon down"/>
                }
            </QnAItemsTitle>
            {
                show && <p>{paragraph}</p>
            }
        </QnAItemsWrapper>
    )
}