import react, { Component, Fragment } from 'react';

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
            <Fragment>
                <p>Name : {this.state.name} //// Sal : {this.state.sal} </p>
          
                <button type='button' onClick={()=>this.changeState()}>CHANGE</button>
                <h2 onMouseOver={()=> this.setState({name:"ABC", sal : this.state.sal+200})} onMouseEnter={()=> this.setState({name:"ABC", sal : this.state.sal+200})}  onMouseLeave={()=> this.setState({name:"ABC", sal : this.state.sal+200})} >Hover</h2>
                
            </Fragment>
        )
    }
}

export default StateComp;