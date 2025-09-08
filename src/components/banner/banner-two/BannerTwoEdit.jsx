import { useEffect, useRef, useState } from "react";
import { 
    Banner, BannerBackground, 
    BannerContent, BannerHover, 
    // BannerImage,
    BannerText 
} from "./BannerTwoEdit.styled";
import { useDispatch } from "react-redux";
import { changeBannerText } from "../../../features/template-editor/templateContentSlice";

export default function BannerTwoEdit({styleData, contentData, handleEditMode}){
    const [title, setTitle] = useState(contentData.banner.title);
    const [paragraph, setParagraph] = useState(contentData.banner.paragraph);
    const dispatch = useDispatch();
    // const [activeImageBox, setActiveImageBox] = useState(false);
    const [activeBackgroundBox, setActiveBackgroundBox] = useState(false);
    const backgroundRef = useRef();
    // const imageRef = useRef();
    const handleChangeTitle = (e) => {
        setTitle(e);
        dispatch(changeBannerText({type: 'title', value: e}));
    }
    const handleChangeParagraph = (e) => {
        setParagraph(e);
        dispatch(changeBannerText({type: 'paragraph', value: e}));
    }
    useEffect(() => {
        setTitle(contentData.banner.title);
        setParagraph(contentData.banner.paragraph);
    }, [contentData]);
        useEffect(() => {
            function handleClickOutside(e) {
                if (backgroundRef.current && !backgroundRef.current.contains(e.target)) {
                    setActiveBackgroundBox(false);
                }
                // if (imageRef.current && !imageRef.current.contains(e.target)) {
                //     setActiveImageBox(false);
                // }
            }
            document.addEventListener("click", handleClickOutside);
            return () => document.removeEventListener("click", handleClickOutside);
        }, [activeBackgroundBox]);
    return (
            <Banner>
                <BannerHover
                    ref={backgroundRef}
                    style={activeBackgroundBox ? {boxShadow: '0px 0px 0px 1px blue inset'}: {}}
                    onClick={() => {
                        setActiveBackgroundBox(true);
                        handleEditMode({mode: 'Background', type: 'background', component: 'banner'})}
                    }
                /> 

                <BannerContent
                    style={{
                        border: styleData.banner.style.background.border,
                        borderRadius: styleData.banner.style.background.borderRadius,
                        boxShadow: styleData.banner.style.background.boxShadow,
                    }}
                >
                    <BannerText>
                        <>
                            <textarea 
                                style={styleData.banner.style.title}
                                onClick={() => handleEditMode({mode: 'Text', type: 'title', component: 'banner'})}
                                type='text' 
                                value={title}
                                onChange={(e) => handleChangeTitle(e.target.value)}
                            />
                            <textarea 
                                style={styleData.banner.style.paragraph}
                                onClick={() => handleEditMode({mode: 'Text', type: 'paragraph', component: 'banner'})}
                                type='text' 
                                value={paragraph}
                                onChange={(e) => handleChangeParagraph(e.target.value)}
                            />
                        </> 
                    </BannerText>
                    {/* <BannerImage
                        ref={imageRef}
                        onClick={() => setActiveImageBox(true)}
                        style={activeImageBox ? {boxShadow: '0px 0px 0px 1px blue inset'}: {}}
                    >
                        <img 
                            style={styleData.banner.style.image} 
                            onClick={() => handleEditMode({mode: 'Image', type: 'image', component: 'banner', image: contentData.banner.image})}
                            src={contentData.banner.image} 
                            alt='hero' 
                        />
                    </BannerImage>  */}
                    <BannerBackground
                        style={{
                            background: styleData.banner.style.background.background,
                            opacity: styleData.banner.style.background.opacity,
                            filter: styleData.banner.style.background.filter,
                            backdropFilter: styleData.banner.style.background.backdropFilter,
                        }}
                    />
                </BannerContent>
            </Banner>
    )
}