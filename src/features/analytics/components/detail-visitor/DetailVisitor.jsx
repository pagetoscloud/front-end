// import { current } from "@reduxjs/toolkit";
import { useState } from "react";
import { DashedLine, DataWrapper, DateData, DetailVisitorHeader, DetailVisitorWrapper, ScrollData, SelectDate, VisitorData } from "./DetailVisitor.styled";

export default function DetailVisitor({analyticsData}){
    const [currentMonth, setCurrentMonth] = useState(0);
    function getDaysInMonthByName(monthName, year) {
        const monthNames = [
            "january", "february", "march", "april", "may", "june",
            "july", "august", "september", "october", "november", "december"
        ];

        const monthIndex = monthNames.indexOf(monthName.toLowerCase());

        if (monthIndex === -1) {
            throw new Error("Invalid month name");
        }

        // Add 1 to monthIndex because getDaysInMonth expects month as 1–12
        return new Date(year, monthIndex + 1, 0).getDate();
    }
    const findMonthData = (data) => {
        if (data) {
            let monthList = [];
            if (data.length === 1){
                monthList.push(data[0].month);
            } else {
                for (let i = 0; i < data.length; i++){
                    monthList.push(data[i].month);
                }
            }
            return monthList;
        }
        return;
    } 
    const monthList = findMonthData(analyticsData);
    const findMonthlyDataVisitor = (data) => {
        const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'];
        const currentDate = new Date();
        const currentDay = currentDate.getDate();
        const currentMonthString = monthList[currentDate.getMonth()];
        if (data && data !== null && data.length > 0) {
            const monthlyData = data;
            const result = [];
            if (analyticsData.length > 0 &&  analyticsData[currentMonth].month.toLowerCase() !== currentMonthString.toLowerCase()){
                let lastDayDate = getDaysInMonthByName(analyticsData[currentMonth].month.toLowerCase(), new Date().getFullYear());
                if (monthlyData[monthlyData.length - 1].date !== lastDayDate) {
                    // lastDayDate = monthlyData[monthlyData.length - 1].date;
                    monthlyData.push({date: lastDayDate, visitor: 0});
                }
            }
            if (monthlyData.length === 1) {
                if (monthlyData[0].date !== currentDay) {
                    monthlyData.push({date: currentDay, visitor: 0});
                }
            }
            for (let i = 0; i < monthlyData.length; i++) {
              const current = monthlyData[i];
              result.push({ ...current }); // Add current entry
              // If there's a next item, fill the gap
              if (i < monthlyData.length - 1 && monthlyData[i + 1] !== undefined) {
                const next = monthlyData[i + 1];
                const gap = next.date - current.date;
                for (let j = 1; j < gap; j++) {
                  result.push({
                    date: current.date + j,
                    visitor: 0 // repeat previous visitor count
                  });
                }
              }
            }
            result.reverse(); // Reverse the result to have the latest date first
            const lastIndexResult = result.length - 1;
            if (result[lastIndexResult].date !== 1) {
                const gap = result[lastIndexResult].date;
                for (let j = 1; j < gap; j++) {
                    result.push({date: result[lastIndexResult].date - j, visitor: 0});
                }
            }
            return result;
            // return dailyVisitor;
        }
    }
    const monthlyVisitorData = findMonthlyDataVisitor(analyticsData.length > 0 ? analyticsData[currentMonth].data : null);
    return (
        <>
            {
                monthlyVisitorData &&
                <DetailVisitorWrapper>
                    <DetailVisitorHeader>
                        <p>Detail Visitor</p>
                        <SelectDate>
                            <select onChange={(e) => setCurrentMonth(e.target.value)}> 
                                {
                                    monthList &&
                                    monthList.map((list, index) => {
                                        return (
                                            <option value={index} key={`${index}-select`}>{list}</option>
                                        )
                                    })
                                }
                            </select>
                        </SelectDate>
                    </DetailVisitorHeader>
                    <ScrollData>
                    {
                        monthlyVisitorData &&
                        monthlyVisitorData.map((list, index) => {
                            return (
                                <DataWrapper key={`${index}-visitor-list`}>
                                    <DateData>{list.date} {monthList[currentMonth]}</DateData>
                                    <DashedLine />
                                    <VisitorData>{list.visitor}</VisitorData>
                                </DataWrapper>
                            )
                        })
                    }
                    </ScrollData>
                </DetailVisitorWrapper>
            }
        </>
    )
}