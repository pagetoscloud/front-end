import React, { useEffect, useState } from "react";
import { 
    ActionButton,
    ActionButtonIcon,
    ActionButtonText,
    ActionButtonWrapper,
    ActionText, DetailCollectionWrapper, 
    HorizontalWrapper, LabelText, 
    // Line, 
    // DetailContent, 
    // DetailHeader, 
    // DetailScroll, 
    LinkEdit, 
    QrCode, 
    SquareWrapper
} from "./DetailCollection.styled";

import copyIcon from '../../../../assets/images/copy-icon.png';
import linkIcon from '../../../../assets/images/link-icon.png';
import uploadIcon from '../../../../assets/images/link-icon.png';
import whatsappIcon from '../../../../assets/images/whatsapp.png';
import facebookIcon from '../../../../assets/images/facebook.png';
import html2canvas from "html2canvas";
// import rightArrow from '../../../../assets/images/right-arrow.png';

export default function DetailCollection({currentCollection, handleShowDetail, handleChangeLinkPage}){
    // const [linkPage, setLinkPage] = useState(currentCollection ? currentCollection.link : '');
    const pageName = currentCollection ? currentCollection.name : 'infork';
    const ToCaptureRef = React.useRef();
    const [link, setLink] = useState('https://infork.com/'+ currentCollection.link);
    const [edit, setEdit] = useState(false);
    const handleClickLink = () => {
        const inputLink = document.getElementById('inputLink');
        const linkButton = document.getElementById('linkButton');
        if (!edit){
            setEdit(true);
            linkButton.innerHTML = 'Save';
            inputLink.disabled = false;
            setLink(currentCollection.link);
            inputLink.focus();
        } else {
            setEdit(false);
            console.log(link);
            handleChangeLinkPage(link, currentCollection.web_id);
            setLink('https://infork.com/' + link);
            linkButton.innerHTML = 'Edit';
            inputLink.disabled = true;
        }
    }
    const handleCopyLink = () => {
        console.log('copy');
        navigator.clipboard.writeText(link);
    }
    const handleShareOnWA = () => {
        console.log('share to wa');
        // window.location.href = `https://whatsapp://send?text=${link}`;
        window.open(`whatsapp://send?text=${link}`);
    }
    const handleShareFB = () => {
        console.log('share to facebook');
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${link}`, '_blank');
    }
    const handleDownloadImage = async () => {
        let canvasPromise = html2canvas(ToCaptureRef.current, {
            useCORS: true,
            // allowTaint: false,
        });
        canvasPromise.then((canvas) => {
            let dataURL = canvas.toDataURL('image/png');
            let img = new Image();
            img.src = dataURL;
            img.download = `${pageName}-QrCode.png`;

            let a = document.createElement("a");
            a.innerHTML = "DOWNLOAD";
            a.target = "_blank";
            a.href = img.src;
            a.download = img.download;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        })
    }

    useEffect(() => {
        if (currentCollection){
            setLink('https://infork.com/' + currentCollection.link);
        }
    }, [currentCollection]);
    return (
        <DetailCollectionWrapper ref={ToCaptureRef}>
            {/* <DetailHeader>
                <h3>Information Page</h3>
                <img  
                    src={rightArrow} 
                    alt="close button" 
                    onClick={() => handleShowDetail(false)}
                />
            </DetailHeader> */}
            <SquareWrapper>
                <HorizontalWrapper>
                    <LabelText>Qr Code</LabelText>
                    <ActionText onClick={handleDownloadImage}>Download</ActionText>
                </HorizontalWrapper>
                <QrCode>
                    <p>Scan Now!</p>
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link}`} alt='qr code' />
                    <p>{pageName}</p>
                </QrCode>
            </SquareWrapper>
            {/* <Line /> */}
            <SquareWrapper>
                <HorizontalWrapper>
                    <LabelText>Link</LabelText>
                    <ActionText id="linkButton" onClick={handleClickLink}>Edit</ActionText>
                </HorizontalWrapper>
                <ActionButtonWrapper>
                    <ActionButtonIcon>
                        <img src={linkIcon} alt='link icon' />
                    </ActionButtonIcon>
                    <ActionButtonText>
                        <h4>Copy a link</h4>
                        <p>Share to your friends</p>
                    </ActionButtonText>
                    <ActionButton onClick={handleCopyLink}>
                        <img src={copyIcon} alt="copy icon" />
                    </ActionButton>
                </ActionButtonWrapper>
                <ActionButtonWrapper>
                    <ActionButtonIcon>
                        <img src={whatsappIcon} alt='link icon' />
                    </ActionButtonIcon>
                    <ActionButtonText>
                        <h4>Share on Whatsapp</h4>
                        <p>Share to your friends</p>
                    </ActionButtonText>
                    <ActionButton onClick={handleShareOnWA}>
                        <img src={uploadIcon} alt='upload icon' />
                    </ActionButton>
                </ActionButtonWrapper>
                <ActionButtonWrapper>
                    <ActionButtonIcon>
                        <img src={facebookIcon} alt='link icon' />
                    </ActionButtonIcon>
                    <ActionButtonText>
                        <h4>Share on Facebook</h4>
                        <p>Share to your friends</p>
                    </ActionButtonText>
                    <ActionButton onClick={handleShareFB}>
                        <img src={uploadIcon} alt='upload icon' />
                    </ActionButton>
                </ActionButtonWrapper>
            </SquareWrapper>
            <SquareWrapper style={{height: '200px'}}>
                <HorizontalWrapper>
                    <LabelText>Link</LabelText>
                    <ActionText id="linkButton" onClick={handleClickLink}>Edit</ActionText>
                </HorizontalWrapper>
                <LinkEdit>
                    <input id="inputLink" type="text" value={link} onChange={(e) => setLink(e.target.value)} disabled/>
                </LinkEdit>
            </SquareWrapper>
            {/* <DetailScroll>
                <DetailContent>
                </DetailContent>
            </DetailScroll> */}
        </DetailCollectionWrapper>
    )
}