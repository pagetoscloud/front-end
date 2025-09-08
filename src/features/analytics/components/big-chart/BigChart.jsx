import { 
    BigChartWrappper, ChartBackground, 
    ChartBarWrapper, ChartHeader, ContentWrapper, 
    DashedLine, DateData, 
    DateWrapper, HorizontalWrapper, 
    NumberData
} from "./BigChart.styled";
import ChartBar from "./ChartBar";

export default function BigChart({currentCollection, analyticsData}){
    const maxLengthString = (data) => {
        let length = 0;
        let stringResult = '';
        for (let i = 0; i < data.length; i++){
            if (length === 3){
                break;
            }
            stringResult += data[i];
            length++
        }
        return stringResult;
    }
    const countTotalVisitor = (data) => {
        let totalVisitor = 0;
        for (let i = 0; i < data.length; i ++){
            for (let j = 0; j < data[i].data.length; j++){
                totalVisitor += data[i].data[j].visitor;
            }
        }
        return totalVisitor;
    }
    const countMonthlyVisitor = (data) => {
        let totalVisitor = 0;
        for (let i = 0; i < data.length; i++){
            totalVisitor += data[i].visitor
        }
        return totalVisitor;
    }
    const filterLastSixMonths = (data) => {
        const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'];
        const currentDate = new Date();
        const currentMonth = monthList[currentDate.getMonth()];
        let lastSixMonths = [];
        const lengthData = data.length - 1;
        if (data){
            if (lengthData === 0){
                const total = countTotalVisitor(data);
                lastSixMonths.push({month: data[0].month, visitor: total});
            } else if (lengthData > 0){
                for (let i = lengthData; i >= 0; i--){
                    const total = countMonthlyVisitor(data[i].data);
                    lastSixMonths.push({month: data[i].month, visitor: total});
                }
                const lastIndex = lastSixMonths.length - 1;
                if (lastSixMonths[lastIndex].month !== currentMonth){
                    lastSixMonths.push({month: currentMonth, visitor: 0});
                }
            }
            lastSixMonths.reverse();
            if (lastSixMonths.length >= 1 && lastSixMonths.length < 6){
                let differentValue = lastSixMonths.length;
                for (let i = monthList.length - 1; i >= 0; i--){
                    let lastIndex = 0;
                    if (lastSixMonths.length > 1){
                        lastIndex = lastSixMonths.length - 1;
                    }
                    if (lastSixMonths[lastIndex].month === monthList[i]){
                        lastSixMonths.push({month: monthList[i - 1], visitor: 0})
                        differentValue++;
                    }
                    if (i === 1){
                        console.log('process');
                    }
                    if (i === 1 && differentValue < 6){
                        let monthLastIndex = monthList.length - 1;
                        for (let j = 0; j <= 6 - differentValue; j++){
                            lastSixMonths.push({month: monthList[monthLastIndex], visitor: 0})
                            monthLastIndex--;
                            differentValue++;
                        }
                        break;
                    }
                    if (differentValue === 6){
                        break;
                    }
                }
            }
        }
        return lastSixMonths.reverse();
    }
    const findMaxNumber = (data) => {
        let maxNumber = 0;
        for (let i = 0; i < data.length; i++){
            if (maxNumber < data[i].visitor){
                maxNumber = data[i].visitor;
            }
        }
        return Math.floor(maxNumber / 50) * 50;
    }

    const findYAxisNumber = (data) => {
        const maxNum = findMaxNumber(data);
        let yAxis;
        if (maxNum < 200){
            yAxis = [0, 50, 100, 150, 200]
        } else if (maxNum < 600){
            yAxis = [0, 150, 300, 450, 600]
        } else if (maxNum < 1000){
            yAxis = [0, 250, 500, 750, 1000]
        } else if (maxNum < 2000){
            yAxis = [0, 500, 1000, 1500, 2000]
        } else if (maxNum < 6000){
            yAxis = [0, 1500, 3000, 4500, 6000]
        } else if (maxNum < 10000){
            yAxis = [0, 2500, 5000, 7500, 10000]
        } else if (maxNum < 20000){
            yAxis = [0, 5000, 10000, 15000, 20000]
        } else if (maxNum < 60000){
            yAxis = [0, 15000, 30000, 45000, 60000]
        } else if (maxNum < 100000) {
            yAxis = [0, 25000, 50000, 75000, 100000]
        } else if (maxNum < 1000000) {
            yAxis = [0, 250000, 500000, 750000, 1000000]
        } else if (maxNum < 6000000) {
            yAxis = [0, '1,5 M', '3 M', '4.5 M', '6 M']
        } else {
            yAxis = [0, '2,5 M', '5 M', '7.5 M', '10 M']
        }
        return yAxis.reverse();
    }
    const lastSixMonths = filterLastSixMonths(analyticsData);
    const yAxis = findYAxisNumber(lastSixMonths);
    const total = countMonthlyVisitor(lastSixMonths);
    return (
        <BigChartWrappper>
            <ChartHeader>
                <h5>Last 6 Months</h5>
                <p>{total}</p>
            </ChartHeader>
            <ContentWrapper>
                <ChartBarWrapper>
                    {
                        lastSixMonths &&
                        lastSixMonths.map((list, index) => {
                            if (index % 2 === 0){
                                return (
                                    <ChartBar 
                                        key={`${index}-chartbar`}
                                        data={list.visitor}
                                        maxNumber={yAxis[0]}
                                        type={'one'}
                                    />
                                )
                            } else {
                                return (
                                    <ChartBar 
                                        key={`${index}-chartbar`}
                                        data={list.visitor}
                                        maxNumber={yAxis[0]}
                                        // type={'two'}
                                    />
                                )
                            }
                                
                        })
                    }
                </ChartBarWrapper>
                <ChartBackground>
                    {
                        yAxis.map((axis, index) => {
                            return (
                                <HorizontalWrapper key={`${index}-y-axis`}>
                                    <NumberData>{axis}</NumberData>
                                    <DashedLine />
                                </HorizontalWrapper>
                            )
                        })
                    }
                </ChartBackground>
                <DateWrapper>
                    {
                        lastSixMonths &&
                        lastSixMonths.map((list, index)=> {
                            return (
                            <DateData key={`${index}-date-list`}>
                                <p>{maxLengthString(list.month)}</p>
                            </DateData>)
                        })
                    }
                </DateWrapper>
            </ContentWrapper>
        </BigChartWrappper>
    )
}