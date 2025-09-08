import { useEffect, useState } from "react";
import { HeaderTextLogo, HeaderWrapper } from "./HeaderOne.styled";
import { useDispatch } from "react-redux";
import { changeLogoText } from "../../../features/template-editor/templateContentSlice";

export default function HeaderOne({handleEditMode, styleData, contentData, mode}){
    const [textLogo, setTextLogo] = useState(contentData.header.logo.text);
    const dispatch = useDispatch();
    const handleChangeLogoText = (e) => {
        setTextLogo(e);
        dispatch(changeLogoText(e));
    }
    useEffect(() => {
        setTextLogo(contentData.header.logo.text);
    }, [contentData]);
    return (
        <HeaderWrapper>
            <HeaderTextLogo>
                {
                    mode === 'edit' ?
                    <textarea
                            spellCheck="false"
                            value={textLogo}
                            style={styleData.header.style.title}
                            onChange={(e) => handleChangeLogoText(e.target.value)}
                            onClick={() => handleEditMode({mode: 'Text', type: 'title', component: 'header'})}
                    />:
                    <h1 style={styleData.header.style.title} >{textLogo}</h1>
                }
            </HeaderTextLogo>
        </HeaderWrapper>
    )
}