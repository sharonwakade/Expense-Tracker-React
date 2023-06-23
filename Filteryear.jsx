import React, { useState } from "react";
import "./Filteryear.css";


const Filteryear = (props) => {
    const [filteredYear, setFilteredYear] = useState("All");
    const selectedYear = (e) => {
        e.preventDefault();
        setFilteredYear(e.target.value);

        
    }
    props.filterValue(filteredYear);
    console.log(filteredYear);
    return(
        <div className="all">

            <select onChange={selectedYear}>
            <option value="All"> All </option>
                <option value="2019"> 2019 </option>
                <option value="2020"> 2020 </option>
                <option value="2021"> 2021 </option>
                <option value="2022"> 2022 </option>
                <option value="2023"> 2023 </option>
                <option value="2023"> 2024 </option>
                <option value="2023"> 2025 </option>

            </select>
        </div>
    )
}
export default Filteryear;