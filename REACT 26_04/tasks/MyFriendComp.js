import React, { Component } from "react";

class MyFriendComp extends Component{

    render(){
        return(
            <div>
                <h4>FirstName : {this.props.fname} </h4>
                <h4>LastName ; {this.props.lname} </h4>
                <h4>Contact : {this.props.contact}</h4>
                <h4>Email : {this.props.email}</h4>
                <h4>Address : {this.props.address}</h4>
            </div>
        )
    }
}

export default MyFriendComp;