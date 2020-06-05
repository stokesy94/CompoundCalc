import React, { Component } from "react";
import Results from "./Results";
import "./Compound.css"

class Compound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SA: 0,
            P: 0,
            IR: 0,
            C: 0,
            FV: 0
        }
        this.changeSAHandler = this.changeSAHandler.bind(this);
        this.changePHandler = this.changePHandler.bind(this);
        this.changeIRHandler = this.changeIRHandler.bind(this);
        this.changeCHandler = this.changeCHandler.bind(this);
        this.changeFVHandler = this.changeFVHandler.bind(this);

    }

    changeSAHandler(e) {
        this.setState({SA: e.target.value});
    }

    changePHandler(e) {
        this.setState({P: e.target.value});
    }

    changeIRHandler(e) {
        this.setState({IR: e.target.value});
    }

    changeCHandler(e) {
        this.setState({C: e.target.value});
    }
    changeFVHandler(e) {
        this.setState({FV: e.target.value});
    }

    Yearly() {
        const one = (this.state.SA / 1 * Math.pow((1 + this.state.IR / 100 / 1), 1 * this.state.P));
        const two = this.state.C * 12/1 * ((Math.pow((1 + this.state.IR / 100 / 1), 1 * this.state.P) - 1) / (this.state.IR / 100 / 1));

        return one + two;
    }

    Monthly() {
        const four = (this.state.SA / 1 * Math.pow((1 + this.state.IR / 100 / 12), 12 * this.state.P));
        const five = (this.state.C / 1) * ((Math.pow((1 + this.state.IR / 100 / 12), 12 * this.state.P) - 1) / (this.state.IR / 100 / 12));

        return four + five;
    }

    totalInterest() {
        let three = this.Yearly() - (this.state.SA/1 + (this.state.C * 12 * this.state.P))

        return three;
        }

    // futureValue() {
    //     const six = this.state.FV/Math.pow((1+(this.state.IR/100/1)/12),12 * this.state.P)
    //
    //         return six;
    // }


    render () {

        return (

            <div className="Compound">
                <div className="inputs">
                <h2 className="slideh">Starting Amount:
                    <div className="sliders">
                        <input type="range" step="10" min="0" max="100000" value={this.state.SA} onChange={this.changeSAHandler} className="slide" />
                        <input type="number" value={this.state.SA} />
                    </div>
                </h2>
                <h2 className="slideh"v>Period (years):
                    <div className="sliders">
                         <input type="range" step="1" min="0" max="60" value={this.state.P} onChange={this.changePHandler} className="slide" />
                         <input type="number" value={this.state.P} />
                    </div>
                </h2>
                <h2 className="slideh">Interest Rate: (%)
                    <div className="sliders">
                        <input type="range" step=".1" min="0" max="10" value={this.state.IR} onChange={this.changeIRHandler} className="slide" />
                        <input type="number" value={this.state.IR} />
                    </div>
                </h2>
                <h2 className="slideh">Contributions (monthly):
                    <div className="sliders">
                        <input type="range" step="1" min="0" max="2000" value={this.state.C} onChange={this.changeCHandler} className="slide" />
                        <input type="number" value={this.state.C} />
                    </div>
                </h2>
                    {/*<h2 className="slideh">What you want to achieve:*/}
                    {/*    <div className="sliders">*/}
                    {/*        <input type="range" step="10" min="0" max="10000000" value={this.state.FV} onChange={this.changeFVHandler} className="slide" />*/}
                    {/*        <input type="number" value={this.state.FV} />*/}
                    {/*    </div>*/}
                    {/*</h2>*/}


                </div>

                <div>
                    <Results EBM={this.Monthly().toFixed(2)} EBY={this.Yearly().toFixed(2)} SA={this.state.SA} TC={this.state.C * 12 * this.state.P} TI={this.totalInterest().toFixed(2)}   CIR={null} />
                </div>
            </div>
        // FV={this.futureValue().toFixed(2)}

        )
    }
}

export default Compound;