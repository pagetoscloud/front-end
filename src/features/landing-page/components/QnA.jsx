import { QnAData } from "../../../data/QnADataMockup";
import QnAItems from "./QnAItems";
import { QnAContainer, QnATitle, QnaWrapper } from "./styles/QnA.styled";

export default function QnA(){
    return (
        <QnAContainer>
            <QnATitle>QnA</QnATitle>
            <QnaWrapper>
                {
                    QnAData.map((data, index) => {
                        return (
                            <QnAItems 
                                key={index} 
                                title={data.title} 
                                paragraph={data.paragraph} 
                            />
                        );
                    })
                }
            </QnaWrapper>
        </QnAContainer>
    )
}