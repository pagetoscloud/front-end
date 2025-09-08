import { useWindowSize } from "../../../../../../hooks/useWindowSize";
import { TitleHeader } from "../../../../assets/Global.styled";
import { 
        TemplateItems, TemplateItemsWrapper, 
        TemplateListContainer, 
        TemplateTypeButtonWrapper, 
        TemplateTypeMenu
} from "./TemplateList.styled";
import leftArrow from '../../../../../../assets/images/left-arrow.png';
// import rightArrow from '../../../../../../assets/images/right-arrow.png';

import { templateListData } from "../../../../../../data/TemplateListData";
import { useDispatch } from "react-redux";
import { initialStyle} from "../../../../templateStyleSlice";
import { initialContent } from "../../../../templateContentSlice"; 
import { initialDataLocally } from "../../../../templateProductSlice";
import { changePage } from "../../../../templatePagePositionSlice";
// import { useState } from "react";

export default function TemplateList({handleChangeComponents, handleEditMode}){
    // const [showNavigation, setShowNavigation] = useState(false);
    // const history = useSelector(state => state.history);
    // console.log(history);
    const size = useWindowSize();
    const height = size[0] - 70;
    const templateHeight = height - 115;
    const dispatch = useDispatch();
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
        console.log(e.content);
        dispatch({
            ...initialContent({
                data: e.content
            }),
            meta: {initialData: true}
        });
    }
    return (
        <>
            <TemplateListContainer>
                <TitleHeader>
                    <img 
                        onClick={() => handleEditMode(false)}
                        src={leftArrow} 
                        alt='close icon' 
                    />
                    <h3>Template</h3>
                </TitleHeader>
                <TemplateTypeMenu>
                    <TemplateTypeButtonWrapper>
                        <p>Food</p>
                        <p>Fashion</p>
                        <p>Service</p>
                    </TemplateTypeButtonWrapper>
                </TemplateTypeMenu>
                <TemplateItemsWrapper style={{height: templateHeight}}>
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