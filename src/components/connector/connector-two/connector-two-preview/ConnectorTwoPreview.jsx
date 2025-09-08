import { useNavigate } from "react-router-dom";
import { 
    CloseButton, ConnectorButton, 
    ConnectorButtonWrapper, ConnectorContentWrapper, 
    ConnectorOneBackground, ConnectorOnePreviewBox, 
    ConnectorOnePreviewContainer 
} from "./ConnectorTwoPreview.styled";

import closeIcon from '../../../../assets/images/close-icon.png';

export function ConnectorTwoPreview({page, styleData, contentData, handleChangePage}) {
    const navigate = useNavigate();
    console.log('connector page', page);
    return (
        <>
        {
            page === 'page three' ? 
            <ConnectorOnePreviewContainer>
                {/* <p 
                    style={{position: 'absolute', top: 20, zIndex: 20}}
                    >X</p> */}
                <ConnectorOnePreviewBox>
                    <CloseButton
                        onClick={() => handleChangePage('page one')}
                    >
                        <img src={closeIcon} alt="close icon" />
                    </CloseButton>
                    <ConnectorOneBackground 
                        style={{borderRadius: `${styleData.connector.style.background.borderRadius}px ${styleData.connector.style.background.borderRadius}px 0 0` }}

                    />
                    <ConnectorContentWrapper>
                        <h2 style={styleData.connector.style.title}>{contentData.connector.title}</h2>
                        <p style={styleData.connector.style.subtitle}>{contentData.connector.subtitle}.</p>
                        <p style={styleData.connector.style.paragraph}>{contentData.connector.paragraph}</p>
                    </ConnectorContentWrapper>
                    <ConnectorButtonWrapper>
                        {
                            contentData.connector.buttonList.map((button, index) => (
                                <ConnectorButton 
                                    style={{
                                        backgroundColor: styleData.connector.style.button.background,
                                        color: styleData.connector.style.button.color,
                                        borderRadius: styleData.connector.style.button.borderRadius,
                                    }}
                                    key={index} 
                                    onClick={() => {
                                        if (button.type === 'link') {
                                            window.open(button.link, '_blank');
                                        } else if (button.type === 'change page') {
                                            handleChangePage(button.page);
                                            // navigate(`/${button.page}`);
                                        } else if (button.type === 'back'){
                                            navigate(-1);
                                        }
                                    }}
                                >
                                    {button.name}
                                </ConnectorButton>
                            ))
                        }
                        {/* <ConnectorButton>Tokopedia</ConnectorButton>
                        <ConnectorButton>Shopee</ConnectorButton>
                        <ConnectorButton>GoFood</ConnectorButton>
                        <ConnectorButton>GrabFood</ConnectorButton> */}
                    </ConnectorButtonWrapper>
                </ConnectorOnePreviewBox>
            </ConnectorOnePreviewContainer> 
            : 
            <></>
        }
        </>
    )
}