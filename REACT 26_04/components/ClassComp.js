import react, { Component } from 'react';
import './extrenal.css';

class ClassComp extends Component{




    render(){
        return(
            <div >
                <h1 className='myclass'>THIS IS MY CLASS</h1>
                <h5> Name : {this.props.name}</h5>
                <h5> Post : {this.props.post}</h5>
            </div>
        )
    }
}

export default ClassComp;