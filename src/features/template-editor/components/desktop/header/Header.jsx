import { 
        CenterContentWrapper, HeaderContainer, 
        InputDocumentName, LeftContentWrapper, 
        MenuButton, PageNavigation, PreviewButton, 
        ProfilePicture, RightContentWrapper, 
        SaveButton, 
        UndoRedoWrapper
} from "./Header.styled";
import previewIcon from '../../../../../assets/images/visible-icon.png';
import toggle from '../../../../../assets/images/togle-icon.png';
import undo from '../../../../../assets/images/undo-icon.png';
import redo from '../../../../../assets/images/redo-icon.png';
import logo from '../../../../../assets/images/Pixel-style-logo.png';
import uploadIcon from '../../../../../assets/images/upload-icon.png';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../../../../hooks/useWindowSize";
import { useDispatch, useSelector } from "react-redux";
// import { undoState, redoState } from "../../../templateStyleSlice";
import { REDO, UNDO } from "../../../undoRedoMiddleware";
import { clearProductList } from "../../../templateProductSlice";
import { upload } from "@testing-library/user-event/dist/cjs/utility/upload.js";
// import { saveProductEdit } from "../../../templateProductSlice";


const pageList = ['page one', 'page two','page three'];

export default function Header({handleLocalStorage, handleChangePage, handleShowNavigation, handleDownloadImage, handleChangeDocumentName, documentName, web_id, page}) {
    const [currentDocumentName, setCurrentDocumentName] = useState(documentName);
    const history = useSelector(state => state.history);
    const loggedIn = useSelector(state => state.authentication.loggedIn);
    const accountData = useSelector(state => state.accountData.personalData);
    const dispatch = useDispatch();
    const size = useWindowSize();
    const margin = 40;
    const navigate = useNavigate();
    let width = size[1];
    const leftWidthContent = 320 - 40;
    const rightWidthContent = 320 - (margin * 2);
    const paddingHorizontal = margin;
    const [currentPage, setCurrentPage] = useState(0);
    const handleChangePageNext = () => {
        // let prevData = page;
        if (currentPage < pageList.length - 1 && page){
            let pages = pageList[currentPage + 1];
            handleChangePage(pages);
            setCurrentPage(currentPage + 1);
        }
    }
    const handleChangePagePrev = () => {
        if (currentPage !== 0 && page){
            setCurrentPage(currentPage - 1);
            let pages = pageList[currentPage -1];
            handleChangePage(pages);
        }
    }
    const handleBackHome = () => {
        localStorage.removeItem('templateEditor');
        localStorage.removeItem('templatedata');
        dispatch(clearProductList());
        navigate('/');
    }
    const handleSaveData = () => {
        // localStorage.removeItem('templatedata');
        handleDownloadImage()
        // dispatch(saveProductEdit(web_id));
        // handleSave();
    }
    const handleChangeCurrentDocumentName = (value) => {
        setCurrentDocumentName(value);
        handleChangeDocumentName(value);
    }
    useEffect(() => {
        if (page === 'page one'){
            setCurrentPage(0);
        } else if (page === 'page two'){
            setCurrentPage(1);     
        } else if (page === 'page three'){
            setCurrentPage(2);
        }
    }, [page])
    return(
        <HeaderContainer style={{width: `${size[1] - (margin * 2)}}px`, padding: `0 ${margin}px`}}>
            <LeftContentWrapper style={{width: leftWidthContent, padding: `0 ${margin}px 0 0`}}>
                {
                    loggedIn ?
                    <>
                        <ProfilePicture>
                            {
                                accountData.profilePicture ?
                                <img src={accountData.profilePicture} alt='profile' />:
                                <h2>{accountData.username[0].toUpperCase()}</h2>
                            }
                        </ProfilePicture>
                        <p onClick={handleBackHome}>Home</p>
                        <p onClick={() => {
                            localStorage.removeItem('templateEditor');
                            localStorage.removeItem('templatedata');
                            navigate('/collection');
                        }}>Collection</p>
                    </>:
                    <img src={logo} alt='back icon' onClick={handleBackHome} style={{cursor: 'pointer', width: '120px', height: 'auto'}} />
                }
            </LeftContentWrapper>
            <CenterContentWrapper>
                <MenuButton onClick={handleShowNavigation}>
                    <img src={toggle} alt='menu toggle' />
                </MenuButton>
                <InputDocumentName>
                    <input type="text" onChange={(e) => handleChangeCurrentDocumentName(e.target.value)} value={currentDocumentName}/>
                </InputDocumentName>
                <UndoRedoWrapper>
                    <img style={history.canUndo ? {} : {opacity: '0.4', cursor: 'not-allowed'}} onClick={() => dispatch({type: UNDO})} src={undo} alt='undo' />
                    <img style={history.canRedo ? {} : {opacity: '0.4', cursor: 'not-allowed'}} onClick={() => dispatch({type: REDO})} src={redo} alt='redo' />
                </UndoRedoWrapper>
                <PageNavigation>
                    {
                        currentPage === 0 || !page? 
                        <p style={{color: 'rgba(0, 0, 0, 0.4', pointer: 'none'}}>Prev</p> :
                        <p onClick={handleChangePagePrev}>Prev</p>

                    }
                    {
                        currentPage === (pageList.length - 1) || !page ?
                        <p style={{color: 'rgba(0, 0, 0, 0.4', pointer: 'none'}}>Next</p> :
                        <p onClick={handleChangePageNext}>Next</p>
                    }
                </PageNavigation>
                {
                    width < 900 ?
                    <>
                        <PreviewButton onClick={handleLocalStorage}>
                            <img src={previewIcon} alt="preview icon"/>
                        </PreviewButton>
                        <SaveButton onClick={handleSaveData}>
                            {
                                web_id === '*' ?
                                <img src={uploadIcon} alt='upload button icon' />:
                                <p>Save</p> 
                            }
                        </SaveButton>
                    </>:
                    <></>
                }
            </CenterContentWrapper>
            <RightContentWrapper style={{width: rightWidthContent, paddingLeft: `${paddingHorizontal * 2}px`}}>
            {/* <RightContentWrapper> */}
                <SaveButton onClick={handleSaveData}>
                    {
                        web_id === '*' ?
                        <p>Publish</p> :
                        <p>Save</p>
                    }
                </SaveButton>
                <PreviewButton
                    onClick={handleLocalStorage}
                >
                    <p>Preview</p>
                </PreviewButton>
            </RightContentWrapper>
        </HeaderContainer>
    )
}