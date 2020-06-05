import React from "react";
import "./Results.css"

const Results = (props) => {

    return(
    <div>
        <div className="header">
            <h1>Results</h1>
        </div>

        <div className="crumpets">
            <h2 className="littleh">End Balance:
            <div><h3>Yearly Compounded</h3><input type="number" step=".1" value={props.EBY} /></div>
            <div><h3>Monthly Compounded</h3> <input type="number" step=".1" value={props.EBM} /></div></h2>

            <h2 className="littleh">Starting Amount:
            <div><input type="text" value={props.SA} /> </div></h2>

            <h2 className="littleh">Total Contributions:
            <div><input type="text" value={props.TC} /></div></h2>

            <h2 className="littleh">Total Interest:
            <div><input type="text" value={props.TI} /></div></h2>

            {/*<h2 className="littleh">Amount Needed: </h2>*/}
            {/*<div><input type="text" value={props.FV} /></div>*/}
        </div>
    </div>
    )
}

export default Results;