import react from 'react';

const FunctionComp = (props)=>{
    return(
        <div>
            <h1> This is FunctionComp </h1>
            <h6> Name : {props.name}</h6>
            <h6> Post : {props.post}</h6>
        </div>
    )
}

export default FunctionComp;