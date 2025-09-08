import { useEffect, useRef, useState } from "react";

export function useCustomRef(){
    const refOne = useRef(null);
    const refTwo = useRef(null);
    const refThree = useRef(null);
    const refFour = useRef(null);
    const refFive = useRef(null);
    const [activeOne , setActiveOne] = useState(false);
    const [activeTwo , setActiveTwo] = useState(false);
    const [activeThree , setActiveThree] = useState(false);
    const [activeFour , setActiveFour] = useState(false);
    const [activeFive , setActiveFive] = useState(false);
    useEffect(() => {
        function handleClickOutside(e) {
            if (refOne.current && !refOne.current.contains(e.target)) {
                setActiveOne(false);
            }
            if (refTwo.current && !refTwo.current.contains(e.target)) {
                setActiveTwo(false);
            }
            if (refThree.current && !refThree.current.contains(e.target)) {
                setActiveThree(false);
            }
            if (refFour.current && !refFour.current.contains(e.target)) {
                setActiveFour(false);
            }
            if (refFive.current && !refFive.current.contains(e.target)) {
                setActiveFive(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);
    return {
        refOne, activeOne, setActiveOne,
        refTwo, activeTwo, setActiveTwo,
        refThree, activeThree, setActiveThree,
        refFour, activeFour, setActiveFour,
        refFive, activeFive, setActiveFive
    };
}