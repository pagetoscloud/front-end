import { ChartBarWrapper, ChartOne, ChartTwo } from "./ChartBar.styled";

export default function ChartBar({data, maxNumber, type}){
    const height = (data / maxNumber) * 100;
    return (
        <ChartBarWrapper>
            {
                type === 'one' ?
                <ChartOne style={{height: `${height}%`}}><p>{data}</p></ChartOne>:
                <ChartTwo style={{height: `${height}%`}}><p>{data}</p></ChartTwo>
            }
        </ChartBarWrapper>
    )
}