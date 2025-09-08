import { useEffect, useState } from "react";
import { PersonalAreaHeader, PersonalAreaNavigation } from "../components";
import { DetailTemplate, MainDashboard } from "../features/dashboard";
import HorizontalLayout from "../layouts/HorizontalLayout";
import VerticalLayout from "../layouts/VerticalLayout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initialStyle } from "../features/template-editor/templateStyleSlice";
import { initialContent } from "../features/template-editor/templateContentSlice";
import {initialCollection} from "../features/collections/collectionsSlice";
import { changeAllData } from "../features/setting/accountDataSlice";
import { initialDataLocally } from "../features/template-editor/templateProductSlice";


export default function Dashboard(){
    const [showNavigation, setShowNavigation] = useState(true);
    const navigate = useNavigate();
    const handleShowNavigation = () => {
        if (showNavigation){
            setShowNavigation(false);
        } else {
            setShowNavigation(true);
        }
    }
    const [currentDetail, setCurrentDetail] = useState({});
    const [showDetail, setShowDetail] = useState(false);
    const handleCurrentDetail = (e) => {
        setCurrentDetail(e);
    }
    const handleShowDetail = () => {
        if (showDetail){
            setShowDetail(false);
        } else {
            setShowDetail(true);
        }
    }
    // const navigate = useNavigate();
    console.log(localStorage.getItem('unsave-template'))
    const dispatch = useDispatch();
    const handleLocalStorage = (data) => {
        if (data){
            console.log(data);
            // dispatch(initialStyle({data: data.style}));
            // dispatch(initialContent({data: data.content}));
            // dispatch(initialDataLocally(data.content.product));
            // const dataNew = {
            //     templateId: data.id,
            //     style: data.style,
            //     content: data.content,
            //     products: data.content
            // }
            // const message = JSON.stringify(dataNew);
            // console.log(dataNew);
            // if (data){
            //     localStorage.setItem('templateEditor', message);
            //     // navigate('/editor');
            // }
        } else {
            dispatch(initialStyle({data: currentDetail.style}));
            dispatch(initialContent({data: currentDetail.content}));
            dispatch(initialDataLocally(currentDetail.content.product));
            const data = {
                templateId: currentDetail.id,
                style: currentDetail.style,
                content: currentDetail.content,
                products: currentDetail.content.product
            }
            const message = JSON.stringify(data);
            if (currentDetail){
                localStorage.setItem('templateEditor', message);
                // navigate('/editor');
            }
        }
        // dispatch(initialStyle({data: currentDetail.style}));
        // dispatch(initialContent({data: currentDetail.content}));
        // const data = {
        //     templateId: currentDetail.id,
        //     style: currentDetail.style,
        //     content: currentDetail.content
        // }
        // const message = JSON.stringify(data);
        // if (currentDetail){
        //     localStorage.setItem('templateEditor', message);
        //     // navigate('/editor');
        // }
    }
    useEffect(() => {
        const getData = async () => {
            // const url = 'http://localhost:5001/auth/profile-data';
            let url = 'https://dummy-backend-500141028909.asia-southeast2.run.app/auth/profile-data';
            if (process.env.NODE_ENV === 'development'){
                url = 'http://localhost:5001/auth/profile-data';
            }
            try {
                const response = await fetch(url, {
                    method: "GET",
                    credentials: "include",
                    mode: 'cors',
                    // headers: {
                    //     'Content-Type': 'application/json'
                    // }
                });
                if (!response.ok){
                    throw new Error('fail to fetch');
                }
                const json = await response.json();
                if (json.status === 'ok'){
                    console.log(json.data);
                    if (json.data.profile_picture === null){
                        dispatch(changeAllData({
                            username: json.data.username,
                            email: json.data.email,
                            password: '****',
                            profilePicture: null,
                            accountType: json.data.account_type,
                        }));
                    } else {
                        dispatch(changeAllData({
                            username: json.data.username,
                            email: json.data.email,
                            password: '****',
                            profilePicture: json.data.profile_picture.link,
                            accountType: json.data.account_type,
                        }));
                    }
                } else {
                    navigate('/login');
                }
            } catch (error) {
                // navigate('/login');
            }
        }
        const getCollectionData = async () => {
            // const url = 'http://localhost:5001/personal-area/collection';
            let url = 'https://dummy-backend-500141028909.asia-southeast2.run.app/personal-area/collection';
            if (process.env.NODE_ENV === 'development'){
                url = 'http://localhost:5001/personal-area/collection';
            }
            try {
                const response = await fetch(url, {
                    method: "GET",
                    mode: 'cors',
                    credentials: 'include',
                    // headers: {
                    //     "Content-Type": "application/json"
                    // }
                });
                const json = await response.json();
                if (json.status === 'ok'){
                    dispatch(initialCollection(json.data));
                } else {
                    console.log(json);
                    dispatch(initialCollection([]));
                    // navigate('/login');
                }
            } catch (error) {
                throw error;
            }
        }
        const unsaveTemplate = async () => {
            const binaryString = localStorage.getItem('unsave-thumbnail-progress');
            const templateData = localStorage.getItem('unsave-template-progress');
            const unsaveFormData = new FormData();
            const len = binaryString.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++){      
                bytes[i] = binaryString.charCodeAt(i);
            }
            const myFile = new Blob([bytes], {type: 'image/png'});
            unsaveFormData.append('file', myFile);
            unsaveFormData.append('templateData', templateData);
            try {
                let url = 'https://dummy-backend-500141028909.asia-southeast2.run.app/personal-area/upload-last-edit-image';
                if (process.env.NODE_ENV === 'development'){
                    url = 'http://localhost:5001/personal-area/upload-last-edit-image';
                }
                const response = await fetch(url, {
                    method: "POST",
                    credentials: 'include',
                    mode: 'cors',
                    body: unsaveFormData,
                })
                const json = await response.json();
                if (json.status === 'ok'){
                    console.log('upload file oke')
                }
            } catch (error) {        
              console.log(error);
            }
        }
        if (localStorage.getItem('unsave-thumbnail-progress')){
            console.log('process');
            unsaveTemplate();
            localStorage.removeItem('unsave-thumbnail-progress');
            localStorage.removeItem('unsave-template-progress');
        }
        getData();
        getCollectionData();
    }, [navigate, dispatch]);
    return (
        <VerticalLayout>
            {
                showDetail &&
                <DetailTemplate 
                    currentDetail={currentDetail}
                    handleShowDetail={handleShowDetail}
                    handleLocalStorage={handleLocalStorage}
                />
            }
            <PersonalAreaHeader 
                handleShowNavigation={handleShowNavigation}
            />
            <HorizontalLayout>
                {
                    showNavigation &&
                    <PersonalAreaNavigation currentPage={'Dashboard'}/>
                }
                <MainDashboard 
                    showNavigation={showNavigation}
                    handleCurrentDetail={handleCurrentDetail}
                    handleShowDetail={handleShowDetail}
                    handleLocalStorage={handleLocalStorage}
                />
            </HorizontalLayout>
        </VerticalLayout>
    )
}