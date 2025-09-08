import { MockupWrapper } from "./Mockup.styled";
import { componentsData } from "../../../../data/ComponentsData";

export default function Mockup({components, styleData, contentData, productList, handleChangePage, page, currentItems, handleChangeCurrentItems}){
    console.log(productList);
    return (
        <MockupWrapper
            style={{
                background: styleData.screen.style.background.background,
                opacity: styleData.screen.style.background.opacity,
                filter: styleData.screen.style.background.filter
            }}
        >
            <componentsData.screen.one>
                {
                    components.components.main.map((comp, index) => {
                                return <comp.components
                                    key={index}
                                    styleData={styleData}
                                    contentData={contentData}
                                    components={components.components}
                                    handleChangePage={handleChangePage}
                                    productList={productList}
                                    handleChangeCurrentItems={handleChangeCurrentItems}
                                    currentItems={currentItems}
                                    page={page}
                                />
                            })
                }
            </componentsData.screen.one>
        </MockupWrapper>
    )
}