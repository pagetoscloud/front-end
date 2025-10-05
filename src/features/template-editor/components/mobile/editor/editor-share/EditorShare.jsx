import { EditorContentWrapper, HorizontalWrapper, InputEditorLarge, LabelText, TitleHeader } from "../../../../assets/Global.styled";
import { ActionButton, ActionButtonIcon, ActionButtonText, ActionButtonWrapper, DividingLine, EditorShareContainer, QrCode, ShareItems } from "./EditorShare.styled";
import qrCode from '../../../../../../assets/images/qr-code.png';
// import {useWindowSize} from '../../../../../../hooks/useWindowSize';
import linkIcon from '../../../../../../assets/images/link-icon.png';
import whatsappIcon from '../../../../../../assets/images/whatsapp.png';
import facebookIcon from '../../../../../../assets/images/facebook.png';
import copyIcon from '../../../../../../assets/images/copy-icon.png';
import uploadIcon from '../../../../../../assets/images/upload-icon.png';
import { useSelector } from "react-redux";
import { useState } from "react";

export default function EditorShare({handleEditMode, linkPage, setLinkPage, handleChangeLinkPage,  handleLoginPopUp}){
    // const size = useWindowSize();
    // const height = size[0] - 130;
    // const size = useWindowSize();
    // const height = size[0] - 130;
    const loggedIn = useSelector(state => state.authentication.loggedIn);
    const [link, setLink] = useState('https://infork.com/' + linkPage);
    const [edit, setEdit] = useState(false);
    const handleCheckLink = async () => {
        const url = import.meta.env.VITE_NODE_ENV !== 'development' 
        ? `${import.meta.env.VITE_API_URL}/personal-area/check-link` 
        : 'http://localhost:5001/personal-area/check-link';
        
        try {
            const response = await fetch(url, {
                method: "POST",
                credentials: 'include',
                mode: 'cors',
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({link: link})
            });
            const json = await response.json();
            if (json.status === 'fail'){
                alert('link already exists');
                // setLink(linkPage);
                setLink('https://infork.com/' + linkPage);
            } 
            if (json.status === 'ok'){
                setLinkPage(link);
                console.log('link changed');
            }
            if (linkPage !== '' ){
                console.log(link);
            }
        } catch (error) {
            throw error;
        }
    }
    const handleClickLink = () => {
        console.log('clicked');
        console.log(loggedIn);
        const inputLink = document.getElementById('inputLink');
        const linkButton = document.getElementById('linkButton');
        if (loggedIn){
            if (!edit){
                setEdit(true);
                linkButton.innerHTML = 'Save';
                inputLink.disabled = false;
                setLink(linkPage);
                inputLink.focus();
            } else {
                handleCheckLink();
                setEdit(false);
                setLink('https://infork.com/' + link);
                linkButton.innerHTML = 'Edit';
                inputLink.disabled = true;
            }
        } else {
            handleLoginPopUp();
        }
    }
    return (
        <EditorShareContainer>
            <TitleHeader>
                <h3>Share</h3>
                {/* <img onClick={() => handleEditMode(false)} src={rightArrow} alt='close icon' /> */}
            </TitleHeader>
            <EditorContentWrapper style={{height: 340}}>
                <ShareItems>
                    <HorizontalWrapper>
                        <LabelText>Qr Code</LabelText>
                        <p>Download</p>
                    </HorizontalWrapper>
                    <QrCode>
                        <img src={qrCode} alt='qr code' />
                    </QrCode>
                    <HorizontalWrapper>
                        <LabelText>Link Page</LabelText>
                        <p id="linkButton" onClick={handleClickLink}>Edit</p>
                    </HorizontalWrapper>
                    <InputEditorLarge>
                        {/* <input type='text' value={link}/> */}
                        <input id="inputLink" type='text' value={link} onChange={(e) => setLink(e.target.value)} disabled/>
                    </InputEditorLarge>
                    <DividingLine />
                    <ActionButtonWrapper>
                        <ActionButtonIcon>
                            <img src={linkIcon} alt='link icon' />
                        </ActionButtonIcon>
                        <ActionButtonText>
                            <h4>Copy a link</h4>
                            <p>Share to your friends</p>
                        </ActionButtonText>
                        <ActionButton>
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
                        <ActionButton>
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
                        <ActionButton>
                            <img src={uploadIcon} alt='upload icon' />
                        </ActionButton>
                    </ActionButtonWrapper>
                </ShareItems>
            </EditorContentWrapper>
        </EditorShareContainer>
    )
}