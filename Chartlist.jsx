import React from "react";

const Chartlist = (props) => {

    let barHeight = "0%";

    if (props.maxPrice > 0){
        barHeight = Math.round((props.value / props.maxPrice) * 100);
    }
    return(
        <div className="chart-bar">
            <div className="chart-bar_inner">
                <div className="chart-bar_fill" style={{height:barHeight}}>
                </div>
            </div>
            <label className="Chart-bar_label">{props.label}</label>
        </div>
    )
    
}
export default Chartlist;