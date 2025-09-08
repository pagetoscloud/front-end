import { useEffect, useRef, useState } from "react";
import { 
    AddButton,
        ConnectorButtonWrapper, 
        ConnectorContentWrapper, ConnectorInput, ConnectorOneBackground, ConnectorOneBackgroundHover, ConnectorOneEditBox, 
        ConnectorOneEditContainer 
} from "./ConnectorOneEdit.styled";
import { useDispatch } from "react-redux";
import { addNewButton, changeButton, changeConnectorText, deleteButton } from "../../../../features/template-editor/templateContentSlice";
import { ButtonItems } from "./ButtonItems";

export function ConnectorOneEdit({page, styleData, contentData, handleEditMode}) {
        const [title, setTitle] = useState(contentData.connector.title || 'Connector Component');
        const [subtitle, setSubtitle] = useState(contentData.connector.subtitle || 'This is a connector component that can be used to connect different parts of your application.');
        const [paragraph, setParagraph] = useState(contentData.connector.paragraph || 'You can customize the text and style of this component to fit your needs.');
        const [buttonList, setButtonList] = useState(contentData.connector.buttonList);
        const [activeBox, setActiveBox] = useState(false);
        const buttonRef = useRef(null);
        console.log('button list', buttonList);
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
            dispatch({
                ...changeButton({
                    component: 'connector',
                    id: id,
                    type: 'name',
                    value: value,
                }),
                meta: {record: true}
            })
        };
        const handleChangeTitle = (value) => {
            setTitle(value);
            dispatch({
                ...changeConnectorText({
                    type: 'title',
                    value: value,
                }),
                meta: {record: true}
            })
        };
        const handleChangeSubtitle = (value) => {
            setSubtitle(value);
            dispatch({
                ...changeConnectorText({
                    type: 'subtitle',
                    value: value
                }),
                meta: {record: true}
            })
        };
        const handleChangeParagraph = (value) => {
            setParagraph(value);
            dispatch({
                ...changeConnectorText({
                    type: 'paragraph',
                    value: value,
                }),
                meta: {record: true}
            })
        };
        const handleDeleteButton = (id) => {
            dispatch({
                ...deleteButton(id),
                meta: {record: true}
            });
        }
        const handleAddButton = () => {
            dispatch({
                ...addNewButton(),
                meta: {record: true}
            });
        }
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
                    <div style={{position: 'absolute', zIndex: 10, top: 10, right: 10, cursor: 'pointer'}} onClick={() => handleChangePage('page one')}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height={30}
                            width={30}
                            viewBox="0 0 24 24"
                            fill={styleData.connector.style.button.background}
                        >
                            <title>close</title>
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 1 0-1.41 1.42L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
                        </svg>
                    </div>
                    <ConnectorOneBackground 
                        style={styleData.connector.style.background} 
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
                        buttonList.length > 0 &&
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
                                handleDeleteButton={handleDeleteButton}
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
                    <AddButton onClick={handleAddButton}>Add</AddButton>
                    </ConnectorButtonWrapper>
                </ConnectorOneEditBox>
            </ConnectorOneEditContainer> 
            : 
            <></>
        }
        </>
    )
}