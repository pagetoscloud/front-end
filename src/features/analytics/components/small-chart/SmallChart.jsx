import { 
    BigChartWrappper, ChartBackground, 
    ChartBarWrapper, ChartHeader, ContentWrapper, 
    DashedLine, DateData, 
    DateWrapper, HorizontalWrapper, 
    NumberData,
} from "./SmallChart.styled";
import ChartBar from "./ChartBar";

export default function SmallChart({analyticsData}){
    const newDate = new Date();
    const currentDate = newDate.getDate();
    // const currentMonth = newDate.getMonth(); // Months are 0-indexed in JavaScript
    const result = [];
    function getLastDateOfPreviousMonth() {
        const today = new Date();
        // Go to day 0 of the current month = last day of previous month
        return new Date(today.getFullYear(), today.getMonth(), 0);
    }
    const lastMonthDate = getLastDateOfPreviousMonth().getDate();
    const filterLastTwoWeeks = (data) => {
        if (data && data.length > 0){
            // let arrayLength = result.length;
            // const lastIndex = data.length - 1;
            const dailyData = [];
            const prevMonthDailyData = data[1] !== undefined ? data[1].data : [];
            const dailyDataLastIndex = data[0].data.length - 1;
            if (data[0].data[dailyDataLastIndex].date !== currentDate){
                dailyData.push({date: currentDate, visitor: 0})
                for (let i = data[0].data.length - 1; i >= 0; i--){
                    dailyData.push(data[0].data[i])
                }
            } else{
                for (let i = data[0].data.length - 1; i >= 0; i--){
                    dailyData.push(data[0].data[i])
                }
            }
            if (currentDate < 14 && prevMonthDailyData !== undefined && prevMonthDailyData.length > 0){
                for (let i = prevMonthDailyData.length - 1; i >= 0; i--){
                    dailyData.push(prevMonthDailyData[i]);
                }
            }
            // dailyData.reverse();
            for (let i = 0; i < dailyData.length; i++) {
                const current = dailyData[i];
                result.push({ ...current }); // Add current entry
                // arrayLength++;
                // If there's a next item, fill the gap
                    if (i < dailyData.length && dailyData[i + 1]) {
                        const next = dailyData[i + 1];
                        const gap = current.date - next.date;
                        if (current.date < next.date) {
                            let gaps = Math.abs(gap);
                            let gapToZero = current.date;
                            let count = 1;
                            let countForLastMonth = 0;
                            for (let j = 0; j < gaps; j++) {
                                if (count < gapToZero){
                                    console.log(current.date);
                                    result.push({date: current.date - count, visitor: 0});
                                    console.log(gapToZero, 'gapToZero', count);
                                    count++;
                                } else {
                                    if (countForLastMonth === 0){
                                        if (lastMonthDate === next.date){
                                            break;
                                        } else {
                                            result.push({
                                                date: lastMonthDate,
                                                visitor: 0 // repeat previous visitor count
                                            });
                                            countForLastMonth++;
                                        }
                                    } else {
                                        if ((lastMonthDate - countForLastMonth) === next.date){
                                            break;
                                        } else {
                                            result.push({
                                                date: lastMonthDate - countForLastMonth,
                                                visitor: 0 // repeat previous visitor count
                                            });
                                            countForLastMonth++;
                                        }
                                    }
                                }
                            }
                        } else {
                            for (let j = 1; j < gap; j++) {
                                result.push({
                                    date: current.date - j,
                                    visitor: 0 // repeat previous visitor count
                                });
                            }
                        }
                    }
                // } 
            }
            if (result.length > 14){
                let gap = result.length - 14;
                for (let i = 0; i < gap; i++){
                    result.pop()
                }
            }
            if (result.length < 14){
                let gap = 14 - result.length;
                for (let i = 0; i < gap; i++){
                    const lastIndex = result.length - 1;
                    if (result[lastIndex].date === 1){
                        result.push({date: lastMonthDate, visitor: 0})
                    } else {
                        result.push({date: result[lastIndex].date - 1, visitor: 0})
                    }
                }
            }
            return result.reverse();
        } else {
            for (let i = 0; i < 14; i++){
                const lastIndex = result.length - 1;
                if (result.length === 0){
                    result.push({date: currentDate, visitor: 0})
                } else {
                    if (result[lastIndex].date === 1){
                        result.push({date: lastMonthDate, visitor: 0})
                    } else {
                        result.push({date: result[lastIndex].date - 1, visitor: 0})
                        // console.log(result[lastIndex].date - 1);
                    }
                }
            }
            return result.reverse()
        }
    }
    const countTotalVisitor = (data) => {
        if (data){
            let totalVisitor = 0;
            for (let i = 0; i < data.length; i ++){
                totalVisitor += data[i].visitor;
            }
            return totalVisitor;
        }
    }
    const findMaxNumber = (data) => {
        if (data){
            let maxNumber = 0;
            for (let i = 0; i < data.length; i++){
                if (maxNumber < data[i].visitor){
                    maxNumber = data[i].visitor;
                }
            }
            console.log('maxNumber', maxNumber);
            // return Math.floor(maxNumber / 50) * 50;
            return maxNumber;
        }
    }
    const findYAxisNumber = (data) => {
        if (data){
            const maxNum = findMaxNumber(data);
            let yAxis;
            if (maxNum < 40) {
                yAxis = [0, 10, 20, 30, 40]
            } else if (maxNum < 60) {
                yAxis = [0, 15, 30, 45, 60]
            } else if (maxNum < 100) {
                yAxis = [0, 25, 50, 75, 100]
            } else if(maxNum < 200){
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
    }
    const lastTwoWeeks = filterLastTwoWeeks(analyticsData);
    const totalVisitor = countTotalVisitor(lastTwoWeeks);
    const yAxis = findYAxisNumber(lastTwoWeeks);
    return (
        <BigChartWrappper>
            <ChartHeader>
                <h5>Last 2 Weeks</h5>
                <p>{totalVisitor}</p>
            </ChartHeader>
            <ContentWrapper>
                <ChartBarWrapper>
                    {
                        lastTwoWeeks &&
                        lastTwoWeeks.map((list, index) => {
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
                                    />
                                )
                            }
                                
                        })
                    }
                </ChartBarWrapper>
                <ChartBackground>
                    {
                        yAxis &&
                        yAxis.map((axis, index) => {
                            return (
                                <HorizontalWrapper
                                    key={`${index}-y-axis`}
                                >
                                    <NumberData>{axis}</NumberData>
                                    <DashedLine />
                                </HorizontalWrapper>
                            )
                        })
                    }
                </ChartBackground>
                <DateWrapper>
                    {
                        lastTwoWeeks &&
                        lastTwoWeeks.map((list, index) => {
                            return (
                            <DateData key={`${index}-date-list`}>
                                <p>{list.date}</p>
                            </DateData>)
                        })
                    }
                </DateWrapper>
            </ContentWrapper>
        </BigChartWrappper>
    )
}