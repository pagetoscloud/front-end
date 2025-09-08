import { HorizontalWrapper, InputEditorWrapper, LabelText } from "../../../../../assets/Global.styled";
import { AddButton, BlurWrapper } from "./Effect.styled";
import { EffectTemplateEditor } from "../../../../../../../components";

export default function Blur({backgroundEffect, handleAddBackgroundEffect, handleChangeEffectType, handleDeleteBackgroundEffect,handleChangeBackgroundEffectValue}){
    return (
        <BlurWrapper>
            <InputEditorWrapper>
                <HorizontalWrapper>
                    <LabelText>Effect</LabelText>
                    <AddButton onClick={handleAddBackgroundEffect}>Add</AddButton>
                </HorizontalWrapper>
                {
                    backgroundEffect.map(data => {
                        return (
                            <EffectTemplateEditor 
                                listEffect={backgroundEffect}
                                effectProps={data}
                                handleChangeEffectType={handleChangeEffectType}
                                handleDeleteEffect={handleDeleteBackgroundEffect}
                                handleChangeEffectValue={handleChangeBackgroundEffectValue}
                            />
                        )
                    })
                }
            </InputEditorWrapper>
        </BlurWrapper>
    )
}