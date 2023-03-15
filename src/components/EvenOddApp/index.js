import { Component } from "react";
import "./index.css"

class EvenOddApp extends Component{
    state={counter : 0}
    actionTaker = ()=>{
        let randomNum =Math.floor(Math.random() * 101)
        console.log(randomNum)
        this.setState(prevState=>({counter:prevState.counter+randomNum}))
    }
    render(){
        let {counter} = this.state
        let s
        if(counter %2 === 0 ){
            s="Count is Even"
        }
        else{
            s="Count is Odd"
        }
        return(
            <div className="container">
                <div className="inner-container">
                    <h1 className="">Count <span>{counter}</span></h1>
                    <br/>
                    <p className="paragraph">{s}</p>
                    <button className="button" onClick={this.actionTaker}>Increment</button>
                    <p className="btm-para">*Increment By Random Number Between 0 to 100</p>
                </div>
            </div>
        )
    }
}
export default EvenOddApp