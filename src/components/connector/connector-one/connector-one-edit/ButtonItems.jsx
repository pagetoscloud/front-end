import { useEffect, useRef, useState } from "react"
import { ActiveBoxButton, ConnectorButton } from "./ConnectorOneEdit.styled";

export function ButtonItems({id, index, styleData, name, handleEditMode, handleChangeButtonName, handleDeleteButton}) {
    const [currentName, setCurrentName] = useState(name);
    const handleChangeName = (e) => {
        setCurrentName(e);
        handleChangeButtonName(id, e);
    }
    const [activeBox, setActiveBox] = useState(false);
    const buttonRef = useRef(null);
    const handleActiveBox = (e) => {    
        if (activeBox) {
            setActiveBox(false);
        } else {
            setActiveBox(true);
        }
    }
    // console.log(activeBox);
    useEffect(() => {
        setCurrentName(name);
    }, [name])
    useEffect(() => {
        function handleClickOutside(e) {
            if (buttonRef.current && !buttonRef.current.contains(e.target)) {
                setActiveBox(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [activeBox, buttonRef]);
    return (
        <ConnectorButton
            style={{
                backgroundColor: styleData.connector.style.button.background,
                color: styleData.connector.style.button.color,
                borderRadius: styleData.connector.style.button.borderRadius,
                opacity: styleData.connector.style.button.opacity,
            }}
            onClick={() => handleEditMode({mode: 'Button', component: 'connector', buttonIndex: index, id: id})}
        >
            <ActiveBoxButton 
                ref={buttonRef}
                onClick={() => handleActiveBox()}
                style={activeBox ? {boxShadow: '0px 0px 0px 1px blue inset'}: {}}
            />
            {
                activeBox && 
                <p 
                    onClick={() => {
                        handleDeleteButton(id);
                        console.log('delete', id, name);
                    }} 
                    style={{position: 'absolute', left: -20}}
                >X</p>
            }
            {/* <p style={{position: 'absolute', right: -20}}>X</p> */}
            <input type="text"
                style={{
                    color: styleData.connector.style.button.color,
                }}
                value={currentName}
                onChange={(e) => handleChangeName(e.target.value)}
                onClick={() => handleActiveBox()}
            />
        </ConnectorButton>
    )
}