import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { templateListData } from "../data/TemplateListData";
import { Mockup } from "../features/template-render";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/template-editor/templateProductSlice";

export default function DigitalPage(){
    const [websiteData, setWebsiteData] = useState({});
    const dispatch = useDispatch();
    const productList = useSelector(state => state.product?.product.list);
    const {link} = useParams();
    const navigate = useNavigate();
    const components = templateListData.filter(temp => temp.id === websiteData.template_id)[0];
    const [page, setPage] = useState('page one');
    const [currentItems, setCurrentItems] = useState({});
    console.log('digital');
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
        const fetchingData = async () => {
            let url = `https://dummy-backend-500141028909.asia-southeast2.run.app/personal-area/website-list/${link}`;
            if (process.env.NODE_ENV === 'development'){
                url = `http://localhost:5001/personal-area/website-list/${link}`;
            }
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    navigate('/not-found')
                }
                const json = await response.json();
                setWebsiteData(json.data);
                dispatch(fetchProducts(json.data.id));
            } catch (error) {
                navigate('/not-found');          
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