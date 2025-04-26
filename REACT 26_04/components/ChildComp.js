import React from 'react'

const ChildComp = (props) => {

    const {institute,fees,location,changeState} = props; // destructuring of props 
      
    return (
        <div>
            <h2>This is child component</h2>
            <p>
                Institute Name:<strong>{institute}</strong><br/>
                Fees : <strong>{fees}</strong><br/>
                Location : <strong>{location}</strong> 
                 </p>
                 <h2 onMouseOver={changeState}>chnage state data when you hover on me</h2>
        </div>
    )
}

export default ChildComp

