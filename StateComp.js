import react, { Component } from 'react';

class StateComp extends Component{

    constructor(){
        super();
        this.state={
            name: "YASH",
            sal: 500000
        };
    }

    changeState(){
        this.setState({name:"ABC" ,sal: 100});
    }

    render(){
        return(
            <div>
                <p>Name : {this.state.name} //// Sal : {this.state.sal} </p>
          
                <button type='button' onClick={()=>this.changeState()}>CHANGE</button>
                <h2 onMouseOver={()=> this.setState({name:"ABC", sal : this.state.sal+200})} >Hover</h2>
                
            </div>
        )
    }
}

export default StateComp;