import React, { Component, PureComponent } from 'react'

class MyPureComp extends PureComponent {

    render() {
        console.log("this Mypure component");
        return (
            <div>
               <h1>This is MyPureComp</h1> 
               <p>
                    Institute Name:<strong>{this.props.institute}</strong><br/>
                    Fees : <strong>{this.props.fees}</strong><br/>
                 </p>
            </div>
        )
    }
}

export default MyPureComp
