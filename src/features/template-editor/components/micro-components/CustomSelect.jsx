import { useEffect, useRef, useState } from "react";
import { ActiveSelect, CustomSelectContainer, OptionSelect } from "./CustomSelect.styled";
import arrowDown from '../../../../assets/images/arrow-down.png';

export function CustomSelect({value, list, handleChange, handleAddNewCategory}){
    const [show, setShow] = useState(false);
    const boxRef = useRef();
    useEffect(() => {
        function handleClickOutside(e) {
            if (boxRef.current && !boxRef.current.contains(e.target)) {
                setShow(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);
    return (
        <CustomSelectContainer ref={boxRef}>
            <ActiveSelect onClick={() => setShow(true)}>
                <p onClick={() => setShow(true)}>{value}</p>
                <img src={arrowDown} alt="down" />
            </ActiveSelect>
            {
                show &&
                <OptionSelect>
                    {
                        list.map(items => {
                            return (
                                <p 
                                    onClick={() => {
                                        handleChange(items);
                                        setShow(false);
                                    }}
                                    onDoubleClick={() => {
                                        console.log('double click')
                                    }}
                                >{items}</p>
                            )
                        })
                    }
                    <p onClick={handleAddNewCategory}>Add +</p>
                </OptionSelect>
            }
        </CustomSelectContainer>
    )
}