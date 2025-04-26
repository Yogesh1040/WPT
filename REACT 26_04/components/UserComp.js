import React from 'react'

const UserComp = ({uname}) => {

    if(uname==="Rahul"){
       throw Error("Not A User")
    }
    return <p> {uname} login successfully</p>
     
}

export default UserComp
