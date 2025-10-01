import { useEffect, useState } from "react";
import { PersonalAreaHeader, PersonalAreaNavigation } from "../components";
import HorizontalLayout from "../layouts/HorizontalLayout";
import VerticalLayout from "../layouts/VerticalLayout";
import { MainCollection } from "../features/collections";
import { useDispatch } from "react-redux";
import { initialCollection } from "../features/collections/collectionsSlice";
import { useNavigate } from "react-router-dom";

export default function Collections(){
    const [showNavigation, setShowNavigation] = useState(true);
    const [collection, setCollection] = useState({})
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [linkPage, setLinkPage] = useState('');
    const handleChangeLinkPage = async (value, web_id) => {
        setLinkPage(value);
        let url = 'https://pagetos-express-backend-v1-561278679973.asia-southeast2.run.app/personal-area/change-link';
        // let url = 'https://dummy-backend-500141028909.asia-southeast2.run.app/personal-area/collection';
        if (process.env.NODE_ENV === 'development'){
            url = 'http://localhost:5001/personal-area/change-link';
        }
        try {
            const response = await fetch(url, {
                method: "POST",
                credentials: 'include',
                mode: 'cors',
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({link: value, web_id: web_id})
            });
            const json = await response.json();
            if (json.status === 'fail'){
                alert('link already exists');
                window.location.reload();
            }
        } catch (error) {
            throw error;
        }
    }
    const handleShowNavigation = () => {
        if (showNavigation){
            setShowNavigation(false);
        } else {
            setShowNavigation(true);
        }
    }
    useEffect(() => {
        const getCollectionData = async () => {
            setCollection(true);
            // let url = 'https://pagetos-express-backend-v1-561278679973.asia-southeast2.run.app/personal-area/collection';
            // if (process.env.NODE_ENV === 'development'){
            //     url = 'http://localhost:5001/personal-area/collection';
            // }

            const url = process.env.NODE_ENV !== 'development' 
                ? `${process.env.API_URL}/personal-area/personal-area/collection` 
                : 'http://localhost:5001/personal-area/collection';
                
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
                    setLoading(false);
                } else {
                    navigate('/login');
                }
            } catch (error) {
                throw error;
            }
        }
        getCollectionData();
    }, [dispatch, navigate, linkPage]);
    return (
        <VerticalLayout>
            <PersonalAreaHeader handleShowNavigation={handleShowNavigation}/>
            <HorizontalLayout>
                {
                    showNavigation &&
                    <PersonalAreaNavigation currentPage={'Collection'}/>
                }
                {
                    !loading &&
                    <MainCollection 
                        showNavigation={showNavigation} 
                        collectionData={collection}
                        linkPage={linkPage}
                        handleChangeLinkPage={handleChangeLinkPage}
                    />
                }
            </HorizontalLayout>
        </VerticalLayout>
    )
}