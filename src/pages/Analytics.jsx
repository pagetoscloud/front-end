import { useEffect, useState } from "react";
import { PersonalAreaHeader, PersonalAreaNavigation } from "../components";
import { MainAnalytics } from "../features/analytics";
import HorizontalLayout from "../layouts/HorizontalLayout";
import VerticalLayout from "../layouts/VerticalLayout";
import { useDispatch } from "react-redux";
import { initialCollection } from "../features/collections/collectionsSlice";

export default function Analytics(){
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [showNavigation, setShowNavigation] = useState(true);
    const [currentCollection, setCurrentCollection] = useState({});
    const [collectionList, setCollectionList] = useState([]);
    const [analyticsData, setAnalyticsData] = useState({});
    const dispatch = useDispatch();
    const changeAnalyticsData = (e) => {
        const grouped = {};
        e.daily.forEach(entry => {
        const month = entry.month.trim(); // remove extra spaces
        const day = parseInt(entry.day, 10);
        const visitor = parseInt(entry.total_daily, 10);

        if (!grouped[month]) {
            grouped[month] = [];
        }

        grouped[month].push({ date: day, visitor });
        });

        // Convert grouped object into the desired array format
        const result = Object.entries(grouped).map(([month, data]) => ({
            month,
            data
        }));
        setAnalyticsData(result);
    }
    const handleCurrentCollection = (e) => {
        setCurrentCollection(e);
        const fetchingDataVisitor = async () => {
            let url = 'https://pagetos-express-backend-v1-561278679973.asia-southeast2.run.app/personal-area/analytics';
            if (import.meta.env.VITE_NODE_ENV === 'development'){
                url = 'http://localhost:5001/personal-area/analytics';
            }
            try {
                const response = await fetch(url, {
                    method: "POST",
                    mode: 'cors',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({web_id: e.web_id})
                });
                const json = await response.json();
                changeAnalyticsData(json.data);
            } catch (error) {
                throw error;
            }
        };
        fetchingDataVisitor();
    }
    const handleShowNavigation = () => {
        if (showNavigation){
            setShowNavigation(false);
        } else {
            setShowNavigation(true);
        }
    }
    useEffect(() => {
        const changeCurrentCollection = (e) => {
            setCurrentCollection(e);
            const fetchingDataVisitor = async () => {
                let url = 'https://pagetos-express-backend-v1-561278679973.asia-southeast2.run.app/personal-area/analytics';
                if (import.meta.env.VITE_NODE_ENV === 'development'){
                    url = 'http://localhost:5001/personal-area/analytics';
                }
                try {
                    const response = await fetch(url, {
                        method: "POST",
                        mode: 'cors',
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({web_id: e?.web_id})
                    });
                    const json = await response.json();
                    changeAnalyticsData(json.data);
                } catch (error) {
                    throw error;
                }
            };
            fetchingDataVisitor();
        }
        const getCollectionData = async () => {
            setLoading(true);
            let url = 'https://pagetos-express-backend-v1-561278679973.asia-southeast2.run.app/personal-area/collection';
            if (import.meta.env.VITE_NODE_ENV === 'development'){
                url = 'http://localhost:5001/personal-area/collection';
            }
            try {
                const response = await fetch(url, {
                    method: "GET",
                    mode: 'cors',
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const json = await response.json();
                if (json.status === 'ok'){
                    dispatch(initialCollection(json.data));
                    setCollectionList(json.data);
                    setCurrentCollection(json.data[0])
                    setLoading(false);
                    changeCurrentCollection(json.data[0]);
                } else {
                    setError(true);
                }
            } catch (error) {
                throw error
            }
        }
        getCollectionData();
    }, [dispatch])
    return (
        <VerticalLayout>
            <PersonalAreaHeader handleShowNavigation={handleShowNavigation}/>
            <HorizontalLayout>
                {
                    showNavigation &&
                    <PersonalAreaNavigation currentPage={'Analytics'} />
                }
                {
                    isLoading & isError ?
                    <p>Loading....</p>:
                    <MainAnalytics 
                        showNavigation={showNavigation}
                        collectionList={collectionList}
                        currentCollection={currentCollection}
                        handleCurrentCollection={handleCurrentCollection}
                        analyticsData={analyticsData}
                    />
                }
            </HorizontalLayout>
        </VerticalLayout>
    )
}