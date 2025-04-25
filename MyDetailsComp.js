import react from 'react';

const MyDetailsComp = (props)=>{
    return(
        <div>
            <h4>First Name : {props.fname} </h4>
            <h4>Last Name : {props.lname}</h4>
            <h4>Contact : {props.contact}</h4>
            <h4>Email : {props.email}</h4>
            <h4>Address : {props.address}</h4>
        </div>
    )
}

export default MyDetailsComp;