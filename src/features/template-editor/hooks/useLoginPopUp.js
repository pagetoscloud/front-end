import { useState } from "react";
// import { useSelector } from "react-redux";

export function useLoginPopUp(loggedIn) {
    const [showLoginPopUp, setShowLoginPopUp] = useState(false);
    const handleLoginPopUp = () => {
        if (showLoginPopUp){
            if (!loggedIn){
                localStorage.removeItem('unsave-thumbnail-progress');
                localStorage.removeItem('unsave-template-progress');
            }
            setShowLoginPopUp(false);
        } else {
            setShowLoginPopUp(true);
        }
    };

    return {
        showLoginPopUp,
        handleLoginPopUp
    };
}