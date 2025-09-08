import { Banner, BannerBackground, BannerContent,  BannerText } from "./BannerTwoPreview.styled";

export default function BannerTwoPreview({styleData, contentData}){
    let title = contentData.banner.title;
    const paragraph = contentData.banner.paragraph;
    function splitByNewline(text) {
        return text.split(/\r?\n/);
    }
    function formatTextWithNewlines(text) {
        const lines = splitByNewline(text);
        return (
            <h1 style={styleData.banner.style.title}>
                {
                    lines.map((line, index) => (
                        <span key={index} style={styleData.banner.style.title}>
                            {line}
                            <br />
                        </span>
                    ))
                }
            </h1>
        )
        
    }
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
                    {/* <h1 style={styleData.banner.style.title}>{formatTextWithNewlines(title)}</h1> */}
                    {
                        formatTextWithNewlines(title)
                    }
                    <p style={styleData.banner.style.paragraph}>{paragraph}</p>
                </BannerText>
                {/* <BannerImage>
                    <img 
                        style={styleData.banner.style.image} 
                        src={contentData.banner.image} 
                        alt='hero' 
                    />
                </BannerImage> */}
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