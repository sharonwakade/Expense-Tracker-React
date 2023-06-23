import React from "react";

const Datelist = (props) => {

    const date = props.raw.date.getDate();
    const year = props.raw.date.getFullYear();
    const monthValue = props.raw.date.toLocaleString("en-us", {month: "long"});

    return(
        <div>
            <h6>{monthValue}</h6>
            <p>{year}</p>
            <h3>{date}</h3>
        </div>
    )
}
export default Datelist;