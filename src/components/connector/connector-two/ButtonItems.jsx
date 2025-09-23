import { useEffect, useRef, useState } from "react"
import { ActiveBoxButton, ConnectorButton, DeleteButton } from "./ConnectorTwoEdit.styled";
import closeIcon from '../../../assets/images/close-icon.png';
import { useCustomRef } from "../../../hooks/useCustomRef";
export function ButtonItems({id, index, styleData, name, handleEditMode, handleChangeButtonName, handleDeleteButton}) {
    const [currentName, setCurrentName] = useState(name);
    const handleChangeName = (e) => {
        setCurrentName(e);
        handleChangeButtonName(id, e);
    }
    const {
        refOne, activeOne, setActiveOne,
        // refTwo, activeTwo, setActiveTwo,
        // refThree, activeThree, setActiveThree,
        // refFour, activeFour, setActiveFour,
        // refFive, activeFive, setActiveFive
    } = useCustomRef();
    return (
        <ConnectorButton
            style={{
                backgroundColor: styleData.connector.style.button.background,
                color: styleData.connector.style.button.color,
                borderRadius: styleData.connector.style.button.borderRadius,
                opacity: styleData.connector.style.button.opacity,
            }}
            onClick={() => handleEditMode({mode: 'Button', component: 'connector', buttonIndex: index, id: id})}
            ref={refOne}
        >
            {
                activeOne && 
                <DeleteButton
                    onClick={() => {
                        handleDeleteButton(id);
                    }} 
                >
                    <img src={closeIcon} alt="delete"/>
                </DeleteButton>
            }
            <ActiveBoxButton 
                onClick={() => setActiveOne(true)}
                style={activeOne? {boxShadow: '0px 0px 0px 1px blue inset'}: {}}
            />
            <input type="text"
                style={{
                    color: styleData.connector.style.button.color,
                }}
                value={currentName}
                onChange={(e) => handleChangeName(e.target.value)}
                onClick={() => setActiveOne(true)}
            />
        </ConnectorButton>
    )
}