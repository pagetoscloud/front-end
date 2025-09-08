import { 
        MockupContainer,
        ScreenClick 
} from "./Mockup.styled";
import { useSelector } from "react-redux";
import { useWindowSize } from "../../../../../hooks/useWindowSize";
import { componentsData } from "../../../../../data/ComponentsData";
// import { useEffect, useState } from "react";

export default function Mockup({handleEditMode, components, page, handleChangePage, refProps, onEdit}){
    const size = useWindowSize();
    const height = size[1] < 600 ? size[0] - 145 : size[0] - 120;
    const styleData = useSelector((state) => state.templateStyle.current);
    const contentData = useSelector((state) => state.templateContent);
    const productList = useSelector(state => state.product.product.list);
    if (Object.values(styleData).length === 0) {
        return <MockupContainer style={{height: height}}/>
    } else {
        return (
            <MockupContainer 
                ref={refProps}
                id="mockup"
                style={{
                    height: height,
                    background: styleData.screen.style.background.background,
                    opacity: styleData.screen.style.background.opacity,
                    filter: styleData.screen.style.background.filter
                }}
            >
                <componentsData.screen.one mode={'edit'} page={page}>
                    <ScreenClick 
                        onClick={() => handleEditMode({mode: 'Background', type: 'background', component: 'screen'})}
                        style={{
                            height: height,
                        }}
                    />
                    {
                        components.components &&
                        components.components.main.map((comp, index) => {
                            return <comp.components
                                key={`${index}-component-edit`}
                                handleEditMode={handleEditMode}
                                handleChangePage={handleChangePage}
                                styleData={styleData}
                                contentData={contentData}
                                productList={productList}
                                components={components.components}
                                mode={'edit'}
                                onEdit={onEdit}
                                page={page}
                            />
                        })
                    }
                </componentsData.screen.one>
            </MockupContainer>
        )
    }
}