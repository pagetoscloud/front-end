
import { TitleHeader } from "../../../../assets/Global.styled";
import { 
        TemplateItems, TemplateItemsWrapper, 
        TemplateListContainer, 
        TemplateTypeButtonWrapper, 
        TemplateTypeMenu
} from "./TemplateList.styled";
// import leftArrow from '../../../../../../assets/images/left-arrow.png';
// import rightArrow from '../../../../../../assets/images/right-arrow.png';

import { templateListData } from "../../../../../../data/TemplateListData";
import { useDispatch } from "react-redux";
import { initialStyle} from "../../../../templateStyleSlice";
import { initialContent } from "../../../../templateContentSlice"; 
// import { useState } from "react";
import { useWindowSize } from "../../../../../../hooks/useWindowSize";
import { initialDataLocally } from "../../../../templateProductSlice";
import { changePage } from "../../../../templatePagePositionSlice";

export default function TemplateList({handleChangeComponents}){
    const dispatch = useDispatch();
    const size = useWindowSize();
    const height = size[0] * 0.55;
    console.log(height);
    // const templateHeight = height - 50;
    // const margin = 40;
    // const [showNavigation, setShowNavigation] = useState(false);
    // const handleShowNavigation = () => {
    //     if (showNavigation){
    //         setShowNavigation(false);
    //     } else {
    //         setShowNavigation(true);
    //     }
    // }
    const handleClickTemplateComponents = (e) => {
        handleChangeComponents(e);
        dispatch(initialDataLocally(e.content.product))
        dispatch(changePage('page one'));
        dispatch({
            ...initialStyle({
                data: e.style
            }),
            meta: {initialData: true}
        });
        dispatch({
            ...initialContent({
                data: e.content
            }),
            meta: {initialData: true}
        });
    }
    return (
        <>
            <TemplateListContainer style={{minHeight: height}}>
                <TitleHeader>
                    {/* <img 
                        onClick={handleShowNavigation}
                        src={leftArrow} 
                        alt='close icon' 
                    /> */}
                    <h3>Template</h3>
                </TitleHeader>
                <TemplateTypeMenu>
                    <TemplateTypeButtonWrapper>
                        <p>Food</p>
                        <p>Fashion</p>
                        <p>Service</p>
                    </TemplateTypeButtonWrapper>
                </TemplateTypeMenu>
                <TemplateItemsWrapper>
                    {
                        templateListData.map((temp, index) => {
                            return (
                                <TemplateItems key={index} onClick={() => handleClickTemplateComponents(temp)}>
                                    <img src={temp.image} alt={temp.name} />
                                    <h4>{temp.name}</h4>
                                    <p>#{temp.type}</p>
                                </TemplateItems>
                            )
                        })
                    }
                </TemplateItemsWrapper>
            </TemplateListContainer>
        </>
    )
}