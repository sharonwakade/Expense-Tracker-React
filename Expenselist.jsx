import React, {useState} from "react";
import Datelist from "./Datelist";
import "./Expenselist.css";
import Filteryear from "./Filteryear";
import Chart from "./Chart";

const Expenselist = (props) => {

    const [selectedYear, setSelectedYear] = useState();
    console.log(props.dummyData)

    const filterValue = (filteredYear) => {
        setSelectedYear(filteredYear);
    }

   let filteredYearValue =  props.dummyData.filter((raw) => {
        if(selectedYear == "All"){
            return raw
        }

        else {
            return raw.date.getFullYear() == selectedYear
        }
    })
    return(
        <div>
            <Filteryear filterValue={filterValue}/>
            <Chart filteredYearValue = {filteredYearValue}/>



            {
                filteredYearValue.map((raw) => {
                    return(
                        <div className="expenseGrid">
                            <div className="dateBox">
                                <Datelist raw={raw}/>
                            </div>
                            <div>
                                <h3>{raw.title}</h3>
                            </div>
                            <div className="amount">
                                <h5>{raw.amount}</h5>
                            </div>
                        </div>
                    )
                }
                
                )
            }
        </div>


    )
}
export default Expenselist;