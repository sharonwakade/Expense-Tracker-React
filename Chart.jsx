import React from "react";
import Chartlist from "./Chartlist";
import "./Chart.css";

const Chart = (props) => {

    let chartDataList = [
        {label: "jan", price: 0},
        {label: "feb", price: 0},
        {label: "mar", price: 0},
        {label: "apr", price: 0},
        {label: "may", price: 0},
        {label: "jun", price: 0},
        {label: "jul", price: 0},
        {label: "aug", price: 0},
        {label: "sep", price: 0},
        {label: "oct", price: 0},
        {label: "nov", price: 0},
        {label: "dec", price: 0},
    ];

    for(let record of props.filteredYearValue){
        let month = record.date.getMonth();
        chartDataList[month].price = record.amount + chartDataList[month].price 
    }

    let priceArray = props.filteredYearValue.map(row => row.amount);
    let maxPrice = Math.max(...priceArray);


    return(
        <div className="dFlex">
            {
                chartDataList.map(record => {
                    return(
                        <Chartlist label={record.label} value={record.price} maxPrice={maxPrice}/>

                )
               
             })
            }
        </div>
    )
}
export default Chart;
