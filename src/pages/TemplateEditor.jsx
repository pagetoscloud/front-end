import React, { useEffect, useState } from "react";
import { 
    DesktopEditor, DesktopHeader, 
    DesktopLoginPopUp, 
    DesktopMainContentLayout, DesktopMockup, 
    DesktopTemplateEditorLayout, MobileEditor,
    MobileSideNavigation
} from "../features/template-editor";
import { templateListData } from "../data/TemplateListData";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useWindowSize } from "../hooks/useWindowSize";
import html2canvas from "html2canvas";
import { initialStyle } from "../features/template-editor/templateStyleSlice";
import { initialContent } from "../features/template-editor/templateContentSlice";
import { fetchAuthStatus } from "../features/authentication/authSlice";
import { useLoginPopUp } from "../features/template-editor/hooks/useLoginPopUp";
import { uploadImageCollection, fetchThumbnailEdit } from "../features/template-editor/utils/api";
import { useChangeLinkPage } from "../features/template-editor/hooks/useChangeLinkPage";
import { handleSave, randomId} from "../features/template-editor/utils/utils";
import { fetchProducts} from "../features/template-editor/templateProductSlice";
import { changePage } from "../features/template-editor/templatePagePositionSlice";
export default function TemplateEditor(){
    const [isLoading, setLoading] = useState(true);
    const changed = useSelector(state => state.product.product.changed);
    const deleted = useSelector(state => state.product.product.deleted);
    console.log(changed, deleted);
    const size = useWindowSize();
    const [image, setImage] = useState(false);
    const [documentName, setDocumentName] = useState('new document');
    const [editMode, setEditMode] = useState(false);
    const [onEdit, setOnEdit] = useState(true);
    const [components, setComponents] = useState([]);
    const { web_id } = useParams();
    const dispatch = useDispatch();
    const page = useSelector(state => state.templatePagePosition.currentPosition);
    const [showNavigation, setShowNavigation] = useState(false);
    const {loggedIn} = useSelector(state => state.authentication);
    const style = useSelector(state => state.templateStyle.current);
    const content = useSelector(state => state.templateContent);
    const height = size[1] < 600 ? size[0] - 140 : size[0] - 120;
    const ToCaptureRef = React.useRef();
    const {showLoginPopUp, handleLoginPopUp} = useLoginPopUp(loggedIn);
    const {linkPage, setLinkPage, handleChangeLinkPage} = useChangeLinkPage(web_id);
    const productList = useSelector(state => state.product.product.list);
    const handleChangeDocumentName = (e) => {
        setDocumentName(e);
    }
    const takeScreenshot = async () => {
        const randomWebId = randomId();
        setTimeout(async () => {
            const mockup = document.getElementById('mockup');
            let data = {}
            if (web_id !== '*') {
                data = handleSave(web_id, components, documentName, style, content, image, linkPage);
            } else {
                data = handleSave(randomWebId, components, documentName, style, content, image, linkPage);
            }
            mockup.style.width = '350px';
            mockup.style.height = '720px';
            let canvasPromise = html2canvas(ToCaptureRef.current, {
                useCORS: true
            });
            mockup.style.height = `${height}px`;
            await canvasPromise.then((canvas) => {
                let dataURL = canvas.toDataURL('image/png');
                let img = new Image();
                img.src = dataURL;
                img.download = `last-design-template.png`;
                const base64Data = dataURL.split(',')[1];
                const binaryString = atob(base64Data);
                const len = binaryString.length;
                const bytes = new Uint8Array(len);
                for (let i = 0; i < len; i++){      
                    bytes[i] = binaryString.charCodeAt(i);
                }
                const myFile = new Blob([bytes], {type: 'image/png'});
                const formData = new FormData();
                formData.append('file', myFile);
                formData.append('templateData', data);
                if (loggedIn){
                    fetchThumbnailEdit(formData, changed, deleted);
                } else {
                    handleLoginPopUp();
                    localStorage.setItem('unsave-thumbnail-progress', binaryString);
                    localStorage.setItem('unsave-template-progress', data);
                    // console.log(localStorage.getItem('unsave-thumbnail-progress'));
                }
            });
        }, 200);
    };

    // console.log(components.components.data);
    const handleDownloadImage = async () => {
        // setPage('one');
        dispatch({
            ...changePage('page one'),
            meta: {record: true}
        })
        setOnEdit(false);
        takeScreenshot();
        setTimeout(() => {
            setOnEdit(true);
        }, 500);
        // setOnEdit(true);
    };
    const handleShowNavigation = () => {
        if (showNavigation){
            setShowNavigation(false);
        } else {
            setShowNavigation(true);
        }
    }
    const handleChangePage = (e) => {
        if (Object.values(styleData).length !== 0 && Object.values(content).length !== 0){
            dispatch({
                ...changePage(e),
                meta: {record: true}
            })
        }
    }
    const styleData = useSelector(state => state.templateStyle.current);
    const contentData = useSelector(state => state.templateContent);
    const navigate = useNavigate();
    const handleLocalStorage = () => {
        const data = {
            templateId: components.id,
            style: styleData,
            content: contentData,
            products: productList
        }
        const message = JSON.stringify(data);
        if (components.length !== 0){
            localStorage.setItem('templateEditor', message);
            navigate('/preview');
        }
    }
    const handleChangeComponents = e => {
        setComponents(e);
    }
    const handleEditMode = (e) => {
        setEditMode(e);
    }
    useEffect(() => {
        if (productList.length === 0){
            setEditMode('Template')
        }
    }, [])
    useEffect(() => {
        dispatch(fetchAuthStatus());
        if (Object.values(components).length === 0) {
            if (Object.values(styleData).length === 0){
                setEditMode('Template');
            }
            const templateData = JSON.parse(localStorage.getItem('templateEditor'));
            if (templateData){
                const dataComponents = templateListData.filter(temp => temp.id === templateData.templateId)[0];
                setComponents(dataComponents);
            }
            setLoading(false);
        }
    }, [components, styleData, navigate, web_id, setLinkPage, dispatch]);
    useEffect(() => {
        const fetchingData = async () => {
            const url = import.meta.env.VITE_NODE_ENV !== 'development' 
                ? `${import.meta.env.VITE_API_URL}/personal-area/edit-website/${web_id}` 
                : `http://localhost:5001/personal-area/edit-website/${web_id}`;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const json = await response.json();
                if (json.length === 0){
                    navigate('*');
                }
                const dataComponents = templateListData.filter(temp => temp.id === json.template_id)[0];
                setComponents(dataComponents);
                setLinkPage(json.link);
                setImage(json.image_name);
                setDocumentName(json.name);
                dispatch(initialStyle({data: json.style}));
                dispatch(initialContent({data: json.content}));
                setLoading(false);
            } catch (error) {
                navigate('*');          
            }
        };
        if (web_id !== '*' && loggedIn){
            dispatch(fetchProducts(web_id));
            fetchingData();
        }
        // if (web_id !== '*' && !loggedIn){
        //     console.log('not login');
        // }
    }, [dispatch, navigate, web_id, setLinkPage, loggedIn]);
    if (isLoading){
        return (
            <div>Loading...</div>
        )
    } else {
        return (
            <DesktopTemplateEditorLayout>
                {
                    showLoginPopUp &&
                    <DesktopLoginPopUp
                        handleCloseLoginPopUp={handleLoginPopUp}
                    />
                }
                <DesktopHeader 
                    handleChangeDocumentName={handleChangeDocumentName}
                    handleLocalStorage={handleLocalStorage} 
                    handleChangePage={handleChangePage} 
                    handleShowNavigation={handleShowNavigation}   
                    handleDownloadImage={handleDownloadImage}
                    handleSave={handleSave}
                    documentName={documentName}
                    web_id={web_id}
                    page={page}
                />
                <DesktopMainContentLayout>
                    {
                        size[1] > 600 ?
                        <DesktopEditor 
                            editMode={editMode} 
                            handleEditMode={handleEditMode}
                            handleChangeComponents={handleChangeComponents}
                            linkPage={linkPage}
                            setLinkPage={setLinkPage}
                            handleChangeLinkPage={handleChangeLinkPage}
                            web_id={web_id}
                            handleUploadImageCollection={uploadImageCollection}
                            handleLoginPopUp={handleLoginPopUp}
                        /> :
                        <>
                            <MobileSideNavigation 
                                showNavigation={showNavigation}
                                handleShowNavigation={handleShowNavigation}   
                            />
                            <MobileEditor 
                                editMode={editMode} 
                                handleEditMode={handleEditMode}
                                handleChangeComponents={handleChangeComponents}
                                linkPage={linkPage}
                                setLinkPage={setLinkPage}
                                handleChangeLinkPage={handleChangeLinkPage}
                                web_id={web_id}
                                handleUploadImageCollection={uploadImageCollection}
                                handleLoginPopUp={handleLoginPopUp}
                            />
                        </>
                    }
                    {/* <DesktopTemplateList 
                        handleChangeComponents={handleChangeComponents}
                    /> */}
                    <DesktopMockup
                        refProps={ToCaptureRef}
                        handleChangePage={handleChangePage}    
                        handleEditMode={handleEditMode}
                        components={components}
                        page={page}
                        onEdit={onEdit}
                    />
                </DesktopMainContentLayout>
            </DesktopTemplateEditorLayout>
        )

    }
}