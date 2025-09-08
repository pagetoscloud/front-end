import { useEffect, useRef, useState } from "react";
import { 
        ConnectorButtonWrapper, 
        ConnectorContentWrapper, ConnectorInput, ConnectorOneBackground, ConnectorOneBackgroundHover, ConnectorOneEditBox, 
        ConnectorOneEditContainer 
} from "./ConnectorTwoEdit.styled";
import { useDispatch } from "react-redux";
import { changeButton, changeConnectorText } from "../../../../features/template-editor/templateContentSlice";
import { ButtonItems } from "./ButtonItems";

export function ConnectorTwoEdit({page, styleData, contentData, handleEditMode}) {
        const [title, setTitle] = useState(contentData.connector.title || 'Connector Component');
        const [subtitle, setSubtitle] = useState(contentData.connector.subtitle || 'This is a connector component that can be used to connect different parts of your application.');
        const [paragraph, setParagraph] = useState(contentData.connector.paragraph || 'You can customize the text and style of this component to fit your needs.');
        const [buttonList, setButtonList] = useState(contentData.connector.buttonList);
        const [activeBox, setActiveBox] = useState(false);
        const buttonRef = useRef(null);
        const handleActiveBox = (e) => {    
            if (activeBox) {
                setActiveBox(false);
            } else {
                setActiveBox(true);
            }
        }
        const dispatch = useDispatch();
        const handleChangeButtonName = (id, value) => {
            const newButtonList = [...buttonList];
            const newArray = newButtonList.map((button) => {
                if (button.id === id) {
                    console.log(button);
                    button = {...button, name: value};
                }
                return button;
            });
            setButtonList(newArray);
            dispatch(changeButton({
                component: 'connector',
                id: id,
                type: 'name',
                value: value,
            }))
        };
        const handleChangeTitle = (value) => {
            setTitle(value);
            dispatch(changeConnectorText({
                type: 'title',
                value: value,
            }))
        };
        const handleChangeSubtitle = (value) => {
            setSubtitle(value);
            dispatch(changeConnectorText({
                type: 'subtitle',
                value: value,
            }))
        };
        const handleChangeParagraph = (value) => {
            setParagraph(value);
            dispatch(changeConnectorText({
                type: 'paragraph',
                value: value,
            }))
        };
        useEffect(() => {
            setTitle(contentData.connector.title || 'Connector Component');
            setSubtitle(contentData.connector.subtitle || 'This is a connector component that can be used to connect different parts of your application.');
            setParagraph(contentData.connector.paragraph || 'You can customize the text and style of this component to fit your needs.');
            setButtonList(contentData.connector.buttonList);
        }, [contentData.connector]);
    return (
        <>
        {
            page === 'page three' ? 
            <ConnectorOneEditContainer>
                <ConnectorOneBackgroundHover 
                    onClick={() => handleEditMode({mode: 'Background', type: 'background', component: 'connector'})}
                />
                <ConnectorOneEditBox>
                    <ConnectorOneBackground 
                        style={{borderRadius: `${styleData.connector.style.background.borderRadius}px ${styleData.connector.style.background.borderRadius}px 0 0` }}
                    />
                    <ConnectorContentWrapper>
                        <ConnectorInput
                            onChange={(e) => handleChangeTitle(e.target.value)}
                            onClick={() => handleEditMode({mode: 'Text', type: 'title', component: 'connector'})}
                            style={styleData.connector.style.title}
                            value={title}
                        />
                       <ConnectorInput
                            onChange={(e) => handleChangeSubtitle(e.target.value)}
                            onClick={() => handleEditMode({mode: 'Text', type: 'subtitle', component: 'connector'})}
                            style={styleData.connector.style.subtitle}
                            value={subtitle}
                        />
                        <ConnectorInput
                            onChange={(e) => handleChangeParagraph(e.target.value)}
                            onClick={() => handleEditMode({mode: 'Text', type: 'paragraph', component: 'connector'})}
                            style={styleData.connector.style.paragraph}
                            value={paragraph}
                        />
                    </ConnectorContentWrapper>
                    <ConnectorButtonWrapper>
                    {
                        buttonList.map((button, index) => (
                            <ButtonItems 
                                handleEditMode={handleEditMode}
                                handleChangeButtonName={handleChangeButtonName}
                                id={button.id}
                                styleData={styleData}
                                name={button.name}
                                index={index}
                                type={button.type}
                                buttonRef={buttonRef}
                                handleActiveBox={handleActiveBox}
                            />
                            // <ConnectorButton 
                            //     style={{
                            //         backgroundColor: styleData.connector.style.button.background,
                            //         color: styleData.connector.style.button.color,
                            //     }}
                            //     key={index} 
                            //     // onClick={() => handleEditMode('Connector', 'Button', button)}
                            //     onClick={() => handleEditMode({mode: 'Button', component: 'connector', buttonIndex: index})}
                            // >
                            //     <input type="text"
                            //         value={button.name}
                            //         onChange={(e) => handleChangeButtonName(index, button.id, e.target.value)}
                            //     />
                            // </ConnectorButton>
                        ))
                    }
                    </ConnectorButtonWrapper>
                </ConnectorOneEditBox>
            </ConnectorOneEditContainer> 
            : 
            <></>
        }
        </>
    )
}