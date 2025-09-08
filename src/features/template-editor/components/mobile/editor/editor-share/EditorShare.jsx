import { EditorContentWrapper, HorizontalWrapper, InputEditorLarge, LabelText, TitleHeader } from "../../../../assets/Global.styled";
import { ActionButton, ActionButtonIcon, ActionButtonText, ActionButtonWrapper, DividingLine, EditorShareContainer, QrCode, ShareItems } from "./EditorShare.styled";
import qrCode from '../../../../../../assets/images/qr-code.png';
// import {useWindowSize} from '../../../../../../hooks/useWindowSize';
import linkIcon from '../../../../../../assets/images/link-icon.png';
import whatsappIcon from '../../../../../../assets/images/whatsapp.png';
import facebookIcon from '../../../../../../assets/images/facebook.png';
import copyIcon from '../../../../../../assets/images/copy-icon.png';
import uploadIcon from '../../../../../../assets/images/upload-icon.png';

export default function EditorShare({handleEditMode}){
    // const size = useWindowSize();
    // const height = size[0] - 130;
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
                        <p>Copy</p>
                    </HorizontalWrapper>
                    <InputEditorLarge>
                        <input type='text' value={'http://inforku.com/mokfood'}/>
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