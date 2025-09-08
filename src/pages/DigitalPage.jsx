import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { templateListData } from "../data/TemplateListData";
import { Mockup } from "../features/template-render";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/template-editor/templateProductSlice";

export default function DigitalPage(){
    const [websiteData, setWebsiteData] = useState({});
    const dispatch = useDispatch();
    const productList = useSelector(state => state.product.product.list);
    const {link} = useParams();
    const navigate = useNavigate();
    const components = templateListData.filter(temp => temp.id === websiteData.template_id)[0];
    const [page, setPage] = useState('page one');
    const [currentItems, setCurrentItems] = useState({});
    const checkObject = (object) => {
        if (object === null){
            return false;
        }
        if (object === undefined){
            return false;
        }
        return Object.keys(object).length !== 0;
    }
    const condition = checkObject(websiteData);
    const handleChangeCurrentItems = (e) => {
        // console.log('clicked');
        setCurrentItems(e);
    }
    const handleChangePage = (e) => {
        // console.log('change page');
        setPage(e);
    }
    useEffect(() => {
        // const visitorFetching = async (web_id) => {
        //     const url = 'http://localhost:4000/add-visitor';
        //     try {
        //         const response = await fetch(url, {
        //             method: "POST",
        //             mode: 'cors',
        //             credentials: 'include',
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify({web_id: web_id})
        //         });
        //         if (!response.ok) {
        //             throw new Error(`Response status: ${response.status}`);
        //         }
        //     } catch (error) {
        //         throw error;
        //     }
        // }
        const fetchingData = async () => {
            let url = `https://dummy-backend-500141028909.asia-southeast2.run.app/personal-area/website-list/${link}`;
            if (process.env.NODE_ENV === 'development'){
                url = `http://localhost:5001/personal-area/website-list/${link}`;
            }
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const json = await response.json();
                if (json.length === 0){
                    navigate('*');
                }
                setWebsiteData(json[0]);
                // console.log(json[0].id);
                dispatch(fetchProducts(json[0].id));
            } catch (error) {
                navigate('*');          
            }
        };
        fetchingData();
    }, [link, navigate, dispatch]);
    return (
        <>
            {
                condition ?
                <Mockup 
                    components={components}
                    styleData={websiteData.style}
                    contentData={websiteData.content}
                    handleChangePage={handleChangePage}
                    productList={productList}
                    page={page}
                    currentItems={currentItems}
                    handleChangeCurrentItems={handleChangeCurrentItems}
                /> :
                <></>
            }
        </>
    )
}