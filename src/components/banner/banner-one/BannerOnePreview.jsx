import { Banner, BannerBackground, BannerContent, BannerImage, BannerText } from "./BannerOnePreview.styled";

export default function BannerOnePreview({styleData, contentData}){
    const title = contentData.banner.title;
    const paragraph = contentData.banner.paragraph;
    return (
        <Banner>
            <BannerContent
                style={{
                    border: styleData.banner.style.background.border,
                    borderRadius: styleData.banner.style.background.borderRadius,
                    boxShadow: styleData.banner.style.background.boxShadow,
                }}
            >
                <BannerText>
                    <h1 style={styleData.banner.style.title}>{title}</h1>
                    <p style={styleData.banner.style.paragraph}>{paragraph}</p>
                </BannerText>
                <BannerImage>
                    <img 
                        style={styleData.banner.style.image} 
                        src={contentData.banner.image} 
                        alt='hero' 
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