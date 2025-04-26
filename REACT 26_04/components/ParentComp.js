import React, { Component } from 'react'
import ChildComp from './ChildComp';
import MyPureComp from './MyPureComp';
import MemoComp from './MemoComp';

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          institute:"CDAC",
          fees:100000 ,
          location:"Kothrud"  
        }
    }

    changeState(){
        this.setState((prevState)=>({institute:"Infoway CDAC",fees:prevState.fees+5000}))
    }
    
    render() {
        const {institute,fees,location} = this.state; // destructuring of state
        console.log("This is parent");
        return (
            <div>
                <h2>This is Parent component</h2>
                <p>
                    Institute Name:<strong>{institute}</strong><br/>
                    Fees : <strong>{fees}</strong><br/>
                    Location : <strong>{location}</strong> 
                 </p>
                 <button type='button' onClick={()=>this.changeState()}>
                    Update state
                 </button>
                  
                 <hr/>
                 <MyPureComp institute={institute}/> 
                 <hr/>
                 <MemoComp institute={institute}/>
                 
                 <hr/>
                 <ChildComp institute={institute} fees={fees} location={location} changeState={()=>this.changeState()}></ChildComp>
                
            </div>
        )
    }
}

export default ParentComp
