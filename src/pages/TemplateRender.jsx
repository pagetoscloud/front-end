import { Mockup } from "../features/template-render";
import { templateListData } from "../data/TemplateListData";
import { useState } from "react";
// import { useSelector } from "react-redux";

export default function TemplateRender(){
    const templateData = JSON.parse(localStorage.getItem('templateEditor'));
    const components = templateListData.filter(temp => temp.id === templateData.templateId)[0];
    const styleData = templateData.style;
    const contentData = templateData.content;
    const productList = templateData.products;
    console.log(productList);
    const [page, setPage] = useState('page one');
    const [currentItems, setCurrentItems] = useState({});
    const handleChangeCurrentItems = (e) => {
        // console.log('clicked');
        setCurrentItems(e);
    }
    const handleChangePage = (e) => {
        // console.log('change page');
        setPage(e);
    }
    return (
        <>
            {
                templateData ?
                <Mockup 
                    components={components}
                    styleData={styleData}
                    contentData={contentData}
                    handleChangePage={handleChangePage}
                    productList={productList}
                    page={page}
                    currentItems={currentItems}
                    handleChangeCurrentItems={handleChangeCurrentItems}
                /> :
                <p style={{width: '100%', textAlign: 'center'}}>Please pick a template.</p>
            }
        </>
    )
}