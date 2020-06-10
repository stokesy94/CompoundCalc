import React, { Component } from "react";
import Results from "./Results";
import "./Compound.css"

class Compound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StartingAmount: 0,
            Period: 0,
            InterestRate: 0,
            Contributions: 0,
        }
        this.changeSAHandler = this.changeSAHandler.bind(this);
        this.changePHandler = this.changePHandler.bind(this);
        this.changeIRHandler = this.changeIRHandler.bind(this);
        this.changeCHandler = this.changeCHandler.bind(this);


    }

    changeSAHandler(e) {
        this.setState({StartingAmount: e.target.value});
    }

    changePHandler(e) {
        this.setState({Period: e.target.value});
    }

    changeIRHandler(e) {
        this.setState({InterestRate: e.target.value});
    }

    changeCHandler(e) {
        this.setState({Contributions: e.target.value});
    }
    changeFVHandler(e) {
        this.setState({FinalValue: e.target.value});
    }

    Yearly() {
        const one = (this.state.StartingAmount / 1 * Math.pow((1 + this.state.InterestRate / 100 / 1), 1 * this.state.Period));
        const two = this.state.Contributions * 12/1 * ((Math.pow((1 + this.state.InterestRate / 100 / 1), 1 * this.state.Period) - 1) / (this.state.InterestRate / 100 / 1));

        return one + two;
    }

    Monthly() {
        const four = (this.state.StartingAmount / 1 * Math.pow((1 + this.state.InterestRate / 100 / 12), 12 * this.state.Period));
        const five = (this.state.Contributions / 1) * ((Math.pow((1 + this.state.InterestRate / 100 / 12), 12 * this.state.Period) - 1) / (this.state.InterestRate / 100 / 12));

        return four + five;
    }

    totalInterest() {
        let three = this.Yearly() - (this.state.StartingAmount/1 + (this.state.Contributions * 12 * this.state.Period))

        return three;
        }




    render () {

        return (

            <div className="Compound">
                <div className="inputs">
                <h2 className="slideh">Starting Amount:
                    <div className="sliders">
                        <input type="range" step="10" min="0" max="100000" value={this.state.StartingAmount} onChange={this.changeSAHandler} className="slide" />
                        <input type="number" value={this.state.StartingAmount} />
                    </div>
                </h2>
                <h2 className="slideh"v>Period (years):
                    <div className="sliders">
                         <input type="range" step="1" min="0" max="60" value={this.state.Period} onChange={this.changePHandler} className="slide" />
                         <input type="number" value={this.state.Period} />
                    </div>
                </h2>
                <h2 className="slideh">Interest Rate: (%)
                    <div className="sliders">
                        <input type="range" step=".1" min="0" max="10" value={this.state.InterestRate} onChange={this.changeIRHandler} className="slide" />
                        <input type="number" value={this.state.InterestRate} />
                    </div>
                </h2>
                <h2 className="slideh">Contributions (monthly):
                    <div className="sliders">
                        <input type="range" step="1" min="0" max="2000" value={this.state.Contributions} onChange={this.changeCHandler} className="slide" />
                        <input type="number" value={this.state.Contributions} />
                    </div>
                </h2>


                </div>

                <div>
                    <Results EBM={this.Monthly().toFixed(2)} EBY={this.Yearly().toFixed(2)} SA={this.state.StartingAmount} TC={this.state.Contributions * 12 * this.state.Period} TI={this.totalInterest().toFixed(2)}  />
                </div>
            </div>


        )
    }
}

export default Compound;