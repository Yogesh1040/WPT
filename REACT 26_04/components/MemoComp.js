import React from 'react'

const MemoComp = (props) => {

    console.log("this is Memo component");
    return (
        <div>
            <h2>This is MemoComp</h2>
            <p>Institute Name:<strong>{props.institute}</strong></p>
        </div>
    )
}

// export default MemoComp;
export default React.memo(MemoComp);
