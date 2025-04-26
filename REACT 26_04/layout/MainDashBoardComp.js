import React from 'react'
import { Outlet } from 'react-router-dom'
import NavComp from '../layout/NavComp'

const MainDashBoardComp = () => {
    return (
        <div className='container mt-2'>
            {/* <h2>This is MainDashBoardComp</h2> */}
            <div className='card border-primary'>
               <div className='card-header border-primary'>
                {/* <NavComp/> */}
               </div>
               <div className='card-body border-primary'>
                    {/* <Outlet/> */}
               </div>
               <div className='card-footer border-primary'>footer</div>
            </div>
           
        </div>
    )
}

export default MainDashBoardComp
