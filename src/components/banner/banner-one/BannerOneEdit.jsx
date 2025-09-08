import { useEffect, useRef, useState } from "react";
import { 
    Banner, BannerBackground, 
    BannerContent, BannerHover, 
    BannerImage, BannerText 
} from "./BannerOneEdit.styled";
import { useDispatch } from "react-redux";
import { changeBannerText } from "../../../features/template-editor/templateContentSlice";

export default function BannerOneEdit({styleData, contentData, handleEditMode, onEdit}){
    const [title, setTitle] = useState(contentData.banner.title);
    const [paragraph, setParagraph] = useState(contentData.banner.paragraph);
    const dispatch = useDispatch();
    const [activeImageBox, setActiveImageBox] = useState(false);
    const [activeBackgroundBox, setActiveBackgroundBox] = useState(false);
    const backgroundRef = useRef();
    const imageRef = useRef();
    // const textRef = useRef();
    // const textRefOne = useRef();
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
            if (imageRef.current && !imageRef.current.contains(e.target)) {
                setActiveImageBox(false);
            }
            // if (textRefOne.current && !textRefOne.current.contains(e.target)) {
            //     setActiveInputOne(false);
            //     console.log('click outside text one');
            // }
        }
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [activeBackgroundBox, activeImageBox]);
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
                    <BannerText 
                        id='bannerText' 
                    >

                        {
                            onEdit ? 
                            <>
                                <textarea 
                                    style={styleData.banner.style.title}
                                    onClick={() => {
                                        handleEditMode({mode: 'Text', type: 'title', component: 'banner'})}
                                    }
                                    type='text' 
                                    value={title}
                                    onChange={(e) => handleChangeTitle(e.target.value)}
                                />
                                <textarea 
                                    style={styleData.banner.style.paragraph}
                                    onClick={() => {
                                        handleEditMode({mode: 'Text', type: 'paragraph', component: 'banner'})}
                                    }
                                    type='text' 
                                    value={paragraph}
                                    onChange={(e) => handleChangeParagraph(e.target.value)}
                                />
                            </> :
                            <>
                                <h1 
                                    style={styleData.banner.style.title}
                                    onClick={() => {
                                        handleEditMode({mode: 'Text', type: 'title', component: 'banner'})}
                                    }
                                >
                                    {title}
                                </h1>
                                <p
                                    style={styleData.banner.style.paragraph}
                                    onClick={() => {
                                        handleEditMode({mode: 'Text', type: 'paragraph', component: 'banner'})}
                                    }
                                >
                                    {paragraph}
                                </p>
                            </>
                        }
                    </BannerText>
                    <BannerImage
                        ref={imageRef}
                        onClick={() => setActiveImageBox(true)}
                        style={activeImageBox ? {boxShadow: '0px 0px 0px 1px blue inset'}: {}}
                    >
                        <img 
                            style={styleData.banner.style.image} 
                            onClick={() => handleEditMode({mode: 'Image', type: 'image', component: 'banner', image: contentData.banner.image})}
                            src={contentData.banner.image} 
                            alt='hero' 
                            // crossOrigin="anonymous"
                            // crossOrigin="anonymous"
                        />
                    </BannerImage> 
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