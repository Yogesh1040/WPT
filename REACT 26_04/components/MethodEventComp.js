import react, { Component } from 'react';

class MethodEvenetComp extends Component{

    greet(){
        window.alert("!!! Hello !!!");
    };
    render(){
        return(
            <div>
                <button type='button' onClick={()=>this.greet()}>GREET ME</button>
            </div>
        );
    };
}

export default MethodEvenetComp;