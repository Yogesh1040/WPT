import React, { Component } from "react";

class Count extends Component {

    constructor(){
        super();
        this.state ={count: 0}
    }

    increase(){
        this.setState({count : this.state.count+1});
    }

    decrease(){
        this.setState({count : this.state.count-1})
    }
    reset(){
        this.setState({count : 0})
    }


    render(){
        return(
            <div>
                <h2>Count = {this.state.count}</h2>
                <button type="button" onClick={()=>this.increase()}>INCREASE</button>
                <button type="button" onClick={()=>this.decrease()}>DECREASE</button>
                <button type="button" onClick={()=>this.reset()}>RESET</button>
            </div>
        )
    }

}

export default Count;