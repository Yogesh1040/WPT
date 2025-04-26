import {createBrowserRouter} from 'react-router-dom'
import StateComp from '../components/StateComp';
import LoginComp from '../layout/LoginComp';
import MainDashBoardComp from '../layout/MainDashBoardComp';
import MyImagesesComp from '../components/MyImagesComp';
import CssComp from '../components/CssComp';
import SlidingImgComp from '../tasks/SlidingImgComp';
import PageNotFoundComp from '../layout/PageNotFoundComp';

let router = createBrowserRouter([
    // {path:'',element:<LoginComp/>},
    // {path:'login', element:<LoginComp/>},
    {path:'main', element:<MainDashBoardComp/>}
    // {path:'main', element:<MainDashBoardComp/>, children:[
    //     {path:'myimg', element:<MyImagesesComp/>},
    //     {path:'state', element:<StateComp/>},
    //     {path:'css', element:<CssComp/>},
    //     {path:'sliding', element:<SlidingImgComp/>}
    // ]},
    // {path:'*', element:<PageNotFoundComp/>}
]);

export default router;