import { useNavigate } from "react-router-dom";
import { 
        CloseButton, ConnectorButton, 
        ConnectorButtonWrapper, ConnectorContentWrapper, 
        ConnectorOneBackground, ConnectorOnePreviewBox, 
        ConnectorOnePreviewContainer     
} from "./ConnectorOnePreview.styled";
import closeIcon from '../../../../assets/images/close-icon.png';

export function ConnectorOnePreview({page, styleData, contentData, handleChangePage}) {
    const navigate = useNavigate();
    return (
        <>
        {
            page === 'page three' ? 
            <ConnectorOnePreviewContainer>
                {/* <p 
                    style={{position: 'absolute', top: 20, zIndex: 20}}
                    >X</p> */}
                <ConnectorOnePreviewBox>
                    <div style={{position: 'absolute', zIndex: 10, top: 10, right: 10, cursor: 'pointer'}} onClick={() => handleChangePage('page one')}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height={30}
                            width={30}
                            viewBox="0 0 24 24"
                            fill={styleData.connector.style.button.background}
                        >
                            <title>close</title>
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 1 0-1.41 1.42L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
                        </svg>
                    </div>
                    {/* <CloseButton
                        onClick={() => handleChangePage('page one')}
                    >
                        <img src={closeIcon} alt="close icon" />
                    </CloseButton> */}
                    <ConnectorOneBackground 
                        style={styleData.connector.style.background}
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