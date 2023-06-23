import React, {useState} from "react";
import "./Expenseform.css"

const Expenseform = (props) =>{

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState();
    const [formView, setFormView] = useState(false);



    const submitTitle = (e) => {
        setTitle(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const dataObj = {
            title: title,
            amount: amount,
            date: new Date(date),
            id: Math.round(Math.random() * 100)
        }

        console.log(dataObj);

        props.expenseData(dataObj);

        setTitle("");
        setAmount(0);
        setDate();
        alert("Data submitted")

        setFormView(!formView);
    }
    console.log(amount);
    console.log(title);
    console.log(date);
    return(
        <div className="navbar">
            
            <div className={formView ? "dBlock" : "dNone"}>
            <form onSubmit={submitHandler}>
                <label htmlfor="title">Title</label>
                <input type="text" id="title" onChange={(e) => setTitle (e.target.value)}value={title}></input>

                <label htmlfor="amount">Amount</label>
                <input type="number" id="amount" onChange={(e) => setAmount(e.target.value)}value={amount}></input>
                <div className="Date">
                <label htmlfor="date">Date</label>
                <input type="date" id="date" onChange={(e) => setDate(e.target.value)} value={date}></input>
                </div>
                <div className="submit">
                <input type="submit" value="Add Expense"/>
                </div>
            </form>
            </div>
            
            <button onClick={() => setFormView(!formView)} className={formView ? "dNone" : "dblock"}>Add New Expense</button>
        </div>
    )
};
export default Expenseform;