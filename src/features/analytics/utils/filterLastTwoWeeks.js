const filterLastTwoWeeks = (data) => {
        if (data && data.length > 0){
            // let arrayLength = result.length;
            // const lastIndex = data.length - 1;
            const dailyData = data[0].data;
            const prevMonthDailyData = data[1].data;
            const dailyDataLastIndex = dailyData.length - 1;
            if (currentDate < 14 && prevMonthDailyData !== undefined && prevMonthDailyData.length > 0){
                for (let i = 0; i < prevMonthDailyData.length; i++){
                    dailyData.push(prevMonthDailyData[i]);
                }
            }
            if (dailyData[dailyDataLastIndex].date !== currentDate){
                dailyData.push({date: currentDate, visitor: 0})
            }
            for (let i = 0; i < dailyData.length; i++) {
                const current = dailyData[i];
                result.push({ ...current }); // Add current entry
                console.log('current', result);
                // arrayLength++;
                // If there's a next item, fill the gap
                    if (i < dailyData.length && dailyData[i + 1]) {
                        const next = dailyData[i + 1];
                        const gap = current.date - next.date;
                        if (current.date < next.date) {
                            console.log('process');
                            let gaps = Math.abs(gap);
                            let gapToZero = currentDate;
                            let count = 1;
                            let countForLastMonth = 0;
                            for (let j = 0; j < gaps; j++) {
                                if (count < gapToZero){
                                    result.push({date: current.date - count, visitor: 0});
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
        }
}